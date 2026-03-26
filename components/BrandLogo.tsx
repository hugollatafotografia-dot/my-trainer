import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  href?: string;
  size?: "md" | "lg";
  showWordmark?: boolean;
};

const sizeClasses = {
  md: {
    wrap: "gap-2.5",
    mark: "h-[2.58rem] w-[2.58rem]",
    title: "text-[0.93rem]",
    subtitle: "text-[0.49rem]",
    subtitleVisibility: "hidden sm:inline",
    imageSizes: "(max-width: 1024px) 42px, 42px",
  },
  lg: {
    wrap: "gap-3",
    mark: "h-[2.78rem] w-[2.78rem]",
    title: "text-[1.04rem]",
    subtitle: "text-[0.52rem]",
    subtitleVisibility: "inline",
    imageSizes: "(max-width: 1024px) 44px, 46px",
  },
};

export default function BrandLogo({
  className,
  href = "/",
  size = "md",
  showWordmark = true,
}: BrandLogoProps) {
  const style = sizeClasses[size];

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center text-[color:var(--color-foreground)]",
        showWordmark ? style.wrap : "gap-0",
        className,
      )}
    >
      <span
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[color:var(--color-line)] bg-white p-[0.12rem] shadow-[0_12px_26px_-20px_rgba(40,20,30,0.64)]",
          style.mark,
        )}
        aria-hidden
      >
        <Image
          src="/branding/logo-centros-ideal-andorra.jpg"
          alt="Logo Centros Ideal Andorra"
          fill
          sizes={style.imageSizes}
          className="rounded-full object-cover"
        />
      </span>

      {showWordmark ? (
        <span className="grid leading-none">
          <span
            className={cn(
              "font-display font-semibold tracking-[-0.026em]",
              style.title,
            )}
          >
            Centros Ideal
          </span>
          <span
            className={cn(
              "mt-1 font-semibold uppercase tracking-[0.18em] text-current opacity-70",
              style.subtitle,
              style.subtitleVisibility,
            )}
          >
            Andorra
          </span>
        </span>
      ) : null}

      <span className="sr-only">Centros Ideal Andorra</span>
    </Link>
  );
}
