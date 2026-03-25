export type HomeTrustMetric = {
  id: string;
  label: string;
  value?: string;
};

export type HomeTestimonial = {
  id: string;
  name: string;
  age?: number;
  concern: string;
  quote?: string;
  result?: string;
};

export type HomeConversionFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const homeTrustSettings = {
  showMetricValues: false,
};

export const homeTrustMetrics: HomeTrustMetric[] = [
  {
    id: "reviews",
    label: "Reseñas de clientas verificables",
  },
  {
    id: "experience",
    label: "Años de experiencia del equipo",
  },
  {
    id: "protocols",
    label: "Protocolos personalizados activos",
  },
  {
    id: "followup",
    label: "Seguimiento post-tratamiento",
  },
];

export const homeTestimonials: HomeTestimonial[] = [
  {
    id: "testimonial-1",
    name: "Cliente",
    concern: "Tratamiento facial",
  },
  {
    id: "testimonial-2",
    name: "Cliente",
    concern: "Tratamiento corporal",
  },
  {
    id: "testimonial-3",
    name: "Cliente",
    concern: "Piel sensible",
  },
  {
    id: "testimonial-4",
    name: "Cliente",
    concern: "Programa de mantenimiento",
  },
  {
    id: "testimonial-5",
    name: "Cliente",
    concern: "Contorno de ojos",
  },
];

export const homeResultSection = {
  beforeLabel: "Antes",
  afterLabel: "Después",
  progressTitle: "Seguimiento profesional",
  progressDescription: "Comparativa disponible según autorización del caso.",
  notes: [
    "Espacio preparado para casos reales con consentimiento firmado.",
    "Misma iluminación y encuadre para comparativas consistentes.",
    "Fecha, protocolo y evolución visibles cuando el caso esté autorizado.",
  ],
};

export const homeBookingValue = {
  title: "Valoración facial (30 min)",
  durationLabel: "Duración orientativa",
  durationValue: "30 minutos",
  includesTitle: "Qué incluye",
  includes: [
    "Diagnóstico inicial del estado de la piel",
    "Identificación de prioridades y necesidades",
    "Recomendación de tratamiento personalizada",
  ],
  obtainsTitle: "Qué obtienes al salir",
  obtains: [
    "Propuesta clara de siguiente paso",
    "Estimación de sesiones según tu caso",
    "Plan inicial explicado en consulta",
  ],
  investmentLabel: "Inversión",
  investmentText: "Precio comunicado antes de confirmar la cita.",
  slaLabel: "Confirmación",
  slaText: "Intentamos confirmar la cita el mismo día laborable, según horario de atención.",
  riskReduction: [
    "Sin compromiso de tratamiento.",
    "Decides después de la valoración.",
  ],
  urgencyLabel: "Agenda semanal",
  urgencyText: "Citas de valoración limitadas por día.",
};

export const homeBookingFlowSteps = [
  {
    id: "01",
    title: "Reservas",
    description: "Envías la solicitud de cita con el horario que te encaja.",
  },
  {
    id: "02",
    title: "Te contactamos",
    description:
      "Confirmamos disponibilidad y resolvemos dudas previas a la visita.",
  },
  {
    id: "03",
    title: "Acudes a valoración",
    description: "Realizamos la valoración y te explicamos el plan recomendado.",
  },
];

export const homeConversionFaq: HomeConversionFaqItem[] = [
  {
    id: "faq-dolor",
    question: "¿Duele?",
    answer:
      "Trabajamos con técnicas no invasivas. La sensación depende del tratamiento y se explica antes de empezar.",
  },
  {
    id: "faq-sesiones",
    question: "¿Cuántas sesiones necesito?",
    answer:
      "Depende de tu caso. Tras la valoración te damos una estimación orientativa de sesiones.",
  },
  {
    id: "faq-recuperacion",
    question: "¿Hay tiempo de recuperación?",
    answer:
      "En la mayoría de protocolos no invasivos el retorno es inmediato o con cuidados mínimos.",
  },
  {
    id: "faq-cancelacion",
    question: "¿Puedo cancelar la cita?",
    answer:
      "Sí. Puedes solicitar cambio o cancelación con antelación desde el canal de contacto.",
  },
];
