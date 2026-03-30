import type { Metadata } from "next";

import type { SiteDictionary } from "@/lib/i18n/messages";
import { defaultLocale, locales, type Locale } from "@/lib/i18n/config";
import { localeMeta } from "@/lib/i18n/locale-meta";
import { withLocalePath } from "@/lib/i18n/routing";
import { contactDetails } from "@/lib/site";

export const SITE_NAME = "Centros Ideal Andorra";

export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!url) {
    return "https://www.centrosidealandorra.com";
  }

  return url.endsWith("/") ? url.slice(0, -1) : url;
}

function absoluteUrl(path: string) {
  return `${getSiteUrl()}${path}`;
}

export function buildAlternates(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  const languages = Object.fromEntries(
    locales.map((locale) => [locale, absoluteUrl(withLocalePath(normalizedPath, locale))]),
  );

  return {
    canonical: absoluteUrl(withLocalePath(normalizedPath, defaultLocale)),
    languages,
  };
}

type PageMetadataConfig = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  imagePath?: string;
  noIndex?: boolean;
};

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  imagePath = "/images/pages/hero/inicial/hero-cabina-premium-illa-carlemany.mp4",
  noIndex = false,
}: PageMetadataConfig): Metadata {
  const localizedPath = withLocalePath(path, locale);
  const url = absoluteUrl(localizedPath);
  const imageUrl = absoluteUrl(imagePath);

  return {
    title,
    description,
    alternates: buildAlternates(path),
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${SITE_NAME}`,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: localeMeta[locale].languageTag,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : undefined,
  };
}

export function buildLocalBusinessSchema(locale: Locale, dictionary: SiteDictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": absoluteUrl(withLocalePath("/", defaultLocale)),
    name: SITE_NAME,
    url: absoluteUrl(withLocalePath("/", locale)),
    image: absoluteUrl("/images/pages/hero/inicial/hero-cabina-premium-illa-carlemany.mp4"),
    telephone: contactDetails.phoneIntl,
    email: contactDetails.email,
    description: dictionary.seo.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactDetails.address,
      addressLocality: "Escaldes-Engordany",
      postalCode: "AD700",
      addressCountry: "AD",
    },
    areaServed: {
      "@type": "Country",
      name: "Andorra",
    },
    hasMap: contactDetails.mapsPlaceUrl,
    availableLanguage: locales,
    priceRange: "EUR",
    inLanguage: localeMeta[locale].languageTag,
  };
}

export function buildWebSiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: absoluteUrl(withLocalePath("/", locale)),
    inLanguage: locale,
  };
}
