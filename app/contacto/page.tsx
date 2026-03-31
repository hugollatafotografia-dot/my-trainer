import type { Metadata } from "next";

import ChatOpenButton from "@/components/chat/ChatOpenButton";
import EmailContactForm from "@/components/contact/EmailContactForm";
import WhatsappPreBookingForm from "@/components/contact/WhatsappPreBookingForm";
import Container from "@/components/Container";
import MediaFill from "@/components/media/MediaFill";
import PageClosingCta from "@/components/page/PageClosingCta";
import PageHero from "@/components/page/PageHero";
import SectionHeading from "@/components/page/SectionHeading";
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
    es: "Contacto directo con Centros Ideal Andorra. WhatsApp, direccion en illa Carlemany y proceso de reserva de valoracion inicial.",
    ca: "Contacte directe amb Centres Ideal Andorra. WhatsApp, adreca a illa Carlemany i proces de reserva de valoracio inicial.",
    fr: "Contact direct avec Centres Ideal Andorra. WhatsApp, adresse a illa Carlemany et processus de reservation initiale.",
    en: "Direct contact with Centres Ideal Andorra. WhatsApp, illa Carlemany location and initial assessment booking flow.",
    uk: "Прямий контакт із Centres Ideal Andorra: WhatsApp, адреса в illa Carlemany і процес запису на первинну консультацію.",
    ru: "Прямой контакт с Centres Ideal Andorra: WhatsApp, адрес в illa Carlemany и процесс записи на первичную консультацию.",
  };

  return buildPageMetadata({
    locale,
    path: "/contacto",
    title: t.nav.contact,
    description: descriptionByLocale[locale],
    imagePath: "/images/pages/contacto/hero/hero-contacto-centro.mp4",
  });
}

