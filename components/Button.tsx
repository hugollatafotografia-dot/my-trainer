import Link from "next/link";
import type { ReactNode } from "react";

import type { TrackEventName } from "@/lib/tracking/events";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
  variant?: "primary" | "secondary" | "ghost" | "light";
  trackingEvent?: TrackEventName;
  trackingSource?: string;
  trackingLabel?: string;
  abTest?: string;
  abVariant?: string;
};

const variants = {
  primary:
    "border border-transparent bg-[color:var(--color-brand)] text-white shadow-[0_18px_38px_-24px_rgba(73,34,53,0.82)] hover:-translate-y-px hover:bg-[color:var(--color-brand-strong)] hover:shadow-[0_22px_44px_-26px_rgba(73,34,53,0.78)]",
  secondary:
    "border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] text-[color:var(--color-foreground)] shadow-[0_14px_30px_-24px_rgba(36,20,28,0.32)] hover:-translate-y-px hover:border-[color:var(--color-brand)] hover:bg-[color:var(--color-pill)] hover:text-[color:var(--color-brand)]",
  light:
    "border border-white/34 bg-[#fffaf7] !text-[#211019] shadow-[0_22px_44px_-28px_rgba(20,12,17,0.48)] hover:-translate-y-px hover:border-white hover:bg-[#fff2ec] hover:!text-[#1b0d15]",
  ghost:
    "border border-transparent text-[color:var(--color-foreground)] hover:-translate-y-px hover:bg-[color:var(--color-pill)]",
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
        "inline-flex items-center justify-center rounded-[var(--radius-pill)] font-semibold tracking-[-0.01em] transition-[background-color,color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:translate-y-px",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-brand)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand)]",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </Link>
  );
}
