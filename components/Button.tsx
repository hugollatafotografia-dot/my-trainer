import Link from "next/link";
import type { ReactNode } from "react";

import type { TrackEventName } from "@/lib/tracking/events";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
  trackingEvent?: TrackEventName;
  trackingSource?: string;
  trackingLabel?: string;
  abTest?: string;
  abVariant?: string;
};

const variants = {
  primary:
    "border border-transparent bg-[color:var(--color-brand)] text-white shadow-[0_18px_38px_-24px_rgba(73,34,53,0.82)] hover:bg-[color:var(--color-brand-strong)]",
  secondary:
    "border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] text-[color:var(--color-foreground)] hover:border-[color:var(--color-brand)] hover:bg-[color:var(--color-pill)] hover:text-[color:var(--color-brand)]",
  ghost:
    "border border-transparent text-[color:var(--color-foreground)] hover:bg-[color:var(--color-pill)]",
};

const sizes = {
  md: "h-11 px-5 text-[0.92rem]",
  lg: "h-12 px-6 text-[0.98rem]",
};

export default function Button({
  href,
  children,
  className,
  size = "md",
  variant = "primary",
  trackingEvent,
  trackingSource,
  trackingLabel,
  abTest,
  abVariant,
}: ButtonProps) {
  return (
    <Link
      href={href}
      data-track-event={trackingEvent}
      data-track-source={trackingSource}
      data-track-label={trackingLabel}
      data-track-href={href}
      data-ab-test={abTest}
      data-ab-variant={abVariant}
      className={cn(
        "inline-flex items-center justify-center rounded-[var(--radius-pill)] font-semibold tracking-[-0.01em] transition-colors duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-brand)]",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </Link>
  );
}
