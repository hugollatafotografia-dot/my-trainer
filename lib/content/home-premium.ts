import type { Locale } from "@/lib/i18n/config";

export type HomeHeroContent = {
  eyebrow: string;
  titleLead: string;
  titleStrong: string;
  titleTail: string;
  description: string;
  support: string;
  highlights: string[];
  locationChip: string;
  locationLabel: string;
  addressLine: string;
  floorLine: string;
  hoursLine: string;
  mapCta: string;
  routeCta: string;
};

export type HomeModalBlock = {
  title: string;
  lines: string[];
};

export type HomeModalItem = {
  id: string;
  title: string;
  summary: string;
  ctaLabel: string;
  modalLabel: string;
  modalTitle: string;
  modalIntro: string;
  blocks: HomeModalBlock[];
};

export type HomeMethodStage = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  signals: string[];
};

export type HomeTeamMember = {
  id: string;
  name: string;
  age: string;
  role: string;
  specialty: string;
  excerpt: string;
  image: string;
  alt: string;
  imagePosition?: string;
  ctaLabel: string;
  modalLabel: string;
  modalTitle: string;
  motivation: string;
  experience: string[];
  studies: string[];
  treatments: string[];
  approach: string[];
  languages: string[];
};

export type HomeTeamModalLabels = {
  years: string;
  profile: string;
  experience: string;
  studies: string;
  treatments: string;
  approach: string;
  languages: string;
};

export type HomeProcessStep = {
  id: string;
  title: string;
  description: string;
  detail: string;
};

export type HomeFaqItem = {
  id: string;
  question: string;
  summary: string;
  ctaLabel: string;
  modalLabel: string;
  modalTitle: string;
  answerLead: string;
  blocks: HomeModalBlock[];
};

export type HomePremiumContent = {
  closeModalLabel: string;
  hero: HomeHeroContent;
  firstVisitLabel: string;
  firstVisitTitle: string;
  firstVisitDescription: string;
  firstVisitItems: HomeModalItem[];
  methodLabel: string;
  methodTitle: string;
  methodDescription: string;
  methodStages: HomeMethodStage[];
  treatmentsLabel: string;
  treatmentsTitle: string;
  treatmentsDescription: string;
  treatmentsBridge: string;
  teamLabel: string;
  teamTitle: string;
  teamDescription: string;
  teamMembers: HomeTeamMember[];
  teamModalLabels: HomeTeamModalLabels;
  processLabel: string;
  processTitle: string;
  processDescription: string;
  processSteps: HomeProcessStep[];
  faqLabel: string;
  faqTitle: string;
  faqDescription: string;
  faqItems: HomeFaqItem[];
};

const sharedTeam: HomeTeamMember[] = [
  {
    id: "eli",
    name: "Eli",
    age: "41",
    role: "Gerente",
    specialty: "Dirección de centro, diagnóstico y planificación de tratamiento",
    excerpt: "Coordina la calidad del servicio y valida cada plan de tratamiento antes de su inicio.",
    image: "/images/pages/hero/equipo/equipo-eli.png",
    alt: "Eli, gerente del centro",
    imagePosition: "52% 38%",
    ctaLabel: "Saber más",
    modalLabel: "Equipo",
    modalTitle: "Eli - Gerente",
    motivation:
      "Trabajo para que cada clienta salga con un plan claro, una expectativa realista y una experiencia cuidada de principio a fin.",
    experience: [
      "Más de 14 años en gestion de centros de estética y coordinacion de equipos.",
      "Supervision de protocolos faciales, corporales y depilación láser diodo.",
    ],
    studies: [
      "Grado superior en Estética Integral y Bienestar.",
      "Formacion en gestion de experiencia de cliente y operativa de centro.",
    ],
    treatments: ["Diagnostico inicial", "Plan recomendado", "Revision de seguimiento y continuidad"],
    approach: [
      "Prioriza explicaciones claras para que la clienta decida con seguridad.",
      "Coordina agenda y fases para mantener continuidad real del tratamiento.",
    ],
    languages: ["Español", "Català", "Francés"],
  },
  {
    id: "jaquie",
    name: "Jaquie",
    age: "33",
    role: "Esteticien",
    specialty: "Laser diodo, radiofrecuencia y protocolos faciales avanzados",
    excerpt: "Especialista en ejecutar tratamientos avanzados con trazabilidad técnica y confort.",
    image: "/images/pages/hero/equipo/equipo-jaquie-20260326.png",
    alt: "Jaquie, esteticien del centro",
    imagePosition: "60% 34%",
    ctaLabel: "Saber más",
    modalLabel: "Equipo",
    modalTitle: "Jaquie - Esteticien",
    motivation:
      "Me gusta combinar precision técnica y cercania para que cada sesión sea efectiva y fácil de seguir para la clienta.",
    experience: [
      "9 años en depilación láser diodo y protocolos de tecnología estética avanzada.",
      "Experiencia en trabajo por fases y seguimiento por respuesta cutanea.",
    ],
    studies: [
      "Técnico superior en Estética Integral y aparatologia.",
      "Actualizacion continuada en protocolos de energia y radiofrecuencia.",
    ],
    treatments: ["Depilacion laser diodo", "Radiofrecuencia facial", "Hidrodermoabrasion avanzada"],
    approach: [
      "Ajusta parametros por zona y tolerancia para evitar sobretratamiento.",
      "Explica pre y post sesión para mejorar resultados y tranquilidad.",
    ],
    languages: ["Español", "Català", "Francés"],
  },
  {
    id: "karen",
    name: "Karen",
    age: "36",
    role: "Esteticien",
    specialty: "Estética regenerativa y calidad de piel",
    excerpt: "Desarrolla protocolos de recuperacion cutanea y mantenimiento de calidad de piel.",
    image: "/images/pages/hero/equipo/equipo-karen-20260326.png",
    alt: "Karen, esteticien del centro",
    imagePosition: "56% 42%",
    ctaLabel: "Saber más",
    modalLabel: "Equipo",
    modalTitle: "Karen - Esteticien",
    motivation:
      "Mi foco es recuperar confort cutaneo y construir resultados sostenibles, especialmente en pieles sensibles o reactivas.",
    experience: [
      "10 años en protocolos regenerativos, barrera cutanea y mejora de textura.",
      "Experiencia en acompañamiento de casos con sensibilidad o post-tratamiento.",
    ],
    studies: [
      "Formacion en dermocosmetica aplicada y fisiologia cutanea.",
      "Especializacion en técnicas no invasivas de regeneracion.",
    ],
    treatments: ["Protocolo barrera cutanea", "Bioestimulacion LED", "Rejuvenecimiento periocular regenerativo"],
    approach: [
      "Prioriza progresion controlada para respetar la tolerancia de la piel.",
      "Combina cabina y rutina en casa para consolidar resultados.",
    ],
    languages: ["Español", "Francés"],
  },
];

