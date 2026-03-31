import type { MetadataRoute } from "next";

import { getTreatmentSlugs } from "@/lib/content/treatments-catalog";
import { locales } from "@/lib/i18n/config";
import { withLocalePath } from "@/lib/i18n/routing";
import { getSiteUrl } from "@/lib/seo";

const routes = [
  "/",
  "/tratamientos",
  "/sobre-nosotros",
  "/resultados",
  "/contacto",
  "/reservar",
  "/legal/aviso-legal",
  "/legal/privacidad",
  "/legal/cookies",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const treatmentRoutes = getTreatmentSlugs().map((slug) => `/tratamientos/${slug}`);
  const allRoutes = [...routes, ...treatmentRoutes];

  return allRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${siteUrl}${withLocalePath(route, locale)}`,
      lastModified: new Date(),
      changeFrequency: route === "/" ? "weekly" : route.startsWith("/tratamientos/") ? "monthly" : "monthly",
      priority: route === "/" ? 1 : route.startsWith("/tratamientos/") ? 0.75 : 0.7,
    })),
  );
}
