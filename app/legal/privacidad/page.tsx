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
    path: "/legal/privacidad",
    title: "Politica de privacidad",
    description:
      "Politica de privacidad de Centros Ideal Andorra adaptada al contexto normativo andorrano, con derechos y canales de ejercicio.",
  });
}

export default async function PrivacidadPage() {
  const { locale } = await getPageContext();
  const legal = getLegalContent(locale);

  return <LegalDocumentPage document={legal.privacy} />;
}
