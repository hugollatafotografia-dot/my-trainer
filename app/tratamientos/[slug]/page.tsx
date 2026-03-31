import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Button from "@/components/Button";
import Container from "@/components/Container";
import MediaFill from "@/components/media/MediaFill";
import PageClosingCta from "@/components/page/PageClosingCta";
import {
  getRelatedTreatments,
  getTreatmentBySlug,
  getTreatmentCategoryById,
  getTreatmentsCatalog,
  getTreatmentSlugs,
} from "@/lib/content/treatments-catalog";
import { getPageContext } from "@/lib/i18n";
import { getServerLocale } from "@/lib/i18n/server";
import { buildPageMetadata } from "@/lib/seo";
import { TRACK_EVENTS } from "@/lib/tracking/events";

type TreatmentPageParams = {
  slug: string;
};

export async function generateStaticParams() {
  return getTreatmentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<TreatmentPageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getServerLocale();
  const treatment = getTreatmentBySlug(locale, slug);

  if (!treatment) {
    return buildPageMetadata({
      locale,
      path: `/tratamientos/${slug}`,
      title: "Tratamiento",
      description: "Detalle de tratamiento no disponible.",
      noIndex: true,
    });
  }

  return buildPageMetadata({
    locale,
    path: `/tratamientos/${treatment.slug}`,
    title: treatment.name,
    description: treatment.shortDescription,
    imagePath: "/images/pages/tratamientos/hero/hero-tratamientos-esteticos.png",
  });
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<TreatmentPageParams>;
}) {
  const { slug } = await params;
  const { locale, t, l } = await getPageContext();
  const catalog = getTreatmentsCatalog(locale);
  const treatment = getTreatmentBySlug(locale, slug);

  if (!treatment) {
    notFound();
  }

  const category = getTreatmentCategoryById(locale, treatment.category);
  const related = getRelatedTreatments(locale, treatment);
  const whatsappHref = `https://wa.me/${t.brand.whatsappNumber}`;

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10 text-white">
        <div className="absolute inset-0 -z-10">
          <MediaFill
            src="/images/pages/tratamientos/hero/hero-tratamientos-esteticos.png"
            alt={treatment.name}
            priority
            mobilePosition="72% 30%"
            tabletPosition="62% 33%"
            desktopPosition="56% 34%"
            className="photo-grade"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,7,10,0.92)_0%,rgba(11,8,10,0.88)_34%,rgba(12,8,11,0.56)_68%,rgba(15,9,13,0.36)_100%)] sm:bg-[linear-gradient(104deg,rgba(10,7,10,0.94)_0%,rgba(12,8,11,0.82)_42%,rgba(15,9,13,0.42)_100%)]" />
        </div>

        <Container className="relative flex min-h-[34rem] items-end pb-8 pt-[5.3rem] sm:min-h-[35rem] sm:pb-10 sm:pt-24 md:pt-28">
          <div className="max-w-[48rem]">
            <p className="mb-3 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-white/74">{catalog.heroLabel}</p>
            <h1 className="max-w-[14ch] text-[clamp(2.1rem,9vw,4.5rem)] leading-[0.9] font-semibold tracking-[-0.04em]">
              {treatment.name}
            </h1>
            <p className="mt-3 max-w-[38rem] text-[0.92rem] leading-7 text-white/82">{treatment.shortDescription}</p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {category ? (
                <span className="glass-pill inline-flex h-[2.1rem] items-center px-3 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-white/90">
                  {catalog.detail.category}: {category.name}
                </span>
              ) : null}
              {treatment.featured ? (
                <span className="glass-pill inline-flex h-[2.1rem] items-center px-3 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-white/90">
                  {catalog.featuredLabel}
                </span>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-background)]">
        <Container className="grid gap-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
          <article className="surface-card rounded-[1.35rem] px-5 py-5 sm:px-6">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">{catalog.detail.keyBenefits}</p>
            <p className="mt-2 text-[0.92rem] leading-7 text-[color:var(--color-muted)]">{treatment.longDescription}</p>

            <ul className="mt-5 space-y-2">
              {treatment.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-[0.88rem] leading-6 text-[color:var(--color-muted)]">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-brand)]" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <Button
                href={l("/reservar")}
                size="lg"
                trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
                trackingSource="tratamiento_detalle_primary"
                trackingLabel={`reservar_${treatment.slug}`}
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3rem] w-full px-6 text-[0.74rem] font-semibold uppercase tracking-[0.08em] sm:w-auto"
              >
                {catalog.detail.ctaPrimary}
              </Button>
              <Button
                href={whatsappHref}
                size="lg"
                variant="secondary"
                trackingEvent={TRACK_EVENTS.CLICK_WHATSAPP}
                trackingSource="tratamiento_detalle_secondary"
                trackingLabel={`whatsapp_${treatment.slug}`}
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3rem] w-full border-[color:var(--color-line)] px-6 text-[0.74rem] font-semibold uppercase tracking-[0.08em] sm:w-auto"
              >
                {catalog.detail.ctaSecondary}
              </Button>
            </div>
          </article>

          <aside className="rounded-[1.35rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-5 py-5 sm:px-6">
            <Link
              href={l("/tratamientos")}
              className="inline-flex h-10 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 text-[0.63rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)] transition-colors duration-300 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
            >
              {catalog.detail.backToTreatments}
            </Link>

            {category ? (
              <div className="mt-4 rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 py-3">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-accent)]">{catalog.detail.category}</p>
                <p className="mt-1 text-[0.9rem] font-semibold text-[color:var(--color-foreground)]">{category.name}</p>
                <p className="mt-1 text-[0.82rem] leading-6 text-[color:var(--color-muted)]">{category.description}</p>
              </div>
            ) : null}
          </aside>
        </Container>
      </section>

      {related.length ? (
        <section className="section-shell-tight bg-[color:var(--color-surface)]/70">
          <Container>
            <p className="eyebrow-label">{catalog.relatedLabel}</p>
            <h2 className="max-w-[16ch] text-[clamp(1.75rem,3.5vw,2.6rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              {catalog.detail.relatedTreatments}
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item) => (
                <article key={item.slug} className="surface-card rounded-[1.2rem] px-4 py-4 sm:px-5">
                  <h3 className="text-[0.98rem] font-semibold text-[color:var(--color-foreground)]">{item.name}</h3>
                  <p className="mt-1 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">{item.shortDescription}</p>
                  <Link
                    href={`${l("/tratamientos")}/${item.slug}`}
                    className="mt-3 inline-flex h-9 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-colors duration-300 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
                  >
                    {catalog.cardCtaLabel}
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <PageClosingCta
        label={t.treatmentsPage.closing.label}
        title={t.treatmentsPage.closing.title}
        description={t.treatmentsPage.closing.description}
        imageSrc="/images/pages/tratamientos/cierre/cierre-reserva-tratamiento.mp4"
        imageAlt={treatment.name}
        mobileMediaPosition="70% 34%"
        tabletMediaPosition="60% 36%"
        desktopMediaPosition="56% 40%"
        primaryCta={{
          href: l("/reservar"),
          label: t.cta.book,
          event: TRACK_EVENTS.CLICK_RESERVAR,
          source: "tratamiento_detalle_bottom_primary",
          trackingLabel: `reservar_${treatment.slug}_final`,
          variant: "light",
        }}
        secondaryCta={{
          href: whatsappHref,
          label: t.cta.whatsapp,
          event: TRACK_EVENTS.CLICK_WHATSAPP,
          source: "tratamiento_detalle_bottom_secondary",
          trackingLabel: `whatsapp_${treatment.slug}_final`,
          variant: "secondary",
        }}
      />
    </>
  );
}
