"use client";

import { useMemo, useState } from "react";

import {
  CONTACT_REASON_LABELS,
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
};

const inputClasses =
  "h-11 w-full rounded-[0.9rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 text-[0.86rem] text-[color:var(--color-foreground)] transition-[border-color,box-shadow] duration-200 placeholder:text-[color:var(--color-muted)]/70 focus-visible:border-[color:var(--color-brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand)]/22";

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

  const reasonOptions = Object.entries(CONTACT_REASON_LABELS) as Array<[ContactReasonId, string]>;

  return (
    <article className={cn("surface-card rounded-[1.4rem] px-5 py-5 sm:px-6", className)}>
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">{copy.badge}</p>
      <h3 className="mt-2 text-[clamp(1.3rem,2.4vw,1.9rem)] leading-[1.03] font-semibold tracking-[-0.02em] text-[color:var(--color-foreground)]">
        {copy.title}
      </h3>
      <p className="mt-2 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">{copy.description}</p>

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
              className={inputClasses}
              placeholder="Nombre completo"
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
              className={inputClasses}
              placeholder={officialEmail}
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
              className={inputClasses}
              placeholder="+376..."
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
          className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-pill)] border border-transparent bg-[color:var(--color-brand)] px-6 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-px hover:bg-[color:var(--color-brand-strong)] hover:shadow-[0_24px_44px_-30px_rgba(55,26,40,0.78)] disabled:cursor-not-allowed disabled:opacity-55"
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
              className="inline-flex h-9 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-4 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-colors duration-200 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
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
