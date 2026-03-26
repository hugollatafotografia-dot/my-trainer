import { cookies } from "next/headers";
import { headers } from "next/headers";

import { defaultLocale, isLocale, localeCookieName, type Locale } from "./config";

export async function getServerLocale(): Promise<Locale> {
  const headerStore = await headers();
  const headerLocale = headerStore.get("x-ideal-locale");

  if (isLocale(headerLocale)) {
    return headerLocale;
  }

  const cookieStore = await cookies();
  const value = cookieStore.get(localeCookieName)?.value;

  if (isLocale(value)) {
    return value;
  }

  return defaultLocale;
}
