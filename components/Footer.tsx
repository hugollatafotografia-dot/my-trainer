import Link from "next/link";

import { contactDetails, legalLinks, navLinks } from "@/lib/site";
import { getDictionary } from "@/lib/i18n/messages";
import { withLocalePath } from "@/lib/i18n/routing";
import { getServerLocale } from "@/lib/i18n/server";
import { whatsappHref } from "@/lib/site";
import { TRACK_EVENTS } from "@/lib/tracking/events";

import BrandLogo from "./BrandLogo";
import Container from "./Container";
import CookiePreferencesButton from "./cookies/CookiePreferencesButton";

export default async function Footer() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);
  const footerNav = navLinks.filter((item) => item.href !== "/reservar");
  const cookiePreferencesLabelByLocale = {
    es: "Gestionar cookies",
    ca: "Gestionar galetes",
    fr: "Gerer les cookies",
    en: "Manage cookies",
    uk: "Керувати файлами cookie",
    ru: "Управление файлами cookie",
  } as const;
  const cookiePreferencesLabel = cookiePreferencesLabelByLocale[locale] ?? cookiePreferencesLabelByLocale.es;

  return (
    <footer className="border-t border-white/12 bg-[linear-gradient(176deg,#2f1d29_0%,#22151f_58%,#1b1119_100%)] text-white">
      <Container className="pt-7 sm:pt-8">
        <div className="rounded-[1.55rem] border border-white/14 bg-white/[0.05] px-4 py-5 shadow-[0_30px_76px_-66px_rgba(8,5,8,0.92)] backdrop-blur-[4px] sm:rounded-[1.8rem] sm:px-8 sm:py-6">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-[37rem]">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.15em] text-white/64">
                {t.footer.topEyebrow}
              </p>
              <p className="mt-3 text-[1.07rem] leading-[1.5] tracking-[-0.012em] text-white/90 sm:text-[1.18rem]">
                {t.footer.topTitle}
              </p>
            </div>

            <div className="flex flex-col gap-2.5 sm:flex-row">
              <Link
                href={withLocalePath("/reservar", locale)}
                data-track-event={TRACK_EVENTS.CLICK_RESERVAR}
                data-track-source="footer_primary"
                data-track-label="reservar_desde_footer"
                data-track-href="/reservar"
                data-ab-test="home_cta_journey"
                data-ab-variant="v1"
                className="inline-flex h-12 w-full items-center justify-center rounded-[var(--radius-pill)] border border-transparent bg-[color:var(--color-brand)] px-7 text-[0.76rem] font-semibold uppercase tracking-[0.05em] text-white transition-colors duration-200 hover:bg-[color:var(--color-brand-strong)] sm:h-[2.95rem] sm:w-auto"
                style={{ color: "#ffffff", backgroundColor: "#5b2a42" }}
              >
                {t.cta.book}
              </Link>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                data-track-event={TRACK_EVENTS.CLICK_WHATSAPP}
                data-track-source="footer_whatsapp"
                data-track-label="whatsapp_footer"
                data-track-href={whatsappHref}
                data-ab-test="home_cta_journey"
                data-ab-variant="v1"
                className="inline-flex h-12 w-full items-center justify-center rounded-[var(--radius-pill)] border border-white/28 bg-black/24 px-6 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:border-white/44 hover:bg-black/34 sm:h-[2.95rem] sm:w-auto"
              >
                {t.cta.whatsapp}
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <Container className="grid gap-7 pb-8 pt-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.85fr_0.85fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <BrandLogo
            size="lg"
            href={withLocalePath("/", locale)}
            className="text-white"
          />
          <p className="mt-4 max-w-[30rem] text-[0.86rem] leading-7 text-white/74">
            {t.footer.description}
          </p>
        </div>

        <div>
          <h2 className="text-[0.66rem] font-semibold uppercase tracking-[0.17em] text-white/62">
            {t.footer.navigation}
          </h2>
          <div className="mt-4 flex flex-col gap-1.5 text-[0.86rem] text-white/80">
            {footerNav.map((link) => (
              <Link
                key={link.href}
                href={withLocalePath(link.href, locale)}
                className="inline-flex min-h-10 items-center transition-colors duration-200 hover:text-white"
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[0.66rem] font-semibold uppercase tracking-[0.17em] text-white/62">{t.footer.legal}</h2>
          <div className="mt-4 flex flex-col gap-1.5 text-[0.86rem] text-white/80">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={withLocalePath(link.href, locale)}
                className="inline-flex min-h-10 items-center transition-colors duration-200 hover:text-white"
              >
                {t.legal[link.key]}
              </Link>
            ))}
            <CookiePreferencesButton label={cookiePreferencesLabel} />
          </div>
        </div>

        <div>
          <h2 className="text-[0.66rem] font-semibold uppercase tracking-[0.17em] text-white/62">{t.footer.contact}</h2>
          <div className="mt-4 space-y-1.5 text-[0.86rem] leading-7 text-white/78">
            <p>
              <Link
                href={`tel:${contactDetails.phoneIntl.replace(/\s+/g, "")}`}
                className="inline-flex min-h-10 items-center transition-colors duration-200 hover:text-white"
              >
                {contactDetails.phoneIntl}
              </Link>
            </p>
            <p>
              <Link
                href={`mailto:${contactDetails.email}`}
                className="inline-flex min-h-10 items-center transition-colors duration-200 hover:text-white"
              >
                {contactDetails.email}
              </Link>
            </p>
            <p>
              <Link
                href={contactDetails.mapsPlaceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center transition-colors duration-200 hover:text-white"
              >
                {t.brand.address}
              </Link>
            </p>
            <p>{t.brand.floor}</p>
          </div>
        </div>
      </Container>

      <Container className="border-t border-white/12 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-4 sm:pb-8">
        <p className="text-[0.71rem] leading-6 text-white/56">
          © {new Date().getFullYear()} {t.brand.legalName}. {t.footer.rights}
        </p>
      </Container>
    </footer>
  );
}
