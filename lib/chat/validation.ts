import {
  CHAT_MAX_HISTORY_MESSAGES,
  CHAT_MAX_INPUT_CHARS,
  CHAT_MAX_TOTAL_CHARS,
} from "@/lib/chat/constants";
import type { ChatRole } from "@/lib/chat/types";
import { defaultLocale, type Locale } from "@/lib/i18n/config";

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

type ValidationCopy = {
  invalidFormat: string;
  noMessages: string;
  invalidRole: string;
  invalidContent: string;
  maxChars: string;
  emptyPrompt: string;
  conversationTooLong: string;
  lastMessageUser: string;
};

const validationCopyByLocale: Record<Locale, ValidationCopy> = {
  es: {
    invalidFormat: "Formato de solicitud inválido.",
    noMessages: "No se recibieron mensajes.",
    invalidRole: "Rol de mensaje no permitido.",
    invalidContent: "Contenido de mensaje inválido.",
    maxChars: `Cada mensaje debe tener como máximo ${CHAT_MAX_INPUT_CHARS} caracteres.`,
    emptyPrompt: "Escribe una consulta para poder ayudarte.",
    conversationTooLong: "La conversación es demasiado larga para procesarse en una sola solicitud.",
    lastMessageUser: "La última intervención debe ser del usuario.",
  },
  ca: {
    invalidFormat: "Format de sollicitud invalid.",
    noMessages: "No s'han rebut missatges.",
    invalidRole: "Rol de missatge no permes.",
    invalidContent: "Contingut de missatge invalid.",
    maxChars: `Cada missatge pot tenir com a maxim ${CHAT_MAX_INPUT_CHARS} caracters.`,
    emptyPrompt: "Escriu una consulta per poder ajudar-te.",
    conversationTooLong: "La conversa es massa llarga per processar-la en una sola sollicitud.",
    lastMessageUser: "L'ultima intervencio ha de ser de l'usuari.",
  },
  fr: {
    invalidFormat: "Format de requete invalide.",
    noMessages: "Aucun message n'a ete recu.",
    invalidRole: "Role de message non autorise.",
    invalidContent: "Contenu du message invalide.",
    maxChars: `Chaque message doit contenir au maximum ${CHAT_MAX_INPUT_CHARS} caracteres.`,
    emptyPrompt: "Ecrivez une question pour que je puisse vous aider.",
    conversationTooLong: "La conversation est trop longue pour etre traitee en une seule requete.",
    lastMessageUser: "Le dernier message doit provenir de l'utilisateur.",
  },
  en: {
    invalidFormat: "Invalid request format.",
    noMessages: "No messages were received.",
    invalidRole: "Message role is not allowed.",
    invalidContent: "Invalid message content.",
    maxChars: `Each message must have at most ${CHAT_MAX_INPUT_CHARS} characters.`,
    emptyPrompt: "Write a question so I can help you.",
    conversationTooLong: "The conversation is too long to process in a single request.",
    lastMessageUser: "The last message must be from the user.",
  },
  uk: {
    invalidFormat: "Неприпустимий формат запиту.",
    noMessages: "Не отримано жодного повідомлення.",
    invalidRole: "Неприпустима роль повідомлення.",
    invalidContent: "Неприпустимий вміст повідомлення.",
    maxChars: `Кожне повідомлення може містити не більше ${CHAT_MAX_INPUT_CHARS} символів.`,
    emptyPrompt: "Напишіть запит, щоб я міг допомогти.",
    conversationTooLong: "Діалог занадто довгий для обробки в одному запиті.",
    lastMessageUser: "Останнє повідомлення має бути від користувача.",
  },
  ru: {
    invalidFormat: "Некорректный формат запроса.",
    noMessages: "Сообщения не получены.",
    invalidRole: "Недопустимая роль сообщения.",
    invalidContent: "Недопустимое содержимое сообщения.",
    maxChars: `Каждое сообщение может содержать не более ${CHAT_MAX_INPUT_CHARS} символов.`,
    emptyPrompt: "Напишите запрос, чтобы я мог помочь.",
    conversationTooLong: "Диалог слишком длинный для обработки в одном запросе.",
    lastMessageUser: "Последнее сообщение должно быть от пользователя.",
  },
};

function sanitizeContent(value: string) {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
}

function isRole(value: unknown): value is ChatRole {
  return value === "user" || value === "assistant";
}

export function validateChatPayload(payload: unknown, locale: Locale = defaultLocale): ValidationResult {
  const copy = validationCopyByLocale[locale] ?? validationCopyByLocale[defaultLocale];

  if (!payload || typeof payload !== "object") {
    return { ok: false, status: 400, error: copy.invalidFormat };
  }

  const { messages } = payload as { messages?: unknown };

  if (!Array.isArray(messages)) {
    return { ok: false, status: 400, error: copy.noMessages };
  }

  const trimmed = messages.slice(-CHAT_MAX_HISTORY_MESSAGES);
  const sanitized: SanitizedChatMessage[] = [];

  for (const rawMessage of trimmed) {
    const message = rawMessage as RawMessage;

    if (!isRole(message.role)) {
      return { ok: false, status: 400, error: copy.invalidRole };
    }

    if (typeof message.content !== "string") {
      return { ok: false, status: 400, error: copy.invalidContent };
    }

    const content = sanitizeContent(message.content);

    if (!content) {
      continue;
    }

    if (content.length > CHAT_MAX_INPUT_CHARS) {
      return {
        ok: false,
        status: 400,
        error: copy.maxChars,
      };
    }

    sanitized.push({
      role: message.role,
      content,
    });
  }

  if (sanitized.length === 0) {
    return { ok: false, status: 400, error: copy.emptyPrompt };
  }

  const totalChars = sanitized.reduce((sum, message) => sum + message.content.length, 0);

  if (totalChars > CHAT_MAX_TOTAL_CHARS) {
    return {
      ok: false,
      status: 400,
      error: copy.conversationTooLong,
    };
  }

  const latestMessage = sanitized[sanitized.length - 1];

  if (latestMessage.role !== "user") {
    return { ok: false, status: 400, error: copy.lastMessageUser };
  }

  return { ok: true, messages: sanitized };
}
