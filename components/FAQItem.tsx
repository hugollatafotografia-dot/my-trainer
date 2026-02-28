type FAQItemProps = {
  answer: string;
  question: string;
};

export default function FAQItem({ answer, question }: FAQItemProps) {
  return (
    <details className="group rounded-[1.75rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-6 py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold tracking-[-0.02em] text-[color:var(--color-foreground)]">
        <span>{question}</span>
        <span className="text-2xl font-light text-[color:var(--color-accent)] transition-transform duration-200 group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--color-muted)] sm:text-base">
        {answer}
      </p>
    </details>
  );
}
