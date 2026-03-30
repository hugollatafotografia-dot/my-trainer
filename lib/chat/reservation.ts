const RESERVATION_BLOCK_REGEX = /<\s*reservation_update\s*>([\s\S]*?)<\s*\/\s*reservation_update\s*>/gi;

type ReservationField =
  | "treatment"
  | "dateRange"
  | "timeSlot"
  | "professional"
  | "customerName"
  | "notes";

type SupportedLocale = "es" | "ca" | "fr" | "en" | "uk" | "ru";

type ReservationCopy = {
  greeting: string;
  continueLine: string;
  thanks: string;
  labels: {
    treatment: string;
    dateRange: string;
    timeSlot: string;
    professional: string;
    customerName: string;
    notes: string;
  };
  fallback: {
    generic: string;
    professional: string;
  };
};

export type ReservationState = {
  treatment: string;
  dateRange: string;
  timeSlot: string;
  professional: string;
  customerName: string;
  notes: string;
  readyForWhatsapp: boolean;
};

export const EMPTY_RESERVATION_STATE: ReservationState = {
  treatment: "",
  dateRange: "",
  timeSlot: "",
  professional: "",
  customerName: "",
  notes: "",
  readyForWhatsapp: false,
};

export type ReservationUpdate = Partial<ReservationState>;
type ConversationMessage = {
  role: "user" | "assistant";
  content: string;
};

const RESERVATION_COPY: Record<SupportedLocale, ReservationCopy> = {
  es: {
    greeting: "Hola, me gustaría pedir cita en Centros Ideal Andorra.",
    continueLine: "Quiero continuar la gestión de mi valoración por este canal.",
    thanks: "Gracias.",
    labels: {
      treatment: "Tratamiento o motivo",
      dateRange: "Día o rango de días",
      timeSlot: "Franja horaria",
      professional: "Profesional",
      customerName: "Nombre cliente",
      notes: "Observaciones",
    },
    fallback: {
      generic: "por confirmar",
      professional: "sin preferencia",
    },
  },
  ca: {
    greeting: "Hola, m'agradaria demanar cita a Centres Ideal Andorra.",
    continueLine: "Vull continuar la gestió de la meva valoració per aquest canal.",
    thanks: "Gràcies.",
    labels: {
      treatment: "Tractament o motiu",
      dateRange: "Dia o rang de dies",
      timeSlot: "Franja horària",
      professional: "Professional",
      customerName: "Nom del client",
      notes: "Observacions",
    },
    fallback: {
      generic: "per confirmar",
      professional: "sense preferència",
    },
  },
  fr: {
    greeting: "Bonjour, je souhaite prendre rendez-vous chez Centres Ideal Andorra.",
    continueLine: "Je souhaite poursuivre la gestion de mon évaluation sur ce canal.",
    thanks: "Merci.",
    labels: {
      treatment: "Traitement ou motif",
      dateRange: "Jour ou plage de jours",
      timeSlot: "Créneau horaire",
      professional: "Professionnel",
      customerName: "Nom du client",
      notes: "Observations",
    },
    fallback: {
      generic: "à confirmer",
      professional: "sans préférence",
    },
  },
  en: {
    greeting: "Hello, I would like to book an appointment at Centres Ideal Andorra.",
    continueLine: "I would like to continue managing my assessment through this channel.",
    thanks: "Thank you.",
    labels: {
      treatment: "Treatment or reason",
      dateRange: "Day or date range",
      timeSlot: "Time slot",
      professional: "Professional",
      customerName: "Client name",
      notes: "Notes",
    },
    fallback: {
      generic: "to be confirmed",
      professional: "no preference",
    },
  },
  uk: {
    greeting: "Вітаю, хочу записатися на прийом у Centres Ideal Andorra.",
    continueLine: "Хочу продовжити оформлення моєї консультації через цей канал.",
    thanks: "Дякую.",
    labels: {
      treatment: "Процедура або запит",
      dateRange: "День або діапазон дат",
      timeSlot: "Часовий слот",
      professional: "Спеціаліст",
      customerName: "Ім'я клієнта",
      notes: "Нотатки",
    },
    fallback: {
      generic: "потрібно уточнити",
      professional: "без переваг",
    },
  },
  ru: {
    greeting: "Здравствуйте, хочу записаться на прием в Centres Ideal Andorra.",
    continueLine: "Хочу продолжить оформление моей консультации через этот канал.",
    thanks: "Спасибо.",
    labels: {
      treatment: "Процедура или запрос",
      dateRange: "День или диапазон дат",
      timeSlot: "Временной слот",
      professional: "Специалист",
      customerName: "Имя клиента",
      notes: "Примечания",
    },
    fallback: {
      generic: "нужно уточнить",
      professional: "без предпочтений",
    },
  },
};