const sharedFaqs: HomeFaqItem[] = [
  {
    id: "faq-valoracion-coste",
    question: "La valoración inicial tiene coste?",
    summary: "Te explicamos en que casos es informativa y cuando aplica reserva de tratamiento.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Valoración inicial y coste",
    answerLead:
      "La primera visita se usa para diagnosticar y orientar. La condición económica exacta se confirma en recepción según el plan recomendado.",
    blocks: [
      {
        title: "Qué incluye la valoración",
        lines: [
          "Revision de necesidad principal, historial y tolerancia.",
          "Propuesta de plan por fases con orden de prioridades.",
        ],
      },
      {
        title: "Cómo se comunica",
        lines: [
          "Antes de confirmar cualquier sesión se detallan condiciones de cita y presupuesto orientativo.",
        ],
      },
    ],
  },
  {
    id: "faq-laser-sesiones",
    question: "Cuántas sesiones de láser suelen ser necesarias?",
    summary: "Depende de zona, fototipo y respuesta biológica.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Número orientativo de sesiones de láser",
    answerLead:
      "No hay una cifra única para todas las clientas. Se trabaja por bloques y se ajusta según evolución real.",
    blocks: [
      {
        title: "Factores que influyen",
        lines: ["Zona tratada", "Tipo de vello", "Ritmo hormonal", "Regularidad entre sesiones"],
      },
      {
        title: "Cómo se decide",
        lines: ["Se revisa respuesta por zona en cada visita y se ajustan intervalos para mantener eficacia."],
      },
    ],
  },
  {
    id: "faq-laser-duele",
    question: "¿Duele la depilación láser?",
    summary: "La sensacion es tolerable y se adapta intensidad.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Sensacion durante depilación láser",
    answerLead:
      "Puede notarse calor o pinchazo breve, pero se trabaja con parametros ajustados para mantener confort.",
    blocks: [
      {
        title: "Durante la sesión",
        lines: [
          "Se comprueba tolerancia al inicio.",
          "Se ajusta energia por zona para evitar exceso de molestia.",
        ],
      },
      {
        title: "Despues",
        lines: ["Puede aparecer enrojecimiento leve transitorio.", "Recibiras pautas de cuidado post-sesión."],
      },
    ],
  },
  {
    id: "faq-verano",
    question: "Puedo hacerme tratamientos en verano?",
    summary: "Si, con seleccion de protocolo y fotoproteccion estricta.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Tratamientos en temporada de verano",
    answerLead:
      "Es posible mantener tratamiento en verano, pero se priorizan protocolos compatibles y control de exposicion solar.",
    blocks: [
      {
        title: "Qué se prioriza",
        lines: ["Protocolos de baja agresion", "Control de tiempos de exposicion", "Cuidado de barrera cutanea"],
      },
      {
        title: "Condiciones",
        lines: ["Fotoprotección diaria", "Evitar sol directo pre y post sesión según pauta indicada."],
      },
    ],
  },
  {
    id: "faq-no-se-por-donde-empezar",
    question: "¿Qué tratamiento necesito si no sé por dónde empezar?",
    summary: "La primera visita se disena precisamente para esto.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Cómo elegimos tratamiento cuando hay dudas",
    answerLead:
      "No necesitas llegar con una decision cerrada. El centro define contigo un plan priorizado y realista.",
    blocks: [
      {
        title: "Metodo de decision",
        lines: [
          "Diagnostico del punto de partida.",
          "Objetivo principal y objetivo secundario.",
          "Plan por fases según impacto y continuidad posible.",
        ],
      },
      {
        title: "Resultado de la visita",
        lines: ["Saldras con un orden claro de tratamiento y tiempos orientativos."],
      },
    ],
  },
  {
    id: "faq-duracion-cita",
    question: "¿Cuánto dura una cita?",
    summary: "Segun tratamiento, entre 30 y 70 minutos de media.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Duracion habitual de las citas",
    answerLead:
      "Cada ficha de tratamiento indica una duración orientativa y puede variar según zona o fase del plan.",
    blocks: [
      {
        title: "Rango orientativo",
        lines: ["Citas cortas: 30-40 min", "Citas medias: 45-55 min", "Citas amplias: 55-70 min"],
      },
      {
        title: "Planificacion",
        lines: ["La agenda se confirma por WhatsApp con hora de inicio y recomendaciones previas."],
      },
    ],
  },
  {
    id: "faq-whatsapp",
    question: "Puedo reservar por WhatsApp?",
    summary: "Si, es uno de los canales principales del centro.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Reservas por WhatsApp",
    answerLead:
      "Puedes abrir conversación por WhatsApp para solicitar disponibilidad, resolver dudas y confirmar tu cita.",
    blocks: [
      {
        title: "Qué debes enviar",
        lines: ["Objetivo o tratamiento", "Franja horaria preferida", "Si es primera visita o seguimiento"],
      },
      {
        title: "Respuesta del centro",
        lines: ["Se propone hueco de agenda y se confirma con indicaciones pre-cita."],
      },
    ],
  },
  {
    id: "faq-confirmacion-cita",
    question: "¿Cómo se confirma la cita?",
    summary: "Con mensaje de confirmación y recordatorio previo.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Proceso de confirmación",
    answerLead:
      "Cada reserva queda confirmada por canal directo y con los detalles operativos necesarios para asistir sin dudas.",
    blocks: [
      {
        title: "Flujo de confirmación",
        lines: [
          "Solicitud de cita.",
          "Validacion de disponibilidad.",
          "Mensaje de confirmación final con hora y recomendaciones.",
        ],
      },
      {
        title: "Recordatorio",
        lines: ["Se realiza recordatorio previo cuando corresponde según tipo de cita."],
      },
    ],
  },
  {
    id: "faq-profesional",
    question: "¿Qué profesional me atiende?",
    summary: "Se asigna por especialidad y tipo de tratamiento.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Asignacion de profesional",
    answerLead:
      "La asignacion la realiza el centro para que cada caso lo atienda la profesional más adecuada por protocolo.",
    blocks: [
      {
        title: "Criterio de asignacion",
        lines: ["Tipo de tratamiento", "Fase del plan", "Seguimiento previo de la clienta"],
      },
      {
        title: "Continuidad",
        lines: ["Siempre que sea posible se mantiene continuidad de profesional para trazabilidad."],
      },
    ],
  },
  {
    id: "faq-cambios-cancelacion",
    question: "Se puede cambiar o cancelar una cita?",
    summary: "Si, avisando con antelacion para reorganizar agenda.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Cambios y cancelaciones",
    answerLead:
      "El centro permite reprogramar citas dentro de condiciones razonables para mantener la continuidad del plan.",
    blocks: [
      {
        title: "Cómo hacerlo",
        lines: ["Contacta por WhatsApp en cuanto sepas que no podrás asistir."],
      },
      {
        title: "Importancia",
        lines: ["Avisar con margen permite ofrecer alternativas sin romper tu secuencia de tratamiento."],
      },
    ],
  },
  {
    id: "faq-categorias",
    question: "¿Qué diferencia hay entre estética normal, avanzada y regenerativa?",
    summary: "Cada categoria responde a una intensidad y objetivo distinto.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Diferencia entre categorías de tratamiento",
    answerLead:
      "La cartera se organiza por nivel de intervencion y por momento del proceso de la piel.",
    blocks: [
      {
        title: "Estética normal",
        lines: ["Mantenimiento, limpieza y mejora visible de baja intensidad."],
      },
      {
        title: "Estética avanzada y regenerativa",
        lines: [
          "Avanzada: tecnología para objetivos de precision.",
          "Regenerativa: recuperación de calidad cutánea y continuidad.",
        ],
      },
    ],
  },
  {
    id: "faq-combinacion",
    question: "Puedo combinar varios tratamientos?",
    summary: "Si, pero con orden y criterio de tolerancia.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Combinacion de tratamientos",
    answerLead:
      "Combinar tratamientos es habitual, siempre que la secuencia este bien planteada y se respete la tolerancia de cada piel.",
    blocks: [
      {
        title: "Cómo se combina",
        lines: [
          "Se define tratamiento principal y complementario.",
          "Se distribuye en fases para no sobrecargar.",
        ],
      },
      {
        title: "Seguimiento",
        lines: ["Cada bloque se revisa antes de introducir nuevas combinaciones."],
      },
    ],
  },
];

