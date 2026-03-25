import Link from "next/link";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  href?: string;
  showMark?: boolean;
  size?: "md" | "lg";
};

const sizeClasses = {
  md: {
    wrap: "gap-2.25",
    mark: "h-[1.68rem] w-[1.68rem]",
    title: "text-[0.98rem]",
    subtitle: "text-[0.53rem]",
  },
  lg: {
    wrap: "gap-2.8",
    mark: "h-[1.98rem] w-[1.98rem]",
    title: "text-[1.12rem]",
    subtitle: "text-[0.56rem]",
  },
};

export default function BrandLogo({
  className,
  href = "/",
  showMark = true,
  size = "md",
}: BrandLogoProps) {
  const style = sizeClasses[size];

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center text-[color:var(--color-foreground)]",
        style.wrap,
        className,
      )}
    >
      {showMark ? (
        <span
          className={cn(
            "relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[color:var(--color-line)] bg-[linear-gradient(150deg,#faf3f6_0%,#eedde6_100%)] shadow-[0_12px_26px_-20px_rgba(40,20,30,0.64)]",
            style.mark,
          )}
          aria-hidden
        >
          <span className="absolute inset-[0.16rem] rounded-full bg-[linear-gradient(146deg,#6d3550_0%,#472235_100%)]" />
          <span className="relative text-[0.5rem] font-semibold tracking-[0.1em] text-white">
            CI
          </span>
        </span>
      ) : null}

      <span className="grid leading-none">
        <span
          className={cn(
            "font-display font-semibold tracking-[-0.026em]",
            style.title,
          )}
        >
          Centres Ideal
        </span>
        <span
          className={cn(
            "mt-1 font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]",
            style.subtitle,
          )}
        >
          Illa Carlemany
        </span>
      </span>

      <span className="sr-only">Centres Ideal Illa Carlemany</span>
    </Link>
  );
}
