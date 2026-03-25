"use client";

import { useEffect, useMemo, useState } from "react";

import Container from "@/components/Container";
import { TRACKING_EVENT_CAPTURED, type TrackEventRecord } from "@/lib/tracking/events";
import { buildAnalyticsSnapshot } from "@/lib/tracking/metrics";
import { clearStoredEvents, getSessionId, getStoredEvents } from "@/lib/tracking/storage";

function formatTimestamp(value: number) {
  return new Date(value).toLocaleString("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export default function AnalyticsPage() {
  const [events, setEvents] = useState<TrackEventRecord[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    return getStoredEvents();
  });
  const [sessionId] = useState(() => {
    if (typeof window === "undefined") {
      return "";
    }

    return getSessionId();
  });

  useEffect(() => {
    function handleTrackedEvent() {
      setEvents(getStoredEvents());
    }

    function handleStorage() {
      setEvents(getStoredEvents());
    }

    window.addEventListener(TRACKING_EVENT_CAPTURED, handleTrackedEvent as EventListener);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener(
        TRACKING_EVENT_CAPTURED,
        handleTrackedEvent as EventListener,
      );
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const snapshot = useMemo(() => buildAnalyticsSnapshot(events), [events]);

  function handleClear() {
    clearStoredEvents();
    setEvents([]);
  }

  function handleRefresh() {
    setEvents(getStoredEvents());
  }

  return (
    <section className="section-shell bg-[color:var(--color-background)] pb-20 pt-16">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow-label">Analytics interno</p>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1] font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
              Dashboard de conversión
            </h1>
            <p className="mt-3 text-[0.95rem] leading-7 text-[color:var(--color-muted)]">
              session_id actual: {sessionId}
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleRefresh}
              className="inline-flex h-10 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 text-[0.82rem] font-semibold tracking-[0.03em] text-[color:var(--color-foreground)]"
            >
              Recargar
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="inline-flex h-10 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-brand)]/30 bg-[color:var(--color-surface)] px-4 text-[0.82rem] font-semibold tracking-[0.03em] text-[color:var(--color-brand)]"
            >
              Limpiar eventos
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-[var(--radius-md)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 py-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
              Total eventos
            </p>
            <p className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-[color:var(--color-foreground)]">
              {snapshot.totalEvents}
            </p>
          </article>
          <article className="rounded-[var(--radius-md)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 py-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
              Click reservar
            </p>
            <p className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-[color:var(--color-foreground)]">
              {snapshot.totalReservarClicks}
            </p>
            <p className="mt-1 text-[0.8rem] text-[color:var(--color-muted)]">
              {snapshot.reservarClickShare}% del total
            </p>
          </article>
          <article className="rounded-[var(--radius-md)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 py-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
              Click whatsapp
            </p>
            <p className="mt-2 text-[1.5rem] font-semibold tracking-[-0.02em] text-[color:var(--color-foreground)]">
              {snapshot.totalWhatsappClicks}
            </p>
            <p className="mt-1 text-[0.8rem] text-[color:var(--color-muted)]">
              {snapshot.whatsappClickShare}% del total
            </p>
          </article>
          <article className="rounded-[var(--radius-md)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 py-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
              CTA más clicado
            </p>
            <p className="mt-2 text-[0.95rem] font-semibold text-[color:var(--color-foreground)]">
              {snapshot.ctaRanking[0]?.ctaLabel ?? "Sin datos"}
            </p>
            <p className="mt-1 text-[0.8rem] text-[color:var(--color-muted)]">
              {snapshot.ctaRanking[0]?.total ?? 0} clics
            </p>
          </article>
        </div>

        <div className="mt-9 grid gap-5 xl:grid-cols-2">
          <article className="rounded-[var(--radius-lg)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] p-5">
            <h2 className="text-[1.05rem] font-semibold text-[color:var(--color-foreground)]">
              CTR por sección (cta_source)
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-[0.83rem]">
                <thead className="text-[0.7rem] uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
                  <tr>
                    <th className="py-2 pr-3">Sección</th>
                    <th className="py-2 pr-3">Total</th>
                    <th className="py-2 pr-3">CTR</th>
                    <th className="py-2 pr-3">Reservar</th>
                    <th className="py-2">WhatsApp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[color:var(--color-line)]/70 text-[color:var(--color-foreground)]">
                  {snapshot.sourceStats.length === 0 ? (
                    <tr>
                      <td className="py-3 text-[color:var(--color-muted)]" colSpan={5}>
                        Sin eventos todavía.
                      </td>
                    </tr>
                  ) : (
                    snapshot.sourceStats.map((item) => (
                      <tr key={item.source}>
                        <td className="py-3 pr-3">{item.source}</td>
                        <td className="py-3 pr-3">{item.total}</td>
                        <td className="py-3 pr-3">{item.ctrPercent}%</td>
                        <td className="py-3 pr-3">{item.reservar}</td>
                        <td className="py-3">{item.whatsapp}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </article>

          <article className="rounded-[var(--radius-lg)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] p-5">
            <h2 className="text-[1.05rem] font-semibold text-[color:var(--color-foreground)]">
              Comparación A/B por variante
            </h2>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-[0.83rem]">
                <thead className="text-[0.7rem] uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
                  <tr>
                    <th className="py-2 pr-3">Variante</th>
                    <th className="py-2 pr-3">Total</th>
                    <th className="py-2 pr-3">Reservar %</th>
                    <th className="py-2">WhatsApp %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[color:var(--color-line)]/70 text-[color:var(--color-foreground)]">
                  {snapshot.variantStats.length === 0 ? (
                    <tr>
                      <td className="py-3 text-[color:var(--color-muted)]" colSpan={4}>
                        Sin variantes registradas.
                      </td>
                    </tr>
                  ) : (
                    snapshot.variantStats.map((item) => (
                      <tr key={item.variant}>
                        <td className="py-3 pr-3">{item.variant}</td>
                        <td className="py-3 pr-3">{item.total}</td>
                        <td className="py-3 pr-3">{item.reservarRate}%</td>
                        <td className="py-3">{item.whatsappRate}%</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </article>
        </div>

        <article className="mt-5 rounded-[var(--radius-lg)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] p-5">
          <h2 className="text-[1.05rem] font-semibold text-[color:var(--color-foreground)]">
            Ranking de CTAs más clicados
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-[0.83rem]">
              <thead className="text-[0.7rem] uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
                <tr>
                  <th className="py-2 pr-3">CTA</th>
                  <th className="py-2 pr-3">Sección</th>
                  <th className="py-2 pr-3">Total</th>
                  <th className="py-2 pr-3">Reservar</th>
                  <th className="py-2">WhatsApp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[color:var(--color-line)]/70 text-[color:var(--color-foreground)]">
                {snapshot.ctaRanking.length === 0 ? (
                  <tr>
                    <td className="py-3 text-[color:var(--color-muted)]" colSpan={5}>
                      Sin ranking todavía.
                    </td>
                  </tr>
                ) : (
                  snapshot.ctaRanking.map((item) => (
                    <tr key={`${item.ctaSource}-${item.ctaLabel}`}>
                      <td className="py-3 pr-3">{item.ctaLabel}</td>
                      <td className="py-3 pr-3">{item.ctaSource}</td>
                      <td className="py-3 pr-3">{item.total}</td>
                      <td className="py-3 pr-3">{item.reservar}</td>
                      <td className="py-3">{item.whatsapp}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </article>

        <article className="mt-5 rounded-[var(--radius-lg)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] p-5">
          <h2 className="text-[1.05rem] font-semibold text-[color:var(--color-foreground)]">
            Eventos recientes
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-[0.8rem]">
              <thead className="text-[0.68rem] uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
                <tr>
                  <th className="py-2 pr-3">Fecha</th>
                  <th className="py-2 pr-3">Evento</th>
                  <th className="py-2 pr-3">source</th>
                  <th className="py-2 pr-3">label</th>
                  <th className="py-2 pr-3">variant</th>
                  <th className="py-2">session_id</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[color:var(--color-line)]/70 text-[color:var(--color-foreground)]">
                {snapshot.recentEvents.length === 0 ? (
                  <tr>
                    <td className="py-3 text-[color:var(--color-muted)]" colSpan={6}>
                      Aún no hay eventos registrados.
                    </td>
                  </tr>
                ) : (
                  snapshot.recentEvents.map((event) => (
                    <tr key={`${event.timestamp}-${event.event}-${event.session_id}`}>
                      <td className="py-3 pr-3">{formatTimestamp(event.timestamp)}</td>
                      <td className="py-3 pr-3">{event.event}</td>
                      <td className="py-3 pr-3">{event.cta_source ?? "-"}</td>
                      <td className="py-3 pr-3">{event.cta_label ?? "-"}</td>
                      <td className="py-3 pr-3">{event.ab_variant ?? "-"}</td>
                      <td className="py-3">{event.session_id}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </article>
      </Container>
    </section>
  );
}
