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
  en: "en-GB",
  uk: "uk-UA",
  ru: "ru-RU",
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

  const copyByLocale: Record<
    Locale,
    {
      hello: string;
      name: string;
      phone: string;
      treatment: string;
      professional: string;
      preferredDates: string;
      preferredDatesFlexible: string;
      preferredWindow: string;
      timeSlot: string;
      note: string;
    }
  > = {
    es: {
      hello: "Hola, me gustaría reservar una valoración/cita en Centres Ideal Andorra.",
      name: "Nombre",
      phone: "Telefono",
      treatment: "Tratamiento",
      professional: "Profesional",
      preferredDates: "Preferencia de dias",
      preferredDatesFlexible: "Preferencia de dias: Flexible",
      preferredWindow: "Ventana preferida",
      timeSlot: "Franja horaria",
      note: "Nota",
    },
    ca: {
      hello: "Hola, m'agradaria reservar una valoracio/cita a Centres Ideal Andorra.",
      name: "Nom",
      phone: "Telefon",
      treatment: "Tractament",
      professional: "Professional",
      preferredDates: "Preferencia de dies",
      preferredDatesFlexible: "Preferencia de dies: Flexible",
      preferredWindow: "Finestra preferida",
      timeSlot: "Franja horaria",
      note: "Nota",
    },
    fr: {
      hello: "Bonjour, je souhaite reserver une evaluation/un rendez-vous chez Centres Ideal Andorra.",
      name: "Nom",
      phone: "Telephone",
      treatment: "Traitement",
      professional: "Professionnelle",
      preferredDates: "Jours preferes",
      preferredDatesFlexible: "Jours preferes: Flexible",
      preferredWindow: "Fenetre souhaitee",
      timeSlot: "Plage horaire",
      note: "Note",
    },
    en: {
      hello: "Hello, I would like to book an assessment/appointment at Centres Ideal Andorra.",
      name: "Name",
      phone: "Phone",
      treatment: "Treatment",
      professional: "Professional",
      preferredDates: "Preferred dates",
      preferredDatesFlexible: "Preferred dates: Flexible",
      preferredWindow: "Preferred window",
      timeSlot: "Time slot",
      note: "Note",
    },
    uk: {
      hello: "Вітаю, хочу записатися на консультацію/візит у Centres Ideal Andorra.",
      name: "Ім'я",
      phone: "Телефон",
      treatment: "Процедура",
      professional: "Спеціаліст",
      preferredDates: "Бажані дати",
      preferredDatesFlexible: "Бажані дати: гнучко",
      preferredWindow: "Бажане вікно",
      timeSlot: "Часовий слот",
      note: "Нотатка",
    },
    ru: {
      hello: "Здравствуйте, хочу записаться на консультацию/визит в Centres Ideal Andorra.",
      name: "Имя",
      phone: "Телефон",
      treatment: "Процедура",
      professional: "Специалист",
      preferredDates: "Предпочтительные даты",
      preferredDatesFlexible: "Предпочтительные даты: гибко",
      preferredWindow: "Предпочтительное окно",
      timeSlot: "Временной слот",
      note: "Примечание",
    },
  };

  const copy = copyByLocale[locale];

  const lines = [
    copy.hello,
    `${copy.name}: ${data.name}`,
    data.phone ? `${copy.phone}: ${data.phone}` : null,
    `${copy.treatment}: ${data.treatment}`,
    `${copy.professional}: ${data.professional}`,
    preferredDates.length > 0
      ? `${copy.preferredDates}: ${preferredDates.join(", ")}`
      : copy.preferredDatesFlexible,
    data.flexibilityLabel ? `${copy.preferredWindow}: ${data.flexibilityLabel}` : null,
    `${copy.timeSlot}: ${data.timeSlot}`,
    data.note ? `${copy.note}: ${data.note}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  return lines;
}

export function buildWhatsappHref(number: string, message: string) {
  const cleanNumber = number.replace(/\D+/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
