"use client";

import type { TrackEventRecord } from "./events";

const TRACKING_EVENTS_STORAGE_KEY = "ideal.analytics.events.v1";
const TRACKING_SESSION_STORAGE_KEY = "ideal.analytics.session_id.v1";
const DEFAULT_STORED_EVENTS_LIMIT = 200;

function isValidRecord(value: unknown): value is TrackEventRecord {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<TrackEventRecord>;
  return (
    typeof candidate.event === "string" &&
    typeof candidate.timestamp === "number" &&
    typeof candidate.session_id === "string"
  );
}

function parseStoredEvents(raw: string | null): TrackEventRecord[] {
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(isValidRecord);
  } catch {
    return [];
  }
}

function createSessionId() {
  const randomPart =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`;

  return `sess_${randomPart}`;
}

export function getSessionId() {
  if (typeof window === "undefined") {
    return "sess_server";
  }

  const existing = window.localStorage.getItem(TRACKING_SESSION_STORAGE_KEY);
  if (existing) {
    return existing;
  }

  const sessionId = createSessionId();
  window.localStorage.setItem(TRACKING_SESSION_STORAGE_KEY, sessionId);
  return sessionId;
}

export function getStoredEvents() {
  if (typeof window === "undefined") {
    return [];
  }

  return parseStoredEvents(window.localStorage.getItem(TRACKING_EVENTS_STORAGE_KEY));
}

export function clearStoredEvents() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(TRACKING_EVENTS_STORAGE_KEY);
}

export function persistEvent(record: TrackEventRecord, limit = DEFAULT_STORED_EVENTS_LIMIT) {
  if (typeof window === "undefined") {
    return;
  }

  const stored = getStoredEvents();
  stored.push(record);

  const trimmed = stored.slice(-Math.max(1, limit));
  window.localStorage.setItem(TRACKING_EVENTS_STORAGE_KEY, JSON.stringify(trimmed));
}
