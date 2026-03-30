"use client";

import { useMemo, useState } from "react";

import {
  CONTACT_REASON_LABELS_BY_LOCALE,
  type ContactEmailPayload,
  type ContactReasonId,
  validateContactEmailPayload,
} from "@/lib/contact/email";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

type EmailContactFormProps = {
  locale: Locale;
  officialEmail: string;
  className?: string;
};

type SubmitState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "fallback"; message: string; fallbackMailto: string }
  | { status: "error"; message: string };

type FormCopy = {
  badge: string;
  title: string;
  description: string;
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  reasonLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  submitLabel: string;
  submitLoadingLabel: string;
  fallbackLabel: string;
  helperText: string;
  successText: string;
  fallbackText: string;
  errorText: string;
  selectPlaceholder: string;
};

const copyByLocale: Record<Locale, FormCopy> = {
  es: {
    badge: "Correo directo",
    title: "Escríbenos desde la web",
    description:
      "Envía una consulta estructurada al correo oficial del centro. Si el envío directo aún no está activo, te damos salida inmediata sin perder lo que has escrito.",
    nameLabel: "Nombre",
    emailLabel: "Email",
    phoneLabel: "Teléfono (opcional)",
    reasonLabel: "Motivo",
    messageLabel: "Mensaje",
    namePlaceholder: "Nombre completo",
    emailPlaceholder: "Tu email",
    phonePlaceholder: "+376...",
    messagePlaceholder: "Cuéntanos tu consulta con el mayor contexto posible...",
    submitLabel: "Enviar mensaje",
    submitLoadingLabel: "Enviando...",
    fallbackLabel: "Abrir email prellenado",
    helperText: "Tiempo de respuesta habitual: dentro del horario de atención del centro.",
    successText: "Mensaje enviado correctamente.",
    fallbackText: "El envío directo no está activo todavía. Puedes abrir tu correo con el mensaje prellenado.",
    errorText: "No se pudo enviar en este momento. Inténtalo de nuevo en unos minutos.",
    selectPlaceholder: "Selecciona un motivo",
  },
  ca: {
    badge: "Correu directe",
    title: "Escriu-nos des del web",
    description:
      "Envia una consulta estructurada al correu oficial del centre. Si l'enviament directe encara no esta actiu, et donem una sortida immediata sense perdre el contingut.",
    nameLabel: "Nom",
    emailLabel: "Email",
    phoneLabel: "Telefon (opcional)",
    reasonLabel: "Motiu",
    messageLabel: "Missatge",
    namePlaceholder: "Nom complet",
    emailPlaceholder: "El teu email",
    phonePlaceholder: "+376...",
    messagePlaceholder: "Explica'ns la teva consulta amb el maxim context possible...",
    submitLabel: "Enviar missatge",
    submitLoadingLabel: "Enviant...",
    fallbackLabel: "Obrir correu preomplert",
    helperText: "Temps habitual de resposta: dins l'horari d'atencio del centre.",
    successText: "Missatge enviat correctament.",
    fallbackText: "L'enviament directe encara no esta actiu. Pots obrir el teu correu amb el missatge preomplert.",
    errorText: "No s'ha pogut enviar ara mateix. Torna-ho a provar en uns minuts.",
    selectPlaceholder: "Selecciona un motiu",
  },
  fr: {
    badge: "Email direct",
    title: "Ecrivez-nous depuis le site",
    description:
      "Envoyez une demande structuree a l'email officiel du centre. Si l'envoi direct n'est pas encore actif, vous pouvez ouvrir un email pre-rempli sans perdre votre texte.",
    nameLabel: "Nom",
    emailLabel: "Email",
    phoneLabel: "Telephone (optionnel)",
    reasonLabel: "Motif",
    messageLabel: "Message",
    namePlaceholder: "Nom complet",
    emailPlaceholder: "Votre email",
    phonePlaceholder: "+376...",
    messagePlaceholder: "Decrivez votre demande avec un maximum de contexte...",
    submitLabel: "Envoyer le message",
    submitLoadingLabel: "Envoi en cours...",
    fallbackLabel: "Ouvrir l'email pre-rempli",
    helperText: "Delai de reponse habituel: pendant les horaires d'ouverture du centre.",
    successText: "Message envoye avec succes.",
    fallbackText: "L'envoi direct n'est pas encore actif. Vous pouvez ouvrir votre email pre-rempli.",
    errorText: "L'envoi a echoue pour le moment. Reessayez dans quelques minutes.",
    selectPlaceholder: "Selectionnez un motif",
  },
  en: {
    badge: "Direct email",
    title: "Write to us from the website",
    description:
      "Send a structured request to the centre's official email. If direct sending is not active yet, we give you an immediate fallback without losing your text.",
    nameLabel: "Name",
    emailLabel: "Email",
    phoneLabel: "Phone (optional)",
    reasonLabel: "Reason",
    messageLabel: "Message",
    namePlaceholder: "Full name",
    emailPlaceholder: "Your email",
    phonePlaceholder: "+376...",
    messagePlaceholder: "Tell us about your request with as much context as possible...",
    submitLabel: "Send message",
    submitLoadingLabel: "Sending...",
    fallbackLabel: "Open prefilled email",
    helperText: "Typical response time: within the centre's operating hours.",
    successText: "Message sent successfully.",
    fallbackText: "Direct sending is not active yet. You can open your email with the prefilled message.",
    errorText: "We could not send your request right now. Please try again in a few minutes.",
    selectPlaceholder: "Select a reason",
  },
  uk: {
    badge: "Прямий email",
    title: "Напишіть нам із сайту",
    description:
      "Надішліть структурований запит на офіційну пошту центру. Якщо пряме надсилання ще не активне, ви зможете відкрити готовий лист без втрати тексту.",
    nameLabel: "Ім'я",
    emailLabel: "Email",
    phoneLabel: "Телефон (необов'язково)",
    reasonLabel: "Причина",
    messageLabel: "Повідомлення",
    namePlaceholder: "Повне ім'я",
    emailPlaceholder: "Ваш email",
    phonePlaceholder: "+376...",
    messagePlaceholder: "Опишіть ваш запит якомога детальніше...",
    submitLabel: "Надіслати повідомлення",
    submitLoadingLabel: "Надсилання...",
    fallbackLabel: "Відкрити готовий email",
    helperText: "Звичний час відповіді: у робочі години центру.",
    successText: "Повідомлення успішно надіслано.",
    fallbackText: "Пряме надсилання поки не активне. Ви можете відкрити email з підготовленим текстом.",
    errorText: "Зараз не вдалося надіслати запит. Спробуйте ще раз за кілька хвилин.",
    selectPlaceholder: "Оберіть причину",
  },
  ru: {
    badge: "Прямой email",
    title: "Напишите нам с сайта",
    description:
      "Отправьте структурированный запрос на официальный email центра. Если прямая отправка пока не активна, вы сможете открыть готовое письмо без потери текста.",
    nameLabel: "Имя",
    emailLabel: "Email",
    phoneLabel: "Телефон (необязательно)",
    reasonLabel: "Причина",
    messageLabel: "Сообщение",
    namePlaceholder: "Полное имя",
    emailPlaceholder: "Ваш email",
    phonePlaceholder: "+376...",
    messagePlaceholder: "Опишите ваш запрос как можно подробнее...",
    submitLabel: "Отправить сообщение",
    submitLoadingLabel: "Отправка...",
    fallbackLabel: "Открыть готовый email",
    helperText: "Обычное время ответа: в рабочие часы центра.",
    successText: "Сообщение успешно отправлено.",
    fallbackText: "Прямая отправка пока не активна. Вы можете открыть email с подготовленным текстом.",
    errorText: "Сейчас не удалось отправить запрос. Попробуйте снова через несколько минут.",
    selectPlaceholder: "Выберите причину",
  },
};

