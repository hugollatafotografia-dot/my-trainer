"use client";

import { useMemo, useState } from "react";

import { buildPreBookingWhatsappMessage, buildWhatsappHref } from "@/lib/contact/whatsapp";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

type WhatsappPreBookingFormProps = {
  locale: Locale;
  whatsappNumber: string;
  treatments: string[];
  className?: string;
};

type FieldErrors = Partial<Record<"name" | "phone" | "treatment" | "dates" | "timeSlot", string>>;

type Option = {
  id: string;
  label: string;
};

type FormCopy = {
  badge: string;
  title: string;
  description: string;
  treatmentLabel: string;
  preferredDatesLabel: string;
  addDateLabel: string;
  removeDateLabel: string;
  flexibilityLabel: string;
  timeSlotLabel: string;
  professionalLabel: string;
  nameLabel: string;
  phoneLabel: string;
  noteLabel: string;
  notePlaceholder: string;
  ctaLabel: string;
  helperText: string;
  previewLabel: string;
  validationHint: string;
  noPreferenceLabel: string;
  selectPlaceholder: string;
  datePlaceholder: string;
  invalidPhone: string;
  invalidName: string;
  invalidTreatment: string;
  invalidDates: string;
  invalidTimeSlot: string;
};

const copyByLocale: Record<Locale, FormCopy> = {
  es: {
    badge: "Pre-reserva asistida",
    title: "Prepara tu cita y envíala por WhatsApp",
    description:
      "Define tratamiento, disponibilidad y profesional en menos de un minuto. El equipo solo tendrá que confirmar hueco real de agenda.",
    treatmentLabel: "Tratamiento",
    preferredDatesLabel: "Días preferidos",
    addDateLabel: "Añadir otro día",
    removeDateLabel: "Eliminar",
    flexibilityLabel: "Flexibilidad adicional (opcional)",
    timeSlotLabel: "Franja horaria",
    professionalLabel: "Profesional",
    nameLabel: "Nombre",
    phoneLabel: "Teléfono (opcional)",
    noteLabel: "Nota breve (opcional)",
    notePlaceholder: "Ejemplo: primera visita, embarazo, piel sensible, solo tardes...",
    ctaLabel: "Enviar solicitud por WhatsApp",
    helperText: "No es una confirmación automática. Te responderemos con disponibilidad real.",
    previewLabel: "Resumen de solicitud",
    validationHint: "Completa tratamiento, nombre, día preferido y franja horaria.",
    noPreferenceLabel: "Sin preferencia",
    selectPlaceholder: "Selecciona una opción",
    datePlaceholder: "Selecciona fecha",
    invalidPhone: "El teléfono parece incompleto.",
    invalidName: "Introduce tu nombre.",
    invalidTreatment: "Selecciona un tratamiento.",
    invalidDates: "Indica al menos un día o una ventana de flexibilidad.",
    invalidTimeSlot: "Selecciona una franja horaria.",
  },
  ca: {
    badge: "Pre-reserva assistida",
    title: "Prepara la teva cita i envia-la per WhatsApp",
    description:
      "Defineix tractament, disponibilitat i professional en menys d'un minut. L'equip nomes haura de confirmar un espai real d'agenda.",
    treatmentLabel: "Tractament",
    preferredDatesLabel: "Dies preferits",
    addDateLabel: "Afegir un altre dia",
    removeDateLabel: "Eliminar",
    flexibilityLabel: "Flexibilitat addicional (opcional)",
    timeSlotLabel: "Franja horaria",
    professionalLabel: "Professional",
    nameLabel: "Nom",
    phoneLabel: "Telefon (opcional)",
    noteLabel: "Nota breu (opcional)",
    notePlaceholder: "Exemple: primera visita, pell sensible, nomes tardes...",
    ctaLabel: "Enviar sollicitud per WhatsApp",
    helperText: "No es una confirmacio automatica. Et respondrem amb disponibilitat real.",
    previewLabel: "Resum de sollicitud",
    validationHint: "Completa tractament, nom, dia preferit i franja horaria.",
    noPreferenceLabel: "Sense preferencia",
    selectPlaceholder: "Selecciona una opcio",
    datePlaceholder: "Selecciona data",
    invalidPhone: "El telefon sembla incomplet.",
    invalidName: "Introdueix el teu nom.",
    invalidTreatment: "Selecciona un tractament.",
    invalidDates: "Indica almenys un dia o una finestra de flexibilitat.",
    invalidTimeSlot: "Selecciona una franja horaria.",
  },
  fr: {
    badge: "Pre-reservation assistee",
    title: "Preparez votre rendez-vous et envoyez-le via WhatsApp",
    description:
      "Indiquez traitement, disponibilites et professionnelle en moins d'une minute. L'equipe n'aura plus qu'a confirmer le vrai creneau.",
    treatmentLabel: "Traitement",
    preferredDatesLabel: "Jours preferes",
    addDateLabel: "Ajouter un autre jour",
    removeDateLabel: "Supprimer",
    flexibilityLabel: "Flexibilite supplementaire (optionnel)",
    timeSlotLabel: "Plage horaire",
    professionalLabel: "Professionnelle",
    nameLabel: "Nom",
    phoneLabel: "Telephone (optionnel)",
    noteLabel: "Note breve (optionnel)",
    notePlaceholder: "Exemple: premiere visite, peau sensible, uniquement l'apres-midi...",
    ctaLabel: "Envoyer la demande par WhatsApp",
    helperText: "Ce n'est pas une confirmation automatique. Nous vous repondrons avec les disponibilites reelles.",
    previewLabel: "Resume de la demande",
    validationHint: "Completez traitement, nom, jour prefere et plage horaire.",
    noPreferenceLabel: "Sans preference",
    selectPlaceholder: "Selectionnez une option",
    datePlaceholder: "Selectionnez une date",
    invalidPhone: "Le telephone semble incomplet.",
    invalidName: "Saisissez votre nom.",
    invalidTreatment: "Selectionnez un traitement.",
    invalidDates: "Indiquez au moins un jour ou une fenetre de flexibilite.",
    invalidTimeSlot: "Selectionnez une plage horaire.",
  },
};

