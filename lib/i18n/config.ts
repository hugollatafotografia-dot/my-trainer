export const locales = ["es", "ca", "fr", "en", "uk", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeCookieName = "ideal_locale";

export function isLocale(value: string | null | undefined): value is Locale {
  if (!value) {
    return false;
  }

  return locales.includes(value as Locale);
}
