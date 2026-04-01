import type { Metadata } from "next";

import Button from "@/components/Button";
import Container from "@/components/Container";
import MediaFill from "@/components/media/MediaFill";
import PageClosingCta from "@/components/page/PageClosingCta";
import Reveal from "@/components/Reveal";
import TreatmentsExplorer from "@/components/treatments/TreatmentsExplorer";
import { getTreatmentsCatalog } from "@/lib/content/treatments-catalog";
import { getPageContext } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/messages";
import { getServerLocale } from "@/lib/i18n/server";
import { buildPageMetadata } from "@/lib/seo";
import { TRACK_EVENTS } from "@/lib/tracking/events";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const t = getDictionary(locale);
  const descriptionByLocale: Record<Locale, string> = {
    es: "Catálogo de tratamientos organizado en estética normal, estética avanzada y estética regenerativa.",
    ca: "Catàleg de tractaments organitzat en estètica normal, estètica avançada i estètica regenerativa.",
    fr: "Catalogue structuré en esthétique normale, avancée et régénérative.",
    en: "Treatments catalogue organised into normal, advanced and regenerative aesthetics.",
    uk: "Каталог процедур, організований у базову, просунуту та регенеративну естетику.",
    ru: "Каталог процедур, организованный в базовую, продвинутую и регенеративную эстетику.",
  };

  return buildPageMetadata({
    locale,
    path: "/tratamientos",
    title: t.nav.treatments,
    description: descriptionByLocale[locale],
    imagePath: "/images/pages/tratamientos/hero/hero-tratamientos-esteticos.png",
  });
}

export default async function TratamientosPage() {
  const { locale, t, l } = await getPageContext();
  const catalog = getTreatmentsCatalog(locale);
  const whatsappHref = `https://wa.me/${t.brand.whatsappNumber}`;

  const imageAltByLocale: Record<Locale, { hero: string; closing: string }> = {
    es: {
      hero: "Cabina preparada para tratamientos estéticos",
      closing: "Recepción para confirmar reserva",
    },
    ca: {
      hero: "Cabina preparada per a tractaments estètics",
      closing: "Recepció per confirmar reserva",
    },
    fr: {
      hero: "Cabine préparée pour les traitements esthétiques",
      closing: "Réception pour confirmer la réservation",
    },
    en: {
      hero: "Treatment cabin prepared for aesthetic sessions",
      closing: "Reception area to confirm booking",
    },
    uk: {
      hero: "Кабіна, підготовлена для естетичних процедур",
      closing: "Рецепція для підтвердження запису",
    },
    ru: {
      hero: "Кабинет, подготовленный для эстетических процедур",
      closing: "Зона ресепшен для подтверждения записи",
    },
  };
  const imageAlt = imageAltByLocale[locale];

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10 text-white">
        <div className="absolute inset-0 -z-10">
          <MediaFill
            src="/images/pages/tratamientos/hero/hero-tratamientos-esteticos.png"
            alt={imageAlt.hero}
            priority
            mobilePosition="72% 30%"
            tabletPosition="62% 33%"
            desktopPosition="56% 34%"
            className="photo-grade"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,7,10,0.92)_0%,rgba(11,8,10,0.88)_34%,rgba(12,8,11,0.56)_68%,rgba(15,9,13,0.36)_100%)] sm:bg-[linear-gradient(104deg,rgba(10,7,10,0.94)_0%,rgba(12,8,11,0.82)_42%,rgba(15,9,13,0.42)_100%)]" />
        </div>

        <Container className="relative flex min-h-[35rem] items-end pb-8 pt-[5.5rem] sm:min-h-[38rem] sm:pb-10 sm:pt-24 md:pt-28 lg:pb-12">
          <Reveal className="max-w-[50rem]">
            <p className="mb-4 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-white/74 sm:mb-5 sm:text-[0.68rem] sm:tracking-[0.16em]">
              {catalog.heroLabel}
            </p>
            <h1 className="max-w-[14ch] text-[clamp(2.12rem,9.8vw,5.1rem)] leading-[0.9] font-semibold tracking-[-0.04em] sm:max-w-[14ch] sm:text-[clamp(2.45rem,6.2vw,5.1rem)] sm:leading-[0.88]">
              {catalog.heroTitle}
            </h1>
            <p className="mt-4 max-w-[42rem] text-[0.92rem] leading-7 text-white/84">{catalog.heroDescription}</p>

            <div className="no-scrollbar mt-6 flex gap-2.5 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
              {catalog.heroHighlights.map((item) => (
                <span
                  key={item}
                  className="glass-pill inline-flex h-[2.18rem] shrink-0 items-center px-3 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-white/90"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <Button
                href={l("/reservar")}
                size="lg"
                trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
                trackingSource="tratamientos_hero_primary"
                trackingLabel="reservar_valoracion_tratamientos"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.05rem] w-full px-7 text-[0.75rem] font-semibold uppercase tracking-[0.08em] sm:w-auto"
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
                className="h-[3.05rem] w-full border-white/36 bg-black/24 px-7 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-white hover:border-white/52 hover:bg-black/34 hover:text-white sm:w-auto"
              >
                {t.cta.whatsapp}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-background)]">
        <Container>
          <Reveal className="max-w-[54rem]">
            <p className="eyebrow-label">{catalog.sectionLabel}</p>
            <h2 className="max-w-[17ch] text-[clamp(1.95rem,3.9vw,3.1rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              {catalog.sectionTitle}
            </h2>
            <p className="mt-3 max-w-[46rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{catalog.sectionDescription}</p>
          </Reveal>

          <TreatmentsExplorer
            content={catalog}
            mode="page"
            reserveHref={l("/reservar")}
            whatsappHref={whatsappHref}
            treatmentsBasePath={l("/tratamientos")}
          />
        </Container>
      </section>

      <section className="section-shell-tight bg-[color:var(--color-background)]">
        <Container>
          <article className="surface-card rounded-[1.35rem] px-5 py-5 sm:px-6">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">{catalog.seoIntroTitle}</p>
            <p className="mt-2 max-w-[56rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{catalog.seoIntroDescription}</p>
          </article>
        </Container>
      </section>

      <PageClosingCta
        label={t.treatmentsPage.closing.label}
        title={t.treatmentsPage.closing.title}
        description={t.treatmentsPage.closing.description}
        imageSrc="/images/pages/tratamientos/cierre/cierre-reserva-tratamiento.mp4"
        imageAlt={imageAlt.closing}
        mobileMediaPosition="70% 34%"
        tabletMediaPosition="60% 36%"
        desktopMediaPosition="56% 40%"
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
