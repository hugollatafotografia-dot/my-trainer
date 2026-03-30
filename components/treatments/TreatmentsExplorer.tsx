"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import PremiumModal from "@/components/premium/PremiumModal";
import type { TreatmentCategoryId, TreatmentItem, TreatmentsCatalogContent } from "@/lib/content/treatments-catalog";
import { cn } from "@/lib/utils";

type TreatmentsExplorerProps = {
  content: TreatmentsCatalogContent;
  mode?: "home" | "page";
  bridgeHref?: string;
  bridgeLabel?: string;
  closeLabel?: string;
};

const CATEGORY_THEME: Record<
  TreatmentCategoryId,
  {
    activeButton: string;
    hoverButton: string;
    pill: string;
    accentText: string;
    cardHover: string;
    topBar: string;
  }
> = {
  "estetica-normal": {
    activeButton: "border-[#9a4565] bg-[#9a4565] text-white shadow-[0_20px_36px_-30px_rgba(154,69,101,0.76)]",
    hoverButton: "hover:border-[#9a4565]/55",
    pill: "border-[#9a4565]/35 bg-[#9a4565]/10 text-[#9a4565]",
    accentText: "text-[#9a4565]",
    cardHover: "hover:border-[#9a4565]/45 hover:shadow-[0_18px_34px_-26px_rgba(154,69,101,0.44)]",
    topBar: "bg-[#9a4565]",
  },
  "estetica-avanzada": {
    activeButton: "border-[#2f6f91] bg-[#2f6f91] text-white shadow-[0_20px_36px_-30px_rgba(47,111,145,0.76)]",
    hoverButton: "hover:border-[#2f6f91]/55",
    pill: "border-[#2f6f91]/35 bg-[#2f6f91]/10 text-[#2f6f91]",
    accentText: "text-[#2f6f91]",
    cardHover: "hover:border-[#2f6f91]/45 hover:shadow-[0_18px_34px_-26px_rgba(47,111,145,0.42)]",
    topBar: "bg-[#2f6f91]",
  },
  "estetica-regenerativa": {
    activeButton: "border-[#4f7c53] bg-[#4f7c53] text-white shadow-[0_20px_36px_-30px_rgba(79,124,83,0.76)]",
    hoverButton: "hover:border-[#4f7c53]/55",
    pill: "border-[#4f7c53]/35 bg-[#4f7c53]/10 text-[#4f7c53]",
    accentText: "text-[#4f7c53]",
    cardHover: "hover:border-[#4f7c53]/45 hover:shadow-[0_18px_34px_-26px_rgba(79,124,83,0.42)]",
    topBar: "bg-[#4f7c53]",
  },
};

function normalizeToken(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
}

function getKeywordTone(word: string) {
  const token = normalizeToken(word);

  if (["facial", "rostro", "piel", "manchas", "antimanchas"].some((item) => token.includes(item))) {
    return "text-[#2f6f91]";
  }

  if (["corporal", "cuerpo", "abdomen", "piernas", "gluteos", "espalda", "presoterapia", "maderoterapia"].some((item) =>
    token.includes(item))) {
    return "text-[#8a6533]";
  }

  if (["laser", "ipl", "hifu", "radiofrecuencia", "microneedling", "electroporacion", "hydrafacial", "led"].some((item) =>
    token.includes(item))) {
    return "text-[#2b7a78]";
  }

  if (["regener", "barrera", "sensible", "calmante", "post", "diagnostico", "rutina", "revision"].some((item) =>
    token.includes(item))) {
    return "text-[#4f7c53]";
  }

  return "text-[color:var(--color-foreground)]";
}

