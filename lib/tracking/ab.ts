"use client";

const AB_VARIANT_STORAGE_PREFIX = "ideal.analytics.ab.variant.";
const AB_VARIANT_QUERY_PARAM = "variant";

function sanitizeVariant(raw: string | null) {
  if (!raw) {
    return undefined;
  }

  const trimmed = raw.trim();
  if (!trimmed) {
    return undefined;
  }

  return trimmed.slice(0, 40);
}

function getQueryVariant() {
  if (typeof window === "undefined") {
    return undefined;
  }

  const params = new URLSearchParams(window.location.search);
  return sanitizeVariant(params.get(AB_VARIANT_QUERY_PARAM));
}

export function getStoredVariant(abTest: string) {
  if (typeof window === "undefined" || !abTest) {
    return undefined;
  }

  return sanitizeVariant(
    window.localStorage.getItem(`${AB_VARIANT_STORAGE_PREFIX}${abTest}`),
  );
}

export function setStoredVariant(abTest: string, variant: string) {
  if (typeof window === "undefined" || !abTest) {
    return;
  }

  const safeVariant = sanitizeVariant(variant);
  if (!safeVariant) {
    return;
  }

  window.localStorage.setItem(`${AB_VARIANT_STORAGE_PREFIX}${abTest}`, safeVariant);
}

export function resolveAbVariant(abTest?: string, fallbackVariant?: string) {
  const queryVariant = getQueryVariant();

  if (queryVariant) {
    if (abTest) {
      setStoredVariant(abTest, queryVariant);
    }

    return queryVariant;
  }

  if (abTest) {
    const storedVariant = getStoredVariant(abTest);
    if (storedVariant) {
      return storedVariant;
    }
  }

  return sanitizeVariant(fallbackVariant ?? null);
}
