"use client";

import { useMemo, useState } from "react";

import type { HomeModalItem } from "@/lib/content/home-premium";

import PremiumModal from "@/components/premium/PremiumModal";

type FirstVisitSectionProps = {
  items: HomeModalItem[];
  closeLabel?: string;
};

export default function FirstVisitSection({ items, closeLabel = "Cerrar" }: FirstVisitSectionProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeItem = useMemo(
    () => items.find((item) => item.id === selectedId) ?? null,
    [items, selectedId],
  );

  return (
    <>
      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <article key={item.id} className="surface-card rounded-[1.35rem] px-5 py-5 sm:px-6">
            <h3 className="text-[1rem] font-semibold tracking-[-0.012em] text-[color:var(--color-foreground)]">{item.title}</h3>
            <p className="mt-2 text-[0.87rem] leading-7 text-[color:var(--color-muted)]">{item.summary}</p>

            <button
              type="button"
              onClick={() => setSelectedId(item.id)}
              className="mt-4 inline-flex h-9 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3.5 text-[0.67rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-[border-color,color,transform] duration-300 hover:-translate-y-px hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
            >
              {item.ctaLabel}
            </button>
          </article>
        ))}
      </div>

      <PremiumModal
        open={Boolean(activeItem)}
        onClose={() => setSelectedId(null)}
        label={activeItem?.modalLabel}
        title={activeItem?.modalTitle ?? ""}
        closeLabel={closeLabel}
        size="xl"
      >
        {activeItem ? (
          <div>
            <p className="text-[0.92rem] leading-7 text-[color:var(--color-muted)]">{activeItem.modalIntro}</p>
            <div className="mt-5 grid gap-3 lg:grid-cols-2">
              {activeItem.blocks.map((block) => (
                <section
                  key={block.title}
                  className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4"
                >
                  <h4 className="text-[0.92rem] font-semibold text-[color:var(--color-foreground)]">{block.title}</h4>
                  <ul className="mt-2 space-y-2">
                    {block.lines.map((line) => (
                      <li key={line} className="text-[0.84rem] leading-6 text-[color:var(--color-muted)]">
                        {line}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        ) : null}
      </PremiumModal>
    </>
  );
}
