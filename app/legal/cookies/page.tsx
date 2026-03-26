import type { Metadata } from "next";

import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { getLegalContent } from "@/lib/content/legal-content";
import { getPageContext } from "@/lib/i18n";
import { getServerLocale } from "@/lib/i18n/server";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();

  return buildPageMetadata({
    locale,
    path: "/legal/cookies",
    title: "Politica de cookies",
    description:
      "Politica de cookies de Centros Ideal Andorra: categorias, consentimiento y gestion de preferencias en la web.",
  });
}

export default async function CookiesPage() {
  const { locale } = await getPageContext();
  const legal = getLegalContent(locale);

  return <LegalDocumentPage document={legal.cookies} />;
}
