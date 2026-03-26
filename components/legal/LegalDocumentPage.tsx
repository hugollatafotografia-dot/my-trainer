import Container from "@/components/Container";
import type { LegalDocument } from "@/lib/content/legal-content";

type LegalDocumentPageProps = {
  document: LegalDocument;
};

export default function LegalDocumentPage({ document }: LegalDocumentPageProps) {
  return (
    <section className="section-shell bg-[color:var(--color-background)]">
      <Container>
        <div className="max-w-[58rem]">
          <p className="eyebrow-label">Legal</p>
          <h1 className="max-w-[15ch] text-[clamp(2rem,4.2vw,3.45rem)] leading-[0.97] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
            {document.title}
          </h1>
          <p className="mt-4 max-w-[52rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{document.intro}</p>

          <div className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 py-3 text-[0.78rem] text-[color:var(--color-muted)]">
            <span className="font-semibold text-[color:var(--color-foreground)]">{document.effectiveDateLabel}:</span>
            <span>{document.effectiveDateValue}</span>
          </div>

          <p className="mt-4 rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 py-3 text-[0.82rem] leading-6 text-[color:var(--color-muted)]">
            {document.statusNote}
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {document.sections.map((section) => (
            <article key={section.title} className="surface-card rounded-[1.25rem] px-5 py-5 sm:px-6">
              <h2 className="text-[1.02rem] font-semibold tracking-[-0.012em] text-[color:var(--color-foreground)]">{section.title}</h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-2 text-[0.86rem] leading-7 text-[color:var(--color-muted)]">
                  {paragraph}
                </p>
              ))}

              {section.bullets?.length ? (
                <ul className="mt-3 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="text-[0.84rem] leading-6 text-[color:var(--color-muted)]">
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
