import Image from "next/image";

import Button from "@/components/Button";
import Container from "@/components/Container";
import { TRACK_EVENTS } from "@/lib/tracking/events";

const heroHighlights = [
  "Illa Carlemany · Escaldes-Engordany",
  "Valoración inicial 30 min",
  "Tecnología no invasiva",
];

const reserveIncludes = [
  "Diagnóstico facial y corporal de partida.",
  "Identificación de prioridades reales y expectativas.",
  "Plan orientativo por fases y tiempos de evolución.",
];

const reserveFlow = [
  {
    id: "01",
    title: "Reservas",
    description: "Envíanos franja horaria y objetivo principal.",
  },
  {
    id: "02",
    title: "Confirmamos",
    description: "Te contactamos según agenda disponible del centro.",
  },
  {
    id: "03",
    title: "Te valoramos",
    description: "Definimos el siguiente paso con información clara.",
  },
];

const methodPoints = [
  {
    id: "01",
    title: "Diagnóstico dermoestético preciso",
    description:
      "Valoramos textura, sensibilidad, hidratación y antecedentes antes de recomendar un protocolo.",
  },
  {
    id: "02",
    title: "Protocolos por fases",
    description:
      "Ajustamos técnica y frecuencia según evolución, evitando tratamientos cerrados para todos.",
  },
  {
    id: "03",
    title: "Seguimiento continuo",
    description:
      "Documentamos cada etapa para decidir cuándo mantener, reforzar o simplificar la pauta.",
  },
];

const treatmentLines = [
  {
    name: "Rejuvenecimiento facial",
    detail: "Tono, textura y luminosidad progresiva.",
    duration: "60-75 min",
  },
  {
    name: "Remodelación corporal",
    detail: "Drenaje y definición localizada.",
    duration: "50-60 min",
  },
  {
    name: "Piel sensible",
    detail: "Calma, reparación y barrera cutánea.",
    duration: "55 min",
  },
  {
    name: "Contorno de ojos",
    detail: "Mejora del aspecto de la mirada.",
    duration: "40 min",
  },
];

const trustNotes = [
  "Espacio preparado para incorporar casos reales autorizados por el centro.",
  "Comparativas de formato con encuadre consistente para lectura clara.",
  "Plantilla de seguimiento para documentar evolución verificable.",
  "Mensajes y resultados finales pendientes de validación comercial.",
];

const processSteps = [
  {
    id: "01",
    title: "Reserva y confirmación",
    description: "Solicitas cita y confirmamos disponibilidad.",
  },
  {
    id: "02",
    title: "Valoración en cabina",
    description: "Analizamos tu caso y prioridades reales.",
  },
  {
    id: "03",
    title: "Plan recomendado",
    description: "Te explicamos fases, frecuencia y cuidados.",
  },
  {
    id: "04",
    title: "Seguimiento",
    description: "Ajustes de pauta según evolución observada.",
  },
];

const faqItems = [
  {
    q: "¿Duele?",
    a: "Trabajamos con técnicas no invasivas y te explicamos sensaciones esperables antes de empezar.",
  },
  {
    q: "¿Cuántas sesiones necesitaré?",
    a: "Depende del diagnóstico. Te damos estimación orientativa tras la valoración inicial.",
  },
  {
    q: "¿Hay tiempo de recuperación?",
    a: "En la mayoría de protocolos no invasivos el retorno es inmediato o con cuidados mínimos.",
  },
  {
    q: "¿Puedo cancelar o cambiar cita?",
    a: "Sí, siguiendo la política de agenda del centro y con antelación.",
  },
];

