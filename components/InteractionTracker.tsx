"use client";

import { useEffect, useMemo, useState } from "react";

import type {
  TrackEventName,
  TrackEventPayload,
  TrackEventRecord,
} from "@/lib/tracking/events";
import { trackEvent } from "@/lib/tracking/client";
import { TRACKING_EVENT_CAPTURED } from "@/lib/tracking/events";
import { getSessionId, getStoredEvents } from "@/lib/tracking/storage";

function getTrackingPayload(target: HTMLElement): {
  event: TrackEventName;
  payload: TrackEventPayload;
} | null {
  const event = target.dataset.trackEvent as TrackEventName | undefined;

  if (!event) {
    return null;
  }

  return {
    event,
    payload: {
      cta_source: target.dataset.trackSource,
      cta_label: target.dataset.trackLabel,
      cta_href: target.dataset.trackHref,
      ab_test: target.dataset.abTest,
      ab_variant: target.dataset.abVariant,
    },
  };
}

export default function InteractionTracker() {
  const [recentEvents, setRecentEvents] = useState<TrackEventRecord[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    return getStoredEvents().slice(-8).reverse();
  });
  const [sessionId] = useState(() => {
    if (typeof window === "undefined") {
      return "";
    }

    return getSessionId();
  });

  const debugEnabled = useMemo(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const params = new URLSearchParams(window.location.search);
    return params.get("debug") === "true";
  }, []);

  useEffect(() => {
    function handleClick(nativeEvent: MouseEvent) {
      const origin = nativeEvent.target;
      if (!(origin instanceof HTMLElement)) {
        return;
      }

      const trackingTarget = origin.closest<HTMLElement>("[data-track-event]");
      if (!trackingTarget) {
        return;
      }

      const trackingData = getTrackingPayload(trackingTarget);
      if (!trackingData) {
        return;
      }

      trackEvent(trackingData.event, trackingData.payload);
    }

    function handleTrackedEvent(event: Event) {
      const tracked = event as CustomEvent<TrackEventRecord>;
      if (!tracked.detail) {
        return;
      }

      setRecentEvents((previous) => [tracked.detail, ...previous].slice(0, 8));
    }

    document.addEventListener("click", handleClick);
    window.addEventListener(TRACKING_EVENT_CAPTURED, handleTrackedEvent as EventListener);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener(
        TRACKING_EVENT_CAPTURED,
        handleTrackedEvent as EventListener,
      );
    };
  }, []);

  if (!debugEnabled) {
    return null;
  }

  return (
    <aside className="pointer-events-none fixed bottom-4 right-4 z-[90] w-[21rem] rounded-[var(--radius-lg)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)]/95 p-4 text-[color:var(--color-foreground)] shadow-[0_26px_70px_-56px_rgba(38,20,31,0.65)] backdrop-blur-[8px]">
      <p className="text-[0.67rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">
        Debug Tracking
      </p>
      <p className="mt-1 text-[0.75rem] leading-5 text-[color:var(--color-muted)]">
        session_id: {sessionId}
      </p>
      <p className="mt-1 text-[0.75rem] leading-5 text-[color:var(--color-muted)]">
        eventos almacenados: {getStoredEvents().length}
      </p>
      <div className="mt-3 max-h-[16rem] space-y-2 overflow-y-auto pr-1">
        {recentEvents.length === 0 ? (
          <p className="text-[0.75rem] leading-5 text-[color:var(--color-muted)]">
            Sin eventos detectados.
          </p>
        ) : (
          recentEvents.map((event) => (
            <article
              key={`${event.timestamp}-${event.event}-${event.cta_source ?? "na"}`}
              className="rounded-[var(--radius-sm)] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-2.5 py-2"
            >
              <p className="text-[0.71rem] font-semibold uppercase tracking-[0.05em] text-[color:var(--color-brand)]">
                {event.event}
              </p>
              <p className="mt-1 text-[0.72rem] leading-5 text-[color:var(--color-muted)]">
                {event.cta_source ?? "sin_source"} · {event.ab_variant ?? "sin_variant"}
              </p>
            </article>
          ))
        )}
      </div>
    </aside>
  );
}
