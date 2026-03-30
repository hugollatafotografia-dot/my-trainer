"use client";

import { requestChatOpen } from "@/lib/chat/open-event";

type ChatOpenButtonProps = {
  label: string;
  description?: string;
};

export default function ChatOpenButton({ label, description }: ChatOpenButtonProps) {
  return (
    <button
      type="button"
      onClick={requestChatOpen}
      className="inline-flex min-h-12 w-full items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-5 text-[0.72rem] font-semibold uppercase tracking-[0.085em] text-[color:var(--color-foreground)] transition-[border-color,color,transform] duration-300 hover:-translate-y-px hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)] sm:w-auto"
    >
      <span className="flex flex-col items-start gap-0.5">
        <span>{label}</span>
        {description ? (
          <span className="text-[0.62rem] font-medium normal-case tracking-[0.01em] text-[color:var(--color-muted)]">
            {description}
          </span>
        ) : null}
      </span>
    </button>
  );
}
