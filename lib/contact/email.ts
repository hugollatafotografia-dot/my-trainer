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

export const CONTACT_REASON_LABELS: Record<ContactReasonId, string> = {
  valoracion: "Valoracion inicial",
  tratamiento: "Consulta sobre tratamiento",
  seguimiento: "Seguimiento o cambio de cita",
  presupuesto: "Presupuesto orientativo",
  colaboracion: "Colaboracion profesional",
  otros: "Otros",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactEmailPayload(payload: ContactEmailPayload): ContactValidationErrors {
  const errors: ContactValidationErrors = {};

  if (!payload.name || payload.name.trim().length < 2) {
    errors.name = "Introduce tu nombre completo.";
  }

  if (!payload.email || !emailPattern.test(payload.email.trim())) {
    errors.email = "Introduce un email valido.";
  }

  if (payload.phone && payload.phone.replace(/\D+/g, "").length < 6) {
    errors.phone = "El telefono parece incompleto.";
  }

  if (!payload.reason) {
    errors.reason = "Selecciona un motivo de contacto.";
  } else if (!(payload.reason in CONTACT_REASON_LABELS)) {
    errors.reason = "Selecciona un motivo de contacto.";
  }

  if (!payload.message || payload.message.trim().length < 12) {
    errors.message = "Explica brevemente tu consulta (minimo 12 caracteres).";
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
  const reasonLabel = CONTACT_REASON_LABELS[payload.reason] ?? payload.reason;
  const body = [
    `Nombre: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Telefono: ${payload.phone}` : null,
    `Motivo: ${reasonLabel}`,
    "",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");

  const subject = `Contacto web - ${reasonLabel}`;

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildContactEmailText(payload: ContactEmailPayload) {
  const reasonLabel = CONTACT_REASON_LABELS[payload.reason] ?? payload.reason;

  return [
    "Nueva consulta desde la web de Centros Ideal Andorra",
    "",
    `Nombre: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Telefono: ${payload.phone}` : "Telefono: No indicado",
    `Motivo: ${reasonLabel}`,
    payload.locale ? `Locale: ${payload.locale}` : null,
    "",
    "Mensaje:",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");
}
