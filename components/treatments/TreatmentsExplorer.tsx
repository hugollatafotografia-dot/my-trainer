"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import Button from "@/components/Button";
import PremiumModal from "@/components/premium/PremiumModal";
import type {
  TreatmentCategory,
  TreatmentCategoryId,
  TreatmentItem,
  TreatmentsCatalogContent,
} from "@/lib/content/treatments-catalog";
import { TRACK_EVENTS } from "@/lib/tracking/events";
import { cn } from "@/lib/utils";

type TreatmentsExplorerProps = {
  content: TreatmentsCatalogContent;
  mode?: "home" | "page";
  bridgeHref?: string;
  bridgeLabel?: string;
  reserveHref?: string;
  whatsappHref?: string;
  treatmentsBasePath?: string;
};

const CATEGORY_DEFAULT_DURATION: Record<TreatmentCategoryId, string> = {
  "estetica-normal": "30-60 min por sesión",
  "estetica-avanzada": "35-75 min por sesión",
  "estetica-regenerativa": "40-70 min por sesión",
};

const CATEGORY_DEFAULT_FREQUENCY: Record<TreatmentCategoryId, string> = {
  "estetica-normal": "1 sesión semanal o quincenal según objetivo y fase.",
  "estetica-avanzada": "Sesiones por fases, normalmente cada 2-4 semanas.",
  "estetica-regenerativa": "Bloques progresivos con revisión periódica cada 3-5 semanas.",
};

const CATEGORY_DEFAULT_SENSATION: Record<TreatmentCategoryId, string> = {
  "estetica-normal": "Confortable y de baja intensidad, con sensación de cuidado y descarga.",
  "estetica-avanzada": "Intensidad controlada y ajustada a tolerancia; puede notarse trabajo técnico localizado.",
  "estetica-regenerativa": "Estimulación progresiva con sensación variable según protocolo y zona tratada.",
};

const CATEGORY_DEFAULT_CONSIDERATIONS: Record<TreatmentCategoryId, string> = {
  "estetica-normal": "Mantener hidratación y fotoprotección diaria para consolidar resultados.",
  "estetica-avanzada": "Seguir pautas de pre y post sesión, evitar sobreexposición solar y respetar tiempos entre sesiones.",
  "estetica-regenerativa": "Cumplir plan de continuidad, cuidados de barrera cutánea y seguimiento de evolución.",
};

const CATEGORY_DEFAULT_ASSESSMENT: Record<TreatmentCategoryId, string> = {
  "estetica-normal": "Recomendable si hay sensibilidad cutánea, dudas de compatibilidad o combinación de zonas.",
  "estetica-avanzada": "Imprescindible cuando el objetivo requiere aparatología, combinación de técnicas o corrección visible.",
  "estetica-regenerativa": "Muy recomendable para ajustar intensidad, ritmo y expectativas de renovación progresiva.",
};

const DURATION_OVERRIDES: Record<string, string> = {
  "depilacio-laser": "20-70 min según zona",
  "depilacio-cera-calenta-tebia": "20-45 min según zona",
  "eliminacio-tatuatges": "30-60 min por sesión",
  "presoterapia": "30-45 min por sesión",
  "massatges-relaxants": "50-70 min por sesión",
  "massatges-descontracturants": "45-60 min por sesión",
  "microneedling-capilar": "45-60 min por sesión",
  "microneedling-llavis-acid-hialuronic": "35-50 min por sesión",
  "spa-peus-mans": "35-50 min por sesión",
};

function categorySectionId(category: TreatmentCategory) {
  return `cat-${category.slug}`;
}

