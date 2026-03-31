"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import type { TreatmentCategory, TreatmentItem, TreatmentsCatalogContent } from "@/lib/content/treatments-catalog";
import { cn } from "@/lib/utils";

type TreatmentsExplorerProps = {
  content: TreatmentsCatalogContent;
  mode?: "home" | "page";
  bridgeHref?: string;
  bridgeLabel?: string;
  closeLabel?: string;
  treatmentsBasePath?: string;
};

function categorySectionId(category: TreatmentCategory) {
  return `cat-${category.slug}`;
}

function TreatmentCard({
  item,
  relatedNames,
  ctaLabel,
  featuredLabel,
  cardRelatedLabel,
  href,
}: {
  item: TreatmentItem;
  relatedNames: string[];
  ctaLabel: string;
  featuredLabel: string;
  cardRelatedLabel: string;
  href: string;
}) {
  return (
    <article className="surface-card relative h-full rounded-[1.2rem] px-4 py-4 sm:px-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[1rem] font-semibold tracking-[-0.015em] text-[color:var(--color-foreground)]">{item.name}</h3>
        {item.featured ? (
          <span className="inline-flex h-7 shrink-0 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-brand)]/24 bg-[color:var(--color-brand-soft)] px-2.5 text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)]">
            {featuredLabel}
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-[0.87rem] leading-6 text-[color:var(--color-muted)]">{item.shortDescription}</p>
      <p className="mt-2 text-[0.83rem] leading-6 text-[color:var(--color-muted)]">{item.longDescription}</p>

      <ul className="mt-3 space-y-1 text-[0.78rem] leading-6 text-[color:var(--color-muted)]">
        {item.benefits.slice(0, 3).map((benefit) => (
          <li key={benefit} className="flex gap-2">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-brand)]" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {relatedNames.length ? (
        <p className="mt-3 text-[0.74rem] leading-6 text-[color:var(--color-muted)]">
          <span className="font-semibold text-[color:var(--color-foreground)]">{cardRelatedLabel}: </span>
          {relatedNames.join(" · ")}
        </p>
      ) : null}

      <div className="mt-4">
        <Link
          href={href}
          className="inline-flex h-10 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-brand)]/26 bg-[color:var(--color-brand-soft)] px-4 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)] transition-colors duration-300 hover:border-[color:var(--color-brand)] hover:bg-[color:var(--color-brand)] hover:text-white"
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}

export default function TreatmentsExplorer({
  content,
  mode = "page",
  bridgeHref,
  bridgeLabel,
  treatmentsBasePath = "/tratamientos",
}: TreatmentsExplorerProps) {
  const [activeCategoryId, setActiveCategoryId] = useState(content.categories[0]?.id ?? "facials");

  const treatmentsByCategory = useMemo(
    () =>
      Object.fromEntries(
        content.categories.map((category) => [
          category.id,
          content.treatments.filter((item) => item.category === category.id).sort((a, b) => a.order - b.order),
        ]),
      ) as Record<TreatmentCategory["id"], TreatmentItem[]>,
    [content.categories, content.treatments],
  );

  const treatmentNameBySlug = useMemo(
    () => new Map(content.treatments.map((item) => [item.slug, item.name])),
    [content.treatments],
  );

  const activeTreatments = useMemo(() => {
    const items = treatmentsByCategory[activeCategoryId] ?? [];
    if (mode !== "home") {
      return items;
    }

    const featured = items.filter((item) => item.featured);
    const source = featured.length >= 4 ? featured : items;
    return source.slice(0, 4);
  }, [activeCategoryId, mode, treatmentsByCategory]);

  if (mode === "home") {
    return (
      <section className="mt-7">
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
          {content.categories.map((category) => {
            const isActive = category.id === activeCategoryId;
            const count = treatmentsByCategory[category.id]?.length ?? 0;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategoryId(category.id)}
                className={cn(
                  "inline-flex h-10 shrink-0 items-center rounded-[var(--radius-pill)] border px-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-300",
                  isActive
                    ? "border-[color:var(--color-brand)] bg-[color:var(--color-brand)] text-white"
                    : "border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] text-[color:var(--color-muted)] hover:border-[color:var(--color-brand)]/48 hover:text-[color:var(--color-brand)]",
                )}
              >
                {category.name} ({count})
              </button>
            );
          })}
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {activeTreatments.map((item) => (
            <TreatmentCard
              key={item.slug}
              item={item}
              featuredLabel={content.featuredLabel}
              ctaLabel={content.cardCtaLabel}
              cardRelatedLabel={content.cardRelatedLabel}
              href={`${treatmentsBasePath}/${item.slug}`}
              relatedNames={item.relatedTreatments.map((slug) => treatmentNameBySlug.get(slug)).filter((name): name is string => Boolean(name))}
            />
          ))}
        </div>

        {bridgeHref && bridgeLabel ? (
          <div className="mt-5">
            <Link
              href={bridgeHref}
              className="inline-flex h-11 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-5 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-colors duration-300 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
            >
              {bridgeLabel}
            </Link>
          </div>
        ) : null}
      </section>
    );
  }

  return (
    <section className="mt-7 space-y-8">
      <article className="rounded-[1.35rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.11em] text-[color:var(--color-accent)]">
          {content.categoryNavLabel}
        </p>
        <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
          {content.categories.map((category) => {
            const count = treatmentsByCategory[category.id]?.length ?? 0;
            return (
              <a
                key={category.id}
                href={`#${categorySectionId(category)}`}
                className="inline-flex h-10 shrink-0 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 text-[0.63rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)] transition-colors duration-300 hover:border-[color:var(--color-brand)]/46 hover:text-[color:var(--color-brand)]"
              >
                {category.name} ({count})
              </a>
            );
          })}
        </div>
      </article>

      {content.categories.map((category) => {
        const items = treatmentsByCategory[category.id] ?? [];

        return (
          <section key={category.id} id={categorySectionId(category)} className="scroll-mt-28 space-y-4">
            <div className="rounded-[1.2rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
              <h3 className="text-[1.05rem] font-semibold tracking-[-0.015em] text-[color:var(--color-foreground)]">{category.name}</h3>
              <p className="mt-1 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">{category.description}</p>
              <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                {items.length} {content.treatmentCountLabel}
              </p>
            </div>

            {items.length ? (
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => (
                  <TreatmentCard
                    key={item.slug}
                    item={item}
                    featuredLabel={content.featuredLabel}
                    ctaLabel={content.cardCtaLabel}
                    cardRelatedLabel={content.cardRelatedLabel}
                    href={`${treatmentsBasePath}/${item.slug}`}
                    relatedNames={item.relatedTreatments
                      .map((slug) => treatmentNameBySlug.get(slug))
                      .filter((name): name is string => Boolean(name))}
                  />
                ))}
              </div>
            ) : (
              <article className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">
                {content.emptyStateLabel}
              </article>
            )}
          </section>
        );
      })}
    </section>
  );
}
