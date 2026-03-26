import type { Locale } from "@/lib/i18n/config";

export type PreBookingWhatsappData = {
  name: string;
  phone?: string;
  treatment: string;
  professional: string;
  preferredDates: string[];
  timeSlot: string;
  flexibilityLabel?: string;
  note?: string;
};

const localeMap: Record<Locale, string> = {
  es: "es-ES",
  ca: "ca-AD",
  fr: "fr-FR",
};

function formatDate(dateValue: string, locale: Locale) {
  const date = new Date(`${dateValue}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }

  return new Intl.DateTimeFormat(localeMap[locale], {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

export function buildPreBookingWhatsappMessage(data: PreBookingWhatsappData, locale: Locale) {
  const preferredDates = data.preferredDates
    .filter(Boolean)
    .map((date) => formatDate(date, locale));

  const lines = [
    "Hola, me gustaría reservar una valoración/cita en Centres Ideal Andorra.",
    `Nombre: ${data.name}`,
    data.phone ? `Telefono: ${data.phone}` : null,
    `Tratamiento: ${data.treatment}`,
    `Profesional: ${data.professional}`,
    preferredDates.length > 0
      ? `Preferencia de dias: ${preferredDates.join(", ")}`
      : "Preferencia de dias: Flexible",
    data.flexibilityLabel ? `Ventana preferida: ${data.flexibilityLabel}` : null,
    `Franja horaria: ${data.timeSlot}`,
    data.note ? `Nota: ${data.note}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return lines;
}

export function buildWhatsappHref(number: string, message: string) {
  const cleanNumber = number.replace(/\D+/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
