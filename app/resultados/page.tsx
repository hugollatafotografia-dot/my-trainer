import type { Metadata } from "next";

import PageTemplate from "@/components/PageTemplate";

export const metadata: Metadata = {
  title: "Resultados",
};

export default function ResultadosPage() {
  return (
    <PageTemplate
      description="Espacio preparado para mostrar cambios físicos, mejoras de rendimiento y testimonios con contexto, no solo promesas vacías."
      highlights={[
        {
          eyebrow: "Composición corporal",
          title: "Cambios medibles",
          description:
            "La mejora se comunica con indicadores claros, fotos comparativas y seguimiento del proceso.",
        },
        {
          eyebrow: "Rendimiento",
          title: "Más fuerza y control",
          description:
            "El progreso también se refleja en calidad de movimiento, capacidad de trabajo y seguridad al entrenar.",
        },
        {
          eyebrow: "Adherencia",
          title: "Resultados sostenibles",
          description:
            "La prioridad no es un pico puntual, sino construir hábitos y continuidad para que el avance se mantenga.",
        },
      ]}
      label="Resultados"
      outro={{
        title: "Empieza tu propio proceso con una primera sesión guiada",
        description:
          "El mejor resultado es el siguiente: reservar una sesión y definir una estrategia realista desde el inicio.",
        cta: { href: "/reservar", label: "Quiero empezar" },
      }}
      primaryCta={{ href: "/reservar", label: "Reserva tu sesión" }}
      secondaryCta={{ href: "/contacto", label: "Resolver dudas" }}
      title="Resultados reales construidos con método, constancia y seguimiento."
    />
  );
}
