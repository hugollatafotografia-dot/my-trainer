import Link from "next/link";

import { TRACK_EVENTS } from "@/lib/tracking/events";

export default function FloatingActions() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40">
      <Link
        href="https://wa.me/376600000"
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto inline-flex h-[3.1rem] w-[3.1rem] items-center justify-center rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-brand)] text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_18px_42px_-26px_rgba(42,20,31,0.82)] transition-colors duration-200 hover:bg-[color:var(--color-brand-strong)] md:hidden"
        data-track-event={TRACK_EVENTS.CLICK_WHATSAPP}
        data-track-source="floating_whatsapp"
        data-track-label="whatsapp_flotante"
        data-track-href="https://wa.me/376600000"
        data-ab-test="home_cta_journey"
        data-ab-variant="v1"
      >
        WA
      </Link>

      <div className="pointer-events-auto hidden rounded-[1.4rem] border border-[color:var(--color-line)] bg-[linear-gradient(170deg,rgba(255,252,253,0.9)_0%,rgba(247,238,242,0.9)_100%)] p-2 shadow-[0_24px_58px_-44px_rgba(37,20,29,0.72)] backdrop-blur-[8px] md:flex">
        <div className="flex flex-col gap-1.5">
          <Link
            href="/contacto"
            className="inline-flex h-10 items-center gap-2 rounded-[0.92rem] border border-transparent px-3.5 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-colors duration-200 hover:border-[color:var(--color-line)] hover:bg-white/78"
            data-track-event={TRACK_EVENTS.CLICK_WHATSAPP}
            data-track-source="floating_assistant"
            data-track-label="abrir_asistente"
            data-track-href="/contacto"
            data-ab-test="home_cta_journey"
            data-ab-variant="v1"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-[color:var(--color-accent)]" />
            Asistente
          </Link>

          <Link
            href="https://wa.me/376600000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-[0.92rem] bg-[color:var(--color-brand)] px-4 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-[color:var(--color-brand-strong)]"
            data-track-event={TRACK_EVENTS.CLICK_WHATSAPP}
            data-track-source="floating_whatsapp"
            data-track-label="whatsapp_flotante"
            data-track-href="https://wa.me/376600000"
            data-ab-test="home_cta_journey"
            data-ab-variant="v1"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
