import type { Metadata } from "next";
import Image from "next/image";

import Button from "@/components/Button";
import Container from "@/components/Container";
import { TRACK_EVENTS } from "@/lib/tracking/events";

export const metadata: Metadata = {
  title: "Resultados",
};

const expectationNotes = [
  "Bloque pensado para explicar evolución por fases.",
  "Comparativa de formato con encuadre consistente.",
  "Contexto clínico para interpretar resultados verificados.",
];

const confidenceSignals = [
  "Zona preparada para publicar material validado por el centro.",
  "Estructura de seguimiento lista para contenido verificable.",
  "Sin promesas exageradas ni claims no verificables.",
  "Expectativas alineadas antes de iniciar tratamiento.",
];

const socialRows = [
  "Espacio para testimonio verificado 01",
  "Espacio para testimonio verificado 02",
  "Espacio para testimonio verificado 03",
];

export default function ResultadosPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/results-hero-real.jpg"
            alt="Imagen de recurso para hero de resultados"
            fill
            priority
            className="photo-grade object-cover object-[58%_39%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(102deg,rgba(10,6,9,0.9)_0%,rgba(13,8,12,0.74)_40%,rgba(17,10,14,0.3)_100%)]" />
        </div>

        <Container className="relative grid min-h-[35rem] items-end gap-8 py-[6.7rem] lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-[7.5rem]">
          <div className="max-w-[48rem] text-white">
            <p className="mb-6 text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-white/74">
              Resultados
            </p>
            <h1 className="max-w-[12.8ch] text-[clamp(3rem,6.05vw,5.35rem)] leading-[0.88] font-semibold tracking-[-0.04em]">
              Estructura lista para presentar resultados verificados.
            </h1>
            <p className="mt-6 max-w-[40rem] text-[1.02rem] leading-8 text-white/84">
              Esta página muestra el formato de resultados. El contenido final
              se completa con material real aportado por el centro.
            </p>
            <p className="mt-2 max-w-[31rem] text-[0.71rem] leading-6 text-white/62 sm:text-[0.73rem]">
              Imágenes de recurso editorial para demo de layout.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href="/reservar"
                size="lg"
                trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
                trackingSource="resultados_hero_primary"
                trackingLabel="reservar_visita_resultados"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.12rem] px-7 text-[0.77rem] font-semibold uppercase tracking-[0.08em]"
              >
                Reservar valoración
              </Button>
              <Button
                href="https://wa.me/376600000"
                size="lg"
                variant="secondary"
                trackingEvent={TRACK_EVENTS.CLICK_WHATSAPP}
                trackingSource="resultados_hero_secondary"
                trackingLabel="whatsapp_resultados"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.12rem] border-white/42 bg-white/[0.09] px-7 text-[0.77rem] font-semibold uppercase tracking-[0.08em] text-white hover:border-white/66 hover:bg-white/[0.17] hover:text-white"
              >
                Resolver dudas
              </Button>
            </div>
          </div>

          <article className="hidden rounded-[var(--radius-xl)] border border-white/20 bg-black/28 p-4 text-white/86 backdrop-blur-[7px] lg:block">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-white/66">
              Publicación
            </p>
            <p className="mt-1 text-[0.9rem] leading-6 text-white/88">
              Contenido visual de demostración pendiente de sustitución.
            </p>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-background)] pb-[6.9rem] pt-[5.8rem]">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <article>
            <p className="eyebrow-label">Qué puedes esperar</p>
            <h2 className="max-w-[15ch] text-[clamp(2rem,3.35vw,3rem)] leading-[1] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              Comparativa de formato para resultados verificados del centro.
            </h2>
            <ul className="mt-5 space-y-2 text-[0.93rem] leading-7 text-[color:var(--color-muted)]">
              {expectationNotes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="image-frame overflow-hidden p-4 sm:p-5">
            <div className="relative h-[23rem] overflow-hidden rounded-[1.45rem] sm:h-[27rem]">
              <div className="grid h-full grid-cols-2">
                <div className="relative">
                  <Image
                    src="/images/results-before-real.jpg"
                    alt="Referencia visual A para módulo comparativo"
                    fill
                    className="photo-grade object-cover object-[49%_43%]"
                  />
                  <div className="absolute inset-0 bg-black/23" />
                </div>
                <div className="relative">
                  <Image
                    src="/images/results-after-real.jpg"
                    alt="Referencia visual B para módulo comparativo"
                    fill
                    className="photo-grade object-cover object-[54%_40%]"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/78" />
              <span className="glass-pill absolute left-4 top-4 inline-flex h-8 items-center px-3 text-[0.65rem] font-semibold uppercase tracking-[0.09em] text-white/92">
                Referencia A
              </span>
              <span className="glass-pill absolute right-4 top-4 inline-flex h-8 items-center px-3 text-[0.65rem] font-semibold uppercase tracking-[0.09em] text-white/92">
                Referencia B
              </span>
            </div>
            <p className="mt-3 max-w-[34rem] text-[0.74rem] leading-6 text-[color:var(--color-muted)] sm:text-[0.76rem]">
              Ejemplo visual de comparativa. Pendiente integrar antes/después
              reales y autorizados del centro.
            </p>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-surface)]/78 pb-[7.1rem] pt-[5.9rem]">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
          <article>
            <p className="eyebrow-label">Confianza y seguimiento</p>
            <h2 className="max-w-[15ch] text-[clamp(2rem,3.3vw,2.95rem)] leading-[1] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              La interpretación final se apoyará en casos reales verificados.
            </h2>

            <div className="mt-6 space-y-2.5 border-b border-[color:var(--color-line)]/80 pb-5">
              {confidenceSignals.map((item) => (
                <p key={item} className="text-[0.9rem] leading-7 text-[color:var(--color-muted)]">
                  • {item}
                </p>
              ))}
            </div>

            <article className="mt-5 rounded-[var(--radius-lg)] border border-[color:var(--color-brand)]/22 bg-[linear-gradient(166deg,rgba(240,228,234,0.9),rgba(255,252,253,0.99))] px-6 py-6">
              <p className="text-[1.04rem] leading-8 tracking-[-0.01em] text-[color:var(--color-foreground)]">
                “Espacio reservado para incorporar testimonios verificados
                cuando el centro valide su publicación.”
              </p>
              <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                Testimonio pendiente · formato demo
              </p>
            </article>
          </article>

          <article className="image-frame overflow-hidden p-4 sm:p-5">
            <div className="relative h-[20rem] overflow-hidden rounded-[1.4rem] sm:h-[24rem]">
              <Image
                src="/images/results-trust-real.jpg"
                alt="Imagen de recurso para módulo de confianza"
                fill
                className="photo-grade-soft object-cover object-[54%_35%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(16,10,14,0.46)_0%,rgba(16,10,14,0.12)_66%)]" />
            </div>
            <div className="mt-4 grid gap-2.5 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">
              {socialRows.map((item) => (
                <p key={item} className="border-b border-[color:var(--color-line)]/75 pb-2 last:border-b-0 last:pb-0">
                  {item}
                </p>
              ))}
            </div>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-background)] pb-[7rem] pt-[5.2rem]">
        <Container>
          <div className="relative isolate overflow-hidden rounded-[2.3rem] border border-[color:var(--color-line)] bg-[color:var(--color-brand)] px-8 py-10 text-white sm:px-10 sm:py-12">
            <div className="absolute inset-0 -z-10">
              <Image
                src="/images/results-cta-real.jpg"
                alt="Imagen de recurso para cierre de resultados"
                fill
                className="photo-grade-soft object-cover object-[56%_43%] opacity-42"
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(58,25,40,0.9)_0%,rgba(77,35,54,0.82)_100%)]" />
            </div>

            <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-[38rem]">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.17em] text-white/72">
                  Próximo paso
                </p>
                <h2 className="mt-3 max-w-[14ch] text-[clamp(2.08rem,3.55vw,3.2rem)] leading-[0.97] font-semibold tracking-[-0.03em]">
                  Reserva tu valoración para definir un plan adaptado a tu caso.
                </h2>
              </div>

              <Button
                href="/reservar"
                size="lg"
                variant="secondary"
                trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
                trackingSource="resultados_bottom_cta"
                trackingLabel="reservar_desde_resultados"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.1rem] border-white/24 bg-white px-7 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] hover:bg-white/92"
              >
                Reservar valoración
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
