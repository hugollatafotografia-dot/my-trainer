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
import { getDictionary } from "@/lib/i18n/messages";
import { getServerLocale } from "@/lib/i18n/server";
import { buildPageMetadata } from "@/lib/seo";
import { TRACK_EVENTS } from "@/lib/tracking/events";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const t = getDictionary(locale);

  return buildPageMetadata({
    locale,
    path: "/contacto",
    title: t.nav.contact,
    description:
      "Contacto directo con Centros Ideal Andorra. WhatsApp, direccion en Illa Carlemany y proceso de reserva de valoracion inicial.",
    imagePath: "/images/contact/hero-contacto-centro.mp4",
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
  }[locale];

  return (
    <>
      <PageHero
        label={t.contactPage.hero.label}
        title={t.contactPage.hero.title}
        description={t.contactPage.hero.description}
        imageSrc="/images/contact/hero-contacto-centro.mp4"
        imageAlt="Recepción y contacto del centro"
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

            <div className="mt-7 divide-y divide-[color:var(--color-line)] rounded-[1.2rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-5 py-2 sm:px-6">
              {t.contactPage.channels.rows.map((channel) => (
                <article
                  key={channel.label}
                  className="grid gap-1 py-4 sm:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] sm:items-start"
                >
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                    {channel.label}
                  </p>
                  <div>
                    <p className="text-[0.95rem] leading-7 font-semibold text-[color:var(--color-foreground)]">
                      {channel.value}
                    </p>
                    <p className="text-[0.82rem] leading-6 text-[color:var(--color-muted)]">{channel.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <article className="image-frame overflow-hidden p-4 sm:p-5">
            <div className="relative h-[22rem] overflow-hidden rounded-[1.45rem] sm:h-[27rem]">
              <MediaFill
                src="/images/contact/zona-asesoria-estudio.jpg"
                alt="Zona de asesoría"
                className="photo-grade-soft object-cover object-[56%_43%]"
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
          <article className="surface-card rounded-[1.35rem] px-6 py-6">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
              {t.contactPage.support.label}
            </p>
            <h2 className="mt-2 max-w-[20ch] text-[clamp(1.55rem,3vw,2.35rem)] leading-[1] font-semibold tracking-[-0.02em] text-[color:var(--color-foreground)]">
              {t.contactPage.support.title}
            </h2>
            <p className="mt-3 max-w-[58rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">
              {t.contactPage.support.description}
            </p>
            <p className="mt-3 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">
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
        imageSrc="/images/shared/detalle-centro-ideal-illa-carlemany.jpg"
        imageAlt="Detalle del centro"
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