function categoryIdFromHash(categories: TreatmentCategory[], hash: string): TreatmentCategoryId | null {
  const normalized = hash.replace(/^#/, "");
  if (!normalized.startsWith("cat-")) {
    return null;
  }

  const slug = normalized.replace(/^cat-/, "");
  const match = categories.find((category) => category.slug === slug);
  return match?.id ?? null;
}

function buildTreatmentMeta(item: TreatmentItem) {
  const duration = DURATION_OVERRIDES[item.slug] ?? CATEGORY_DEFAULT_DURATION[item.category];

  return {
    duration,
    frequency: CATEGORY_DEFAULT_FREQUENCY[item.category],
    sensation: CATEGORY_DEFAULT_SENSATION[item.category],
    considerations: CATEGORY_DEFAULT_CONSIDERATIONS[item.category],
    assessment: CATEGORY_DEFAULT_ASSESSMENT[item.category],
  };
}

function TreatmentCard({
  item,
  openLabel,
  featuredLabel,
  onOpen,
}: {
  item: TreatmentItem;
  openLabel: string;
  featuredLabel: string;
  onOpen: () => void;
}) {
  const meta = buildTreatmentMeta(item);

  return (
    <article className="surface-card group relative h-full rounded-[1.25rem] border border-[color:var(--color-line)]/70 bg-[color:var(--color-surface-strong)] px-4 py-4 shadow-[0_20px_44px_-34px_rgba(36,20,28,0.36)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-brand)]/34 hover:shadow-[0_24px_48px_-34px_rgba(36,20,28,0.42)] sm:px-5 sm:py-5">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-[1.02rem] leading-[1.2] font-semibold tracking-[-0.015em] text-[color:var(--color-foreground)]">{item.name}</h3>
        {item.featured ? (
          <span className="inline-flex h-7 shrink-0 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-brand)]/24 bg-[color:var(--color-brand-soft)] px-2.5 text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)]">
            {featuredLabel}
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">{item.shortDescription}</p>

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {item.benefits.slice(0, 3).map((benefit) => (
          <li
            key={benefit}
            className="rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-pill)] px-2.5 py-1 text-[0.66rem] leading-5 text-[color:var(--color-muted)]"
          >
            {benefit}
          </li>
        ))}
      </ul>

      <p className="mt-3 text-[0.72rem] leading-6 text-[color:var(--color-muted)]">
        <span className="font-semibold text-[color:var(--color-foreground)]">Duración:</span> {meta.duration}
      </p>

      <div className="mt-4">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex h-10 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-brand)]/26 bg-[color:var(--color-brand-soft)] px-4 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)] transition-colors duration-300 hover:border-[color:var(--color-brand)] hover:bg-[color:var(--color-brand)] hover:text-white"
        >
          {openLabel}
        </button>
      </div>
    </article>
  );
}

