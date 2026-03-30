import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({ label, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-[40rem]", className)}>
      {label ? <p className="eyebrow-label">{label}</p> : null}
      <h2 className="max-w-[14.5ch] text-[clamp(1.8rem,8.2vw,3rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)] sm:max-w-[15ch] sm:text-[clamp(1.9rem,3.4vw,3rem)]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-[30rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{description}</p>
      ) : null}
    </div>
  );
}
