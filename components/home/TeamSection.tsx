"use client";

import { useMemo, useState } from "react";

import MediaFill from "@/components/media/MediaFill";
import PremiumModal from "@/components/premium/PremiumModal";
import type { HomeTeamMember, HomeTeamModalLabels } from "@/lib/content/home-premium";

type TeamSectionProps = {
  members: HomeTeamMember[];
  labels: HomeTeamModalLabels;
  closeLabel?: string;
};

export default function TeamSection({ members, labels, closeLabel = "Close" }: TeamSectionProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const activeMember = useMemo(
    () => members.find((member) => member.id === selectedId) ?? null,
    [members, selectedId],
  );

  return (
    <>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {members.map((member) => (
          <article key={member.id} className="image-frame overflow-hidden p-3.5 sm:p-4">
            <div className="relative aspect-[5/6] overflow-hidden rounded-[1.2rem] sm:aspect-[4/5]">
              <MediaFill
                src={member.image}
                alt={member.alt}
                mobilePosition={member.mobileImagePosition ?? member.imagePosition ?? "58% 30%"}
                tabletPosition={member.imagePosition ?? "56% 38%"}
                desktopPosition={member.imagePosition ?? "56% 38%"}
                className="photo-grade-soft"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,9,13,0.2)_0%,rgba(15,9,13,0.58)_100%)]" />
            </div>

            <div className="px-1 pb-1 pt-4">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
                {member.age} {labels.years}
              </p>
              <h3 className="mt-1 text-[1.05rem] font-semibold text-[color:var(--color-foreground)]">{member.name}</h3>
              <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">
                {member.role}
              </p>
              <p className="mt-2 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">{member.specialty}</p>
              <p className="mt-2 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">{member.excerpt}</p>

              <button
                type="button"
                onClick={() => setSelectedId(member.id)}
                className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3.5 text-[0.67rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-[border-color,color,transform] duration-300 hover:-translate-y-px hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)] sm:w-auto"
              >
                {member.ctaLabel}
              </button>
            </div>
          </article>
        ))}
      </div>

      <PremiumModal
        open={Boolean(activeMember)}
        onClose={() => setSelectedId(null)}
        label={activeMember?.modalLabel}
        title={activeMember?.modalTitle ?? ""}
        closeLabel={closeLabel}
        size="xxl"
      >
        {activeMember ? (
          <div className="space-y-4 sm:space-y-5">
            <div className="grid gap-4 xl:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)]">
              <div className="overflow-hidden rounded-[1.15rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)]">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] xl:h-full xl:min-h-[31rem] xl:aspect-auto">
                  <MediaFill
                    src={activeMember.image}
                    alt={activeMember.alt}
                    mobilePosition={activeMember.mobileImagePosition ?? activeMember.imagePosition ?? "58% 30%"}
                    tabletPosition={activeMember.imagePosition ?? "56% 38%"}
                    desktopPosition={activeMember.imagePosition ?? "56% 38%"}
                    className="photo-grade-soft"
                  />
                </div>
              </div>

              <div className="rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5 sm:py-5">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">{labels.profile}</p>
                <h4 className="mt-2 text-[1.05rem] font-semibold tracking-[-0.014em] text-[color:var(--color-foreground)]">
                  {activeMember.name} · {activeMember.role}
                </h4>
                <p className="mt-1 text-[0.85rem] leading-6 text-[color:var(--color-muted)]">{activeMember.specialty}</p>
                <p className="mt-3 text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{activeMember.motivation}</p>
                <p className="mt-3 text-[0.82rem] leading-6 text-[color:var(--color-muted)]">
                  <span className="font-semibold text-[color:var(--color-foreground)]">{labels.languages}:</span>{" "}
                  {activeMember.languages.join(", ")}
                </p>
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-2">
              <section className="rounded-[1.02rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5 sm:py-5">
                <h4 className="text-[0.9rem] font-semibold text-[color:var(--color-foreground)]">{labels.experience}</h4>
                <ul className="mt-2 space-y-2 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">
                  {activeMember.experience.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[1.02rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5 sm:py-5">
                <h4 className="text-[0.9rem] font-semibold text-[color:var(--color-foreground)]">{labels.studies}</h4>
                <ul className="mt-2 space-y-2 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">
                  {activeMember.studies.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[1.02rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5 sm:py-5">
                <h4 className="text-[0.9rem] font-semibold text-[color:var(--color-foreground)]">{labels.treatments}</h4>
                <ul className="mt-2 space-y-2 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">
                  {activeMember.treatments.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[1.02rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5 sm:py-5">
                <h4 className="text-[0.9rem] font-semibold text-[color:var(--color-foreground)]">{labels.approach}</h4>
                <ul className="mt-2 space-y-2 text-[0.84rem] leading-6 text-[color:var(--color-muted)]">
                  {activeMember.approach.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        ) : null}
      </PremiumModal>
    </>
  );
}
