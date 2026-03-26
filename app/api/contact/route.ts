import { NextResponse } from "next/server";

import {
  buildContactEmailText,
  buildContactMailto,
  normalizeContactPayload,
  type ContactEmailPayload,
  validateContactEmailPayload,
} from "@/lib/contact/email";
import { contactDetails } from "@/lib/site";

export const runtime = "nodejs";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

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

async function sendWithResend(payload: ContactEmailPayload, destinationEmail: string) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      mode: "fallback" as const,
      message:
        "El envio directo por correo todavia no esta activo en este entorno. Puedes abrir un email prellenado sin perder la informacion.",
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
    message: "Mensaje enviado correctamente. Te responderemos lo antes posible.",
  };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return toJson({ message: "No se ha podido procesar la solicitud." }, 400);
  }

  const payload = normalizeContactPayload(parsePayload(body));
  const validationErrors = validateContactEmailPayload(payload);

  if (Object.keys(validationErrors).length > 0) {
    return toJson(
      {
        message: "Revisa los campos obligatorios y vuelve a intentarlo.",
        errors: validationErrors,
      },
      400,
    );
  }

  const destinationEmail = process.env.CONTACT_FORM_TO ?? contactDetails.email;

  try {
    const delivery = await sendWithResend(payload, destinationEmail);
    return toJson(delivery);
  } catch (error) {
    const fallbackErrorMessage = error instanceof Error ? error.message : "Unknown delivery error";
    console.error("[contact_api] email delivery error", fallbackErrorMessage);

    return toJson(
      {
        mode: "error",
        message: "No se ha podido completar el envio ahora mismo. Intentalo de nuevo en unos minutos.",
      },
      502,
    );
  }
}
