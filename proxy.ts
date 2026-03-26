import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { defaultLocale, isLocale, localeCookieName, type Locale } from "@/lib/i18n/config";
import { stripLocalePrefix } from "@/lib/i18n/routing";

function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];

  if (isLocale(segment)) {
    return segment;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const locale = getLocaleFromPath(pathname);
  const hasLocalePrefix = isLocale(pathname.split("/")[1]);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-ideal-locale", locale);

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
