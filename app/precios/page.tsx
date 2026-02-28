import type { Metadata } from "next";

import PageTemplate from "@/components/PageTemplate";

export const metadata: Metadata = {
  title: "Precios",
};

export default function PreciosPage() {
  return (
    <PageTemplate
      description="Estructura de precios provisional para presentar opciones claras y facilitar la decisión entre clases, packs y trabajo individual."
      highlights={[
        {
          eyebrow: "Inicio",
          title: "Clase de prueba",
          description:
            "Una primera sesión para conocer el espacio, el método y el nivel de atención antes de comprometerte con un plan.",
        },
        {
          eyebrow: "Constancia",
          title: "Packs mensuales",
          description:
            "Bonos y cuotas con acceso a varias sesiones por semana para mantener un volumen sostenible y medible.",
        },
        {
          eyebrow: "Premium",
          title: "Plan personal",
          description:
            "Entrenamiento uno a uno con programación propia, revisiones y seguimiento adaptado a tu calendario.",
        },
      ]}
      label="Precios"
      outro={{
        title: "Te ayudamos a elegir el formato correcto",
        description:
          "Si dudas entre varias opciones, podemos recomendarte el plan más eficiente según objetivo y frecuencia disponible.",
        cta: { href: "/contacto", label: "Pedir asesoramiento" },
      }}
      primaryCta={{ href: "/reservar", label: "Ver disponibilidad" }}
      secondaryCta={{ href: "/clases", label: "Explorar clases" }}
      title="Planes claros para entrenar con continuidad y sin fricción."
    />
  );
}
