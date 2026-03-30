"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { locales, type Locale } from "@/lib/i18n/config";
import { localeMeta } from "@/lib/i18n/locale-meta";
import { changeLocalePath } from "@/lib/i18n/routing";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  label?: string;
  className?: string;
  currentLocale: Locale;
};

export default function LanguageSwitcher({ label = "Language", className, currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const fallbackLocale: Locale = "es";
  const safeLocale = currentLocale in localeMeta ? currentLocale : fallbackLocale;

  const currentMeta = useMemo(() => localeMeta[safeLocale], [safeLocale]);

  useEffect(() => {
    function onOutsideClick(event: MouseEvent) {
      if (!rootRef.current) {
        return;
      }

      if (!rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("mousedown", onOutsideClick);
    window.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("mousedown", onOutsideClick);
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <div className={cn("relative", className)} ref={rootRef}>
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="inline-flex h-10 min-w-[4.35rem] items-center gap-2 rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3 text-[0.6rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-[border-color,color,box-shadow] duration-300 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)] sm:h-9 sm:px-3 sm:text-[0.62rem]"
      >
        <span className="inline-flex h-5 w-5 items-center justify-center text-[0.86rem]" aria-hidden>
          {currentMeta.flag}
        </span>
        <span>{currentMeta.code}</span>
        <span className="text-[0.52rem] text-[color:var(--color-muted)]" aria-hidden>
          ▾
        </span>
        <span className="sr-only">{label}</span>
      </button>

      <div
        className={cn(
          "absolute right-0 top-[calc(100%+0.45rem)] z-[60] w-[13rem] max-w-[calc(100vw-1rem)] rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] p-1.5 shadow-[0_24px_54px_-40px_rgba(35,18,27,0.72)] transition-all duration-200",
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
        )}
      >
        <p className="px-2 pb-1 pt-1 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-muted)]">
          {label}
        </p>
        <ul role="listbox" aria-label={label} className="no-scrollbar max-h-[18rem] space-y-1 overflow-y-auto">
          {locales.map((locale) => {
            const href = changeLocalePath(pathname, locale);
            const meta = localeMeta[locale] ?? localeMeta[fallbackLocale];
            const isActive = locale === safeLocale;

            return (
              <li key={locale}>
                <Link
                  href={href}
                  prefetch={false}
                  data-locale={locale}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex h-11 items-center gap-2 rounded-[0.8rem] px-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-200",
                    isActive
                      ? "bg-[color:var(--color-brand)] text-white"
                      : "text-[color:var(--color-muted)] hover:bg-[color:var(--color-pill)] hover:text-[color:var(--color-foreground)]",
                  )}
                >
                  <span className="text-[0.9rem]" aria-hidden>
                    {meta.flag}
                  </span>
                  <span>{meta.shortLabel}</span>
                  <span className={cn("ml-auto normal-case text-[0.66rem] tracking-normal", isActive ? "text-white/76" : "text-[color:var(--color-muted)]")}>{meta.nativeName}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
