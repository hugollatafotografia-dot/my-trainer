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
    specialty: "Direccion de centro, diagnostico y planificacion de tratamiento",
    excerpt: "Coordina la calidad del servicio y valida cada plan de tratamiento antes de su inicio.",
    image: "/images/about/hero-centro-estetica-illa-carlemany.jpg",
    alt: "Eli, gerente del centro",
    imagePosition: "52% 38%",
    ctaLabel: "Saber mas",
    modalLabel: "Equipo",
    modalTitle: "Eli - Gerente",
    motivation:
      "Trabajo para que cada clienta salga con un plan claro, una expectativa realista y una experiencia cuidada de principio a fin.",
    experience: [
      "Mas de 14 anos en gestion de centros de estetica y coordinacion de equipos.",
      "Supervision de protocolos faciales, corporales y depilacion laser diodo.",
    ],
    studies: [
      "Grado superior en Estetica Integral y Bienestar.",
      "Formacion en gestion de experiencia de cliente y operativa de centro.",
    ],
    treatments: ["Diagnostico inicial", "Plan recomendado", "Revision de seguimiento y continuidad"],
    approach: [
      "Prioriza explicaciones claras para que la clienta decida con seguridad.",
      "Coordina agenda y fases para mantener continuidad real del tratamiento.",
    ],
    languages: ["Espanol", "Catala", "Frances"],
  },
  {
    id: "jaquie",
    name: "Jaquie",
    age: "33",
    role: "Esteticien",
    specialty: "Laser diodo, radiofrecuencia y protocolos faciales avanzados",
    excerpt: "Especialista en ejecutar tratamientos avanzados con trazabilidad tecnica y confort.",
    image: "/images/treatments/hero-tratamientos-esteticos.jpg",
    alt: "Jaquie, esteticien del centro",
    imagePosition: "60% 34%",
    ctaLabel: "Saber mas",
    modalLabel: "Equipo",
    modalTitle: "Jaquie - Esteticien",
    motivation:
      "Me gusta combinar precision tecnica y cercania para que cada sesion sea efectiva y facil de seguir para la clienta.",
    experience: [
      "9 anos en depilacion laser diodo y protocolos de tecnologia estetica avanzada.",
      "Experiencia en trabajo por fases y seguimiento por respuesta cutanea.",
    ],
    studies: [
      "Tecnico superior en Estetica Integral y aparatologia.",
      "Actualizacion continuada en protocolos de energia y radiofrecuencia.",
    ],
    treatments: ["Depilacion laser diodo", "Radiofrecuencia facial", "Hidrodermoabrasion avanzada"],
    approach: [
      "Ajusta parametros por zona y tolerancia para evitar sobretratamiento.",
      "Explica pre y post sesion para mejorar resultados y tranquilidad.",
    ],
    languages: ["Espanol", "Catala", "Frances"],
  },
  {
    id: "karen",
    name: "Karen",
    age: "36",
    role: "Esteticien",
    specialty: "Estetica regenerativa y calidad de piel",
    excerpt: "Desarrolla protocolos de recuperacion cutanea y mantenimiento de calidad de piel.",
    image: "/images/about/experiencia-cabina-centro.jpg",
    alt: "Karen, esteticien del centro",
    imagePosition: "56% 42%",
    ctaLabel: "Saber mas",
    modalLabel: "Equipo",
    modalTitle: "Karen - Esteticien",
    motivation:
      "Mi foco es recuperar confort cutaneo y construir resultados sostenibles, especialmente en pieles sensibles o reactivas.",
    experience: [
      "10 anos en protocolos regenerativos, barrera cutanea y mejora de textura.",
      "Experiencia en acompanamiento de casos con sensibilidad o post-tratamiento.",
    ],
    studies: [
      "Formacion en dermocosmetica aplicada y fisiologia cutanea.",
      "Especializacion en tecnicas no invasivas de regeneracion.",
    ],
    treatments: ["Protocolo barrera cutanea", "Bioestimulacion LED", "Rejuvenecimiento periocular regenerativo"],
    approach: [
      "Prioriza progresion controlada para respetar la tolerancia de la piel.",
      "Combina cabina y rutina en casa para consolidar resultados.",
    ],
    languages: ["Espanol", "Frances"],
  },
];

