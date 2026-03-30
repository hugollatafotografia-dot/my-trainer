import type { Metadata } from "next";

import Container from "@/components/Container";
import MediaFill from "@/components/media/MediaFill";
import PageClosingCta from "@/components/page/PageClosingCta";
import PageHero from "@/components/page/PageHero";
import SectionHeading from "@/components/page/SectionHeading";
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
    es: "Resultados y documentacion de evolucion en Centros Ideal Andorra con enfoque responsable y expectativas realistas.",
    ca: "Resultats i documentacio d'evolucio a Centres Ideal Andorra amb enfoc responsable i expectatives realistes.",
    fr: "Resultats et documentation d'evolution chez Centres Ideal Andorra avec une approche responsable et des attentes realistes.",
    en: "Results and documented evolution at Centres Ideal Andorra with a responsible approach and realistic expectations.",
    uk: "Результати та задокументована динаміка в Centres Ideal Andorra з відповідальним підходом і реалістичними очікуваннями.",
    ru: "Результаты и документированная динамика в Centres Ideal Andorra с ответственным подходом и реалистичными ожиданиями.",
  };

  return buildPageMetadata({
    locale,
    path: "/resultados",
    title: t.nav.results,
    description: descriptionByLocale[locale],
    imagePath: "/images/pages/resultados/hero/hero-resultados-tratamientos.mp4",
  });
}

export default async function ResultadosPage() {
  const { locale, t, l } = await getPageContext();
  const whatsappHref = `https://wa.me/${t.brand.whatsappNumber}`;
  const imageAltByLocale: Record<
    Locale,
    { hero: string; trust: string; closing: string }
  > = {
    es: {
      hero: "Resultados de tratamientos personalizados",
      trust: "Detalle del centro y equipo profesional",
      closing: "Detalle del centro",
    },
    ca: {
      hero: "Resultats de tractaments personalitzats",
      trust: "Detall del centre i l'equip professional",
      closing: "Detall del centre",
    },
    fr: {
      hero: "Resultats de traitements personnalises",
      trust: "Detail du centre et de l'equipe professionnelle",
      closing: "Detail du centre",
    },
    en: {
      hero: "Results of personalised treatments",
      trust: "Centre detail and professional team",
      closing: "Centre detail",
    },
    uk: {
      hero: "Результати персоналізованих процедур",
      trust: "Деталі центру та професійної команди",
      closing: "Деталь центру",
    },
    ru: {
      hero: "Результаты персонализированных процедур",
      trust: "Детали центра и профессиональной команды",
      closing: "Деталь центра",
    },
  };
  const imageAlt = imageAltByLocale[locale];

  return (
    <>
      <PageHero
        label={t.resultsPage.hero.label}
        title={t.resultsPage.hero.title}
        description={t.resultsPage.hero.description}
        imageSrc="/images/pages/resultados/hero/hero-resultados-tratamientos.mp4"
        imageAlt={imageAlt.hero}
        primaryCta={{
          href: l("/reservar"),
          label: t.cta.book,
          event: TRACK_EVENTS.CLICK_RESERVAR,
          source: "resultados_hero_primary",
          trackingLabel: "reservar_visita_resultados",
        }}
        contextLink={{ href: l("/tratamientos"), label: t.cta.viewTreatments }}
      />

      <section className="section-shell bg-[color:var(--color-background)]">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
          <div>
            <SectionHeading
              label={t.resultsPage.documentation.label}
              title={t.resultsPage.documentation.title}
              description={t.resultsPage.documentation.description}
            />

            <div className="mt-7 space-y-3">
              {t.resultsPage.documentation.pillars.map((item) => (
                <article key={item.title} className="surface-card rounded-[1.2rem] px-4 py-4 sm:px-5">
                  <h3 className="text-[0.98rem] font-semibold text-[color:var(--color-foreground)]">{item.title}</h3>
                  <p className="mt-1 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <article className="image-frame overflow-hidden p-4 sm:p-5">
            <div className="relative h-[18.5rem] overflow-hidden rounded-[1.45rem] sm:h-[26rem]">
              <MediaFill
                src="/images/pages/resultados/confianza/modulo-confianza-centro.mp4"
                alt={imageAlt.trust}
                className="photo-grade-soft object-cover object-[54%_36%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(16,10,14,0.48)_0%,rgba(16,10,14,0.12)_66%)]" />
            </div>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-surface)]/80">
        <Container>
          <SectionHeading
            label={t.resultsPage.visual.label}
            title={t.resultsPage.visual.title}
            description={t.resultsPage.visual.description}
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {t.resultsPage.visual.assets.map((item) => (
              <article key={item.id} className="surface-card overflow-hidden rounded-[1.3rem] border border-[color:var(--color-line)]">
                <div className="relative h-[15.8rem] sm:h-[20rem]">
                  <MediaFill src={item.src} alt={item.alt} className="photo-grade-soft object-cover object-[56%_38%]" />
                  <div className="absolute inset-0 bg-[linear-gradient(126deg,rgba(16,10,14,0.28)_0%,rgba(16,10,14,0.12)_64%)]" />
                </div>
                <div className="px-5 py-4">
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">{item.alt}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-surface)]/68">
        <Container>
          <SectionHeading
            label={t.resultsPage.transparency.label}
            title={t.resultsPage.transparency.title}
            description={t.resultsPage.transparency.description}
          />

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {t.resultsPage.transparency.rows.map((item) => (
              <article key={item} className="surface-card rounded-[1.2rem] px-4 py-4 sm:px-5">
                <p className="text-[0.86rem] leading-7 text-[color:var(--color-muted)]">{item}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <PageClosingCta
        label={t.resultsPage.closing.label}
        title={t.resultsPage.closing.title}
        description={t.resultsPage.closing.description}
        imageSrc="/images/pages/resultados/cierre/detalle-centro-ideal-illa-carlemany.png"
        imageAlt={imageAlt.closing}
        primaryCta={{
          href: l("/reservar"),
          label: t.cta.book,
          event: TRACK_EVENTS.CLICK_RESERVAR,
          source: "resultados_bottom_primary",
          trackingLabel: "reservar_desde_resultados",
        }}
        secondaryCta={{
          href: whatsappHref,
          label: t.cta.whatsapp,
          event: TRACK_EVENTS.CLICK_WHATSAPP,
          source: "resultados_bottom_secondary",
          trackingLabel: "whatsapp_desde_resultados",
        }}
      />
    </>
  );
}
