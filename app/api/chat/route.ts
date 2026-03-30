import { NextResponse } from "next/server";

import { createChatReply, ChatIntegrationConfigError } from "@/lib/chat/openai";
import { consumeChatRateLimit } from "@/lib/chat/rate-limit";
import { validateChatPayload } from "@/lib/chat/validation";
import type { ChatApiRequest, ChatApiResponse } from "@/lib/chat/types";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";

export const runtime = "nodejs";

type ChatApiCopy = {
  rateLimit: string;
  badRequest: string;
  configError: string;
  timeout: string;
  unknownUpstream: string;
  upstreamError: string;
};

const chatApiCopyByLocale: Record<Locale, ChatApiCopy> = {
  es: {
    rateLimit: "Has superado temporalmente el limite de consultas. Intentalo de nuevo en un minuto.",
    badRequest: "No se ha podido procesar la solicitud.",
    configError: "El asistente no esta disponible ahora mismo por configuracion del servidor.",
    timeout: "La respuesta esta tardando mas de lo esperado.",
    unknownUpstream: "Error desconocido en la integracion de chat.",
    upstreamError: "No se ha podido completar la consulta en este momento.",
  },
  ca: {
    rateLimit: "Has superat temporalment el limit de consultes. Torna-ho a provar en un minut.",
    badRequest: "No s'ha pogut processar la sollicitud.",
    configError: "L'assistent no esta disponible ara mateix per configuracio del servidor.",
    timeout: "La resposta esta trigant mes del que s'esperava.",
    unknownUpstream: "Error desconegut en la integracio de xat.",
    upstreamError: "No s'ha pogut completar la consulta en aquest moment.",
  },
  fr: {
    rateLimit: "Vous avez temporairement depasse la limite de requetes. Reessayez dans une minute.",
    badRequest: "La requete n'a pas pu etre traitee.",
    configError: "L'assistant n'est pas disponible pour le moment en raison de la configuration serveur.",
    timeout: "La reponse prend plus de temps que prevu.",
    unknownUpstream: "Erreur inconnue dans l'integration du chat.",
    upstreamError: "La requete n'a pas pu etre finalisee pour le moment.",
  },
  en: {
    rateLimit: "You have temporarily exceeded the query limit. Try again in one minute.",
    badRequest: "The request could not be processed.",
    configError: "The assistant is not available right now due to server configuration.",
    timeout: "The response is taking longer than expected.",
    unknownUpstream: "Unknown chat integration error.",
    upstreamError: "The request could not be completed right now.",
  },
  uk: {
    rateLimit: "Ви тимчасово перевищили ліміт запитів. Спробуйте ще раз за хвилину.",
    badRequest: "Не вдалося обробити запит.",
    configError: "Асистент зараз недоступний через конфігурацію сервера.",
    timeout: "Відповідь надходить довше, ніж очікувалося.",
    unknownUpstream: "Невідома помилка інтеграції чату.",
    upstreamError: "Зараз не вдалося завершити запит.",
  },
  ru: {
    rateLimit: "Вы временно превысили лимит запросов. Попробуйте снова через минуту.",
    badRequest: "Не удалось обработать запрос.",
    configError: "Ассистент сейчас недоступен из-за конфигурации сервера.",
    timeout: "Ответ приходит дольше, чем ожидалось.",
    unknownUpstream: "Неизвестная ошибка интеграции чата.",
    upstreamError: "Сейчас не удалось завершить запрос.",
  },
};

function getLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) {
    return defaultLocale;
  }

  const candidates = header
    .split(",")
    .map((entry) => entry.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);

  for (const candidate of candidates) {
    const code = candidate.split("-")[0];
    if (isLocale(code)) {
      return code;
    }
  }

  return defaultLocale;
}

function resolveChatLocale(request: Request, payload?: unknown): Locale {
  const localeFromPayload =
    payload &&
    typeof payload === "object" &&
    "locale" in payload &&
    typeof (payload as { locale?: string }).locale === "string"
      ? (payload as { locale?: string }).locale
      : undefined;

  if (isLocale(localeFromPayload)) {
    return localeFromPayload;
  }

  return getLocaleFromAcceptLanguage(request.headers.get("accept-language"));
}

function getClientIdentifier(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function toJson(body: Record<string, unknown>, status = 200, headers?: Record<string, string>) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

export async function POST(request: Request) {
  const requestId =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `chat_${Date.now()}`;

  const clientIdentifier = getClientIdentifier(request);
  const rateLimit = consumeChatRateLimit(clientIdentifier);
  const requestLocale = resolveChatLocale(request);
  const copy = chatApiCopyByLocale[requestLocale] ?? chatApiCopyByLocale[defaultLocale];

  if (!rateLimit.allowed) {
    return toJson(
      {
        error: copy.rateLimit,
      },
      429,
      {
        "Retry-After": String(rateLimit.retryAfterSeconds),
      },
    );
  }

  let payload: unknown;

  try {
    payload = (await request.json()) as ChatApiRequest;
  } catch {
    return toJson({ error: copy.badRequest }, 400);
  }

  const locale = resolveChatLocale(request, payload);
  const localizedCopy = chatApiCopyByLocale[locale] ?? chatApiCopyByLocale[defaultLocale];
  const validation = validateChatPayload(payload, locale);

  if (!validation.ok) {
    return toJson({ error: validation.error }, validation.status);
  }

  try {
    const reply = await createChatReply({
      messages: validation.messages,
      locale,
    });

    const response: ChatApiResponse = { reply };
    return toJson(response);
  } catch (error) {
    if (error instanceof ChatIntegrationConfigError) {
      console.error(`[chat:${requestId}] configuration error`, error.message);

      return toJson(
        {
          error: localizedCopy.configError,
        },
        503,
      );
    }

    if (error instanceof Error && error.name === "AbortError") {
      console.error(`[chat:${requestId}] timeout`);
      return toJson({ error: localizedCopy.timeout }, 504);
    }

    const fallbackErrorMessage =
      error instanceof Error ? error.message : localizedCopy.unknownUpstream;
    console.error(`[chat:${requestId}] upstream error`, fallbackErrorMessage);

    return toJson(
      {
        error: localizedCopy.upstreamError,
      },
      502,
    );
  }
}
