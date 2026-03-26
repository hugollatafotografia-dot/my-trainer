"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/lib/i18n/config";
import { stripLocalePrefix, withLocalePath } from "@/lib/i18n/routing";
import { getUiDictionary } from "@/lib/i18n/ui";
import { navLinks } from "@/lib/site";
import { whatsappHref } from "@/lib/site";
import { TRACK_EVENTS } from "@/lib/tracking/events";
import { cn } from "@/lib/utils";

import BrandLogo from "./BrandLogo";
import Button from "./Button";
import Container from "./Container";
import LanguageSwitcher from "./LanguageSwitcher";

type NavbarProps = {
  locale: Locale;
};

export default function Navbar({ locale }: NavbarProps) {
  const pathname = usePathname();
  const cleanPathname = stripLocalePrefix(pathname);
  const t = getUiDictionary(locale);
  const primaryNav = navLinks.filter((link) => link.href !== "/reservar");

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-line)]/72 bg-[linear-gradient(180deg,rgba(248,241,239,0.96)_0%,rgba(248,241,239,0.86)_100%)] backdrop-blur-[14px]">
      <Container className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-2 py-2.5 lg:min-h-[4.85rem] lg:grid-cols-[auto_1fr_auto] lg:gap-x-5 lg:gap-y-0">
        <BrandLogo className="row-start-1 col-start-1 shrink-0" size="md" href={withLocalePath("/", locale)} showWordmark={false} />

        <nav className="no-scrollbar col-span-2 row-start-2 flex gap-4 overflow-x-auto whitespace-nowrap pb-0.5 text-[0.69rem] tracking-[0.03em] text-[color:var(--color-muted)] sm:text-[0.73rem] lg:col-span-1 lg:row-start-1 lg:justify-self-center lg:pb-0 lg:text-[0.77rem]">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={withLocalePath(link.href, locale)}
              className={cn(
                "relative pb-1.5 font-semibold uppercase transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[50%] after:-translate-x-1/2 after:bg-[color:var(--color-brand)] after:transition-transform after:duration-300",
                cleanPathname === link.href
                  ? "text-[color:var(--color-foreground)] after:scale-x-100"
                  : "after:scale-x-0 hover:text-[color:var(--color-foreground)] hover:after:scale-x-100",
              )}
            >
              {t.nav[link.key]}
            </Link>
          ))}
        </nav>

        <div className="row-start-1 col-start-2 flex items-center justify-end gap-2 lg:gap-2.5">
          <LanguageSwitcher label={t.languageLabel} currentLocale={locale} />

          <Link
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            data-track-event={TRACK_EVENTS.CLICK_WHATSAPP}
            data-track-source="navbar_whatsapp"
            data-track-label="whatsapp_header"
            data-track-href={whatsappHref}
            data-ab-test="home_cta_journey"
            data-ab-variant="v1"
            className="hidden text-[0.62rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-muted)] transition-colors duration-300 hover:text-[color:var(--color-brand)] xl:inline-flex"
          >
            {t.cta.whatsapp}
          </Link>

          <Button
            href={withLocalePath("/reservar", locale)}
            trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
            trackingSource="navbar_primary"
            trackingLabel="reservar_valoracion_header"
            abTest="home_cta_journey"
            abVariant="v1"
            className="h-[2.32rem] px-3 text-[0.58rem] font-semibold uppercase tracking-[0.09em] sm:h-[2.42rem] sm:px-4 sm:text-[0.63rem]"
          >
            {t.cta.book}
          </Button>
        </div>
      </Container>
    </header>
  );
}