function resolveLocale(locale: string | undefined): SupportedLocale {
  if (locale === "ca" || locale === "fr" || locale === "en" || locale === "uk" || locale === "ru") {
    return locale;
  }

  return "es";
}

function sanitizeValue(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function normalizeFreeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function normalizeToken(value: string) {
  return normalizeFreeText(value).replace(/[^\p{L}\p{N}]+/gu, "");
}

function parseReservationFieldValue(value: string) {
  const parsed = sanitizeValue(value);
  if (!parsed) {
    return "";
  }

  return parsed
    .replace(/^"(.*)"$/, "$1")
    .replace(/^'(.*)'$/, "$1")
    .replace(/^`(.*)`$/, "$1")
    .trim();
}

function isMeaningfulFieldValue(value: string) {
  const normalized = normalizeToken(value);
  if (!normalized) {
    return false;
  }

  const ignoredValues = new Set([
    "porconfirmar",
    "perconfirmar",
    "aconfirmar",
    "sinpreferencia",
    "sensepreferencia",
    "sanspreference",
    "none",
    "null",
    "na",
    "n/a",
    "nose",
    "nodesignado",
    "nodesignada",
    "nondisponible",
    "nonespecificado",
    "noespecificado",
    "notprovided",
    "tbd",
    "pordefinir",
    "pendiente",
    "pending",
    "tobeconfirmed",
    "-",
  ]);

  return !ignoredValues.has(normalized);
}

function isMeaningfulBookingCoreField(value: string) {
  return isMeaningfulFieldValue(value);
}

function parseStructuredLine(line: string): { key: string; value: string } | null {
  const match = line.match(/^\s*(?:[-*•]|\d+[.)])?\s*([^:=\n]+?)\s*[:=]\s*(.*?)\s*$/);
  if (!match) {
    return null;
  }

  return {
    key: match[1],
    value: match[2],
  };
}

function mapField(rawField: string): ReservationField | "readyForWhatsapp" | null {
  const normalized = normalizeToken(rawField);

  if (
    normalized === "treatment" ||
    normalized === "service" ||
    normalized === "motivo" ||
    normalized === "reason" ||
    normalized === "tratamientoomotivo" ||
    normalized === "tractamentomotiu" ||
    normalized === "traitementoumotif"
  ) {
    return "treatment";
  }

  if (
    normalized === "daterange" ||
    normalized === "date" ||
    normalized === "daysrange" ||
    normalized === "diaorangodedias" ||
    normalized === "diaorangdedies" ||
    normalized === "jourouplagedejours"
  ) {
    return "dateRange";
  }

  if (
    normalized === "timeslot" ||
    normalized === "time" ||
    normalized === "schedule" ||
    normalized === "franjahoraria" ||
    normalized === "creneauhoraire"
  ) {
    return "timeSlot";
  }

  if (normalized === "professional" || normalized === "professionnel" || normalized === "especialista") {
    return "professional";
  }

  if (
    normalized === "customername" ||
    normalized === "customer" ||
    normalized === "name" ||
    normalized === "clientname" ||
    normalized === "nombrecliente" ||
    normalized === "nomdelclient" ||
    normalized === "nomduclient"
  ) {
    return "customerName";
  }

  if (
    normalized === "notes" ||
    normalized === "note" ||
    normalized === "observations" ||
    normalized === "observaciones" ||
    normalized === "observacions"
  ) {
    return "notes";
  }

  if (
    normalized === "readyforwhatsapp" ||
    normalized === "ready" ||
    normalized === "whatsappready" ||
    normalized === "isreadyforwhatsapp"
  ) {
    return "readyForWhatsapp";
  }

  return null;
}

