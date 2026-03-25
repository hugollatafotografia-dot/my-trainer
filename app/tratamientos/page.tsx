import type { Metadata } from "next";
import Image from "next/image";

import Button from "@/components/Button";
import Container from "@/components/Container";
import { TRACK_EVENTS } from "@/lib/tracking/events";

export const metadata: Metadata = {
  title: "Tratamientos",
};

const treatmentPrograms = [
  {
    category: "Facial avanzado",
    name: "Rejuvenecimiento y luminosidad",
    focus: "Tono, textura y firmeza con enfoque progresivo.",
    duration: "60-75 min",
  },
  {
    category: "Corporal remodelante",
    name: "Drenaje y definición localizada",
    focus: "Mejora de confort corporal y contorno en zonas objetivo.",
    duration: "50-60 min",
  },
  {
    category: "Piel sensible",
    name: "Calma y reparación de barrera",
    focus: "Protocolos para rojeces, tirantez y piel reactiva.",
    duration: "55 min",
  },
  {
    category: "Contorno de ojos",
    name: "Mirada descansada",
    focus: "Tratamiento focalizado en elasticidad y aspecto periocular.",
    duration: "40 min",
  },
];

const phases = [
  {
    id: "01",
    title: "Valoración inicial",
    description: "Analizamos punto de partida y prioridad clínica.",
  },
  {
    id: "02",
    title: "Plan por fases",
    description: "Definimos frecuencia, duración y objetivo por etapa.",
  },
  {
    id: "03",
    title: "Seguimiento",
    description: "Ajustamos el protocolo según evolución observada.",
  },
];

