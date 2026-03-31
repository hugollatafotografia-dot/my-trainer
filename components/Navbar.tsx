"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { locales, type Locale } from "@/lib/i18n/config";
import { localeMeta } from "@/lib/i18n/locale-meta";
import { changeLocalePathForSwitcher, stripLocalePrefix, withLocalePath } from "@/lib/i18n/routing";
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
  const pathname = usePathname() ?? "/";
  const cleanPathname = stripLocalePrefix(pathname);
  const t = getUiDictionary(locale);
  const primaryNav = navLinks.filter((link) => link.href !== "/reservar");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileReserveHref = withLocalePath("/reservar", locale);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [isMobileMenuOpen]);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function isLinkActive(href: string) {
    if (href === "/") {
      return cleanPathname === "/";
    }

    return cleanPathname === href || cleanPathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={cn(
        "sticky top-0 border-b border-[color:var(--color-line)]/72 bg-[linear-gradient(180deg,rgba(248,241,239,0.97)_0%,rgba(248,241,239,0.9)_100%)] backdrop-blur-[14px]",
        isMobileMenuOpen ? "z-[130]" : "z-50",
      )}
    >
      <Container className="flex items-center justify-between py-2.5 lg:hidden">
        <BrandLogo className="shrink-0" size="md" href={withLocalePath("/", locale)} showWordmark={false} />

        <button
          type="button"
          aria-label={t.mobileMenu.openLabel}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] text-[color:var(--color-foreground)] transition-[border-color,color] duration-300 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
        >
          <span className="sr-only">{t.mobileMenu.openLabel}</span>
          <span className="space-y-1" aria-hidden>
            <span className="block h-0.5 w-4 rounded-full bg-current" />
            <span className="block h-0.5 w-4 rounded-full bg-current" />
            <span className="block h-0.5 w-4 rounded-full bg-current" />
          </span>
        </button>
      </Container>

      <Container className="hidden lg:grid lg:min-h-[4.85rem] lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-x-5 lg:py-2.5">
        <BrandLogo className="shrink-0" size="md" href={withLocalePath("/", locale)} showWordmark={false} />

        <nav className="flex justify-self-center gap-4 text-[0.77rem] tracking-[0.02em] text-[color:var(--color-muted)]" aria-label="Primary navigation">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={withLocalePath(link.href, locale)}
              aria-current={isLinkActive(link.href) ? "page" : undefined}
              className={cn(
                "relative inline-flex items-center pb-1.5 font-semibold uppercase transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[50%] after:-translate-x-1/2 after:bg-[color:var(--color-brand)] after:transition-transform after:duration-300",
                isLinkActive(link.href)
                  ? "text-[color:var(--color-foreground)] after:scale-x-100"
                  : "text-[color:var(--color-muted)] hover:text-[color:var(--color-foreground)] after:scale-x-0 hover:after:scale-x-100",
              )}
            >
              {t.nav[link.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2.5">
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
            href={mobileReserveHref}
            trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
            trackingSource="navbar_primary"
            trackingLabel="reservar_valoracion_header"
            abTest="home_cta_journey"
            abVariant="v1"
            className="h-[2.42rem] px-4 text-[0.63rem] font-semibold uppercase tracking-[0.08em]"
          >
            {t.nav.book}
          </Button>
        </div>
      </Container>

      <div
        className={cn(
          "fixed inset-0 z-[120] bg-[rgba(15,10,14,0.46)] backdrop-blur-[2px] transition-opacity duration-300 lg:hidden",
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <button
          type="button"
          onClick={closeMobileMenu}
          aria-label={t.mobileMenu.closeLabel}
          className="absolute inset-0"
        />

        <aside
          role="dialog"
          aria-modal="true"
          aria-label={t.mobileMenu.title}
          className={cn(
            "fixed inset-y-0 right-0 z-[121] flex h-dvh w-full flex-col border-l border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] shadow-[0_34px_80px_-48px_rgba(25,14,20,0.75)] transition-transform duration-300 sm:max-w-[23rem]",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-[color:var(--color-line)] px-4 py-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-accent)]">
              {t.mobileMenu.title}
            </p>
            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label={t.mobileMenu.closeLabel}
              className="inline-flex h-10 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] px-3.5 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)] transition-colors duration-300 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
            >
              {t.mobileMenu.closeLabel}
            </button>
          </div>

          <div className="no-scrollbar flex-1 space-y-6 overflow-y-auto px-4 py-4">
            <nav aria-label="Mobile navigation">
              <ul className="space-y-1.5">
                {primaryNav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={withLocalePath(link.href, locale)}
                      onClick={closeMobileMenu}
                      aria-current={isLinkActive(link.href) ? "page" : undefined}
                      className={cn(
                        "inline-flex h-12 w-full items-center rounded-[0.95rem] px-4 text-[0.78rem] font-semibold uppercase tracking-[0.06em] transition-colors duration-300",
                        isLinkActive(link.href)
                          ? "bg-[color:var(--color-brand)] text-white"
                          : "text-[color:var(--color-foreground)] hover:bg-[color:var(--color-pill)]",
                      )}
                    >
                      {t.nav[link.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="space-y-2 border-t border-[color:var(--color-line)] pt-4">
              <Button
                href={mobileReserveHref}
                trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
                trackingSource="navbar_mobile_menu_primary"
                trackingLabel="reservar_mobile_menu"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-12 w-full bg-[color:var(--color-brand)] text-[0.66rem] font-semibold uppercase tracking-[0.08em]"
              >
                {t.cta.book}
              </Button>

              <Button
                href={whatsappHref}
                variant="secondary"
                trackingEvent={TRACK_EVENTS.CLICK_WHATSAPP}
                trackingSource="navbar_mobile_menu_whatsapp"
                trackingLabel="whatsapp_mobile_menu"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-12 w-full text-[0.66rem] font-semibold uppercase tracking-[0.08em]"
              >
                {t.cta.whatsapp}
              </Button>
            </div>

            <div className="border-t border-[color:var(--color-line)] pt-4">
              <p className="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.11em] text-[color:var(--color-accent)]">
                {t.languageLabel}
              </p>
              <div className="grid grid-cols-3 gap-2">
                {locales.map((targetLocale) => {
                  const href = changeLocalePathForSwitcher(pathname, targetLocale);
                  const isActive = targetLocale === locale;

                  return (
                    <Link
                      key={targetLocale}
                      href={href}
                      prefetch={false}
                      onClick={(event) => {
                        if (isActive) {
                          event.preventDefault();
                          closeMobileMenu();
                          return;
                        }

                        event.preventDefault();
                        closeMobileMenu();
                        window.location.assign(href);
                      }}
                      className={cn(
                        "inline-flex h-10 items-center justify-center gap-1 rounded-[var(--radius-pill)] border px-2 text-[0.62rem] font-semibold uppercase tracking-[0.07em] transition-colors duration-300",
                        isActive
                          ? "border-[color:var(--color-brand)] bg-[color:var(--color-brand)] text-white"
                          : "border-[color:var(--color-line)] bg-[color:var(--color-surface)] text-[color:var(--color-foreground)] hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]",
                      )}
                    >
                      <span aria-hidden>{localeMeta[targetLocale].flag}</span>
                      <span>{localeMeta[targetLocale].code}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
