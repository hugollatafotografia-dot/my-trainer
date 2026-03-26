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
    path: "/legal/aviso-legal",
    title: "Aviso legal",
    description:
      "Informacion legal de Centros Ideal Andorra: titularidad, condiciones de uso, propiedad intelectual y marco normativo aplicable.",
  });
}

export default async function AvisoLegalPage() {
  const { locale } = await getPageContext();
  const legal = getLegalContent(locale);

  return <LegalDocumentPage document={legal.legalNotice} />;
}