const caFaqCopy: Record<string, { question: string; summary: string }> = {
  "faq-valoracion-coste": {
    question: "La valoracio inicial te cost?",
    summary: "T'expliquem quan es informativa i quan s'aplica la reserva de tractament.",
  },
  "faq-laser-sesiones": {
    question: "Quantes sessions de láser solen ser necessaries?",
    summary: "Depen de la zona, el fototip i la resposta biológica.",
  },
  "faq-laser-duele": {
    question: "Fa mal la depilacio laser?",
    summary: "La sensacio es tolerable i la intensitat s'ajusta.",
  },
  "faq-verano": {
    question: "Puc fer-me tractaments a l'estiu?",
    summary: "Si, amb seleccio de protocol i fotoproteccio estricta.",
  },
  "faq-no-se-por-donde-empezar": {
    question: "Quin tractament necessito si no se per on comencar?",
    summary: "La primera visita esta dissenyada precisament per aixo.",
  },
  "faq-duracion-cita": {
    question: "Quant dura una cita?",
    summary: "Segons el tractament, entre 30 i 70 minuts de mitjana.",
  },
  "faq-whatsapp": {
    question: "Puc reservar per WhatsApp?",
    summary: "Si, es un dels canals principals del centre.",
  },
  "faq-confirmacion-cita": {
    question: "Com es confirma la cita?",
    summary: "Amb missatge de confirmacio i recordatori previ.",
  },
  "faq-profesional": {
    question: "Quina professional m'atendra?",
    summary: "S'assigna segons especialitat i tipus de tractament.",
  },
  "faq-cambios-cancelacion": {
    question: "Es pot canviar o cancel-lar una cita?",
    summary: "Si, avisant amb antelacio per reorganitzar l'agenda.",
  },
  "faq-categorias": {
    question: "Quina diferencia hi ha entre estética normal, avancada i regenerativa?",
    summary: "Cada categoria respon a una intensitat i objectiu diferent.",
  },
  "faq-combinacion": {
    question: "Puc combinar diversos tractaments?",
    summary: "Si, pero amb ordre i criteri de tolerancia.",
  },
};

