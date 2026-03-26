"use client";

import {
  CHAT_MAX_HISTORY_MESSAGES,
  CHAT_RESERVATION_STORAGE_KEY,
  CHAT_STORAGE_KEY,
} from "@/lib/chat/constants";
import {
  EMPTY_RESERVATION_STATE,
  type ReservationState,
} from "@/lib/chat/reservation";
import type { ChatMessage } from "@/lib/chat/types";

function isStoredMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<ChatMessage>;
  return (
    (candidate.role === "user" || candidate.role === "assistant") &&
    typeof candidate.id === "string" &&
    typeof candidate.content === "string" &&
    typeof candidate.createdAt === "number"
  );
}

export function getStoredChatMessages() {
  if (typeof window === "undefined") {
    return [] as ChatMessage[];
  }

  const raw = window.sessionStorage.getItem(CHAT_STORAGE_KEY);
  if (!raw) {
    return [] as ChatMessage[];
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [] as ChatMessage[];
    }

    return parsed.filter(isStoredMessage).slice(-CHAT_MAX_HISTORY_MESSAGES);
  } catch {
    return [] as ChatMessage[];
  }
}

export function persistChatMessages(messages: ChatMessage[]) {
  if (typeof window === "undefined") {
    return;
  }

  const trimmed = messages.slice(-CHAT_MAX_HISTORY_MESSAGES);
  window.sessionStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(trimmed));
}

export function clearStoredChatMessages() {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.removeItem(CHAT_STORAGE_KEY);
}

function isStoredReservationState(value: unknown): value is ReservationState {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<ReservationState>;

  return (
    typeof candidate.treatment === "string" &&
    typeof candidate.dateRange === "string" &&
    typeof candidate.timeSlot === "string" &&
    typeof candidate.professional === "string" &&
    typeof candidate.customerName === "string" &&
    typeof candidate.notes === "string" &&
    typeof candidate.readyForWhatsapp === "boolean"
  );
}

export function getStoredChatReservation() {
  if (typeof window === "undefined") {
    return EMPTY_RESERVATION_STATE;
  }

  const raw = window.sessionStorage.getItem(CHAT_RESERVATION_STORAGE_KEY);
  if (!raw) {
    return EMPTY_RESERVATION_STATE;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!isStoredReservationState(parsed)) {
      return EMPTY_RESERVATION_STATE;
    }

    return parsed;
  } catch {
    return EMPTY_RESERVATION_STATE;
  }
}

export function persistChatReservation(reservation: ReservationState) {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(CHAT_RESERVATION_STORAGE_KEY, JSON.stringify(reservation));
}

export function clearStoredChatReservation() {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.removeItem(CHAT_RESERVATION_STORAGE_KEY);
}
