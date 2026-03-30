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
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-line)]/72 bg-[linear-gradient(180deg,rgba(248,241,239,0.97)_0%,rgba(248,241,239,0.9)_100%)] backdrop-blur-[14px]">
      <Container className="grid grid-cols-[auto_1fr_auto] items-center gap-x-2 gap-y-2 py-2.5 lg:min-h-[4.85rem] lg:grid-cols-[auto_1fr_auto] lg:gap-x-5 lg:gap-y-0 lg:py-2.5">
        <BrandLogo className="row-start-1 col-start-1 shrink-0" size="md" href={withLocalePath("/", locale)} showWordmark={false} />

        <nav
          className="no-scrollbar col-span-3 row-start-2 -mx-0.5 flex gap-1 overflow-x-auto rounded-[1rem] border border-[color:var(--color-line)]/85 bg-[color:var(--color-surface-strong)] p-1 text-[0.64rem] tracking-[0.02em] text-[color:var(--color-muted)] sm:text-[0.67rem] lg:col-span-1 lg:row-start-1 lg:mx-0 lg:justify-self-center lg:gap-4 lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:text-[0.77rem]"
          aria-label="Primary navigation"
        >
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={withLocalePath(link.href, locale)}
              className={cn(
                "relative inline-flex h-10 shrink-0 items-center rounded-[var(--radius-pill)] px-4 font-semibold uppercase transition-colors duration-200 lg:h-auto lg:rounded-none lg:px-0 lg:pb-1.5 lg:after:absolute lg:after:bottom-0 lg:after:left-1/2 lg:after:h-px lg:after:w-[50%] lg:after:-translate-x-1/2 lg:after:bg-[color:var(--color-brand)] lg:after:transition-transform lg:after:duration-300",
                cleanPathname === link.href
                  ? "bg-[color:var(--color-brand)] text-white lg:bg-transparent lg:text-[color:var(--color-foreground)] lg:after:scale-x-100"
                  : "text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] lg:after:scale-x-0 lg:hover:after:scale-x-100",
              )}
            >
              {t.nav[link.key]}
            </Link>
          ))}
        </nav>

        <div className="row-start-1 col-start-3 flex items-center justify-end gap-1.5 sm:gap-2 lg:gap-2.5">
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
            className="h-10 px-3 text-[0.58rem] font-semibold uppercase tracking-[0.08em] sm:px-4 sm:text-[0.62rem] lg:h-[2.42rem] lg:text-[0.63rem]"
          >
            {t.nav.book}
          </Button>
        </div>
      </Container>
    </header>
  );
}
