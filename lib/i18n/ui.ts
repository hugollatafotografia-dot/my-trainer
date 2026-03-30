import type { Locale } from "./config";

export type UiDictionary = {
  languageLabel: string;
  nav: {
    treatments: string;
    about: string;
    results: string;
    contact: string;
    book: string;
  };
  cta: {
    book: string;
    whatsapp: string;
  };
};

const uiDictionaries: Record<Locale, UiDictionary> = {
  es: {
    languageLabel: "Idioma",
    nav: {
      treatments: "Tratamientos",
      about: "Sobre nosotros",
      results: "Resultados",
      contact: "Contacto",
      book: "Reservar",
    },
    cta: {
      book: "Reservar valoración",
      whatsapp: "WhatsApp",
    },
  },
  ca: {
    languageLabel: "Idioma",
    nav: {
      treatments: "Tractaments",
      about: "Sobre nosaltres",
      results: "Resultats",
      contact: "Contacte",
      book: "Reservar",
    },
    cta: {
      book: "Reservar valoració",
      whatsapp: "WhatsApp",
    },
  },
  fr: {
    languageLabel: "Langue",
    nav: {
      treatments: "Traitements",
      about: "À propos",
      results: "Résultats",
      contact: "Contact",
      book: "Réserver",
    },
    cta: {
      book: "Réserver une évaluation",
      whatsapp: "WhatsApp",
    },
  },
  en: {
    languageLabel: "Language",
    nav: {
      treatments: "Treatments",
      about: "About us",
      results: "Results",
      contact: "Contact",
      book: "Book",
    },
    cta: {
      book: "Book consultation",
      whatsapp: "WhatsApp",
    },
  },
  uk: {
    languageLabel: "Мова",
    nav: {
      treatments: "Процедури",
      about: "Про нас",
      results: "Результати",
      contact: "Контакт",
      book: "Запис",
    },
    cta: {
      book: "Записатися на консультацію",
      whatsapp: "WhatsApp",
    },
  },
  ru: {
    languageLabel: "Язык",
    nav: {
      treatments: "Процедуры",
      about: "О нас",
      results: "Результаты",
      contact: "Контакт",
      book: "Запись",
    },
    cta: {
      book: "Записаться на консультацию",
      whatsapp: "WhatsApp",
    },
  },
};

export function getUiDictionary(locale: Locale): UiDictionary {
  return uiDictionaries[locale];
}
