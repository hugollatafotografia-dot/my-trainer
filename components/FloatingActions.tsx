import Link from "next/link";

import { getDictionary } from "@/lib/i18n/messages";
import { getServerLocale } from "@/lib/i18n/server";
import { whatsappHref } from "@/lib/site";
import { TRACK_EVENTS } from "@/lib/tracking/events";

export default async function FloatingActions() {
  const locale = await getServerLocale();
  const t = getDictionary(locale);

  return (
    <div className="pointer-events-none fixed bottom-[max(0.85rem,env(safe-area-inset-bottom))] right-3 z-40 md:hidden">
      <Link
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto inline-flex h-12 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] shadow-[0_20px_44px_-30px_rgba(42,20,31,0.62)] transition-[border-color,color,transform] duration-300 hover:-translate-y-px hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)] md:h-10 md:px-5 md:text-[0.66rem]"
        data-track-event={TRACK_EVENTS.CLICK_WHATSAPP}
        data-track-source="floating_whatsapp"
        data-track-label="whatsapp_flotante"
        data-track-href={whatsappHref}
        data-ab-test="home_cta_journey"
        data-ab-variant="v1"
      >
        {t.whatsapp.floatingLabel}
      </Link>
    </div>
  );
}
