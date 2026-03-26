import {
  CHAT_MAX_HISTORY_MESSAGES,
  CHAT_MAX_INPUT_CHARS,
  CHAT_MAX_TOTAL_CHARS,
} from "@/lib/chat/constants";
import type { ChatRole } from "@/lib/chat/types";

type RawMessage = {
  role?: unknown;
  content?: unknown;
};

export type SanitizedChatMessage = {
  role: ChatRole;
  content: string;
};

export type ValidationResult =
  | { ok: true; messages: SanitizedChatMessage[] }
  | { ok: false; status: number; error: string };

function sanitizeContent(value: string) {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
}

function isRole(value: unknown): value is ChatRole {
  return value === "user" || value === "assistant";
}

export function validateChatPayload(payload: unknown): ValidationResult {
  if (!payload || typeof payload !== "object") {
    return { ok: false, status: 400, error: "Formato de solicitud inválido." };
  }

  const { messages } = payload as { messages?: unknown };

  if (!Array.isArray(messages)) {
    return { ok: false, status: 400, error: "No se recibieron mensajes." };
  }

  const trimmed = messages.slice(-CHAT_MAX_HISTORY_MESSAGES);
  const sanitized: SanitizedChatMessage[] = [];

  for (const rawMessage of trimmed) {
    const message = rawMessage as RawMessage;

    if (!isRole(message.role)) {
      return { ok: false, status: 400, error: "Rol de mensaje no permitido." };
    }

    if (typeof message.content !== "string") {
      return { ok: false, status: 400, error: "Contenido de mensaje inválido." };
    }

    const content = sanitizeContent(message.content);

    if (!content) {
      continue;
    }

    if (content.length > CHAT_MAX_INPUT_CHARS) {
      return {
        ok: false,
        status: 400,
        error: `Cada mensaje debe tener como máximo ${CHAT_MAX_INPUT_CHARS} caracteres.`,
      };
    }

    sanitized.push({
      role: message.role,
      content,
    });
  }

  if (sanitized.length === 0) {
    return { ok: false, status: 400, error: "Escribe una consulta para poder ayudarte." };
  }

  const totalChars = sanitized.reduce((sum, message) => sum + message.content.length, 0);

  if (totalChars > CHAT_MAX_TOTAL_CHARS) {
    return {
      ok: false,
      status: 400,
      error: "La conversación es demasiado larga para procesarse en una sola solicitud.",
    };
  }

  const latestMessage = sanitized[sanitized.length - 1];

  if (latestMessage.role !== "user") {
    return { ok: false, status: 400, error: "La última intervención debe ser del usuario." };
  }

  return { ok: true, messages: sanitized };
}