const frFaqCopy: Record<string, { question: string; summary: string }> = {
  "faq-valoracion-coste": {
    question: "L'evaluation initiale est-elle payante?",
    summary: "Nous precisons quand elle est informative et quand la reservation s'applique.",
  },
  "faq-laser-sesiones": {
    question: "Combien de seances laser sont generalement necessaires?",
    summary: "Cela depend de la zone, du phototype et de la reponse biologique.",
  },
  "faq-laser-duele": {
    question: "L'epilation laser fait-elle mal?",
    summary: "La sensation est tolerable et l'intensite est ajustee.",
  },
  "faq-verano": {
    question: "Puis-je faire des traitements en ete?",
    summary: "Oui, avec un protocole adapte et une photoprotection stricte.",
  },
  "faq-no-se-por-donde-empezar": {
    question: "Quel traitement choisir si je ne sais pas par ou commencer?",
    summary: "La premiere visite est justement prevue pour cela.",
  },
  "faq-duracion-cita": {
    question: "Combien de temps dure un rendez-vous?",
    summary: "Selon le traitement, entre 30 et 70 minutes en moyenne.",
  },
  "faq-whatsapp": {
    question: "Puis-je reserver via WhatsApp?",
    summary: "Oui, c'est l'un des canaux principaux du centre.",
  },
  "faq-confirmacion-cita": {
    question: "Comment le rendez-vous est-il confirme?",
    summary: "Par message de confirmation et rappel prealable.",
  },
  "faq-profesional": {
    question: "Quelle professionnelle me prendra en charge?",
    summary: "L'attribution se fait selon la specialite et le type de traitement.",
  },
  "faq-cambios-cancelacion": {
    question: "Peut-on modifier ou annuler un rendez-vous?",
    summary: "Oui, en prevenant a l'avance pour reorganiser l'agenda.",
  },
  "faq-categorias": {
    question: "Quelle différence entre esthétique classique, avancée et régénérative?",
    summary: "Chaque categorie correspond a une intensite et un objectif differents.",
  },
  "faq-combinacion": {
    question: "Puis-je combiner plusieurs traitements?",
    summary: "Oui, avec un ordre coherent et un critere de tolerance.",
  },
};

function buildLocalizedFaqs(
  locale: "ca" | "fr",
  copy: Record<string, { question: string; summary: string }>,
): HomeFaqItem[] {
  const ctaLabel = locale === "ca" ? "Saber-ne mes" : "En savoir plus";
  const detailsTitle = locale === "ca" ? "Detalls clau" : "Details cles";
  const detailsLineA =
    locale === "ca"
      ? "La recomanacio final es confirma durant la visita presencial."
      : "La recommandation finale est confirmee pendant la visite presentielle.";
  const detailsLineB =
    locale === "ca"
      ? "L'equip adapta el pla segons objectiu, agenda i tolerancia."
      : "L'equipe adapte le plan selon l'objectif, l'agenda et la tolerance.";

  return sharedFaqs.map((item) => {
    const localized = copy[item.id];

    if (!localized) {
      return item;
    }

    return {
      ...item,
      question: localized.question,
      summary: localized.summary,
      ctaLabel,
      modalTitle: localized.question,
      answerLead: localized.summary,
      blocks: [
        {
          title: detailsTitle,
          lines: [detailsLineA, detailsLineB],
        },
      ],
    };
  });
}