function HomeCard({
  item,
  featuredLabel,
  ctaLabel,
  href,
}: {
  item: TreatmentItem;
  featuredLabel: string;
  ctaLabel: string;
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
  reserveHref = "/reservar",
  whatsappHref,
  treatmentsBasePath = "/tratamientos",
}: TreatmentsExplorerProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<TreatmentCategoryId>(
    content.categories[0]?.id ?? "estetica-normal",
  );
  const [activeTreatmentSlug, setActiveTreatmentSlug] = useState<string | null>(null);

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

  const activeCategory = useMemo(
    () => content.categories.find((category) => category.id === activeCategoryId) ?? content.categories[0],
    [activeCategoryId, content.categories],
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

  const activeTreatment = useMemo(
    () => content.treatments.find((item) => item.slug === activeTreatmentSlug) ?? null,
    [activeTreatmentSlug, content.treatments],
  );

  const activeTreatmentCategory = useMemo(
    () =>
      activeTreatment
        ? content.categories.find((category) => category.id === activeTreatment.category) ?? null
        : null,
    [activeTreatment, content.categories],
  );

  useEffect(() => {
    if (mode !== "page" || typeof window === "undefined") {
      return;
    }

    const applyHashCategory = () => {
      const hashCategoryId = categoryIdFromHash(content.categories, window.location.hash);
      if (hashCategoryId) {
        setActiveCategoryId(hashCategoryId);
      }
    };

    applyHashCategory();
    window.addEventListener("hashchange", applyHashCategory);
    return () => {
      window.removeEventListener("hashchange", applyHashCategory);
    };
  }, [content.categories, mode]);

  const setCategory = (category: TreatmentCategory) => {
    setActiveCategoryId(category.id);

    if (mode === "page" && typeof window !== "undefined") {
      const hash = `#${categorySectionId(category)}`;
      window.history.replaceState(null, "", hash);
    }
  };

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
                onClick={() => setCategory(category)}
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
            <HomeCard
              key={item.slug}
              item={item}
              featuredLabel={content.featuredLabel}
              ctaLabel={content.cardCtaLabel}
              href={`${treatmentsBasePath}/${item.slug}`}
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

  const modalMeta = activeTreatment ? buildTreatmentMeta(activeTreatment) : null;
  const modalGoals = activeTreatment
    ? [activeTreatment.shortDescription, activeTreatmentCategory?.intervention ?? ""].filter((entry) => Boolean(entry))
    : [];
  const modalBenefits = activeTreatment ? activeTreatment.benefits : [];

  return (
    <section className="mt-8 space-y-6">
      <article className="rounded-[1.35rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.11em] text-[color:var(--color-accent)]">
          {content.categoryNavLabel}
        </p>

        <div className="no-scrollbar mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-2.5">
          {content.categories.map((category) => {
            const count = treatmentsByCategory[category.id]?.length ?? 0;
            const isActive = category.id === activeCategoryId;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setCategory(category)}
                aria-pressed={isActive}
                className={cn(
                  "inline-flex min-h-[3.05rem] w-full items-center justify-center rounded-[var(--radius-pill)] border px-4 text-[0.69rem] font-semibold uppercase tracking-[0.08em] transition-[color,background-color,border-color,transform,box-shadow] duration-300",
                  isActive
                    ? "border-[color:var(--color-brand)] bg-[color:var(--color-brand)] text-white shadow-[0_18px_34px_-24px_rgba(73,34,53,0.74)]"
                    : "border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] text-[color:var(--color-muted)] hover:-translate-y-px hover:border-[color:var(--color-brand)]/46 hover:text-[color:var(--color-brand)]",
                )}
              >
                {category.name} ({count})
              </button>
            );
          })}
        </div>
      </article>

      {activeCategory ? (
        <article
          id={categorySectionId(activeCategory)}
          className="rounded-[1.35rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-5 sm:px-6"
        >
          <h3 className="text-[1.16rem] font-semibold tracking-[-0.02em] text-[color:var(--color-foreground)]">{activeCategory.name}</h3>
          <p className="mt-2 max-w-[62rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{activeCategory.description}</p>

          <div className="mt-4 grid gap-2.5 lg:grid-cols-3">
            <p className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 py-3 text-[0.82rem] leading-6 text-[color:var(--color-muted)]">
              {activeCategory.profile}
            </p>
            <p className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 py-3 text-[0.82rem] leading-6 text-[color:var(--color-muted)]">
              {activeCategory.intervention}
            </p>
            <p className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 py-3 text-[0.82rem] leading-6 text-[color:var(--color-muted)]">
              {activeCategory.differentiation}
            </p>
          </div>
        </article>
      ) : null}

      {activeTreatments.length ? (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {activeTreatments.map((item) => (
            <TreatmentCard
              key={item.slug}
              item={item}
              openLabel={content.detail.openModal}
              featuredLabel={content.featuredLabel}
              onOpen={() => setActiveTreatmentSlug(item.slug)}
            />
          ))}
        </div>
      ) : (
        <article className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">
          {content.emptyStateLabel}
        </article>
      )}

      <PremiumModal
        open={Boolean(activeTreatment)}
        onClose={() => setActiveTreatmentSlug(null)}
        closeLabel={content.closeModalLabel}
        size="xl"
        label={activeTreatmentCategory?.name}
        title={activeTreatment?.name ?? ""}
      >
        {activeTreatment && modalMeta ? (
          <div className="space-y-5">
            <section className="rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
              <h4 className="text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalDescription}</h4>
              <p className="mt-2 text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{activeTreatment.longDescription}</p>
            </section>

            <div className="grid gap-3 lg:grid-cols-2">
              <section className="rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
                <h4 className="text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalIndicatedFor}</h4>
                <p className="mt-2 text-[0.88rem] leading-7 text-[color:var(--color-muted)]">{activeTreatmentCategory?.profile}</p>
              </section>

              <section className="rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
                <h4 className="text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalGoals}</h4>
                <ul className="mt-2 space-y-1.5 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">
                  {modalGoals.map((goal) => (
                    <li key={goal} className="flex items-start gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-brand)]" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
                <h4 className="text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalBenefits}</h4>
                <ul className="mt-2 space-y-1.5 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">
                  {modalBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-brand)]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
                <h4 className="text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalDuration}</h4>
                <p className="mt-2 text-[0.88rem] leading-7 text-[color:var(--color-muted)]">{modalMeta.duration}</p>

                <h4 className="mt-4 text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalFrequency}</h4>
                <p className="mt-2 text-[0.88rem] leading-7 text-[color:var(--color-muted)]">{modalMeta.frequency}</p>
              </section>

              <section className="rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
                <h4 className="text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalSensation}</h4>
                <p className="mt-2 text-[0.88rem] leading-7 text-[color:var(--color-muted)]">{modalMeta.sensation}</p>

                <h4 className="mt-4 text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalConsiderations}</h4>
                <p className="mt-2 text-[0.88rem] leading-7 text-[color:var(--color-muted)]">{modalMeta.considerations}</p>
              </section>
            </div>

            <section className="rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
              <h4 className="text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalAssessment}</h4>
              <p className="mt-2 text-[0.88rem] leading-7 text-[color:var(--color-muted)]">{modalMeta.assessment}</p>
            </section>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <Button
                href={reserveHref}
                size="md"
                trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
                trackingSource="tratamientos_modal_primary"
                trackingLabel={`reservar_${activeTreatment.slug}_modal`}
                className="h-11 w-full px-5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] sm:w-auto"
              >
                {content.detail.ctaPrimary}
              </Button>
              {whatsappHref ? (
                <Button
                  href={whatsappHref}
                  size="md"
                  variant="secondary"
                  trackingEvent={TRACK_EVENTS.CLICK_WHATSAPP}
                  trackingSource="tratamientos_modal_secondary"
                  trackingLabel={`whatsapp_${activeTreatment.slug}_modal`}
                  className="h-11 w-full px-5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] sm:w-auto"
                >
                  {content.detail.ctaSecondary}
                </Button>
              ) : null}
            </div>
          </div>
        ) : null}
      </PremiumModal>
    </section>
  );
}
