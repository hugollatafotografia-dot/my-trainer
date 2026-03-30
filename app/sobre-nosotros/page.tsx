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
    es: "Conoce el metodo de trabajo, el equipo profesional y la operativa de Centros Ideal Andorra en Illa Carlemany.",
    ca: "Coneix el metode de treball, l'equip professional i l'operativa de Centres Ideal Andorra a Illa Carlemany.",
    fr: "Decouvrez la methode de travail, l'equipe professionnelle et l'operativa de Centres Ideal Andorra a Illa Carlemany.",
    en: "Learn about the working method, professional team and operations of Centres Ideal Andorra at Illa Carlemany.",
    uk: "Ознайомтеся з методом роботи, командою і операційним підходом Centres Ideal Andorra в Illa Carlemany.",
    ru: "Познакомьтесь с методом работы, командой и операционным подходом Centres Ideal Andorra в Illa Carlemany.",
  };

  return buildPageMetadata({
    locale,
    path: "/sobre-nosotros",
    title: t.nav.about,
    description: descriptionByLocale[locale],
    imagePath: "/images/pages/sobre-nosotros/hero/hero-centro-estetica-illa-carlemany.jpg",
  });
}

export default async function SobreNosotrosPage() {
  const { locale, t, l } = await getPageContext();
  const whatsappHref = `https://wa.me/${t.brand.whatsappNumber}`;
  const imageAltByLocale: Record<
    Locale,
    { hero: string; method: string; team: string; closing: string }
  > = {
    es: {
      hero: "Centro y equipo",
      method: "Metodo del centro",
      team: "Experiencia en cabina",
      closing: "Seguimiento por WhatsApp",
    },
    ca: {
      hero: "Centre i equip",
      method: "Metode del centre",
      team: "Experiencia en cabina",
      closing: "Seguiment per WhatsApp",
    },
    fr: {
      hero: "Centre et equipe",
      method: "Methode du centre",
      team: "Experience en cabine",
      closing: "Suivi via WhatsApp",
    },
    en: {
      hero: "Centre and team",
      method: "Centre method",
      team: "In-cabin experience",
      closing: "Follow-up on WhatsApp",
    },
    uk: {
      hero: "Центр і команда",
      method: "Метод роботи центру",
      team: "Досвід процедур у кабіні",
      closing: "Супровід через WhatsApp",
    },
    ru: {
      hero: "Центр и команда",
      method: "Метод работы центра",
      team: "Опыт процедур в кабинете",
      closing: "Сопровождение через WhatsApp",
    },
  };
  const imageAlt = imageAltByLocale[locale];

  return (
    <>
      <PageHero
        label={t.aboutPage.hero.label}
        title={t.aboutPage.hero.title}
        description={t.aboutPage.hero.description}
        imageSrc="/images/pages/sobre-nosotros/hero/hero-centro-estetica-illa-carlemany.jpg"
        imageAlt={imageAlt.hero}
        primaryCta={{
          href: l("/reservar"),
          label: t.cta.book,
          event: TRACK_EVENTS.CLICK_RESERVAR,
          source: "sobre_hero_primary",
          trackingLabel: "reservar_visita_sobre",
        }}
        secondaryCta={{
          href: whatsappHref,
          label: t.cta.whatsapp,
          event: TRACK_EVENTS.CLICK_WHATSAPP,
          source: "sobre_hero_secondary",
          trackingLabel: "whatsapp_sobre",
        }}
      />

      <section className="section-shell bg-[color:var(--color-background)]">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:items-stretch">
          <div>
            <SectionHeading
              label={t.aboutPage.method.label}
              title={t.aboutPage.method.title}
              description={t.aboutPage.method.description}
            />

            <div className="mt-7 space-y-3">
              {t.aboutPage.method.principles.map((item, index) => (
                <article key={item.title} className="surface-card rounded-[1.2rem] px-4 py-4 sm:px-5">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-[0.98rem] font-semibold text-[color:var(--color-foreground)]">{item.title}</h3>
                  <p className="mt-1 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <article className="image-frame h-full overflow-hidden p-4 sm:p-5">
            <div className="relative h-full min-h-[25rem] overflow-hidden rounded-[1.45rem] sm:min-h-[33rem]">
              <MediaFill
                src="/images/pages/sobre-nosotros/historia/historia-metodo-equipo.mp4"
                alt={imageAlt.method}
                className="photo-grade-soft object-cover object-[58%_36%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(17,10,14,0.52)_0%,rgba(17,10,14,0.14)_66%)]" />
            </div>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-[linear-gradient(170deg,#321f2c_0%,#271923_100%)] text-white">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:items-start">
          <article className="image-frame overflow-hidden border-white/18 bg-white/8 p-4 sm:p-5">
            <div className="relative h-[18.5rem] overflow-hidden rounded-[1.4rem] sm:h-[27rem]">
              <MediaFill
                src="/images/pages/sobre-nosotros/equipo/experiencia-cabina-centro.jpg"
                alt={imageAlt.team}
                className="photo-grade-soft object-cover object-[56%_42%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(13,8,11,0.48)_0%,rgba(13,8,11,0.12)_66%)]" />
            </div>
          </article>

          <div>
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[color:var(--color-accent)]/86">
              {t.aboutPage.identity.label}
            </p>
            <h2 className="max-w-[14ch] text-[clamp(2rem,3.8vw,3.25rem)] leading-[0.97] font-semibold tracking-[-0.03em]">
              {t.aboutPage.identity.title}
            </h2>
            <div className="mt-6 space-y-3">
              {t.aboutPage.identity.highlights.map((item) => (
                <article key={item} className="dark-panel rounded-[1.1rem] px-4 py-3">
                  <p className="text-[0.88rem] leading-7 text-white/82">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <PageClosingCta
        label={t.aboutPage.closing.label}
        title={t.aboutPage.closing.title}
        description={t.aboutPage.closing.description}
        imageSrc="/images/pages/sobre-nosotros/cierre/seguimiento-whatsapp-paciente.jpg"
        imageAlt={imageAlt.closing}
        primaryCta={{
          href: l("/reservar"),
          label: t.cta.book,
          event: TRACK_EVENTS.CLICK_RESERVAR,
          source: "sobre_bottom_primary",
          trackingLabel: "reservar_sobre_final",
        }}
        secondaryCta={{
          href: whatsappHref,
          label: t.cta.whatsapp,
          event: TRACK_EVENTS.CLICK_WHATSAPP,
          source: "sobre_bottom_secondary",
          trackingLabel: "whatsapp_sobre_final",
        }}
      />
    </>
  );
}
