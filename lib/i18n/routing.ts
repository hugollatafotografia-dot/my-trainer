import { defaultLocale, isLocale, type Locale } from "./config";

export function getLocaleFromPathname(pathname: string): Locale {
  const [, maybeLocale] = pathname.split("/");

  if (isLocale(maybeLocale)) {
    return maybeLocale;
  }

  return defaultLocale;
}

export function stripLocalePrefix(pathname: string): string {
  const parts = pathname.split("/");
  const maybeLocale = parts[1];

  if (!isLocale(maybeLocale)) {
    return pathname;
  }

  const stripped = `/${parts.slice(2).join("/")}`.replace(/\/+/g, "/");

  return stripped === "/" ? "/" : stripped.replace(/\/$/, "") || "/";
}

export function withLocalePath(path: string, locale: Locale): string {
  if (!path.startsWith("/")) {
    return path;
  }

  if (path.startsWith("/analytics")) {
    return path;
  }

  if (locale === defaultLocale) {
    return path;
  }

  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
}

export function changeLocalePath(pathname: string, targetLocale: Locale): string {
  const stripped = stripLocalePrefix(pathname);
  return withLocalePath(stripped, targetLocale);
}
