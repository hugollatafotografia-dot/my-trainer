import Button from "@/components/Button";
import Card from "@/components/Card";
import FAQItem from "@/components/FAQItem";
import Section from "@/components/Section";

const benefits = [
  {
    eyebrow: "Precisión",
    title: "Atención real en cada sesión",
    description:
      "Grupos reducidos y un sistema claro para corregir técnica, adaptar intensidad y sostener el progreso.",
  },
  {
    eyebrow: "Método",
    title: "Planificación con sentido",
    description:
      "Nada se deja al azar: cada bloque de trabajo responde a un objetivo y a una progresión medible.",
  },
  {
    eyebrow: "Experiencia",
    title: "Espacio sereno y bien diseñado",
    description:
      "El estudio está pensado para entrenar con calma, foco y una estética cuidada en cada detalle.",
  },
  {
    eyebrow: "Resultados",
    title: "Mejoras que se pueden seguir",
    description:
      "Fuerza, composición corporal y adherencia se revisan con criterio para que el avance sea visible y sostenible.",
  },
];

const steps = [
  {
    title: "Reserva una primera sesión",
    description:
      "Empiezas con una clase o valoración inicial para entender tu punto de partida, disponibilidad y objetivo principal.",
  },
  {
    title: "Entrena con una estructura clara",
    description:
      "Definimos el formato adecuado y trabajamos con una progresión ordenada, sin improvisaciones ni ruido innecesario.",
  },
  {
    title: "Ajusta y consolida resultados",
    description:
      "El seguimiento permite adaptar cargas, frecuencia y foco para que el proceso evolucione contigo y no se estanque.",
  },
];

const testimonials = [
  {
    name: "Laura M.",
    result: "Más fuerza y energía",
    quote:
      "Venía de entrenar sin constancia. Aquí encontré una estructura simple, una atención muy precisa y resultados que pude notar en pocas semanas.",
  },
  {
    name: "Carlos R.",
    result: "Rutina sostenible",
    quote:
      "Lo que más valoro es la claridad: sé qué estoy haciendo, por qué lo hago y cómo va encajando en mi semana sin saturarme.",
  },
  {
    name: "Marta S.",
    result: "Entrenar con confianza",
    quote:
      "El espacio transmite calma y el acompañamiento es cercano. Dejé de sentir que improvisaba y empecé a progresar de verdad.",
  },
];

const faqs = [
  {
    question: "¿Puedo empezar si llevo tiempo sin entrenar?",
    answer:
      "Sí. La entrada al servicio se adapta a tu punto de partida y prioriza volver a coger ritmo con una carga adecuada.",
  },
  {
    question: "¿Las clases son aptas para distintos niveles?",
    answer:
      "Sí. El trabajo se ajusta dentro de la sesión para que cada persona mantenga intensidad y técnica acordes a su experiencia.",
  },
  {
    question: "¿Cuánto dura cada sesión?",
    answer:
      "Como referencia provisional, la mayoría de sesiones se plantean en torno a 50 o 60 minutos con una estructura definida.",
  },
  {
    question: "¿Hay entrenamiento personal además de clases?",
    answer:
      "Sí. Existe una línea de trabajo individual para objetivos que requieren máxima personalización y seguimiento cercano.",
  },
  {
    question: "¿Cómo se reserva una primera clase?",
    answer:
      "Puedes usar la página de reserva o escribir por contacto. La idea es dejar el acceso lo más directo y claro posible.",
  },
  {
    question: "¿Qué debo llevar el primer día?",
    answer:
      "Ropa cómoda, agua y ganas de empezar con calma. El resto de indicaciones se facilitan antes de la sesión.",
  },
];

