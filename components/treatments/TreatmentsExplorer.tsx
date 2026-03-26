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

export default function TreatmentsExplorer({
  content,
  mode = "page",
  bridgeHref,
  bridgeLabel,
  closeLabel = "Cerrar",
}: TreatmentsExplorerProps) {
  const initialCategory = content.categories[0]?.id;
  const [activeCategory, setActiveCategory] = useState<TreatmentCategoryId>(
    initialCategory ?? "estetica-normal",
  );
  const [query, setQuery] = useState("");
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

  const filteredTreatments = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return content.treatments.filter((item) => {
      if (item.categoryId !== activeCategory) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      return [item.name, item.shortDescription, item.objective, item.candidate]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [activeCategory, content.treatments, query]);

  const featuredTreatments = useMemo(() => {
    const explicitFeatured = filteredTreatments.filter((item) => item.featured);
    const source = explicitFeatured.length > 0 ? explicitFeatured : filteredTreatments;
    const maxCards = mode === "home" ? 2 : 3;
    return source.slice(0, maxCards);
  }, [filteredTreatments, mode]);

  const secondaryTreatments = useMemo(() => {
    const featuredIds = new Set(featuredTreatments.map((item) => item.id));
    const rest = filteredTreatments.filter((item) => !featuredIds.has(item.id));
    return mode === "home" ? rest.slice(0, 6) : rest;
  }, [featuredTreatments, filteredTreatments, mode]);

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

  return (
    <>
      <div className="mt-7 space-y-4">
        <section className="rounded-[1.25rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">Exploracion guiada</p>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
            <article className="rounded-[0.95rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 py-3">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">Paso 1</p>
              <p className="mt-1 text-[0.76rem] font-semibold text-[color:var(--color-foreground)]">{content.filterLabel}</p>
              <p className="mt-1 text-[0.73rem] leading-5 text-[color:var(--color-muted)]">Elige una de las tres lineas principales.</p>
            </article>
            <article className="rounded-[0.95rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 py-3">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">Paso 2</p>
              <p className="mt-1 text-[0.76rem] font-semibold text-[color:var(--color-foreground)]">Busca y compara</p>
              <p className="mt-1 text-[0.73rem] leading-5 text-[color:var(--color-muted)]">Refina por nombre, objetivo o perfil de caso.</p>
            </article>
            <article className="rounded-[0.95rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 py-3">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">Paso 3</p>
              <p className="mt-1 text-[0.76rem] font-semibold text-[color:var(--color-foreground)]">{content.detailLabel}</p>
              <p className="mt-1 text-[0.73rem] leading-5 text-[color:var(--color-muted)]">Abre la ficha completa para ver protocolo y seguimiento.</p>
            </article>
          </div>
        </section>

        <div className="grid gap-2 md:grid-cols-3" aria-label={content.filterLabel}>
          {content.categories.map((category) => {
            const isActive = category.id === activeCategory;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "relative min-h-[5.8rem] rounded-[1rem] border px-3.5 py-3 text-left transition-[border-color,background-color,transform,box-shadow] duration-300",
                  isActive
                    ? "border-[color:var(--color-brand)] bg-[color:var(--color-brand)] text-white shadow-[0_24px_40px_-32px_rgba(40,18,29,0.78)]"
                    : "border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] text-[color:var(--color-muted)] hover:-translate-y-px hover:border-[color:var(--color-brand)] hover:shadow-[0_18px_34px_-28px_rgba(32,16,25,0.5)]",
                )}
              >
                <span className={cn("text-[0.72rem] font-semibold uppercase tracking-[0.08em]", isActive ? "text-white" : "text-[color:var(--color-foreground)]")}>
                  {category.name}
                </span>
                <span className={cn("mt-1 block text-[0.74rem] leading-5", isActive ? "text-white/84" : "text-[color:var(--color-muted)]")}>
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

        <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <article className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-3.5">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-accent)]">
              Categoria activa
            </p>
            <p className="mt-1 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">{activeCategoryData?.description}</p>
            <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
              {filteredTreatments.length} tratamiento(s) disponibles
            </p>
          </article>

          <label className="space-y-1.5">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
              Buscar dentro de la categoria
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Nombre o necesidad"
              className="h-10 w-full rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 text-[0.82rem] text-[color:var(--color-foreground)] focus-visible:border-[color:var(--color-brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand)]/20"
            />
          </label>
        </div>
      </div>

      {featuredTreatments.length > 0 ? (
        <>
          <p className="mt-6 text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
            {content.featuredLabel}
          </p>

          <div className={cn("mt-3 grid gap-4", mode === "home" ? "lg:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3")}>
            {featuredTreatments.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedTreatmentId(item.id)}
                className="group surface-card h-full rounded-[1.3rem] px-5 py-5 text-left transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-px hover:border-[color:var(--color-brand)] hover:shadow-[0_26px_44px_-34px_rgba(32,16,25,0.58)] sm:px-6"
              >
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                  Protocolo destacado
                </p>
                <h3 className="mt-2 text-[1.02rem] font-semibold tracking-[-0.012em] text-[color:var(--color-foreground)]">
                  {item.name}
                </h3>
                <p className="mt-2 text-[0.85rem] leading-6 text-[color:var(--color-muted)]">{item.shortDescription}</p>

                <dl className="mt-4 space-y-1.5 text-[0.8rem] leading-6 text-[color:var(--color-muted)]">
                  <div>
                    <dt className="inline font-semibold text-[color:var(--color-foreground)]">{content.labels.objective}:</dt>{" "}
                    {item.objective}
                  </div>
                  <div>
                    <dt className="inline font-semibold text-[color:var(--color-foreground)]">{content.labels.duration}:</dt>{" "}
                    {item.duration}
                  </div>
                  <div>
                    <dt className="inline font-semibold text-[color:var(--color-foreground)]">{content.labels.frequency}:</dt>{" "}
                    {item.frequency}
                  </div>
                  <div>
                    <dt className="inline font-semibold text-[color:var(--color-foreground)]">{content.labels.candidate}:</dt>{" "}
                    {item.candidate}
                  </div>
                </dl>

                <span className="mt-4 inline-flex h-9 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-colors duration-300 group-hover:border-[color:var(--color-brand)] group-hover:text-[color:var(--color-brand)]">
                  {item.ctaLabel}
                </span>
              </button>
            ))}
          </div>
        </>
      ) : null}

      {secondaryTreatments.length > 0 ? (
        <section className="mt-6 rounded-[1.35rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5 sm:py-5">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
            {content.secondaryLabel}
          </p>
          <p className="mt-1 text-[0.82rem] leading-6 text-[color:var(--color-muted)]">{content.secondaryDescription}</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
            {secondaryTreatments.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedTreatmentId(item.id)}
                className="group rounded-[0.95rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 py-3 text-left transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-px hover:border-[color:var(--color-brand)] hover:shadow-[0_18px_34px_-26px_rgba(32,16,25,0.58)]"
              >
                <p className="text-[0.79rem] font-semibold leading-5 text-[color:var(--color-foreground)]">{item.name}</p>
                <p className="mt-1 text-[0.73rem] leading-5 text-[color:var(--color-muted)] line-clamp-2">
                  {item.shortDescription}
                </p>
                <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.06em] text-[color:var(--color-muted)] transition-colors duration-200 group-hover:text-[color:var(--color-brand)]">
                  {item.duration}
                </p>
              </button>
            ))}
          </div>
        </section>
      ) : null}

      {!featuredTreatments.length && !secondaryTreatments.length ? (
        <article className="mt-6 rounded-[1.1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">
          No hay tratamientos que coincidan con la busqueda actual en esta categoria.
        </article>
      ) : null}

      {mode === "home" && bridgeHref && bridgeLabel ? (
        <div className="mt-7">
          <Link
            href={bridgeHref}
            className="inline-flex h-10 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-colors duration-300 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
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
            <p className="text-[0.92rem] leading-7 text-[color:var(--color-muted)]">{selectedTreatment.modal.intro}</p>

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
