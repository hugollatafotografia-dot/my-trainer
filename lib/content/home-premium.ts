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
  age?: string;
  role: string;
  specialty: string;
  excerpt: string;
  image: string;
  alt: string;
  imagePosition?: string;
  mobileImagePosition?: string;
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
    role: "Dirección y coordinación del centro",
    specialty: "Diagnóstico inicial, organización de agenda y continuidad del plan",
    excerpt: "Es quien ordena el caso desde la primera visita para que la clienta entienda qué necesita, por qué y en qué orden.",
    image: "/images/pages/hero/equipo/equipo-eli.png",
    alt: "Eli, gerente del centro",
    imagePosition: "52% 38%",
    mobileImagePosition: "58% 28%",
    ctaLabel: "Saber más",
    modalLabel: "Equipo",
    modalTitle: "Eli - Dirección de centro",
    motivation:
      "Mi trabajo es que cada clienta salga con una recomendación clara, una expectativa realista y la tranquilidad de saber que no va a empezar un tratamiento sin sentido.",
    experience: [
      "Coordina la primera visita, la agenda y la continuidad del tratamiento.",
      "Revisa que cada propuesta tenga lógica, prioridades claras y seguimiento real.",
    ],
    studies: [
      "Prioriza transparencia, criterio y explicación antes de hablar de una sesión concreta.",
      "Ordena los tratamientos por fases para que la clienta entienda qué empieza ahora y qué conviene revisar después.",
    ],
    treatments: ["Cita de diagnóstico", "Plan recomendado", "Revisión y continuidad del protocolo"],
    approach: [
      "La decisión se toma con información clara, no con presión comercial.",
      "La continuidad del tratamiento se revisa y se reajusta según evolución.",
    ],
    languages: ["Español", "Català", "Francés"],
  },
  {
    id: "jaquie",
    name: "Jaquie",
    role: "Técnica estética",
    specialty: "Láser de diodo y aparatología facial y corporal",
    excerpt: "Trabaja los protocolos que requieren precisión técnica, ajuste de parámetros y seguimiento por respuesta de la piel o del vello.",
    image: "/images/pages/hero/equipo/equipo-jaquie-20260326.png",
    alt: "Jaquie, esteticien del centro",
    imagePosition: "60% 34%",
    mobileImagePosition: "64% 28%",
    ctaLabel: "Saber más",
    modalLabel: "Equipo",
    modalTitle: "Jaquie - Técnica estética",
    motivation:
      "Busco que cada sesión esté bien indicada, bien ejecutada y que la clienta sepa exactamente qué puede esperar de ella.",
    experience: [
      "Ajusta el protocolo según fototipo, zona, tolerancia y evolución entre sesiones.",
      "Interviene en tratamientos donde el control técnico marca la diferencia en el resultado.",
    ],
    studies: [
      "Explica preparación, cuidados posteriores y límites reales de cada tratamiento.",
      "Trabaja con seguimiento para evitar repetir sesiones sin estrategia.",
    ],
    treatments: ["Depilación láser de diodo", "Radiofrecuencia facial", "Protocolos corporales con aparatología"],
    approach: [
      "La técnica se adapta al caso, no al revés.",
      "Cada indicación va acompañada de pautas claras antes y después de la sesión.",
    ],
    languages: ["Español", "Català", "Francés"],
  },
  {
    id: "karen",
    name: "Karen",
    role: "Técnica estética",
    specialty: "Microneedling, regeneración y calidad de piel",
    excerpt: "Se centra en tratamientos orientados a textura, densidad, hidratación y recuperación progresiva de la piel.",
    image: "/images/pages/hero/equipo/equipo-karen-20260326.png",
    alt: "Karen, esteticien del centro",
    imagePosition: "56% 42%",
    mobileImagePosition: "60% 34%",
    ctaLabel: "Saber más",
    modalLabel: "Equipo",
    modalTitle: "Karen - Técnica estética",
    motivation:
      "Mi foco está en devolver calidad, confort y respuesta a la piel sin prometer cambios irreales ni atajos.",
    experience: [
      "Trabaja protocolos regenerativos, despigmentantes y de mejora global de calidad cutánea.",
      "Acompaña casos donde la piel necesita estrategia, ritmo y seguimiento para responder bien.",
    ],
    studies: [
      "Selecciona activos y combina técnicas según diagnóstico, no por tendencia.",
      "Da continuidad al plan con pautas realistas y revisables en el tiempo.",
    ],
    treatments: ["Microneedling facial", "Protocolos regenerativos", "Tratamientos faciales personalizados"],
    approach: [
      "La piel se trabaja por fases para respetar tolerancia y respuesta real.",
      "El objetivo es mejorar la calidad de la piel y sostener el resultado, no solo provocar un efecto puntual.",
    ],
    languages: ["Español", "Francés"],
  },
];

