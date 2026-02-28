import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";

type CTA = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type Highlight = {
  description: string;
  eyebrow?: string;
  title: string;
};

type PageTemplateProps = {
  description: string;
  highlights: Highlight[];
  label: string;
  outro?: {
    cta: CTA;
    description: string;
    title: string;
  };
  primaryCta?: CTA;
  secondaryCta?: CTA;
  title: string;
};

export default function PageTemplate({
  description,
  highlights,
  label,
  outro,
  primaryCta,
  secondaryCta,
  title,
}: PageTemplateProps) {
  return (
    <>
      <Section
        className="py-24 sm:py-28"
        description={description}
        label={label}
        title={title}
      >
        {primaryCta || secondaryCta ? (
          <div className="flex flex-col gap-4 sm:flex-row">
            {primaryCta ? (
              <Button href={primaryCta.href} size="lg" variant="primary">
                {primaryCta.label}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button
                href={secondaryCta.href}
                size="lg"
                variant={secondaryCta.variant ?? "secondary"}
              >
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        ) : null}
      </Section>

      <Section
        className="pt-0"
        description="Copy provisional para explicar el servicio con claridad y dejar espacio a detalle comercial más adelante."
        label="Detalles"
        title="Qué encontrarás"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => (
            <Card
              key={item.title}
              description={item.description}
              eyebrow={item.eyebrow}
              title={item.title}
            />
          ))}
        </div>
      </Section>

      {outro ? (
        <Section
          className="pt-0"
          description={outro.description}
          label="Siguiente paso"
          title={outro.title}
        >
          <Button href={outro.cta.href} size="lg">
            {outro.cta.label}
          </Button>
        </Section>
      ) : null}
    </>
  );
}
