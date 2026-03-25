import type { Metadata } from "next";
import Image from "next/image";

import Button from "@/components/Button";
import Container from "@/components/Container";
import { contactDetails } from "@/lib/site";
import { TRACK_EVENTS } from "@/lib/tracking/events";

export const metadata: Metadata = {
  title: "Contacto",
};

const channels = [
  {
    label: "WhatsApp",
    value: "+376 600 000",
    note: "Canal recomendado para disponibilidad y dudas rápidas.",
  },
  {
    label: "Teléfono",
    value: contactDetails.phone,
    note: "Atención según horario del centro.",
  },
  {
    label: "Email",
    value: contactDetails.email,
    note: "Consultas sobre protocolos, tiempos y condiciones.",
  },
];

const supportSteps = [
  {
    id: "01",
    title: "Nos escribes",
    description: "Cuéntanos tu objetivo y la franja horaria que prefieres.",
  },
  {
    id: "02",
    title: "Te respondemos",
    description:
      "Te damos disponibilidad actual, duración orientativa y condiciones de valoración.",
  },
  {
    id: "03",
    title: "Confirmas si encaja",
    description:
      "Reservas solo cuando tengas toda la información clara, sin presión comercial.",
  },
];

export default function ContactoPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/contact-hero-real.jpg"
            alt="Imagen de recurso para hero de contacto"
            fill
            priority
            className="photo-grade object-cover object-[58%_37%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(101deg,rgba(10,6,9,0.9)_0%,rgba(13,8,12,0.74)_40%,rgba(17,10,14,0.34)_100%)]" />
        </div>

        <Container className="relative grid min-h-[35rem] items-end gap-8 py-[6.7rem] lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-[7.5rem]">
          <div className="max-w-[48rem] text-white">
            <p className="mb-6 text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-white/74">
              Contacto
            </p>
            <h1 className="max-w-[12.8ch] text-[clamp(2.95rem,6.05vw,5.35rem)] leading-[0.88] font-semibold tracking-[-0.04em]">
              Te orientamos antes de reservar para que decidas con seguridad.
            </h1>
            <p className="mt-6 max-w-[40rem] text-[1.01rem] leading-8 text-white/84">
              Resolvemos disponibilidad, duración de la valoración y proceso de
              seguimiento antes de confirmar cita.
            </p>
            <p className="mt-2 max-w-[31rem] text-[0.71rem] leading-6 text-white/62 sm:text-[0.73rem]">
              Imágenes de recurso editorial. Se sustituirán por material propio
              del centro.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href="https://wa.me/376600000"
                size="lg"
                trackingEvent={TRACK_EVENTS.CLICK_WHATSAPP}
                trackingSource="contacto_hero_primary"
                trackingLabel="whatsapp_contacto"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.1rem] px-7 text-[0.76rem] font-semibold uppercase tracking-[0.08em]"
              >
                Escribir por WhatsApp
              </Button>
              <Button
                href="/reservar"
                size="lg"
                variant="secondary"
                trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
                trackingSource="contacto_hero_secondary"
                trackingLabel="reservar_desde_contacto"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.1rem] border-white/40 bg-white/[0.1] px-7 text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-white hover:border-white/64 hover:bg-white/[0.18] hover:text-white"
              >
                Reservar visita
              </Button>
            </div>
          </div>

          <article className="dark-panel hidden p-4 text-white/86 lg:block">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-white/66">
              Atención
            </p>
            <p className="mt-1 text-[0.9rem] leading-6 text-white/88">
              Te respondemos según horario de centro y agenda disponible.
            </p>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-background)] pb-[6.7rem] pt-[5.7rem]">
        <Container className="grid gap-9 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <article>
            <p className="eyebrow-label">Canales de atención</p>
            <h2 className="max-w-[14ch] text-[clamp(2rem,3.35vw,3.02rem)] leading-[1] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              Contacto directo con información clara antes de tu cita.
            </h2>
            <p className="mt-5 max-w-[34rem] text-[0.95rem] leading-8 text-[color:var(--color-muted)]">
              Te indicamos qué incluye la valoración, cómo funciona la
              confirmación y qué esperar en la primera visita.
            </p>

            <div className="mt-7 divide-y divide-[color:var(--color-line)] rounded-[var(--radius-lg)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-5 py-2 sm:px-6">
              {channels.map((channel) => (
                <article
                  key={channel.label}
                  className="grid gap-2 py-4 sm:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] sm:items-start"
                >
                  <p className="text-[0.67rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                    {channel.label}
                  </p>
                  <div>
                    <p className="text-[1.03rem] leading-7 font-semibold text-[color:var(--color-foreground)]">
                      {channel.value}
                    </p>
                    <p className="mt-1 text-[0.88rem] leading-6 text-[color:var(--color-muted)]">
                      {channel.note}
                    </p>
                  </div>
                </article>
              ))}
              <article className="grid gap-2 py-4 sm:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] sm:items-start">
                <p className="text-[0.67rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                  Ubicación
                </p>
                <p className="text-[0.9rem] leading-7 text-[color:var(--color-muted)]">
                  {contactDetails.address}
                </p>
              </article>
            </div>
          </article>

          <article className="image-frame overflow-hidden p-4 sm:p-5">
            <div className="relative h-[22rem] overflow-hidden rounded-[1.45rem] sm:h-[27rem]">
              <Image
                src="/images/contact-studio-real.jpg"
                alt="Imagen de recurso para zona de asesoría"
                fill
                className="photo-grade-soft object-cover object-[56%_43%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(16,10,14,0.6)_0%,rgba(16,10,14,0.14)_66%)]" />
              <div className="absolute left-4 right-4 top-4 rounded-[1rem] border border-white/22 bg-black/28 px-4 py-3 backdrop-blur-[6px]">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-white/74">
                  Consulta previa
                </p>
                <p className="mt-1 text-[0.88rem] leading-6 text-white/90">
                  Confirmación y condiciones explicadas antes de reservar.
                </p>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-surface)]/78 pb-[7rem] pt-[5.7rem]">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-start">
          <article>
            <p className="eyebrow-label">Proceso de contacto</p>
            <h2 className="max-w-[16ch] text-[clamp(2rem,3.25vw,2.92rem)] leading-[1] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              Qué pasa desde que nos escribes hasta confirmar tu visita.
            </h2>
          </article>

          <div className="relative pl-8">
            <div className="absolute bottom-0 left-[0.72rem] top-1 w-px bg-[linear-gradient(180deg,rgba(91,42,66,0.36),rgba(91,42,66,0.08))]" />
            <div className="space-y-6">
              {supportSteps.map((step) => (
                <article key={step.id} className="relative">
                  <span className="absolute -left-8 top-1 inline-flex h-[1.72rem] w-[1.72rem] items-center justify-center rounded-full border border-[color:var(--color-brand)]/34 bg-[color:var(--color-pill)] text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)]">
                    {step.id}
                  </span>
                  <h3 className="text-[1.03rem] font-semibold tracking-[-0.015em] text-[color:var(--color-foreground)]">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-[38rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <Button
              href="/reservar"
              variant="secondary"
              trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
              trackingSource="contacto_proceso_cta"
              trackingLabel="reservar_desde_proceso_contacto"
              abTest="home_cta_journey"
              abVariant="v1"
              className="mt-8 h-[3rem] px-6 text-[0.75rem] font-semibold uppercase tracking-[0.08em]"
            >
              Reservar valoración
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
