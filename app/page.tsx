import type { Metadata } from "next";
import Link from "next/link";

import Button from "@/components/Button";
import Container from "@/components/Container";
import FaqSection from "@/components/home/FaqSection";
import FirstVisitSection from "@/components/home/FirstVisitSection";
import TeamSection from "@/components/home/TeamSection";
import MediaFill from "@/components/media/MediaFill";
import Reveal from "@/components/Reveal";
import TreatmentsExplorer from "@/components/treatments/TreatmentsExplorer";
import { getHomePremiumContent } from "@/lib/content/home-premium";
import { getTreatmentsCatalog } from "@/lib/content/treatments-catalog";
import { getPageContext } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/messages";
import { getServerLocale } from "@/lib/i18n/server";
import { contactDetails } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import { TRACK_EVENTS } from "@/lib/tracking/events";
import { cn } from "@/lib/utils";

const ctaExperiment = {
  id: "home_cta_journey",
  variant: "v1",
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const t = getDictionary(locale);

  return buildPageMetadata({
    locale,
    path: "/",
    title: t.seo.title,
    description: t.seo.description,
    imagePath: "/images/pages/hero/inicial/hero-cabina-premium-illa-carlemany.mp4",
  });
}

export default async function Home() {
  const { locale, t, l } = await getPageContext();
  const premium = getHomePremiumContent(locale);
  const treatments = getTreatmentsCatalog(locale);
  const whatsappHref = `https://wa.me/${t.brand.whatsappNumber}`;
  const pageCopyByLocale: Record<Locale, { maps: string; phase: string; step: string }> = {
    es: { maps: "Mapa", phase: "Fase", step: "Paso" },
    ca: { maps: "Mapa", phase: "Fase", step: "Pas" },
    fr: { maps: "Carte", phase: "Phase", step: "Étape" },
    en: { maps: "Map", phase: "Phase", step: "Step" },
    uk: { maps: "Карта", phase: "Фаза", step: "Крок" },
    ru: { maps: "Карта", phase: "Фаза", step: "Шаг" },
  };
  const pageCopy = pageCopyByLocale[locale];
  const imageAltByLocale: Record<
    Locale,
    {
      hero: string;
      firstVisit: string;
      method: string;
      process: string;
      closing: string;
    }
  > = {
    es: {
      hero: "Cabina premium de Centros Ideal Andorra",
      firstVisit: "Sala de valoracion del centro",
      method: "Preparacion del tratamiento en cabina",
      process: "Detalle de cabina y proceso de tratamiento",
      closing: "Recepcion de Centros Ideal Andorra",
    },
    ca: {
      hero: "Cabina premium de Centres Ideal Andorra",
      firstVisit: "Sala de valoracio del centre",
      method: "Preparacio del tractament en cabina",
      process: "Detall de cabina i proces de tractament",
      closing: "Recepcio de Centres Ideal Andorra",
    },
    fr: {
      hero: "Cabine premium de Centres Ideal Andorra",
      firstVisit: "Salle d'evaluation du centre",
      method: "Preparation du traitement en cabine",
      process: "Detail de cabine et processus de traitement",
      closing: "Reception de Centres Ideal Andorra",
    },
    en: {
      hero: "Premium treatment cabin at Centres Ideal Andorra",
      firstVisit: "Assessment room at the centre",
      method: "Treatment preparation in cabin",
      process: "Treatment cabin detail and process",
      closing: "Reception area at Centres Ideal Andorra",
    },
    uk: {
      hero: "Преміальна кабіна в Centros Ideal Andorra",
      firstVisit: "Кабінет первинної консультації в центрі",
      method: "Підготовка процедури в кабіні",
      process: "Деталь кабіни та етапи процедури",
      closing: "Зона рецепції Centros Ideal Andorra",
    },
    ru: {
      hero: "Премиальная кабина в Centros Ideal Andorra",
      firstVisit: "Кабинет первичной консультации в центре",
      method: "Подготовка процедуры в кабинете",
      process: "Деталь кабинета и этапы процедуры",
      closing: "Зона ресепшен Centros Ideal Andorra",
    },
  };
  const imageAlt = imageAltByLocale[locale];

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10 text-white">
        <div className="absolute inset-0 -z-10">
          <MediaFill
            src="/images/pages/hero/inicial/hero-cabina-premium-illa-carlemany.mp4"
            alt={imageAlt.hero}
            priority
            mobilePosition="74% 30%"
            tabletPosition="66% 34%"
            desktopPosition="62% 38%"
            className="photo-grade"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,8,0.92)_0%,rgba(10,7,10,0.88)_30%,rgba(10,7,10,0.58)_62%,rgba(10,7,10,0.34)_100%)] sm:bg-[linear-gradient(108deg,rgba(11,8,11,0.94)_0%,rgba(11,8,11,0.82)_35%,rgba(11,8,11,0.52)_68%,rgba(11,8,11,0.3)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_16%,rgba(188,145,164,0.22),transparent_42%),radial-gradient(circle_at_12%_86%,rgba(189,145,166,0.16),transparent_34%)]" />
        </div>

        <Container className="relative flex min-h-[34.5rem] items-end pb-8 pt-[5.3rem] sm:min-h-[49rem] sm:pb-12 sm:pt-24 md:min-h-[54rem] md:pt-28 xl:min-h-[58rem] xl:pb-16">
          <Reveal className="max-w-[46rem]">
            <p className="mb-4 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-white/78 sm:text-[0.67rem] sm:tracking-[0.16em]">{premium.hero.eyebrow}</p>
            <h1 className="max-w-[13ch] text-[clamp(2.26rem,10.6vw,5.95rem)] leading-[0.87] font-semibold tracking-[-0.043em] sm:max-w-[14ch] sm:text-[clamp(2.6rem,7.7vw,5.95rem)] sm:leading-[0.86]">
              <span className="block">{premium.hero.titleLead}</span>
              <span className="block text-[color:var(--color-accent)]">{premium.hero.titleStrong}</span>
              <span className="mt-1 block text-[0.54em] leading-[1.05] tracking-[-0.02em] text-white/86">{premium.hero.titleTail}</span>
            </h1>
            <p className="mt-5 max-w-[35rem] text-[0.95rem] leading-7 text-white/84 sm:text-[1.01rem]">{premium.hero.description}</p>
            <p className="mt-2 max-w-[34rem] text-[0.86rem] leading-6 text-white/72">{premium.hero.support}</p>

            <div className="no-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
              {premium.hero.highlights.map((item, index) => (
                <span
                  key={item}
                  className={cn(
                    "glass-pill inline-flex h-9 shrink-0 items-center px-3 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-white/90",
                    index > 1 ? "hidden sm:inline-flex" : "",
                  )}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                href={l("/reservar")}
                size="lg"
                trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
                trackingSource="home_hero_primary"
                trackingLabel="reservar_valoracion_hero"
                abTest={ctaExperiment.id}
                abVariant={ctaExperiment.variant}
                className="h-[3.02rem] w-full px-7 text-[0.73rem] font-semibold uppercase tracking-[0.08em] sm:w-auto"
              >
                {t.cta.book}
              </Button>
              <Button
                href={whatsappHref}
                size="lg"
                variant="secondary"
                trackingEvent={TRACK_EVENTS.CLICK_WHATSAPP}
                trackingSource="home_hero_secondary"
                trackingLabel="whatsapp_hero"
                abTest={ctaExperiment.id}
                abVariant={ctaExperiment.variant}
                className="h-[3.02rem] w-full border-white/36 bg-black/24 px-7 text-[0.73rem] font-semibold uppercase tracking-[0.08em] text-white hover:border-white/52 hover:bg-black/34 hover:text-white sm:w-auto"
              >
                {t.cta.whatsapp}
              </Button>
              <Link
                href={contactDetails.mapsPlaceUrl}
                target="_blank"
                rel="noreferrer"
                className="group hidden h-[3.02rem] w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-white/26 bg-black/24 px-4 text-[0.66rem] font-semibold uppercase tracking-[0.07em] text-white/88 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-px hover:border-white/42 hover:bg-black/34 sm:inline-flex sm:w-auto"
              >
                <span>{premium.hero.locationChip}</span>
                <span className="text-white/58 transition-colors duration-300 group-hover:text-white/84">{pageCopy.maps}</span>
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-background)]" id="valoracion">
        <Container className="grid gap-10 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:gap-14">
          <Reveal className="xl:sticky xl:top-28 xl:self-start">
            <div className="image-frame overflow-hidden p-4 sm:p-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] sm:aspect-[4/5]">
                <MediaFill
                  src="/images/pages/hero/primera-visita/sala-valoracion-estetica.png"
                  alt={imageAlt.firstVisit}
                  mobilePosition="62% 35%"
                  tabletPosition="58% 38%"
                  desktopPosition="56% 42%"
                  className="photo-grade-soft"
                />
                <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(19,12,16,0.58)_0%,rgba(19,12,16,0.16)_65%)]" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <p className="eyebrow-label">{premium.firstVisitLabel}</p>
            <h2 className="max-w-[15ch] text-[clamp(2.08rem,4.8vw,3.44rem)] leading-[0.98] font-semibold tracking-[-0.032em] text-[color:var(--color-foreground)]">
              {premium.firstVisitTitle}
            </h2>
            <p className="mt-3 max-w-[39rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{premium.firstVisitDescription}</p>

            <FirstVisitSection items={premium.firstVisitItems} closeLabel={premium.closeModalLabel} />
          </Reveal>
        </Container>
      </section>

      <section className="section-shell relative isolate overflow-hidden text-white" id="metodo">
        <div className="absolute inset-0 -z-10">
          <MediaFill
            src="/images/pages/hero/metodo/metodo-preparacion-tratamiento-cabina.mp4"
            alt={imageAlt.method}
            mobilePosition="66% 34%"
            tabletPosition="58% 36%"
            desktopPosition="54% 40%"
            className="photo-grade"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(52,32,45,0.93)_0%,rgba(44,27,38,0.91)_40%,rgba(35,21,30,0.92)_100%)] sm:bg-[linear-gradient(168deg,rgba(52,32,45,0.9)_0%,rgba(42,26,37,0.9)_58%,rgba(34,20,29,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_20%,rgba(214,173,192,0.22),transparent_42%),radial-gradient(circle_at_16%_86%,rgba(122,82,99,0.26),transparent_34%)]" />
        </div>

        <Container className="relative">
          <Reveal className="max-w-[48rem]">
            <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-accent)]/88">{premium.methodLabel}</p>
            <h2 className="max-w-[15ch] text-[clamp(2.05rem,4.2vw,3.42rem)] leading-[0.97] font-semibold tracking-[-0.03em]">{premium.methodTitle}</h2>
            <p className="mt-4 max-w-[40rem] text-[0.9rem] leading-7 text-white/78">{premium.methodDescription}</p>
          </Reveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {premium.methodStages.map((stage, index) => (
              <Reveal key={stage.id} delay={index * 70}>
                <article className="lift-card h-full rounded-[1.35rem] border border-white/16 bg-white/[0.07] px-4 py-5 backdrop-blur-[3px] sm:px-5 sm:py-6">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]/92">{pageCopy.phase} {stage.id}</p>
                  <h3 className="mt-1 text-[1.04rem] font-semibold text-white">{stage.title}</h3>
                  <p className="mt-1 text-[0.82rem] font-medium text-white/72">{stage.subtitle}</p>
                  <p className="mt-3 text-[0.86rem] leading-7 text-white/76">{stage.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {stage.signals.map((signal) => (
                      <span
                        key={signal}
                        className="inline-flex h-7 items-center rounded-[var(--radius-pill)] border border-white/18 px-2.5 text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-white/80"
                      >
                        {signal}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-surface)]/88" id="tratamientos">
        <Container>
          <Reveal>
            <p className="eyebrow-label">{premium.treatmentsLabel}</p>
            <h2 className="max-w-[15ch] text-[clamp(2rem,4.4vw,3.2rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              {premium.treatmentsTitle}
            </h2>
            <p className="mt-3 max-w-[42rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{premium.treatmentsDescription}</p>
          </Reveal>

          <TreatmentsExplorer
            content={treatments}
            mode="home"
            bridgeHref={l("/tratamientos")}
            bridgeLabel={premium.treatmentsBridge}
            closeLabel={premium.closeModalLabel}
            treatmentsBasePath={l("/tratamientos")}
          />
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-background)]" id="equipo">
        <Container>
          <Reveal className="max-w-[44rem]">
            <p className="eyebrow-label">{premium.teamLabel}</p>
            <h2 className="max-w-[15ch] text-[clamp(1.95rem,4.1vw,3.08rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              {premium.teamTitle}
            </h2>
            <p className="mt-3 max-w-[36rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{premium.teamDescription}</p>
          </Reveal>

          <TeamSection members={premium.teamMembers} labels={premium.teamModalLabels} closeLabel={premium.closeModalLabel} />
        </Container>
      </section>

      <section className="section-shell bg-[linear-gradient(166deg,#2d1b27_0%,#241620_100%)] text-white" id="proceso">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <Reveal>
            <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.17em] text-[color:var(--color-accent)]/88">{premium.processLabel}</p>
            <h2 className="max-w-[16ch] text-[clamp(2rem,4vw,3.2rem)] leading-[0.98] font-semibold tracking-[-0.03em]">{premium.processTitle}</h2>
            <p className="mt-4 max-w-[40rem] text-[0.88rem] leading-7 text-white/76">{premium.processDescription}</p>

            <div className="mt-7 space-y-3">
              {premium.processSteps.map((step, index) => (
                <Reveal key={step.id} delay={index * 70}>
                  <article className="rounded-[1.2rem] border border-white/16 bg-white/[0.07] px-4 py-4 backdrop-blur-[2px] sm:px-5">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]/92">{pageCopy.step} {step.id}</p>
                    <h3 className="mt-1 text-[1rem] font-semibold text-white">{step.title}</h3>
                    <p className="mt-1 text-[0.86rem] leading-6 text-white/76">{step.description}</p>
                    <p className="mt-2 text-[0.8rem] leading-6 text-white/66">{step.detail}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:self-stretch">
            <article className="image-frame h-full overflow-hidden border-white/18 bg-white/8 p-4 sm:p-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] sm:h-full sm:min-h-[31rem] sm:aspect-auto">
                <MediaFill
                  src="/images/pages/hero/proceso/servicios-detalle-tratamiento-estetico.png"
                  alt={imageAlt.process}
                  mobilePosition="64% 32%"
                  tabletPosition="60% 34%"
                  desktopPosition="56% 35%"
                  className="photo-grade-soft"
                />
                <div className="absolute inset-0 bg-[linear-gradient(124deg,rgba(11,8,11,0.56)_0%,rgba(11,8,11,0.16)_64%)]" />
              </div>
            </article>
          </Reveal>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-background)]" id="faqs">
        <Container>
          <Reveal className="max-w-[46rem]">
            <p className="eyebrow-label">{premium.faqLabel}</p>
            <h2 className="max-w-[16ch] text-[clamp(1.96rem,4vw,3.05rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              {premium.faqTitle}
            </h2>
            <p className="mt-3 max-w-[39rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{premium.faqDescription}</p>
          </Reveal>

          <FaqSection items={premium.faqItems} closeLabel={premium.closeModalLabel} />
        </Container>
      </section>

      <section className="bg-[color:var(--color-background)] pb-[calc(3.4rem+env(safe-area-inset-bottom))] pt-10 sm:pb-16 sm:pt-12 md:pb-20 md:pt-14">
        <Container>
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-[1.9rem] border border-[color:var(--color-line)] bg-[color:var(--color-brand)] px-5 py-7 text-white shadow-[0_46px_110px_-74px_rgba(42,18,31,0.84)] sm:rounded-[2.4rem] sm:px-8 sm:py-10 md:px-10 md:py-12">
              <div className="absolute inset-0 -z-10">
                <MediaFill
                  src="/images/pages/hero/cta/cta-recepcion-centro-estetico.mp4"
                  alt={imageAlt.closing}
                  mobilePosition="68% 32%"
                  tabletPosition="60% 38%"
                  desktopPosition="56% 44%"
                  className="photo-grade-soft opacity-44 sm:opacity-48"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(55,23,39,0.94)_0%,rgba(70,29,49,0.88)_44%,rgba(88,38,61,0.78)_100%)] sm:bg-[linear-gradient(118deg,rgba(55,23,39,0.92)_0%,rgba(74,31,52,0.83)_52%,rgba(90,39,62,0.73)_100%)]" />
              </div>

              <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
                <div className="max-w-[43rem]">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-white/72">{t.home.closing.label}</p>
                  <h2 className="mt-3 max-w-[14ch] text-[clamp(2.05rem,4.9vw,3.65rem)] leading-[0.95] font-semibold tracking-[-0.034em]">
                    {t.home.closing.title}
                  </h2>
                  <p className="mt-4 max-w-[37rem] text-[0.93rem] leading-7 text-white/82">{t.home.closing.description}</p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row xl:flex-col">
                  <Button
                    href={l("/reservar")}
                    size="lg"
                    variant="light"
                    trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
                    trackingSource="home_cta_final_primary"
                    trackingLabel="reservar_valoracion_cta_final"
                    abTest={ctaExperiment.id}
                    abVariant={ctaExperiment.variant}
                    className="h-[3.15rem] w-full px-7 text-[0.75rem] font-semibold uppercase tracking-[0.085em] !text-[#170d13] hover:!text-[#12080f] sm:w-auto"
                  >
                    {t.cta.book}
                  </Button>
                  <Button
                    href={whatsappHref}
                    size="lg"
                    variant="secondary"
                    trackingEvent={TRACK_EVENTS.CLICK_WHATSAPP}
                    trackingSource="home_cta_final_secondary"
                    trackingLabel="whatsapp_cta_final"
                    abTest={ctaExperiment.id}
                    abVariant={ctaExperiment.variant}
                    className="h-[3.15rem] w-full border-white/34 bg-black/24 px-7 text-[0.75rem] font-semibold uppercase tracking-[0.085em] text-white hover:border-white/46 hover:bg-black/34 hover:text-white sm:w-auto"
                  >
                    {t.cta.whatsapp}
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
