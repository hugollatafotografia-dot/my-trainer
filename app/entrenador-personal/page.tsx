import type { Metadata } from "next";

import PageTemplate from "@/components/PageTemplate";

export const metadata: Metadata = {
  title: "Entrenador Personal",
};

export default function EntrenadorPersonalPage() {
  return (
    <PageTemplate
      description="Un servicio uno a uno para quienes buscan máxima personalización, seguimiento constante y una estrategia clara según objetivos, experiencia y disponibilidad."
      highlights={[
        {
          eyebrow: "Diagnóstico",
          title: "Valoración inicial",
          description:
            "Revisamos historial, objetivos, movilidad y hábitos para construir un punto de partida realista.",
        },
        {
          eyebrow: "Planificación",
          title: "Programa a medida",
          description:
            "Cada sesión responde a una lógica concreta: fuerza, composición corporal, rendimiento o recuperación.",
        },
        {
          eyebrow: "Seguimiento",
          title: "Ajustes continuos",
          description:
            "El plan se adapta según tu progreso, sensaciones y agenda para que la adherencia no dependa del azar.",
        },
      ]}
      label="Entrenador Personal"
      outro={{
        title: "Habla con nosotros y definimos el formato adecuado",
        description:
          "Si buscas un acompañamiento más directo, podemos proponerte una estructura personalizada desde el primer contacto.",
        cta: { href: "/contacto", label: "Contactar" },
      }}
      primaryCta={{ href: "/reservar", label: "Solicitar valoración" }}
      secondaryCta={{ href: "/resultados", label: "Ver resultados" }}
      title="Entrenamiento personal con criterio, seguimiento y foco absoluto."
    />
  );
}
