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
        "rounded-[2rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 shadow-[0_30px_70px_-48px_rgba(22,21,20,0.35)]",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="text-xl font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
        {title}
      </h3>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)] sm:text-base">
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );
}