const sharedFaqs: HomeFaqItem[] = [
  {
    id: "faq-valoracion-coste",
    question: "¿Cómo funciona la primera visita y cuándo se explica la inversión?",
    summary: "Primero diagnosticamos y ordenamos el tratamiento; después te explicamos la inversión más adecuada para tu caso.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Primera visita e inversión",
    answerLead:
      "La primera visita no empieza por el precio, sino por entender el caso. Cuando sabemos qué tratamiento tiene sentido, explicamos la inversión, la continuidad y si conviene sesión suelta o bono.",
    blocks: [
      {
        title: "Qué incluye la cita de diagnóstico",
        lines: [
          "Qué te preocupa, qué necesita realmente la piel o la zona y qué objetivo merece prioridad.",
          "Un plan por fases con indicación, frecuencia orientativa y criterio para saber por dónde empezar.",
        ],
      },
      {
        title: "Cómo se plantea la inversión",
        lines: [
          "Explicamos el tratamiento y la estrategia antes de hablar de cifras.",
          "Según el caso, puede encajar una sesión individual o un bono con ventajas específicas.",
        ],
      },
    ],
  },
  {
    id: "faq-laser-sesiones",
    question: "¿Cuántas sesiones de láser suelen hacer falta?",
    summary: "Depende de la zona, el tipo de vello y el fototipo; de media, entre 8 y 12 para una reducción significativa.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Número orientativo de sesiones de láser",
    answerLead:
      "No hay una cifra cerrada para todo el mundo. El láser se pauta según zona, tipo de vello, fototipo y respuesta real entre sesiones.",
    blocks: [
      {
        title: "De qué depende",
        lines: ["Zona tratada y densidad del vello.", "Fototipo, componente hormonal y regularidad entre sesiones."],
      },
      {
        title: "Qué se puede esperar",
        lines: [
          "El objetivo es una reducción muy significativa, progresiva y duradera, no una promesa absoluta.",
          "Hay zonas hormonales o más resistentes que pueden requerir más sesiones o mantenimientos puntuales.",
        ],
      },
    ],
  },
  {
    id: "faq-laser-duele",
    question: "¿Duele la depilación láser?",
    summary: "No es el tratamiento más agradable, pero sí totalmente tolerable cuando el protocolo está bien ajustado.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Sensacion durante depilación láser",
    answerLead:
      "La sensación suele describirse como calor o pequeños pinchazos. El objetivo no es aguantar más, sino trabajar con seguridad y eficacia.",
    blocks: [
      {
        title: "Qué influye en la sensación",
        lines: [
          "La zona, la densidad del vello y el momento del protocolo.",
          "El estado de la piel y los parámetros que conviene utilizar en cada caso.",
        ],
      },
      {
        title: "Cómo lo trabajamos",
        lines: [
          "Ajustamos la intensidad para que el tratamiento sea tolerable y técnicamente útil.",
          "Explicamos qué notarás antes de empezar y qué cuidados debes seguir después.",
        ],
      },
    ],
  },
  {
    id: "faq-verano",
    question: "¿Puedo hacerme tratamientos en verano?",
    summary: "Sí en algunos casos, pero siempre respetando diagnóstico, fotoprotección y la carencia de exposición solar cuando el protocolo lo exige.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Tratamientos en temporada de verano",
    answerLead:
      "No todos los tratamientos se gestionan igual en verano. Lo que manda es la seguridad de la piel, el fototipo y el tipo de exposición que vas a tener.",
    blocks: [
      {
        title: "Qué revisamos antes de indicar",
        lines: [
          "Exposición solar, solárium, rutina domiciliaria y medicaciones que puedan interferir.",
          "Si el tratamiento necesita pausa, ajuste o puede hacerse con protocolo adaptado.",
        ],
      },
      {
        title: "Qué suele pasar",
        lines: [
          "La fototerapia, la radiofrecuencia o ciertos protocolos de mantenimiento suelen encajar mejor.",
          "En láser y tratamientos más sensibles al sol, el calendario se ajusta con más rigor.",
        ],
      },
    ],
  },
  {
    id: "faq-no-se-por-donde-empezar",
    question: "¿Qué tratamiento necesito si no sé por dónde empezar?",
    summary: "Precisamente por eso hacemos una cita de diagnóstico: primero entendemos el caso y luego indicamos.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Cómo elegimos tratamiento cuando hay dudas",
    answerLead:
      "No esperamos que llegues sabiendo qué hacerte. Lo importante es entender qué te preocupa, qué resultado buscas y qué necesita realmente tu piel o tu zona.",
    blocks: [
      {
        title: "Por dónde empezamos",
        lines: [
          "Qué te inquieta de verdad, qué has probado antes y qué resultado echas en falta.",
          "Tu disponibilidad, tu ritmo y la continuidad que el caso necesita para funcionar.",
        ],
      },
      {
        title: "Qué evitamos",
        lines: [
          "Autoindicarnos tratamientos por tendencia, por recomendaciones sueltas o por una sesión aislada.",
          "Prometer cambios rápidos cuando el caso necesita estrategia y tiempo.",
        ],
      },
    ],
  },
  {
    id: "faq-duracion-cita",
    question: "¿Cuánto dura la cita de diagnóstico?",
    summary: "Aproximadamente 30 minutos, aunque la duración real puede ajustarse al caso y a las dudas que haya que resolver.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Duracion habitual de las citas",
    answerLead:
      "La cita de diagnóstico suele durar unos 30 minutos. Es el tiempo que necesitamos para entender el caso y salir con una recomendación clara.",
    blocks: [
      {
        title: "Qué se hace en ese tiempo",
        lines: [
          "Diagnóstico, explicación del tratamiento indicado y resolución de objeciones o dudas.",
          "Propuesta de plan, continuidad orientativa y siguientes pasos si decides empezar.",
        ],
      },
      {
        title: "Después de la primera visita",
        lines: [
          "Las sesiones técnicas posteriores se organizan según zona, protocolo y tiempo real de cabina.",
          "No todas las citas duran igual porque no todas persiguen el mismo objetivo.",
        ],
      },
    ],
  },
  {
    id: "faq-whatsapp",
    question: "¿Cómo puedo pedir cita?",
    summary: "Puedes hacerlo por WhatsApp, llamada o presencialmente; después te confirmamos la disponibilidad real.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Reservas por WhatsApp",
    answerLead:
      "WhatsApp suele ser el canal más ágil, pero también puedes reservar por llamada o directamente en el centro.",
    blocks: [
      {
        title: "Canales disponibles",
        lines: [
          "WhatsApp para contacto rápido y seguimiento operativo.",
          "Llamada o gestión presencial si prefieres cerrar la cita directamente con el equipo.",
        ],
      },
      {
        title: "Qué pasa después",
        lines: [
          "Revisamos agenda, duración de la cita y condiciones del tratamiento o valoración.",
          "Después te confirmamos disponibilidad real y pautas previas si hacen falta.",
        ],
      },
    ],
  },
  {
    id: "faq-confirmacion-cita",
    question: "¿Con cuánta antelación suele haber disponibilidad?",
    summary: "Depende del tipo de cita, pero lo habitual es encontrar hueco entre una y dos semanas.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Disponibilidad y confirmación",
    answerLead:
      "La disponibilidad cambia según el tiempo que requiera la cita, la agenda del centro y si hablamos de diagnóstico o de sesión técnica.",
    blocks: [
      {
        title: "Qué condiciona la agenda",
        lines: [
          "Duración real de la cita y complejidad del caso.",
          "Carga de agenda y necesidad de reservar continuidad si el protocolo lo pide.",
        ],
      },
      {
        title: "Cómo se confirma",
        lines: [
          "La confirmación se hace cuando la propuesta encaja de verdad con el tiempo que necesitas.",
          "Normalmente se cierra por WhatsApp porque es el canal más operativo para seguimiento.",
        ],
      },
    ],
  },
  {
    id: "faq-profesional",
    question: "¿Qué profesional me atiende?",
    summary: "Normalmente asignamos según tratamiento y agenda, pero si tienes preferencia nos adaptamos siempre que sea posible.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Asignacion de profesional",
    answerLead:
      "La prioridad es que cada caso lo lleve la profesional adecuada. Si pides a alguien en concreto, intentamos adaptarnos siempre que la agenda lo permita.",
    blocks: [
      {
        title: "Cómo lo decidimos",
        lines: [
          "El tratamiento indicado, la técnica que requiere y el momento del protocolo.",
          "La continuidad del caso para que haya criterio y seguimiento entre visitas.",
        ],
      },
      {
        title: "Si tienes preferencia",
        lines: [
          "Nos adaptamos cuando es posible para respetar tu preferencia sin romper la lógica de agenda.",
          "Si no puede ser, priorizamos que la atención siga teniendo continuidad y criterio.",
        ],
      },
    ],
  },
  {
    id: "faq-cambios-cancelacion",
    question: "¿Se puede cambiar o reordenar una cita?",
    summary: "Sí, avisando con antelación suficiente para poder reorganizar la agenda y mantener la continuidad del plan.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Cambios y cancelaciones",
    answerLead:
      "Siempre que nos avises con tiempo, intentamos recolocar la cita sin perder la lógica del tratamiento ni bloquear agenda innecesariamente.",
    blocks: [
      {
        title: "Cómo hacerlo",
        lines: ["Contacta por WhatsApp o llamada en cuanto sepas que no podrás venir."],
      },
      {
        title: "Importancia",
        lines: ["Avisar con margen permite ofrecer alternativas sin romper tu secuencia de tratamiento."],
      },
    ],
  },
  {
    id: "faq-categorias",
    question: "¿Cómo se organiza el catálogo de tratamientos?",
    summary: "La web ordena la oferta para que comparar sea más fácil, pero la recomendación final siempre sale del diagnóstico.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Estructura actual del catálogo",
    answerLead:
      "El catálogo ayuda a entender familias de tratamiento, pero no sustituye la indicación personalizada ni el criterio con el que se construye el plan.",
    blocks: [
      {
        title: "Categorías principales",
        lines: [
          "Tratamientos de mantenimiento y base para piel y cuerpo.",
          "Protocolos más técnicos con aparatología y objetivos de corrección más visibles.",
          "Tratamientos regenerativos para trabajar calidad de piel, textura y respuesta dérmica.",
        ],
      },
    ],
  },
  {
    id: "faq-combinacion",
    question: "¿Se pueden combinar varios tratamientos?",
    summary: "Sí, y muchas veces es lo que mejor funciona, pero siempre por fases y con criterio.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Combinacion de tratamientos",
    answerLead:
      "En el centro es habitual combinar tratamientos, pero no en la misma sesión sin pensar. Lo importante es la secuencia y la tolerancia de cada piel o cada tejido.",
    blocks: [
      {
        title: "Cómo se combina",
        lines: [
          "Se define un tratamiento principal y, si conviene, uno complementario.",
          "Se distribuye por fases para no sobrecargar la piel ni perder eficacia.",
        ],
      },
      {
        title: "Seguimiento",
        lines: ["Cada bloque se revisa antes de introducir nuevas combinaciones o subir intensidad."],
      },
    ],
  },
  {
    id: "faq-miedo-promesas",
    question: "Me da miedo empezar porque ya me han prometido mucho antes.",
    summary: "Lo entendemos: por eso empezamos por diagnóstico, expectativas realistas y una pauta prudente cuando el caso lo necesita.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Miedo a volver a equivocarse",
    answerLead:
      "Es una objeción muy habitual. Muchas clientas llegan cansadas de promesas rápidas, sesiones mal planteadas o tratamientos que no encajaban con su caso.",
    blocks: [
      {
        title: "Qué validamos primero",
        lines: [
          "Qué te preocupa de verdad, qué has probado antes y por qué no te ha convencido.",
          "Si el tratamiento que estás pensando tiene sentido o si conviene empezar por otra vía.",
        ],
      },
      {
        title: "Cómo bajamos esa duda",
        lines: [
          "No prometemos resultados espectaculares si no son realistas para tu piel, tu vello o tu punto de partida.",
          "Si el caso lo permite, podemos plantear un inicio prudente para que valores con más criterio cómo trabajamos.",
        ],
      },
    ],
  },
  {
    id: "faq-errores-comunes",
    question: "¿Qué errores suele cometer la gente antes de venir?",
    summary: "Autodiagnosticarse, elegir por tendencia o fiarse de recomendaciones sin contexto suele llevar a tratamientos mal indicados.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Errores frecuentes antes de empezar",
    answerLead:
      "El error más común no es no saber, sino decidir demasiado pronto con información incompleta y sin valorar bien el caso.",
    blocks: [
      {
        title: "Lo que vemos a menudo",
        lines: [
          "Elegir un tratamiento por una recomendación suelta, por redes o por una respuesta genérica sin contexto real.",
          "Buscar la máquina, la oferta o la sesión puntual antes de entender qué necesita de verdad la piel, el vello o el tejido.",
        ],
      },
      {
        title: "Qué hacemos diferente",
        lines: [
          "Ordenamos el caso desde el diagnóstico para evitar sobretratar o empezar por donde no toca.",
          "Explicamos el porqué del plan para que la clienta entienda qué conviene hacer ahora y qué no.",
        ],
      },
    ],
  },
  {
    id: "faq-clienta-ideal",
    question: "¿Para qué tipo de clienta suele encajar mejor el centro?",
    summary: "Suele encajar muy bien con mujeres activas y exigentes que quieren resolver vello o mejorar piel con criterio, no probar por probar.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Perfil de clienta que mejor encaja",
    answerLead:
      "Trabajamos con perfiles muy distintos, pero solemos conectar especialmente con clientas que valoran eficacia, transparencia y una estrategia bien planteada.",
    blocks: [
      {
        title: "Perfil habitual",
        lines: [
          "Mujeres activas y exigentes, normalmente entre 30 y 55 años; en láser, el rango más habitual se mueve entre 20 y 45.",
          "Suelen ser profesionales, empresarias o madres con poco tiempo, que buscan criterio y no más pruebas sin dirección.",
        ],
      },
      {
        title: "Qué suelen venir a mejorar",
        lines: [
          "Calidad de piel, deshidratación, primeras arrugas, pérdida de firmeza y signos de envejecimiento.",
          "También vello no deseado, porque muchas quieren olvidarse de él de forma seria y bien planteada.",
        ],
      },
    ],
  },
  {
    id: "faq-top-tratamientos",
    question: "¿Qué es lo que más os piden y qué suele dar mejores resultados?",
    summary: "El láser sigue siendo lo más demandado; después destacan los faciales personalizados con enfoque regenerativo.",
    ctaLabel: "Saber más",
    modalLabel: "FAQs",
    modalTitle: "Tratamientos más demandados y top en resultados",
    answerLead:
      "El láser de diodo sigue siendo el tratamiento más pedido y también uno de los que más resultado da cuando el caso está bien indicado.",
    blocks: [
      {
        title: "Lo más demandado",
        lines: [
          "El láser, especialmente en fototipos II y III, que son muy habituales en nuestro entorno.",
          "Cada vez más, también los tratamientos de regeneración celular por su eficacia y por cómo mejoran la calidad de la piel.",
        ],
      },
      {
        title: "Lo que más resultado suele dar",
        lines: [
          "El láser por su altísima eficacia cuando el protocolo y la continuidad están bien trabajados.",
          "Después, los tratamientos faciales personalizados que suelen incorporar activos y protocolos regenerativos según diagnóstico.",
        ],
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
    question: "Com s'organitza ara el catàleg de tractaments?",
    summary: "S'agrupa en estètica normal, avançada i regenerativa.",
  },
  "faq-combinacion": {
    question: "Puc combinar diversos tractaments?",
    summary: "Si, pero amb ordre i criteri de tolerancia.",
  },
  "faq-miedo-promesas": {
    question: "Em fa respecte comencar perque ja m'han promes massa abans.",
    summary: "Per aixo comencem per diagnosi, expectatives realistes i un inici prudent si cal.",
  },
  "faq-errores-comunes": {
    question: "Quins errors sol cometre la gent abans de venir?",
    summary: "Autodiagnosticar-se o escollir per tendencia sol portar a tractaments mal indicats.",
  },
  "faq-clienta-ideal": {
    question: "Per a quin tipus de clienta sol encaixar millor el centre?",
    summary: "Especialment per a clientes actives i exigents que busquen criteri i resultats ben plantejats.",
  },
  "faq-top-tratamientos": {
    question: "Que es el que mes us demanen i que sol donar millors resultats?",
    summary: "El laser continua sent el mes demanat; despres destaquen els facials personalitzats amb enfoc regeneratiu.",
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
    question: "Comment le catalogue de traitements est-il organisé maintenant?",
    summary: "Il est structuré en esthétique normale, avancée et régénérative.",
  },
  "faq-combinacion": {
    question: "Puis-je combiner plusieurs traitements?",
    summary: "Oui, avec un ordre coherent et un critere de tolerance.",
  },
  "faq-miedo-promesas": {
    question: "J'hesite a commencer parce qu'on m'a deja trop promis avant.",
    summary: "C'est justement pour cela que nous commencons par un diagnostic et des attentes realistes.",
  },
  "faq-errores-comunes": {
    question: "Quelles erreurs les clientes font-elles souvent avant de venir?",
    summary: "S'autodiagnostiquer ou choisir selon la tendance mene souvent a de mauvais choix.",
  },
  "faq-clienta-ideal": {
    question: "Quel type de cliente correspond le mieux au centre?",
    summary: "Surtout des clientes actives et exigeantes qui cherchent un vrai critere, pas un essai de plus.",
  },
  "faq-top-tratamientos": {
    question: "Quels sont les soins les plus demandes et ceux qui donnent le plus de resultats?",
    summary: "Le laser reste le plus demande, puis viennent les soins faciaux personnalises a logique regenerative.",
  },
};

const enFaqCopy: Record<string, { question: string; summary: string }> = {
  "faq-valoracion-coste": {
    question: "Is the initial assessment paid?",
    summary: "We explain when it is informative and when booking conditions apply.",
  },
  "faq-laser-sesiones": {
    question: "How many laser sessions are usually needed?",
    summary: "It depends on area, phototype and biological response.",
  },
  "faq-laser-duele": {
    question: "Is laser hair removal painful?",
    summary: "Sensation is usually tolerable and intensity is adjusted.",
  },
  "faq-verano": {
    question: "Can I continue treatments in summer?",
    summary: "Yes, with the right protocol and strict sun protection.",
  },
  "faq-no-se-por-donde-empezar": {
    question: "What treatment should I choose if I do not know where to start?",
    summary: "The first visit is designed exactly for that scenario.",
  },
  "faq-duracion-cita": {
    question: "How long does an appointment take?",
    summary: "Depending on treatment, usually between 30 and 70 minutes.",
  },
  "faq-whatsapp": {
    question: "Can I book through WhatsApp?",
    summary: "Yes, it is one of the centre's main channels.",
  },
  "faq-confirmacion-cita": {
    question: "How is the appointment confirmed?",
    summary: "With a confirmation message and a prior reminder.",
  },
  "faq-profesional": {
    question: "Which professional will treat me?",
    summary: "Assignment is based on specialty and treatment type.",
  },
  "faq-cambios-cancelacion": {
    question: "Can I reschedule or cancel an appointment?",
    summary: "Yes, with prior notice so the agenda can be reorganized.",
  },
  "faq-categorias": {
    question: "How is the treatments catalogue organised now?",
    summary: "It is grouped into normal, advanced and regenerative aesthetics.",
  },
  "faq-combinacion": {
    question: "Can I combine several treatments?",
    summary: "Yes, with the right order and tolerance criteria.",
  },
  "faq-miedo-promesas": {
    question: "I am hesitant to start because I have already been promised too much before.",
    summary: "That is exactly why we begin with diagnosis, realistic expectations and a prudent start when needed.",
  },
  "faq-errores-comunes": {
    question: "What mistakes do people usually make before coming?",
    summary: "Self-diagnosing or choosing by trends often leads to poorly indicated treatments.",
  },
  "faq-clienta-ideal": {
    question: "What kind of client tends to fit the centre best?",
    summary: "Mostly active, demanding clients looking for real judgement and long-term improvement.",
  },
  "faq-top-tratamientos": {
    question: "What do clients ask for the most and what usually gives the best results?",
    summary: "Laser remains the most requested treatment, followed by personalised regenerative facial protocols.",
  },
};

const ukFaqCopy: Record<string, { question: string; summary: string }> = {
  "faq-valoracion-coste": {
    question: "Перша консультація платна?",
    summary: "Пояснюємо, коли вона інформаційна, а коли застосовуються умови запису.",
  },
  "faq-laser-sesiones": {
    question: "Скільки сеансів лазера зазвичай потрібно?",
    summary: "Залежить від зони, фототипу та біологічної реакції.",
  },
  "faq-laser-duele": {
    question: "Лазерна епіляція болюча?",
    summary: "Відчуття зазвичай терпимі, інтенсивність підлаштовується.",
  },
  "faq-verano": {
    question: "Чи можна проходити процедури влітку?",
    summary: "Так, з правильним протоколом і суворим фотозахистом.",
  },
  "faq-no-se-por-donde-empezar": {
    question: "Яку процедуру обрати, якщо не знаю з чого почати?",
    summary: "Перший візит якраз створено для такого випадку.",
  },
  "faq-duracion-cita": {
    question: "Скільки триває візит?",
    summary: "Залежно від процедури, у середньому від 30 до 70 хвилин.",
  },
  "faq-whatsapp": {
    question: "Чи можу я записатися через WhatsApp?",
    summary: "Так, це один з основних каналів центру.",
  },
  "faq-confirmacion-cita": {
    question: "Як підтверджується запис?",
    summary: "Через повідомлення з підтвердженням і попереднім нагадуванням.",
  },
  "faq-profesional": {
    question: "Який спеціаліст мене прийматиме?",
    summary: "Призначення залежить від спеціалізації та типу процедури.",
  },
  "faq-cambios-cancelacion": {
    question: "Чи можна змінити або скасувати запис?",
    summary: "Так, якщо попередити завчасно для переналаштування графіка.",
  },
  "faq-categorias": {
    question: "Як зараз організовано каталог процедур?",
    summary: "Його згруповано у базову, просунуту та регенеративну естетику.",
  },
  "faq-combinacion": {
    question: "Чи можна комбінувати кілька процедур?",
    summary: "Так, за умови правильного порядку і контролю толерантності.",
  },
  "faq-miedo-promesas": {
    question: "Я вагаюся починати, бо раніше мені вже багато обіцяли.",
    summary: "Саме тому ми починаємо з діагностики, реалістичних очікувань і обережного старту за потреби.",
  },
  "faq-errores-comunes": {
    question: "Які помилки люди найчастіше роблять перед візитом?",
    summary: "Самодіагностика або вибір за трендом часто ведуть до неправильно підібраних процедур.",
  },
  "faq-clienta-ideal": {
    question: "Для якого типу клієнток центр зазвичай підходить найкраще?",
    summary: "Переважно для активних і вимогливих клієнток, яким потрібен критерій, а не ще одна спроба навмання.",
  },
  "faq-top-tratamientos": {
    question: "Що у вас просять найчастіше і що зазвичай дає найкращі результати?",
    summary: "Лазер залишається найпопулярнішим, далі йдуть персоналізовані регенеративні facial-протоколи.",
  },
};

const ruFaqCopy: Record<string, { question: string; summary: string }> = {
  "faq-valoracion-coste": {
    question: "Первичная консультация платная?",
    summary: "Объясняем, когда она информационная, а когда действуют условия записи.",
  },
  "faq-laser-sesiones": {
    question: "Сколько сеансов лазера обычно требуется?",
    summary: "Зависит от зоны, фототипа и биологической реакции.",
  },
  "faq-laser-duele": {
    question: "Лазерная эпиляция болезненна?",
    summary: "Ощущения обычно терпимые, интенсивность настраивается.",
  },
  "faq-verano": {
    question: "Можно ли проходить процедуры летом?",
    summary: "Да, при корректном протоколе и строгой фотозащите.",
  },
  "faq-no-se-por-donde-empezar": {
    question: "Какую процедуру выбрать, если не знаю с чего начать?",
    summary: "Первый визит как раз создан для такого случая.",
  },
  "faq-duracion-cita": {
    question: "Сколько длится визит?",
    summary: "В зависимости от процедуры, обычно от 30 до 70 минут.",
  },
  "faq-whatsapp": {
    question: "Можно записаться через WhatsApp?",
    summary: "Да, это один из основных каналов центра.",
  },
  "faq-confirmacion-cita": {
    question: "Как подтверждается запись?",
    summary: "Сообщением с подтверждением и предварительным напоминанием.",
  },
  "faq-profesional": {
    question: "Какой специалист меня примет?",
    summary: "Назначение зависит от специализации и типа процедуры.",
  },
  "faq-cambios-cancelacion": {
    question: "Можно ли перенести или отменить запись?",
    summary: "Да, при предварительном уведомлении для корректировки графика.",
  },
  "faq-categorias": {
    question: "Как сейчас организован каталог процедур?",
    summary: "Он сгруппирован в базовую, продвинутую и регенеративную эстетику.",
  },
  "faq-combinacion": {
    question: "Можно комбинировать несколько процедур?",
    summary: "Да, при правильной последовательности и контроле переносимости.",
  },
  "faq-miedo-promesas": {
    question: "Мне страшно начинать, потому что раньше мне уже слишком много обещали.",
    summary: "Именно поэтому мы начинаем с диагностики, реалистичных ожиданий и аккуратного старта, если это нужно.",
  },
  "faq-errores-comunes": {
    question: "Какие ошибки люди чаще всего совершают до визита?",
    summary: "Самодиагностика или выбор по трендам часто приводят к неправильно подобранным процедурам.",
  },
  "faq-clienta-ideal": {
    question: "Какому типу клиенток центр подходит лучше всего?",
    summary: "Прежде всего активным и требовательным клиенткам, которым нужен критерий, а не еще одна попытка наугад.",
  },
  "faq-top-tratamientos": {
    question: "Что у вас просят чаще всего и что обычно дает лучшие результаты?",
    summary: "Лазер остается самым востребованным, затем идут персонализированные регенеративные facial-протоколы.",
  },
};

type LocalizedFaqOptions = {
  ctaLabel: string;
  detailsTitle: string;
  detailsLineA: string;
  detailsLineB: string;
  modalLabel: string;
};

function buildLocalizedFaqs(
  copy: Record<string, { question: string; summary: string }>,
  options: LocalizedFaqOptions,
): HomeFaqItem[] {
  return sharedFaqs.map((item) => {
    const localized = copy[item.id];

    if (!localized) {
      return item;
    }

    return {
      ...item,
      question: localized.question,
      summary: localized.summary,
      ctaLabel: options.ctaLabel,
      modalLabel: options.modalLabel,
      modalTitle: localized.question,
      answerLead: localized.summary,
      blocks: [
        {
          title: options.detailsTitle,
          lines: [options.detailsLineA, options.detailsLineB],
        },
      ],
    };
  });
}

const esHome: HomePremiumContent = {
  closeModalLabel: "Cerrar",
  hero: {
    eyebrow: "Centros Ideal Andorra · Láser y regeneración",
    titleLead: "Láser de diodo",
    titleStrong: "y protocolos regenerativos",
    titleTail: "diseñados con criterio, no al azar.",
    description:
      "Valoración diagnóstica de unos 30 minutos para entender tu caso, priorizar objetivos y definir un plan de tratamiento realista desde la primera visita.",
    support:
      "Pensado para clientas activas y exigentes que quieren mejorar calidad de piel, firmeza o vello sin seguir probando a ciegas: aquí no trabajamos con protocolos estándar ni con sesiones sueltas sin estrategia.",
    highlights: ["Diagnóstico previo", "Protocolos personalizados", "Resultados visibles y sostenibles"],
    locationChip: "Escaldes-Engordany · illa Carlemany · 2a planta",
    locationLabel: "Ubicación operativa",
    addressLine: "Av. Carlemany, 70, AD700 Andorra",
    floorLine: "Centre Comercial illa Carlemany - segunda planta",
    hoursLine: "Lunes a sábado de 10:00 a 20:30 · domingo de 10:00 a 20:00.",
    mapCta: "Abrir en Google Maps",
    routeCta: "Cómo llegar",
  },
  firstVisitLabel: "Primera visita",
  firstVisitTitle: "Aquí no se agenda un tratamiento sin diagnóstico previo.",
  firstVisitDescription:
    "Primero entendemos qué te preocupa, qué necesita realmente tu piel o tu zona y qué tratamiento tiene sentido indicar. Después definimos plan, continuidad e inversión.",
  firstVisitItems: [
    {
      id: "diagnostico",
      title: "Diagnóstico previo",
      summary: "Valoramos inquietud real, estado de la piel o del vello y si el tratamiento está bien indicado.",
      ctaLabel: "Saber más",
      modalLabel: "Primera visita",
      modalTitle: "Diagnostico inicial",
      modalIntro:
        "La primera visita no es una charla comercial ni una sesión vendida sin contexto. Es el momento en el que decidimos si el tratamiento tiene sentido y cómo debería plantearse.",
      blocks: [
        {
          title: "Qué revisamos",
          lines: [
            "Qué te preocupa de verdad, qué has probado antes y qué resultado esperas.",
            "Estado de la piel, fototipo, tolerancia y factores que condicionan el protocolo.",
            "Si conviene empezar, esperar o enfocar el caso por otra vía.",
          ],
        },
        {
          title: "Qué obtiene la clienta",
          lines: [
            "Una recomendación clara sobre por dónde empezar y qué no conviene hacer todavía.",
            "Una expectativa realista de tiempos, continuidad y evolución.",
          ],
        },
      ],
    },
    {
      id: "plan-recomendado",
      title: "Plan por fases",
      summary: "Diseñamos un protocolo adaptado, con orden de prioridades, frecuencia y seguimiento.",
      ctaLabel: "Saber más",
      modalLabel: "Primera visita",
      modalTitle: "Plan recomendado",
      modalIntro:
        "No planteamos sesiones aisladas cuando el caso necesita estrategia. Definimos una ruta realista con prioridad, continuidad y margen para reajustar.",
      blocks: [
        {
          title: "Qué tiene en cuenta el plan",
          lines: [
            "Tu objetivo principal, el tiempo que realmente tienes y cómo responde tu piel o tu vello.",
            "Si conviene una sesión individual o un bono con ventajas y continuidad más cómodas.",
            "Qué revisaremos para mantener el plan útil y adaptado a resultados.",
          ],
        },
      ],
    },
  ],
  methodLabel: "Metodo",
  methodTitle: "Protocolos personalizados, seguimiento real y ajustes según respuesta.",
  methodDescription:
    "Nuestra diferencia no es vender más sesiones, sino trabajar con criterio: diagnosticar, indicar, ejecutar y readaptar cuando el caso lo necesita.",
  methodStages: [
    {
      id: "01",
      title: "Diagnóstico técnico",
      subtitle: "Definimos el punto de partida real",
      description: "Analizamos piel, vello, objetivo, tolerancia y lo que tiene sentido indicar ahora.",
      signals: ["Diagnóstico previo", "Objetivo prioritario", "Tratamiento bien indicado"],
    },
    {
      id: "02",
      title: "Plan personalizado",
      subtitle: "Ordenamos el tratamiento por fases",
      description: "Estructuramos la continuidad, la frecuencia y la inversión para que el proceso sea sostenible y útil.",
      signals: ["Protocolo a medida", "Bono o sesión suelta", "Continuidad realista"],
    },
    {
      id: "03",
      title: "Ejecución con criterio",
      subtitle: "Aplicamos según respuesta real",
      description: "Cada sesión se adapta a la zona, al fototipo, a la tolerancia y al momento exacto del tratamiento.",
      signals: ["Parámetros ajustados", "Cuidados pre y post", "Seguridad del protocolo"],
    },
    {
      id: "04",
      title: "Seguimiento y reajuste",
      subtitle: "No seguimos por inercia",
      description: "Si la respuesta cambia, el plan también. Revisamos evolución para mantener eficacia sin sobretratar.",
      signals: ["Revisión de evolución", "Ajuste de fases", "Mantenimiento cuando toca"],
    },
  ],
  treatmentsLabel: "Tratamientos",
  treatmentsTitle: "Láser, faciales y corporales con una lógica clara detrás.",
  treatmentsDescription:
    "Trabajamos sobre lo que más suele preocupar: vello, calidad de piel, primeras arrugas, pérdida de firmeza, manchas y necesidades corporales concretas. El catálogo está ordenado para comparar mejor, pero la indicación final siempre nace del diagnóstico.",
  treatmentsBridge: "Ver catálogo completo",
  teamLabel: "Equipo",
  teamTitle: "Cercanía, exigencia y una misma forma de trabajar.",
  teamDescription:
    "La clienta no entra a hacerse algo más. Entra a sentirse escuchada, tranquila y con la sensación de que aquí viene a mejorar de verdad, con un equipo implicado en cada fase.",
  teamMembers: sharedTeam,
  teamModalLabels: {
    years: "años",
    profile: "Perfil profesional",
    experience: "Qué aporta en el centro",
    studies: "Cómo trabaja",
    treatments: "Tratamientos en los que suele intervenir",
    approach: "Qué puede esperar la clienta",
    languages: "Idiomas",
  },
  processLabel: "Proceso",
  processTitle: "Desde el primer contacto hasta el seguimiento, todo tiene un porqué.",
  processDescription:
    "La gestión es simple para la clienta, pero por detrás hay criterio: canal de entrada, confirmación real, diagnóstico y continuidad bien planteada.",
  processSteps: [
    {
      id: "01",
      title: "Primer contacto",
      description: "Nos escribes por WhatsApp, nos llamas o vienes al centro.",
      detail: "Tomamos el motivo de la consulta y la franja horaria que mejor te encaja para empezar a gestionar la cita.",
    },
    {
      id: "02",
      title: "Confirmación de agenda",
      description: "Revisamos disponibilidad real según duración y tipo de cita.",
      detail: "Lo habitual es trabajar con disponibilidad entre una y dos semanas, aunque depende del caso y de la agenda activa.",
    },
    {
      id: "03",
      title: "Primera visita",
      description: "En unos 30 minutos entendemos el caso y proponemos el tratamiento adecuado.",
      detail: "No se agenda una sesión a ciegas: primero diagnosticamos, resolvemos objeciones y planteamos el protocolo.",
    },
    {
      id: "04",
      title: "Inicio y seguimiento",
      description: "Si decides empezar, organizamos la continuidad y reajustamos según evolución.",
      detail: "La lógica del centro es trabajar procesos bien hechos, no encadenar sesiones sin estrategia ni control.",
    },
  ],
  faqLabel: "Preguntas frecuentes",
  faqTitle: "Las dudas que más ayudan a decidir bien antes de reservar.",
  faqDescription:
    "Recogemos las preguntas que más se repiten en diagnóstico, láser, microneedling, continuidad, agenda, inversión y objeciones reales para que el proceso se entienda antes de empezar.",
  faqItems: sharedFaqs,
};

const caHome: HomePremiumContent = {
  ...esHome,
  closeModalLabel: "Tancar",
  hero: {
    ...esHome.hero,
    eyebrow: "Centres Ideal Andorra - illa Carlemany",
    titleLead: "Depilacio laser de diode",
    titleStrong: "i estètica avançada",
    titleTail: "amb protocol professional real.",
    description:
      "Primera visita de 30 minuts per diagnosticar, prioritzar objectius i definir un pla clar des del primer dia.",
    support: "Centre a Escaldes-Engordany, amb atenció per agenda i seguiment actiu.",
    highlights: ["Diagnosi inicial", "Pla recomanat", "Seguiment per fases"],
    locationChip: "Escaldes-Engordany · illa Carlemany · 2a planta",
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
    "Explora per categoria, compara tractaments i entra a la fitxa completa de cada servei.",
  treatmentsBridge: "Veure catàleg complet",
  teamLabel: "Equip",
  teamTitle: "Tres professionals, un mateix estàndard de treball.",
  teamDescription:
    "Humanitzem la marca amb perfils reals, especialitats clares i un enfocament d'acompanyament.",
  teamMembers: sharedTeam,
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
  faqItems: buildLocalizedFaqs(caFaqCopy, {
    ctaLabel: "Saber-ne mes",
    detailsTitle: "Detalls clau",
    detailsLineA: "La recomanacio final es confirma durant la visita presencial.",
    detailsLineB: "L'equip adapta el pla segons objectiu, agenda i tolerancia.",
    modalLabel: "FAQs",
  }),
};

const frHome: HomePremiumContent = {
  ...esHome,
  closeModalLabel: "Fermer",
  hero: {
    ...esHome.hero,
    eyebrow: "Centres Ideal Andorre - illa Carlemany",
    titleLead: "Epilation laser diode",
    titleStrong: "et esthétique avancée",
    titleTail: "avec un protocole professionnel reel.",
    description:
      "Premiere visite de 30 minutes pour diagnostiquer, prioriser les objectifs et definir un plan clair des le debut.",
    support: "Centre situe a Escaldes-Engordany, avec prise en charge sur rendez-vous et suivi actif.",
    highlights: ["Diagnostic initial", "Plan recommande", "Suivi par phases"],
    locationChip: "Escaldes-Engordany · illa Carlemany · 2e etage",
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
    "Explorez par catégorie, comparez les soins et ouvrez la fiche complète de chaque service.",
  treatmentsBridge: "Voir le catalogue complet",
  teamLabel: "Equipe",
  teamTitle: "Trois professionnelles, un meme niveau d'exigence.",
  teamDescription:
    "Nous humanisons la marque avec des profils réels, des spécialités claires et un accompagnement precis.",
  teamMembers: sharedTeam,
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
  faqItems: buildLocalizedFaqs(frFaqCopy, {
    ctaLabel: "En savoir plus",
    detailsTitle: "Details cles",
    detailsLineA: "La recommandation finale est confirmee pendant la visite presentielle.",
    detailsLineB: "L'equipe adapte le plan selon l'objectif, l'agenda et la tolerance.",
    modalLabel: "FAQs",
  }),
};

const enHome: HomePremiumContent = {
  ...esHome,
  closeModalLabel: "Close",
  hero: {
    ...esHome.hero,
    eyebrow: "Centres Ideal Andorra - illa Carlemany",
    titleLead: "Diode laser hair removal",
    titleStrong: "and advanced aesthetics",
    titleTail: "with a real professional protocol.",
    description:
      "A 30-minute first visit to diagnose, prioritise goals and define a clear treatment plan from day one.",
    support: "Centre in Escaldes-Engordany, agenda-based care and active follow-up.",
    highlights: ["Initial diagnosis", "Recommended plan", "Phase-by-phase follow-up"],
    locationChip: "Escaldes-Engordany · illa Carlemany · 2nd floor",
    locationLabel: "Operational location",
    floorLine: "illa Carlemany Shopping Centre - second floor",
    hoursLine: "Monday to Saturday from 10:00 to 20:30 · Sunday from 10:00 to 20:00.",
    mapCta: "Open in Google Maps",
    routeCta: "How to get there",
  },
  firstVisitLabel: "First visit",
  firstVisitTitle: "An assessment that gives clear decisions, not doubts.",
  firstVisitDescription:
    "We turn your first appointment into a technical-commercial control point to understand your case, order priorities and define your plan.",
  firstVisitItems: [
    {
      id: "diagnostico",
      title: "Diagnosis",
      summary: "Professional reading of your current skin condition or treatment area.",
      ctaLabel: "Learn more",
      modalLabel: "First visit",
      modalTitle: "Initial diagnosis",
      modalIntro:
        "Diagnosis is not a sales conversation: it is a structured review to identify real needs and avoid overtreatment.",
      blocks: [
        {
          title: "What we analyse",
          lines: [
            "Skin condition, tolerance and relevant background.",
            "Main objective and real urgency for each area.",
            "Compatibility with available in-centre protocols.",
          ],
        },
        {
          title: "What you get",
          lines: [
            "A clear explanation of what should start now and what should wait.",
            "Indicative timeline and continuity expectations.",
          ],
        },
      ],
    },
    {
      id: "plan-recomendado",
      title: "Recommended plan",
      summary: "Phase-based route with priorities, frequency and follow-up.",
      ctaLabel: "Learn more",
      modalLabel: "First visit",
      modalTitle: "Recommended plan",
      modalIntro:
        "We define a personalised proposal with operational criteria: initial phase, consolidation phase and maintenance.",
      blocks: [
        {
          title: "What we consider",
          lines: [
            "Main aesthetic goal and secondary goals.",
            "Real agenda availability and sustainable session pace.",
            "Expected response according to your profile and tolerance.",
          ],
        },
        {
          title: "How we build it",
          lines: [
            "Treatments prioritised by impact and safety.",
            "Indicative frequency and review checkpoints.",
            "Care recommendations between sessions.",
          ],
        },
      ],
    },
  ],
  methodLabel: "Method",
  methodTitle: "Premium protocol in four operational phases.",
  methodDescription:
    "We replace vague statements with a verifiable process: diagnosis, execution, follow-up and adjustment.",
  methodStages: [
    {
      id: "01",
      title: "Diagnosis and criteria",
      subtitle: "Define the real starting point",
      description: "We analyse current status, priority and realistic margin for progression.",
      signals: ["Case history", "Main objective", "Valid indication"],
    },
    {
      id: "02",
      title: "Plan design",
      subtitle: "Treatment sequencing by stages",
      description: "We sequence techniques and frequency without overloading the skin.",
      signals: ["Phase-based plan", "Indicative frequency", "Informed consent"],
    },
    {
      id: "03",
      title: "Controlled execution",
      subtitle: "Technical application and traceability",
      description: "We log session parameters to guide decisions at the next visit.",
      signals: ["Pre-session checklist", "Technical log", "Care closure"],
    },
    {
      id: "04",
      title: "Follow-up and adjustment",
      subtitle: "Evidence-based evolution",
      description: "We review response, adjust rhythm and consolidate maintenance.",
      signals: ["Progress review", "Plan adjustment", "Continuity"],
    },
  ],
  treatmentsLabel: "Treatments",
  treatmentsTitle: "A broad offer, clearly structured and easy to explore.",
  treatmentsDescription:
    "Explore by category, compare treatments and open the full page of each service.",
  treatmentsBridge: "View full catalogue",
  teamLabel: "Team",
  teamTitle: "Three professionals, one quality standard.",
  teamDescription:
    "We humanise the brand with real profiles, clear specialties and a strong accompaniment mindset.",
  teamMembers: sharedTeam,
  teamModalLabels: {
    years: "years",
    profile: "Professional profile",
    experience: "Experience",
    studies: "Training",
    treatments: "Treatments performed",
    approach: "Client approach",
    languages: "Languages",
  },
  processLabel: "Process",
  processTitle: "From first request to confirmed booking, without friction.",
  processDescription: "Every step has a clear action so the client knows what to expect and when.",
  processSteps: [
    {
      id: "01",
      title: "Initial request",
      description: "You share objective, area and preferred time slot.",
      detail: "You can start via WhatsApp or web booking; we prioritise response within operating hours.",
    },
    {
      id: "02",
      title: "Pre-confirmation",
      description: "We validate availability and solve preliminary questions.",
      detail: "We send booking conditions, pre-visit preparation and follow-up channel.",
    },
    {
      id: "03",
      title: "First visit",
      description: "Diagnosis and recommended plan at the centre.",
      detail: "You leave with a structured proposal and clear next steps.",
    },
    {
      id: "04",
      title: "Treatment booking",
      description: "We confirm the next appointment based on priority and agenda.",
      detail: "Continuity is planned in blocks to sustain rhythm and outcomes.",
    },
  ],
  faqLabel: "Frequently asked questions",
  faqTitle: "Real FAQs so you can decide confidently before booking.",
  faqDescription:
    "We answer the most common first-visit and follow-up questions so your process is clear from the start.",
  faqItems: buildLocalizedFaqs(enFaqCopy, {
    ctaLabel: "Learn more",
    detailsTitle: "Key details",
    detailsLineA: "The final recommendation is confirmed during your in-person visit.",
    detailsLineB: "The team adapts the plan to objective, agenda and tolerance.",
    modalLabel: "FAQs",
  }),
};

const ukHome: HomePremiumContent = {
  ...enHome,
  closeModalLabel: "Закрити",
  hero: {
    ...enHome.hero,
    eyebrow: "Centres Ideal Andorra - illa Carlemany",
    titleLead: "Діодна лазерна епіляція",
    titleStrong: "та розширена естетика",
    titleTail: "з реальним професійним протоколом.",
    description:
      "Перший візит триває 30 хвилин: діагностика, пріоритети та чіткий план дій з першого дня.",
    support: "Центр у Escaldes-Engordany, робота за записом і активний супровід.",
    highlights: ["Початкова діагностика", "Рекомендований план", "Супровід за фазами"],
    locationChip: "Escaldes-Engordany · illa Carlemany · 2-й поверх",
    locationLabel: "Локація центру",
    floorLine: "illa Carlemany - другий поверх",
    hoursLine: "Графік керується попереднім записом і підтвердженням у WhatsApp.",
    mapCta: "Відкрити в Google Maps",
    routeCta: "Як дістатися",
  },
  firstVisitLabel: "Перший візит",
  firstVisitTitle: "Консультація, після якої залишаються рішення, а не сумніви.",
  firstVisitDescription:
    "Ми перетворюємо перший візит на технічно зрозумілу точку контролю: аналізуємо кейс, розставляємо пріоритети і формуємо план.",
  firstVisitItems: [
    {
      id: "diagnostico",
      title: "Діагностика",
      summary: "Професійна оцінка поточного стану шкіри або зони роботи.",
      ctaLabel: "Детальніше",
      modalLabel: "Перший візит",
      modalTitle: "Початкова діагностика",
      modalIntro:
        "Діагностика - це не продажова розмова, а структурований розбір реальних потреб і ризиків перевантаження шкіри.",
      blocks: [
        {
          title: "Що ми аналізуємо",
          lines: [
            "Стан шкіри, переносимість і релевантний анамнез.",
            "Головну ціль і фактичну терміновість кожної зони.",
            "Сумісність із протоколами, доступними в центрі.",
          ],
        },
        {
          title: "Що ви отримуєте",
          lines: [
            "Чітке пояснення, що варто запускати зараз, а що краще відкласти.",
            "Орієнтовні терміни та логіку безперервності плану.",
          ],
        },
      ],
    },
    {
      id: "plan-recomendado",
      title: "Рекомендований план",
      summary: "Маршрут за фазами з пріоритетами, частотою та супроводом.",
      ctaLabel: "Детальніше",
      modalLabel: "Перший візит",
      modalTitle: "Рекомендований план",
      modalIntro:
        "Ми формуємо персоналізовану пропозицію з операційним критерієм: стартова фаза, консолідація і підтримка.",
      blocks: [
        {
          title: "Що враховуємо",
          lines: [
            "Основну естетичну ціль і другорядні задачі.",
            "Реальну доступність графіка та стійкий ритм сесій.",
            "Очікувану відповідь шкіри з урахуванням профілю та переносимості.",
          ],
        },
        {
          title: "Як будуємо план",
          lines: [
            "Пріоритизація процедур за впливом і безпекою.",
            "Орієнтовна частота та точки перегляду.",
            "Рекомендації між сесіями для стабільного результату.",
          ],
        },
      ],
    },
  ],
  methodLabel: "Метод",
  methodTitle: "Преміальний протокол у чотирьох операційних фазах.",
  methodDescription:
    "Ми замінюємо загальні обіцянки на перевірюваний процес: діагностика, виконання, супровід і корекція.",
  methodStages: [
    {
      id: "01",
      title: "Діагностика і критерії",
      subtitle: "Фіксуємо реальну стартову точку",
      description: "Оцінюємо поточний стан, пріоритет і реалістичний запас прогресу.",
      signals: ["Історія кейсу", "Головна ціль", "Валідне показання"],
    },
    {
      id: "02",
      title: "Дизайн плану",
      subtitle: "Вибудовуємо лікування по етапах",
      description: "Секвенуємо техніки та частоту без перевантаження шкіри.",
      signals: ["План за фазами", "Орієнтовна частота", "Інформована згода"],
    },
    {
      id: "03",
      title: "Контрольоване виконання",
      subtitle: "Технічність і відстежуваність",
      description: "Фіксуємо параметри сесії для якісного рішення на наступному візиті.",
      signals: ["Контроль перед сесією", "Технічний запис", "Рекомендації після сесії"],
    },
    {
      id: "04",
      title: "Супровід і корекція",
      subtitle: "Еволюція на основі фактів",
      description: "Переглядаємо відповідь, коригуємо ритм і закріплюємо підтримку.",
      signals: ["Оцінка прогресу", "Корекція плану", "Безперервність"],
    },
  ],
  treatmentsLabel: "Процедури",
  treatmentsTitle: "Широка пропозиція, структурована і зручна для вибору.",
  treatmentsDescription:
    "Переглядайте за категоріями й відкривайте кожну картку без переходу зі сторінки, щоб порівнювати цілі, тривалість і доцільність.",
  treatmentsBridge: "Переглянути весь каталог",
  teamLabel: "Команда",
  teamTitle: "Три фахівчині, один стандарт якості.",
  teamDescription:
    "Ми показуємо реальні профілі, чіткі спеціалізації та супровід, у якому клієнтці все зрозуміло.",
  teamMembers: sharedTeam.map((member) => ({
    ...member,
    role: member.id === "eli" ? "Керівниця центру" : "Естетична спеціалістка",
    specialty:
      member.id === "eli"
        ? "Керування центром, діагностика і планування процедур"
        : member.id === "jaquie"
          ? "Діодний лазер, радіочастота та розширені протоколи для обличчя"
          : "Регенеративна естетика і якість шкіри",
    excerpt:
      member.id === "eli"
        ? "Координує стандарт сервісу, графік і фінальну валідацію кожного плану."
        : member.id === "jaquie"
          ? "Виконує інтенсивні протоколи з технічним контролем і комфортом клієнтки."
          : "Формує протоколи відновлення шкіри та підтримки результатів.",
    ctaLabel: "Детальніше",
    modalLabel: "Команда",
    modalTitle: member.id === "eli" ? "Eli - Керівниця центру" : member.id === "jaquie" ? "Jaquie - Естетична спеціалістка" : "Karen - Естетична спеціалістка",
    motivation:
      member.id === "eli"
        ? "Працюю так, щоб кожна клієнтка виходила з чітким, реалістичним і добре поясненим планом."
        : member.id === "jaquie"
          ? "Поєдную технічну точність і підтримувальний контакт, щоб кожна сесія була ефективною і передбачуваною."
          : "Мій фокус - відновлення шкірного комфорту та довгострокова якість результату.",
    experience:
      member.id === "eli"
        ? ["Понад 14 років в управлінні естетичними центрами.", "Координація команди та протоколів супроводу."]
        : member.id === "jaquie"
          ? ["9 років у діодному лазері та технологічних протоколах.", "Робота за фазами з контролем відповіді шкіри."]
          : ["10 років у регенеративних протоколах і бар'єрній підтримці.", "Супровід чутливих і реактивних кейсів."],
    studies:
      member.id === "eli"
        ? ["Поглиблена освіта в інтегральній естетиці.", "Підготовка з клієнтського досвіду та операційної роботи."]
        : member.id === "jaquie"
          ? ["Поглиблена технічна підготовка з естетики та апаратних методик.", "Безперервне навчання в енергетичних і радіочастотних протоколах."]
          : ["Підготовка з прикладної дермокосметики і фізіології шкіри.", "Спеціалізація на неінвазивних регенеративних техніках."],
    treatments:
      member.id === "eli"
        ? ["Початкова діагностика", "Рекомендований план", "Контрольний перегляд"]
        : member.id === "jaquie"
          ? ["Діодна лазерна епіляція", "Радіочастота обличчя", "Розширена гідродермабразія"]
          : ["Протокол шкірного бар'єру", "LED-біостимуляція", "Регенеративний догляд периорбітальної зони"],
    approach:
      member.id === "eli"
        ? ["Чітко пояснює рішення перед стартом кожної фази.", "Підтримує логічну безперервність графіка й плану."]
        : member.id === "jaquie"
          ? ["Налаштовує параметри по зоні і переносимості.", "Дає чіткі до- та післяпроцедурні рекомендації."]
          : ["Веде поступову інтенсивність за реальною переносимістю.", "Комбінує кабінетний протокол і домашню рутину."],
    languages: ["Іспанська", "Каталанська", "Французька", "Англійська"],
  })),
  processLabel: "Процес",
  processTitle: "Від першого запиту до підтвердженого запису без зайвих кроків.",
  processDescription: "Кожен етап чіткий, щоб клієнтка розуміла, що саме відбудеться і коли.",
  processSteps: [
    {
      id: "01",
      title: "Початковий запит",
      description: "Ви надсилаєте ціль, зону і бажаний часовий слот.",
      detail: "Почати можна через WhatsApp або форму сайту; відповідаємо в операційний час центру.",
    },
    {
      id: "02",
      title: "Попереднє підтвердження",
      description: "Перевіряємо доступність і закриваємо попередні запитання.",
      detail: "Надсилаємо умови візиту, підготовку перед сесією та канал супроводу.",
    },
    {
      id: "03",
      title: "Перший візит",
      description: "Діагностика і рекомендація плану в центрі.",
      detail: "Ви отримуєте структуровану пропозицію та зрозумілі наступні кроки.",
    },
    {
      id: "04",
      title: "Запис на процедуру",
      description: "Підтверджуємо наступну сесію за пріоритетом і графіком.",
      detail: "Безперервність планується блоками для стабільного темпу й результату.",
    },
  ],
  faqLabel: "Поширені запитання",
  faqTitle: "Практичні FAQ, щоб приймати рішення впевнено ще до запису.",
  faqDescription:
    "Відповідаємо на найчастіші питання перед першим візитом і під час супроводу, щоб шлях був прозорим від початку.",
  teamModalLabels: {
    years: "років",
    profile: "Профіль спеціаліста",
    experience: "Досвід",
    studies: "Навчання",
    treatments: "Процедури",
    approach: "Підхід до клієнтів",
    languages: "Мови",
  },
  faqItems: buildLocalizedFaqs(ukFaqCopy, {
    ctaLabel: "Детальніше",
    detailsTitle: "Ключові деталі",
    detailsLineA: "Фінальну рекомендацію підтверджують під час очної консультації.",
    detailsLineB: "Команда адаптує план під цілі, графік і переносимість.",
    modalLabel: "FAQ",
  }),
};

const ruHome: HomePremiumContent = {
  ...enHome,
  closeModalLabel: "Закрыть",
  hero: {
    ...enHome.hero,
    eyebrow: "Centres Ideal Andorra - illa Carlemany",
    titleLead: "Диодная лазерная эпиляция",
    titleStrong: "и продвинутая эстетика",
    titleTail: "с реальным профессиональным протоколом.",
    description:
      "Первый визит длится 30 минут: диагностика, приоритеты и четкий план действий с первого дня.",
    support: "Центр в Escaldes-Engordany, работа по записи и активное сопровождение.",
    highlights: ["Первичная диагностика", "Рекомендованный план", "Сопровождение по фазам"],
    locationChip: "Escaldes-Engordany · illa Carlemany · 2-й этаж",
    locationLabel: "Локация центра",
    floorLine: "illa Carlemany - второй этаж",
    hoursLine: "График ведется по предварительной записи и подтверждению в WhatsApp.",
    mapCta: "Открыть в Google Maps",
    routeCta: "Как добраться",
  },
  firstVisitLabel: "Первый визит",
  firstVisitTitle: "Консультация, после которой остаются решения, а не сомнения.",
  firstVisitDescription:
    "Мы превращаем первый визит в понятную техническую точку контроля: анализируем кейс, расставляем приоритеты и формируем план.",
  firstVisitItems: [
    {
      id: "diagnostico",
      title: "Диагностика",
      summary: "Профессиональная оценка текущего состояния кожи или рабочей зоны.",
      ctaLabel: "Подробнее",
      modalLabel: "Первый визит",
      modalTitle: "Первичная диагностика",
      modalIntro:
        "Диагностика - это не продажная беседа, а структурированный разбор реальных потребностей и рисков перегрузки кожи.",
      blocks: [
        {
          title: "Что мы анализируем",
          lines: [
            "Состояние кожи, переносимость и релевантный анамнез.",
            "Главную цель и фактическую срочность по каждой зоне.",
            "Совместимость с протоколами, доступными в центре.",
          ],
        },
        {
          title: "Что вы получаете",
          lines: [
            "Четкое объяснение, что стоит запускать сейчас, а что лучше отложить.",
            "Ориентировочные сроки и логику непрерывности плана.",
          ],
        },
      ],
    },
    {
      id: "plan-recomendado",
      title: "Рекомендованный план",
      summary: "Маршрут по фазам с приоритетами, частотой и сопровождением.",
      ctaLabel: "Подробнее",
      modalLabel: "Первый визит",
      modalTitle: "Рекомендованный план",
      modalIntro:
        "Мы формируем персонализированное предложение с операционным критерием: стартовая фаза, консолидация и поддержка.",
      blocks: [
        {
          title: "Что учитываем",
          lines: [
            "Основную эстетическую цель и вторичные задачи.",
            "Реальную доступность графика и устойчивый ритм сессий.",
            "Ожидаемую реакцию кожи с учетом профиля и переносимости.",
          ],
        },
        {
          title: "Как строим план",
          lines: [
            "Приоритизация процедур по влиянию и безопасности.",
            "Ориентировочная частота и точки пересмотра.",
            "Рекомендации между сессиями для стабильного результата.",
          ],
        },
      ],
    },
  ],
  methodLabel: "Метод",
  methodTitle: "Премиальный протокол в четырех операционных фазах.",
  methodDescription:
    "Мы заменяем общие обещания проверяемым процессом: диагностика, выполнение, сопровождение и корректировка.",
  methodStages: [
    {
      id: "01",
      title: "Диагностика и критерии",
      subtitle: "Фиксируем реальную стартовую точку",
      description: "Оцениваем текущее состояние, приоритет и реалистичный запас прогресса.",
      signals: ["История кейса", "Главная цель", "Валидное показание"],
    },
    {
      id: "02",
      title: "Дизайн плана",
      subtitle: "Выстраиваем лечение по этапам",
      description: "Секвенируем техники и частоту без перегрузки кожи.",
      signals: ["План по фазам", "Ориентировочная частота", "Информированное согласие"],
    },
    {
      id: "03",
      title: "Контролируемое выполнение",
      subtitle: "Техническость и прослеживаемость",
      description: "Фиксируем параметры сессии для качественного решения на следующем визите.",
      signals: ["Контроль перед сессией", "Технический протокол", "Рекомендации после сессии"],
    },
    {
      id: "04",
      title: "Сопровождение и корректировка",
      subtitle: "Эволюция на основе фактов",
      description: "Проверяем ответ, корректируем ритм и закрепляем поддерживающий этап.",
      signals: ["Оценка прогресса", "Корректировка плана", "Непрерывность"],
    },
  ],
  treatmentsLabel: "Процедуры",
  treatmentsTitle: "Широкое предложение, структурированное и удобное для выбора.",
  treatmentsDescription:
    "Просматривайте по категориям и открывайте каждую карточку без ухода со страницы, чтобы сравнивать цели, длительность и релевантность.",
  treatmentsBridge: "Смотреть полный каталог",
  teamLabel: "Команда",
  teamTitle: "Три специалиста, единый стандарт качества.",
  teamDescription:
    "Мы показываем реальные профили, четкие специализации и сопровождение, где клиентке все понятно.",
  teamMembers: sharedTeam.map((member) => ({
    ...member,
    role: member.id === "eli" ? "Руководитель центра" : "Эстетический специалист",
    specialty:
      member.id === "eli"
        ? "Управление центром, диагностика и планирование процедур"
        : member.id === "jaquie"
          ? "Диодный лазер, радиочастота и продвинутые протоколы для лица"
          : "Регенеративная эстетика и качество кожи",
    excerpt:
      member.id === "eli"
        ? "Координирует стандарт сервиса, график и финальную валидацию каждого плана."
        : member.id === "jaquie"
          ? "Проводит интенсивные протоколы с техническим контролем и комфортом клиентки."
          : "Формирует протоколы восстановления кожи и поддержания результата.",
    ctaLabel: "Подробнее",
    modalLabel: "Команда",
    modalTitle: member.id === "eli" ? "Eli - Руководитель центра" : member.id === "jaquie" ? "Jaquie - Эстетический специалист" : "Karen - Эстетический специалист",
    motivation:
      member.id === "eli"
        ? "Работаю так, чтобы каждая клиентка уходила с четким, реалистичным и понятным планом."
        : member.id === "jaquie"
          ? "Сочетаю техническую точность и поддерживающий контакт, чтобы каждая сессия была эффективной и предсказуемой."
          : "Мой фокус - восстановление кожного комфорта и долгосрочное качество результата.",
    experience:
      member.id === "eli"
        ? ["Более 14 лет в управлении эстетическими центрами.", "Координация команды и протоколов сопровождения."]
        : member.id === "jaquie"
          ? ["9 лет в диодном лазере и технологических протоколах.", "Работа по фазам с контролем реакции кожи."]
          : ["10 лет в регенеративных протоколах и барьерной поддержке.", "Сопровождение чувствительных и реактивных кейсов."],
    studies:
      member.id === "eli"
        ? ["Продвинутая подготовка в интегральной эстетике.", "Обучение клиентскому опыту и операционной работе."]
        : member.id === "jaquie"
          ? ["Продвинутая техническая подготовка по эстетике и аппаратным методикам.", "Непрерывное обучение по энергетическим и радиочастотным протоколам."]
          : ["Подготовка по прикладной дермокосметике и физиологии кожи.", "Специализация на неинвазивных регенеративных техниках."],
    treatments:
      member.id === "eli"
        ? ["Первичная диагностика", "Рекомендованный план", "Контрольный пересмотр"]
        : member.id === "jaquie"
          ? ["Диодная лазерная эпиляция", "Радиочастота лица", "Продвинутая гидродермабразия"]
          : ["Протокол кожного барьера", "LED-биостимуляция", "Регенеративный уход периорбитальной зоны"],
    approach:
      member.id === "eli"
        ? ["Четко объясняет решения перед стартом каждой фазы.", "Поддерживает логичную непрерывность графика и плана."]
        : member.id === "jaquie"
          ? ["Настраивает параметры по зоне и переносимости.", "Дает четкие рекомендации до и после процедуры."]
          : ["Ведет постепенную интенсивность по реальной переносимости.", "Комбинирует кабинетный протокол и домашнюю рутину."],
    languages: ["Испанский", "Каталанский", "Французский", "Английский"],
  })),
  processLabel: "Процесс",
  processTitle: "От первого запроса до подтвержденной записи без лишних шагов.",
  processDescription: "Каждый этап прозрачен, чтобы клиентка понимала, что произойдет и когда.",
  processSteps: [
    {
      id: "01",
      title: "Первичный запрос",
      description: "Вы отправляете цель, зону и желаемый временной слот.",
      detail: "Можно начать через WhatsApp или форму сайта; отвечаем в рабочее время центра.",
    },
    {
      id: "02",
      title: "Предподтверждение",
      description: "Проверяем доступность и закрываем предварительные вопросы.",
      detail: "Отправляем условия визита, подготовку перед сессией и канал сопровождения.",
    },
    {
      id: "03",
      title: "Первый визит",
      description: "Диагностика и рекомендация плана в центре.",
      detail: "Вы получаете структурированное предложение и понятные следующие шаги.",
    },
    {
      id: "04",
      title: "Запись на процедуру",
      description: "Подтверждаем следующую сессию с учетом приоритета и графика.",
      detail: "Непрерывность планируется блоками для устойчивого темпа и результата.",
    },
  ],
  faqLabel: "Частые вопросы",
  faqTitle: "Практичные FAQ, чтобы принимать решение уверенно еще до записи.",
  faqDescription:
    "Отвечаем на самые частые вопросы до первого визита и в процессе сопровождения, чтобы путь был прозрачным с самого начала.",
  teamModalLabels: {
    years: "лет",
    profile: "Профиль специалиста",
    experience: "Опыт",
    studies: "Обучение",
    treatments: "Процедуры",
    approach: "Подход к клиентам",
    languages: "Языки",
  },
  faqItems: buildLocalizedFaqs(ruFaqCopy, {
    ctaLabel: "Подробнее",
    detailsTitle: "Ключевые детали",
    detailsLineA: "Финальную рекомендацию подтверждают на очной консультации.",
    detailsLineB: "Команда адаптирует план под цели, график и переносимость.",
    modalLabel: "FAQ",
  }),
};

const homeByLocale: Record<Locale, HomePremiumContent> = {
  es: esHome,
  ca: caHome,
  fr: frHome,
  en: enHome,
  uk: ukHome,
  ru: ruHome,
};

export function getHomePremiumContent(locale: Locale): HomePremiumContent {
  return homeByLocale[locale] ?? esHome;
}
