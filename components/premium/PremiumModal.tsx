"use client";

import type { ReactNode } from "react";
import { useEffect, useId, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";

type PremiumModalProps = {
  open: boolean;
  onClose: () => void;
  label?: string;
  title: string;
  children: ReactNode;
  closeLabel?: string;
  size?: "md" | "lg" | "xl" | "xxl";
};

export default function PremiumModal({
  open,
  onClose,
  label,
  title,
  children,
  closeLabel = "Close",
  size = "lg",
}: PremiumModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const scrollOffsetRef = useRef({ x: 0, y: 0 });
  const onCloseRef = useRef(onClose);
  const lockRunRef = useRef(0);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useLayoutEffect(() => {
    if (!open || typeof window === "undefined") {
      return;
    }

    const runId = lockRunRef.current + 1;
    lockRunRef.current = runId;

    const body = document.body;
    const doc = document.documentElement;
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    scrollOffsetRef.current = { x: window.scrollX, y: window.scrollY };

    const previousBodyStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      left: body.style.left,
      right: body.style.right,
      paddingRight: body.style.paddingRight,
      touchAction: body.style.touchAction,
    };
    const previousHtmlStyles = {
      overflow: doc.style.overflow,
      scrollBehavior: doc.style.scrollBehavior,
    };

    const scrollbarCompensation = window.innerWidth - doc.clientWidth;

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollOffsetRef.current.y}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.touchAction = "none";
    if (scrollbarCompensation > 0) {
      body.style.paddingRight = `${scrollbarCompensation}px`;
    }
    doc.style.overflow = "hidden";
    doc.style.scrollBehavior = "auto";

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus({ preventScroll: true });
    });

    return () => {
      if (lockRunRef.current !== runId) {
        return;
      }

      body.style.overflow = previousBodyStyles.overflow;
      body.style.position = previousBodyStyles.position;
      body.style.top = previousBodyStyles.top;
      body.style.width = previousBodyStyles.width;
      body.style.left = previousBodyStyles.left;
      body.style.right = previousBodyStyles.right;
      body.style.paddingRight = previousBodyStyles.paddingRight;
      body.style.touchAction = previousBodyStyles.touchAction;
      doc.style.overflow = previousHtmlStyles.overflow;
      doc.style.scrollBehavior = "auto";

      window.scrollTo({
        left: scrollOffsetRef.current.x,
        top: scrollOffsetRef.current.y,
        behavior: "auto",
      });

      doc.style.scrollBehavior = previousHtmlStyles.scrollBehavior;

      requestAnimationFrame(() => {
        if (previousFocusRef.current && previousFocusRef.current.isConnected) {
          previousFocusRef.current.focus({ preventScroll: true });
        }
      });
    };
  }, [open]);

  useEffect(() => {
    if (!open || typeof window === "undefined") {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:grid sm:place-items-center sm:p-5">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,18,27,0.46)_0%,rgba(14,8,13,0.72)_100%)] backdrop-blur-[4px]"
        aria-label={closeLabel}
      />

      <div
        className={cn(
          "relative max-h-[92dvh] w-full overflow-hidden rounded-t-[1.45rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] pb-[env(safe-area-inset-bottom)] shadow-[0_62px_140px_-72px_rgba(13,8,11,0.9)] sm:max-h-[calc(100dvh-2.5rem)] sm:rounded-[1.55rem] sm:pb-0",
          size === "md" ? "max-w-[46rem]" : "",
          size === "lg" ? "max-w-[62rem]" : "",
          size === "xl" ? "max-w-[72rem]" : "",
          size === "xxl" ? "max-w-[80rem]" : "",
        )}
      >
        <article
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="flex h-full min-h-[56vh] flex-col sm:min-h-[42vh]"
        >
          <header className="sticky top-0 z-10 border-b border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 pb-3.5 pt-3.5 sm:px-7 sm:pb-5 sm:pt-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                {label ? (
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-[color:var(--color-accent)]">
                    {label}
                  </p>
                ) : null}
                <h3
                  id={titleId}
                  className="mt-1 text-[clamp(1.24rem,2.2vw,1.9rem)] leading-[1.05] font-semibold tracking-[-0.024em] text-[color:var(--color-foreground)]"
                >
                  {title}
                </h3>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-10 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)] transition-[border-color,color,transform] duration-200 hover:-translate-y-px hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
              >
                {closeLabel}
              </button>
            </div>
          </header>

          <div className="no-scrollbar flex-1 overflow-y-auto overscroll-contain px-3.5 py-4 sm:px-7 sm:py-7">{children}</div>
        </article>
      </div>
    </div>,
    document.body,
  );
}
