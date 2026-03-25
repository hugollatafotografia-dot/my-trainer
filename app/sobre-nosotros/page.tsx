import type { Metadata } from "next";
import Image from "next/image";

import Button from "@/components/Button";
import Container from "@/components/Container";
import { TRACK_EVENTS } from "@/lib/tracking/events";

export const metadata: Metadata = {
  title: "Sobre nosotros",
};

const principles = [
  {
    id: "01",
    title: "Diagnóstico experto",
    description:
      "Valoramos el estado de piel o zona corporal antes de recomendar un protocolo.",
  },
  {
    id: "02",
    title: "Plan por fases",
    description:
      "Definimos objetivos, frecuencia y evolución esperada para cada etapa.",
  },
  {
    id: "03",
    title: "Acompañamiento continuo",
    description:
      "Seguimos el caso y ajustamos el tratamiento según respuesta observada.",
  },
];

const centerHighlights = [
  "Cabinas individuales con atención personalizada.",
  "Protocolos no invasivos con enfoque realista.",
  "Comunicación clara antes, durante y después.",
];

const identityRows = [
  "Equipo especializado en dermoestética.",
  "Experiencia de centro orientada a confianza y serenidad.",
  "Espacio preparado para integrar reseñas verificadas.",
  "Seguimiento coordinado por WhatsApp según protocolo.",
];