const esHome: HomePremiumContent = {
  closeModalLabel: "Cerrar",
  hero: {
    eyebrow: "Centros Ideal Andorra - Illa Carlemany",
    titleLead: "Depilacion laser diodo",
    titleStrong: "y estética avanzada",
    titleTail: "con protocolo profesional real.",
    description:
      "Primera visita de 30 minutos para diagnosticar, priorizar objetivos y definir un plan claro desde el primer dia.",
    support: "Centro en Escaldes-Engordany, con atención por agenda y seguimiento activo.",
    highlights: ["Diagnostico inicial", "Plan recomendado", "Seguimiento por fases"],
    locationChip: "Escaldes-Engordany · Illa Carlemany · 2a planta",
    locationLabel: "Ubicación operativa",
    addressLine: "Av. Carlemany, 70, AD700 Andorra",
    floorLine: "Centre Comercial Illa Carlemany - segunda planta",
    hoursLine: "Agenda gestionada por cita previa y confirmación por WhatsApp.",
    mapCta: "Abrir en Google Maps",
    routeCta: "Cómo llegar",
  },
  firstVisitLabel: "Primera visita",
  firstVisitTitle: "Una valoración que te deja decisiones claras, no dudas.",
  firstVisitDescription:
    "Convertimos la primera cita en un punto de control técnico-comercial: entendemos tu caso, ordenamos prioridades y definimos plan.",
  firstVisitItems: [
    {
      id: "diagnostico",
      title: "Diagnostico",
      summary: "Lectura profesional del estado actual de la piel o zona a tratar.",
      ctaLabel: "Saber más",
      modalLabel: "Primera visita",
      modalTitle: "Diagnostico inicial",
      modalIntro:
        "El diagnóstico no es una charla comercial: es una revisión estructurada para detectar necesidades reales y riesgos de sobretratamiento.",
      blocks: [
        {
          title: "Qué analizamos",
          lines: [
            "Estado cutaneo, tolerancia y antecedentes relevantes.",
            "Objetivo principal y urgencia real de cada zona.",
            "Compatibilidad con protocolos disponibles en centro.",
          ],
        },
        {
          title: "Qué obtiene la clienta",
          lines: [
            "Explicacion clara de lo que si conviene y lo que no conviene iniciar.",
            "Estimacion orientativa de tiempos y continuidad.",
          ],
        },
      ],
    },
    {
      id: "plan-recomendado",
      title: "Plan recomendado",
      summary: "Ruta por fases con orden de prioridades, frecuencia y seguimiento.",
      ctaLabel: "Saber más",
      modalLabel: "Primera visita",
      modalTitle: "Plan recomendado",
      modalIntro:
        "Definimos una propuesta personalizada con criterio operativo: fase inicial, fase de consolidacion y mantenimiento.",
      blocks: [
        {
          title: "Qué se tiene en cuenta",
          lines: [
            "Objetivo estetico principal y objetivos secundarios.",
            "Disponibilidad real de agenda y ritmo de sesiones sostenible.",
            "Respuesta esperable según tu perfil y tolerancia.",
          ],
        },
        {
          title: "Cómo se plantea",
          lines: [
            "Tratamientos priorizados por impacto y seguridad.",
            "Frecuencia orientativa y puntos de revisión.",
            "Recomendaciones de cuidado entre sesiones.",
          ],
        },
      ],
    },
  ],
  methodLabel: "Metodo",
  methodTitle: "Protocolo premium en cuatro fases operativas.",
  methodDescription:
    "Sustituimos frases vagas por proceso verificable: diagnóstico, ejecución, seguimiento y ajuste.",
  methodStages: [
    {
      id: "01",
      title: "Diagnostico y criterio",
      subtitle: "Definimos punto de partida real",
      description: "Analizamos estado actual, prioridad y margen de progresion.",
      signals: ["Historia de caso", "Objetivo principal", "Indicacion valida"],
    },
    {
      id: "02",
      title: "Diseno del plan",
      subtitle: "Ordenamos el tratamiento por etapas",
      description: "Secuenciamos técnicas y frecuencia sin sobrecargar la piel.",
      signals: ["Plan por fases", "Frecuencia orientativa", "Consentimiento informado"],
    },
    {
      id: "03",
      title: "Ejecucion controlada",
      subtitle: "Aplicamos con técnica y trazabilidad",
      description: "Registramos parametros de sesión para tomar decisiones en la siguiente visita.",
      signals: ["Checklist pre-sesión", "Registro técnico", "Cierre de cuidados"],
    },
    {
      id: "04",
      title: "Seguimiento y ajuste",
      subtitle: "Evolucion por evidencia",
      description: "Revisamos respuesta, ajustamos ritmo y consolidamos mantenimiento.",
      signals: ["Revision de progreso", "Ajuste de plan", "Continuidad"],
    },
  ],
  treatmentsLabel: "Tratamientos",
  treatmentsTitle: "Oferta amplia, ordenada y fácil de explorar.",
  treatmentsDescription:
    "Explora por categoria y abre cada ficha sin salir de la página para entender tiempos, objetivo y encaje.",
  treatmentsBridge: "Ver catálogo completo",
  teamLabel: "Equipo",
  teamTitle: "Tres profesionales, un mismo estándar de trabajo.",
  teamDescription:
    "Humanizamos la marca con perfiles reales, especialidades claras y enfoque de acompañamiento.",
  teamMembers: sharedTeam,
  teamModalLabels: {
    years: "años",
    profile: "Perfil profesional",
    experience: "Experiencia",
    studies: "Estudios",
    treatments: "Tratamientos que realiza",
    approach: "Enfoque con clientas",
    languages: "Idiomas",
  },
  processLabel: "Proceso",
  processTitle: "De la primera consulta a la reserva confirmada, sin fricción.",
  processDescription: "Cada paso tiene una accion clara para que la clienta entienda que esperar y cuando.",
  processSteps: [
    {
      id: "01",
      title: "Solicitud inicial",
      description: "Nos compartes objetivo, zona y franja horaria.",
      detail: "Puedes iniciar por WhatsApp o reserva web; priorizamos respuesta en horario operativo.",
    },
    {
      id: "02",
      title: "Preconfirmacion",
      description: "Validamos disponibilidad y resolvemos dudas previas.",
      detail: "Te enviamos condiciones de cita, preparación previa y canal de seguimiento.",
    },
    {
      id: "03",
      title: "Primera visita",
      description: "Diagnostico y plan recomendado dentro del centro.",
      detail: "Saldras con propuesta estructurada y próximos pasos definidos.",
    },
    {
      id: "04",
      title: "Reserva de tratamiento",
      description: "Confirmamos la siguiente cita según prioridad y agenda.",
      detail: "La continuidad se planifica por bloques para mantener ritmo y resultados sostenibles.",
    },
  ],
  faqLabel: "Preguntas frecuentes",
  faqTitle: "FAQs reales para decidir con seguridad antes de reservar.",
  faqDescription:
    "Resolvemos las dudas que más se repiten en primera visita y seguimiento para que el proceso sea claro desde el inicio.",
  faqItems: sharedFaqs,
};