export default function TreatmentsExplorer({
  content,
  mode = "page",
  bridgeHref,
  bridgeLabel,
  closeLabel = "Close",
}: TreatmentsExplorerProps) {
  const initialCategory = content.categories[0]?.id;
  const [activeCategory, setActiveCategory] = useState<TreatmentCategoryId>(
    initialCategory ?? "estetica-normal",
  );
  const [showAll, setShowAll] = useState(false);
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | null>(null);

  const totalsByCategory = useMemo(
    () =>
      Object.fromEntries(
        content.categories.map((category) => [
          category.id,
          content.treatments.filter((item) => item.categoryId === category.id).length,
        ]),
      ) as Record<TreatmentCategoryId, number>,
    [content.categories, content.treatments],
  );

  const activeCategoryData = useMemo(
    () => content.categories.find((category) => category.id === activeCategory) ?? null,
    [activeCategory, content.categories],
  );

  const activeTreatments = useMemo(
    () =>
      content.treatments
        .filter((item) => item.categoryId === activeCategory)
        .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))),
    [activeCategory, content.treatments],
  );

  const selectedTreatment = useMemo<TreatmentItem | null>(
    () => content.treatments.find((item) => item.id === selectedTreatmentId) ?? null,
    [content.treatments, selectedTreatmentId],
  );

  const categoryNameById = useMemo(
    () =>
      Object.fromEntries(content.categories.map((category) => [category.id, category.name])) as Record<
        TreatmentCategoryId,
        string
      >,
    [content.categories],
  );

  const activeCategoryIndex = useMemo(
    () => content.categories.findIndex((category) => category.id === activeCategory),
    [activeCategory, content.categories],
  );

  const nextCategory = useMemo(() => {
    if (!content.categories.length || activeCategoryIndex === -1) {
      return null;
    }

    const nextIndex = (activeCategoryIndex + 1) % content.categories.length;
    return content.categories[nextIndex] ?? null;
  }, [activeCategoryIndex, content.categories]);

  const visibleLimit = mode === "home" ? 4 : 6;
  const canToggleMore = mode === "page" && activeTreatments.length > visibleLimit;
  const hiddenCount = Math.max(activeTreatments.length - visibleLimit, 0);
  const currentStep = activeCategoryIndex >= 0 ? activeCategoryIndex + 1 : 1;
  const activeTheme = CATEGORY_THEME[activeCategory];
  const nextTheme = CATEGORY_THEME[nextCategory?.id ?? activeCategory];
  const visibleTreatments =
    mode === "home" || !showAll ? activeTreatments.slice(0, visibleLimit) : activeTreatments;

  return (
    <>
      <div className="mt-7 space-y-4">
        <section className="rounded-[1.2rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
            {content.filterLabel}
          </p>
          <p className="mt-1 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">{content.explorer.guide}</p>
          <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
            {content.categories.map((category) => {
              const theme = CATEGORY_THEME[category.id];

              return (
                <span
                  key={`legend-${category.id}`}
                  className={cn(
                    "inline-flex h-7 shrink-0 items-center rounded-[var(--radius-pill)] border px-2.5 text-[0.58rem] font-semibold uppercase tracking-[0.08em]",
                    theme.pill,
                  )}
                >
                  {category.name}
                </span>
              );
            })}
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3" aria-label={content.filterLabel}>
            {content.categories.map((category) => {
              const isActive = category.id === activeCategory;
              const categoryTheme = CATEGORY_THEME[category.id];

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category.id);
                    setShowAll(false);
                  }}
                  className={cn(
                    "relative min-h-24 rounded-[1rem] border px-3.5 py-3 text-left transition-[border-color,background-color,transform,box-shadow] duration-300",
                    isActive ? categoryTheme.activeButton : `border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] text-[color:var(--color-muted)] hover:-translate-y-px ${categoryTheme.hoverButton}`,
                  )}
                >
                  <span
                    className={cn("text-[0.72rem] font-semibold uppercase tracking-[0.08em]", isActive ? "text-white" : "text-[color:var(--color-foreground)]")}
                  >
                    {category.name}
                  </span>
                  <span className={cn("mt-1 block text-[0.73rem] leading-5", isActive ? "text-white/84" : "text-[color:var(--color-muted)]")}>
                    {category.description}
                  </span>
                  <span
                    className={cn(
                      "absolute right-3 top-3 inline-flex min-w-6 items-center justify-center rounded-[var(--radius-pill)] px-1.5 py-0.5 text-[0.58rem]",
                      isActive ? "bg-white/16 text-white" : "bg-[color:var(--color-pill)] text-[color:var(--color-muted)]",
                    )}
                  >
                    {totalsByCategory[category.id]}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <article className="grid gap-3 rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p className={cn("text-[0.62rem] font-semibold uppercase tracking-[0.08em]", activeTheme.accentText)}>
              {content.explorer.activeCategoryLabel}
            </p>
            <h3 className="mt-1 text-[1rem] font-semibold text-[color:var(--color-foreground)]">{activeCategoryData?.name}</h3>
            <p className="mt-1 text-[0.82rem] leading-6 text-[color:var(--color-muted)]">{activeCategoryData?.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className={cn("inline-flex h-7 items-center rounded-[var(--radius-pill)] border px-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.08em]", activeTheme.pill)}>
                {activeTreatments.length} {content.explorer.availableTreatmentsLabel}
              </span>
              <span className="inline-flex h-7 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
                {content.explorer.stepLabel} {currentStep}/{content.categories.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              if (!nextCategory) {
                return;
              }
              setActiveCategory(nextCategory.id);
              setShowAll(false);
            }}
            disabled={!nextCategory}
            className={cn(
              "inline-flex h-11 w-full items-center justify-center rounded-[var(--radius-pill)] border bg-[color:var(--color-surface-strong)] px-4 text-[0.68rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60 lg:w-auto",
              nextTheme.pill,
            )}
          >
            {content.explorer.nextCategoryLabel}
          </button>
        </article>
      </div>

      {visibleTreatments.length > 0 ? (
        <div className={cn("mt-5 grid gap-3", mode === "home" ? "md:grid-cols-2" : "sm:grid-cols-2 xl:grid-cols-3")}>
          {visibleTreatments.map((item) => {
            const itemTheme = CATEGORY_THEME[item.categoryId];

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedTreatmentId(item.id)}
                className={cn(
                  "group surface-card relative h-full overflow-hidden rounded-[1.15rem] px-4 py-4 text-left transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-px sm:px-5",
                  itemTheme.cardHover,
                )}
              >
                <span className={cn("absolute inset-x-0 top-0 h-1", itemTheme.topBar)} aria-hidden />

                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[0.95rem] font-semibold tracking-[-0.01em] text-[color:var(--color-foreground)]">
                    <span className="inline-flex flex-wrap gap-x-1">
                      {item.name.split(" ").map((word, index) => (
                        <span key={`${item.id}-${word}-${index}`} className={cn("inline-block", getKeywordTone(word))}>
                          {word}
                        </span>
                      ))}
                    </span>
                  </h3>
                  {item.featured ? (
                    <span className={cn("inline-flex h-6 shrink-0 items-center rounded-[var(--radius-pill)] border px-2 text-[0.56rem] font-semibold uppercase tracking-[0.08em]", itemTheme.pill)}>
                      {content.explorer.featuredBadge}
                    </span>
                  ) : null}
                </div>

                <p className="mt-2 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">{item.shortDescription}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className={cn("inline-flex h-7 items-center rounded-[var(--radius-pill)] border px-2.5 text-[0.61rem] font-semibold uppercase tracking-[0.08em]", itemTheme.pill)}>
                    {item.duration}
                  </span>
                  <span className="inline-flex h-7 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-2.5 text-[0.61rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
                    {item.frequency}
                  </span>
                </div>

                <p className="mt-3 text-[0.77rem] leading-5 text-[color:var(--color-muted)]">
                  <span className={cn("font-semibold", itemTheme.accentText)}>{content.labels.objective}:</span> {item.objective}
                </p>
                <p className="mt-1 text-[0.77rem] leading-5 text-[color:var(--color-muted)]">
                  <span className={cn("font-semibold", itemTheme.accentText)}>{content.labels.candidate}:</span> {item.candidate}
                </p>

                <span className={cn("mt-4 inline-flex h-9 items-center rounded-[var(--radius-pill)] border px-3 text-[0.64rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-300", itemTheme.pill)}>
                  {item.ctaLabel}
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        <article className="mt-6 rounded-[1.1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">
          {content.explorer.emptyStateLabel}
        </article>
      )}

      {canToggleMore ? (
        <div className="mt-5">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex h-11 w-full items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-colors duration-300 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)] sm:w-auto"
          >
            {showAll ? content.explorer.showLessLabel : `${content.explorer.showMoreLabel} (+${hiddenCount})`}
          </button>
        </div>
      ) : null}

      {mode === "home" && bridgeHref && bridgeLabel ? (
        <div className="mt-7">
          <Link
            href={bridgeHref}
            className="inline-flex h-11 w-full items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-colors duration-300 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)] sm:w-auto"
          >
            {bridgeLabel}
          </Link>
        </div>
      ) : null}

      <PremiumModal
        open={Boolean(selectedTreatment)}
        onClose={() => setSelectedTreatmentId(null)}
        label={selectedTreatment?.modal.label}
        title={selectedTreatment?.modal.title ?? ""}
        closeLabel={closeLabel}
        size="xl"
      >
        {selectedTreatment ? (
          <div className="space-y-5">
            <p className="text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{selectedTreatment.modal.intro}</p>

            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-[0.95rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3 py-3">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-accent)]">
                  {content.labels.category}
                </p>
                <p className="mt-1 text-[0.82rem] leading-6 text-[color:var(--color-foreground)]">
                  {categoryNameById[selectedTreatment.categoryId] ?? selectedTreatment.categoryName}
                </p>
              </div>
              <div className="rounded-[0.95rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3 py-3">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-accent)]">
                  {content.labels.objective}
                </p>
                <p className="mt-1 text-[0.82rem] leading-6 text-[color:var(--color-foreground)]">{selectedTreatment.objective}</p>
              </div>
              <div className="rounded-[0.95rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3 py-3">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-accent)]">
                  {content.labels.duration}
                </p>
                <p className="mt-1 text-[0.82rem] leading-6 text-[color:var(--color-foreground)]">{selectedTreatment.duration}</p>
              </div>
              <div className="rounded-[0.95rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3 py-3">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-accent)]">
                  {content.labels.frequency}
                </p>
                <p className="mt-1 text-[0.82rem] leading-6 text-[color:var(--color-foreground)]">{selectedTreatment.frequency}</p>
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-2">
              <section className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4">
                <h4 className="text-[0.9rem] font-semibold text-[color:var(--color-foreground)]">{content.labels.consistsOf}</h4>
                <ul className="mt-2 space-y-2 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">
                  {selectedTreatment.modal.consistsOf.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4">
                <h4 className="text-[0.9rem] font-semibold text-[color:var(--color-foreground)]">{content.labels.objectives}</h4>
                <ul className="mt-2 space-y-2 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">
                  {selectedTreatment.modal.objectives.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4">
                <h4 className="text-[0.9rem] font-semibold text-[color:var(--color-foreground)]">{content.labels.zonesAndTimings}</h4>
                <ul className="mt-2 space-y-2 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">
                  {selectedTreatment.modal.zones.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                  {selectedTreatment.modal.timings.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4">
                <h4 className="text-[0.9rem] font-semibold text-[color:var(--color-foreground)]">
                  {content.labels.recommendationsAndFollowUp}
                </h4>
                <ul className="mt-2 space-y-2 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">
                  {selectedTreatment.modal.recommendations.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                  {selectedTreatment.modal.followUp.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-accent)]">
                {content.labels.candidateProfile}
              </p>
              <p className="mt-1 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">{selectedTreatment.candidate}</p>
            </div>

            <div className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4">
              <h4 className="text-[0.9rem] font-semibold text-[color:var(--color-foreground)]">{content.labels.notes}</h4>
              <ul className="mt-2 space-y-2 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">
                {selectedTreatment.modal.notes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </PremiumModal>
    </>
  );
}
