"use client";

import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

import {
  CHAT_MAX_HISTORY_MESSAGES,
  CHAT_MAX_INPUT_CHARS,
  CHAT_OPEN_EVENT,
} from "@/lib/chat/constants";
import {
  buildWhatsappHref,
  deriveReservationFallbackFromConversation,
  EMPTY_RESERVATION_STATE,
  hasReservationContext,
  isReservationReadyForWhatsapp,
  mergeReservationState,
  parseReservationUpdateFromReply,
  type ReservationState,
} from "@/lib/chat/reservation";
import {
  clearStoredChatMessages,
  clearStoredChatReservation,
  getStoredChatMessages,
  getStoredChatReservation,
  persistChatMessages,
  persistChatReservation,
} from "@/lib/chat/session";
import type { ChatApiResponse, ChatMessage, ChatRole } from "@/lib/chat/types";
import type { SiteDictionary } from "@/lib/i18n/messages";
import { cn } from "@/lib/utils";

type ChatExperienceProps = {
  locale: string;
  copy: SiteDictionary["chat"];
  bookingHref: string;
  bookCtaLabel: string;
  whatsappCtaLabel: string;
};

const whatsappCtaLabelsByLocale: Record<string, { ready: string; continue: string }> = {
  es: {
    ready: "Enviar reserva por WhatsApp",
    continue: "Continuar por WhatsApp",
  },
  ca: {
    ready: "Enviar reserva per WhatsApp",
    continue: "Continuar per WhatsApp",
  },
  fr: {
    ready: "Envoyer la réservation sur WhatsApp",
    continue: "Continuer sur WhatsApp",
  },
};

const reservationUpdateByLocale: Record<string, string> = {
  es: "He actualizado tus datos de reserva para continuar por WhatsApp.",
  ca: "He actualitzat les teves dades de reserva per continuar per WhatsApp.",
  fr: "J'ai mis à jour vos données de réservation pour continuer sur WhatsApp.",
};

const conversationWhatsappCtaByLocale: Record<string, { lead: string }> = {
  es: {
    lead: "Ya te dejo la reserva preparada para enviarla por WhatsApp.",
  },
  ca: {
    lead: "Ja et deixo la reserva preparada per enviar-la per WhatsApp.",
  },
  fr: {
    lead: "Je vous laisse la réservation prête à envoyer sur WhatsApp.",
  },
};

function createMessage(role: ChatRole, content: string): ChatMessage {
  const id =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `msg_${Date.now()}_${Math.random().toString(16).slice(2)}`;

  return {
    id,
    role,
    content,
    createdAt: Date.now(),
  };
}

function getLocalizedReservationUpdateMessage(locale: string) {
  return reservationUpdateByLocale[locale] ?? reservationUpdateByLocale.es;
}

function getLocalizedWhatsappCtas(locale: string, fallbackLabel: string) {
  return whatsappCtaLabelsByLocale[locale] ?? {
    ready: fallbackLabel,
    continue: fallbackLabel,
  };
}

function getLocalizedConversationWhatsappCta(locale: string) {
  return conversationWhatsappCtaByLocale[locale] ?? conversationWhatsappCtaByLocale.es;
}

