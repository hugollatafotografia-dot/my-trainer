import { NextResponse } from "next/server";

import {
  buildContactEmailText,
  buildContactMailto,
  normalizeContactPayload,
  type ContactEmailPayload,
  validateContactEmailPayload,
} from "@/lib/contact/email";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { contactDetails } from "@/lib/site";

export const runtime = "nodejs";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function resolveLocale(locale: string | undefined): Locale {
  return isLocale(locale) ? locale : "es";
}

function getResponseCopy(locale: Locale) {
  const copyByLocale = {
    es: {
      fallback:
        "El envio directo por correo todavia no esta activo en este entorno. Puedes abrir un email prellenado sin perder la informacion.",
      sent: "Mensaje enviado correctamente. Te responderemos lo antes posible.",
      badRequest: "No se ha podido procesar la solicitud.",
      invalidFields: "Revisa los campos obligatorios y vuelve a intentarlo.",
      sendError: "No se ha podido completar el envio ahora mismo. Intentalo de nuevo en unos minutos.",
    },
    ca: {
      fallback:
        "L'enviament directe per correu encara no esta actiu en aquest entorn. Pots obrir un correu preomplert sense perdre la informacio.",
      sent: "Missatge enviat correctament. Et respondrem tan aviat com sigui possible.",
      badRequest: "No s'ha pogut processar la sollicitud.",
      invalidFields: "Revisa els camps obligatoris i torna-ho a provar.",
      sendError: "No s'ha pogut completar l'enviament ara mateix. Torna-ho a provar en uns minuts.",
    },
    fr: {
      fallback:
        "L'envoi direct par email n'est pas encore actif dans cet environnement. Vous pouvez ouvrir un email pre-rempli sans perdre vos informations.",
      sent: "Message envoye avec succes. Nous vous repondrons au plus vite.",
      badRequest: "La requete n'a pas pu etre traitee.",
      invalidFields: "Verifiez les champs obligatoires puis reessayez.",
      sendError: "L'envoi n'a pas pu etre complete pour le moment. Reessayez dans quelques minutes.",
    },
    en: {
      fallback:
        "Direct email sending is not active in this environment yet. You can open a prefilled email without losing your information.",
      sent: "Message sent successfully. We will reply as soon as possible.",
      badRequest: "The request could not be processed.",
      invalidFields: "Please review required fields and try again.",
      sendError: "We could not complete sending right now. Please try again in a few minutes.",
    },
    uk: {
      fallback:
        "Пряме надсилання email у цьому середовищі ще не активне. Ви можете відкрити підготовлений лист без втрати інформації.",
      sent: "Повідомлення успішно надіслано. Ми відповімо якнайшвидше.",
      badRequest: "Не вдалося обробити запит.",
      invalidFields: "Перевірте обов'язкові поля та спробуйте знову.",
      sendError: "Зараз не вдалося завершити надсилання. Спробуйте ще раз за кілька хвилин.",
    },
    ru: {
      fallback:
        "Прямая отправка email в этой среде пока не активна. Вы можете открыть подготовленное письмо без потери информации.",
      sent: "Сообщение успешно отправлено. Мы ответим как можно скорее.",
      badRequest: "Не удалось обработать запрос.",
      invalidFields: "Проверьте обязательные поля и попробуйте снова.",
      sendError: "Сейчас не удалось завершить отправку. Попробуйте снова через несколько минут.",
    },
  } as const;

  return copyByLocale[locale];
}

function toJson(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

function parsePayload(payload: unknown): ContactEmailPayload {
  if (!payload || typeof payload !== "object") {
    return {
      name: "",
      email: "",
      phone: "",
      reason: "otros",
      message: "",
    };
  }

  const data = payload as Partial<ContactEmailPayload>;

  return {
    name: typeof data.name === "string" ? data.name : "",
    email: typeof data.email === "string" ? data.email : "",
    phone: typeof data.phone === "string" ? data.phone : "",
    reason: typeof data.reason === "string" ? (data.reason as ContactEmailPayload["reason"]) : "otros",
    message: typeof data.message === "string" ? data.message : "",
    locale: typeof data.locale === "string" ? data.locale : undefined,
  };
}

async function sendWithResend(payload: ContactEmailPayload, destinationEmail: string, locale: Locale) {
  const apiKey = process.env.RESEND_API_KEY;
  const copy = getResponseCopy(locale);

  if (!apiKey) {
    return {
      mode: "fallback" as const,
      message: copy.fallback,
      fallbackMailto: buildContactMailto(payload, destinationEmail),
    };
  }

  const fromAddress = process.env.CONTACT_FORM_FROM ?? "Centros Ideal Web <onboarding@resend.dev>";

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromAddress,
      to: [destinationEmail],
      reply_to: payload.email,
      subject: `Nueva consulta web · ${payload.name}`,
      text: buildContactEmailText(payload),
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Resend responded with ${response.status}: ${errorBody}`);
  }

  return {
    mode: "sent" as const,
    message: copy.sent,
  };
}

export async function POST(request: Request) {
  let body: unknown;
  let locale: Locale = "es";

  try {
    body = await request.json();
    const maybeLocale =
      body && typeof body === "object" && "locale" in body && typeof (body as { locale?: string }).locale === "string"
        ? (body as { locale?: string }).locale
        : undefined;
    locale = resolveLocale(maybeLocale);
  } catch {
    return toJson({ message: getResponseCopy(locale).badRequest }, 400);
  }

  const payload = normalizeContactPayload(parsePayload(body));
  locale = resolveLocale(payload.locale);
  const validationErrors = validateContactEmailPayload(payload);

  if (Object.keys(validationErrors).length > 0) {
    return toJson(
      {
        message: getResponseCopy(locale).invalidFields,
        errors: validationErrors,
      },
      400,
    );
  }

  const destinationEmail = process.env.CONTACT_FORM_TO ?? contactDetails.email;

  try {
    const delivery = await sendWithResend(payload, destinationEmail, locale);
    return toJson(delivery);
  } catch (error) {
    const fallbackErrorMessage = error instanceof Error ? error.message : "Unknown delivery error";
    console.error("[contact_api] email delivery error", fallbackErrorMessage);

    return toJson(
      {
        mode: "error",
        message: getResponseCopy(locale).sendError,
      },
      502,
    );
  }
}