function parseReadyForWhatsapp(rawValue: string): boolean | null {
  const parsedValue = parseReservationFieldValue(rawValue);
  const normalized = normalizeToken(parsedValue);

  const yesValues = ["yes", "true", "si", "s", "oui", "ready", "ok", "1"];
  const noValues = ["no", "false", "notready", "pasencore", "encarano"];

  if (yesValues.includes(normalized)) {
    return true;
  }

  if (noValues.includes(normalized)) {
    return false;
  }

  return null;
}

function parseLineBasedUpdate(content: string): ReservationUpdate {
  const update: ReservationUpdate = {};
  const lines = content.split(/\r?\n/);

  for (const line of lines) {
    const parsedLine = parseStructuredLine(line);
    if (!parsedLine) {
      continue;
    }

    const mappedField = mapField(parsedLine.key);
    if (!mappedField) {
      continue;
    }

    const rawValue = parsedLine.value;
    if (!rawValue) {
      continue;
    }

    if (mappedField === "readyForWhatsapp") {
      const readyValue = parseReadyForWhatsapp(rawValue);
      if (typeof readyValue === "boolean") {
        update.readyForWhatsapp = readyValue;
      }
      continue;
    }

    const value = parseReservationFieldValue(rawValue);
    if (!value || !isMeaningfulFieldValue(value)) {
      continue;
    }

    update[mappedField] = value;
  }

  return update;
}

function pickRegexValue(source: string, pattern: RegExp) {
  const match = source.match(pattern);
  if (!match?.[1]) {
    return "";
  }

  return parseReservationFieldValue(match[1]);
}