const professionalsByLocale: Record<Locale, Option[]> = {
  es: [
    { id: "eli", label: "Eli" },
    { id: "jaquie", label: "Jaquie" },
    { id: "karen", label: "Karen" },
    { id: "sin-preferencia", label: "Sin preferencia" },
  ],
  ca: [
    { id: "eli", label: "Eli" },
    { id: "jaquie", label: "Jaquie" },
    { id: "karen", label: "Karen" },
    { id: "sin-preferencia", label: "Sense preferencia" },
  ],
  fr: [
    { id: "eli", label: "Eli" },
    { id: "jaquie", label: "Jaquie" },
    { id: "karen", label: "Karen" },
    { id: "sin-preferencia", label: "Sans preference" },
  ],
};

const timeSlotsByLocale: Record<Locale, Option[]> = {
  es: [
    { id: "manana", label: "Mañana" },
    { id: "mediodia", label: "Mediodía" },
    { id: "tarde", label: "Tarde" },
    { id: "ultima-hora", label: "Última hora" },
  ],
  ca: [
    { id: "mati", label: "Matí" },
    { id: "migdia", label: "Migdia" },
    { id: "tarda", label: "Tarda" },
    { id: "ultima-hora", label: "Última hora" },
  ],
  fr: [
    { id: "matin", label: "Matin" },
    { id: "midi", label: "Midi" },
    { id: "apres-midi", label: "Après-midi" },
    { id: "fin-journee", label: "Fin de journée" },
  ],
};

const flexibilityByLocale: Record<Locale, Option[]> = {
  es: [
    { id: "", label: "Sin flexibilidad adicional" },
    { id: "plus-minus-3", label: "± 3 días" },
    { id: "1-2-semanas", label: "Dentro de 1-2 semanas" },
    { id: "este-mes", label: "Cualquier día de este mes" },
    { id: "mes-proximo", label: "Cualquier día del próximo mes" },
  ],
  ca: [
    { id: "", label: "Sense flexibilitat addicional" },
    { id: "plus-minus-3", label: "± 3 dies" },
    { id: "1-2-semanas", label: "Dins d'1-2 setmanes" },
    { id: "este-mes", label: "Qualsevol dia d'aquest mes" },
    { id: "mes-proximo", label: "Qualsevol dia del mes vinent" },
  ],
  fr: [
    { id: "", label: "Sans flexibilite supplementaire" },
    { id: "plus-minus-3", label: "± 3 jours" },
    { id: "1-2-semanas", label: "Dans 1-2 semaines" },
    { id: "este-mes", label: "N'importe quel jour ce mois-ci" },
    { id: "mes-proximo", label: "N'importe quel jour le mois prochain" },
  ],
};

const inputClasses =
  "h-11 w-full rounded-[0.9rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 text-[0.86rem] text-[color:var(--color-foreground)] transition-[border-color,box-shadow] duration-200 placeholder:text-[color:var(--color-muted)]/70 focus-visible:border-[color:var(--color-brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand)]/22";

