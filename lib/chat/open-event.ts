"use client";

import { CHAT_OPEN_EVENT } from "@/lib/chat/constants";

export function requestChatOpen() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(CHAT_OPEN_EVENT));
}
