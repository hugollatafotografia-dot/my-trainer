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
  namePlaceholder: string;
  phonePlaceholder: string;
  previewNoExactDay: string;
  previewDaysSuffix: string;
  invalidPhone: string;
  invalidName: string;
  invalidTreatment: string;
  invalidDates: string;
  invalidTimeSlot: string;
};

const copyByLocale: Record<Locale, FormCopy> = {
  es: {
    badge: "Pre-reserva asistida",
    title: "Prepara tu solicitud y envíala por WhatsApp",
    description:
      "Indica motivo, disponibilidad y profesional si lo deseas. El equipo revisará la agenda y te confirmará el hueco real para diagnóstico o tratamiento.",
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
    helperText: "No es una confirmación automática. Primero revisamos la agenda y después te confirmamos disponibilidad real.",
    previewLabel: "Resumen de solicitud",
    validationHint: "Completa motivo o tratamiento, nombre, día preferido y franja horaria.",
    noPreferenceLabel: "Sin preferencia",
    selectPlaceholder: "Selecciona una opción",
    datePlaceholder: "Selecciona fecha",
    namePlaceholder: "Tu nombre",
    phonePlaceholder: "+376...",
    previewNoExactDay: "Sin día exacto",
    previewDaysSuffix: "día(s)",
    invalidPhone: "El teléfono parece incompleto.",
    invalidName: "Introduce tu nombre.",
    invalidTreatment: "Selecciona un tratamiento.",
    invalidDates: "Indica al menos un día o una ventana de flexibilidad.",
    invalidTimeSlot: "Selecciona una franja horaria.",
  },
  ca: {
    badge: "Pre-reserva assistida",
    title: "Prepara la teva sollicitud i envia-la per WhatsApp",
    description:
      "Indica tractament o motiu, disponibilitat i professional si vols. L'equip revisara l'agenda i et confirmara el millor espai real per a valoracio o tractament.",
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
    helperText: "No es una confirmacio automatica. Primer revisem l'agenda i despres et confirmem la disponibilitat real.",
    previewLabel: "Resum de sollicitud",
    validationHint: "Completa tractament, nom, dia preferit i franja horaria.",
    noPreferenceLabel: "Sense preferencia",
    selectPlaceholder: "Selecciona una opcio",
    datePlaceholder: "Selecciona data",
    namePlaceholder: "El teu nom",
    phonePlaceholder: "+376...",
    previewNoExactDay: "Sense dia exacte",
    previewDaysSuffix: "dia(es)",
    invalidPhone: "El telefon sembla incomplet.",
    invalidName: "Introdueix el teu nom.",
    invalidTreatment: "Selecciona un tractament.",
    invalidDates: "Indica almenys un dia o una finestra de flexibilitat.",
    invalidTimeSlot: "Selecciona una franja horaria.",
  },
  fr: {
    badge: "Pre-reservation assistee",
    title: "Preparez votre demande et envoyez-la via WhatsApp",
    description:
      "Indiquez traitement ou motif, disponibilites et professionnelle si vous le souhaitez. L'equipe reverifie l'agenda et vous confirme le meilleur creneau reel pour l'evaluation ou le traitement.",
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
    helperText: "Ce n'est pas une confirmation automatique. Nous revoyons d'abord l'agenda puis nous confirmons les disponibilites reelles.",
    previewLabel: "Resume de la demande",
    validationHint: "Completez traitement, nom, jour prefere et plage horaire.",
    noPreferenceLabel: "Sans preference",
    selectPlaceholder: "Selectionnez une option",
    datePlaceholder: "Selectionnez une date",
    namePlaceholder: "Votre nom",
    phonePlaceholder: "+376...",
    previewNoExactDay: "Sans jour precis",
    previewDaysSuffix: "jour(s)",
    invalidPhone: "Le telephone semble incomplet.",
    invalidName: "Saisissez votre nom.",
    invalidTreatment: "Selectionnez un traitement.",
    invalidDates: "Indiquez au moins un jour ou une fenetre de flexibilite.",
    invalidTimeSlot: "Selectionnez une plage horaire.",
  },
  en: {
    badge: "Assisted pre-booking",
    title: "Prepare your request and send it via WhatsApp",
    description:
      "Share your treatment or reason, availability and preferred professional if relevant. The team reviews the agenda first and then confirms the best real slot for assessment or treatment.",
    treatmentLabel: "Treatment",
    preferredDatesLabel: "Preferred dates",
    addDateLabel: "Add another date",
    removeDateLabel: "Remove",
    flexibilityLabel: "Additional flexibility (optional)",
    timeSlotLabel: "Time slot",
    professionalLabel: "Professional",
    nameLabel: "Name",
    phoneLabel: "Phone (optional)",
    noteLabel: "Short note (optional)",
    notePlaceholder: "Example: first visit, pregnancy, sensitive skin, afternoons only...",
    ctaLabel: "Send request via WhatsApp",
    helperText: "This is not an automatic confirmation. We review the agenda first and then confirm real availability.",
    previewLabel: "Request summary",
    validationHint: "Complete treatment, name, a preferred date and a time slot.",
    noPreferenceLabel: "No preference",
    selectPlaceholder: "Select an option",
    datePlaceholder: "Select date",
    namePlaceholder: "Your name",
    phonePlaceholder: "+376...",
    previewNoExactDay: "No exact date",
    previewDaysSuffix: "day(s)",
    invalidPhone: "The phone number seems incomplete.",
    invalidName: "Enter your name.",
    invalidTreatment: "Select a treatment.",
    invalidDates: "Add at least one date or a flexibility window.",
    invalidTimeSlot: "Select a time slot.",
  },
  uk: {
    badge: "Керована пре-бронь",
    title: "Підготуйте запис і надішліть його через WhatsApp",
    description:
      "Оберіть процедуру, доступність і спеціаліста менш ніж за хвилину. Команда лише підтвердить реальний слот у графіку.",
    treatmentLabel: "Процедура",
    preferredDatesLabel: "Бажані дати",
    addDateLabel: "Додати ще дату",
    removeDateLabel: "Видалити",
    flexibilityLabel: "Додаткова гнучкість (необов'язково)",
    timeSlotLabel: "Часовий слот",
    professionalLabel: "Спеціаліст",
    nameLabel: "Ім'я",
    phoneLabel: "Телефон (необов'язково)",
    noteLabel: "Коротка нотатка (необов'язково)",
    notePlaceholder: "Наприклад: перший візит, чутлива шкіра, тільки після обіду...",
    ctaLabel: "Надіслати запит у WhatsApp",
    helperText: "Це не автоматичне підтвердження. Ми відповімо з реальною доступністю.",
    previewLabel: "Підсумок запиту",
    validationHint: "Заповніть процедуру, ім'я, бажану дату і часовий слот.",
    noPreferenceLabel: "Без переваг",
    selectPlaceholder: "Оберіть варіант",
    datePlaceholder: "Оберіть дату",
    namePlaceholder: "Ваше ім'я",
    phonePlaceholder: "+376...",
    previewNoExactDay: "Без точної дати",
    previewDaysSuffix: "дн.",
    invalidPhone: "Схоже, номер телефону неповний.",
    invalidName: "Вкажіть ваше ім'я.",
    invalidTreatment: "Оберіть процедуру.",
    invalidDates: "Вкажіть хоча б одну дату або вікно гнучкості.",
    invalidTimeSlot: "Оберіть часовий слот.",
  },
  ru: {
    badge: "Управляемая пре-запись",
    title: "Подготовьте запись и отправьте её через WhatsApp",
    description:
      "Выберите процедуру, доступность и специалиста менее чем за минуту. Команде останется только подтвердить реальный слот в графике.",
    treatmentLabel: "Процедура",
    preferredDatesLabel: "Предпочтительные даты",
    addDateLabel: "Добавить еще дату",
    removeDateLabel: "Удалить",
    flexibilityLabel: "Дополнительная гибкость (необязательно)",
    timeSlotLabel: "Временной слот",
    professionalLabel: "Специалист",
    nameLabel: "Имя",
    phoneLabel: "Телефон (необязательно)",
    noteLabel: "Краткая заметка (необязательно)",
    notePlaceholder: "Например: первый визит, чувствительная кожа, только после обеда...",
    ctaLabel: "Отправить запрос в WhatsApp",
    helperText: "Это не автоматическое подтверждение. Мы ответим с реальной доступностью.",
    previewLabel: "Сводка запроса",
    validationHint: "Заполните процедуру, имя, предпочтительную дату и временной слот.",
    noPreferenceLabel: "Без предпочтений",
    selectPlaceholder: "Выберите вариант",
    datePlaceholder: "Выберите дату",
    namePlaceholder: "Ваше имя",
    phonePlaceholder: "+376...",
    previewNoExactDay: "Без точной даты",
    previewDaysSuffix: "дн.",
    invalidPhone: "Похоже, номер телефона неполный.",
    invalidName: "Введите ваше имя.",
    invalidTreatment: "Выберите процедуру.",
    invalidDates: "Укажите хотя бы одну дату или окно гибкости.",
    invalidTimeSlot: "Выберите временной слот.",
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
  en: [
    { id: "eli", label: "Eli" },
    { id: "jaquie", label: "Jaquie" },
    { id: "karen", label: "Karen" },
    { id: "sin-preferencia", label: "No preference" },
  ],
  uk: [
    { id: "eli", label: "Eli" },
    { id: "jaquie", label: "Jaquie" },
    { id: "karen", label: "Karen" },
    { id: "sin-preferencia", label: "Без переваг" },
  ],
  ru: [
    { id: "eli", label: "Eli" },
    { id: "jaquie", label: "Jaquie" },
    { id: "karen", label: "Karen" },
    { id: "sin-preferencia", label: "Без предпочтений" },
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
  en: [
    { id: "morning", label: "Morning" },
    { id: "midday", label: "Midday" },
    { id: "afternoon", label: "Afternoon" },
    { id: "late-day", label: "Late day" },
  ],
  uk: [
    { id: "morning", label: "Ранок" },
    { id: "midday", label: "Опівдні" },
    { id: "afternoon", label: "Після обіду" },
    { id: "late-day", label: "Пізній час" },
  ],
  ru: [
    { id: "morning", label: "Утро" },
    { id: "midday", label: "Полдень" },
    { id: "afternoon", label: "После обеда" },
    { id: "late-day", label: "Позднее время" },
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
  en: [
    { id: "", label: "No additional flexibility" },
    { id: "plus-minus-3", label: "± 3 days" },
    { id: "1-2-semanas", label: "Within 1-2 weeks" },
    { id: "este-mes", label: "Any day this month" },
    { id: "mes-proximo", label: "Any day next month" },
  ],
  uk: [
    { id: "", label: "Без додаткової гнучкості" },
    { id: "plus-minus-3", label: "± 3 дні" },
    { id: "1-2-semanas", label: "Протягом 1-2 тижнів" },
    { id: "este-mes", label: "Будь-який день цього місяця" },
    { id: "mes-proximo", label: "Будь-який день наступного місяця" },
  ],
  ru: [
    { id: "", label: "Без дополнительной гибкости" },
    { id: "plus-minus-3", label: "± 3 дня" },
    { id: "1-2-semanas", label: "В течение 1-2 недель" },
    { id: "este-mes", label: "Любой день этого месяца" },
    { id: "mes-proximo", label: "Любой день следующего месяца" },
  ],
};

const inputClasses =
  "min-h-12 w-full rounded-[0.9rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 text-base text-[color:var(--color-foreground)] transition-[border-color,box-shadow] duration-200 placeholder:text-[color:var(--color-muted)]/70 focus-visible:border-[color:var(--color-brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand)]/22 sm:text-[0.9rem]";

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
    <article className={cn("surface-card rounded-[1.4rem] px-4 py-5 sm:px-6", className)}>
      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--color-accent)]">
        {copy.badge}
      </p>
      <h3 className="mt-2 text-[clamp(1.3rem,2.4vw,1.9rem)] leading-[1.03] font-semibold tracking-[-0.02em] text-[color:var(--color-foreground)]">
        {copy.title}
      </h3>
      <p className="mt-2 max-w-[54rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{copy.description}</p>

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
              <div key={`${index}-${value}`} className="flex items-center gap-2">
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
                  className="inline-flex min-h-12 items-center justify-center rounded-[0.9rem] border border-[color:var(--color-line)] px-3 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-muted)] transition-colors duration-200 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
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
              className="inline-flex h-10 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-3.5 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-[border-color,color,transform] duration-200 hover:-translate-y-px hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)] disabled:cursor-not-allowed disabled:opacity-45"
            >
              {copy.addDateLabel}
            </button>

            <select
              value={flexibility}
              onChange={(event) => setFlexibility(event.target.value)}
              className={cn(inputClasses, "min-h-10 w-full text-[0.86rem] sm:w-auto sm:min-w-56 sm:text-[0.78rem]")}
            >
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
            autoComplete="name"
            className={inputClasses}
            placeholder={copy.namePlaceholder}
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
            autoComplete="tel"
            className={inputClasses}
            placeholder={copy.phonePlaceholder}
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
          className="inline-flex min-h-12 w-full items-center justify-center rounded-[var(--radius-pill)] border border-transparent bg-[color:var(--color-brand)] px-6 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white transition-[background-color,transform,box-shadow] duration-200 hover:-translate-y-px hover:bg-[color:var(--color-brand-strong)] hover:shadow-[0_24px_44px_-30px_rgba(55,26,40,0.78)]"
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
            {selectedTimeSlotLabel} ·{" "}
            {cleanedPreferredDates.length ? `${cleanedPreferredDates.length} ${copy.previewDaysSuffix}` : copy.previewNoExactDay}
          </p>
        </div>
      </div>

      <p className="mt-3 text-[0.78rem] leading-6 text-[color:var(--color-muted)]">
        {showErrors && !canSubmit ? copy.validationHint : copy.helperText}
      </p>
    </article>
  );
}