export default function WhatsappPreBookingForm({
  locale,
  whatsappNumber,
  treatments,
  className,
}: WhatsappPreBookingFormProps) {
  const copy = copyByLocale[locale];
  const professionalOptions = professionalsByLocale[locale];
  const timeSlots = timeSlotsByLocale[locale];
  const flexibilityOptions = flexibilityByLocale[locale];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [professional, setProfessional] = useState("sin-preferencia");
  const [preferredDates, setPreferredDates] = useState<string[]>([""]);
  const [flexibility, setFlexibility] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [note, setNote] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const uniqueTreatments = useMemo(
    () => Array.from(new Set(treatments.filter(Boolean))).sort((a, b) => a.localeCompare(b, locale)),
    [locale, treatments],
  );

  const cleanedPreferredDates = useMemo(
    () => preferredDates.map((value) => value.trim()).filter(Boolean),
    [preferredDates],
  );

  const fieldErrors = useMemo<FieldErrors>(() => {
    const errors: FieldErrors = {};

    if (name.trim().length < 2) {
      errors.name = copy.invalidName;
    }

    if (!treatment) {
      errors.treatment = copy.invalidTreatment;
    }

    if (!timeSlot) {
      errors.timeSlot = copy.invalidTimeSlot;
    }

    if (!cleanedPreferredDates.length && !flexibility) {
      errors.dates = copy.invalidDates;
    }

    if (phone && phone.replace(/\D+/g, "").length < 6) {
      errors.phone = copy.invalidPhone;
    }

    return errors;
  }, [cleanedPreferredDates.length, copy, flexibility, name, phone, timeSlot, treatment]);

  const canSubmit = Object.keys(fieldErrors).length === 0;

  const selectedProfessionalLabel =
    professionalOptions.find((item) => item.id === professional)?.label ?? copy.noPreferenceLabel;
  const selectedTimeSlotLabel = timeSlots.find((item) => item.id === timeSlot)?.label ?? "-";
  const selectedFlexibilityLabel = flexibilityOptions.find((item) => item.id === flexibility)?.label;

  const whatsappHref = useMemo(() => {
    const message = buildPreBookingWhatsappMessage(
      {
        name: name.trim(),
        phone: phone.trim() || undefined,
        treatment,
        professional: selectedProfessionalLabel,
        preferredDates: cleanedPreferredDates,
        timeSlot: selectedTimeSlotLabel,
        flexibilityLabel: selectedFlexibilityLabel,
        note: note.trim() || undefined,
      },
      locale,
    );

    return buildWhatsappHref(whatsappNumber, message);
  }, [
    cleanedPreferredDates,
    locale,
    name,
    note,
    phone,
    selectedFlexibilityLabel,
    selectedProfessionalLabel,
    selectedTimeSlotLabel,
    treatment,
    whatsappNumber,
  ]);

  function updateDate(index: number, value: string) {
    setPreferredDates((current) => current.map((item, itemIndex) => (itemIndex === index ? value : item)));
  }

  function addDateInput() {
    setPreferredDates((current) => (current.length >= 4 ? current : [...current, ""]));
  }

  function removeDateInput(index: number) {
    setPreferredDates((current) => {
      if (current.length === 1) {
        return [""];
      }

      return current.filter((_, itemIndex) => itemIndex !== index);
    });
  }

  function handleSubmit() {
    setShowErrors(true);

    if (!canSubmit) {
      return;
    }

    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  }

  return (
    <article className={cn("surface-card rounded-[1.4rem] px-5 py-5 sm:px-6", className)}>
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
        {copy.badge}
      </p>
      <h3 className="mt-2 text-[clamp(1.3rem,2.4vw,1.9rem)] leading-[1.03] font-semibold tracking-[-0.02em] text-[color:var(--color-foreground)]">
        {copy.title}
      </h3>
      <p className="mt-2 max-w-[54rem] text-[0.86rem] leading-6 text-[color:var(--color-muted)]">{copy.description}</p>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <label className="space-y-1.5 lg:col-span-2">
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
            {copy.treatmentLabel}
          </span>
          <select value={treatment} onChange={(event) => setTreatment(event.target.value)} className={inputClasses}>
            <option value="">{copy.selectPlaceholder}</option>
            {uniqueTreatments.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {showErrors && fieldErrors.treatment ? (
            <p className="text-[0.74rem] text-[#7b2f4f]">{fieldErrors.treatment}</p>
          ) : null}
        </label>

        <div className="space-y-2 lg:col-span-2">
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
            {copy.preferredDatesLabel}
          </span>

          <div className="grid gap-2 sm:grid-cols-2">
            {preferredDates.map((value, index) => (
              <div key={`${index}-${value}`} className="flex gap-2">
                <input
                  type="date"
                  value={value}
                  onChange={(event) => updateDate(index, event.target.value)}
                  className={cn(inputClasses, "flex-1")}
                  aria-label={`${copy.preferredDatesLabel} ${index + 1}`}
                  placeholder={copy.datePlaceholder}
                />
                <button
                  type="button"
                  onClick={() => removeDateInput(index)}
                  className="inline-flex h-11 items-center justify-center rounded-[0.9rem] border border-[color:var(--color-line)] px-3 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)] transition-colors duration-200 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
                >
                  {copy.removeDateLabel}
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={addDateInput}
              disabled={preferredDates.length >= 4}
              className="inline-flex h-9 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-[border-color,color,transform] duration-200 hover:-translate-y-px hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)] disabled:cursor-not-allowed disabled:opacity-45"
            >
              {copy.addDateLabel}
            </button>

            <select value={flexibility} onChange={(event) => setFlexibility(event.target.value)} className={cn(inputClasses, "h-9 w-auto min-w-56 text-[0.78rem]")}>
              {flexibilityOptions.map((item) => (
                <option key={item.label} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <p className="text-[0.75rem] text-[color:var(--color-muted)]">{copy.flexibilityLabel}</p>
          {showErrors && fieldErrors.dates ? <p className="text-[0.74rem] text-[#7b2f4f]">{fieldErrors.dates}</p> : null}
        </div>

        <label className="space-y-1.5">
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
            {copy.timeSlotLabel}
          </span>
          <select value={timeSlot} onChange={(event) => setTimeSlot(event.target.value)} className={inputClasses}>
            <option value="">{copy.selectPlaceholder}</option>
            {timeSlots.map((slot) => (
              <option key={slot.id} value={slot.id}>
                {slot.label}
              </option>
            ))}
          </select>
          {showErrors && fieldErrors.timeSlot ? <p className="text-[0.74rem] text-[#7b2f4f]">{fieldErrors.timeSlot}</p> : null}
        </label>

        <label className="space-y-1.5">
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
            {copy.professionalLabel}
          </span>
          <select value={professional} onChange={(event) => setProfessional(event.target.value)} className={inputClasses}>
            {professionalOptions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1.5">
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
            {copy.nameLabel}
          </span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={inputClasses}
            placeholder="Tu nombre"
          />
          {showErrors && fieldErrors.name ? <p className="text-[0.74rem] text-[#7b2f4f]">{fieldErrors.name}</p> : null}
        </label>

        <label className="space-y-1.5">
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
            {copy.phoneLabel}
          </span>
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className={inputClasses}
            placeholder="+376..."
          />
          {showErrors && fieldErrors.phone ? <p className="text-[0.74rem] text-[#7b2f4f]">{fieldErrors.phone}</p> : null}
        </label>

        <label className="space-y-1.5 lg:col-span-2">
          <span className="text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)]">
            {copy.noteLabel}
          </span>
          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            rows={3}
            className={cn(inputClasses, "h-auto resize-y py-3")}
            placeholder={copy.notePlaceholder}
          />
        </label>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:items-start">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-pill)] border border-transparent bg-[color:var(--color-brand)] px-6 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-px hover:bg-[color:var(--color-brand-strong)] hover:shadow-[0_24px_44px_-30px_rgba(55,26,40,0.78)] disabled:cursor-not-allowed disabled:opacity-55"
        >
          {copy.ctaLabel}
        </button>

        <div className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-3">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-accent)]">
            {copy.previewLabel}
          </p>
          <p className="mt-1 text-[0.8rem] leading-6 text-[color:var(--color-muted)]">
            {name || "-"} · {treatment || "-"} · {selectedProfessionalLabel}
          </p>
          <p className="text-[0.8rem] leading-6 text-[color:var(--color-muted)]">
            {selectedTimeSlotLabel} · {cleanedPreferredDates.length ? `${cleanedPreferredDates.length} día(s)` : "Sin día exacto"}
          </p>
        </div>
      </div>

      <p className="mt-3 text-[0.78rem] leading-6 text-[color:var(--color-muted)]">
        {showErrors && !canSubmit ? copy.validationHint : copy.helperText}
      </p>
    </article>
  );
}
