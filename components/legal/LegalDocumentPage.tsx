import Container from "@/components/Container";
import type { LegalDocument } from "@/lib/content/legal-content";

type LegalDocumentPageProps = {
  document: LegalDocument;
};

export default function LegalDocumentPage({ document }: LegalDocumentPageProps) {
  return (
    <section className="section-shell bg-[color:var(--color-background)]">
      <Container>
        <div className="max-w-[62rem]">
          <p className="eyebrow-label">{document.eyebrowLabel ?? "Legal"}</p>
          <h1 className="max-w-[16ch] text-[clamp(1.82rem,6vw,3.45rem)] leading-[0.97] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
            {document.title}
          </h1>
          <p className="mt-4 max-w-[56rem] text-[0.92rem] leading-7 text-[color:var(--color-muted)] sm:text-[0.9rem]">{document.intro}</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-[auto_1fr]">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 py-3 text-[0.78rem] text-[color:var(--color-muted)]">
              <span className="font-semibold text-[color:var(--color-foreground)]">{document.effectiveDateLabel}:</span>
              <span>{document.effectiveDateValue}</span>
            </div>
            <p className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 py-3 text-[0.8rem] leading-6 text-[color:var(--color-muted)]">
              {document.statusNote}
            </p>
          </div>

          {document.pendingItems?.length ? (
            <article className="mt-4 rounded-[1rem] border border-[color:var(--color-brand)]/25 bg-[color:var(--color-brand-soft)]/58 px-4 py-3.5">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-brand)]">
                {document.pendingTitle ?? "Campos pendientes de cierre legal"}
              </p>
              <ul className="mt-2 space-y-1.5">
                {document.pendingItems.map((item) => (
                  <li key={item} className="text-[0.8rem] leading-6 text-[color:var(--color-muted)]">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ) : null}
        </div>

        <div className="mt-7 space-y-3.5 sm:mt-8 sm:space-y-4">
          {document.sections.map((section) => (
            <article key={section.title} className="surface-card rounded-[1.25rem] px-4 py-4 sm:px-6 sm:py-5">
              <h2 className="text-[1.02rem] font-semibold tracking-[-0.012em] text-[color:var(--color-foreground)]">{section.title}</h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-2 text-[0.9rem] leading-7 text-[color:var(--color-muted)]">
                  {paragraph}
                </p>
              ))}

              {section.bullets?.length ? (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="relative pl-4 text-[0.86rem] leading-6 text-[color:var(--color-muted)] before:absolute before:left-0 before:top-[0.7rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[color:var(--color-accent)]">
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
