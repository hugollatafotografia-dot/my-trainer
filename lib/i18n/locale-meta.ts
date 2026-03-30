import type { Locale } from "./config";

export type LocaleMeta = {
  code: string;
  shortLabel: string;
  flag: string;
  nativeName: string;
  languageTag: string;
};

export const localeMeta: Record<Locale, LocaleMeta> = {
  es: {
    code: "ES",
    shortLabel: "ES",
    flag: "🇪🇸",
    nativeName: "Español",
    languageTag: "es-AD",
  },
  ca: {
    code: "CAT",
    shortLabel: "CAT",
    flag: "🇦🇩",
    nativeName: "Català",
    languageTag: "ca-AD",
  },
  fr: {
    code: "FR",
    shortLabel: "FR",
    flag: "🇫🇷",
    nativeName: "Français",
    languageTag: "fr-AD",
  },
  en: {
    code: "EN",
    shortLabel: "EN",
    flag: "🇬🇧",
    nativeName: "English",
    languageTag: "en-GB",
  },
  uk: {
    code: "UK",
    shortLabel: "UK",
    flag: "🇺🇦",
    nativeName: "Українська",
    languageTag: "uk-UA",
  },
  ru: {
    code: "RU",
    shortLabel: "RU",
    flag: "🇷🇺",
    nativeName: "Русский",
    languageTag: "ru-RU",
  },
};
