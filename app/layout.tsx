import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import ChatExperience from "@/components/chat/ChatExperience";
import CookieConsentBanner from "@/components/cookies/CookieConsentBanner";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import GlobalMotion from "@/components/GlobalMotion";
import InteractionTracker from "@/components/InteractionTracker";
import Navbar from "@/components/Navbar";
import { getDictionary } from "@/lib/i18n/messages";
import { localeMeta } from "@/lib/i18n/locale-meta";
import { withLocalePath } from "@/lib/i18n/routing";
import { getServerLocale } from "@/lib/i18n/server";
import {
  buildAlternates,
  buildLocalBusinessSchema,
  buildWebSiteSchema,
  getSiteUrl,
  SITE_NAME,
} from "@/lib/seo";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const t = getDictionary(locale);
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t.seo.title,
      template: `%s | ${SITE_NAME}`,
    },
    description: t.seo.description,
    alternates: buildAlternates("/"),
    openGraph: {
      type: "website",
      title: t.seo.title,
      description: t.seo.description,
      siteName: SITE_NAME,
      url: withLocalePath("/", locale),
    },
    twitter: {
      card: "summary_large_image",
      title: t.seo.title,
      description: t.seo.description,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getServerLocale();
  const t = getDictionary(locale);
  const localBusinessSchema = buildLocalBusinessSchema(locale, t);
  const webSiteSchema = buildWebSiteSchema(locale);

  return (
    <html lang={localeMeta[locale].languageTag} data-scroll-behavior="smooth">
      <body className={`${jakarta.variable} antialiased`}>
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <Navbar locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer />
          <GlobalMotion />
        </div>
        <ChatExperience
          locale={locale}
          copy={t.chat}
          bookingHref={withLocalePath("/reservar", locale)}
          bookCtaLabel={t.cta.book}
          whatsappCtaLabel={t.cta.whatsapp}
        />
        <FloatingActions />
        <CookieConsentBanner locale={locale} cookiesHref={withLocalePath("/legal/cookies", locale)} />
        <InteractionTracker />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <span className="sr-only">{t.brand.legalName}</span>
      </body>
    </html>
  );
}