export default function SobreNosotrosPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/about-hero-real.jpg"
            alt="Imagen de recurso para hero de sobre nosotros"
            fill
            priority
            className="photo-grade object-cover object-[55%_38%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(102deg,rgba(10,6,9,0.9)_0%,rgba(13,8,12,0.74)_40%,rgba(17,10,14,0.3)_100%)]" />
        </div>

        <Container className="relative grid min-h-[35rem] items-end gap-8 py-[6.7rem] lg:grid-cols-[minmax(0,1fr)_18rem] lg:py-[7.5rem]">
          <div className="max-w-[48rem] text-white">
            <p className="mb-6 text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-white/74">
              Sobre Centres Ideal Illa Carlemany
            </p>
            <h1 className="max-w-[12.6ch] text-[clamp(3rem,6.1vw,5.4rem)] leading-[0.88] font-semibold tracking-[-0.04em]">
              Clínica estética enfocada en criterio, naturalidad y confianza.
            </h1>
            <p className="mt-6 max-w-[40rem] text-[1.02rem] leading-8 text-white/84">
              Trabajamos para que cada persona entienda su caso y su plan antes
              de iniciar, con expectativas realistas y seguimiento profesional.
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
                trackingSource="sobre_hero_primary"
                trackingLabel="reservar_visita_sobre"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.12rem] px-7 text-[0.78rem] font-semibold uppercase tracking-[0.08em]"
              >
                Reservar visita
              </Button>
              <Button
                href="https://wa.me/376600000"
                size="lg"
                variant="secondary"
                trackingEvent={TRACK_EVENTS.CLICK_WHATSAPP}
                trackingSource="sobre_hero_secondary"
                trackingLabel="whatsapp_sobre"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.12rem] border-white/42 bg-white/[0.09] px-7 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-white hover:border-white/66 hover:bg-white/[0.17] hover:text-white"
              >
                Resolver dudas
              </Button>
            </div>
          </div>

          <article className="hidden rounded-[var(--radius-xl)] border border-white/20 bg-black/28 p-4 text-white/86 backdrop-blur-[7px] lg:block">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-white/66">
              Identidad del centro
            </p>
            <p className="mt-1 text-[0.9rem] leading-6 text-white/88">
              Atención personalizada con método y seguimiento continuo.
            </p>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-background)] pb-[6.8rem] pt-[5.8rem]">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <article>
            <p className="eyebrow-label">Nuestra forma de trabajar</p>
            <h2 className="max-w-[14ch] text-[clamp(2rem,3.35vw,3.05rem)] leading-[1] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              Más criterio clínico, menos discurso genérico.
            </h2>
            <p className="mt-5 max-w-[34rem] text-[0.95rem] leading-8 text-[color:var(--color-muted)]">
              Combinamos diagnóstico, planificación por fases y seguimiento para
              que cada proceso tenga dirección clara.
            </p>

            <div className="mt-7 space-y-4">
              {principles.map((item) => (
                <article
                  key={item.id}
                  className="grid gap-3 border-b border-[color:var(--color-line)]/80 pb-4 sm:grid-cols-[auto_1fr]"
                >
                  <span className="text-[1.55rem] leading-none font-semibold tracking-[-0.03em] text-[color:var(--color-brand)]/78">
                    {item.id}
                  </span>
                  <div>
                    <h3 className="text-[1.06rem] font-semibold text-[color:var(--color-foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[0.88rem] leading-7 text-[color:var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </article>

          <article className="image-frame overflow-hidden p-4 sm:p-5">
            <div className="relative h-[22rem] overflow-hidden rounded-[1.45rem] sm:h-[27rem]">
              <Image
                src="/images/about-story-real.jpg"
                alt="Imagen de recurso para presentación del método"
                fill
                className="photo-grade-soft object-cover object-[58%_36%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(17,10,14,0.52)_0%,rgba(17,10,14,0.14)_66%)]" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[1.1rem] border border-white/22 bg-black/26 px-4 py-3 backdrop-blur-[6px]">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-white/75">
                  Composición editorial
                </p>
                <p className="mt-1 text-[0.9rem] leading-6 text-white/90">
                  Diagnóstico, protocolo y seguimiento en un mismo proceso.
                </p>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <section className="section-shell bg-[linear-gradient(170deg,#321f2c_0%,#271923_100%)] pb-[7rem] pt-[6rem] text-white">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:items-start">
          <article className="overflow-hidden rounded-[2rem] border border-white/18 bg-white/8 p-4 backdrop-blur-[3px] sm:p-5">
            <div className="relative h-[22rem] overflow-hidden rounded-[1.4rem] sm:h-[27rem]">
              <Image
                src="/images/about-center-real.jpg"
                alt="Imagen de recurso para experiencia de cabina"
                fill
                className="photo-grade-soft object-cover object-[56%_42%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(13,8,11,0.48)_0%,rgba(13,8,11,0.12)_66%)]" />
            </div>
          </article>

          <div>
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.17em] text-[color:var(--color-accent)]/88">
              Experiencia del centro
            </p>
            <h2 className="max-w-[14ch] text-[clamp(2.15rem,3.65vw,3.35rem)] leading-[0.97] font-semibold tracking-[-0.032em]">
              Un espacio diseñado para confianza, calma y seguimiento.
            </h2>
            <div className="mt-6 divide-y divide-white/15 rounded-[1.2rem] border border-white/18 bg-white/6">
              {centerHighlights.map((item) => (
                <p key={item} className="px-4 py-4 text-[0.9rem] leading-7 text-white/82">
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-6 grid gap-2.5 text-[0.84rem] leading-6 text-white/74">
              {identityRows.map((item) => (
                <p key={item} className="border-b border-white/14 pb-2 last:border-b-0 last:pb-0">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[color:var(--color-background)] pb-[7.2rem] pt-[5.3rem]">
        <Container>
          <div className="relative isolate overflow-hidden rounded-[2.35rem] border border-[color:var(--color-line)] bg-[color:var(--color-brand)] px-8 py-10 text-white sm:px-10 sm:py-12">
            <div className="absolute inset-0 -z-10">
              <Image
                src="/images/about-whatsapp-real.jpg"
                alt="Imagen de recurso para seguimiento por WhatsApp"
                fill
                className="photo-grade-soft object-cover object-[52%_36%] opacity-44"
              />
              <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(58,25,40,0.9)_0%,rgba(77,35,54,0.82)_100%)]" />
            </div>

            <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div className="max-w-[38rem]">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.17em] text-white/72">
                  Seguimiento y soporte
                </p>
                <h2 className="mt-3 max-w-[14ch] text-[clamp(2.08rem,3.55vw,3.2rem)] leading-[0.97] font-semibold tracking-[-0.03em]">
                  Mantén contacto con el centro durante tu tratamiento.
                </h2>
              </div>

              <Button
                href="https://wa.me/376600000"
                size="lg"
                variant="secondary"
                trackingEvent={TRACK_EVENTS.CLICK_WHATSAPP}
                trackingSource="sobre_whatsapp_cta"
                trackingLabel="whatsapp_sobre_final"
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.1rem] border-white/24 bg-white px-7 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] hover:bg-white/92"
              >
                Contactar por WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
