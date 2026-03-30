import type { Metadata } from "next";

import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { getLegalContent } from "@/lib/content/legal-content";
import { getPageContext } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n/messages";
import { getServerLocale } from "@/lib/i18n/server";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const t = getDictionary(locale);

  return buildPageMetadata({
    locale,
    path: "/legal/cookies",
    title: t.legalPages.cookies.title,
    description: t.legalPages.cookies.intro,
  });
}

export default async function CookiesPage() {
  const { locale } = await getPageContext();
  const legal = getLegalContent(locale);

  return <LegalDocumentPage document={legal.cookies} />;
}