const sharedFaqs: HomeFaqItem[] = [
  {
    id: "faq-valoracion-coste",
    question: "La valoracion inicial tiene coste?",
    summary: "Te explicamos en que casos es informativa y cuando aplica reserva de tratamiento.",
    ctaLabel: "Saber mas",
    modalLabel: "FAQs",
    modalTitle: "Valoracion inicial y coste",
    answerLead:
      "La primera visita se usa para diagnosticar y orientar. La condicion economica exacta se confirma en recepcion segun el plan recomendado.",
    blocks: [
      {
        title: "Que incluye la valoracion",
        lines: [
          "Revision de necesidad principal, historial y tolerancia.",
          "Propuesta de plan por fases con orden de prioridades.",
        ],
      },
      {
        title: "Como se comunica",
        lines: [
          "Antes de confirmar cualquier sesion se detallan condiciones de cita y presupuesto orientativo.",
        ],
      },
    ],
  },
  {
    id: "faq-laser-sesiones",
    question: "Cuantas sesiones de laser suelen ser necesarias?",
    summary: "Depende de zona, fototipo y respuesta biologica.",
    ctaLabel: "Saber mas",
    modalLabel: "FAQs",
    modalTitle: "Numero orientativo de sesiones de laser",
    answerLead:
      "No hay una cifra unica para todas las clientas. Se trabaja por bloques y se ajusta segun evolucion real.",
    blocks: [
      {
        title: "Factores que influyen",
        lines: ["Zona tratada", "Tipo de vello", "Ritmo hormonal", "Regularidad entre sesiones"],
      },
      {
        title: "Como se decide",
        lines: ["Se revisa respuesta por zona en cada visita y se ajustan intervalos para mantener eficacia."],
      },
    ],
  },
  {
    id: "faq-laser-duele",
    question: "Duele la depilacion laser?",
    summary: "La sensacion es tolerable y se adapta intensidad.",
    ctaLabel: "Saber mas",
    modalLabel: "FAQs",
    modalTitle: "Sensacion durante depilacion laser",
    answerLead:
      "Puede notarse calor o pinchazo breve, pero se trabaja con parametros ajustados para mantener confort.",
    blocks: [
      {
        title: "Durante la sesion",
        lines: [
          "Se comprueba tolerancia al inicio.",
          "Se ajusta energia por zona para evitar exceso de molestia.",
        ],
      },
      {
        title: "Despues",
        lines: ["Puede aparecer enrojecimiento leve transitorio.", "Recibiras pautas de cuidado post-sesion."],
      },
    ],
  },
  {
    id: "faq-verano",
    question: "Puedo hacerme tratamientos en verano?",
    summary: "Si, con seleccion de protocolo y fotoproteccion estricta.",
    ctaLabel: "Saber mas",
    modalLabel: "FAQs",
    modalTitle: "Tratamientos en temporada de verano",
    answerLead:
      "Es posible mantener tratamiento en verano, pero se priorizan protocolos compatibles y control de exposicion solar.",
    blocks: [
      {
        title: "Que se prioriza",
        lines: ["Protocolos de baja agresion", "Control de tiempos de exposicion", "Cuidado de barrera cutanea"],
      },
      {
        title: "Condiciones",
        lines: ["Fotoproteccion diaria", "Evitar sol directo pre y post sesion segun pauta indicada."],
      },
    ],
  },
  {
    id: "faq-no-se-por-donde-empezar",
    question: "Que tratamiento necesito si no se por donde empezar?",
    summary: "La primera visita se disena precisamente para esto.",
    ctaLabel: "Saber mas",
    modalLabel: "FAQs",
    modalTitle: "Como elegimos tratamiento cuando hay dudas",
    answerLead:
      "No necesitas llegar con una decision cerrada. El centro define contigo un plan priorizado y realista.",
    blocks: [
      {
        title: "Metodo de decision",
        lines: [
          "Diagnostico del punto de partida.",
          "Objetivo principal y objetivo secundario.",
          "Plan por fases segun impacto y continuidad posible.",
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
    question: "Cuanto dura una cita?",
    summary: "Segun tratamiento, entre 30 y 70 minutos de media.",
    ctaLabel: "Saber mas",
    modalLabel: "FAQs",
    modalTitle: "Duracion habitual de las citas",
    answerLead:
      "Cada ficha de tratamiento indica una duracion orientativa y puede variar segun zona o fase del plan.",
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
    ctaLabel: "Saber mas",
    modalLabel: "FAQs",
    modalTitle: "Reservas por WhatsApp",
    answerLead:
      "Puedes abrir conversacion por WhatsApp para solicitar disponibilidad, resolver dudas y confirmar tu cita.",
    blocks: [
      {
        title: "Que debes enviar",
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
    question: "Como se confirma la cita?",
    summary: "Con mensaje de confirmacion y recordatorio previo.",
    ctaLabel: "Saber mas",
    modalLabel: "FAQs",
    modalTitle: "Proceso de confirmacion",
    answerLead:
      "Cada reserva queda confirmada por canal directo y con los detalles operativos necesarios para asistir sin dudas.",
    blocks: [
      {
        title: "Flujo de confirmacion",
        lines: [
          "Solicitud de cita.",
          "Validacion de disponibilidad.",
          "Mensaje de confirmacion final con hora y recomendaciones.",
        ],
      },
      {
        title: "Recordatorio",
        lines: ["Se realiza recordatorio previo cuando corresponde segun tipo de cita."],
      },
    ],
  },
  {
    id: "faq-profesional",
    question: "Que profesional me atiende?",
    summary: "Se asigna por especialidad y tipo de tratamiento.",
    ctaLabel: "Saber mas",
    modalLabel: "FAQs",
    modalTitle: "Asignacion de profesional",
    answerLead:
      "La asignacion la realiza el centro para que cada caso lo atienda la profesional mas adecuada por protocolo.",
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
    ctaLabel: "Saber mas",
    modalLabel: "FAQs",
    modalTitle: "Cambios y cancelaciones",
    answerLead:
      "El centro permite reprogramar citas dentro de condiciones razonables para mantener la continuidad del plan.",
    blocks: [
      {
        title: "Como hacerlo",
        lines: ["Contacta por WhatsApp en cuanto sepas que no podras asistir."],
      },
      {
        title: "Importancia",
        lines: ["Avisar con margen permite ofrecer alternativas sin romper tu secuencia de tratamiento."],
      },
    ],
  },
  {
    id: "faq-categorias",
    question: "Que diferencia hay entre estetica normal, avanzada y regenerativa?",
    summary: "Cada categoria responde a una intensidad y objetivo distinto.",
    ctaLabel: "Saber mas",
    modalLabel: "FAQs",
    modalTitle: "Diferencia entre categorias de tratamiento",
    answerLead:
      "La cartera se organiza por nivel de intervencion y por momento del proceso de la piel.",
    blocks: [
      {
        title: "Estetica normal",
        lines: ["Mantenimiento, limpieza y mejora visible de baja intensidad."],
      },
      {
        title: "Estetica avanzada y regenerativa",
        lines: [
          "Avanzada: tecnologia para objetivos de precision.",
          "Regenerativa: recuperacion de calidad cutanea y continuidad.",
        ],
      },
    ],
  },
  {
    id: "faq-combinacion",
    question: "Puedo combinar varios tratamientos?",
    summary: "Si, pero con orden y criterio de tolerancia.",
    ctaLabel: "Saber mas",
    modalLabel: "FAQs",
    modalTitle: "Combinacion de tratamientos",
    answerLead:
      "Combinar tratamientos es habitual, siempre que la secuencia este bien planteada y se respete la tolerancia de cada piel.",
    blocks: [
      {
        title: "Como se combina",
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
    question: "Quantes sessions de laser solen ser necessaries?",
    summary: "Depen de la zona, el fototip i la resposta biologica.",
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
    question: "Quina diferencia hi ha entre estetica normal, avancada i regenerativa?",
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
    question: "Quelle difference entre esthetique classique, avancee et regenerative?",
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
    titleStrong: "y estetica avanzada",
    titleTail: "con protocolo profesional real.",
    description:
      "Primera visita de 30 minutos para diagnosticar, priorizar objetivos y definir un plan claro desde el primer dia.",
    support: "Centro en Escaldes-Engordany, con atencion por agenda y seguimiento activo.",
    highlights: ["Diagnostico inicial", "Plan recomendado", "Seguimiento por fases"],
    locationChip: "Escaldes-Engordany · Illa Carlemany · 2a planta",
    locationLabel: "Ubicacion operativa",
    addressLine: "Av. Carlemany, 70, AD700 Andorra",
    floorLine: "Centre Comercial Illa Carlemany - segunda planta",
    hoursLine: "Agenda gestionada por cita previa y confirmacion por WhatsApp.",
    mapCta: "Abrir en Google Maps",
    routeCta: "Como llegar",
  },
  firstVisitLabel: "Primera visita",
  firstVisitTitle: "Una valoracion que te deja decisiones claras, no dudas.",
  firstVisitDescription:
    "Convertimos la primera cita en un punto de control tecnico-comercial: entendemos tu caso, ordenamos prioridades y definimos plan.",
  firstVisitItems: [
    {
      id: "diagnostico",
      title: "Diagnostico",
      summary: "Lectura profesional del estado actual de la piel o zona a tratar.",
      ctaLabel: "Saber mas",
      modalLabel: "Primera visita",
      modalTitle: "Diagnostico inicial",
      modalIntro:
        "El diagnostico no es una charla comercial: es una revision estructurada para detectar necesidades reales y riesgos de sobretratamiento.",
      blocks: [
        {
          title: "Que analizamos",
          lines: [
            "Estado cutaneo, tolerancia y antecedentes relevantes.",
            "Objetivo principal y urgencia real de cada zona.",
            "Compatibilidad con protocolos disponibles en centro.",
          ],
        },
        {
          title: "Que obtiene la clienta",
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
      ctaLabel: "Saber mas",
      modalLabel: "Primera visita",
      modalTitle: "Plan recomendado",
      modalIntro:
        "Definimos una propuesta personalizada con criterio operativo: fase inicial, fase de consolidacion y mantenimiento.",
      blocks: [
        {
          title: "Que se tiene en cuenta",
          lines: [
            "Objetivo estetico principal y objetivos secundarios.",
            "Disponibilidad real de agenda y ritmo de sesiones sostenible.",
            "Respuesta esperable segun tu perfil y tolerancia.",
          ],
        },
        {
          title: "Como se plantea",
          lines: [
            "Tratamientos priorizados por impacto y seguridad.",
            "Frecuencia orientativa y puntos de revision.",
            "Recomendaciones de cuidado entre sesiones.",
          ],
        },
      ],
    },
  ],
  methodLabel: "Metodo",
  methodTitle: "Protocolo premium en cuatro fases operativas.",
  methodDescription:
    "Sustituimos frases vagas por proceso verificable: diagnostico, ejecucion, seguimiento y ajuste.",
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
      description: "Secuenciamos tecnicas y frecuencia sin sobrecargar la piel.",
      signals: ["Plan por fases", "Frecuencia orientativa", "Consentimiento informado"],
    },
    {
      id: "03",
      title: "Ejecucion controlada",
      subtitle: "Aplicamos con tecnica y trazabilidad",
      description: "Registramos parametros de sesion para tomar decisiones en la siguiente visita.",
      signals: ["Checklist pre-sesion", "Registro tecnico", "Cierre de cuidados"],
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
  treatmentsTitle: "Oferta amplia, ordenada y facil de explorar.",
  treatmentsDescription:
    "Explora por categoria y abre cada ficha sin salir de la pagina para entender tiempos, objetivo y encaje.",
  treatmentsBridge: "Ver catalogo completo",
  teamLabel: "Equipo",
  teamTitle: "Tres profesionales, un mismo estandar de trabajo.",
  teamDescription:
    "Humanizamos la marca con perfiles reales, especialidades claras y enfoque de acompanamiento.",
  teamMembers: sharedTeam,
  teamModalLabels: {
    years: "anos",
    profile: "Perfil profesional",
    experience: "Experiencia",
    studies: "Estudios",
    treatments: "Tratamientos que realiza",
    approach: "Enfoque con clientas",
    languages: "Idiomas",
  },
  processLabel: "Proceso",
  processTitle: "De la primera consulta a la reserva confirmada, sin friccion.",
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
      detail: "Te enviamos condiciones de cita, preparacion previa y canal de seguimiento.",
    },
    {
      id: "03",
      title: "Primera visita",
      description: "Diagnostico y plan recomendado dentro del centro.",
      detail: "Saldras con propuesta estructurada y proximos pasos definidos.",
    },
    {
      id: "04",
      title: "Reserva de tratamiento",
      description: "Confirmamos la siguiente cita segun prioridad y agenda.",
      detail: "La continuidad se planifica por bloques para mantener ritmo y resultados sostenibles.",
    },
  ],
  faqLabel: "Preguntas frecuentes",
  faqTitle: "FAQs reales para decidir con seguridad antes de reservar.",
  faqDescription:
    "Resolvemos las dudas que mas se repiten en primera visita y seguimiento para que el proceso sea claro desde el inicio.",
  faqItems: sharedFaqs,
};

const caHome: HomePremiumContent = {
  ...esHome,
  closeModalLabel: "Tancar",
  hero: {
    ...esHome.hero,
    eyebrow: "Centres Ideal Andorra - Illa Carlemany",
    titleLead: "Depilacio laser de diode",
    titleStrong: "i estetica avancada",
    titleTail: "amb protocol professional real.",
    description:
      "Primera visita de 30 minuts per diagnosticar, prioritzar objectius i definir un pla clar des del primer dia.",
    support: "Centre a Escaldes-Engordany, amb atencio per agenda i seguiment actiu.",
    highlights: ["Diagnosi inicial", "Pla recomanat", "Seguiment per fases"],
    locationChip: "Escaldes-Engordany · Illa Carlemany · 2a planta",
  },
  firstVisitLabel: "Primera visita",
  firstVisitTitle: "Una valoracio que et deixa decisions clares, no dubtes.",
  firstVisitDescription:
    "Convertim la primera cita en un punt de control tecnic-comercial per ordenar prioritats i definir el pla.",
  firstVisitItems: [
    {
      id: "diagnostico",
      title: "Diagnosi",
      summary: "Lectura professional de l'estat actual de la pell o la zona a tractar.",
      ctaLabel: "Saber-ne mes",
      modalLabel: "Primera visita",
      modalTitle: "Diagnosi inicial",
      modalIntro:
        "La diagnosi es una revisio estructurada per detectar necessitats reals i evitar sobretractaments.",
      blocks: [
        {
          title: "Que analitzem",
          lines: [
            "Estat cutani, tolerancia i antecedents rellevants.",
            "Objectiu principal i urgencia real de cada zona.",
            "Compatibilitat amb protocols disponibles al centre.",
          ],
        },
        {
          title: "Que obtens",
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
      summary: "Ruta per fases amb ordre de prioritats, frequencia i seguiment.",
      ctaLabel: "Saber-ne mes",
      modalLabel: "Primera visita",
      modalTitle: "Pla recomanat",
      modalIntro: "Definim una proposta personalitzada per fases: inici, consolidacio i manteniment.",
      blocks: [
        {
          title: "Que es te en compte",
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
            "Frequencia orientativa i punts de revisio.",
            "Recomanacions de cura entre sessions.",
          ],
        },
      ],
    },
  ],
  methodLabel: "Metode",
  methodTitle: "Protocol premium en quatre fases operatives.",
  methodDescription:
    "Substituim frases vagues per un proces verificable: diagnosi, execucio, seguiment i ajust.",
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
      description: "Sequenciem tecniques i frequencia sense sobrecarregar la pell.",
      signals: ["Pla per fases", "Frequencia orientativa", "Consentiment informat"],
    },
    {
      id: "03",
      title: "Execucio controlada",
      subtitle: "Aplicacio tecnica i traçabilitat",
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
  treatmentsTitle: "Oferta amplia, ordenada i facil d'explorar.",
  treatmentsDescription:
    "Explora per categoria i obre cada fitxa sense sortir de la pagina per entendre temps, objectiu i encaix.",
  treatmentsBridge: "Veure cataleg complet",
  teamLabel: "Equip",
  teamTitle: "Tres professionals, un mateix estandard de treball.",
  teamDescription:
    "Humanitzem la marca amb perfils reals, especialitats clares i un enfocament d'acompanyament.",
  teamMembers: sharedTeam.map((member) => ({
    ...member,
    role: member.id === "eli" ? "Gerent" : "Esteticien",
    specialty:
      member.id === "eli"
        ? "Direccio de centre, diagnosi i planificacio de tractaments"
        : member.id === "jaquie"
          ? "Laser de diode, radiofrequencia i protocols facials avancats"
          : "Estetica regenerativa i qualitat de pell",
    excerpt:
      member.id === "eli"
        ? "Coordina qualitat, agenda i validacio final de cada pla."
        : member.id === "jaquie"
          ? "Executa tractaments avancats amb control tecnic i confort."
          : "Desenvolupa protocols de recuperacio cutania i manteniment.",
    ctaLabel: "Saber-ne mes",
    modalLabel: "Equip",
    modalTitle: member.id === "eli" ? "Eli - Gerent" : member.id === "jaquie" ? "Jaquie - Esteticien" : "Karen - Esteticien",
    motivation:
      member.id === "eli"
        ? "Treballo perque cada clienta surti amb un pla clar, realista i ben explicat."
        : member.id === "jaquie"
          ? "M'agrada combinar precisio tecnica i proximitat en cada sessio."
          : "Em centro en recuperar confort cutani i resultats sostinguts.",
    experience:
      member.id === "eli"
        ? ["Mes de 14 anys en gestio de centres d'estetica.", "Coordinacio d'equip i protocols de seguiment."]
        : member.id === "jaquie"
          ? ["9 anys en laser de diode i tecnologia estetica.", "Treball per fases amb control de resposta cutania."]
          : ["10 anys en protocols regeneratius i barrera cutania.", "Seguiment de casos sensibles o reactius."],
    studies:
      member.id === "eli"
        ? ["Grau superior d'Estetica Integral i Benestar.", "Formacio en gestio d'experiencia de clienta."]
        : member.id === "jaquie"
          ? ["Tecnic superior en estetica i aparatologia.", "Formacio continuada en energia i radiofrequencia."]
          : ["Formacio en dermocosmetica aplicada.", "Especialitzacio en tecniques regeneratives no invasives."],
    treatments:
      member.id === "eli"
        ? ["Diagnosi inicial", "Pla recomanat", "Revisio de seguiment"]
        : member.id === "jaquie"
          ? ["Depilacio laser de diode", "Radiofrequencia facial", "Hidrodermoabrasio avancada"]
          : ["Protocol barrera cutania", "Bioestimulacio LED", "Rejoveniment periocular"],
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
  processDescription: "Cada pas te una accio clara perque la clienta entengui que esperar i quan.",
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
    "Resolem els dubtes mes habituals de primera visita i seguiment perque el proces sigui clar des de l'inici.",
  faqItems: buildLocalizedFaqs("ca", caFaqCopy),
};

const frHome: HomePremiumContent = {
  ...esHome,
  closeModalLabel: "Fermer",
  hero: {
    ...esHome.hero,
    eyebrow: "Centres Ideal Andorre - Illa Carlemany",
    titleLead: "Epilation laser diode",
    titleStrong: "et esthetique avancee",
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
    "Nous transformons la premiere visite en point de controle technico-commercial pour definir les priorites.",
  firstVisitItems: [
    {
      id: "diagnostico",
      title: "Diagnostic",
      summary: "Lecture professionnelle de l'etat actuel de la peau ou de la zone a traiter.",
      ctaLabel: "En savoir plus",
      modalLabel: "Premiere visite",
      modalTitle: "Diagnostic initial",
      modalIntro:
        "Le diagnostic est une revision structuree pour identifier les besoins reels et eviter le surtraitement.",
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
      summary: "Parcours par phases avec priorites, frequence et suivi.",
      ctaLabel: "En savoir plus",
      modalLabel: "Premiere visite",
      modalTitle: "Plan recommande",
      modalIntro: "Nous definissons une proposition personnalisee: phase initiale, consolidation et maintenance.",
      blocks: [
        {
          title: "Ce qui est pris en compte",
          lines: [
            "Objectif esthetique principal et objectifs secondaires.",
            "Disponibilite reelle d'agenda et rythme soutenable des seances.",
            "Reponse attendue selon le profil et la tolerance.",
          ],
        },
        {
          title: "Comment c'est construit",
          lines: [
            "Traitements priorises par impact et securite.",
            "Frequence indicative et points de revision.",
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
      description: "Nous sequencons techniques et frequence sans surcharger la peau.",
      signals: ["Plan par phases", "Frequence indicative", "Consentement eclaire"],
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
      description: "Nous revoyons la reponse, ajustons le rythme et consolidons la maintenance.",
      signals: ["Revue de progression", "Ajustement du plan", "Continuite"],
    },
  ],
  treatmentsLabel: "Traitements",
  treatmentsTitle: "Une offre large, structuree et facile a explorer.",
  treatmentsDescription:
    "Explorez par categorie et ouvrez chaque fiche sans quitter la page pour comprendre duree, objectif et indication.",
  treatmentsBridge: "Voir le catalogue complet",
  teamLabel: "Equipe",
  teamTitle: "Trois professionnelles, un meme niveau d'exigence.",
  teamDescription:
    "Nous humanisons la marque avec des profils reels, des specialites claires et un accompagnement precis.",
  teamMembers: sharedTeam.map((member) => ({
    ...member,
    role: member.id === "eli" ? "Gerante" : "Estheticienne",
    specialty:
      member.id === "eli"
        ? "Direction du centre, diagnostic et planification des traitements"
        : member.id === "jaquie"
          ? "Laser diode, radiofrequence et protocoles faciaux avances"
          : "Esthetique regenerative et qualite de peau",
    excerpt:
      member.id === "eli"
        ? "Coordonne la qualite, l'agenda et la validation finale de chaque plan."
        : member.id === "jaquie"
          ? "Execute les traitements avances avec controle technique et confort."
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
        ? ["Plus de 14 ans en gestion de centres esthetiques.", "Coordination d'equipe et suivi operationnel."]
        : member.id === "jaquie"
          ? ["9 ans en laser diode et technologie esthetique.", "Travail par phases avec controle de la reponse cutanee."]
          : ["10 ans en protocoles regeneratifs et barriere cutanee.", "Suivi de cas sensibles ou reactifs."],
    studies:
      member.id === "eli"
        ? ["Diplome superieur en esthetique integrale.", "Formation en gestion d'experience cliente."]
        : member.id === "jaquie"
          ? ["Diplome technique en esthetique et appareil.", "Formation continue en energie et radiofrequence."]
          : ["Formation en dermocosmetique appliquee.", "Specialisation en techniques regeneratives non invasives."],
    treatments:
      member.id === "eli"
        ? ["Diagnostic initial", "Plan recommande", "Revue de suivi"]
        : member.id === "jaquie"
          ? ["Epilation laser diode", "Radiofrequence faciale", "Hydrodermabrasion avancee"]
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
      detail: "Vous pouvez commencer par WhatsApp ou reservation web; reponse priorisee en horaire operationnel.",
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
