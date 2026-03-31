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
    es: "Reserva valoracion inicial en Centros Ideal Andorra. Proceso claro, confirmacion por WhatsApp y primera visita sin compromiso.",
    ca: "Reserva valoracio inicial a Centres Ideal Andorra. Proces clar, confirmacio per WhatsApp i primera visita sense compromis.",
    fr: "Reservez votre evaluation initiale chez Centres Ideal Andorra. Processus clair, confirmation sur WhatsApp et premiere visite sans engagement.",
    en: "Book your initial assessment at Centres Ideal Andorra. Clear process, WhatsApp confirmation and first visit with no obligation.",
    uk: "Запис на первинну консультацію в Centres Ideal Andorra: прозорий процес, підтвердження через WhatsApp і перший візит без зобов'язань.",
    ru: "Запишитесь на первичную консультацию в Centres Ideal Andorra: понятный процесс, подтверждение через WhatsApp и первый визит без обязательств.",
  };

  return buildPageMetadata({
    locale,
    path: "/reservar",
    title: t.nav.book,
    description: descriptionByLocale[locale],
    imagePath: "/images/pages/reservar/hero/hero-reserva-tratamiento.mp4",
  });
}

export default async function ReservarPage() {
  const { locale, t, l } = await getPageContext();
  const whatsappHref = `https://wa.me/${t.brand.whatsappNumber}`;
  const imageAltByLocale: Record<Locale, { hero: string; cabin: string; closing: string }> = {
    es: {
      hero: "Cabina principal de reserva",
      cabin: "Cabina de valoracion",
      closing: "Detalle de cabina",
    },
    ca: {
      hero: "Cabina principal de reserva",
      cabin: "Cabina de valoracio",
      closing: "Detall de cabina",
    },
    fr: {
      hero: "Cabine principale de reservation",
      cabin: "Cabine d'evaluation",
      closing: "Detail de cabine",
    },
    en: {
      hero: "Main booking treatment cabin",
      cabin: "Assessment cabin",
      closing: "Treatment cabin detail",
    },
    uk: {
      hero: "Основна кабіна для запису",
      cabin: "Кабіна консультації",
      closing: "Деталь кабіни",
    },
    ru: {
      hero: "Основной кабинет для записи",
      cabin: "Кабинет консультации",
      closing: "Деталь кабинета",
    },
  };
  const imageAlt = imageAltByLocale[locale];

  return (
    <>
      <PageHero
        label={t.bookingPage.hero.label}
        title={t.bookingPage.hero.title}
        description={t.bookingPage.hero.description}
        imageSrc="/images/pages/reservar/hero/hero-reserva-tratamiento.mp4"
        imageAlt={imageAlt.hero}
        mobileMediaPosition="72% 34%"
        tabletMediaPosition="62% 36%"
        desktopMediaPosition="56% 38%"
        primaryCta={{
          href: whatsappHref,
          label: t.cta.confirmWhatsapp,
          event: TRACK_EVENTS.CLICK_WHATSAPP,
          source: "reservar_hero_primary",
          trackingLabel: "whatsapp_reservar",
        }}
        panel={{
          eyebrow: t.bookingPage.hero.panelEyebrow,
          description: t.bookingPage.hero.panelDescription,
        }}
      />

      <section className="section-shell bg-[color:var(--color-background)]">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:items-start">
          <div>
            <SectionHeading
              label={t.bookingPage.includes.label}
              title={t.bookingPage.includes.title}
              description={t.bookingPage.includes.description}
            />

            <div className="mt-7 space-y-3">
              {t.bookingPage.includes.rows.map((item) => (
                <article key={item} className="surface-card rounded-[1.2rem] px-4 py-4 sm:px-5">
                  <p className="text-[0.86rem] leading-7 text-[color:var(--color-muted)]">{item}</p>
                </article>
              ))}
            </div>
          </div>

          <article className="image-frame overflow-hidden p-4 sm:p-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] sm:h-[27rem] sm:aspect-auto">
              <MediaFill
                src="/images/pages/reservar/cabina/cabina-valoracion-estetica.jpg"
                alt={imageAlt.cabin}
                mobilePosition="64% 34%"
                tabletPosition="58% 38%"
                desktopPosition="56% 39%"
                className="photo-grade-soft"
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(16,10,14,0.58)_0%,rgba(16,10,14,0.12)_66%)]" />
            </div>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-surface)]/80">
        <Container>
          <SectionHeading
            label={t.bookingPage.process.label}
            title={t.bookingPage.process.title}
            description={t.bookingPage.process.description}
          />

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {t.bookingPage.process.steps.map((step) => (
              <article key={step.id} className="surface-card rounded-[1.2rem] px-4 py-4 sm:px-5">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                  {step.id}
                </p>
                <h3 className="mt-1 text-[0.96rem] font-semibold text-[color:var(--color-foreground)]">
                  {step.title}
                </h3>
                <p className="mt-1 text-[0.82rem] leading-6 text-[color:var(--color-muted)]">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-background)] pb-6 pt-0">
        <Container>
          <article className="surface-card rounded-[1.3rem] px-4 py-5 sm:px-6 sm:py-6">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
              {t.whatsapp.supportLabel}
            </p>
            <h2 className="mt-2 max-w-[22ch] text-[clamp(1.52rem,2.9vw,2.2rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-[color:var(--color-foreground)]">
              {t.whatsapp.supportTitle}
            </h2>
            <p className="mt-3 text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{t.whatsapp.supportDescription}</p>
          </article>
        </Container>
      </section>

      <PageClosingCta
        label={t.bookingPage.closing.label}
        title={t.bookingPage.closing.title}
        description={t.bookingPage.closing.description}
        imageSrc="/images/pages/reservar/hero/hero-reserva-tratamiento.mp4"
        imageAlt={imageAlt.closing}
        mobileMediaPosition="68% 34%"
        tabletMediaPosition="60% 36%"
        desktopMediaPosition="56% 39%"
        primaryCta={{
          href: whatsappHref,
          label: t.cta.confirmWhatsapp,
          event: TRACK_EVENTS.CLICK_WHATSAPP,
          source: "reservar_bottom_primary",
          trackingLabel: "whatsapp_reservar_final",
        }}
        secondaryCta={{
          href: l("/contacto"),
          label: t.nav.contact,
          event: TRACK_EVENTS.CLICK_RESERVAR,
          source: "reservar_bottom_secondary",
          trackingLabel: "contacto_reservar_final",
          variant: "ghost",
        }}
      />
    </>
  );
}
