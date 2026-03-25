"use client";

import type { TrackEventName, TrackEventPayload, TrackEventRecord } from "./events";
import { TRACKING_EVENT_CAPTURED } from "./events";
import { resolveAbVariant } from "./ab";
import { getSessionId, persistEvent } from "./storage";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: string, event: string, params?: Record<string, unknown>) => void;
    fbq?: (command: string, event: string, params?: Record<string, unknown>) => void;
    __interactionLogs?: TrackEventRecord[];
  }
}

export function trackEvent(event: TrackEventName, payload: TrackEventPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const resolvedVariant = resolveAbVariant(payload.ab_test, payload.ab_variant);

  const record: TrackEventRecord = {
    event,
    timestamp: Date.now(),
    session_id: getSessionId(),
    page_path: window.location.pathname,
    ...payload,
    ab_variant: resolvedVariant,
  };

  if (!window.__interactionLogs) {
    window.__interactionLogs = [];
  }

  window.__interactionLogs.push(record);
  if (window.__interactionLogs.length > 100) {
    window.__interactionLogs.shift();
  }

  persistEvent(record);
  window.dataLayer?.push(record);

  if (typeof window.gtag === "function") {
    window.gtag("event", event, record);
  }

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", event, record);
  }

  window.dispatchEvent(
    new CustomEvent<TrackEventRecord>(TRACKING_EVENT_CAPTURED, { detail: record }),
  );

  if (process.env.NODE_ENV !== "production") {
    // Simple interaction logs for local validation.
    console.info("[tracking]", record);
  }

  return record;
}