export default function Home() {
  return (
    <>
      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              My Trainer
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-6xl leading-[0.92] tracking-[-0.05em] text-[color:var(--color-foreground)] sm:text-7xl lg:text-8xl">
              Entrena con método en un espacio que eleva tu estándar.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
              Clases reducidas, entrenamiento personal y una experiencia
              premium minimalista para construir fuerza, constancia y
              resultados sostenibles.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/reservar" size="lg">
                Reserva tu clase
              </Button>
              <Button href="/precios" size="lg" variant="secondary">
                Ver planes
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Card
                className="p-5"
                eyebrow="Formato"
                title="Clases reducidas"
                description="Atención suficiente para entrenar bien desde el primer día."
              />
              <Card
                className="p-5"
                eyebrow="Servicio"
                title="Entrenador personal"
                description="Seguimiento directo para objetivos que requieren más precisión."
              />
              <Card
                className="p-5"
                eyebrow="Entorno"
                title="Experiencia cuidada"
                description="Whitespaces, orden y ritmo para que entrenar se sienta mejor."
              />
            </div>
          </div>

          <Card
            className="rounded-[2.25rem] bg-[color:var(--color-surface-strong)] p-8"
            eyebrow="Sesión inicial"
            title="Empieza con una primera clase o valoración guiada."
          >
            <div className="space-y-5 text-sm leading-7 text-[color:var(--color-muted)]">
              <p>
                Te orientamos sobre la modalidad, frecuencia y punto de entrada
                adecuados según tu nivel actual.
              </p>
              <div className="space-y-3 border-t border-[color:var(--color-line)] pt-5">
                <div className="flex items-center justify-between gap-4">
                  <span>Clases</span>
                  <span className="font-semibold text-[color:var(--color-foreground)]">
                    Técnica y energía
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Personal</span>
                  <span className="font-semibold text-[color:var(--color-foreground)]">
                    Máxima adaptación
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Espacio</span>
                  <span className="font-semibold text-[color:var(--color-foreground)]">
                    Premium minimal
                  </span>
                </div>
              </div>
              <Button href="/instalaciones" variant="secondary">
                Conocer instalaciones
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Section
        description="Una forma de entrenar pensada para personas que buscan calidad de ejecución, claridad en el proceso y un entorno donde apetece volver."
        id="beneficios"
        label="Beneficios"
        title="Lo esencial para progresar sin complicarlo."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              description={benefit.description}
              eyebrow={benefit.eyebrow}
              title={benefit.title}
            />
          ))}
        </div>
      </Section>

      <Section
        description="Un proceso simple de entender y suficientemente sólido para acompañarte más allá del impulso inicial."
        label="Cómo funciona"
        title="Tres pasos para empezar bien y mantener el rumbo."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              description={step.description}
              eyebrow={`Paso 0${index + 1}`}
              title={step.title}
            />
          ))}
        </div>
      </Section>

      <Section
        description="Testimonios provisionales para mostrar el tipo de experiencia y cambio que busca transmitir la marca."
        label="Testimonios"
        title="Personas reales, progreso real y una experiencia que se nota."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              eyebrow={testimonial.result}
              title={testimonial.name}
            >
              <p className="text-base leading-8 text-[color:var(--color-muted)]">
                {testimonial.quote}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        description="Respuestas base para reducir fricción y dejar claras las dudas que más suelen aparecer antes de reservar."
        label="FAQ"
        title="Preguntas frecuentes antes de dar el paso."
      >
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              answer={faq.answer}
              question={faq.question}
            />
          ))}
        </div>
      </Section>

      <Section
        className="pb-28 pt-0 sm:pb-32"
        description="Copy provisional para cerrar la home con una llamada a la acción clara y sin distracciones."
        label="Reserva"
        title="Tu siguiente sesión puede ser el inicio de una rutina mejor diseñada."
      >
        <div className="rounded-[2.5rem] bg-[color:var(--color-brand)] px-8 py-10 text-white sm:px-10 sm:py-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                Reserva tu clase
              </p>
              <h2 className="mt-4 font-display text-4xl leading-none tracking-[-0.04em] sm:text-5xl">
                Empieza con una sesión guiada y descubre cómo entrenar con más claridad.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/75">
                Si quieres comprobar si el enfoque encaja contigo, reserva una
                primera sesión o habla con el equipo antes de decidir.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                href="/reservar"
                size="lg"
                variant="secondary"
                className="border-white/20 bg-white text-[color:var(--color-foreground)]"
              >
                Reserva tu clase
              </Button>
              <Button
                href="/contacto"
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                Hablar con el equipo
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