export default function ChatExperience({
  locale,
  copy,
  bookingHref,
  bookCtaLabel,
  whatsappCtaLabel,
}: ChatExperienceProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [reservation, setReservation] = useState<ReservationState>(EMPTY_RESERVATION_STATE);
  const [draft, setDraft] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  const localizedReservationUpdateMessage = useMemo(
    () => getLocalizedReservationUpdateMessage(locale),
    [locale],
  );
  const localizedWhatsappCtas = useMemo(
    () => getLocalizedWhatsappCtas(locale, whatsappCtaLabel),
    [locale, whatsappCtaLabel],
  );
  const localizedConversationWhatsappCta = useMemo(
    () => getLocalizedConversationWhatsappCta(locale),
    [locale],
  );

  const welcomeMessage = useMemo<ChatMessage>(
    () => ({
      id: "welcome",
      role: "assistant",
      content: copy.welcomeMessage,
      createdAt: 0,
    }),
    [copy.welcomeMessage],
  );

  const messages = useMemo(() => [welcomeMessage, ...history], [history, welcomeMessage]);

  const hasStructuredReservation = useMemo(() => hasReservationContext(reservation), [reservation]);
  const readyForWhatsapp = useMemo(
    () => isReservationReadyForWhatsapp(reservation),
    [reservation],
  );
  const whatsappNumber = useMemo(
    () => (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").trim(),
    [],
  );
  const hasWhatsappNumber = useMemo(
    () => Boolean(whatsappNumber.replace(/[^\d]/g, "")),
    [whatsappNumber],
  );
  const dynamicWhatsappHref = useMemo(
    () => buildWhatsappHref(reservation, locale, whatsappNumber),
    [locale, reservation, whatsappNumber],
  );

  useEffect(() => {
    const storedMessages = getStoredChatMessages();
    const storedReservation = getStoredChatReservation();

    setHistory(storedMessages);
    setReservation(storedReservation);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    persistChatMessages(history);
  }, [history, isHydrated]);

  useEffect(() => {
    if (!isHydrated) {
      return;
    }

    persistChatReservation(reservation);
  }, [reservation, isHydrated]);

  useEffect(() => {
    function handleOpen() {
      setIsOpen(true);
    }

    window.addEventListener(CHAT_OPEN_EVENT, handleOpen);

    return () => {
      window.removeEventListener(CHAT_OPEN_EVENT, handleOpen);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      setIsOpen(false);
    }

    window.addEventListener("keydown", handleEscape);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [isOpen, messages.length, isLoading]);

  function resetConversation() {
    setHistory([]);
    setReservation(EMPTY_RESERVATION_STATE);
    setError(null);
    clearStoredChatMessages();
    clearStoredChatReservation();
  }

  async function submitMessage(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    const message = draft.trim();

    if (!message || isLoading) {
      return;
    }

    if (message.length > CHAT_MAX_INPUT_CHARS) {
      setError(`${copy.maxLengthError}: ${CHAT_MAX_INPUT_CHARS}.`);
      return;
    }

    const userMessage = createMessage("user", message);
    const nextHistory = [...history, userMessage].slice(-CHAT_MAX_HISTORY_MESSAGES);

    setHistory(nextHistory);
    setDraft("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale,
          messages: nextHistory.map((item) => ({
            role: item.role,
            content: item.content,
          })),
        }),
      });

      const data = (await response.json().catch(() => ({}))) as ChatApiResponse;

      if (!response.ok) {
        throw new Error(response.status === 429 ? copy.rateLimitError : copy.errorMessage);
      }

      if (typeof data.reply !== "string" || !data.reply.trim()) {
        throw new Error(copy.errorMessage);
      }

      const parsedReply = parseReservationUpdateFromReply(data.reply.trim());
      const conversationalReply = parsedReply.cleanReply || (parsedReply.update
        ? localizedReservationUpdateMessage
        : copy.errorMessage);
      const fallbackUpdate = deriveReservationFallbackFromConversation({
        assistantReply: data.reply.trim(),
        history: nextHistory,
      });

      setReservation((previous) => {
        const mergedReservation = mergeReservationState(previous, parsedReply.update);
        const mergedWithFallback = mergeReservationState(mergedReservation, fallbackUpdate);
        return mergedWithFallback;
      });

      const assistantMessage = createMessage("assistant", conversationalReply);
      setHistory((previous) => [...previous, assistantMessage].slice(-CHAT_MAX_HISTORY_MESSAGES));
    } catch (requestError) {
      const messageText =
        requestError instanceof Error && requestError.message.trim()
          ? requestError.message
          : copy.errorMessage;

      setError(messageText);
      setHistory((previous) => [
        ...previous,
        createMessage("assistant", copy.errorMessage),
      ].slice(-CHAT_MAX_HISTORY_MESSAGES));
    } finally {
      setIsLoading(false);
    }
  }

  function handleTextareaKeyDown(event: ReactKeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== "Enter" || event.shiftKey || event.nativeEvent.isComposing) {
      return;
    }

    event.preventDefault();
    void submitMessage();
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={copy.launcherAriaLabel}
        className={cn(
          "fixed right-4 z-40 inline-flex h-[2.95rem] items-center gap-2 rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 text-[0.63rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] shadow-[0_20px_44px_-30px_rgba(42,20,31,0.62)] transition-[border-color,color,transform] duration-300 hover:-translate-y-px hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)] md:bottom-6 md:right-6 md:h-11 md:px-5 md:text-[0.66rem]",
          isOpen ? "pointer-events-none translate-y-1 opacity-0" : "bottom-[5.2rem] md:opacity-100",
        )}
      >
        <span className="inline-flex h-2 w-2 rounded-full bg-[color:var(--color-brand)]" />
        {copy.launcherLabel}
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-[80]">
          <button
            type="button"
            aria-label={copy.closeLabel}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[rgba(24,12,19,0.38)] backdrop-blur-[2px]"
          />

          <aside
            role="dialog"
            aria-modal="true"
            aria-label={copy.panelTitle}
            className="absolute inset-x-2 bottom-2 top-16 flex flex-col overflow-hidden rounded-[1.55rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] shadow-[0_42px_90px_-60px_rgba(33,17,25,0.75)] md:inset-y-6 md:left-auto md:right-6 md:w-[25.5rem]"
          >
            <header className="border-b border-[color:var(--color-line)] px-4 pb-3 pt-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.63rem] font-semibold uppercase tracking-[0.11em] text-[color:var(--color-accent)]">
                    {copy.panelLabel}
                  </p>
                  <h2 className="mt-1 text-[1.04rem] font-semibold tracking-[-0.015em] text-[color:var(--color-foreground)]">
                    {copy.panelTitle}
                  </h2>
                  <p className="mt-1 max-w-[30ch] text-[0.8rem] leading-6 text-[color:var(--color-muted)]">
                    {copy.panelDescription}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-8 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)] transition-colors duration-300 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
                >
                  {copy.closeLabel}
                </button>
              </div>
            </header>

            <div className="no-scrollbar flex-1 overflow-y-auto px-4 py-4">
              <div className="space-y-3">
                {messages.map((message) => (
                  <article
                    key={message.id}
                    className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
                  >
                    <p
                      className={cn(
                        "max-w-[88%] rounded-[1.05rem] px-3.5 py-2.5 text-[0.84rem] leading-6",
                        message.role === "user"
                          ? "bg-[color:var(--color-brand)] text-white"
                          : "border border-[color:var(--color-line)] bg-[color:var(--color-surface)] text-[color:var(--color-foreground)]",
                      )}
                    >
                      {message.content}
                    </p>
                  </article>
                ))}

                {isLoading ? (
                  <article className="flex justify-start">
                    <p className="inline-flex items-center gap-1.5 rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3.5 py-2 text-[0.8rem] text-[color:var(--color-muted)]">
                      <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--color-accent)]" />
                      {copy.thinkingLabel}
                    </p>
                  </article>
                ) : null}

                {readyForWhatsapp ? (
                  <article className="flex justify-start">
                    <div className="w-full max-w-[88%] rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3.5 py-3">
                      <p className="text-[0.78rem] leading-5 text-[color:var(--color-muted)]">
                        {localizedConversationWhatsappCta.lead}
                      </p>
                      <Link
                        href={dynamicWhatsappHref}
                        target="_blank"
                        rel="noreferrer"
                        aria-disabled={!hasWhatsappNumber}
                        className={cn(
                          "mt-2 inline-flex h-8 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-colors duration-200 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]",
                          !hasWhatsappNumber && "pointer-events-none opacity-55",
                        )}
                      >
                        {localizedWhatsappCtas.ready}
                      </Link>
                    </div>
                  </article>
                ) : null}
              </div>
              <div ref={endRef} />
            </div>

            <footer className="border-t border-[color:var(--color-line)] px-4 pb-4 pt-3">
              <form onSubmit={submitMessage} className="space-y-3">
                <label className="sr-only" htmlFor="chat-input">
                  {copy.inputAriaLabel}
                </label>
                <textarea
                  id="chat-input"
                  value={draft}
                  maxLength={CHAT_MAX_INPUT_CHARS}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={handleTextareaKeyDown}
                  placeholder={copy.inputPlaceholder}
                  className="min-h-[5.5rem] w-full resize-none rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3.5 py-3 text-[0.88rem] leading-6 text-[color:var(--color-foreground)] outline-none transition-colors duration-200 placeholder:text-[color:var(--color-muted)] focus:border-[color:var(--color-brand)]"
                />

                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={resetConversation}
                    disabled={isLoading || history.length === 0}
                    className="inline-flex h-9 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] px-3.5 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)] transition-colors duration-200 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)] disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    {copy.resetLabel}
                  </button>

                  <button
                    type="submit"
                    disabled={!draft.trim() || isLoading}
                    className="inline-flex h-9 items-center justify-center rounded-[var(--radius-pill)] bg-[color:var(--color-brand)] px-4 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-[color:var(--color-brand-strong)] disabled:cursor-not-allowed disabled:opacity-55"
                  >
                    {copy.sendLabel}
                  </button>
                </div>
              </form>

              {error ? (
                <p className="mt-3 rounded-[0.9rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3 py-2 text-[0.75rem] leading-5 text-[color:var(--color-muted)]">
                  {error}
                </p>
              ) : null}

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Link
                  href={bookingHref}
                  className="inline-flex h-8 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3 text-[0.63rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-colors duration-200 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
                >
                  {bookCtaLabel}
                </Link>
                <Link
                  href={dynamicWhatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-disabled={!hasWhatsappNumber}
                  className={cn(
                    "inline-flex h-8 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3 text-[0.63rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-colors duration-200 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]",
                    !hasWhatsappNumber && "pointer-events-none opacity-55",
                  )}
                >
                  {readyForWhatsapp
                    ? localizedWhatsappCtas.ready
                    : localizedWhatsappCtas.continue}
                </Link>
              </div>

              <p className="mt-2 text-[0.7rem] leading-5 text-[color:var(--color-muted)]">
                {readyForWhatsapp
                  ? copy.bookingHint
                  : hasStructuredReservation
                    ? copy.panelDescription
                    : copy.bookingHint}
              </p>
            </footer>
          </aside>
        </div>
      ) : null}
    </>
  );
}
