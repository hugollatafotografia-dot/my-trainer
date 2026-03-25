import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import Container from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  description?: string;
  id?: string;
  label?: string;
  title: string;
};

export default function Section({
  children,
  className,
  contentClassName,
  description,
  id,
  label,
  title,
}: SectionProps) {
  return (
    <section id={id} className={cn("section-shell", className)}>
      <Container>
        <div className="max-w-3xl">
          {label ? <p className="eyebrow-label">{label}</p> : null}
          <h2 className="type-h2 text-[color:var(--color-foreground)]">{title}</h2>
          {description ? (
            <p className="body-muted mt-5 max-w-2xl leading-8">
              {description}
            </p>
          ) : null}
        </div>
        <div className={cn("mt-12", contentClassName)}>{children}</div>
      </Container>
    </section>
  );
}
