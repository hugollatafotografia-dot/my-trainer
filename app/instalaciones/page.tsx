import type { Metadata } from "next";

import PageTemplate from "@/components/PageTemplate";

export const metadata: Metadata = {
  title: "Instalaciones",
};

export default function InstalacionesPage() {
  return (
    <PageTemplate
      description="Un entorno sereno, funcional y bien equipado para que la experiencia de entrenamiento se sienta profesional desde que entras."
      highlights={[
        {
          eyebrow: "Espacio",
          title: "Diseño limpio",
          description:
            "El estudio prioriza amplitud visual, circulación cómoda y un ambiente que invita a concentrarse.",
        },
        {
          eyebrow: "Material",
          title: "Equipamiento seleccionado",
          description:
            "Trabajamos con material versátil y robusto para cubrir fuerza, movilidad y trabajo técnico sin saturar la sala.",
        },
        {
          eyebrow: "Experiencia",
          title: "Detalles cuidados",
          description:
            "Iluminación, orden y flujos de uso pensados para que cada visita se perciba consistente y premium.",
        },
      ]}
      label="Instalaciones"
      outro={{
        title: "Ven a conocer el espacio antes de empezar",
        description:
          "Podemos enseñarte el estudio y recomendarte la modalidad más adecuada según cómo prefieras entrenar.",
        cta: { href: "/reservar", label: "Solicitar visita" },
      }}
      primaryCta={{ href: "/reservar", label: "Reservar visita" }}
      secondaryCta={{ href: "/clases", label: "Ver clases" }}
      title="Instalaciones diseñadas para entrenar con calma, foco y calidad."
    />
  );
}
