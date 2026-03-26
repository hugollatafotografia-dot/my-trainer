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
          "relative grid min-h-[31rem] items-end gap-7 pb-10 pt-22 sm:min-h-[35rem] md:pt-26 lg:pb-12",
          panel ? "lg:grid-cols-[minmax(0,1fr)_17rem]" : "",
        )}
      >
        <div className="max-w-[44rem]">
          <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/74">
            {label}
          </p>
          <h1 className="max-w-[13ch] text-[clamp(2.45rem,6.2vw,5.1rem)] leading-[0.88] font-semibold tracking-[-0.04em]">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-[31rem] text-[0.91rem] leading-7 text-white/82">{description}</p>
          ) : null}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              href={primaryCta.href}
              size="lg"
              trackingEvent={primaryCta.event}
              trackingSource={primaryCta.source}
              trackingLabel={primaryCta.trackingLabel}
              abTest="home_cta_journey"
              abVariant="v1"
              className="h-[3.05rem] px-7 text-[0.75rem] font-semibold uppercase tracking-[0.08em]"
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
                className="h-[3.05rem] border-white/36 bg-black/24 px-7 text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-white hover:border-white/52 hover:bg-black/34 hover:text-white"
              >
                {secondaryCta.label}
              </Button>
            ) : null}

            {contextLink ? (
              <Link
                href={contextLink.href}
                className="inline-flex h-[3.05rem] items-center text-[0.7rem] font-semibold uppercase tracking-[0.09em] text-white/74 transition-colors duration-300 hover:text-white"
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
