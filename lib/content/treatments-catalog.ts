import type { Locale } from "@/lib/i18n/config";

export type TreatmentCategoryId =
  | "facials"
  | "corporals"
  | "depilacio"
  | "capilar-regeneracio"
  | "massatges-benestar"
  | "estetica-avancada";

export type TreatmentCategory = {
  id: TreatmentCategoryId;
  slug: string;
  order: number;
  name: string;
  description: string;
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
};

const baseCategories: BaseCategory[] = [
  { id: "facials", slug: "facials", order: 10 },
  { id: "corporals", slug: "corporals", order: 20 },
  { id: "depilacio", slug: "depilacio", order: 30 },
  { id: "capilar-regeneracio", slug: "capilar-regeneracio", order: 40 },
  { id: "massatges-benestar", slug: "massatges-i-benestar", order: 50 },
  { id: "estetica-avancada", slug: "estetica-avancada-i-especials", order: 60 },
];

const categoryCopyByLocale: Record<Locale, Record<TreatmentCategoryId, LocalizedCategoryCopy>> = {
  es: {
    facials: {
      name: "Faciales",
      description: "Protocolos para calidad de piel, luminosidad y armonía facial con enfoque progresivo.",
    },
    corporals: {
      name: "Corporales",
      description: "Tratamientos orientados a firmeza, textura, drenaje y mejora del confort corporal.",
    },
    depilacio: {
      name: "Depilación",
      description: "Soluciones de depilación láser y cera adaptadas a zona, fototipo y preferencia.",
    },
    "capilar-regeneracio": {
      name: "Capilar y regeneración",
      description: "Soporte cosmético capilar y protocolos de estímulo para continuidad de cuidado.",
    },
    "massatges-benestar": {
      name: "Masajes y bienestar",
      description: "Rituales manuales para relajación, descarga muscular y bienestar general.",
    },
    "estetica-avancada": {
      name: "Estética avanzada y especiales",
      description: "Tecnologías y protocolos de precisión para objetivos específicos y casos concretos.",
    },
  },
  ca: {
    facials: {
      name: "Facials",
      description: "Protocols per qualitat de pell, lluminositat i harmonia facial amb enfoc progressiu.",
    },
    corporals: {
      name: "Corporals",
      description: "Tractaments orientats a fermesa, textura, drenatge i millora del confort corporal.",
    },
    depilacio: {
      name: "Depilació",
      description: "Solucions de depilació làser i cera adaptades a zona, fototip i preferència.",
    },
    "capilar-regeneracio": {
      name: "Capil·lar i regeneració",
      description: "Suport cosmètic capil·lar i protocols d'estímul per mantenir la continuïtat.",
    },
    "massatges-benestar": {
      name: "Massatges i benestar",
      description: "Rituals manuals per relaxació, descàrrega muscular i benestar general.",
    },
    "estetica-avancada": {
      name: "Estètica avançada i especials",
      description: "Tecnologies i protocols de precisió per objectius específics i casos concrets.",
    },
  },
  fr: {
    facials: {
      name: "Soins du visage",
      description: "Protocoles progressifs pour qualité de peau, éclat et harmonie du visage.",
    },
    corporals: {
      name: "Soins corporels",
      description: "Traitements orientés fermeté, texture, drainage et confort corporel.",
    },
    depilacio: {
      name: "Épilation",
      description: "Solutions laser et cire adaptées à la zone, au phototype et à la préférence.",
    },
    "capilar-regeneracio": {
      name: "Capillaire et régénération",
      description: "Soutien cosmétique capillaire et protocoles de stimulation.",
    },
    "massatges-benestar": {
      name: "Massages et bien-être",
      description: "Rituels manuels pour relaxation, décontraction et bien-être global.",
    },
    "estetica-avancada": {
      name: "Esthétique avancée et spéciaux",
      description: "Technologies et protocoles de précision pour objectifs spécifiques.",
    },
  },
  en: {
    facials: {
      name: "Facial treatments",
      description: "Progressive protocols focused on skin quality, glow and facial harmony.",
    },
    corporals: {
      name: "Body treatments",
      description: "Treatments focused on firmness, texture, drainage and body comfort.",
    },
    depilacio: {
      name: "Hair removal",
      description: "Laser and wax hair-removal options adapted to area and skin profile.",
    },
    "capilar-regeneracio": {
      name: "Hair and regeneration",
      description: "Scalp support and stimulation protocols with a conservative approach.",
    },
    "massatges-benestar": {
      name: "Massage and wellness",
      description: "Manual rituals designed for relaxation and muscular wellbeing.",
    },
    "estetica-avancada": {
      name: "Advanced and special treatments",
      description: "Technology-led protocols for specific indications and goals.",
    },
  },
  uk: {
    facials: {
      name: "Процедури для обличчя",
      description: "Поступові протоколи для якості шкіри, сяйва та гармонії рис.",
    },
    corporals: {
      name: "Процедури для тіла",
      description: "Процедури для пружності, текстури, дренажу та комфорту тіла.",
    },
    depilacio: {
      name: "Епіляція",
      description: "Лазерні та воскові рішення з урахуванням зони та типу шкіри.",
    },
    "capilar-regeneracio": {
      name: "Капілярний і регенеративний догляд",
      description: "Підтримка шкіри голови та стимулювальні протоколи.",
    },
    "massatges-benestar": {
      name: "Масаж і добробут",
      description: "Ручні ритуали для релаксації, розслаблення та загального комфорту.",
    },
    "estetica-avancada": {
      name: "Розширена естетика та спеціальні",
      description: "Технологічні протоколи для конкретних показань і цілей.",
    },
  },
  ru: {
    facials: {
      name: "Процедуры для лица",
      description: "Пошаговые протоколы для качества кожи, сияния и гармонии лица.",
    },
    corporals: {
      name: "Процедуры для тела",
      description: "Протоколы для упругости, текстуры, дренажа и комфорта тела.",
    },
    depilacio: {
      name: "Эпиляция",
      description: "Лазерные и восковые решения с учетом зоны и фототипа.",
    },
    "capilar-regeneracio": {
      name: "Капиллярное и регенеративное направление",
      description: "Поддержка кожи головы и протоколы стимуляции.",
    },
    "massatges-benestar": {
      name: "Массаж и благополучие",
      description: "Ручные ритуалы для расслабления и общего комфорта.",
    },
    "estetica-avancada": {
      name: "Продвинутая эстетика и специальные",
      description: "Технологичные протоколы для конкретных задач.",
    },
  },
};

