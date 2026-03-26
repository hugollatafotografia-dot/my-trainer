import Button from "@/components/Button";
import Container from "@/components/Container";
import MediaFill from "@/components/media/MediaFill";
import type { TrackEventName } from "@/lib/tracking/events";

type CtaConfig = {
  href: string;
  label: string;
  event: TrackEventName;
  source: string;
  trackingLabel: string;
  variant?: "primary" | "secondary" | "ghost" | "light";
};

type PageClosingCtaProps = {
  label: string;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  primaryCta: CtaConfig;
  secondaryCta?: CtaConfig;
};

export default function PageClosingCta({
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  primaryCta,
  secondaryCta,
}: PageClosingCtaProps) {
  return (
    <section className="bg-[color:var(--color-background)] pb-14 pt-9 sm:pb-16 sm:pt-11">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2.15rem] border border-[color:var(--color-line)] bg-[color:var(--color-brand)] px-6 py-7 text-white shadow-[0_42px_96px_-72px_rgba(43,19,32,0.84)] sm:px-8 sm:py-9">
          <div className="absolute inset-0 -z-10">
            <MediaFill
              src={imageSrc}
              alt={imageAlt}
              className="photo-grade-soft object-cover object-[56%_40%] opacity-44"
            />
            <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(58,25,40,0.9)_0%,rgba(77,35,54,0.82)_100%)]" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-[38rem]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-white/72">
                {label}
              </p>
              <h2 className="mt-3 max-w-[14ch] text-[clamp(2rem,3.9vw,3.25rem)] leading-[0.95] font-semibold tracking-[-0.032em]">
                {title}
              </h2>
              {description ? (
                <p className="mt-3 max-w-[30rem] text-[0.87rem] leading-6 text-white/82">{description}</p>
              ) : null}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button
                href={primaryCta.href}
                size="lg"
                variant={primaryCta.variant ?? "light"}
                trackingEvent={primaryCta.event}
                trackingSource={primaryCta.source}
                trackingLabel={primaryCta.trackingLabel}
                abTest="home_cta_journey"
                abVariant="v1"
                className="h-[3.08rem] w-full px-7 text-[0.74rem] font-semibold uppercase tracking-[0.08em] !text-[#170d13] hover:!text-[#12080f] sm:w-auto"
              >
                {primaryCta.label}
              </Button>

              {secondaryCta ? (
                <Button
                  href={secondaryCta.href}
                  size="lg"
                  variant={secondaryCta.variant ?? "ghost"}
                  trackingEvent={secondaryCta.event}
                  trackingSource={secondaryCta.source}
                  trackingLabel={secondaryCta.trackingLabel}
                  abTest="home_cta_journey"
                  abVariant="v1"
                  className="h-[3.08rem] w-full border border-white/34 bg-black/22 px-7 text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-white hover:border-white/48 hover:bg-black/32 sm:w-auto"
                >
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