const ctaExperiment = {
  id: "home_cta_journey",
  variant: "v1",
};

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/home-hero-real.jpg"
            alt="Imagen de recurso para hero de consulta estética"
            fill
            priority
            className="object-cover object-[66%_42%] sm:object-[64%_39%] md:object-[62%_36%] xl:object-[60%_34%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(10,6,9,0.93)_0%,rgba(12,7,11,0.82)_34%,rgba(16,10,14,0.46)_63%,rgba(17,10,15,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,6,9,0.26)_0%,rgba(9,6,9,0.64)_100%)]" />
        </div>

        <Container className="relative grid min-h-[38rem] items-end gap-9 pb-12 pt-24 sm:min-h-[42rem] sm:pb-14 sm:pt-28 md:min-h-[49rem] md:pb-16 md:pt-32 xl:min-h-[57rem] xl:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] xl:pb-20 xl:pt-36 2xl:min-h-[61rem]">
          <div className="max-w-[47rem] text-white">
            <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-white/78 md:mb-6 md:text-[0.7rem]">
              Centres Ideal Illa Carlemany · Andorra
            </p>
            <h1 className="max-w-[12ch] text-[clamp(2.5rem,8.9vw,6.55rem)] leading-[0.85] font-semibold tracking-[-0.046em]">
              Diagnóstico facial y corporal personalizado con enfoque
              <span className="text-[color:var(--color-accent)]"> no invasivo.</span>
            </h1>
            <p className="mt-6 max-w-[37rem] text-[0.98rem] leading-7 text-white/83 sm:text-[1.02rem] sm:leading-8 md:mt-7 md:text-[1.08rem] md:leading-[1.76]">
              Valoración de 30 minutos para entender tu caso, priorizar
              objetivos y decidir tratamiento con criterio clínico y expectativas
              realistas desde el primer día.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5 md:mt-8">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex h-[2.03rem] items-center rounded-[var(--radius-pill)] border border-white/18 bg-white/[0.08] px-3 text-[0.65rem] font-semibold uppercase tracking-[0.075em] text-white/90 backdrop-blur-[4px] md:h-[2.14rem] md:px-3.5 md:text-[0.68rem]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-9">
              <Button
                href="/reservar"
                size="lg"
                trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
                trackingSource="home_hero_primary"
                trackingLabel="reservar_valoracion_hero"
                abTest={ctaExperiment.id}
                abVariant={ctaExperiment.variant}
                className="h-[3.12rem] px-7 text-[0.74rem] font-semibold uppercase tracking-[0.08em] md:h-[3.32rem] md:px-8 md:text-[0.79rem]"
              >
                Reservar valoración facial (30 min)
              </Button>
              <Button
                href="https://wa.me/376600000"
                size="lg"
                variant="secondary"
                trackingEvent={TRACK_EVENTS.CLICK_WHATSAPP}
                trackingSource="home_hero_secondary"
                trackingLabel="whatsapp_hero"
                abTest={ctaExperiment.id}
                abVariant={ctaExperiment.variant}
                className="h-[3.12rem] border-white/40 bg-white/[0.1] px-7 text-[0.74rem] font-semibold uppercase tracking-[0.078em] text-white backdrop-blur-[8px] hover:border-white/64 hover:bg-white/[0.17] hover:text-white md:h-[3.32rem] md:px-8 md:text-[0.79rem]"
              >
                Resolver dudas por WhatsApp
              </Button>
            </div>

            <p className="mt-4 text-[0.78rem] leading-6 text-white/72 md:mt-5">
              Sin compromiso de tratamiento. Confirmación según disponibilidad
              de agenda semanal.
            </p>
            <p className="mt-2 max-w-[31rem] text-[0.71rem] leading-6 text-white/62 sm:text-[0.73rem]">
              Imágenes de recurso editorial. Se sustituirán por material propio
              del centro.
            </p>
          </div>

          <article className="hidden self-end xl:block xl:justify-self-end">
            <div className="relative h-[26.5rem] w-[18.4rem] overflow-hidden rounded-[1.75rem] border border-white/22 bg-black/14 shadow-[0_38px_95px_-62px_rgba(8,4,6,0.92)]">
              <Image
                src="/images/home-method-real.jpg"
                alt="Imagen de recurso para tratamiento en cabina"
                fill
                className="object-cover object-[58%_38%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,6,9,0.2)_0%,rgba(9,6,9,0.68)_100%)]" />
              <div className="absolute inset-x-4 bottom-4 rounded-[1rem] border border-white/18 bg-black/32 px-4 py-3 backdrop-blur-[6px]">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-white/72">
                  Primera cita
                </p>
                <p className="mt-1 text-[0.83rem] leading-6 text-white/88">
                  Diagnóstico, prioridades y plan por fases con objetivos
                  realistas.
                </p>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <section className="bg-[color:var(--color-background)] pb-14 pt-10 sm:pb-16 sm:pt-12 md:pb-20 md:pt-14 xl:pb-24 xl:pt-16">
        <Container>
          <div className="grid gap-8 rounded-[2rem] border border-[color:var(--color-line)] bg-[linear-gradient(163deg,rgba(255,252,253,0.95)_0%,rgba(246,236,241,0.86)_100%)] px-6 py-6 sm:px-8 sm:py-8 xl:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] xl:gap-11 xl:px-10 xl:py-10">
            <article>
              <p className="eyebrow-label">Antes de reservar</p>
              <h2 className="max-w-[14.5ch] text-[clamp(1.9rem,5.2vw,2.92rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
                Valoración clara para decidir sin incertidumbre.
              </h2>
              <p className="mt-4 max-w-[36rem] text-[0.92rem] leading-7 text-[color:var(--color-muted)] md:text-[0.96rem] md:leading-8">
                La primera visita no es un trámite comercial: te explicamos
                punto de partida, prioridades reales y siguiente paso
                recomendado para tu caso.
              </p>

              <div className="mt-6 space-y-3">
                {reserveIncludes.map((item) => (
                  <p
                    key={item}
                    className="relative border-b border-[color:var(--color-line)]/76 pb-3 pl-4 text-[0.9rem] leading-7 text-[color:var(--color-muted)] before:absolute before:left-0 before:top-[0.72rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[color:var(--color-accent)]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </article>

            <article className="grid gap-4">
              <div className="relative h-[14rem] overflow-hidden rounded-[1.4rem] border border-[color:var(--color-line)] sm:h-[16rem] md:h-[18rem]">
              <Image
                src="/images/treatments-feature-real.jpg"
                alt="Imagen de recurso para cabina de valoración estética"
                fill
                className="object-cover object-[56%_41%]"
              />
                <div className="absolute inset-0 bg-[linear-gradient(124deg,rgba(17,10,14,0.58)_0%,rgba(17,10,14,0.14)_64%)]" />
                <div className="absolute bottom-4 left-4 right-4 rounded-[1rem] border border-white/20 bg-black/25 px-4 py-3 text-white backdrop-blur-[5px]">
                  <p className="text-[0.63rem] font-semibold uppercase tracking-[0.1em] text-white/70">
                    Qué obtienes
                  </p>
                  <p className="mt-1 text-[0.86rem] leading-6 text-white/88">
                    Diagnóstico, plan orientativo y claridad operativa antes de
                    decidir.
                  </p>
                </div>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-3">
                {reserveFlow.map((step) => (
                  <article
                    key={step.id}
                    className="rounded-[1rem] border border-[color:var(--color-line)] bg-white/88 px-3.5 py-3"
                  >
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                      {step.id}
                    </p>
                    <p className="mt-1 text-[0.88rem] font-semibold text-[color:var(--color-foreground)]">
                      {step.title}
                    </p>
                    <p className="mt-1 text-[0.8rem] leading-6 text-[color:var(--color-muted)]">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="grid gap-2 text-[0.81rem] leading-6 text-[color:var(--color-muted)] sm:grid-cols-3 sm:gap-3">
                <p>
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                    Inversión
                  </span>
                  Precio comunicado antes de confirmar.
                </p>
                <p>
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                    Confirmación
                  </span>
                  Según horario y disponibilidad.
                </p>
                <p>
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                    Riesgo
                  </span>
                  Sin compromiso de tratamiento.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--color-surface)]/72 pb-16 pt-14 sm:pb-18 sm:pt-16 md:pb-22 md:pt-20 xl:pb-24 xl:pt-24">
        <Container className="grid gap-10 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:items-center xl:gap-14">
          <article className="relative xl:-mr-4">
            <div className="image-frame overflow-hidden p-4 sm:p-5">
              <div className="relative h-[20rem] overflow-hidden rounded-[1.45rem] sm:h-[25rem] xl:h-[29rem]">
                <Image
                  src="/images/home-method-real.jpg"
                  alt="Imagen de recurso para bloque de método"
                  fill
                  className="object-cover object-[57%_39%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(126deg,rgba(17,10,14,0.54)_0%,rgba(17,10,14,0.1)_66%)]" />
              </div>
            </div>
            <div className="mt-4 rounded-[1.2rem] border border-[color:var(--color-line)]/80 bg-[color:var(--color-surface-strong)] px-5 py-4 shadow-[0_22px_48px_-40px_rgba(36,18,27,0.54)] xl:absolute xl:-bottom-7 xl:left-6 xl:max-w-[19rem]">
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                Criterio profesional
              </p>
              <p className="mt-2 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">
                Cada ajuste de protocolo se decide por evolución observada,
                no por calendario fijo.
              </p>
            </div>
          </article>

          <div>
            <p className="eyebrow-label">Método clínico</p>
            <h2 className="max-w-[14ch] text-[clamp(2.06rem,4.95vw,3.45rem)] leading-[0.98] font-semibold tracking-[-0.032em] text-[color:var(--color-foreground)]">
              Menos promesa, más criterio y seguimiento real.
            </h2>
            <p className="mt-4 max-w-[35rem] text-[0.95rem] leading-8 text-[color:var(--color-muted)]">
              Diseñamos tratamientos en base a respuesta de piel y evolución,
              no por patrones cerrados ni sesiones sueltas.
            </p>

            <div className="mt-7 space-y-4">
              {methodPoints.map((point) => (
                <article
                  key={point.id}
                  className="grid gap-3 border-b border-[color:var(--color-line)]/80 pb-4 sm:grid-cols-[auto_1fr]"
                >
                  <span className="text-[1.5rem] leading-none font-semibold tracking-[-0.03em] text-[color:var(--color-brand)]/80">
                    {point.id}
                  </span>
                  <div>
                    <h3 className="text-[1.04rem] font-semibold tracking-[-0.015em] text-[color:var(--color-foreground)]">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-[0.88rem] leading-7 text-[color:var(--color-muted)]">
                      {point.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[linear-gradient(170deg,#3a2130_0%,#2f1c28_56%,#271721_100%)] pb-[6.9rem] pt-[6.4rem] text-white">
        <Container className="grid gap-9 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:items-start">
          <article className="overflow-hidden rounded-[2rem] border border-white/18 bg-white/7 p-4 backdrop-blur-[2px] sm:p-5">
            <div className="relative h-[20rem] overflow-hidden rounded-[1.4rem] sm:h-[25rem]">
              <Image
                src="/images/home-services-real.jpg"
                alt="Imagen de recurso para bloque de tratamientos"
                fill
                className="object-cover object-[52%_42%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(14,8,11,0.5)_0%,rgba(14,8,11,0.12)_66%)]" />
              <span className="absolute left-4 top-4 inline-flex h-8 items-center rounded-[var(--radius-pill)] border border-white/30 bg-black/22 px-3 text-[0.66rem] font-semibold uppercase tracking-[0.09em] text-white/92 backdrop-blur-[4px]">
                Tratamientos
              </span>
            </div>
          </article>

          <div>
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-[color:var(--color-accent)]/86">
              Líneas principales
            </p>
            <h2 className="max-w-[14ch] text-[clamp(2.2rem,3.85vw,3.5rem)] leading-[0.97] font-semibold tracking-[-0.032em]">
              Protocolos faciales y corporales con dirección clínica.
            </h2>
            <p className="mt-5 max-w-[36rem] text-[0.98rem] leading-8 text-white/80">
              Te explicamos qué tratamiento encaja con tu diagnóstico, duración
              orientativa y frecuencia recomendada para evolución sostenible.
            </p>

            <div className="mt-7 divide-y divide-white/15 rounded-[1.2rem] border border-white/16 bg-white/6">
              {treatmentLines.map((line) => (
                <article
                  key={line.name}
                  className="grid gap-2 px-4 py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4"
                >
                  <div>
                    <h3 className="text-[1.02rem] font-semibold text-white">{line.name}</h3>
                    <p className="mt-0.5 text-[0.84rem] leading-6 text-white/72">{line.detail}</p>
                  </div>
                  <span className="inline-flex h-7 items-center rounded-[var(--radius-pill)] border border-white/20 bg-black/20 px-3 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-white/86">
                    {line.duration}
                  </span>
                </article>
              ))}
            </div>

            <Button
              href="/tratamientos"
              variant="secondary"
              trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
              trackingSource="home_treatments_secondary"
              trackingLabel="ver_tratamientos_home"
              abTest={ctaExperiment.id}
              abVariant={ctaExperiment.variant}
              className="mt-7 h-[3.06rem] border-white/24 bg-white text-[0.8rem] font-semibold uppercase tracking-[0.085em] text-[color:var(--color-foreground)] hover:bg-white/92"
            >
              Ver tratamientos completos
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-[linear-gradient(165deg,#301d29_0%,#241722_100%)] pb-16 pt-14 text-white sm:pb-18 sm:pt-16 md:pb-22 md:pt-20 xl:pb-24 xl:pt-24">
        <Container>
          <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
            <div className="max-w-[44rem]">
              <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-[color:var(--color-accent)]/88">
                Resultados y confianza
              </p>
              <h2 className="max-w-[14ch] text-[clamp(2.05rem,5vw,3.35rem)] leading-[0.98] font-semibold tracking-[-0.03em]">
                Comparativa visual preparada para mostrar resultados verificados.
              </h2>
              <p className="mt-3 max-w-[32rem] text-[0.77rem] leading-6 text-white/68 sm:text-[0.8rem]">
                Imágenes de recurso para demo de composición. Pendiente
                sustitución por material propio y verificable del centro.
              </p>
            </div>
            <Button
              href="/resultados"
              variant="secondary"
              trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
              trackingSource="home_results_primary"
              trackingLabel="ver_resultados_home"
              abTest={ctaExperiment.id}
              abVariant={ctaExperiment.variant}
              className="h-[3rem] border-white/25 bg-white px-7 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] hover:bg-white/92"
            >
              Ver estructura de resultados
            </Button>
          </div>

          <div className="mt-9 grid gap-7 xl:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] xl:gap-10">
            <article className="image-frame overflow-hidden border-white/16 bg-white/8 p-4 sm:p-5">
              <div className="relative h-[21rem] overflow-hidden rounded-[1.45rem] sm:h-[24rem] md:h-[27rem]">
                <div className="grid h-full grid-cols-2">
                  <div className="relative">
                    <Image
                      src="/images/home-results-before-real.jpg"
                      alt="Referencia visual A para comparativa de formato"
                      fill
                      className="object-cover object-[50%_44%]"
                    />
                    <div className="absolute inset-0 bg-black/26" />
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/home-results-after-real.jpg"
                      alt="Referencia visual B para comparativa de formato"
                      fill
                      className="object-cover object-[50%_43%]"
                    />
                    <div className="absolute inset-0 bg-black/12" />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/74" />
                <span className="absolute left-4 top-4 inline-flex h-8 items-center rounded-[var(--radius-pill)] border border-white/30 bg-black/26 px-3 text-[0.64rem] font-semibold uppercase tracking-[0.09em] text-white/92 backdrop-blur-[5px]">
                  Referencia A
                </span>
                <span className="absolute right-4 top-4 inline-flex h-8 items-center rounded-[var(--radius-pill)] border border-white/30 bg-black/26 px-3 text-[0.64rem] font-semibold uppercase tracking-[0.09em] text-white/92 backdrop-blur-[5px]">
                  Referencia B
                </span>
              </div>
            </article>

            <div className="grid gap-4">
              <article className="rounded-[var(--radius-xl)] border border-white/20 bg-white/[0.09] px-6 py-6 backdrop-blur-[2px]">
                <p className="text-[1.02rem] leading-8 tracking-[-0.01em] text-white/95">
                  “Espacio preparado para integrar testimonios verificados cuando
                  el centro facilite reseñas reales.”
                </p>
                <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                  Testimonio pendiente · formato demo
                </p>
                <p className="mt-2 text-[0.82rem] leading-6 text-white/72">
                  Texto de demostración. No corresponde a un cliente real.
                </p>
              </article>

              <div className="rounded-[1.25rem] border border-white/16 bg-white/[0.07] px-5 py-5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                  Marco de confianza
                </p>
                <div className="mt-3 space-y-2.5">
                  {trustNotes.map((note) => (
                    <p key={note} className="text-[0.88rem] leading-7 text-white/78">
                      • {note}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-surface)]/78 pb-[6.4rem] pt-[5.6rem]">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-12">
          <div>
            <p className="eyebrow-label">Proceso</p>
            <h2 className="max-w-[14ch] text-[clamp(2rem,3.35vw,3rem)] leading-[1] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              Qué pasa desde que reservas hasta iniciar tratamiento.
            </h2>
            <p className="mt-5 max-w-[35rem] text-[0.95rem] leading-8 text-[color:var(--color-muted)]">
              Claridad operativa desde el primer contacto para que tomes una
              decisión sin dudas.
            </p>
          </div>

          <div className="relative pl-7">
            <div className="absolute bottom-2 left-[0.58rem] top-2 w-px bg-[linear-gradient(180deg,rgba(90,42,65,0.34),rgba(90,42,65,0.08))]" />
            <div className="space-y-4">
              {processSteps.map((step) => (
                <article key={step.id} className="relative">
                  <span className="absolute -left-7 top-1 inline-flex h-[1.75rem] w-[1.75rem] items-center justify-center rounded-full border border-[color:var(--color-brand)]/36 bg-[color:var(--color-pill)] text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)]">
                    {step.id}
                  </span>
                  <h3 className="text-[1.03rem] font-semibold text-[color:var(--color-foreground)]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[0.88rem] leading-6 text-[color:var(--color-muted)]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell-tight bg-[color:var(--color-surface)]/86 pb-[4.5rem] pt-[3.8rem]">
        <Container>
          <div className="rounded-[var(--radius-xl)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-6 py-6 sm:px-7">
            <p className="eyebrow-label">Preguntas frecuentes</p>
            <div className="divide-y divide-[color:var(--color-line)]/75">
              {faqItems.map((item) => (
                <article key={item.q} className="py-4">
                  <h3 className="text-[0.95rem] font-semibold text-[color:var(--color-foreground)]">
                    {item.q}
                  </h3>
                  <p className="mt-1 text-[0.88rem] leading-6 text-[color:var(--color-muted)]">
                    {item.a}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[color:var(--color-background)] pb-20 pt-14 sm:pb-22 sm:pt-16 md:pb-24 md:pt-18 xl:pb-28 xl:pt-20">
        <Container>
          <div className="relative isolate overflow-hidden rounded-[2.45rem] border border-[color:var(--color-line)] bg-[color:var(--color-brand)] px-6 py-8 text-white shadow-[0_44px_108px_-74px_rgba(43,18,31,0.85)] sm:px-8 sm:py-10 md:px-10 md:py-12 xl:px-12 xl:py-14">
            <div className="absolute inset-0 -z-10">
              <Image
                src="/images/home-cta-real.jpg"
                alt="Imagen de recurso para CTA final"
                fill
                className="object-cover object-[60%_44%] opacity-44"
              />
              <div className="absolute inset-0 bg-[linear-gradient(116deg,rgba(55,23,38,0.93)_0%,rgba(71,31,49,0.84)_52%,rgba(84,37,59,0.74)_100%)]" />
            </div>

            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
              <div className="max-w-[43rem]">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-white/72">
                  Siguiente paso
                </p>
                <h2 className="mt-3 max-w-[14.5ch] text-[clamp(2.08rem,5vw,3.8rem)] leading-[0.95] font-semibold tracking-[-0.034em]">
                  Reserva tu valoración y decide con información clara.
                </h2>
                <p className="mt-4 max-w-[38rem] text-[0.94rem] leading-7 text-white/82 md:text-[0.98rem] md:leading-8">
                  Sin compromiso de tratamiento. Confirmación según agenda y
                  horario de atención del centro.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row xl:flex-col xl:items-stretch">
                <Button
                  href="/reservar"
                  size="lg"
                  variant="secondary"
                  trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
                  trackingSource="home_cta_final_primary"
                  trackingLabel="reservar_valoracion_cta_final"
                  abTest={ctaExperiment.id}
                  abVariant={ctaExperiment.variant}
                  className="h-[3.1rem] border-white/24 bg-white px-7 text-[0.75rem] font-semibold uppercase tracking-[0.085em] text-[color:var(--color-foreground)] hover:bg-white/90 md:h-[3.2rem]"
                >
                  Reservar valoración (30 min)
                </Button>
                <Button
                  href="https://wa.me/376600000"
                  size="lg"
                  variant="ghost"
                  trackingEvent={TRACK_EVENTS.CLICK_WHATSAPP}
                  trackingSource="home_cta_final_secondary"
                  trackingLabel="whatsapp_cta_final"
                  abTest={ctaExperiment.id}
                  abVariant={ctaExperiment.variant}
                  className="h-[3.1rem] border border-white/34 px-7 text-[0.75rem] font-semibold uppercase tracking-[0.085em] text-white hover:bg-white/12 md:h-[3.2rem]"
                >
                  Resolver dudas por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
