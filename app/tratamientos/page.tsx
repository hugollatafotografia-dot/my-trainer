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
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/messages";
import { getServerLocale } from "@/lib/i18n/server";
import { contactDetails } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import { TRACK_EVENTS } from "@/lib/tracking/events";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const t = getDictionary(locale);
  const descriptionByLocale: Record<Locale, string> = {
    es: "Catalogo profesional organizado en estetica normal, estetica avanzada y estetica regenerativa en Centros Ideal Andorra.",
    ca: "Cataleg professional organitzat en estetica normal, avancada i regenerativa a Centres Ideal Andorra.",
    fr: "Catalogue professionnel organise en esthetique normale, avancee et regenerative chez Centres Ideal Andorra.",
    en: "Professional catalogue structured into normal, advanced and regenerative aesthetics at Centres Ideal Andorra.",
    uk: "Професійний каталог процедур із поділом на базову, розширену та регенеративну естетику в Centres Ideal Andorra.",
    ru: "Профессиональный каталог процедур с делением на базовую, продвинутую и регенеративную эстетику в Centres Ideal Andorra.",
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
  const pageCopyByLocale: Record<
    Locale,
    {
      maps: string;
      indicationLabel: string;
      phase: string;
      steps: { id: string; title: string; description: string }[];
    }
  > = {
    es: {
      maps: "Mapa",
      indicationLabel: "Proceso de indicacion",
      phase: "Fase",
      steps: [
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
      ],
    },
    ca: {
      maps: "Mapa",
      indicationLabel: "Proces d'indicacio",
      phase: "Fase",
      steps: [
        {
          id: "01",
          title: "Diagnosi inicial",
          description: "Llegim l'estat actual, la prioritat i la compatibilitat del tractament.",
        },
        {
          id: "02",
          title: "Pla per blocs funcionals",
          description: "Definim si convé començar per estetica normal, avancada o regenerativa.",
        },
        {
          id: "03",
          title: "Seguiment i ajust",
          description: "Revisem l'evolucio i ajustem la frequencia abans de cada bloc.",
        },
      ],
    },
    fr: {
      maps: "Carte",
      indicationLabel: "Processus d'indication",
      phase: "Phase",
      steps: [
        {
          id: "01",
          title: "Diagnostic initial",
          description: "Nous evaluons l'etat actuel, la priorite et la compatibilite du traitement.",
        },
        {
          id: "02",
          title: "Plan par blocs fonctionnels",
          description: "Nous definissons si commencer par esthetique normale, avancee ou regenerative.",
        },
        {
          id: "03",
          title: "Suivi et ajustement",
          description: "Nous revoyons l'evolution et ajustons la frequence avant chaque bloc.",
        },
      ],
    },
    en: {
      maps: "Map",
      indicationLabel: "Indication process",
      phase: "Phase",
      steps: [
        {
          id: "01",
          title: "Initial diagnosis",
          description: "We assess current status, priority and treatment compatibility.",
        },
        {
          id: "02",
          title: "Functional block plan",
          description: "We define whether to start with normal, advanced or regenerative aesthetics.",
        },
        {
          id: "03",
          title: "Follow-up and adjustment",
          description: "We review evolution and adjust frequency before each block.",
        },
      ],
    },
    uk: {
      maps: "Карта",
      indicationLabel: "Процес призначення",
      phase: "Фаза",
      steps: [
        {
          id: "01",
          title: "Початкова діагностика",
          description: "Оцінюємо поточний стан, пріоритет і сумісність процедури.",
        },
        {
          id: "02",
          title: "План за функціональними блоками",
          description: "Визначаємо, чи стартувати з базової, розширеної чи регенеративної естетики.",
        },
        {
          id: "03",
          title: "Супровід і корекція",
          description: "Переглядаємо динаміку і коригуємо частоту перед кожним блоком.",
        },
      ],
    },
    ru: {
      maps: "Карта",
      indicationLabel: "Процесс назначения",
      phase: "Фаза",
      steps: [
        {
          id: "01",
          title: "Первичная диагностика",
          description: "Оцениваем текущее состояние, приоритет и совместимость процедуры.",
        },
        {
          id: "02",
          title: "План по функциональным блокам",
          description: "Определяем, с чего начать: с базовой, продвинутой или регенеративной эстетики.",
        },
        {
          id: "03",
          title: "Сопровождение и корректировка",
          description: "Проверяем динамику и корректируем частоту перед каждым блоком.",
        },
      ],
    },
  };
  const pageCopy = pageCopyByLocale[locale];
  const imageAltByLocale: Record<Locale, { hero: string; process: string; closing: string }> = {
    es: {
      hero: "Cabina preparada para tratamientos esteticos",
      process: "Especialista ejecutando tratamiento",
      closing: "Recepcion para confirmar reserva",
    },
    ca: {
      hero: "Cabina preparada per a tractaments estetics",
      process: "Especialista aplicant un tractament",
      closing: "Recepcio per confirmar la reserva",
    },
    fr: {
      hero: "Cabine preparee pour les traitements esthetiques",
      process: "Specialiste realisant un traitement",
      closing: "Reception pour confirmer la reservation",
    },
    en: {
      hero: "Treatment cabin prepared for aesthetic sessions",
      process: "Specialist performing a treatment",
      closing: "Reception area to confirm booking",
    },
    uk: {
      hero: "Кабіна, підготовлена для естетичних процедур",
      process: "Фахівчиня виконує процедуру",
      closing: "Рецепція для підтвердження запису",
    },
    ru: {
      hero: "Кабинет, подготовленный для эстетических процедур",
      process: "Специалист выполняет процедуру",
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
            className="photo-grade object-cover object-[56%_34%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(104deg,rgba(10,7,10,0.94)_0%,rgba(12,8,11,0.82)_42%,rgba(15,9,13,0.42)_100%)]" />
        </div>

        <Container className="relative flex min-h-[31rem] items-end pb-8 pt-[5.5rem] sm:min-h-[38rem] sm:pb-10 sm:pt-24 md:pt-28 lg:pb-12">
          <Reveal className="max-w-[47rem]">
            <p className="mb-4 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-white/74 sm:mb-5 sm:text-[0.68rem] sm:tracking-[0.16em]">{catalog.heroLabel}</p>
            <h1 className="max-w-[12ch] text-[clamp(2.12rem,9.8vw,5.1rem)] leading-[0.9] font-semibold tracking-[-0.04em] sm:max-w-[13ch] sm:text-[clamp(2.45rem,6.2vw,5.1rem)] sm:leading-[0.88]">
              {catalog.heroTitle}
            </h1>
            <p className="mt-4 max-w-[36rem] text-[0.92rem] leading-7 text-white/82">{catalog.heroDescription}</p>

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

            <Link
              href={contactDetails.mapsPlaceUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-5 inline-flex min-h-[2.9rem] w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-white/26 bg-black/24 px-4 py-2 text-[0.67rem] font-semibold tracking-[0.03em] text-white/90 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-px hover:border-white/42 hover:bg-black/34 sm:mt-6 sm:w-fit sm:justify-start"
            >
              <span>{t.brand.location}</span>
              <span className="text-[0.6rem] uppercase tracking-[0.09em] text-white/64 transition-colors duration-300 group-hover:text-white/82">
                {pageCopy.maps}
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
            <p className="eyebrow-label">{pageCopy.indicationLabel}</p>
            <h2 className="max-w-[15ch] text-[clamp(1.9rem,3.7vw,3rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              {catalog.seoIntroTitle}
            </h2>
            <p className="mt-3 max-w-[37rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{catalog.seoIntroDescription}</p>

            <div className="mt-6 space-y-3">
              {pageCopy.steps.map((step) => (
                <article key={step.id} className="surface-card rounded-[1.2rem] px-4 py-4 sm:px-5">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">{pageCopy.phase} {step.id}</p>
                  <h3 className="mt-1 text-[0.98rem] font-semibold text-[color:var(--color-foreground)]">{step.title}</h3>
                  <p className="mt-1 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">{step.description}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:flex lg:h-full lg:items-stretch">
            <article className="image-frame h-full w-full overflow-hidden p-4 sm:p-5">
              <div className="relative h-full min-h-[25rem] overflow-hidden rounded-[1.45rem] sm:min-h-[33rem]">
                <MediaFill
                  src="/images/pages/tratamientos/proceso/flujo-proceso-tratamiento.png"
                  alt={imageAlt.process}
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
        imageAlt={imageAlt.closing}
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
