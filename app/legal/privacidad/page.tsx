import type { Metadata } from "next";

import Card from "@/components/Card";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacidad",
};

export default function PrivacidadPage() {
  return (
    <>
      <Section
        className="py-24 sm:py-28"
        description="Política provisional para explicar cómo se recopilarán y tratarán los datos personales cuando el sitio incorpore formularios y reservas."
        label="Legal"
        title="Política de privacidad"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            description="Podrán recogerse datos identificativos y de contacto cuando el usuario complete formularios, solicite información o realice una reserva."
            title="Datos tratados"
          />
          <Card
            description="La finalidad será responder consultas, gestionar reservas, prestar el servicio contratado y enviar comunicaciones vinculadas a la actividad del estudio."
            title="Finalidad"
          />
        </div>
      </Section>
      <Section
        className="pt-0"
        description="Antes de la publicación definitiva, será necesario completar bases jurídicas, plazos de conservación, encargados del tratamiento y derechos del usuario."
        label="Transparencia"
        title="Información pendiente de completar"
      >
        <Card
          description="Este texto sirve únicamente como placeholder de estructura. Debe revisarse con los datos reales del negocio y el marco normativo aplicable antes de usarse en producción."
          title="Revisión legal necesaria"
        />
      </Section>
    </>
  );
}
