import type { Metadata } from "next";
import Image from "next/image";

import Button from "@/components/Button";
import Container from "@/components/Container";
import { TRACK_EVENTS } from "@/lib/tracking/events";

export const metadata: Metadata = {
  title: "Reservar visita",
};

const includedItems = [
  "Diagnóstico facial o corporal según prioridad.",
  "Identificación de objetivo principal y límites realistas.",
  "Plan orientativo por fases con siguiente paso recomendado.",
];

const steps = [
  {
    id: "01",
    title: "Solicitas tu valoración",
    description: "Nos compartes objetivo, disponibilidad y canal de preferencia.",
  },
  {
    id: "02",
    title: "Confirmamos la cita",
    description:
      "Te enviamos hora, duración orientativa y detalles previos para acudir tranquila.",
  },
  {
    id: "03",
    title: "Realizamos el diagnóstico",
    description:
      "En cabina revisamos tu caso y decidimos juntas si iniciar tratamiento.",
  },
];

const visitNotes = [
  "Duración orientativa: 30 minutos.",
  "Precio comunicado antes de confirmar.",
  "Sin compromiso de iniciar tratamiento.",
  "Puedes cancelar o reprogramar con antelación.",
];

export default function ReservarPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/booking-hero-real.jpg"
            alt="Imagen de recurso para hero de reserva"
            fill
            priority
            className="photo-grade object-cover object-[58%_37%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(102deg,rgba(10,6,9,0.9)_0%,rgba(13,8,12,0.74)_42%,rgba(17,10,14,0.34)_100%)]" />
        </div>

        <Container className="relative grid min-h-[35rem] items-end gap-8 py-[6.7rem] lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-[7.5rem]">
          <div className="max-w-[48rem] text-white">
            <p className="mb-6 text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-white/74">
              Reservar visita
            </p>
            <h1 className="max-w-[12.8ch] text-[clamp(2.98rem,6.1vw,5.35rem)] leading-[0.88] font-semibold tracking-[-0.04em]">
              Valoración inicial clara para decidir tu tratamiento con criterio.
            </h1>
            <p className="mt-6 max-w-[39rem] text-[1.01rem] leading-8 text-white/84">
              Te explicamos qué incluye la cita, tiempo estimado y condiciones
              antes de confirmar.
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
                trackingSource="reservar_hero_primary"
                trackingLabel="whatsapp_reservar"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.1rem] px-7 text-[0.76rem] font-semibold uppercase tracking-[0.08em]"
              >
                Reservar por WhatsApp
              </Button>
              <Button
                href="/contacto"
                size="lg"
                variant="secondary"
                trackingEvent={TRACK_EVENTS.CLICK_WHATSAPP}
                trackingSource="reservar_hero_secondary"
                trackingLabel="resolver_dudas_reservar"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.1rem] border-white/40 bg-white/[0.1] px-7 text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-white hover:border-white/64 hover:bg-white/[0.18] hover:text-white"
              >
                Resolver dudas
              </Button>
            </div>
          </div>

          <article className="dark-panel hidden p-4 text-white/86 lg:block">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-white/66">
              Decisión segura
            </p>
            <p className="mt-1 text-[0.9rem] leading-6 text-white/88">
              Sin compromiso de tratamiento tras la primera valoración.
            </p>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-background)] pb-[6.8rem] pt-[5.8rem]">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-start">
          <article>
            <p className="eyebrow-label">Qué incluye la valoración</p>
            <h2 className="max-w-[14ch] text-[clamp(2.02rem,3.35vw,3.04rem)] leading-[1] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              Una primera visita útil para decidir con información clara.
            </h2>
            <ul className="mt-6 space-y-2 text-[0.93rem] leading-7 text-[color:var(--color-muted)]">
              {includedItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {visitNotes.map((item) => (
                <span
                  key={item}
                  className="inline-flex h-8 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="image-frame overflow-hidden p-4 sm:p-5">
            <div className="relative h-[22rem] overflow-hidden rounded-[1.45rem] sm:h-[27rem]">
              <Image
                src="/images/booking-suite-real.jpg"
                alt="Imagen de recurso para cabina de valoración"
                fill
                className="photo-grade-soft object-cover object-[56%_39%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(16,10,14,0.58)_0%,rgba(16,10,14,0.12)_66%)]" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[1rem] border border-white/22 bg-black/26 px-4 py-3 backdrop-blur-[6px]">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-white/74">
                  Primera cita
                </p>
                <p className="mt-1 text-[0.88rem] leading-6 text-white/90">
                  Diagnóstico, propuesta de fases y siguientes pasos.
                </p>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-surface)]/78 pb-[7rem] pt-[5.8rem]">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <article>
            <p className="eyebrow-label">Proceso de reserva</p>
            <h2 className="max-w-[15ch] text-[clamp(2rem,3.28vw,2.95rem)] leading-[1] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              Confirmación simple para acudir con todo claro desde el inicio.
            </h2>
          </article>

          <div className="relative pl-8">
            <div className="absolute bottom-0 left-[0.72rem] top-1 w-px bg-[linear-gradient(180deg,rgba(91,42,66,0.36),rgba(91,42,66,0.08))]" />
            <div className="space-y-6">
              {steps.map((step) => (
                <article key={step.id} className="relative">
                  <span className="absolute -left-8 top-1 inline-flex h-[1.72rem] w-[1.72rem] items-center justify-center rounded-full border border-[color:var(--color-brand)]/34 bg-[color:var(--color-pill)] text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)]">
                    {step.id}
                  </span>
                  <h3 className="text-[1.03rem] font-semibold tracking-[-0.015em] text-[color:var(--color-foreground)]">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-[37rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-[var(--radius-lg)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-5 py-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                Reducción de riesgo
              </p>
              <p className="mt-2 text-[0.92rem] leading-7 text-[color:var(--color-muted)]">
                Si tras la valoración no encaja contigo, no tienes que iniciar
                tratamiento.
              </p>
            </div>

            <Button
              href="https://wa.me/376600000"
              size="lg"
              trackingEvent={TRACK_EVENTS.CLICK_WHATSAPP}
              trackingSource="reservar_bottom_cta"
              trackingLabel="whatsapp_reservar_final"
              abTest="home_cta_journey"
              abVariant="v1"
              className="mt-7 h-[3.08rem] px-7 text-[0.76rem] font-semibold uppercase tracking-[0.08em]"
            >
              Confirmar por WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
