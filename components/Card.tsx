import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children?: ReactNode;
  className?: string;
  description?: string;
  eyebrow?: string;
  title: string;
};

export default function Card({
  children,
  className,
  description,
  eyebrow,
  title,
}: CardProps) {
  return (
    <article
      className={cn(
        "surface-card",
        className,
      )}
    >
      {eyebrow ? (
        <p className="eyebrow-label mb-3">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="type-h3 text-[color:var(--color-foreground)]">{title}</h3>
      {description ? (
        <p className="body-muted mt-3 text-[var(--text-body-sm)] leading-7">
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );
}
