import Link from "next/link";

import Button from "@/components/Button";
import Container from "@/components/Container";
import MediaFill from "@/components/media/MediaFill";
import type { TrackEventName } from "@/lib/tracking/events";
import { cn } from "@/lib/utils";

type CtaConfig = {
  href: string;
  label: string;
  event: TrackEventName;
  source: string;
  trackingLabel: string;
  variant?: "primary" | "secondary" | "ghost" | "light";
};

type HeroPanel = {
  eyebrow: string;
  description: string;
};

type ContextLink = {
  href: string;
  label: string;
};

type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  primaryCta: CtaConfig;
  secondaryCta?: CtaConfig;
  contextLink?: ContextLink;
  panel?: HeroPanel;
};

export default function PageHero({
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  imageClassName,
  primaryCta,
  secondaryCta,
  contextLink,
  panel,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 text-white">
      <div className="absolute inset-0 -z-10">
        <MediaFill
          src={imageSrc}
          alt={imageAlt}
          priority
          className={cn("photo-grade object-cover object-[58%_38%]", imageClassName)}
        />
        <div className="absolute inset-0 bg-[linear-gradient(104deg,rgba(10,7,10,0.92)_0%,rgba(12,8,11,0.78)_40%,rgba(15,9,13,0.36)_100%)]" />
      </div>

      <Container
        className={cn(
          "relative grid min-h-[31rem] items-end gap-5 pb-8 pt-24 sm:min-h-[35rem] sm:gap-7 sm:pb-10 md:pt-28 lg:pb-12",
          panel ? "lg:grid-cols-[minmax(0,1fr)_17rem]" : "",
        )}
      >
        <div className="max-w-[44rem]">
          <p className="mb-3 text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-white/74 sm:mb-5 sm:text-[0.68rem] sm:tracking-[0.16em]">
            {label}
          </p>
          <h1 className="max-w-[11.5ch] text-[clamp(2.1rem,10vw,5.1rem)] leading-[0.9] font-semibold tracking-[-0.036em] sm:max-w-[13ch] sm:text-[clamp(2.45rem,6.2vw,5.1rem)] sm:leading-[0.88] sm:tracking-[-0.04em]">
            {title}
          </h1>
          {description ? (
            <p className="mt-3 max-w-[31rem] text-[0.92rem] leading-7 text-white/84 sm:mt-4 sm:text-[0.91rem] sm:text-white/82">{description}</p>
          ) : null}

          <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <Button
              href={primaryCta.href}
              size="lg"
              trackingEvent={primaryCta.event}
              trackingSource={primaryCta.source}
              trackingLabel={primaryCta.trackingLabel}
              abTest="home_cta_journey"
              abVariant="v1"
              className="h-[3.05rem] w-full px-5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] sm:w-auto sm:px-7 sm:text-[0.75rem]"
            >
              {primaryCta.label}
            </Button>

            {secondaryCta ? (
              <Button
                href={secondaryCta.href}
                size="lg"
                variant={secondaryCta.variant ?? "secondary"}
                trackingEvent={secondaryCta.event}
                trackingSource={secondaryCta.source}
                trackingLabel={secondaryCta.trackingLabel}
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.05rem] w-full border-white/36 bg-black/24 px-5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white hover:border-white/52 hover:bg-black/34 hover:text-white sm:w-auto sm:px-7 sm:text-[0.75rem]"
              >
                {secondaryCta.label}
              </Button>
            ) : null}

            {contextLink ? (
              <Link
                href={contextLink.href}
                className="inline-flex h-[2.6rem] w-full items-center justify-center rounded-[var(--radius-pill)] border border-white/28 bg-black/18 px-4 text-[0.64rem] font-semibold uppercase tracking-[0.09em] text-white/78 transition-[border-color,color,background-color] duration-300 hover:border-white/42 hover:bg-black/28 hover:text-white sm:h-[3.05rem] sm:w-auto sm:justify-start sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:text-[0.7rem] sm:text-white/74"
              >
                {contextLink.label}
              </Link>
            ) : null}
          </div>
        </div>

        {panel ? (
          <aside className="dark-panel hidden p-4 text-white/86 lg:block">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-white/66">
              {panel.eyebrow}
            </p>
            <p className="mt-1 text-[0.82rem] leading-6 text-white/84">{panel.description}</p>
          </aside>
        ) : null}
      </Container>
    </section>
  );
}
