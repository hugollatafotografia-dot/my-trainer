import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-[color:var(--color-brand)] text-white shadow-[0_18px_40px_-24px_rgba(23,53,47,0.9)] hover:bg-[color:var(--color-brand-strong)]",
  secondary:
    "border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] text-[color:var(--color-foreground)] hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]",
  ghost:
    "text-[color:var(--color-foreground)] hover:bg-black/5",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-6 text-base",
};

export default function Button({
  href,
  children,
  className,
  size = "md",
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold tracking-[-0.02em] transition duration-200",
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