const treatmentsBase: TreatmentItem[] = [
  {
    name: "Wonder Axon",
    slug: "wonder-axon",
    category: "estetica-avancada",
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
    category: "facials",
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
    category: "depilacio",
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
    category: "facials",
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
    category: "corporals",
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
    category: "facials",
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
    category: "facials",
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
    category: "facials",
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
    category: "depilacio",
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
    category: "corporals",
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
    category: "corporals",
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
    category: "facials",
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
    category: "corporals",
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
    category: "estetica-avancada",
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
    category: "corporals",
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
    category: "corporals",
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
    category: "corporals",
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
    category: "corporals",
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
    category: "estetica-avancada",
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
    category: "estetica-avancada",
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
    category: "estetica-avancada",
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
    category: "massatges-benestar",
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
    category: "facials",
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
    category: "corporals",
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
    category: "capilar-regeneracio",
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
    category: "facials",
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
    category: "corporals",
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
    category: "corporals",
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
    category: "estetica-avancada",
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
    category: "estetica-avancada",
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
    category: "estetica-avancada",
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
    category: "estetica-avancada",
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
    category: "massatges-benestar",
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
    category: "massatges-benestar",
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
    category: "massatges-benestar",
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
    category: "massatges-benestar",
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
    category: "facials",
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
    category: "facials",
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
    category: "corporals",
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
    heroTitle: "Tratamientos organizados por objetivo para decidir mejor y reservar más rápido.",
    heroDescription:
      "Hemos reorganizado toda la oferta por áreas de necesidad real. Menos ruido, más claridad comercial y una navegación que ayuda a elegir sin fricción.",
    heroHighlights: [
      "39 tratamientos activos",
      "6 categorías claras",
      "Fichas individuales con SEO",
      "Reserva y WhatsApp en cada recorrido",
    ],
    sectionLabel: "Estructura comercial",
    sectionTitle: "Explora por categoría, compara y entra al detalle en un clic.",
    sectionDescription:
      "Cada tratamiento tiene un resumen corto, una explicación amplia, beneficios clave y conexiones con tratamientos relacionados para facilitar la toma de decisión.",
    categoryNavLabel: "Navegación por categorías",
    categoryJumpLabel: "Ir a categoría",
    treatmentCountLabel: "tratamientos",
    featuredLabel: "Destacado",
    cardCtaLabel: "Ver ficha completa",
    cardRelatedLabel: "Relacionados",
    relatedLabel: "Tratamientos relacionados",
    emptyStateLabel: "No hay tratamientos en esta categoría por ahora.",
    seoIntroTitle: "Cómo trabajamos la recomendación de tratamiento",
    seoIntroDescription:
      "La indicación siempre se adapta a diagnóstico y evolución. No hacemos promesas cerradas: diseñamos un plan realista, escalable y revisable en cabina.",
    detail: {
      backToTreatments: "Volver a tratamientos",
      category: "Categoría",
      keyBenefits: "Beneficios clave",
      relatedTreatments: "También te puede interesar",
      ctaPrimary: "Reservar valoración",
      ctaSecondary: "Hablar por WhatsApp",
    },
  },
  ca: {
    closeModalLabel: "Tancar",
    heroLabel: "Catàleg de tractaments",
    heroTitle: "Tractaments organitzats per objectiu per decidir millor i reservar més ràpid.",
    heroDescription:
      "Hem reorganitzat tota l'oferta per àrees de necessitat real. Menys soroll, més claredat comercial i una navegació que ajuda a triar sense fricció.",
    heroHighlights: ["39 tractaments actius", "6 categories clares", "Fitxes individuals", "CTA directe a reserva"],
    sectionLabel: "Estructura comercial",
    sectionTitle: "Explora per categoria, compara i entra al detall amb un clic.",
    sectionDescription:
      "Cada tractament inclou resum, explicació extensa, beneficis clau i enllaços a tractaments relacionats.",
    categoryNavLabel: "Navegació per categories",
    categoryJumpLabel: "Anar a categoria",
    treatmentCountLabel: "tractaments",
    featuredLabel: "Destacat",
    cardCtaLabel: "Veure fitxa completa",
    cardRelatedLabel: "Relacionats",
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
    heroHighlights: ["39 traitements", "6 catégories", "Fiches dédiées", "CTA direct"],
    sectionLabel: "Structure",
    sectionTitle: "Parcourez par catégorie et accédez à la fiche complète.",
    sectionDescription: "Chaque traitement présente une synthèse claire, bénéfices clés et options liées.",
    categoryNavLabel: "Navigation par catégories",
    categoryJumpLabel: "Aller à la catégorie",
    treatmentCountLabel: "traitements",
    featuredLabel: "Mis en avant",
    cardCtaLabel: "Voir la fiche",
    cardRelatedLabel: "Liés",
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
    heroHighlights: ["39 active treatments", "6 clear categories", "Individual treatment pages", "Direct booking CTAs"],
    sectionLabel: "Commercial architecture",
    sectionTitle: "Browse by category, compare quickly and open the full treatment page.",
    sectionDescription:
      "Each treatment card includes concise positioning, key benefits and links to related options.",
    categoryNavLabel: "Category navigation",
    categoryJumpLabel: "Jump to category",
    treatmentCountLabel: "treatments",
    featuredLabel: "Featured",
    cardCtaLabel: "Open full page",
    cardRelatedLabel: "Related",
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
    heroHighlights: ["39 процедур", "6 категорій", "Окремі сторінки", "Пряме бронювання"],
    sectionLabel: "Структура",
    sectionTitle: "Оберіть категорію, порівняйте та відкрийте повну сторінку.",
    sectionDescription: "Кожна картка містить короткий опис, ключові переваги та пов'язані опції.",
    categoryNavLabel: "Навігація за категоріями",
    categoryJumpLabel: "Перейти до категорії",
    treatmentCountLabel: "процедур",
    featuredLabel: "Рекомендовано",
    cardCtaLabel: "Відкрити сторінку",
    cardRelatedLabel: "Пов'язані",
    relatedLabel: "Пов'язані процедури",
    emptyStateLabel: "У цій категорії поки немає доступних процедур.",
    seoIntroTitle: "Як формується рекомендація",
    seoIntroDescription: "Рекомендація завжди базується на діагностиці й динаміці в кабіні.",
    detail: {
      backToTreatments: "Назад до процедур",
      category: "Категорія",
      keyBenefits: "Ключові переваги",
      relatedTreatments: "Також може бути цікаво",
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
    heroHighlights: ["39 процедур", "6 категорий", "Отдельные страницы", "Прямое бронирование"],
    sectionLabel: "Структура",
    sectionTitle: "Выберите категорию, сравните и откройте полную страницу процедуры.",
    sectionDescription: "Каждая карточка содержит краткое описание, ключевые преимущества и связанные опции.",
    categoryNavLabel: "Навигация по категориям",
    categoryJumpLabel: "Перейти к категории",
    treatmentCountLabel: "процедур",
    featuredLabel: "Рекомендуем",
    cardCtaLabel: "Открыть страницу",
    cardRelatedLabel: "Связанные",
    relatedLabel: "Связанные процедуры",
    emptyStateLabel: "В этой категории пока нет доступных процедур.",
    seoIntroTitle: "Как формируется рекомендация",
    seoIntroDescription: "Рекомендация всегда зависит от диагностики и динамики в процессе курса.",
    detail: {
      backToTreatments: "Назад к процедурам",
      category: "Категория",
      keyBenefits: "Ключевые преимущества",
      relatedTreatments: "Также может подойти",
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
