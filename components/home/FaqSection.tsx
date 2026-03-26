"use client";

import { useMemo, useState } from "react";

import PremiumModal from "@/components/premium/PremiumModal";
import type { HomeFaqItem } from "@/lib/content/home-premium";

type FaqSectionProps = {
  items: HomeFaqItem[];
  closeLabel?: string;
};

export default function FaqSection({ items, closeLabel = "Cerrar" }: FaqSectionProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeItem = useMemo(
    () => items.find((item) => item.id === selectedId) ?? null,
    [items, selectedId],
  );

  return (
    <>
      <div className="mt-7 grid gap-2.5 md:grid-cols-2">
        {items.map((item, index) => (
          <article
            key={item.id}
            className="rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-3 transition-[border-color,box-shadow] duration-300 hover:border-[color:var(--color-brand)] hover:shadow-[0_16px_34px_-28px_rgba(33,17,26,0.5)] sm:px-5"
          >
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
              FAQ {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1 text-[0.92rem] leading-6 font-semibold tracking-[-0.012em] text-[color:var(--color-foreground)]">
              {item.question}
            </h3>
            <p className="mt-1 text-[0.8rem] leading-6 text-[color:var(--color-muted)]">{item.summary}</p>

            <button
              type="button"
              onClick={() => setSelectedId(item.id)}
              className="mt-3 inline-flex h-8 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-[border-color,color,transform] duration-300 hover:-translate-y-px hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
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
          <div className="space-y-4">
            <p className="text-[0.91rem] leading-7 text-[color:var(--color-muted)]">{activeItem.answerLead}</p>
            <div className="grid gap-3 lg:grid-cols-2">
              {activeItem.blocks.map((block) => (
                <section
                  key={block.title}
                  className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4"
                >
                  <h4 className="text-[0.9rem] font-semibold text-[color:var(--color-foreground)]">{block.title}</h4>
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