const caHome: HomePremiumContent = {
  ...esHome,
  closeModalLabel: "Tancar",
  hero: {
    ...esHome.hero,
    eyebrow: "Centres Ideal Andorra - Illa Carlemany",
    titleLead: "Depilacio laser de diode",
    titleStrong: "i estètica avançada",
    titleTail: "amb protocol professional real.",
    description:
      "Primera visita de 30 minuts per diagnosticar, prioritzar objectius i definir un pla clar des del primer dia.",
    support: "Centre a Escaldes-Engordany, amb atenció per agenda i seguiment actiu.",
    highlights: ["Diagnosi inicial", "Pla recomanat", "Seguiment per fases"],
    locationChip: "Escaldes-Engordany · Illa Carlemany · 2a planta",
  },
  firstVisitLabel: "Primera visita",
  firstVisitTitle: "Una valoració que et deixa decisions clares, no dubtes.",
  firstVisitDescription:
    "Convertim la primera cita en un punt de control tecnic-comercial per ordenar prioritats i definir el pla.",
  firstVisitItems: [
    {
      id: "diagnostico",
      title: "Diagnosi",
      summary: "Lectura professional de l'estat actual de la pell o la zona a tractar.",
      ctaLabel: "Saber-ne més",
      modalLabel: "Primera visita",
      modalTitle: "Diagnosi inicial",
      modalIntro:
        "La diagnosi es una revisio estructurada per detectar necessitats reals i evitar sobretractaments.",
      blocks: [
        {
          title: "Què analitzem",
          lines: [
            "Estat cutani, tolerancia i antecedents rellevants.",
            "Objectiu principal i urgencia real de cada zona.",
            "Compatibilitat amb protocols disponibles al centre.",
          ],
        },
        {
          title: "Què obtens",
          lines: [
            "Explicacio clara del que convé iniciar i del que convé posposar.",
            "Estimacio orientativa de temps i continuïtat.",
          ],
        },
      ],
    },
    {
      id: "plan-recomendado",
      title: "Pla recomanat",
      summary: "Ruta per fases amb ordre de prioritats, freqüència i seguiment.",
      ctaLabel: "Saber-ne més",
      modalLabel: "Primera visita",
      modalTitle: "Pla recomanat",
      modalIntro: "Definim una proposta personalitzada per fases: inici, consolidacio i manteniment.",
      blocks: [
        {
          title: "Què es té en compte",
          lines: [
            "Objectiu estetic principal i objectius secundaris.",
            "Disponibilitat real d'agenda i ritme sostenible de sessions.",
            "Resposta esperable segons perfil i tolerancia.",
          ],
        },
        {
          title: "Com es planteja",
          lines: [
            "Tractaments prioritzats per impacte i seguretat.",
            "Freqüència orientativa i punts de revisió.",
            "Recomanacions de cura entre sessions.",
          ],
        },
      ],
    },
  ],
  methodLabel: "Metode",
  methodTitle: "Protocol premium en quatre fases operatives.",
  methodDescription:
    "Substituim frases vagues per un procés verificable: diagnosi, execució, seguiment i ajust.",
  methodStages: [
    {
      id: "01",
      title: "Diagnosi i criteri",
      subtitle: "Definim el punt de partida real",
      description: "Analitzem estat actual, prioritat i marge de progressio.",
      signals: ["Historia del cas", "Objectiu principal", "Indicacio valida"],
    },
    {
      id: "02",
      title: "Disseny del pla",
      subtitle: "Ordenem el tractament per etapes",
      description: "Sequenciem tècniques i freqüència sense sobrecarregar la pell.",
      signals: ["Pla per fases", "Freqüència orientativa", "Consentiment informat"],
    },
    {
      id: "03",
      title: "Execucio controlada",
      subtitle: "Aplicacio técnica i traçabilitat",
      description: "Registrem parametres de sessio per decidir la fase seguent.",
      signals: ["Checklist pre-sessio", "Registre tecnic", "Tancament de cures"],
    },
    {
      id: "04",
      title: "Seguiment i ajust",
      subtitle: "Evolucio basada en evidencia",
      description: "Revisem resposta, ajustem ritme i consolidem manteniment.",
      signals: ["Revisio de progres", "Ajust del pla", "Continuïtat"],
    },
  ],
  treatmentsLabel: "Tractaments",
  treatmentsTitle: "Oferta amplia, ordenada i fácil d'explorar.",
  treatmentsDescription:
    "Explora per categoria i obre cada fitxa sense sortir de la página per entendre temps, objectiu i encaix.",
  treatmentsBridge: "Veure catàleg complet",
  teamLabel: "Equip",
  teamTitle: "Tres professionals, un mateix estàndard de treball.",
  teamDescription:
    "Humanitzem la marca amb perfils reals, especialitats clares i un enfocament d'acompanyament.",
  teamMembers: sharedTeam.map((member) => ({
    ...member,
    role: member.id === "eli" ? "Gerent" : "Esteticien",
    specialty:
      member.id === "eli"
        ? "Direccio de centre, diagnosi i planificacio de tractaments"
        : member.id === "jaquie"
          ? "Laser de diode, radiofreqüència i protocols facials avancats"
          : "Estetica regenerativa i qualitat de pell",
    excerpt:
      member.id === "eli"
        ? "Coordina qualitat, agenda i validacio final de cada pla."
        : member.id === "jaquie"
          ? "Executa tractaments avancats amb control tecnic i confort."
          : "Desenvolupa protocols de recuperacio cutània i manteniment.",
    ctaLabel: "Saber-ne més",
    modalLabel: "Equip",
    modalTitle: member.id === "eli" ? "Eli - Gerent" : member.id === "jaquie" ? "Jaquie - Esteticien" : "Karen - Esteticien",
    motivation:
      member.id === "eli"
        ? "Treballo perquè cada clienta surti amb un pla clar, realista i ben explicat."
        : member.id === "jaquie"
          ? "M'agrada combinar precisio técnica i proximitat en cada sessio."
          : "Em centro en recuperar confort cutani i resultats sostinguts.",
    experience:
      member.id === "eli"
        ? ["Més de 14 anys en gestió de centres d'estètica.", "Coordinació d'equip i protocols de seguiment."]
        : member.id === "jaquie"
          ? ["9 anys en laser de diode i tecnología estètica.", "Treball per fases amb control de resposta cutània."]
          : ["10 anys en protocols regeneratius i barrera cutània.", "Seguiment de casos sensibles o reactius."],
    studies:
      member.id === "eli"
        ? ["Grau superior d'Estetica Integral i Benestar.", "Formació en gestió d'experiencia de clienta."]
        : member.id === "jaquie"
          ? ["Tecnic superior en estètica i aparatologia.", "Formació continuada en energia i radiofreqüència."]
          : ["Formació en dermocosmètica aplicada.", "Especialització en tècniques regeneratives no invasives."],
    treatments:
      member.id === "eli"
        ? ["Diagnosi inicial", "Pla recomanat", "Revisio de seguiment"]
        : member.id === "jaquie"
          ? ["Depilacio laser de diode", "Radiofrequencia facial", "Hidrodermoabrasio avançada"]
          : ["Protocol barrera cutània", "Bioestimulacio LED", "Rejoveniment periocular"],
    approach:
      member.id === "eli"
        ? ["Explicacio clara abans de cada decisio.", "Continuïtat de pla i agenda sense friccions."]
        : member.id === "jaquie"
          ? ["Ajust de parametres per zona i tolerancia.", "Pautes de pre i post sessio ben definides."]
          : ["Progressio controlada segons tolerancia real.", "Combinacio de cabina i rutina domiciliaria."],
  })),
  teamModalLabels: {
    years: "anys",
    profile: "Perfil professional",
    experience: "Experiencia",
    studies: "Estudis",
    treatments: "Tractaments que realitza",
    approach: "Enfocament amb clientes",
    languages: "Idiomes",
  },
  processLabel: "Proces",
  processTitle: "De la primera consulta a la reserva confirmada, sense friccio.",
  processDescription: "Cada pas té una accio clara perquè la clienta entengui que esperar i quan.",
  processSteps: [
    {
      id: "01",
      title: "Sol-licitud inicial",
      description: "Ens comparteixes objectiu, zona i franja horaria.",
      detail: "Pots iniciar per WhatsApp o reserva web; prioritzem resposta en horari operatiu.",
    },
    {
      id: "02",
      title: "Preconfirmacio",
      description: "Validem disponibilitat i resolem dubtes previs.",
      detail: "T'enviem condicions de cita, preparacio previa i canal de seguiment.",
    },
    {
      id: "03",
      title: "Primera visita",
      description: "Diagnosi i pla recomanat dins del centre.",
      detail: "Sortiras amb una proposta estructurada i els passos seguents definits.",
    },
    {
      id: "04",
      title: "Reserva de tractament",
      description: "Confirmem la cita seguent segons prioritat i agenda.",
      detail: "La continuïtat es planifica per blocs per mantenir ritme i resultats estables.",
    },
  ],
  faqLabel: "Preguntes frequents",
  faqTitle: "FAQs reals per decidir amb seguretat abans de reservar.",
  faqDescription:
    "Resolem els dubtes més habituals de primera visita i seguiment perquè el procés sigui clar des de l'inici.",
  faqItems: buildLocalizedFaqs("ca", caFaqCopy),
};

