import Button from "@/components/Button";
import Section from "@/components/Section";

export default function Home() {
  return (
    <Section
      className="py-28 sm:py-32"
      description="La base del sitio ya está preparada. La home completa se incorpora en el siguiente paso con secciones, testimonios, FAQ y llamadas a la acción."
      label="My Trainer"
      title="Entrenamiento premium con una estructura limpia y preparada para crecer."
    >
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button href="/reservar" size="lg">
          Reserva tu clase
        </Button>
        <Button href="/precios" size="lg" variant="secondary">
          Ver planes
        </Button>
      </div>
    </Section>
  );
}
