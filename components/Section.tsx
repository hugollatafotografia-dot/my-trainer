import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

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
    <section id={id} className={cn("py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          {label ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
              {label}
            </p>
          ) : null}
          <h2 className="font-display text-4xl leading-none tracking-[-0.03em] text-[color:var(--color-foreground)] sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <div className={cn("mt-12", contentClassName)}>{children}</div>
      </div>
    </section>
  );
}
