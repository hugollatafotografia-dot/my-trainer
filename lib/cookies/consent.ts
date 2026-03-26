"use client";

export const COOKIE_CONSENT_STORAGE_KEY = "ideal.cookies.consent.v1";
export const COOKIE_CONSENT_UPDATED_EVENT = "ideal:cookie_consent_updated";
export const COOKIE_OPEN_PREFERENCES_EVENT = "ideal:cookie_open_preferences";

export type CookieConsent = {
  analytics: boolean;
  updatedAt: number;
};

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<CookieConsent>;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.updatedAt !== "number") {
      return null;
    }

    return {
      analytics: parsed.analytics,
      updatedAt: parsed.updatedAt,
    };
  } catch {
    return null;
  }
}

export function writeCookieConsent(consent: CookieConsent) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_UPDATED_EVENT, { detail: consent }));
}

export function hasAnalyticsConsent() {
  return Boolean(readCookieConsent()?.analytics);
}

export function openCookiePreferences() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new CustomEvent(COOKIE_OPEN_PREFERENCES_EVENT));
}
