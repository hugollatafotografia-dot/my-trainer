import type { Metadata } from "next";
import Link from "next/link";

import Button from "@/components/Button";
import Container from "@/components/Container";
import MediaFill from "@/components/media/MediaFill";
import PageClosingCta from "@/components/page/PageClosingCta";
import Reveal from "@/components/Reveal";
import TreatmentsExplorer from "@/components/treatments/TreatmentsExplorer";
import { getTreatmentsCatalog } from "@/lib/content/treatments-catalog";
import { getPageContext } from "@/lib/i18n";
import { getDictionary } from "@/lib/i18n/messages";
import { getServerLocale } from "@/lib/i18n/server";
import { contactDetails } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import { TRACK_EVENTS } from "@/lib/tracking/events";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const t = getDictionary(locale);

  return buildPageMetadata({
    locale,
    path: "/tratamientos",
    title: t.nav.treatments,
    description:
      "Catalogo profesional organizado en estetica normal, estetica avanzada y estetica regenerativa en Centros Ideal Andorra.",
    imagePath: "/images/pages/tratamientos/hero/hero-tratamientos-esteticos.png",
  });
}

export default async function TratamientosPage() {
  const { locale, t, l } = await getPageContext();
  const catalog = getTreatmentsCatalog(locale);
  const whatsappHref = `https://wa.me/${t.brand.whatsappNumber}`;

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10 text-white">
        <div className="absolute inset-0 -z-10">
          <MediaFill
            src="/images/pages/tratamientos/hero/hero-tratamientos-esteticos.png"
            alt="Cabina preparada para tratamientos esteticos"
            priority
            className="photo-grade object-cover object-[56%_34%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(104deg,rgba(10,7,10,0.94)_0%,rgba(12,8,11,0.82)_42%,rgba(15,9,13,0.42)_100%)]" />
        </div>

        <Container className="relative flex min-h-[34rem] items-end pb-10 pt-24 sm:min-h-[38rem] md:pt-28 lg:pb-12">
          <Reveal className="max-w-[47rem]">
            <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/74">{catalog.heroLabel}</p>
            <h1 className="max-w-[13ch] text-[clamp(2.45rem,6.2vw,5.1rem)] leading-[0.88] font-semibold tracking-[-0.04em]">
              {catalog.heroTitle}
            </h1>
            <p className="mt-4 max-w-[36rem] text-[0.92rem] leading-7 text-white/82">{catalog.heroDescription}</p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {catalog.heroHighlights.map((item) => (
                <span
                  key={item}
                  className="glass-pill inline-flex h-[2.08rem] items-center px-3 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-white/90"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                href={l("/reservar")}
                size="lg"
                trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
                trackingSource="tratamientos_hero_primary"
                trackingLabel="reservar_valoracion_tratamientos"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.05rem] px-7 text-[0.75rem] font-semibold uppercase tracking-[0.08em]"
              >
                {t.cta.book}
              </Button>
              <Button
                href={whatsappHref}
                size="lg"
                variant="secondary"
                trackingEvent={TRACK_EVENTS.CLICK_WHATSAPP}
                trackingSource="tratamientos_hero_secondary"
                trackingLabel="whatsapp_tratamientos"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.05rem] border-white/36 bg-black/24 px-7 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-white hover:border-white/52 hover:bg-black/34 hover:text-white"
              >
                {t.cta.whatsapp}
              </Button>
            </div>

            <Link
              href={contactDetails.mapsPlaceUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex min-h-[2.58rem] w-fit items-center gap-2 rounded-[var(--radius-pill)] border border-white/26 bg-black/24 px-4 py-2 text-[0.67rem] font-semibold tracking-[0.03em] text-white/90 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-px hover:border-white/42 hover:bg-black/34"
            >
              <span>{t.brand.location}</span>
              <span className="text-[0.6rem] uppercase tracking-[0.09em] text-white/64 transition-colors duration-300 group-hover:text-white/82">
                Maps
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-background)]">
        <Container>
          <Reveal>
            <p className="eyebrow-label">{catalog.sectionLabel}</p>
            <h2 className="max-w-[15ch] text-[clamp(1.95rem,3.9vw,3.1rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              {catalog.sectionTitle}
            </h2>
            <p className="mt-3 max-w-[44rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{catalog.sectionDescription}</p>
          </Reveal>

          <TreatmentsExplorer content={catalog} mode="page" closeLabel={catalog.closeModalLabel} />
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-surface)]/80">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:items-stretch">
          <Reveal>
            <p className="eyebrow-label">Proceso de indicacion</p>
            <h2 className="max-w-[15ch] text-[clamp(1.9rem,3.7vw,3rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              {catalog.seoIntroTitle}
            </h2>
            <p className="mt-3 max-w-[37rem] text-[0.88rem] leading-7 text-[color:var(--color-muted)]">{catalog.seoIntroDescription}</p>

            <div className="mt-6 space-y-3">
              {[
                {
                  id: "01",
                  title: "Diagnostico inicial",
                  description: "Leemos estado actual, prioridad y compatibilidad del tratamiento.",
                },
                {
                  id: "02",
                  title: "Plan por bloques funcionales",
                  description: "Definimos si conviene comenzar por estetica normal, avanzada o regenerativa.",
                },
                {
                  id: "03",
                  title: "Seguimiento y ajuste",
                  description: "Revisamos evolucion y ajustamos frecuencia antes de cada bloque.",
                },
              ].map((step) => (
                <article key={step.id} className="surface-card rounded-[1.2rem] px-5 py-4">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">Fase {step.id}</p>
                  <h3 className="mt-1 text-[0.98rem] font-semibold text-[color:var(--color-foreground)]">{step.title}</h3>
                  <p className="mt-1 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">{step.description}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:flex lg:h-full lg:items-stretch">
            <article className="image-frame h-full w-full overflow-hidden p-4 sm:p-5">
              <div className="relative h-full min-h-[25rem] overflow-hidden rounded-[1.45rem] sm:min-h-[33rem]">
                <MediaFill
                  src="/images/pages/tratamientos/proceso/flujo-proceso-tratamiento.png"
                  alt="Especialista ejecutando tratamiento"
                  className="photo-grade-soft object-cover object-[54%_40%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(16,10,14,0.46)_0%,rgba(16,10,14,0.12)_66%)]" />
              </div>
            </article>
          </Reveal>
        </Container>
      </section>

      <PageClosingCta
        label={t.treatmentsPage.closing.label}
        title={t.treatmentsPage.closing.title}
        description={t.treatmentsPage.closing.description}
        imageSrc="/images/pages/tratamientos/cierre/cierre-reserva-tratamiento.mp4"
        imageAlt="Recepcion para confirmar reserva"
        primaryCta={{
          href: l("/reservar"),
          label: t.cta.book,
          event: TRACK_EVENTS.CLICK_RESERVAR,
          source: "tratamientos_bottom_cta",
          trackingLabel: "reservar_valoracion_tratamientos_final",
          variant: "light",
        }}
        secondaryCta={{
          href: whatsappHref,
          label: t.cta.whatsapp,
          event: TRACK_EVENTS.CLICK_WHATSAPP,
          source: "tratamientos_bottom_secondary",
          trackingLabel: "whatsapp_tratamientos_final",
          variant: "secondary",
        }}
      />
    </>
  );
}
