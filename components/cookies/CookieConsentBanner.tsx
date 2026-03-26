"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import {
  COOKIE_OPEN_PREFERENCES_EVENT,
  readCookieConsent,
  writeCookieConsent,
  type CookieConsent,
} from "@/lib/cookies/consent";
import type { Locale } from "@/lib/i18n/config";

type CookieConsentBannerProps = {
  locale: Locale;
  cookiesHref: string;
};

type CookieCopy = {
  title: string;
  description: string;
  essentialsLabel: string;
  analyticsLabel: string;
  analyticsHelp: string;
  rejectOptional: string;
  acceptAll: string;
  saveSelection: string;
  policy: string;
};

const copyByLocale: Record<Locale, CookieCopy> = {
  es: {
    title: "Preferencias de cookies",
    description:
      "Usamos cookies tecnicas necesarias para funcionamiento y analitica opcional solo con tu consentimiento. Puedes cambiar esta decision en cualquier momento.",
    essentialsLabel: "Tecnicas necesarias (siempre activas)",
    analyticsLabel: "Permitir analitica",
    analyticsHelp: "No condicionamos el acceso a la web por rechazar cookies opcionales.",
    rejectOptional: "Rechazar opcionales",
    acceptAll: "Aceptar todo",
    saveSelection: "Guardar seleccion",
    policy: "Politica de cookies",
  },
  ca: {
    title: "Preferencies de cookies",
    description:
      "Utilitzem cookies tecniques necessaries per al funcionament i analitica opcional nomes amb consentiment. Pots canviar la decisio en qualsevol moment.",
    essentialsLabel: "Tecniques necessaries (sempre actives)",
    analyticsLabel: "Permetre analitica",
    analyticsHelp: "No condicionem l'acces al web per rebutjar cookies opcionals.",
    rejectOptional: "Rebutjar opcionals",
    acceptAll: "Acceptar tot",
    saveSelection: "Desar seleccio",
    policy: "Politica de cookies",
  },
  fr: {
    title: "Preferences cookies",
    description:
      "Nous utilisons des cookies techniques necessaires et une analytique optionnelle uniquement avec consentement. Vous pouvez modifier ce choix a tout moment.",
    essentialsLabel: "Techniques necessaires (toujours actives)",
    analyticsLabel: "Autoriser l'analytique",
    analyticsHelp: "L'acces au site n'est pas conditionne a l'acceptation des cookies optionnels.",
    rejectOptional: "Refuser les optionnels",
    acceptAll: "Tout accepter",
    saveSelection: "Enregistrer",
    policy: "Politique de cookies",
  },
};

export default function CookieConsentBanner({ locale, cookiesHref }: CookieConsentBannerProps) {
  const copy = useMemo(() => copyByLocale[locale], [locale]);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return !readCookieConsent();
  });
  const [analytics, setAnalytics] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return readCookieConsent()?.analytics ?? false;
  });

  useEffect(() => {
    function onOpenPreferences() {
      const current = readCookieConsent();
      setAnalytics(current?.analytics ?? false);
      setVisible(true);
    }

    window.addEventListener(COOKIE_OPEN_PREFERENCES_EVENT, onOpenPreferences);

    return () => {
      window.removeEventListener(COOKIE_OPEN_PREFERENCES_EVENT, onOpenPreferences);
    };
  }, []);

  function saveConsent(nextConsent: CookieConsent) {
    writeCookieConsent(nextConsent);
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <aside className="fixed inset-x-3 bottom-3 z-[85] rounded-[1.2rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 py-4 shadow-[0_40px_96px_-52px_rgba(31,16,24,0.8)] sm:inset-x-auto sm:right-6 sm:w-[34rem]">
      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.11em] text-[color:var(--color-accent)]">Legal y privacidad</p>
      <h2 className="mt-1 text-[1.02rem] font-semibold tracking-[-0.012em] text-[color:var(--color-foreground)]">{copy.title}</h2>
      <p className="mt-2 text-[0.82rem] leading-6 text-[color:var(--color-muted)]">{copy.description}</p>

      <div className="mt-3 space-y-2 rounded-[0.9rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3 py-3">
        <p className="text-[0.75rem] font-semibold text-[color:var(--color-foreground)]">{copy.essentialsLabel}</p>
        <label className="inline-flex items-center gap-2 text-[0.79rem] text-[color:var(--color-foreground)]">
          <input
            type="checkbox"
            checked={analytics}
            onChange={(event) => setAnalytics(event.target.checked)}
            className="h-4 w-4 rounded border-[color:var(--color-line)] text-[color:var(--color-brand)]"
          />
          {copy.analyticsLabel}
        </label>
        <p className="text-[0.73rem] leading-5 text-[color:var(--color-muted)]">{copy.analyticsHelp}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => saveConsent({ analytics: false, updatedAt: Date.now() })}
          className="inline-flex h-9 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-colors duration-200 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
        >
          {copy.rejectOptional}
        </button>
        <button
          type="button"
          onClick={() => saveConsent({ analytics, updatedAt: Date.now() })}
          className="inline-flex h-9 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)] transition-colors duration-200 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
        >
          {copy.saveSelection}
        </button>
        <button
          type="button"
          onClick={() => saveConsent({ analytics: true, updatedAt: Date.now() })}
          className="inline-flex h-9 items-center justify-center rounded-[var(--radius-pill)] bg-[color:var(--color-brand)] px-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-[color:var(--color-brand-strong)]"
        >
          {copy.acceptAll}
        </button>
      </div>

      <Link href={cookiesHref} className="mt-3 inline-flex text-[0.72rem] font-semibold text-[color:var(--color-muted)] underline-offset-2 hover:text-[color:var(--color-brand)] hover:underline">
        {copy.policy}
      </Link>
    </aside>
  );
}
