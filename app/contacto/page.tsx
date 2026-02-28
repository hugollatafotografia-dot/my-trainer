import type { Metadata } from "next";

import PageTemplate from "@/components/PageTemplate";
import { contactDetails } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function ContactoPage() {
  return (
    <PageTemplate
      description="Página provisional de contacto para centralizar vías de atención y facilitar dudas sobre horarios, servicios y reservas."
      highlights={[
        {
          eyebrow: "Teléfono",
          title: contactDetails.phone,
          description:
            "Atención para reservas, dudas rápidas y coordinación básica de disponibilidad.",
        },
        {
          eyebrow: "Email",
          title: contactDetails.email,
          description:
            "Canal recomendado para consultas detalladas, propuestas o información más extensa.",
        },
        {
          eyebrow: "Ubicación",
          title: contactDetails.address,
          description:
            "Dirección placeholder para mostrar presencia física y preparar la futura integración con mapa.",
        },
      ]}
      label="Contacto"
      outro={{
        title: "Escríbenos y te respondemos con la mejor opción",
        description:
          "Podemos ayudarte a elegir servicio, frecuencia y punto de entrada según tu situación actual.",
        cta: { href: "/reservar", label: "Ir a reservar" },
      }}
      primaryCta={{ href: "mailto:hola@mytrainer.es", label: "Enviar email" }}
      secondaryCta={{ href: "/reservar", label: "Reservar online" }}
      title="Contacto directo para resolver dudas y activar tu siguiente paso."
    />
  );
}
