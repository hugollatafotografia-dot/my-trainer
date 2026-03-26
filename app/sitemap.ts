import type { MetadataRoute } from "next";

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

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${siteUrl}${withLocalePath(route, locale)}`,
      lastModified: new Date(),
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: route === "/" ? 1 : 0.7,
    })),
  );
}
