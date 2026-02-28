import type { Metadata } from "next";

import PageTemplate from "@/components/PageTemplate";

export const metadata: Metadata = {
  title: "Reservar",
};

export default function ReservarPage() {
  return (
    <PageTemplate
      description="Página preparada para integrar la reserva online. De momento, el copy orienta al usuario sobre el proceso y la información que recibirá."
      highlights={[
        {
          eyebrow: "Paso 1",
          title: "Elige modalidad",
          description:
            "Selecciona clase, valoración inicial o sesión personal según el tipo de acompañamiento que necesites.",
        },
        {
          eyebrow: "Paso 2",
          title: "Confirma franja",
          description:
            "Te mostraremos horarios disponibles y una confirmación clara para evitar dudas antes de finalizar.",
        },
        {
          eyebrow: "Paso 3",
          title: "Recibe instrucciones",
          description:
            "Después de reservar, enviaremos el detalle de acceso, recomendaciones previas y datos de contacto.",
        },
      ]}
      label="Reservar"
      outro={{
        title: "Si prefieres, también podemos gestionarlo contigo",
        description:
          "Mientras llega la integración final, el equipo puede ayudarte por teléfono o correo con la reserva manual.",
        cta: { href: "/contacto", label: "Hablar con el estudio" },
      }}
      primaryCta={{ href: "/contacto", label: "Reservar por contacto" }}
      secondaryCta={{ href: "/precios", label: "Ver planes" }}
      title="Reserva tu sesión en pocos pasos y con toda la información clara."
    />
  );
}
