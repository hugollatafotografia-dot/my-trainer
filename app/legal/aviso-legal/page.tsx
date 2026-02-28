import type { Metadata } from "next";

import Card from "@/components/Card";
import Section from "@/components/Section";
import { contactDetails } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
};

export default function AvisoLegalPage() {
  return (
    <>
      <Section
        className="py-24 sm:py-28"
        description="Texto provisional para la futura información corporativa y las condiciones generales de uso del sitio."
        label="Legal"
        title="Aviso legal"
      >
        <Card
          description={`Titular placeholder: My Trainer. Contacto provisional: ${contactDetails.email} y ${contactDetails.phone}. Este contenido deberá sustituirse por los datos fiscales y mercantiles definitivos.`}
          title="Identificación del titular"
        />
      </Section>
      <Section
        className="pt-0"
        description="Este sitio tiene carácter informativo y comercial. El acceso y la navegación implican la aceptación de las condiciones de uso que se publiquen de forma vigente en cada momento."
        label="Uso del sitio"
        title="Condiciones generales"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            description="El usuario se compromete a utilizar los contenidos de forma lícita, sin vulnerar derechos, seguridad o funcionamiento normal del sitio."
            title="Uso adecuado"
          />
          <Card
            description="Los textos, marcas e identidad visual mostrados en esta web son provisionales y quedarán protegidos conforme a la normativa aplicable una vez se publiquen en su versión definitiva."
            title="Propiedad intelectual"
          />
        </div>
      </Section>
    </>
  );
}
