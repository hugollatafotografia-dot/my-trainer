import type { Metadata } from "next";

import PageTemplate from "@/components/PageTemplate";

export const metadata: Metadata = {
  title: "Clases",
};

export default function ClasesPage() {
  return (
    <PageTemplate
      description="Sesiones guiadas para ganar fuerza, moverte mejor y mantener una rutina constante sin perder calidad técnica ni atención al detalle."
      highlights={[
        {
          eyebrow: "Formato",
          title: "Grupos reducidos",
          description:
            "Clases con plazas limitadas para poder corregir, adaptar intensidades y sostener una experiencia cuidada.",
        },
        {
          eyebrow: "Método",
          title: "Progresión semanal",
          description:
            "La programación se ordena por bloques para que cada semana tenga sentido y se note una mejora real.",
        },
        {
          eyebrow: "Experiencia",
          title: "Ambiente premium",
          description:
            "Espacios despejados, ritmo bien marcado y acompañamiento cercano desde el inicio hasta el cierre de cada sesión.",
        },
      ]}
      label="Clases"
      outro={{
        title: "Reserva una sesión y prueba el ritmo del estudio",
        description:
          "Podemos dejar preparada una primera clase para que conozcas el sistema antes de elegir un plan.",
        cta: { href: "/reservar", label: "Reservar ahora" },
      }}
      primaryCta={{ href: "/reservar", label: "Reserva tu clase" }}
      secondaryCta={{ href: "/precios", label: "Ver precios" }}
      title="Clases pensadas para entrenar bien, sin ruido y con dirección."
    />
  );
}
