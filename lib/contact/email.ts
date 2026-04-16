import type { Locale } from "@/lib/i18n/config";

export type ContactReasonId =
  | "valoracion"
  | "tratamiento"
  | "seguimiento"
  | "presupuesto"
  | "colaboracion"
  | "otros";

export type ContactEmailPayload = {
  name: string;
  email: string;
  phone?: string;
  reason: ContactReasonId;
  message: string;
  locale?: string;
};

export type ContactValidationErrors = Partial<Record<keyof ContactEmailPayload, string>>;

export const CONTACT_REASON_LABELS_BY_LOCALE: Record<Locale, Record<ContactReasonId, string>> = {
  es: {
    valoracion: "Cita de diagnostico",
    tratamiento: "Consulta sobre tratamiento",
    seguimiento: "Seguimiento o cambio de cita",
    presupuesto: "Inversion y bonos",
    colaboracion: "Colaboracion profesional",
    otros: "Otros",
  },
  ca: {
    valoracion: "Cita de diagnosi",
    tratamiento: "Consulta sobre tractament",
    seguimiento: "Seguiment o canvi de cita",
    presupuesto: "Inversio i bons",
    colaboracion: "Col-laboracio professional",
    otros: "Altres",
  },
  fr: {
    valoracion: "Rendez-vous de diagnostic",
    tratamiento: "Demande sur un traitement",
    seguimiento: "Suivi ou changement de rendez-vous",
    presupuesto: "Investissement et forfaits",
    colaboracion: "Collaboration professionnelle",
    otros: "Autres",
  },
  en: {
    valoracion: "Diagnosis appointment",
    tratamiento: "Treatment inquiry",
    seguimiento: "Follow-up or appointment change",
    presupuesto: "Investment and packages",
    colaboracion: "Professional collaboration",
    otros: "Other",
  },
  uk: {
    valoracion: "Початкова консультація",
    tratamiento: "Запит щодо процедури",
    seguimiento: "Супровід або зміна запису",
    presupuesto: "Орієнтовний бюджет",
    colaboracion: "Професійна співпраця",
    otros: "Інше",
  },
  ru: {
    valoracion: "Первичная консультация",
    tratamiento: "Запрос по процедуре",
    seguimiento: "Сопровождение или перенос записи",
    presupuesto: "Ориентировочный бюджет",
    colaboracion: "Профессиональное сотрудничество",
    otros: "Другое",
  },
};

export const CONTACT_REASON_LABELS = CONTACT_REASON_LABELS_BY_LOCALE.es;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactEmailPayload(payload: ContactEmailPayload): ContactValidationErrors {
  const locale = (payload.locale as Locale | undefined) ?? "es";
  const isCatalan = locale === "ca";
  const isFrench = locale === "fr";
  const isEnglish = locale === "en";
  const isUkrainian = locale === "uk";
  const isRussian = locale === "ru";
  const errors: ContactValidationErrors = {};

  if (!payload.name || payload.name.trim().length < 2) {
    errors.name = isCatalan
      ? "Introdueix el teu nom complet."
      : isFrench
        ? "Saisissez votre nom complet."
        : isEnglish
          ? "Please enter your full name."
          : isUkrainian
            ? "Вкажіть ваше повне ім'я."
            : isRussian
              ? "Укажите ваше полное имя."
              : "Introduce tu nombre completo.";
  }

  if (!payload.email || !emailPattern.test(payload.email.trim())) {
    errors.email = isCatalan
      ? "Introdueix un correu valid."
      : isFrench
        ? "Saisissez un email valide."
        : isEnglish
          ? "Please enter a valid email address."
          : isUkrainian
            ? "Вкажіть коректну електронну адресу."
            : isRussian
              ? "Укажите корректный email."
              : "Introduce un email valido.";
  }

  if (payload.phone && payload.phone.replace(/\D+/g, "").length < 6) {
    errors.phone = isCatalan
      ? "El telefon sembla incomplet."
      : isFrench
        ? "Le numero semble incomplet."
        : isEnglish
          ? "The phone number seems incomplete."
          : isUkrainian
            ? "Номер телефону виглядає неповним."
            : isRussian
              ? "Номер телефона выглядит неполным."
              : "El telefono parece incompleto.";
  }

  if (!payload.reason) {
    errors.reason = isCatalan
      ? "Selecciona un motiu de contacte."
      : isFrench
        ? "Selectionnez un motif de contact."
        : isEnglish
          ? "Select a contact reason."
          : isUkrainian
            ? "Оберіть причину звернення."
            : isRussian
              ? "Выберите причину обращения."
              : "Selecciona un motivo de contacto.";
  } else if (!(payload.reason in CONTACT_REASON_LABELS)) {
    errors.reason = isCatalan
      ? "Selecciona un motiu de contacte."
      : isFrench
        ? "Selectionnez un motif de contact."
        : isEnglish
          ? "Select a contact reason."
          : isUkrainian
            ? "Оберіть причину звернення."
            : isRussian
              ? "Выберите причину обращения."
              : "Selecciona un motivo de contacto.";
  }

  if (!payload.message || payload.message.trim().length < 12) {
    errors.message = isCatalan
      ? "Explica breument la consulta (minim 12 caracters)."
      : isFrench
        ? "Decrivez brièvement votre demande (minimum 12 caracteres)."
        : isEnglish
          ? "Please describe your request briefly (minimum 12 characters)."
          : isUkrainian
            ? "Коротко опишіть запит (мінімум 12 символів)."
            : isRussian
              ? "Кратко опишите запрос (минимум 12 символов)."
              : "Explica brevemente tu consulta (minimo 12 caracteres).";
  }

  return errors;
}

