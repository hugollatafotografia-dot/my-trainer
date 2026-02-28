import type { Metadata } from "next";

import Card from "@/components/Card";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Cookies",
};

export default function CookiesPage() {
  return (
    <>
      <Section
        className="py-24 sm:py-28"
        description="Texto provisional para explicar el uso de cookies técnicas, analíticas o de personalización cuando se activen herramientas reales en la web."
        label="Legal"
        title="Política de cookies"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            description="Necesarias para el funcionamiento básico del sitio y para mantener preferencias esenciales de navegación."
            title="Cookies técnicas"
          />
          <Card
            description="Podrán emplearse para analizar el uso del sitio y mejorar la experiencia cuando se integren herramientas de medición."
            title="Cookies analíticas"
          />
          <Card
            description="El usuario deberá poder aceptar, rechazar o configurar categorías no esenciales desde un panel de consentimiento."
            title="Gestión del consentimiento"
          />
        </div>
      </Section>
      <Section
        className="pt-0"
        description="Antes de publicar, habrá que listar proveedores, duración de las cookies y mecanismo exacto de revocación del consentimiento."
        label="Pendiente"
        title="Implementación definitiva"
      >
        <Card
          description="Este contenido es solo una base estructural. La política final debe alinearse con las cookies efectivamente instaladas en la aplicación."
          title="Ajuste obligatorio"
        />
      </Section>
    </>
  );
}