const inputClasses =
  "min-h-12 w-full rounded-[0.9rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 text-base text-[color:var(--color-foreground)] transition-[border-color,box-shadow] duration-200 placeholder:text-[color:var(--color-muted)]/70 focus-visible:border-[color:var(--color-brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand)]/22 sm:text-[0.9rem]";

export default function EmailContactForm({ locale, officialEmail, className }: EmailContactFormProps) {
  const copy = copyByLocale[locale];

  const [payload, setPayload] = useState<ContactEmailPayload>({
    name: "",
    email: "",
    phone: "",
    reason: "valoracion",
    message: "",
    locale,
  });
  const [showValidation, setShowValidation] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });

  const errors = useMemo(() => validateContactEmailPayload(payload), [payload]);

  function updateField<K extends keyof ContactEmailPayload>(field: K, value: ContactEmailPayload[K]) {
    setPayload((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowValidation(true);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setSubmitState({ status: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        message?: string;
        mode?: string;
        fallbackMailto?: string;
      };

      if (response.ok && data.mode === "sent") {
        setSubmitState({ status: "success", message: data.message ?? copy.successText });
        setPayload({
          name: "",
          email: "",
          phone: "",
          reason: "valoracion",
          message: "",
          locale,
        });
        setShowValidation(false);
        return;
      }

      if (response.ok && data.mode === "fallback" && data.fallbackMailto) {
        setSubmitState({
          status: "fallback",
          message: data.message ?? copy.fallbackText,
          fallbackMailto: data.fallbackMailto,
        });
        return;
      }

      setSubmitState({ status: "error", message: data.message ?? copy.errorText });
    } catch {
      setSubmitState({ status: "error", message: copy.errorText });
    }
  }

  const reasonOptions = Object.entries(CONTACT_REASON_LABELS_BY_LOCALE[locale]) as Array<[ContactReasonId, string]>;

  return (
    <article className={cn("surface-card rounded-[1.4rem] px-4 py-5 sm:px-6", className)}>
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">{copy.badge}</p>
      <h3 className="mt-2 text-[clamp(1.3rem,2.4vw,1.9rem)] leading-[1.03] font-semibold tracking-[-0.02em] text-[color:var(--color-foreground)]">
        {copy.title}
      </h3>
      <p className="mt-2 text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{copy.description}</p>

      <form onSubmit={handleSubmit} className="mt-5 grid gap-4">
        <div className="grid gap-4 lg:grid-cols-2">
          <label className="space-y-1.5">
            <span className="text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
              {copy.nameLabel}
            </span>
            <input
              type="text"
              value={payload.name}
              onChange={(event) => updateField("name", event.target.value)}
              autoComplete="name"
              className={inputClasses}
              placeholder={copy.namePlaceholder}
            />
            {showValidation && errors.name ? <p className="text-[0.74rem] text-[#7b2f4f]">{errors.name}</p> : null}
          </label>

          <label className="space-y-1.5">
            <span className="text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
              {copy.emailLabel}
            </span>
            <input
              type="email"
              value={payload.email}
              onChange={(event) => updateField("email", event.target.value)}
              autoComplete="email"
              className={inputClasses}
              placeholder={officialEmail || copy.emailPlaceholder}
            />
            {showValidation && errors.email ? <p className="text-[0.74rem] text-[#7b2f4f]">{errors.email}</p> : null}
          </label>

          <label className="space-y-1.5">
            <span className="text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
              {copy.phoneLabel}
            </span>
            <input
              type="tel"
              value={payload.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              autoComplete="tel"
              className={inputClasses}
              placeholder={copy.phonePlaceholder}
            />
            {showValidation && errors.phone ? <p className="text-[0.74rem] text-[#7b2f4f]">{errors.phone}</p> : null}
          </label>

          <label className="space-y-1.5">
            <span className="text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
              {copy.reasonLabel}
            </span>
            <select
              value={payload.reason}
              onChange={(event) => updateField("reason", event.target.value as ContactReasonId)}
              className={inputClasses}
            >
              <option value="">{copy.selectPlaceholder}</option>
              {reasonOptions.map(([id, label]) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
            {showValidation && errors.reason ? <p className="text-[0.74rem] text-[#7b2f4f]">{errors.reason}</p> : null}
          </label>
        </div>

        <label className="space-y-1.5">
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
            {copy.messageLabel}
          </span>
          <textarea
            value={payload.message}
            onChange={(event) => updateField("message", event.target.value)}
            rows={5}
            className={cn(inputClasses, "h-auto resize-y py-3")}
            placeholder={copy.messagePlaceholder}
          />
          {showValidation && errors.message ? <p className="text-[0.74rem] text-[#7b2f4f]">{errors.message}</p> : null}
        </label>

        <button
          type="submit"
          disabled={submitState.status === "loading"}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-[var(--radius-pill)] border border-transparent bg-[color:var(--color-brand)] px-6 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-px hover:bg-[color:var(--color-brand-strong)] hover:shadow-[0_24px_44px_-30px_rgba(55,26,40,0.78)] disabled:cursor-not-allowed disabled:opacity-55 sm:w-auto"
        >
          {submitState.status === "loading" ? copy.submitLoadingLabel : copy.submitLabel}
        </button>
      </form>

      <div className="mt-4 min-h-12 rounded-[0.9rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-3 text-[0.8rem] leading-6 text-[color:var(--color-muted)]">
        {submitState.status === "success" ? <p className="text-[#1f6144]">{submitState.message}</p> : null}
        {submitState.status === "error" ? <p className="text-[#7b2f4f]">{submitState.message}</p> : null}
        {submitState.status === "fallback" ? (
          <div className="space-y-2">
            <p className="text-[#7b2f4f]">{submitState.message}</p>
            <a
              href={submitState.fallbackMailto}
              className="inline-flex h-10 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-colors duration-200 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
            >
              {copy.fallbackLabel}
            </a>
          </div>
        ) : null}
        {submitState.status === "idle" || submitState.status === "loading" ? <p>{copy.helperText}</p> : null}
      </div>
    </article>
  );
}
