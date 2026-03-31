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
    es: "Catálogo completo de tratamientos faciales, corporales, depilación y estética avanzada en Centres Ideal Andorra.",
    ca: "Catàleg complet de tractaments facials, corporals, depilació i estètica avançada a Centres Ideal Andorra.",
    fr: "Catalogue complet de soins visage, corps, épilation et esthétique avancée chez Centres Ideal Andorra.",
    en: "Complete catalogue of facial, body, hair-removal and advanced aesthetic treatments at Centres Ideal Andorra.",
    uk: "Повний каталог процедур для обличчя, тіла, епіляції та розширеної естетики в Centres Ideal Andorra.",
    ru: "Полный каталог процедур для лица, тела, эпиляции и продвинутой эстетики в Centres Ideal Andorra.",
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
  const mapsByLocale: Record<Locale, string> = {
    es: "Mapa",
    ca: "Mapa",
    fr: "Carte",
    en: "Map",
    uk: "Карта",
    ru: "Карта",
  };
  const processCopyByLocale: Record<
    Locale,
    { label: string; title: string; description: string; steps: { id: string; title: string; description: string }[] }
  > = {
    es: {
      label: "Proceso de recomendación",
      title: "Cómo convertimos una necesidad en un plan de tratamiento ordenado",
      description:
        "Priorizamos objetivo, zona y contexto de piel para definir una ruta clara. Cada fase se revisa antes de pasar a la siguiente.",
      steps: [
        {
          id: "01",
          title: "Diagnóstico inicial",
          description: "Leemos estado actual, histórico y prioridad principal para evitar sobretratamiento.",
        },
        {
          id: "02",
          title: "Selección de categoría y técnica",
          description: "Elegimos la vía adecuada: facial, corporal, depilación, bienestar o tecnología avanzada.",
        },
        {
          id: "03",
          title: "Seguimiento y ajustes",
          description: "Revisamos respuesta real en cabina y ajustamos frecuencia o combinación cuando corresponde.",
        },
      ],
    },
    ca: {
      label: "Procés de recomanació",
      title: "Com convertim una necessitat en un pla ordenat",
      description:
        "Prioritzem objectiu, zona i context de pell per definir una ruta clara i revisable en cada fase.",
      steps: [
        {
          id: "01",
          title: "Diagnòstic inicial",
          description: "Llegim estat actual, historial i prioritat principal per evitar sobretractament.",
        },
        {
          id: "02",
          title: "Selecció de categoria i tècnica",
          description: "Escollim la via adequada: facial, corporal, depilació, benestar o tecnologia avançada.",
        },
        {
          id: "03",
          title: "Seguiment i ajust",
          description: "Revisem resposta real en cabina i ajustem freqüència o combinació si cal.",
        },
      ],
    },
    fr: {
      label: "Processus",
      title: "Comment nous structurons un plan de traitement",
      description: "Nous priorisons objectif, zone et état de peau pour définir une feuille de route claire.",
      steps: [
        { id: "01", title: "Diagnostic initial", description: "Lecture du contexte et des priorités réelles." },
        {
          id: "02",
          title: "Choix de catégorie",
          description: "Sélection de la technique selon indication et tolérance.",
        },
        { id: "03", title: "Suivi", description: "Révision et ajustements au fil de l'évolution." },
      ],
    },
    en: {
      label: "Recommendation flow",
      title: "How we turn a need into a structured treatment plan",
      description: "We prioritise objective, treatment area and skin context before defining the route.",
      steps: [
        { id: "01", title: "Initial diagnosis", description: "We define priority and compatibility." },
        {
          id: "02",
          title: "Category and technique",
          description: "We select the right category and treatment sequence.",
        },
        { id: "03", title: "Follow-up", description: "We adjust based on real in-cabin response." },
      ],
    },
    uk: {
      label: "Процес рекомендації",
      title: "Як формується план процедур",
      description: "Спочатку визначаємо ціль, зону та стан шкіри, далі формуємо маршрут.",
      steps: [
        { id: "01", title: "Діагностика", description: "Визначаємо пріоритет і сумісність." },
        { id: "02", title: "Вибір категорії", description: "Підбираємо категорію та техніку." },
        { id: "03", title: "Супровід", description: "Коригуємо за реальною динамікою." },
      ],
    },
    ru: {
      label: "Процесс рекомендации",
      title: "Как формируется план процедур",
      description: "Сначала определяем цель, зону и состояние кожи, затем строим маршрут.",
      steps: [
        { id: "01", title: "Диагностика", description: "Определяем приоритет и совместимость." },
        { id: "02", title: "Выбор категории", description: "Подбираем категорию и технику." },
        { id: "03", title: "Сопровождение", description: "Корректируем по фактической динамике." },
      ],
    },
  };
  const processCopy = processCopyByLocale[locale];

  const imageAltByLocale: Record<Locale, { hero: string; process: string; closing: string }> = {
    es: {
      hero: "Cabina preparada para tratamientos estéticos",
      process: "Especialista ejecutando protocolo en cabina",
      closing: "Recepción para confirmar reserva",
    },
    ca: {
      hero: "Cabina preparada per a tractaments estètics",
      process: "Especialista executant protocol en cabina",
      closing: "Recepció per confirmar reserva",
    },
    fr: {
      hero: "Cabine préparée pour les traitements esthétiques",
      process: "Spécialiste réalisant un protocole",
      closing: "Réception pour confirmer la réservation",
    },
    en: {
      hero: "Treatment cabin prepared for aesthetic sessions",
      process: "Specialist performing an in-cabin protocol",
      closing: "Reception area to confirm booking",
    },
    uk: {
      hero: "Кабіна, підготовлена для естетичних процедур",
      process: "Фахівчиня проводить протокол у кабіні",
      closing: "Рецепція для підтвердження запису",
    },
    ru: {
      hero: "Кабинет, подготовленный для эстетических процедур",
      process: "Специалист выполняет протокол в кабинете",
      closing: "Зона ресепшен для подтверждения записи",
    },
  };
  const imageAlt = imageAltByLocale[locale];
  const treatmentsBasePath = l("/tratamientos");

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
          <Reveal className="max-w-[48rem]">
            <p className="mb-4 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-white/74 sm:mb-5 sm:text-[0.68rem] sm:tracking-[0.16em]">
              {catalog.heroLabel}
            </p>
            <h1 className="max-w-[13ch] text-[clamp(2.12rem,9.8vw,5.1rem)] leading-[0.9] font-semibold tracking-[-0.04em] sm:max-w-[13ch] sm:text-[clamp(2.45rem,6.2vw,5.1rem)] sm:leading-[0.88]">
              {catalog.heroTitle}
            </h1>
            <p className="mt-4 max-w-[38rem] text-[0.92rem] leading-7 text-white/82">{catalog.heroDescription}</p>

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
                {mapsByLocale[locale]}
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-background)]">
        <Container>
          <Reveal>
            <p className="eyebrow-label">{catalog.sectionLabel}</p>
            <h2 className="max-w-[16ch] text-[clamp(1.95rem,3.9vw,3.1rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              {catalog.sectionTitle}
            </h2>
            <p className="mt-3 max-w-[46rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{catalog.sectionDescription}</p>
          </Reveal>

          <TreatmentsExplorer content={catalog} mode="page" treatmentsBasePath={treatmentsBasePath} />
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-surface)]/80">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:items-stretch">
          <Reveal>
            <p className="eyebrow-label">{processCopy.label}</p>
            <h2 className="max-w-[15ch] text-[clamp(1.9rem,3.7vw,3rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              {processCopy.title}
            </h2>
            <p className="mt-3 max-w-[37rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{processCopy.description}</p>

            <div className="mt-6 space-y-3">
              {processCopy.steps.map((step) => (
                <article key={step.id} className="surface-card rounded-[1.2rem] px-4 py-4 sm:px-5">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">{step.id}</p>
                  <h3 className="mt-1 text-[0.98rem] font-semibold text-[color:var(--color-foreground)]">{step.title}</h3>
                  <p className="mt-1 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">{step.description}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:flex lg:h-full lg:items-stretch">
            <article className="image-frame h-full w-full overflow-hidden p-4 sm:p-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] sm:h-full sm:min-h-[33rem] sm:aspect-auto">
                <MediaFill
                  src="/images/pages/tratamientos/proceso/flujo-proceso-tratamiento.png"
                  alt={imageAlt.process}
                  mobilePosition="64% 34%"
                  tabletPosition="58% 38%"
                  desktopPosition="54% 40%"
                  className="photo-grade-soft"
                />
                <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(16,10,14,0.46)_0%,rgba(16,10,14,0.12)_66%)]" />
              </div>
            </article>
          </Reveal>
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