export function normalizeContactPayload(payload: ContactEmailPayload): ContactEmailPayload {
  return {
    ...payload,
    name: payload.name.trim(),
    email: payload.email.trim(),
    phone: payload.phone?.trim() || undefined,
    message: payload.message.trim(),
  };
}

export function buildContactMailto(payload: ContactEmailPayload, to: string) {
  const locale = (payload.locale as Locale | undefined) ?? "es";
  const localizedReasons = CONTACT_REASON_LABELS_BY_LOCALE[locale] ?? CONTACT_REASON_LABELS_BY_LOCALE.es;
  const reasonLabel = localizedReasons[payload.reason] ?? payload.reason;
  const body = [
    `${locale === "en" ? "Name" : locale === "uk" ? "Ім'я" : locale === "ru" ? "Имя" : locale === "fr" ? "Nom" : locale === "ca" ? "Nom" : "Nombre"}: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone
      ? `${locale === "en" ? "Phone" : locale === "uk" ? "Телефон" : locale === "ru" ? "Телефон" : locale === "fr" ? "Telephone" : locale === "ca" ? "Telefon" : "Telefono"}: ${payload.phone}`
      : null,
    `${locale === "en" ? "Reason" : locale === "uk" ? "Причина" : locale === "ru" ? "Причина" : locale === "fr" ? "Motif" : locale === "ca" ? "Motiu" : "Motivo"}: ${reasonLabel}`,
    "",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");

  const subjectPrefix =
    locale === "en"
      ? "Website contact"
      : locale === "uk"
        ? "Звернення з сайту"
        : locale === "ru"
          ? "Обращение с сайта"
          : locale === "fr"
            ? "Contact site web"
            : locale === "ca"
              ? "Contacte web"
              : "Contacto web";
  const subject = `${subjectPrefix} - ${reasonLabel}`;

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildContactEmailText(payload: ContactEmailPayload) {
  const locale = (payload.locale as Locale | undefined) ?? "es";
  const localizedReasons = CONTACT_REASON_LABELS_BY_LOCALE[locale] ?? CONTACT_REASON_LABELS_BY_LOCALE.es;
  const reasonLabel = localizedReasons[payload.reason] ?? payload.reason;
  const heading =
    locale === "en"
      ? "New request from Centros Ideal Andorra website"
      : locale === "uk"
        ? "Нове звернення з сайту Centros Ideal Andorra"
        : locale === "ru"
          ? "Новое обращение с сайта Centros Ideal Andorra"
          : locale === "fr"
            ? "Nouvelle demande depuis le site de Centres Ideal Andorra"
            : locale === "ca"
              ? "Nova consulta des del web de Centres Ideal Andorra"
              : "Nueva consulta desde la web de Centros Ideal Andorra";
  const nameLabel = locale === "en" ? "Name" : locale === "uk" ? "Ім'я" : locale === "ru" ? "Имя" : locale === "fr" ? "Nom" : locale === "ca" ? "Nom" : "Nombre";
  const phoneLabel = locale === "en" ? "Phone" : locale === "uk" ? "Телефон" : locale === "ru" ? "Телефон" : locale === "fr" ? "Telephone" : locale === "ca" ? "Telefon" : "Telefono";
  const reasonLabelName = locale === "en" ? "Reason" : locale === "uk" ? "Причина" : locale === "ru" ? "Причина" : locale === "fr" ? "Motif" : locale === "ca" ? "Motiu" : "Motivo";
  const messageLabel = locale === "en" ? "Message" : locale === "uk" ? "Повідомлення" : locale === "ru" ? "Сообщение" : locale === "fr" ? "Message" : locale === "ca" ? "Missatge" : "Mensaje";

  return [
    heading,
    "",
    `${nameLabel}: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone
      ? `${phoneLabel}: ${payload.phone}`
      : `${phoneLabel}: ${locale === "en" ? "Not provided" : locale === "uk" ? "Не вказано" : locale === "ru" ? "Не указано" : locale === "fr" ? "Non indique" : locale === "ca" ? "No indicat" : "No indicado"}`,
    `${reasonLabelName}: ${reasonLabel}`,
    payload.locale ? `Locale: ${payload.locale}` : null,
    "",
    `${messageLabel}:`,
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");
}