export default async function ContactoPage() {
  const { locale, t, l } = await getPageContext();
  const whatsappHref = `https://wa.me/${t.brand.whatsappNumber}`;
  const catalog = getTreatmentsCatalog(locale);

  const sectionCopy = {
    es: {
      label: "Solicitud guiada",
      title: "Pre-reserva y correo en un único flujo de contacto",
      description:
        "Prepara una solicitud de cita por WhatsApp con todos los datos clave o envía una consulta formal por correo desde la web.",
    },
    ca: {
      label: "Sollicitud guiada",
      title: "Pre-reserva i correu en un unic flux de contacte",
      description:
        "Prepara una sollicitud de cita per WhatsApp amb totes les dades clau o envia una consulta formal per correu des del web.",
    },
    fr: {
      label: "Demande guidee",
      title: "Pre-reservation et email dans un seul flux de contact",
      description:
        "Preparez une demande de rendez-vous WhatsApp avec toutes les informations utiles ou envoyez une demande formelle par email depuis le site.",
    },
    en: {
      label: "Guided request",
      title: "Pre-booking and email in a single contact flow",
      description:
        "Prepare a WhatsApp booking request with all key details or send a formal email inquiry directly from the website.",
    },
    uk: {
      label: "Керований запит",
      title: "Попередній запис і електронна пошта в одному контакті",
      description:
        "Підготуйте запит на запис у WhatsApp з усіма ключовими даними або надішліть формальний запит на електронну пошту прямо з сайту.",
    },
    ru: {
      label: "Управляемый запрос",
      title: "Предзапись и электронная почта в едином контакте",
      description:
        "Подготовьте запрос на запись в WhatsApp со всеми ключевыми данными или отправьте формальный запрос по электронной почте прямо с сайта.",
    },
  }[locale];
  const imageAltByLocale: Record<Locale, { hero: string; advisory: string; closing: string }> = {
    es: {
      hero: "Recepcion y contacto del centro",
      advisory: "Zona de asesoria",
      closing: "Detalle del centro",
    },
    ca: {
      hero: "Recepcio i contacte del centre",
      advisory: "Zona d'assessoria",
      closing: "Detall del centre",
    },
    fr: {
      hero: "Reception et contact du centre",
      advisory: "Zone de conseil",
      closing: "Detail du centre",
    },
    en: {
      hero: "Reception and contact area of the centre",
      advisory: "Consultation area",
      closing: "Centre detail",
    },
    uk: {
      hero: "Рецепція та зона контакту центру",
      advisory: "Зона консультації",
      closing: "Деталь центру",
    },
    ru: {
      hero: "Ресепшен и контактная зона центра",
      advisory: "Зона консультации",
      closing: "Деталь центра",
    },
  };
  const imageAlt = imageAltByLocale[locale];

  return (
    <>
      <PageHero
        label={t.contactPage.hero.label}
        title={t.contactPage.hero.title}
        description={t.contactPage.hero.description}
        imageSrc="/images/pages/contacto/hero/hero-contacto-centro.mp4"
        imageAlt={imageAlt.hero}
        mobileMediaPosition="74% 32%"
        tabletMediaPosition="63% 35%"
        desktopMediaPosition="56% 36%"
        primaryCta={{
          href: whatsappHref,
          label: t.cta.whatsapp,
          event: TRACK_EVENTS.CLICK_WHATSAPP,
          source: "contacto_hero_primary",
          trackingLabel: "whatsapp_contacto",
        }}
        contextLink={{ href: l("/reservar"), label: t.cta.book }}
      />

      <section className="section-shell bg-[color:var(--color-background)]">
        <Container className="grid gap-9 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div>
            <SectionHeading
              label={t.contactPage.channels.label}
              title={t.contactPage.channels.title}
              description={t.contactPage.channels.description}
            />

            <div className="mt-7 divide-y divide-[color:var(--color-line)] rounded-[1.2rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 py-2 sm:px-6">
              {t.contactPage.channels.rows.map((channel) => (
                <article
                  key={channel.label}
                  className="grid gap-1 py-4 sm:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] sm:items-start"
                >
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                    {channel.label}
                  </p>
                  <div>
                    <p className="text-[0.96rem] leading-7 font-semibold text-[color:var(--color-foreground)]">
                      {channel.value}
                    </p>
                    <p className="text-[0.85rem] leading-6 text-[color:var(--color-muted)]">{channel.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <article className="image-frame overflow-hidden p-4 sm:p-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] sm:h-[27rem] sm:aspect-auto">
              <MediaFill
                src="/images/pages/contacto/asesoria/zona-asesoria-estudio.png"
                alt={imageAlt.advisory}
                mobilePosition="64% 36%"
                tabletPosition="58% 40%"
                desktopPosition="56% 43%"
                className="photo-grade-soft"
              />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(16,10,14,0.58)_0%,rgba(16,10,14,0.14)_66%)]" />
            </div>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-surface)]/80">
        <Container>
          <SectionHeading
            label={sectionCopy.label}
            title={sectionCopy.title}
            description={sectionCopy.description}
          />

          <div className="mt-7 grid gap-4 xl:grid-cols-2">
            <WhatsappPreBookingForm
              locale={locale}
              whatsappNumber={t.brand.whatsappNumber}
              treatments={catalog.treatments.map((item) => item.name)}
            />
            <EmailContactForm locale={locale} officialEmail={t.brand.email} />
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-surface)]/80">
        <Container>
          <SectionHeading
            label={t.contactPage.process.label}
            title={t.contactPage.process.title}
            description={t.contactPage.process.description}
          />

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {t.contactPage.process.steps.map((step) => (
              <article key={step.id} className="surface-card rounded-[1.2rem] px-5 py-4">
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
          <article className="surface-card rounded-[1.35rem] px-4 py-5 sm:px-6 sm:py-6">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
              {t.contactPage.support.label}
            </p>
            <h2 className="mt-2 max-w-[20ch] text-[clamp(1.55rem,3vw,2.35rem)] leading-[1] font-semibold tracking-[-0.02em] text-[color:var(--color-foreground)]">
              {t.contactPage.support.title}
            </h2>
            <p className="mt-3 max-w-[58rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">
              {t.contactPage.support.description}
            </p>
            <p className="mt-3 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">
              {t.whatsapp.supportHumanNotice}
              <br />
              {t.whatsapp.supportFutureNotice}
            </p>
            <div className="mt-5">
              <ChatOpenButton
                label={t.chat.openInContactLabel}
                description={t.chat.openInContactDescription}
              />
            </div>
          </article>
        </Container>
      </section>

      <PageClosingCta
        label={t.contactPage.closing.label}
        title={t.contactPage.closing.title}
        description={t.contactPage.closing.description}
        imageSrc="/images/pages/contacto/cierre/detalle-centro-ideal-illa-carlemany.png"
        imageAlt={imageAlt.closing}
        mobileMediaPosition="64% 35%"
        tabletMediaPosition="58% 40%"
        desktopMediaPosition="54% 40%"
        primaryCta={{
          href: l("/reservar"),
          label: t.cta.book,
          event: TRACK_EVENTS.CLICK_RESERVAR,
          source: "contacto_bottom_primary",
          trackingLabel: "reservar_contacto_final",
        }}
        secondaryCta={{
          href: whatsappHref,
          label: t.cta.whatsapp,
          event: TRACK_EVENTS.CLICK_WHATSAPP,
          source: "contacto_bottom_secondary",
          trackingLabel: "whatsapp_contacto_final",
        }}
      />
    </>
  );
}
