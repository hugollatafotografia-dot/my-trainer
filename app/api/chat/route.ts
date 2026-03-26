import { NextResponse } from "next/server";

import { createChatReply, ChatIntegrationConfigError } from "@/lib/chat/openai";
import { consumeChatRateLimit } from "@/lib/chat/rate-limit";
import { validateChatPayload } from "@/lib/chat/validation";
import type { ChatApiRequest, ChatApiResponse } from "@/lib/chat/types";

export const runtime = "nodejs";

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

  if (!rateLimit.allowed) {
    return toJson(
      {
        error: "Has superado temporalmente el límite de consultas. Inténtalo de nuevo en un minuto.",
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
    return toJson({ error: "No se ha podido procesar la solicitud." }, 400);
  }

  const validation = validateChatPayload(payload);

  if (!validation.ok) {
    return toJson({ error: validation.error }, validation.status);
  }

  try {
    const locale =
      typeof (payload as ChatApiRequest).locale === "string"
        ? (payload as ChatApiRequest).locale
        : undefined;

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
          error: "El asistente no está disponible ahora mismo por configuración del servidor.",
        },
        503,
      );
    }

    if (error instanceof Error && error.name === "AbortError") {
      console.error(`[chat:${requestId}] timeout`);
      return toJson({ error: "La respuesta está tardando más de lo esperado." }, 504);
    }

    const fallbackErrorMessage =
      error instanceof Error ? error.message : "Error desconocido en la integración de chat.";
    console.error(`[chat:${requestId}] upstream error`, fallbackErrorMessage);

    return toJson(
      {
        error: "No se ha podido completar la consulta en este momento.",
      },
      502,
    );
  }
}
