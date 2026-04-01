import type { Locale } from "@/lib/i18n/config";

export type TreatmentCategoryId =
  | "estetica-normal"
  | "estetica-avanzada"
  | "estetica-regenerativa";

export type TreatmentCategory = {
  id: TreatmentCategoryId;
  slug: string;
  order: number;
  name: string;
  description: string;
  profile: string;
  intervention: string;
  differentiation: string;
};

export type TreatmentItem = {
  name: string;
  slug: string;
  category: TreatmentCategoryId;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  order: number;
  featured: boolean;
  relatedTreatments: string[];
};

export type TreatmentsCatalogContent = {
  locale: Locale;
  closeModalLabel: string;
  heroLabel: string;
  heroTitle: string;
  heroDescription: string;
  heroHighlights: string[];
  sectionLabel: string;
  sectionTitle: string;
  sectionDescription: string;
  categoryNavLabel: string;
  categoryJumpLabel: string;
  treatmentCountLabel: string;
  featuredLabel: string;
  cardCtaLabel: string;
  cardRelatedLabel: string;
  relatedLabel: string;
  emptyStateLabel: string;
  seoIntroTitle: string;
  seoIntroDescription: string;
  detail: {
    backToTreatments: string;
    category: string;
    keyBenefits: string;
    relatedTreatments: string;
    openModal: string;
    modalDescription: string;
    modalIndicatedFor: string;
    modalGoals: string;
    modalBenefits: string;
    modalDuration: string;
    modalFrequency: string;
    modalSensation: string;
    modalConsiderations: string;
    modalAssessment: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  categories: TreatmentCategory[];
  treatments: TreatmentItem[];
};

type BaseCategory = {
  id: TreatmentCategoryId;
  slug: string;
  order: number;
};

type LocalizedCategoryCopy = {
  name: string;
  description: string;
  profile: string;
  intervention: string;
  differentiation: string;
};

const baseCategories: BaseCategory[] = [
  { id: "estetica-normal", slug: "estetica-normal", order: 10 },
  { id: "estetica-avanzada", slug: "estetica-avanzada", order: 20 },
  { id: "estetica-regenerativa", slug: "estetica-regenerativa", order: 30 },
];

const categoryCopyByLocale: Record<Locale, Record<TreatmentCategoryId, LocalizedCategoryCopy>> = {
  es: {
    "estetica-normal": {
      name: "Estética normal",
      description:
        "Tratamientos de entrada, mantenimiento y cuidado estético base para piel y cuerpo con enfoque progresivo.",
      profile:
        "Ideal si buscas mejorar imagen, confort y constancia sin empezar por protocolos técnicamente intensivos.",
      intervention: "Grado de intervención: suave a moderado, orientado a continuidad y hábitos estéticos sólidos.",
      differentiation:
        "Se diferencia por su enfoque de base: limpia, equilibra y mantiene antes de escalar a protocolos de alta intensidad.",
    },
    "estetica-avanzada": {
      name: "Estética avanzada",
      description:
        "Protocolos con aparatología y técnicas de corrección visible para objetivos específicos faciales y corporales.",
      profile:
        "Pensada para quien necesita un plan más técnico, con metas de cambio más marcadas y medición por evolución.",
      intervention:
        "Grado de intervención: moderado a alto dentro de la estética no invasiva, con sesiones estructuradas por fases.",
      differentiation:
        "Se diferencia por precisión tecnológica y combinación de técnicas para acelerar resultados con criterio profesional.",
    },
    "estetica-regenerativa": {
      name: "Estética regenerativa",
      description:
        "Tratamientos orientados a renovación progresiva de la calidad cutánea, soporte biológico y mejora estructural.",
      profile:
        "Indicada cuando la prioridad es recuperar textura, vitalidad y capacidad de respuesta del tejido en el tiempo.",
      intervention:
        "Grado de intervención: técnico y progresivo, con foco en reparación estética y rejuvenecimiento sostenible.",
      differentiation:
        "Se diferencia por su narrativa regenerativa: no solo corrige visualmente, también trabaja la calidad del tejido.",
    },
  },
  ca: {
    "estetica-normal": {
      name: "Estètica normal",
      description: "Tractaments d'entrada i manteniment per cura estètica base de pell i cos.",
      profile:
        "Ideal si busques millora visual progressiva i continuïtat sense començar per protocols intensius.",
      intervention: "Grau d'intervenció: suau a moderat, orientat a manteniment i rutina de cura.",
      differentiation:
        "Es diferencia per consolidar base estètica abans d'escalar cap a tecnologia més avançada.",
    },
    "estetica-avanzada": {
      name: "Estètica avançada",
      description: "Protocols amb aparatologia i tècniques de correcció visible per objectius concrets.",
      profile: "Pensada per a casos que necessiten més precisió tècnica i una estratègia per fases.",
      intervention: "Grau d'intervenció: moderat-alt dins estètica no invasiva.",
      differentiation:
        "Es diferencia per combinació tecnològica i enfoc clínic-estètic orientat a resultats mesurables.",
    },
    "estetica-regenerativa": {
      name: "Estètica regenerativa",
      description: "Protocols orientats a renovació cutània i millora de qualitat de teixit a mitjà termini.",
      profile: "Indicada quan la prioritat és recuperar vitalitat, textura i resposta del teixit.",
      intervention: "Grau d'intervenció: tècnic i progressiu amb enfoc de regeneració.",
      differentiation:
        "Es diferencia perquè combina correcció visual amb treball de qualitat estructural del teixit.",
    },
  },
  fr: {
    "estetica-normal": {
      name: "Esthétique normale",
      description: "Soins d'entretien et d'amélioration de base pour visage et corps.",
      profile: "Adaptée aux personnes qui veulent progresser sans protocoles techniques lourds.",
      intervention: "Niveau d'intervention: léger à modéré, orienté continuité.",
      differentiation: "Crée une base solide avant de passer vers des plans avancés.",
    },
    "estetica-avanzada": {
      name: "Esthétique avancée",
      description: "Protocoles techniques avec technologies ciblées pour correction visible.",
      profile: "Pour des objectifs plus précis nécessitant une approche structurée par étapes.",
      intervention: "Niveau d'intervention: modéré à élevé en esthétique non invasive.",
      differentiation: "Allie précision technologique et stratégie commerciale claire.",
    },
    "estetica-regenerativa": {
      name: "Esthétique régénérative",
      description: "Plans orientés renouvellement cutané et amélioration progressive de la qualité tissulaire.",
      profile: "Indiquée lorsque l'objectif principal est la restauration et la vitalité de la peau.",
      intervention: "Niveau d'intervention: technique et progressif, avec logique de réparation.",
      differentiation: "Combine amélioration visuelle et soutien de la qualité structurelle.",
    },
  },
  en: {
    "estetica-normal": {
      name: "Normal aesthetics",
      description: "Entry-level and maintenance treatments for consistent facial and body care.",
      profile: "Best for clients looking for clear improvement without intensive technical protocols.",
      intervention: "Intervention level: gentle to moderate, focused on continuity.",
      differentiation: "Builds a strong baseline before moving into high-intensity plans.",
    },
    "estetica-avanzada": {
      name: "Advanced aesthetics",
      description: "Technology-led protocols for more visible correction and targeted objectives.",
      profile: "Designed for clients needing more technical plans and measurable progression.",
      intervention: "Intervention level: moderate to high within non-invasive aesthetics.",
      differentiation: "Combines precision technology with strategic protocol design.",
    },
    "estetica-regenerativa": {
      name: "Regenerative aesthetics",
      description: "Protocols focused on skin renewal, tissue quality and long-term recovery.",
      profile: "Ideal when the main goal is restoring vitality, texture and biological response.",
      intervention: "Intervention level: technical and progressive with regenerative logic.",
      differentiation: "Goes beyond visual correction by supporting structural skin quality.",
    },
  },
  uk: {
    "estetica-normal": {
      name: "Базова естетика",
      description: "Базові та підтримувальні процедури для обличчя й тіла.",
      profile: "Для клієнтів, яким потрібен зрозумілий старт без інтенсивних протоколів.",
      intervention: "Рівень втручання: м'який або помірний.",
      differentiation: "Формує стабільну естетичну базу перед складнішими етапами.",
    },
    "estetica-avanzada": {
      name: "Просунута естетика",
      description: "Технологічні протоколи для більш вираженої корекції.",
      profile: "Для завдань, що потребують точнішого технічного підходу.",
      intervention: "Рівень втручання: помірний або високий у межах неінвазивної естетики.",
      differentiation: "Поєднує апаратну точність і структурований план по етапах.",
    },
    "estetica-regenerativa": {
      name: "Регенеративна естетика",
      description: "Протоколи відновлення якості шкіри та поступового оновлення тканин.",
      profile: "Коли пріоритетом є відновлення текстури, тонусу й життєвості тканин.",
      intervention: "Рівень втручання: технічний і поступовий.",
      differentiation: "Працює не лише з візуальним ефектом, а й з якістю тканини.",
    },
  },
  ru: {
    "estetica-normal": {
      name: "Базовая эстетика",
      description: "Базовые и поддерживающие процедуры для лица и тела.",
      profile: "Подходит для понятного старта без интенсивных технических протоколов.",
      intervention: "Уровень воздействия: мягкий или умеренный.",
      differentiation: "Создает стабильную эстетическую базу перед продвинутыми этапами.",
    },
    "estetica-avanzada": {
      name: "Продвинутая эстетика",
      description: "Технологичные протоколы для более выраженной коррекции.",
      profile: "Для задач, где нужен более точный технический подход.",
      intervention: "Уровень воздействия: умеренный или высокий в рамках неинвазивной эстетики.",
      differentiation: "Сочетает аппаратную точность и структурный план по этапам.",
    },
    "estetica-regenerativa": {
      name: "Регенеративная эстетика",
      description: "Протоколы восстановления качества кожи и постепенного обновления тканей.",
      profile: "Когда ключевая цель - восстановить текстуру, тонус и жизненность кожи.",
      intervention: "Уровень воздействия: технический и поэтапный.",
      differentiation: "Работает не только с визуальным эффектом, но и с качеством ткани.",
    },
  },
};

const treatmentsBase: TreatmentItem[] = [
  {
    name: "Wonder Axon",
    slug: "wonder-axon",
    category: "estetica-regenerativa",
    shortDescription: "Protocol de tecnologia avançada per treballar qualitat i to de la pell de forma progressiva.",
    longDescription:
      "Sessió amb tecnologia estètica avançada que s'adapta a l'estat actual de la pell i als objectius prioritaris definits a diagnòstic.",
    benefits: ["Millora progressiva de textura", "Més uniformitat visual", "Protocol adaptable per fases"],
    order: 10,
    featured: true,
    relatedTreatments: ["cyclone-luxury-facial", "tractaments-facials-personalitzats"],
  },
  {
    name: "Hollywood peel",
    slug: "hollywood-peel",
    category: "estetica-normal",
    shortDescription: "Peeling de renovació superficial orientat a lluminositat i textura més uniforme.",
    longDescription:
      "Tractament facial de renovació cosmètica per revitalitzar pell apagada i preparar la pell per fases de manteniment.",
    benefits: ["Efecte pell més lluminosa", "Millora de textura superficial", "Sessió de baixa recuperació"],
    order: 20,
    featured: true,
    relatedTreatments: ["peeling-quimic-facial", "neteja-cutis-punta-diamant"],
  },
  {
    name: "Depilació làser",
    slug: "depilacio-laser",
    category: "estetica-avanzada",
    shortDescription: "Depilació per zones amb paràmetres ajustats segons fototip, zona i evolució.",
    longDescription:
      "Protocol de depilació làser estructurat per fases, amb seguiment de resposta i ajust d'intervals segons cada cas.",
    benefits: ["Reducció progressiva del pèl", "Planificació per zones", "Seguiment tècnic continu"],
    order: 30,
    featured: true,
    relatedTreatments: ["depilacio-cera-calenta-tebia", "tractaments-corporals-personalitzats"],
  },
  {
    name: "Peeling químic facial",
    slug: "peeling-quimic-facial",
    category: "estetica-normal",
    shortDescription: "Exfoliació química controlada per millorar lluminositat i homogeneïtat.",
    longDescription:
      "Sessió facial de renovació química ajustada a tolerància, objectiu i moment de la pell dins del pla.",
    benefits: ["Pell més fina i regular", "Millora de to", "Integrable en plans facials"],
    order: 40,
    featured: true,
    relatedTreatments: ["hollywood-peel", "tractaments-despigmentants"],
  },
  {
    name: "Peeling corporal",
    slug: "peeling-corporal",
    category: "estetica-normal",
    shortDescription: "Renovació corporal per millorar textura i preparació de la pell.",
    longDescription:
      "Peeling de cos orientat a afinar relleu cutani i preparar teixit abans de tractaments corporals intensius.",
    benefits: ["Textura corporal més uniforme", "Pell més receptiva", "Millor acabat visual"],
    order: 50,
    featured: false,
    relatedTreatments: ["maderoterapia-corporal", "cyclone-corporal"],
  },
  {
    name: "Neteja de cutis vapor",
    slug: "neteja-cutis-vapor",
    category: "estetica-normal",
    shortDescription: "Neteja facial amb vapor per descongestionar i reequilibrar la pell.",
    longDescription:
      "Protocol de neteja en cabina amb vapor i extracció selectiva per millorar confort i aparença global.",
    benefits: ["Neteja profunda de porus", "Millora de confort cutani", "Base ideal per altres fases"],
    order: 60,
    featured: false,
    relatedTreatments: ["neteja-cutis-punta-diamant", "tractaments-facials-personalitzats"],
  },
  {
    name: "Neteja de cutis profunda punta de diamant",
    slug: "neteja-cutis-punta-diamant",
    category: "estetica-normal",
    shortDescription: "Higiene facial profunda amb exfoliació mecànica controlada.",
    longDescription:
      "Neteja facial tècnica amb punta de diamant per afinar textura, reduir impureses i aportar més uniformitat.",
    benefits: ["Textura més fina", "Millora visible de lluminositat", "Sessió adaptable a cada pell"],
    order: 70,
    featured: true,
    relatedTreatments: ["neteja-cutis-vapor", "microneedling-facial"],
  },
  {
    name: "Disseny de celles",
    slug: "disseny-celles",
    category: "estetica-normal",
    shortDescription: "Disseny i definició de celles per equilibrar expressió i harmonia facial.",
    longDescription:
      "Servei de disseny de celles amb valoració de simetria i estil per potenciar trets facials amb resultat natural.",
    benefits: ["Marc facial més definit", "Resultat personalitzat", "Acabat net i professional"],
    order: 80,
    featured: false,
    relatedTreatments: ["lifting-manual-facial", "tractaments-facials-personalitzats"],
  },
  {
    name: "Depilació cera calenta i tèbia",
    slug: "depilacio-cera-calenta-tebia",
    category: "estetica-normal",
    shortDescription: "Depilació amb cera per manteniment de zones facials i corporals.",
    longDescription:
      "Servei de depilació amb cera calenta o tèbia segons zona i sensibilitat per un resultat de manteniment.",
    benefits: ["Acabat net immediat", "Adaptable a diferents zones", "Complement de plans de depilació"],
    order: 90,
    featured: false,
    relatedTreatments: ["depilacio-laser", "disseny-celles"],
  },
  {
    name: "Maderoteràpia Gold",
    slug: "maderoterapia-gold",
    category: "estetica-normal",
    shortDescription: "Maderoteràpia corporal premium amb enfoc de definició i drenatge.",
    longDescription:
      "Protocol corporal manual amb instruments de fusta en seqüència avançada per treballar teixit i contorn.",
    benefits: ["Activació del teixit", "Sensació de lleugeresa", "Treball corporal de continuïtat"],
    order: 100,
    featured: true,
    relatedTreatments: ["maderoterapia-corporal", "presoterapia"],
  },
  {
    name: "Maderoteràpia corporal",
    slug: "maderoterapia-corporal",
    category: "estetica-normal",
    shortDescription: "Treball manual corporal amb instrumental per dinamitzar teixit.",
    longDescription:
      "Sessió corporal de maderoteràpia orientada a millorar aspecte de la pell i suportar plans de remodelació.",
    benefits: ["Estímul de circulació superficial", "Millora progressiva de to", "Protocol combinable"],
    order: 110,
    featured: true,
    relatedTreatments: ["maderoterapia-gold", "ones-acustiques"],
  },
  {
    name: "Radiofreqüència facial",
    slug: "radiofrequencia-facial",
    category: "estetica-avanzada",
    shortDescription: "Radiofreqüència facial per millorar fermesa i qualitat global.",
    longDescription:
      "Tractament facial amb radiofreqüència no invasiva per reforçar to i definició dins de plans progressius.",
    benefits: ["Millora de fermesa visual", "Més definició de contorn", "Sessió còmoda sense baixa"],
    order: 120,
    featured: true,
    relatedTreatments: ["lifting-manual-facial", "cyclone-luxury-facial"],
  },
  {
    name: "Radiofreqüència corporal",
    slug: "radiofrequencia-corporal",
    category: "estetica-avanzada",
    shortDescription: "Protocol corporal de radiofreqüència per treball de fermesa.",
    longDescription:
      "Sessió corporal de radiofreqüència enfocada en zones localitzades per millorar la qualitat visual del teixit.",
    benefits: ["Suport a la fermesa", "Millora progressiva de textura", "Compatible amb altres fases"],
    order: 130,
    featured: true,
    relatedTreatments: ["hifu-corporal", "cyclone-corporal"],
  },
  {
    name: "Cyclone Luxury facial",
    slug: "cyclone-luxury-facial",
    category: "estetica-avanzada",
    shortDescription: "Protocol facial premium de tecnologia combinada per millora global.",
    longDescription:
      "Tractament facial d'alta gamma amb combinació de tècniques per qualitat de pell, to i lluminositat.",
    benefits: ["Tractament integral en una sessió", "Més qualitat de pell", "Experiència premium"],
    order: 140,
    featured: true,
    relatedTreatments: ["wonder-axon", "radiofrequencia-facial"],
  },
  {
    name: "Cyclone corporal",
    slug: "cyclone-corporal",
    category: "estetica-avanzada",
    shortDescription: "Protocol corporal combinat per tractar textura, drenatge i to.",
    longDescription:
      "Sessió corporal de tecnologia combinada per treballar diferents objectius en un mateix bloc de tractament.",
    benefits: ["Treball corporal multizona", "Millora de confort i textura", "Protocol per fases"],
    order: 150,
    featured: true,
    relatedTreatments: ["radiofrequencia-corporal", "presoterapia"],
  },
  {
    name: "Cavitació",
    slug: "cavitacio",
    category: "estetica-avanzada",
    shortDescription: "Tecnologia corporal per treball localitzat dins plans de remodelació.",
    longDescription:
      "Tractament corporal no invasiu orientat a zones concretes, sempre amb planificació i seguiment de resposta.",
    benefits: ["Treball localitzat", "Complement de protocols corporals", "Planificació personalitzada"],
    order: 160,
    featured: false,
    relatedTreatments: ["ones-acustiques", "tractaments-corporals-personalitzats"],
  },
  {
    name: "Hifu corporal",
    slug: "hifu-corporal",
    category: "estetica-avanzada",
    shortDescription: "Tecnologia d'ultrasò focalitzat per objectius corporals específics.",
    longDescription:
      "Protocol corporal de precisió per treballar fermesa en zones prioritàries definides a diagnòstic.",
    benefits: ["Treball de fermesa localitzada", "Protocol de precisió", "Seguiment per evolució"],
    order: 170,
    featured: true,
    relatedTreatments: ["radiofrequencia-corporal", "cyclone-corporal"],
  },
  {
    name: "Vacunteràpia",
    slug: "vacunterapia",
    category: "estetica-avanzada",
    shortDescription: "Protocol corporal de succió controlada amb enfoc de drenatge i activació.",
    longDescription:
      "Sessió de vacunteràpia en zones corporals per dinamitzar teixit i complementar plans de treball manual.",
    benefits: ["Activació de teixit", "Suport drenatge", "Complement per fases corporals"],
    order: 180,
    featured: false,
    relatedTreatments: ["maderoterapia-corporal", "drenatges-limfatics"],
  },
  {
    name: "Ones Galvaniques",
    slug: "ones-galvaniques",
    category: "estetica-avanzada",
    shortDescription: "Tractament amb corrents galvàniques per vehiculitzar actius i equilibrar pell.",
    longDescription:
      "Protocol facial/cosmètic amb corrent galvànic orientat a millorar l'absorció d'actius segons objectiu.",
    benefits: ["Millor penetració cosmètica", "Sessió suau i controlada", "Adaptable a plans facials"],
    order: 190,
    featured: false,
    relatedTreatments: ["fototerapia", "tractaments-facials-personalitzats"],
  },
  {
    name: "Fototeràpia",
    slug: "fototerapia",
    category: "estetica-regenerativa",
    shortDescription: "Llum terapèutica estètica per suportar confort i qualitat cutània.",
    longDescription:
      "Sessió de fototeràpia com a suport en protocols facials per millorar confort, aspecte i continuïtat.",
    benefits: ["Suport post-tractament", "Millora de confort", "Integració en plans combinats"],
    order: 200,
    featured: false,
    relatedTreatments: ["alta-frequencia", "ones-galvaniques"],
  },
  {
    name: "Alta freqüència",
    slug: "alta-frequencia",
    category: "estetica-regenerativa",
    shortDescription: "Tècnica complementària per higiene i equilibri en protocols facials.",
    longDescription:
      "Alta freqüència aplicada en fases facials per reforçar higiene cosmètica i estabilitat de la pell.",
    benefits: ["Suport en neteges facials", "Millora de sensació de pell", "Tractament complementari"],
    order: 210,
    featured: false,
    relatedTreatments: ["neteja-cutis-vapor", "fototerapia"],
  },
  {
    name: "Spa de peus i mans",
    slug: "spa-peus-mans",
    category: "estetica-normal",
    shortDescription: "Ritual de cura estètica i benestar per peus i mans.",
    longDescription:
      "Tractament de benestar per mans i peus amb hidratació, cura estètica i experiència relaxant.",
    benefits: ["Més confort", "Millor aparença de mans i peus", "Experiència de desconnexió"],
    order: 220,
    featured: false,
    relatedTreatments: ["massatges-relaxants", "disseny-celles"],
  },
  {
    name: "Microneedling facial",
    slug: "microneedling-facial",
    category: "estetica-regenerativa",
    shortDescription: "Microneedling cosmètic facial per qualitat de pell i textura.",
    longDescription:
      "Protocol facial de microestimulació orientat a millorar relleu, to i aparença general de la pell.",
    benefits: ["Millora progressiva de textura", "Suport a uniformitat", "Integrable en plans per fases"],
    order: 230,
    featured: true,
    relatedTreatments: ["radiofrequencia-facial", "tractaments-facials-personalitzats"],
  },
  {
    name: "Microneedling corporal",
    slug: "microneedling-corporal",
    category: "estetica-regenerativa",
    shortDescription: "Microneedling corporal per treballar textura en zones localitzades.",
    longDescription:
      "Sessió de microestimulació corporal orientada a qualitat de pell en àrees específiques dins d'un pla global.",
    benefits: ["Millora de textura corporal", "Treball localitzat", "Tractament combinable"],
    order: 240,
    featured: false,
    relatedTreatments: ["peeling-corporal", "tractaments-corporals-personalitzats"],
  },
  {
    name: "Microneedling capilar",
    slug: "microneedling-capilar",
    category: "estetica-regenerativa",
    shortDescription: "Microestimulació capil·lar cosmètica com a suport de densitat visual.",
    longDescription:
      "Protocol capil·lar de microestimulació amb enfoc conservador per millorar l'entorn del cuir cabellut.",
    benefits: ["Suport cosmètic capil·lar", "Protocol progressiu", "Seguiment periòdic"],
    order: 250,
    featured: true,
    relatedTreatments: ["tractaments-facials-personalitzats", "wonder-axon"],
  },
  {
    name: "Microneedling llavis + àcid hialurònic",
    slug: "microneedling-llavis-acid-hialuronic",
    category: "estetica-regenerativa",
    shortDescription: "Tractament de llavis orientat a hidratació, textura i definició visual.",
    longDescription:
      "Protocol específic de llavis amb microestimulació i actius cosmètics per millorar qualitat i confort.",
    benefits: ["Més hidratació de llavis", "Millor textura", "Aspecte més cuidat"],
    order: 260,
    featured: false,
    relatedTreatments: ["hollywood-peel", "tractaments-facials-personalitzats"],
  },
  {
    name: "Ones acústiques",
    slug: "ones-acustiques",
    category: "estetica-avanzada",
    shortDescription: "Tecnologia corporal de suport en plans de remodelació i qualitat de teixit.",
    longDescription:
      "Protocol corporal amb ones acústiques per complementar tractaments localitzats i reforçar continuïtat.",
    benefits: ["Complement per tractament corporal", "Treball de zones concretes", "Integrable per fases"],
    order: 270,
    featured: false,
    relatedTreatments: ["cavitacio", "maderoterapia-gold"],
  },
  {
    name: "Presoterapia",
    slug: "presoterapia",
    category: "estetica-normal",
    shortDescription: "Compressió seqüencial per drenatge estètic i sensació de lleugeresa.",
    longDescription:
      "Sessió de presoterapia per millorar confort de cames i suportar protocols corporals de continuïtat.",
    benefits: ["Sensació de lleugeresa", "Suport drenatge", "Ideal com a complement"],
    order: 280,
    featured: true,
    relatedTreatments: ["drenatges-limfatics", "cyclone-corporal"],
  },
  {
    name: "Tractaments despigmentants",
    slug: "tractaments-despigmentants",
    category: "estetica-avanzada",
    shortDescription: "Protocols estètics orientats a to irregular i marques pigmentàries visibles.",
    longDescription:
      "Pla despigmentant per fases, amb diagnòstic inicial i seguiment periòdic segons evolució de la pell.",
    benefits: ["Millora d'uniformitat", "Estratègia progressiva", "Control per estacionalitat"],
    order: 290,
    featured: true,
    relatedTreatments: ["taques", "laser-taques"],
  },
  {
    name: "Taques",
    slug: "taques",
    category: "estetica-avanzada",
    shortDescription: "Valoració i abordatge estètic de taques amb criteri personalitzat.",
    longDescription:
      "Servei orientat a treballar taques visibles mitjançant protocols adaptats i pautes de continuïtat.",
    benefits: ["Pla clar per taques", "Combinació de tècniques", "Seguiment responsable"],
    order: 300,
    featured: false,
    relatedTreatments: ["tractaments-despigmentants", "laser-taques"],
  },
  {
    name: "Laser taques",
    slug: "laser-taques",
    category: "estetica-avanzada",
    shortDescription: "Tractament làser orientat a millorar l'aspecte de taques localitzades.",
    longDescription:
      "Protocol de làser per taques seleccionades amb diagnòstic previ i pauta adaptada a cada pell.",
    benefits: ["Treball localitzat", "Planificació segons resposta", "Integrat amb pauta de manteniment"],
    order: 310,
    featured: true,
    relatedTreatments: ["taques", "tractaments-despigmentants"],
  },
  {
    name: "Eliminació de tatuatges",
    slug: "eliminacio-tatuatges",
    category: "estetica-avanzada",
    shortDescription: "Protocol per sessions per reducció progressiva de tatuatge.",
    longDescription:
      "Tractament làser per eliminació estètica de tatuatges amb valoració inicial i seguiment entre sessions.",
    benefits: ["Planificació per fases", "Valoració de zona i tinta", "Seguiment de tolerància"],
    order: 320,
    featured: true,
    relatedTreatments: ["laser-taques", "tractaments-corporals-personalitzats"],
  },
  {
    name: "Massatges relaxants",
    slug: "massatges-relaxants",
    category: "estetica-normal",
    shortDescription: "Massatge de benestar per reduir tensió general i afavorir desconnexió.",
    longDescription:
      "Sessió manual enfocada en relaxació global, confort corporal i experiència de benestar.",
    benefits: ["Alliberament de tensió", "Benestar general", "Recuperació de confort"],
    order: 330,
    featured: true,
    relatedTreatments: ["massatges-descontracturants", "spa-peus-mans"],
  },
  {
    name: "Massatges descontracturants",
    slug: "massatges-descontracturants",
    category: "estetica-normal",
    shortDescription: "Massatge manual per zones de sobrecàrrega i tensió muscular.",
    longDescription:
      "Protocol manual orientat a descarregar zones contracturades i recuperar mobilitat de confort.",
    benefits: ["Descàrrega muscular", "Millora de sensació corporal", "Treball localitzat"],
    order: 340,
    featured: true,
    relatedTreatments: ["massatges-relaxants", "drenatges-limfatics"],
  },
  {
    name: "Massatges anticel·lulítics",
    slug: "massatges-anticellulitics",
    category: "estetica-normal",
    shortDescription: "Massatge corporal específic de suport en plans anticel·lulítics.",
    longDescription:
      "Treball manual corporal amb orientació estètica per complementar protocols de remodelació i drenatge.",
    benefits: ["Complement de plans corporals", "Activació manual del teixit", "Continuïtat de manteniment"],
    order: 350,
    featured: false,
    relatedTreatments: ["maderoterapia-corporal", "ones-acustiques"],
  },
  {
    name: "Drenatges limfàtics",
    slug: "drenatges-limfatics",
    category: "estetica-normal",
    shortDescription: "Tècnica manual de drenatge per millorar sensació de lleugeresa.",
    longDescription:
      "Sessió de drenatge limfàtic manual orientada a confort corporal i suport de protocols estètics.",
    benefits: ["Lleugeresa corporal", "Suport circulatori estètic", "Ideal entre fases"],
    order: 360,
    featured: true,
    relatedTreatments: ["presoterapia", "massatges-relaxants"],
  },
  {
    name: "Lifting manual facial",
    slug: "lifting-manual-facial",
    category: "estetica-normal",
    shortDescription: "Massatge facial tècnic per to, relaxació de faccions i efecte de vitalitat.",
    longDescription:
      "Protocol manual facial per estimular musculatura, millorar confort i reforçar un aspecte descansat.",
    benefits: ["Rostre més descansat", "Més to visual", "Sessió no invasiva"],
    order: 370,
    featured: false,
    relatedTreatments: ["radiofrequencia-facial", "tractaments-facials-personalitzats"],
  },
  {
    name: "Tractaments facials personalitzats",
    slug: "tractaments-facials-personalitzats",
    category: "estetica-regenerativa",
    shortDescription: "Plans facials a mida segons diagnòstic, objectiu i evolució.",
    longDescription:
      "Disseny d'un protocol facial personalitzat combinant tècniques i ritme de sessions segons la resposta de la pell.",
    benefits: ["Pla totalment personalitzat", "Combinació de tècniques", "Seguiment continu"],
    order: 380,
    featured: true,
    relatedTreatments: ["wonder-axon", "microneedling-facial"],
  },
  {
    name: "Tractaments corporals personalitzats",
    slug: "tractaments-corporals-personalitzats",
    category: "estetica-avanzada",
    shortDescription: "Pla corporal a mida amb combinació de tècniques segons objectiu principal.",
    longDescription:
      "Estructura de tractament corporal personalitzat per fases, amb selecció tècnica segons diagnòstic i prioritat.",
    benefits: ["Estratègia corporal a mida", "Més control de progressió", "Escalable i revisable"],
    order: 390,
    featured: true,
    relatedTreatments: ["cyclone-corporal", "maderoterapia-gold"],
  },
];

const catalogCopyByLocale: Record<
  Locale,
  Omit<TreatmentsCatalogContent, "locale" | "categories" | "treatments">
> = {
  es: {
    closeModalLabel: "Cerrar",
    heroLabel: "Catálogo de tratamientos",
    heroTitle: "Explora el catálogo por nivel estético: normal, avanzada y regenerativa.",
    heroDescription:
      "Organizamos los tratamientos por grado de intervención y tipo de objetivo para que entender, comparar y decidir sea más fácil.",
    heroHighlights: [
      "39 tratamientos activos",
      "3 bloques de navegación principal",
      "Comparación más clara y guiada",
      "Reserva y WhatsApp sin salir del flujo",
    ],
    sectionLabel: "Estructura principal",
    sectionTitle: "Selecciona una familia y revisa solo los tratamientos de ese nivel.",
    sectionDescription:
      "Cada ficha está optimizada para escaneo rápido: nombre, contexto breve, beneficios clave y detalle completo en modal premium.",
    categoryNavLabel: "Selector principal",
    categoryJumpLabel: "Cambiar categoría",
    treatmentCountLabel: "tratamientos",
    featuredLabel: "Destacado",
    cardCtaLabel: "Saber más",
    cardRelatedLabel: "Combinable con",
    relatedLabel: "Tratamientos relacionados",
    emptyStateLabel: "No hay tratamientos en esta categoría por ahora.",
    seoIntroTitle: "Decisión estética con criterio profesional",
    seoIntroDescription:
      "La recomendación siempre se adapta a diagnóstico, tolerancia y evolución real. Diseñamos planes progresivos, realistas y revisables.",
    detail: {
      backToTreatments: "Volver a tratamientos",
      category: "Categoría",
      keyBenefits: "Beneficios clave",
      relatedTreatments: "También te puede interesar",
      openModal: "Saber más",
      modalDescription: "Descripción general",
      modalIndicatedFor: "Indicado para",
      modalGoals: "Objetivos del tratamiento",
      modalBenefits: "Beneficios esperables",
      modalDuration: "Duración orientativa",
      modalFrequency: "Frecuencia orientativa",
      modalSensation: "Sensación durante la sesión",
      modalConsiderations: "Cuidados y consideraciones",
      modalAssessment: "Cuándo recomendamos valoración previa",
      ctaPrimary: "Reservar valoración",
      ctaSecondary: "Hablar por WhatsApp",
    },
  },
  ca: {
    closeModalLabel: "Tancar",
    heroLabel: "Catàleg de tractaments",
    heroTitle: "Explora el catàleg per nivell estètic: normal, avançada i regenerativa.",
    heroDescription:
      "Hem reorganitzat tota l'oferta per grau d'intervenció i objectiu estètic perquè triar sigui més simple.",
    heroHighlights: ["39 tractaments actius", "3 blocs principals", "Comparació més clara", "CTA directe a reserva"],
    sectionLabel: "Estructura principal",
    sectionTitle: "Selecciona una família i revisa només els tractaments d'aquest nivell.",
    sectionDescription:
      "Cada fitxa està pensada per escaneig ràpid: nom, context curt, beneficis clau i detall complet en modal.",
    categoryNavLabel: "Selector principal",
    categoryJumpLabel: "Canviar categoria",
    treatmentCountLabel: "tractaments",
    featuredLabel: "Destacat",
    cardCtaLabel: "Saber-ne més",
    cardRelatedLabel: "Combinable amb",
    relatedLabel: "Tractaments relacionats",
    emptyStateLabel: "Ara mateix no hi ha tractaments en aquesta categoria.",
    seoIntroTitle: "Com estructurem la recomanació",
    seoIntroDescription:
      "La indicació sempre s'adapta a diagnòstic i evolució. Dissenyem un pla realista, escalable i revisable en cabina.",
    detail: {
      backToTreatments: "Tornar a tractaments",
      category: "Categoria",
      keyBenefits: "Beneficis clau",
      relatedTreatments: "També et pot interessar",
      openModal: "Saber-ne més",
      modalDescription: "Descripció general",
      modalIndicatedFor: "Indicat per a",
      modalGoals: "Objectius del tractament",
      modalBenefits: "Beneficis esperables",
      modalDuration: "Durada orientativa",
      modalFrequency: "Freqüència orientativa",
      modalSensation: "Sensació durant la sessió",
      modalConsiderations: "Cures i consideracions",
      modalAssessment: "Quan recomanem valoració prèvia",
      ctaPrimary: "Reservar valoració",
      ctaSecondary: "Parlar per WhatsApp",
    },
  },
  fr: {
    closeModalLabel: "Fermer",
    heroLabel: "Catalogue des traitements",
    heroTitle: "Traitements organisés par objectif pour choisir plus facilement.",
    heroDescription:
      "Offre structurée en catégories claires, avec fiches détaillées et navigation orientée conversion.",
    heroHighlights: ["39 traitements", "3 blocs principaux", "Navigation plus claire", "CTA direct"],
    sectionLabel: "Structure",
    sectionTitle: "Parcourez par catégorie et accédez à la fiche complète.",
    sectionDescription: "Chaque traitement présente une synthèse claire, bénéfices clés et options liées.",
    categoryNavLabel: "Sélecteur principal",
    categoryJumpLabel: "Aller à la catégorie",
    treatmentCountLabel: "traitements",
    featuredLabel: "Mis en avant",
    cardCtaLabel: "En savoir plus",
    cardRelatedLabel: "Combinable avec",
    relatedLabel: "Traitements liés",
    emptyStateLabel: "Aucun traitement disponible dans cette catégorie.",
    seoIntroTitle: "Approche de recommandation",
    seoIntroDescription:
      "La recommandation dépend toujours du diagnostic et de l'évolution observée en cabine.",
    detail: {
      backToTreatments: "Retour aux traitements",
      category: "Catégorie",
      keyBenefits: "Bénéfices clés",
      relatedTreatments: "Vous pourriez aussi aimer",
      openModal: "En savoir plus",
      modalDescription: "Description générale",
      modalIndicatedFor: "Indiqué pour",
      modalGoals: "Objectifs du traitement",
      modalBenefits: "Bénéfices attendus",
      modalDuration: "Durée indicative",
      modalFrequency: "Fréquence indicative",
      modalSensation: "Sensation pendant la séance",
      modalConsiderations: "Soins et considérations",
      modalAssessment: "Quand une évaluation préalable est recommandée",
      ctaPrimary: "Réserver une évaluation",
      ctaSecondary: "Écrire sur WhatsApp",
    },
  },
  en: {
    closeModalLabel: "Close",
    heroLabel: "Treatments catalogue",
    heroTitle: "Treatments grouped by goal for faster and clearer decisions.",
    heroDescription:
      "The full offer is now organised into clear service categories with dedicated treatment pages and direct booking paths.",
    heroHighlights: ["39 active treatments", "3 core blocks", "Clearer navigation", "Direct booking CTAs"],
    sectionLabel: "Commercial architecture",
    sectionTitle: "Browse by category, compare quickly and open the full treatment page.",
    sectionDescription:
      "Each treatment card includes concise positioning, key benefits and links to related options.",
    categoryNavLabel: "Main selector",
    categoryJumpLabel: "Jump to category",
    treatmentCountLabel: "treatments",
    featuredLabel: "Featured",
    cardCtaLabel: "Learn more",
    cardRelatedLabel: "Pairs well with",
    relatedLabel: "Related treatments",
    emptyStateLabel: "No treatments available in this category yet.",
    seoIntroTitle: "How we structure treatment recommendations",
    seoIntroDescription:
      "Indications are always adapted to diagnosis and treatment evolution, with realistic and adjustable planning.",
    detail: {
      backToTreatments: "Back to treatments",
      category: "Category",
      keyBenefits: "Key benefits",
      relatedTreatments: "You may also be interested in",
      openModal: "Learn more",
      modalDescription: "General description",
      modalIndicatedFor: "Best for",
      modalGoals: "Treatment goals",
      modalBenefits: "Expected benefits",
      modalDuration: "Estimated duration",
      modalFrequency: "Suggested frequency",
      modalSensation: "Session sensation",
      modalConsiderations: "Care and considerations",
      modalAssessment: "When we recommend prior assessment",
      ctaPrimary: "Book an assessment",
      ctaSecondary: "Chat on WhatsApp",
    },
  },
  uk: {
    closeModalLabel: "Закрити",
    heroLabel: "Каталог процедур",
    heroTitle: "Процедури, впорядковані за цілями для простішого вибору.",
    heroDescription:
      "Уся пропозиція структурована за категоріями з окремими сторінками процедур і прямими CTA.",
    heroHighlights: ["39 процедур", "3 основні блоки", "Зрозуміла навігація", "Пряме бронювання"],
    sectionLabel: "Структура",
    sectionTitle: "Оберіть категорію, порівняйте та відкрийте повну сторінку.",
    sectionDescription: "Кожна картка містить короткий опис, ключові переваги та пов'язані опції.",
    categoryNavLabel: "Головний селектор",
    categoryJumpLabel: "Перейти до категорії",
    treatmentCountLabel: "процедур",
    featuredLabel: "Рекомендовано",
    cardCtaLabel: "Детальніше",
    cardRelatedLabel: "Комбінується з",
    relatedLabel: "Пов'язані процедури",
    emptyStateLabel: "У цій категорії поки немає доступних процедур.",
    seoIntroTitle: "Як формується рекомендація",
    seoIntroDescription: "Рекомендація завжди базується на діагностиці й динаміці в кабіні.",
    detail: {
      backToTreatments: "Назад до процедур",
      category: "Категорія",
      keyBenefits: "Ключові переваги",
      relatedTreatments: "Також може бути цікаво",
      openModal: "Детальніше",
      modalDescription: "Загальний опис",
      modalIndicatedFor: "Кому підходить",
      modalGoals: "Цілі процедури",
      modalBenefits: "Очікувані переваги",
      modalDuration: "Орієнтовна тривалість",
      modalFrequency: "Орієнтовна частота",
      modalSensation: "Відчуття під час сеансу",
      modalConsiderations: "Догляд і рекомендації",
      modalAssessment: "Коли варто зробити попередню оцінку",
      ctaPrimary: "Записатися на консультацію",
      ctaSecondary: "Написати у WhatsApp",
    },
  },
  ru: {
    closeModalLabel: "Закрыть",
    heroLabel: "Каталог процедур",
    heroTitle: "Процедуры, структурированные по целям для понятного выбора.",
    heroDescription:
      "Вся линейка организована по категориям с отдельными страницами процедур и прямыми CTA.",
    heroHighlights: ["39 процедур", "3 основные группы", "Понятная навигация", "Прямое бронирование"],
    sectionLabel: "Структура",
    sectionTitle: "Выберите категорию, сравните и откройте полную страницу процедуры.",
    sectionDescription: "Каждая карточка содержит краткое описание, ключевые преимущества и связанные опции.",
    categoryNavLabel: "Главный селектор",
    categoryJumpLabel: "Перейти к категории",
    treatmentCountLabel: "процедур",
    featuredLabel: "Рекомендуем",
    cardCtaLabel: "Подробнее",
    cardRelatedLabel: "Комбинируется с",
    relatedLabel: "Связанные процедуры",
    emptyStateLabel: "В этой категории пока нет доступных процедур.",
    seoIntroTitle: "Как формируется рекомендация",
    seoIntroDescription: "Рекомендация всегда зависит от диагностики и динамики в процессе курса.",
    detail: {
      backToTreatments: "Назад к процедурам",
      category: "Категория",
      keyBenefits: "Ключевые преимущества",
      relatedTreatments: "Также может подойти",
      openModal: "Подробнее",
      modalDescription: "Общее описание",
      modalIndicatedFor: "Кому подходит",
      modalGoals: "Цели процедуры",
      modalBenefits: "Ожидаемые преимущества",
      modalDuration: "Ориентировочная длительность",
      modalFrequency: "Ориентировочная частота",
      modalSensation: "Ощущения во время сеанса",
      modalConsiderations: "Уход и рекомендации",
      modalAssessment: "Когда нужна предварительная консультация",
      ctaPrimary: "Записаться на оценку",
      ctaSecondary: "Написать в WhatsApp",
    },
  },
};

function buildCategories(locale: Locale): TreatmentCategory[] {
  const copy = categoryCopyByLocale[locale] ?? categoryCopyByLocale.es;

  return baseCategories
    .map((category) => ({
      ...category,
      name: copy[category.id].name,
      description: copy[category.id].description,
      profile: copy[category.id].profile,
      intervention: copy[category.id].intervention,
      differentiation: copy[category.id].differentiation,
    }))
    .sort((a, b) => a.order - b.order);
}

function buildTreatments(): TreatmentItem[] {
  return [...treatmentsBase].sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
}

const catalogByLocale: Record<Locale, TreatmentsCatalogContent> = {
  es: {
    locale: "es",
    ...catalogCopyByLocale.es,
    categories: buildCategories("es"),
    treatments: buildTreatments(),
  },
  ca: {
    locale: "ca",
    ...catalogCopyByLocale.ca,
    categories: buildCategories("ca"),
    treatments: buildTreatments(),
  },
  fr: {
    locale: "fr",
    ...catalogCopyByLocale.fr,
    categories: buildCategories("fr"),
    treatments: buildTreatments(),
  },
  en: {
    locale: "en",
    ...catalogCopyByLocale.en,
    categories: buildCategories("en"),
    treatments: buildTreatments(),
  },
  uk: {
    locale: "uk",
    ...catalogCopyByLocale.uk,
    categories: buildCategories("uk"),
    treatments: buildTreatments(),
  },
  ru: {
    locale: "ru",
    ...catalogCopyByLocale.ru,
    categories: buildCategories("ru"),
    treatments: buildTreatments(),
  },
};

export function getTreatmentsCatalog(locale: Locale): TreatmentsCatalogContent {
  return catalogByLocale[locale] ?? catalogByLocale.es;
}

export function getTreatmentBySlug(locale: Locale, slug: string): TreatmentItem | null {
  const catalog = getTreatmentsCatalog(locale);
  return catalog.treatments.find((item) => item.slug === slug) ?? null;
}

export function getTreatmentCategoryById(locale: Locale, categoryId: TreatmentCategoryId): TreatmentCategory | null {
  const catalog = getTreatmentsCatalog(locale);
  return catalog.categories.find((category) => category.id === categoryId) ?? null;
}

export function getTreatmentsByCategory(locale: Locale, categoryId: TreatmentCategoryId): TreatmentItem[] {
  const catalog = getTreatmentsCatalog(locale);
  return catalog.treatments.filter((item) => item.category === categoryId).sort((a, b) => a.order - b.order);
}

export function getRelatedTreatments(locale: Locale, treatment: TreatmentItem): TreatmentItem[] {
  const catalog = getTreatmentsCatalog(locale);
  const bySlug = new Map(catalog.treatments.map((item) => [item.slug, item]));

  return treatment.relatedTreatments.map((slug) => bySlug.get(slug)).filter((item): item is TreatmentItem => Boolean(item));
}

export function getTreatmentSlugs(): string[] {
  return treatmentsBase.map((item) => item.slug);
}
