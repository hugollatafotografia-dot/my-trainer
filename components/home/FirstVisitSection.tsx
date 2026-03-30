"use client";

import { useMemo, useState } from "react";

import type { HomeModalItem } from "@/lib/content/home-premium";

import PremiumModal from "@/components/premium/PremiumModal";

type FirstVisitSectionProps = {
  items: HomeModalItem[];
  closeLabel?: string;
};

export default function FirstVisitSection({ items, closeLabel = "Close" }: FirstVisitSectionProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeItem = useMemo(
    () => items.find((item) => item.id === selectedId) ?? null,
    [items, selectedId],
  );

  return (
    <>
      <div className="mt-6 grid gap-3.5 sm:mt-7 sm:grid-cols-2">
        {items.map((item) => (
          <article key={item.id} className="surface-card rounded-[1.35rem] px-4 py-4 sm:px-6 sm:py-5">
            <h3 className="text-[1rem] font-semibold tracking-[-0.012em] text-[color:var(--color-foreground)] sm:text-[1.03rem]">{item.title}</h3>
            <p className="mt-2 text-[0.88rem] leading-6 text-[color:var(--color-muted)] sm:leading-7">{item.summary}</p>

            <button
              type="button"
              onClick={() => setSelectedId(item.id)}
              className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 text-[0.67rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-[border-color,color,transform] duration-300 hover:-translate-y-px hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)] sm:w-auto"
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
            <p className="text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{activeItem.modalIntro}</p>
            <div className="mt-4 grid gap-3 lg:mt-5 lg:grid-cols-2">
              {activeItem.blocks.map((block) => (
                <section
                  key={block.title}
                  className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3.5 py-3.5 sm:px-4 sm:py-4"
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