const frHome: HomePremiumContent = {
  ...esHome,
  closeModalLabel: "Fermer",
  hero: {
    ...esHome.hero,
    eyebrow: "Centres Ideal Andorre - Illa Carlemany",
    titleLead: "Epilation laser diode",
    titleStrong: "et esthétique avancée",
    titleTail: "avec un protocole professionnel reel.",
    description:
      "Premiere visite de 30 minutes pour diagnostiquer, prioriser les objectifs et definir un plan clair des le debut.",
    support: "Centre situe a Escaldes-Engordany, avec prise en charge sur rendez-vous et suivi actif.",
    highlights: ["Diagnostic initial", "Plan recommande", "Suivi par phases"],
    locationChip: "Escaldes-Engordany · Illa Carlemany · 2e etage",
  },
  firstVisitLabel: "Premiere visite",
  firstVisitTitle: "Une evaluation qui vous laisse des decisions claires, pas des doutes.",
  firstVisitDescription:
    "Nous transformons la premiere visite en point de contrôle technico-commercial pour definir les priorites.",
  firstVisitItems: [
    {
      id: "diagnostico",
      title: "Diagnostic",
      summary: "Lecture professionnelle de l'etat actuel de la peau ou de la zone a traiter.",
      ctaLabel: "En savoir plus",
      modalLabel: "Premiere visite",
      modalTitle: "Diagnostic initial",
      modalIntro:
        "Le diagnostic est une révision structurée pour identifier les besoins réels et éviter le surtraitement.",
      blocks: [
        {
          title: "Ce que nous analysons",
          lines: [
            "Etat cutane, tolerance et antecedents pertinents.",
            "Objectif principal et priorite reelle de chaque zone.",
            "Compatibilite avec les protocoles du centre.",
          ],
        },
        {
          title: "Ce que vous obtenez",
          lines: [
            "Une explication claire de ce qui doit commencer maintenant et de ce qui peut attendre.",
            "Une estimation realiste des delais et de la continuite.",
          ],
        },
      ],
    },
    {
      id: "plan-recomendado",
      title: "Plan recommande",
      summary: "Parcours par phases avec priorites, fréquence et suivi.",
      ctaLabel: "En savoir plus",
      modalLabel: "Premiere visite",
      modalTitle: "Plan recommande",
      modalIntro: "Nous definissons une proposition personnalisee: phase initiale, consolidation et maintenance.",
      blocks: [
        {
          title: "Ce qui est pris en compte",
          lines: [
            "Objectif esthétique principal et objectifs secondaires.",
            "Disponibilite reelle d'agenda et rythme soutenable des seances.",
            "Reponse attendue selon le profil et la tolerance.",
          ],
        },
        {
          title: "Comment c'est construit",
          lines: [
            "Traitements priorises par impact et sécurité.",
            "Fréquence indicative et points de révision.",
            "Recommandations de soin entre seances.",
          ],
        },
      ],
    },
  ],
  methodLabel: "Methode",
  methodTitle: "Protocole premium en quatre phases operationnelles.",
  methodDescription:
    "Nous remplacons les messages vagues par un processus verifiable: diagnostic, execution, suivi et ajustement.",
  methodStages: [
    {
      id: "01",
      title: "Diagnostic et critere",
      subtitle: "Nous definissons le point de depart reel",
      description: "Nous analysons l'etat actuel, la priorite et la marge de progression.",
      signals: ["Historique du cas", "Objectif principal", "Indication valide"],
    },
    {
      id: "02",
      title: "Conception du plan",
      subtitle: "Nous organisons le traitement par etapes",
      description: "Nous sequencons techniques et fréquence sans surcharger la peau.",
      signals: ["Plan par phases", "Fréquence indicative", "Consentement éclairé"],
    },
    {
      id: "03",
      title: "Execution controlee",
      subtitle: "Application technique et tracabilite",
      description: "Nous enregistrons les parametres de seance pour la decision suivante.",
      signals: ["Checklist pre-seance", "Enregistrement technique", "Conseils de sortie"],
    },
    {
      id: "04",
      title: "Suivi et ajustement",
      subtitle: "Evolution basee sur l'evidence",
      description: "Nous revoyons la réponse, ajustons le rythme et consolidons la maintenance.",
      signals: ["Revue de progression", "Ajustement du plan", "Continuite"],
    },
  ],
  treatmentsLabel: "Traitements",
  treatmentsTitle: "Une offre large, structuree et fácile a explorer.",
  treatmentsDescription:
    "Explorez par categorie et ouvrez chaque fiche sans quitter la page pour comprendre duree, objectif et indication.",
  treatmentsBridge: "Voir le catalogue complet",
  teamLabel: "Equipe",
  teamTitle: "Trois professionnelles, un meme niveau d'exigence.",
  teamDescription:
    "Nous humanisons la marque avec des profils réels, des spécialités claires et un accompagnement precis.",
  teamMembers: sharedTeam.map((member) => ({
    ...member,
    role: member.id === "eli" ? "Gerante" : "Estheticienne",
    specialty:
      member.id === "eli"
        ? "Direction du centre, diagnostic et planification des traitements"
        : member.id === "jaquie"
          ? "Laser diode, radiofréquence et protocoles faciaux avances"
          : "Esthetique régénérative et qualité de peau",
    excerpt:
      member.id === "eli"
        ? "Coordonne la qualité, l'agenda et la validation finale de chaque plan."
        : member.id === "jaquie"
          ? "Execute les traitements avances avec contrôle technique et confort."
          : "Developpe des protocoles de recuperation cutanee et de maintenance.",
    ctaLabel: "En savoir plus",
    modalLabel: "Equipe",
    modalTitle: member.id === "eli" ? "Eli - Gerante" : member.id === "jaquie" ? "Jaquie - Estheticienne" : "Karen - Estheticienne",
    motivation:
      member.id === "eli"
        ? "Je veille a ce que chaque cliente reparte avec un plan clair et realiste."
        : member.id === "jaquie"
          ? "J'aime associer precision technique et approche rassurante a chaque seance."
          : "Je me concentre sur le confort cutane et des resultats durables.",
    experience:
      member.id === "eli"
        ? ["Plus de 14 ans en gestion de centres esthétiques.", "Coordination d'équipe et suivi opérationnel."]
        : member.id === "jaquie"
          ? ["9 ans en laser diode et technologie esthétique.", "Travail par phases avec contrôle de la réponse cutanee."]
          : ["10 ans en protocoles regeneratifs et barriere cutanee.", "Suivi de cas sensibles ou reactifs."],
    studies:
      member.id === "eli"
        ? ["Diplôme superieur en esthétique integrale.", "Formation en gestion d'expérience cliente."]
        : member.id === "jaquie"
          ? ["Diplôme technique en esthétique et appareil.", "Formation continue en energie et radiofréquence."]
          : ["Formation en dermocosmétique appliquée.", "Spécialisation en techniques régénératives non invasives."],
    treatments:
      member.id === "eli"
        ? ["Diagnostic initial", "Plan recommande", "Revue de suivi"]
        : member.id === "jaquie"
          ? ["Epilation laser diode", "Radiofrequence faciale", "Hydrodermabrasion avancée"]
          : ["Protocole barriere cutanee", "Biostimulation LED", "Rajeunissement perioculaire"],
    approach:
      member.id === "eli"
        ? ["Explication claire avant chaque decision.", "Continuite du plan et de l'agenda."]
        : member.id === "jaquie"
          ? ["Ajustement des parametres selon zone et tolerance.", "Consignes pre et post seance tres claires."]
          : ["Progression controlee selon la tolerance reelle.", "Association cabine et routine a domicile."],
  })),
  teamModalLabels: {
    years: "ans",
    profile: "Profil professionnel",
    experience: "Experience",
    studies: "Formation",
    treatments: "Traitements realises",
    approach: "Approche avec les clientes",
    languages: "Langues",
  },
  processLabel: "Processus",
  processTitle: "De la premiere demande a la reservation confirmee, sans friction.",
  processDescription: "Chaque etape est claire pour que la cliente sache quoi attendre et a quel moment.",
  processSteps: [
    {
      id: "01",
      title: "Demande initiale",
      description: "Vous partagez objectif, zone et plage horaire souhaitee.",
      detail: "Vous pouvez commencer par WhatsApp ou reservation web; réponse priorisee en horaire operationnel.",
    },
    {
      id: "02",
      title: "Preconfirmation",
      description: "Nous validons la disponibilite et repondons aux questions prealables.",
      detail: "Nous envoyons conditions de rendez-vous, preparation et canal de suivi.",
    },
    {
      id: "03",
      title: "Premiere visite",
      description: "Diagnostic et plan recommande au centre.",
      detail: "Vous repartez avec une proposition structuree et des etapes suivantes claires.",
    },
    {
      id: "04",
      title: "Reservation du traitement",
      description: "Nous confirmons la seance suivante selon priorite et agenda.",
      detail: "La continuite est planifiee par blocs pour maintenir rythme et resultats.",
    },
  ],
  faqLabel: "Questions frequentes",
  faqTitle: "FAQs concretes pour reserver avec confiance.",
  faqDescription:
    "Nous repondons aux questions les plus courantes avant la premiere visite et pendant le suivi.",
  faqItems: buildLocalizedFaqs("fr", frFaqCopy),
};

const homeByLocale: Record<Locale, HomePremiumContent> = {
  es: esHome,
  ca: caHome,
  fr: frHome,
};

export function getHomePremiumContent(locale: Locale): HomePremiumContent {
  return homeByLocale[locale] ?? esHome;
}
