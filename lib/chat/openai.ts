import { CHAT_REQUEST_TIMEOUT_MS } from "@/lib/chat/constants";
import type { SanitizedChatMessage } from "@/lib/chat/validation";

type OpenAiConfig = {
  apiKey: string;
  baseUrl: string;
  model: string;
  promptId?: string;
  assistantId?: string;
  organization?: string;
  project?: string;
  timeoutMs: number;
};

type OpenAiResponsesError = {
  error?: {
    message?: string;
  };
};

type OpenAiResponsesOutputItem = {
  content?: Array<{
    type?: string;
    text?: string;
  }>;
};

type OpenAiResponsesSuccess = {
  output_text?: string;
  output?: OpenAiResponsesOutputItem[];
};

const DEFAULT_MODEL = "gpt-4.1-mini";
const DEFAULT_BASE_URL = "https://api.openai.com/v1";

function pickFirst(...values: Array<string | undefined>) {
  return values.find((value) => Boolean(value && value.trim()))?.trim();
}

function resolveOpenAiConfig(): OpenAiConfig | null {
  const apiKey = pickFirst(process.env.OPENAI_API_KEY);

  if (!apiKey) {
    return null;
  }

  const assistantId = pickFirst(
    process.env.OPENAI_CHATBOT_ASSISTANT_ID,
    process.env.OPENAI_RESPONSES_ASSISTANT_ID,
    process.env.OPENAI_ASSISTANT_ID,
    process.env.OPENAI_CHATBOT_ID,
  );
  const promptId = pickFirst(process.env.OPENAI_PROMPT_ID);

  const model = pickFirst(process.env.OPENAI_CHATBOT_MODEL, process.env.OPENAI_MODEL) ?? DEFAULT_MODEL;
  const baseUrl = pickFirst(process.env.OPENAI_API_BASE_URL) ?? DEFAULT_BASE_URL;
  const organization = pickFirst(process.env.OPENAI_ORG_ID);
  const project = pickFirst(process.env.OPENAI_PROJECT_ID);
  const timeoutValue = Number(process.env.OPENAI_CHATBOT_TIMEOUT_MS ?? CHAT_REQUEST_TIMEOUT_MS);
  const timeoutMs = Number.isFinite(timeoutValue) && timeoutValue > 0
    ? Math.min(timeoutValue, 60_000)
    : CHAT_REQUEST_TIMEOUT_MS;

  return {
    apiKey,
    baseUrl,
    model,
    promptId,
    assistantId,
    organization,
    project,
    timeoutMs,
  };
}

function getLocaleInstruction(locale: string | undefined) {
  const localeToLanguage = {
    es: "español",
    ca: "català",
    fr: "français",
    en: "english",
    uk: "українська",
    ru: "русский",
  } as const;

  if (!locale) {
    return "Responde en el mismo idioma del usuario.";
  }

  const target = localeToLanguage[locale as keyof typeof localeToLanguage] ?? locale;
  return `Responde en ${target}.`;
}

function buildPrompt(messages: SanitizedChatMessage[], locale: string | undefined) {
  const localeInstruction = getLocaleInstruction(locale);
  const transcript = messages
    .map((message) => `${message.role === "user" ? "Usuario" : "Asistente"}: ${message.content}`)
    .join("\n");

  return [
    "Actua como asistente digital de una clinica estetica premium.",
    "Da orientacion general, no diagnostico medico definitivo ni promesas de resultado.",
    "Manten un tono claro, sobrio y profesional.",
    "Si la consulta requiere confirmacion final, indica que se valida en la valoracion presencial.",
    "Si detectas datos de reserva, añade al final un bloque <reservation_update> con claves en ingles: treatment, dateRange, timeSlot, professional, customerName, notes, readyForWhatsapp.",
    localeInstruction,
    "",
    transcript,
  ].join("\n");
}

function buildPromptInputFromHistory(
  messages: SanitizedChatMessage[],
  locale: string | undefined,
) {
  const recentMessages = messages.slice(-12);
  const transcript = recentMessages
    .map((message, index) => `${index + 1}. [${message.role}] ${message.content}`)
    .join("\n");

  const latestUserMessage = [...messages]
    .reverse()
    .find((message) => message.role === "user")?.content;

  return [
    "Contexto conversacional para continuidad de reserva.",
    `Locale: ${locale ?? "no_especificado"}`,
    "Mantén continuidad y no preguntes de nuevo datos ya dados cuando existan en el historial.",
    "Campos relevantes para reserva: tratamiento, rango de días, franja horaria, profesional, nombre y notas.",
    "Cuando proceda, devuelve al final un bloque <reservation_update> con esas claves en ingles.",
    "",
    "Historial reciente:",
    transcript || "(sin historial)",
    "",
    "Último mensaje del usuario:",
    latestUserMessage || "(sin último mensaje)",
  ].join("\n");
}

function extractResponseText(payload: OpenAiResponsesSuccess) {
  if (typeof payload.output_text === "string" && payload.output_text.trim()) {
    return payload.output_text.trim();
  }

  const chunks: string[] = [];

  for (const output of payload.output ?? []) {
    for (const content of output.content ?? []) {
      if (content.type !== "output_text") {
        continue;
      }

      if (typeof content.text === "string" && content.text.trim()) {
        chunks.push(content.text.trim());
      }
    }
  }

  return chunks.join("\n").trim();
}

export class ChatIntegrationConfigError extends Error {}

export async function createChatReply(args: {
  messages: SanitizedChatMessage[];
  locale?: string;
}) {
  const config = resolveOpenAiConfig();

  if (!config) {
    throw new ChatIntegrationConfigError("OPENAI_API_KEY no está configurada.");
  }

  const payload: Record<string, unknown> = {
    max_output_tokens: 420,
  };

  if (config.promptId) {
    payload.prompt = { id: config.promptId };
    payload.input = buildPromptInputFromHistory(args.messages, args.locale);
  } else {
    payload.input = buildPrompt(args.messages, args.locale);

    if (config.assistantId) {
      payload.assistant_id = config.assistantId;
    } else {
      payload.model = config.model;
    }
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), config.timeoutMs);

  try {
    const response = await fetch(`${config.baseUrl}/responses`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
        ...(config.organization ? { "OpenAI-Organization": config.organization } : {}),
        ...(config.project ? { "OpenAI-Project": config.project } : {}),
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const json = (await response.json()) as OpenAiResponsesSuccess & OpenAiResponsesError;

    if (!response.ok) {
      const errorMessage = json.error?.message?.trim() || "La API de OpenAI no respondió correctamente.";
      throw new Error(errorMessage);
    }

    const reply = extractResponseText(json);

    if (!reply) {
      throw new Error("La respuesta del modelo no contiene texto util.");
    }

    return reply;
  } finally {
    clearTimeout(timeout);
  }
}
