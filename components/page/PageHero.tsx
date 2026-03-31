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
  mobileMediaPosition?: string;
  tabletMediaPosition?: string;
  desktopMediaPosition?: string;
  overlayClassName?: string;
  contentClassName?: string;
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
  mobileMediaPosition = "68% 34%",
  tabletMediaPosition = "60% 36%",
  desktopMediaPosition = "58% 38%",
  overlayClassName,
  contentClassName,
  primaryCta,
  secondaryCta,
  contextLink,
  panel,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 text-white">
      <div className="sm:hidden">
        <div className="relative h-[43svh] min-h-[17.5rem] max-h-[24rem] overflow-hidden">
          <MediaFill
            src={imageSrc}
            alt={imageAlt}
            priority
            mobilePosition={mobileMediaPosition}
            tabletPosition={tabletMediaPosition}
            desktopPosition={desktopMediaPosition}
            className={cn("photo-grade", imageClassName)}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,7,10,0.44)_0%,rgba(10,7,10,0.56)_48%,rgba(10,7,10,0.78)_100%)]" />
        </div>

        <div className="bg-[linear-gradient(180deg,rgba(31,22,30,0.98)_0%,rgba(39,28,36,0.98)_100%)]">
          <Container className={cn("pb-7 pt-5", contentClassName)}>
            <div className="max-w-[42rem]">
              <p className="mb-3 text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-white/72">
                {label}
              </p>
              <h1 className="max-w-[12ch] text-[clamp(2rem,10vw,3.2rem)] leading-[0.92] font-semibold tracking-[-0.034em]">
                {title}
              </h1>
              {description ? (
                <p className="mt-3 max-w-[32rem] text-[0.93rem] leading-7 text-white/82">{description}</p>
              ) : null}

              <div className="mt-5 flex flex-col gap-2.5">
                <Button
                  href={primaryCta.href}
                  size="lg"
                  trackingEvent={primaryCta.event}
                  trackingSource={primaryCta.source}
                  trackingLabel={primaryCta.trackingLabel}
                  abTest="home_cta_journey"
                  abVariant="v1"
                  className="h-[3.05rem] w-full px-5 text-[0.72rem] font-semibold uppercase tracking-[0.08em]"
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
                    className="h-[3.05rem] w-full border-white/32 bg-black/22 px-5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white hover:border-white/48 hover:bg-black/32 hover:text-white"
                  >
                    {secondaryCta.label}
                  </Button>
                ) : null}

                {contextLink ? (
                  <Link
                    href={contextLink.href}
                    className="inline-flex h-[3.05rem] w-full items-center justify-center rounded-[var(--radius-pill)] border border-white/28 bg-black/18 px-4 text-[0.66rem] font-semibold uppercase tracking-[0.09em] text-white/78 transition-[border-color,color,background-color] duration-300 hover:border-white/42 hover:bg-black/28 hover:text-white"
                  >
                    {contextLink.label}
                  </Link>
                ) : null}
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="absolute inset-0 -z-10">
          <MediaFill
            src={imageSrc}
            alt={imageAlt}
            priority
            mobilePosition={mobileMediaPosition}
            tabletPosition={tabletMediaPosition}
            desktopPosition={desktopMediaPosition}
            className={cn("photo-grade", imageClassName)}
          />
          <div
            className={cn(
              "absolute inset-0 bg-[linear-gradient(112deg,rgba(10,7,10,0.9)_0%,rgba(11,8,11,0.76)_42%,rgba(14,9,12,0.34)_100%)]",
              overlayClassName,
            )}
          />
        </div>

        <Container
          className={cn(
            "relative grid min-h-[36rem] items-end gap-7 pb-10 pt-24 md:min-h-[39rem] md:pt-28 lg:pb-12",
            panel ? "lg:grid-cols-[minmax(0,1fr)_17rem]" : "",
            contentClassName,
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

            <div className="mt-6 flex flex-wrap items-center gap-3">
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
                  className="inline-flex h-[3.05rem] items-center justify-start rounded-none border-0 bg-transparent px-0 text-[0.7rem] font-semibold uppercase tracking-[0.09em] text-white/74 transition-colors duration-300 hover:text-white"
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
      </div>
    </section>
  );
}