function deriveFieldFromFreeText(
  source: string,
  role: "user" | "assistant",
): ReservationUpdate {
  const update: ReservationUpdate = {};
  const normalizedSource = normalizeFreeText(source);

  const treatmentFromRegex = pickRegexValue(
    source,
    /\b((?:depilaci[oó]n|depilacio|depilació)\s+l[aáà]ser(?:\s+(?:de|en|a)\s+[^\n.,;]+)?|epilation\s+laser(?:\s+(?:des?|de)\s+[^\n.,;]+)?|laser\s+hair\s+removal(?:\s+(?:for|on)\s+[^\n.,;]+)?)\b/iu,
  );
  if (treatmentFromRegex) {
    update.treatment = treatmentFromRegex;
  }

  const dateRangeFromRegex = pickRegexValue(
    source,
    /\b(la semana que viene|esta semana|pr[oó]ximo\s+[a-záéíóúñ]+|pr[oó]xima\s+[a-záéíóúñ]+|jueves\s+o\s+viernes|viernes\s+o\s+jueves|dijous\s+o\s+divendres|divendres\s+o\s+dijous|jeudi\s+ou\s+vendredi|vendredi\s+ou\s+jeudi|jueves|viernes|dijous|divendres|jeudi|vendredi)\b/iu,
  );
  if (dateRangeFromRegex) {
    update.dateRange = dateRangeFromRegex;
  }

  const timeSlotFromRegex = pickRegexValue(
    source,
    /\b(a partir de las?\s*\d{1,2}(?::\d{2})?\s*h?|a partir de les?\s*\d{1,2}(?::\d{2})?\s*h?|a partir de\s*\d{1,2}(?::\d{2})?\s*h?|por la tarde|por la manana|por la mañana|por la noche|tarda|mati|matí|matí|matin|soir|apres-midi|après-midi|tarde)\b/iu,
  );
  if (timeSlotFromRegex) {
    update.timeSlot = timeSlotFromRegex;
  }

  const professionalFromRegex = pickRegexValue(
    source,
    /\b(?:con|amb|avec)\s+([A-ZÀ-ÿ][\p{L}'-]{1,30})\b/iu,
  );
  if (professionalFromRegex) {
    const blockedProfessionalTokens = new Set([
      "la",
      "el",
      "las",
      "los",
      "un",
      "una",
      "le",
      "les",
      "reserva",
      "cita",
    ]);
    if (!blockedProfessionalTokens.has(normalizeToken(professionalFromRegex))) {
      update.professional = professionalFromRegex;
    }
  }

  const customerNameFromRegex = pickRegexValue(
    source,
    /\b(?:me llamo|mi nombre es|soy|em dic|soc|sóc|je m['’]appelle|moi c['’]est)\s+([A-ZÀ-ÿ][\p{L}'-]{1,30})\b/iu,
  );
  if (customerNameFromRegex) {
    update.customerName = customerNameFromRegex;
  } else if (role === "user") {
    const singleName = pickRegexValue(source, /^\s*([A-ZÀ-ÿ][\p{L}'-]{1,30})[.!]?\s*$/u);
    if (singleName) {
      const blockedNames = new Set(["hola", "gracias", "merci", "perfecto", "perfecte", "vale"]);
      if (!blockedNames.has(normalizeToken(singleName))) {
        update.customerName = singleName;
      }
    }
  }

  if (
    normalizedSource.includes("readyforwhatsapp") ||
    normalizedSource.includes("whatsapp preparado") ||
    normalizedSource.includes("whatsapp preparat") ||
    normalizedSource.includes("message whatsapp prepare")
  ) {
    update.readyForWhatsapp = true;
  }

  return update;
}

function mergeDerivedUpdate(
  current: ReservationUpdate,
  incoming: ReservationUpdate,
): ReservationUpdate {
  const next: ReservationUpdate = { ...current };
  const fields: ReservationField[] = [
    "treatment",
    "dateRange",
    "timeSlot",
    "professional",
    "customerName",
    "notes",
  ];

  for (const field of fields) {
    if (next[field]) {
      continue;
    }

    const incomingValue = incoming[field];
    if (!incomingValue || !isMeaningfulFieldValue(incomingValue)) {
      continue;
    }

    next[field] = sanitizeValue(incomingValue);
  }

  if (incoming.readyForWhatsapp === true) {
    next.readyForWhatsapp = true;
  } else if (
    typeof next.readyForWhatsapp !== "boolean" &&
    typeof incoming.readyForWhatsapp === "boolean"
  ) {
    next.readyForWhatsapp = incoming.readyForWhatsapp;
  }

  return next;
}

function hasUsefulUpdate(update: ReservationUpdate) {
  return Boolean(
    update.treatment ||
      update.dateRange ||
      update.timeSlot ||
      update.professional ||
      update.customerName ||
      update.notes ||
      typeof update.readyForWhatsapp === "boolean",
  );
}

function parseReservationBlock(content: string): ReservationUpdate {
  return parseLineBasedUpdate(content);
}

export function parseReservationUpdateFromReply(reply: string): {
  cleanReply: string;
  update: ReservationUpdate | null;
} {
  const parsedUpdates: ReservationUpdate[] = [];

  for (const match of reply.matchAll(RESERVATION_BLOCK_REGEX)) {
    parsedUpdates.push(parseReservationBlock(match[1]));
  }

  const cleanReply = reply
    .replace(RESERVATION_BLOCK_REGEX, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  if (parsedUpdates.length === 0) {
    return {
      cleanReply,
      update: null,
    };
  }

  const mergedUpdate = parsedUpdates.reduce<ReservationUpdate>(
    (accumulator, item) => ({
      ...accumulator,
      ...item,
    }),
    {},
  );

  return {
    cleanReply,
    update: mergedUpdate,
  };
}

export function deriveReservationFallbackFromConversation(args: {
  assistantReply?: string;
  history: ConversationMessage[];
}): ReservationUpdate | null {
  const sources: Array<{ role: ConversationMessage["role"]; content: string }> = [];
  const trimmedAssistantReply = args.assistantReply?.trim();

  if (trimmedAssistantReply) {
    sources.push({ role: "assistant", content: trimmedAssistantReply });
  }

  for (const message of [...args.history].reverse()) {
    if (!message.content.trim()) {
      continue;
    }

    sources.push({
      role: message.role,
      content: message.content,
    });
  }

  let derived: ReservationUpdate = {};

  for (const source of sources) {
    const lineBased = parseLineBasedUpdate(source.content);
    derived = mergeDerivedUpdate(derived, lineBased);

    const freeText = deriveFieldFromFreeText(source.content, source.role);
    derived = mergeDerivedUpdate(derived, freeText);
  }

  const minimumReady = Boolean(
    isMeaningfulBookingCoreField(derived.treatment ?? "") &&
      isMeaningfulBookingCoreField(derived.dateRange ?? "") &&
      isMeaningfulBookingCoreField(derived.timeSlot ?? ""),
  );
  if (minimumReady) {
    derived.readyForWhatsapp = true;
  }

  if (!hasUsefulUpdate(derived)) {
    return null;
  }

  return derived;
}

export function mergeReservationState(
  current: ReservationState,
  update: ReservationUpdate | null,
): ReservationState {
  if (!update) {
    return current;
  }

  const next = { ...current };
  const textFields: ReservationField[] = [
    "treatment",
    "dateRange",
    "timeSlot",
    "professional",
    "customerName",
    "notes",
  ];

  for (const field of textFields) {
    const value = update[field];
    if (!value) {
      continue;
    }

    const nextValue = sanitizeValue(value);
    if (!isMeaningfulFieldValue(nextValue)) {
      continue;
    }

    next[field] = nextValue;
  }

  if (typeof update.readyForWhatsapp === "boolean") {
    next.readyForWhatsapp = update.readyForWhatsapp;
  }

  return next;
}

export function hasReservationContext(state: ReservationState) {
  return Boolean(
    state.treatment.trim() ||
      state.dateRange.trim() ||
      state.timeSlot.trim() ||
      state.professional.trim() ||
      state.customerName.trim() ||
      state.notes.trim(),
  );
}

export function isReservationReadyForWhatsapp(state: ReservationState) {
  const hasMinimumData = Boolean(
    isMeaningfulBookingCoreField(state.treatment) &&
      isMeaningfulBookingCoreField(state.dateRange) &&
      isMeaningfulBookingCoreField(state.timeSlot),
  );

  // Source of truth for CTA readiness: booking minimums.
  // The model flag remains advisory, because it may be missing or inconsistent.
  if (!hasMinimumData) {
    return false;
  }

  return true;
}

function buildGenericWhatsappMessage(locale: SupportedLocale) {
  const copy = RESERVATION_COPY[locale];

  return [copy.greeting, "", copy.continueLine, "", copy.thanks].join("\n");
}

export function buildWhatsappBookingMessage(
  reservation: ReservationState,
  locale?: string,
) {
  const resolvedLocale = resolveLocale(locale);
  const copy = RESERVATION_COPY[resolvedLocale];

  if (!hasReservationContext(reservation) || !isReservationReadyForWhatsapp(reservation)) {
    return buildGenericWhatsappMessage(resolvedLocale);
  }

  const treatment = reservation.treatment.trim() || copy.fallback.generic;
  const dateRange = reservation.dateRange.trim() || copy.fallback.generic;
  const timeSlot = reservation.timeSlot.trim() || copy.fallback.generic;
  const professional = reservation.professional.trim() || copy.fallback.professional;
  const customerName = reservation.customerName.trim() || copy.fallback.generic;
  const notes = reservation.notes.trim() || copy.fallback.generic;

  return [
    copy.greeting,
    "",
    `${copy.labels.treatment}: ${treatment}`,
    `${copy.labels.dateRange}: ${dateRange}`,
    `${copy.labels.timeSlot}: ${timeSlot}`,
    `${copy.labels.professional}: ${professional}`,
    `${copy.labels.customerName}: ${customerName}`,
    `${copy.labels.notes}: ${notes}`,
    "",
    copy.thanks,
  ].join("\n");
}

export function buildWhatsappHref(
  reservation: ReservationState,
  locale: string | undefined,
  whatsappNumber: string,
) {
  const normalizedNumber = whatsappNumber.replace(/[^\d]/g, "");

  if (!normalizedNumber) {
    return "#";
  }

  const message = buildWhatsappBookingMessage(reservation, locale);
  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(message)}`;
}