export default function TratamientosPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/treatments-hero-real.jpg"
            alt="Imagen de recurso para hero de tratamientos"
            fill
            priority
            className="photo-grade object-cover object-[58%_38%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(102deg,rgba(10,6,9,0.9)_0%,rgba(13,8,12,0.74)_39%,rgba(17,10,14,0.3)_100%)]" />
        </div>

        <Container className="relative grid min-h-[35rem] items-end gap-8 py-[6.7rem] lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-[7.5rem]">
          <div className="max-w-[48rem] text-white">
            <p className="mb-6 text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-white/74">
              Tratamientos
            </p>
            <h1 className="max-w-[12.6ch] text-[clamp(3rem,6.15vw,5.45rem)] leading-[0.87] font-semibold tracking-[-0.04em]">
              Protocolos faciales y corporales definidos por diagnóstico.
            </h1>
            <p className="mt-6 max-w-[40rem] text-[1.02rem] leading-8 text-white/84">
              No trabajamos por catálogo fijo. Recomendamos técnica y frecuencia
              según diagnóstico inicial y evolución prevista.
            </p>
            <p className="mt-2 max-w-[31rem] text-[0.71rem] leading-6 text-white/62 sm:text-[0.73rem]">
              Imágenes de recurso editorial. Se sustituirán por material propio
              del centro.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href="/reservar"
                size="lg"
                trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
                trackingSource="tratamientos_hero_primary"
                trackingLabel="reservar_valoracion_tratamientos"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.2rem] px-7 text-[0.78rem] font-semibold uppercase tracking-[0.08em]"
              >
                Reservar valoración
              </Button>
              <Button
                href="https://wa.me/376600000"
                size="lg"
                variant="secondary"
                trackingEvent={TRACK_EVENTS.CLICK_WHATSAPP}
                trackingSource="tratamientos_hero_secondary"
                trackingLabel="whatsapp_tratamientos"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.2rem] border-white/42 bg-white/[0.09] px-7 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-white hover:border-white/66 hover:bg-white/[0.17] hover:text-white"
              >
                Resolver dudas
              </Button>
            </div>
          </div>

          <article className="hidden rounded-[var(--radius-xl)] border border-white/20 bg-black/28 p-4 text-white/86 backdrop-blur-[7px] lg:block">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-white/66">
              Duración orientativa
            </p>
            <p className="mt-1 text-[1.22rem] font-semibold text-white">40 a 75 min</p>
            <p className="mt-2 text-[0.82rem] leading-6 text-white/76">
              Según protocolo y zona tratada.
            </p>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-background)] pb-[6.8rem] pt-[5.8rem]">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.93fr)_minmax(0,1.07fr)] lg:items-start">
          <div>
            <p className="eyebrow-label">Exploración por objetivo</p>
            <h2 className="max-w-[14ch] text-[clamp(2rem,3.35vw,3.05rem)] leading-[1] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              Elige la línea que más se acerca a tu caso.
            </h2>
            <p className="mt-5 max-w-[33rem] text-[0.95rem] leading-8 text-[color:var(--color-muted)]">
              En consulta adaptamos esta base según diagnóstico, historial y
              ritmo de vida.
            </p>

            <Button
              href="/reservar"
              variant="secondary"
              trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
              trackingSource="tratamientos_top_cta"
              trackingLabel="reservar_desde_lineas"
              abTest="home_cta_journey"
              abVariant="v1"
              className="mt-7 h-[3rem] px-6 text-[0.76rem] font-semibold uppercase tracking-[0.08em]"
            >
              Solicitar valoración
            </Button>
          </div>

          <article className="image-frame overflow-hidden p-4 sm:p-5">
            <div className="relative h-[20.5rem] overflow-hidden rounded-[1.45rem] sm:h-[24.5rem]">
              <Image
                src="/images/treatments-feature-real.jpg"
                alt="Imagen de recurso para tratamiento facial"
                fill
                className="photo-grade-soft object-cover object-[55%_41%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(17,10,14,0.56)_0%,rgba(17,10,14,0.16)_64%)]" />
            </div>
          </article>
        </Container>

        <Container className="mt-9">
          <div className="rounded-[var(--radius-xl)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-5 py-2 sm:px-7">
            {treatmentPrograms.map((item) => (
              <article
                key={item.name}
                className="grid gap-3 border-b border-[color:var(--color-line)]/75 py-5 last:border-b-0 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_auto] sm:items-center"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                  {item.category}
                </p>
                <div>
                  <h3 className="text-[1.08rem] font-semibold tracking-[-0.015em] text-[color:var(--color-foreground)]">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-[0.88rem] leading-6 text-[color:var(--color-muted)]">
                    {item.focus}
                  </p>
                </div>
                <span className="inline-flex h-7 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
                  {item.duration}
                </span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-surface)]/78 pb-[7rem] pt-[5.9rem]">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
          <article>
            <p className="eyebrow-label">Flujo operativo</p>
            <h2 className="max-w-[15ch] text-[clamp(2rem,3.3vw,2.95rem)] leading-[1] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              Cómo trabajamos desde la valoración hasta el seguimiento.
            </h2>
            <div className="mt-6 relative pl-7">
              <div className="absolute bottom-1 left-[0.56rem] top-1 w-px bg-[linear-gradient(180deg,rgba(90,42,65,0.36),rgba(90,42,65,0.08))]" />
              <div className="space-y-4">
                {phases.map((step) => (
                  <article key={step.id} className="relative">
                    <span className="absolute -left-7 top-1 inline-flex h-[1.72rem] w-[1.72rem] items-center justify-center rounded-full border border-[color:var(--color-brand)]/36 bg-[color:var(--color-pill)] text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)]">
                      {step.id}
                    </span>
                    <h3 className="text-[1rem] font-semibold text-[color:var(--color-foreground)]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[0.87rem] leading-6 text-[color:var(--color-muted)]">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </article>

          <article className="image-frame overflow-hidden p-4 sm:p-5">
            <div className="relative h-[20rem] overflow-hidden rounded-[1.4rem] sm:h-[24rem]">
              <Image
                src="/images/treatments-process-real.jpg"
                alt="Imagen de recurso para flujo de tratamiento"
                fill
                className="photo-grade-soft object-cover object-[54%_40%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(16,10,14,0.46)_0%,rgba(16,10,14,0.12)_66%)]" />
            </div>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-background)] pb-[7.1rem] pt-[5.3rem]">
        <Container>
          <div className="relative isolate overflow-hidden rounded-[2.3rem] border border-[color:var(--color-line)] bg-[color:var(--color-brand)] px-8 py-10 text-white sm:px-10 sm:py-12">
            <div className="absolute inset-0 -z-10">
              <Image
                src="/images/treatments-cta-real.jpg"
                alt="Imagen de recurso para cierre de reserva"
                fill
                className="photo-grade-soft object-cover object-[58%_36%] opacity-43"
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(58,25,40,0.9)_0%,rgba(77,35,54,0.82)_100%)]" />
            </div>

            <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-[38rem]">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.17em] text-white/72">
                  Próximo paso
                </p>
                <h2 className="mt-3 max-w-[14ch] text-[clamp(2.08rem,3.55vw,3.2rem)] leading-[0.97] font-semibold tracking-[-0.03em]">
                  Reserva tu valoración y recibe un plan adaptado a tu caso.
                </h2>
              </div>

              <Button
                href="/reservar"
                size="lg"
                variant="secondary"
                trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
                trackingSource="tratamientos_bottom_cta"
                trackingLabel="reservar_valoracion_tratamientos_final"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.1rem] border-white/24 bg-white px-7 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] hover:bg-white/92"
              >
                Reservar visita
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
