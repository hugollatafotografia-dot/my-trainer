"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/site";
import { TRACK_EVENTS } from "@/lib/tracking/events";
import { cn } from "@/lib/utils";

import BrandLogo from "./BrandLogo";
import Button from "./Button";
import Container from "./Container";

export default function Navbar() {
  const pathname = usePathname();
  const primaryNav = navLinks.filter((link) => link.href !== "/reservar");

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-line)]/55 bg-[linear-gradient(180deg,rgba(247,239,237,0.88)_0%,rgba(247,239,237,0.72)_100%)] backdrop-blur-[12px]">
      <Container className="grid min-h-[5.05rem] gap-4 py-2.5 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-6">
        <BrandLogo className="shrink-0" size="md" />

        <nav className="flex flex-wrap justify-center gap-x-9 gap-y-2 text-[0.87rem] tracking-[0.015em] text-[color:var(--color-muted)] lg:justify-self-center">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative pb-1.5 font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-[46%] after:-translate-x-1/2 after:bg-[color:var(--color-brand)] after:transition-transform after:duration-200",
                pathname === link.href
                  ? "text-[color:var(--color-foreground)] after:scale-x-100"
                  : "after:scale-x-0 hover:text-[color:var(--color-foreground)] hover:after:scale-x-100",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-2.5 lg:justify-self-end">
          <div className="inline-flex h-[2.04rem] items-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)]/90 p-1">
            <button
              type="button"
              className="inline-flex h-[1.44rem] items-center rounded-[var(--radius-pill)] bg-[color:var(--color-brand)] px-2.5 text-[0.59rem] font-semibold tracking-[0.08em] text-white"
              aria-label="Idioma español seleccionado"
            >
              ES
            </button>
            <button
              type="button"
              className="inline-flex h-[1.44rem] items-center rounded-[var(--radius-pill)] px-2.5 text-[0.59rem] font-semibold tracking-[0.08em] text-[color:var(--color-muted)] transition-colors duration-200 hover:text-[color:var(--color-foreground)]"
              aria-label="Cambiar idioma a catalán"
            >
              CA
            </button>
          </div>

          <Link
            href="https://wa.me/376600000"
            target="_blank"
            rel="noreferrer"
            data-track-event={TRACK_EVENTS.CLICK_WHATSAPP}
            data-track-source="navbar_whatsapp"
            data-track-label="whatsapp_header"
            data-track-href="https://wa.me/376600000"
            data-ab-test="home_cta_journey"
            data-ab-variant="v1"
            className="inline-flex h-[2.06rem] items-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 text-[0.71rem] font-semibold tracking-[0.03em] text-[color:var(--color-foreground)] transition-colors duration-200 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
          >
            WhatsApp
          </Link>

          <Button
            href="/reservar"
            trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
            trackingSource="navbar_primary"
            trackingLabel="reservar_visita_header"
            abTest="home_cta_journey"
            abVariant="v1"
            className="h-[2.58rem] px-[1.34rem] text-[0.71rem] font-semibold uppercase tracking-[0.092em]"
          >
            Reservar visita
          </Button>
        </div>
      </Container>
    </header>
  );
}
