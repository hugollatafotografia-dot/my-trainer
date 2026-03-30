import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { defaultLocale, isLocale, localeCookieName, type Locale } from "@/lib/i18n/config";
import { stripLocalePrefix, withLocalePath } from "@/lib/i18n/routing";

function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];

  if (isLocale(segment)) {
    return segment;
  }

  return defaultLocale;
}

function getLocaleFromAcceptLanguage(header: string | null): Locale | null {
  if (!header) {
    return null;
  }

  const weighted = header
    .split(",")
    .map((entry) => {
      const [tag, qPart] = entry.trim().split(";q=");
      const quality = Number.parseFloat(qPart ?? "1");
      return {
        tag: tag.toLowerCase(),
        quality: Number.isFinite(quality) ? quality : 1,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const item of weighted) {
    const language = item.tag.split("-")[0];

    if (isLocale(language)) {
      return language;
    }

    if (language === "ua") {
      return "uk";
    }
  }

  return null;
}

function resolvePreferredLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(localeCookieName)?.value;
  if (isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const negotiated = getLocaleFromAcceptLanguage(request.headers.get("accept-language"));
  if (negotiated) {
    return negotiated;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = isLocale(pathname.split("/")[1]);
  const locale = hasLocalePrefix ? getLocaleFromPath(pathname) : resolvePreferredLocale(request);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-ideal-locale", locale);

  if (!hasLocalePrefix && !pathname.startsWith("/analytics") && locale !== defaultLocale) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = withLocalePath(pathname, locale);

    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set(localeCookieName, locale, { path: "/" });
    return response;
  }

  if (!hasLocalePrefix) {
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    response.cookies.set(localeCookieName, locale, { path: "/" });
    return response;
  }

  const rewrittenPath = stripLocalePrefix(pathname);

  if (locale === defaultLocale) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = rewrittenPath;

    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set(localeCookieName, locale, { path: "/" });
    return response;
  }

  const nextUrl = request.nextUrl.clone();
  nextUrl.pathname = rewrittenPath;

  const response = NextResponse.rewrite(nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
  response.cookies.set(localeCookieName, locale, { path: "/" });
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
