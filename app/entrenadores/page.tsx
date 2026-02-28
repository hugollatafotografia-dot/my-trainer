import type { Metadata } from "next";

import PageTemplate from "@/components/PageTemplate";

export const metadata: Metadata = {
  title: "Entrenadores",
};

export default function EntrenadoresPage() {
  return (
    <PageTemplate
      description="Presentación provisional del equipo para comunicar experiencia, enfoque y el tipo de atención que recibirá cada cliente."
      highlights={[
        {
          eyebrow: "Perfil",
          title: "Equipo experto",
          description:
            "Profesionales con base técnica sólida y capacidad para traducir objetivos complejos en planes sostenibles.",
        },
        {
          eyebrow: "Método",
          title: "Misma filosofía",
          description:
            "Todo el equipo comparte criterios de ejecución, progresión y trato cercano para mantener consistencia.",
        },
        {
          eyebrow: "Acompañamiento",
          title: "Atención real",
          description:
            "Seguimiento continuo, escucha activa y ajustes prácticos para que cada persona entrene con confianza.",
        },
      ]}
      label="Entrenadores"
      outro={{
        title: "Te asignamos el perfil más adecuado",
        description:
          "Según tu punto de partida, podremos orientarte hacia el entrenador y el formato que mejor encajen contigo.",
        cta: { href: "/contacto", label: "Consultar disponibilidad" },
      }}
      primaryCta={{ href: "/reservar", label: "Conocer el servicio" }}
      secondaryCta={{ href: "/entrenador-personal", label: "Ver entrenamiento personal" }}
      title="Entrenadores que combinan precisión técnica y trato cercano."
    />
  );
}
