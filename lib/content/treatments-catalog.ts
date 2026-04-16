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
        "Tratamientos de cuidado base, mantenimiento, higiene facial y bienestar para preparar, mantener o acompañar protocolos más técnicos.",
      profile:
        "Ideal si buscas mejorar confort, textura, limpieza o bienestar sin empezar todavía por aparatología o protocolos intensivos.",
      intervention: "Grado de intervención: suave a moderado, pensado para continuidad, mantenimiento y mejora progresiva.",
      differentiation:
        "Se diferencia por su función de base: limpia, equilibra, prepara y acompaña antes o entre fases de tratamientos más avanzados.",
    },
    "estetica-avanzada": {
      name: "Estética avanzada",
      description:
        "Protocolos con aparatología, láser y técnicas de corrección visible para objetivos faciales y corporales concretos.",
      profile:
        "Pensada para quien necesita un plan más técnico, con objetivos claros de corrección, reducción o remodelación y seguimiento por evolución.",
      intervention:
        "Grado de intervención: moderado a alto dentro de la estética no invasiva, con sesiones estructuradas y parámetros ajustados al caso.",
      differentiation:
        "Se diferencia por el criterio con el que se usa la tecnología: láser, corporal y facial siempre dentro de una secuencia bien planteada.",
    },
    "estetica-regenerativa": {
      name: "Estética regenerativa",
      description:
        "Tratamientos orientados a mejorar calidad de piel, densidad, hidratación, textura y respuesta cutánea con lógica regenerativa.",
      profile:
        "Indicada cuando la prioridad es recuperar textura, vitalidad, luminosidad y capacidad de respuesta de la piel en el tiempo.",
      intervention:
        "Grado de intervención: técnico y progresivo, con foco en regeneración, renovación dérmica y mejora estructural sostenida.",
      differentiation:
        "Se diferencia porque no busca solo un efecto visual rápido: trabaja la calidad del tejido y la evolución sostenida del resultado.",
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
    category: "estetica-avanzada",
    shortDescription: "Estimulación neuromuscular para tonificar, activar músculo y mejorar firmeza corporal.",
    longDescription:
      "Tecnología que provoca contracciones musculares intensas para trabajar tono, fuerza y definición como complemento a hábitos y protocolos corporales bien planteados.",
    benefits: ["Activación muscular profunda", "Mejora de tono y firmeza", "Complemento rápido y eficaz"],
    order: 10,
    featured: true,
    relatedTreatments: ["cyclone-corporal", "tractaments-corporals-personalitzats"],
  },
  {
    name: "Hollywood Peel",
    slug: "hollywood-peel",
    category: "estetica-normal",
    shortDescription: "Láser con carbón activo para limpiar, afinar textura y aportar luminosidad inmediata.",
    longDescription:
      "Tratamiento con láser y carbón activo muy demandado cuando se busca efecto buena cara, limpieza más profunda, mejor aspecto general de la piel y cero tiempo de recuperación.",
    benefits: ["Luminosidad inmediata", "Limpieza más profunda", "Mejora de textura y poro"],
    order: 20,
    featured: true,
    relatedTreatments: ["peeling-quimic-facial", "neteja-cutis-punta-diamant"],
  },
  {
    name: "Depilación láser de diodo",
    slug: "depilacio-laser",
    category: "estetica-avanzada",
    shortDescription: "Protocolo por zonas con ajuste de parámetros según fototipo, tipo de vello y evolución real.",
    longDescription:
      "Trabajamos el láser con diagnóstico previo, seguimiento entre sesiones y expectativas realistas. El objetivo no es prometer un para siempre absoluto, sino una reducción muy significativa, progresiva y duradera del vello con mantenimientos cuando el caso lo necesita.",
    benefits: ["Reducción muy significativa del vello", "Parámetros ajustados al caso", "Seguimiento técnico real"],
    order: 30,
    featured: true,
    relatedTreatments: ["depilacio-cera-calenta-tebia", "tractaments-corporals-personalitzats"],
  },
  {
    name: "Peeling químico no ablativo",
    slug: "peeling-quimic-facial",
    category: "estetica-normal",
    shortDescription: "Renovación química controlada para manchas, textura irregular, poro y calidad global de la piel.",
    longDescription:
      "Peeling progresivo, no agresivo, que se adapta al estado de la piel, al tipo de ácido y al objetivo del protocolo para renovar sin una recuperación intensa ni descamaciones exageradas.",
    benefits: ["Mejora tono y luminosidad", "Afina textura y poro", "Se integra bien en protocolo"],
    order: 40,
    featured: true,
    relatedTreatments: ["hollywood-peel", "tractaments-despigmentants"],
  },
  {
    name: "Peeling corporal",
    slug: "peeling-corporal",
    category: "estetica-normal",
    shortDescription: "Renovación corporal para mejorar textura y preparar la piel antes de otros tratamientos.",
    longDescription:
      "Se utiliza para alisar el relieve cutáneo, mejorar acabado visual y hacer que la piel reciba mejor el resto del protocolo corporal.",
    benefits: ["Textura más uniforme", "Piel más receptiva", "Mejor acabado visual"],
    order: 50,
    featured: false,
    relatedTreatments: ["maderoterapia-corporal", "cyclone-corporal"],
  },
  {
    name: "Limpieza de piel con extracción manual y placa ultrasónica",
    slug: "neteja-cutis-vapor",
    category: "estetica-normal",
    shortDescription: "Limpieza profunda para desincrustar, extraer correctamente y preparar la piel para tratamientos posteriores.",
    longDescription:
      "Protocolo combinado para piel congestionada, comedones y exceso de grasa, con limpieza ultrasónica y extracción manual controlada cuando hace falta.",
    benefits: ["Descongestiona y limpia bien", "Mejora textura y luminosidad", "Base ideal antes de otros protocolos"],
    order: 60,
    featured: false,
    relatedTreatments: ["neteja-cutis-punta-diamant", "tractaments-facials-personalitzats"],
  },
  {
    name: "Punta de diamante",
    slug: "neteja-cutis-punta-diamant",
    category: "estetica-normal",
    shortDescription: "Exfoliación mecánica controlada para afinar textura y mejorar la apariencia de la piel.",
    longDescription:
      "Tratamiento muy útil cuando se busca una piel más suave, luminosa y receptiva antes de vehiculizar activos o combinar otras técnicas faciales.",
    benefits: ["Textura más fina", "Luminosidad visible", "Preparación ideal de la piel"],
    order: 70,
    featured: true,
    relatedTreatments: ["neteja-cutis-vapor", "microneedling-facial"],
  },
  {
    name: "Diseño de cejas",
    slug: "disseny-celles",
    category: "estetica-normal",
    shortDescription: "Diseño y definición de cejas para equilibrar la expresión y enmarcar mejor el rostro.",
    longDescription:
      "Servicio pensado para ordenar forma, simetría y acabado de la ceja con un resultado limpio, proporcionado y natural.",
    benefits: ["Marco facial más definido", "Resultado personalizado", "Acabado limpio y profesional"],
    order: 80,
    featured: false,
    relatedTreatments: ["lifting-manual-facial", "tractaments-facials-personalitzats"],
  },
  {
    name: "Depilación con cera caliente y tibia",
    slug: "depilacio-cera-calenta-tebia",
    category: "estetica-normal",
    shortDescription: "Depilación de mantenimiento para zonas faciales y corporales cuando no se trabaja con láser.",
    longDescription:
      "Se adapta a la zona y a la sensibilidad para ofrecer un acabado limpio inmediato y como complemento a rutinas de depilación o láser.",
    benefits: ["Acabado limpio inmediato", "Adaptable a distintas zonas", "Complemento útil del láser"],
    order: 90,
    featured: false,
    relatedTreatments: ["depilacio-laser", "disseny-celles"],
  },
  {
    name: "Maderoterapia Gold",
    slug: "maderoterapia-gold",
    category: "estetica-normal",
    shortDescription: "Maderoterapia corporal premium orientada a activación, drenaje y mejor aspecto del tejido.",
    longDescription:
      "Protocolo manual con instrumental de madera para movilizar tejido, activar circulación y acompañar planes corporales de continuidad.",
    benefits: ["Activa el tejido", "Sensación de ligereza", "Buen complemento corporal"],
    order: 100,
    featured: true,
    relatedTreatments: ["maderoterapia-corporal", "presoterapia"],
  },
  {
    name: "Maderoterapia corporal",
    slug: "maderoterapia-corporal",
    category: "estetica-normal",
    shortDescription: "Trabajo manual con instrumental para movilizar tejido y acompañar protocolos corporales.",
    longDescription:
      "Se utiliza como apoyo en tratamientos corporales donde interesa activar el tejido, mejorar sensación de ligereza y reforzar continuidad.",
    benefits: ["Activa la circulación superficial", "Mejora sensación corporal", "Se combina bien con drenaje"],
    order: 110,
    featured: true,
    relatedTreatments: ["maderoterapia-gold", "ones-acustiques"],
  },
  {
    name: "Radiofrecuencia facial",
    slug: "radiofrequencia-facial",
    category: "estetica-avanzada",
    shortDescription: "Calor dérmico controlado para trabajar firmeza, calidad de piel y primeros signos de flacidez.",
    longDescription:
      "Es uno de los básicos cuando se busca efecto tensor, mejor calidad de piel y una alternativa no invasiva bien tolerada, con calor agradable y sin downtime.",
    benefits: ["Efecto tensor progresivo", "Mejora firmeza y definición", "Sin tiempo de recuperación"],
    order: 120,
    featured: true,
    relatedTreatments: ["lifting-manual-facial", "cyclone-luxury-facial"],
  },
  {
    name: "Radiofrecuencia corporal",
    slug: "radiofrequencia-corporal",
    category: "estetica-avanzada",
    shortDescription: "Tratamiento reafirmante para mejorar firmeza corporal y calidad del tejido.",
    longDescription:
      "Genera calor en profundidad para estimular colágeno y mejorar elasticidad, especialmente cuando interesa reafirmar y acompañar protocolos corporales.",
    benefits: ["Mejora firmeza corporal", "Ayuda con flacidez", "Encaja muy bien en protocolo combinado"],
    order: 130,
    featured: true,
    relatedTreatments: ["hifu-corporal", "cyclone-corporal"],
  },
  {
    name: "Cyclone Luxury facial",
    slug: "cyclone-luxury-facial",
    category: "estetica-avanzada",
    shortDescription: "Radiofrecuencia y vacumterapia facial para activar colágeno y redefinir el óvalo.",
    longDescription:
      "Tratamiento no invasivo indicado en primeras fases de flacidez, falta de tonicidad y piel apagada, muy útil también como potenciador y mantenimiento.",
    benefits: ["Efecto tensor inmediato", "Mejora circulación y tono", "Sin downtime"],
    order: 140,
    featured: true,
    relatedTreatments: ["wonder-axon", "radiofrequencia-facial"],
  },
  {
    name: "Cyclone corporal",
    slug: "cyclone-corporal",
    category: "estetica-avanzada",
    shortDescription: "Combinación secuenciada de HIFU, cavitación, vacum y radiofrecuencia para grasa, flacidez y retención.",
    longDescription:
      "Funciona por la secuencia de tecnologías: no es un solo aparato, sino un protocolo corporal bien planteado para tratar volumen, tejido y firmeza a la vez.",
    benefits: ["Reducción progresiva de volumen", "Mejora drenaje y textura", "Protocolo corporal completo"],
    order: 150,
    featured: true,
    relatedTreatments: ["radiofrequencia-corporal", "presoterapia"],
  },
  {
    name: "Cavitación",
    slug: "cavitacio",
    category: "estetica-avanzada",
    shortDescription: "Ultrasonidos para trabajar grasa superficial dentro de un protocolo corporal bien secuenciado.",
    longDescription:
      "Se utiliza para ayudar a romper grasa localizada superficial y funciona mucho mejor cuando se acompaña de drenaje, vacum, radiofrecuencia y hábitos coherentes.",
    benefits: ["Reducción progresiva de volumen", "Muy útil en grasa superficial", "Se potencia en combinación"],
    order: 160,
    featured: false,
    relatedTreatments: ["ones-acustiques", "tractaments-corporals-personalitzats"],
  },
  {
    name: "HIFU / Lipocel corporal",
    slug: "hifu-corporal",
    category: "estetica-avanzada",
    shortDescription: "Ultrasonido focalizado para trabajar grasa localizada en profundidad sin cirugía.",
    longDescription:
      "Tratamiento indicado cuando hay grasa resistente y se busca una reducción progresiva de centímetros. Actúa en profundidad real sobre adipocitos localizados, no está pensado para perder peso general y el resultado se procesa a lo largo de varias semanas.",
    benefits: ["Actúa en profundidad real", "Reduce centímetros progresivamente", "Base potente para protocolo combinado"],
    order: 170,
    featured: true,
    relatedTreatments: ["radiofrequencia-corporal", "cyclone-corporal"],
  },
  {
    name: "Vacumterapia con radiofrecuencia",
    slug: "vacunterapia",
    category: "estetica-avanzada",
    shortDescription: "Succión controlada y calor profundo para mejorar circulación, celulitis, drenaje y firmeza.",
    longDescription:
      "Muy útil cuando el objetivo es movilizar tejido, mejorar celulitis blanda o edematosa y evitar que otros tratamientos corporales dejen la piel sin soporte. Suele actuar como puente entre fases más intensivas del protocolo corporal.",
    benefits: ["Mejora tejido y circulación", "Ayuda con celulitis y drenaje", "Aporta firmeza progresiva"],
    order: 180,
    featured: false,
    relatedTreatments: ["maderoterapia-corporal", "drenatges-limfatics"],
  },
  {
    name: "Ondas galvánicas",
    slug: "ones-galvaniques",
    category: "estetica-avanzada",
    shortDescription: "Corriente continua para vehiculizar activos y mejorar su penetración sin agujas.",
    longDescription:
      "Se utiliza cuando interesa reforzar hidratación, luminosidad o tratamiento cosmético en pieles que no necesitan o no toleran técnicas más invasivas.",
    benefits: ["Mejora penetración de activos", "Sin downtime", "Alternativa suave y eficaz"],
    order: 190,
    featured: false,
    relatedTreatments: ["fototerapia", "tractaments-facials-personalitzats"],
  },
  {
    name: "Fototerapia LED",
    slug: "fototerapia",
    category: "estetica-regenerativa",
    shortDescription: "Luz terapéutica para calmar, regenerar y acompañar tratamientos faciales y post-tratamiento.",
    longDescription:
      "Es un tratamiento muy seguro y versátil para acné, inflamación, sensibilidad y como complemento de protocolos de regeneración o recuperación.",
    benefits: ["Calma y mejora confort", "Potencia recuperación", "Compatible con casi todos los protocolos"],
    order: 200,
    featured: false,
    relatedTreatments: ["alta-frequencia", "ones-galvaniques"],
  },
  {
    name: "Alta frecuencia",
    slug: "alta-frequencia",
    category: "estetica-regenerativa",
    shortDescription: "Técnica complementaria para oxigenar, desinfectar y apoyar pieles grasas o acneicas.",
    longDescription:
      "Se usa sobre todo en limpiezas y protocolos de acné para ayudar a reducir inflamación, bacterias y mejorar recuperación.",
    benefits: ["Apoyo excelente en acné", "Mejora sensación de limpieza", "Complemento corto pero útil"],
    order: 210,
    featured: false,
    relatedTreatments: ["neteja-cutis-vapor", "fototerapia"],
  },
  {
    name: "Spa de pies y manos",
    slug: "spa-peus-mans",
    category: "estetica-normal",
    shortDescription: "Ritual de bienestar y cuidado estético para manos y pies.",
    longDescription:
      "Servicio pensado para mejorar hidratación, confort y aspecto de manos y pies con una experiencia relajante y cuidada.",
    benefits: ["Más confort", "Mejor aspecto", "Experiencia de desconexión"],
    order: 220,
    featured: false,
    relatedTreatments: ["massatges-relaxants", "disseny-celles"],
  },
  {
    name: "Microneedling facial",
    slug: "microneedling-facial",
    category: "estetica-regenerativa",
    shortDescription: "Microcanales controlados para estimular colágeno y vehiculizar activos regenerativos.",
    longDescription:
      "Indicado cuando se busca mejorar flacidez, arrugas, manchas, poro, acné o calidad global de la piel con una lógica regenerativa real y progresiva. Permite trabajar con exosomas, factores de crecimiento, ácido hialurónico, despigmentantes o antioxidantes según diagnóstico.",
    benefits: ["Estimula regeneración dérmica", "Mejora textura, tono y densidad", "Permite personalizar activos"],
    order: 230,
    featured: true,
    relatedTreatments: ["radiofrequencia-facial", "tractaments-facials-personalitzats"],
  },
  {
    name: "Microneedling corporal",
    slug: "microneedling-corporal",
    category: "estetica-regenerativa",
    shortDescription: "Microestimulación corporal para trabajar textura, estrías y calidad de piel en zonas localizadas.",
    longDescription:
      "Se adapta a la zona y al objetivo para mejorar superficie, calidad del tejido y respuesta cutánea dentro de un plan corporal más amplio.",
    benefits: ["Mejora textura corporal", "Trabajo localizado", "Encaja bien en protocolo combinado"],
    order: 240,
    featured: false,
    relatedTreatments: ["peeling-corporal", "tractaments-corporals-personalitzats"],
  },
  {
    name: "Microneedling capilar / ProHair",
    slug: "microneedling-capilar",
    category: "estetica-regenerativa",
    shortDescription: "Microestimulación del cuero cabelludo para trabajar caída, densidad y calidad capilar.",
    longDescription:
      "Tratamiento indicado cuando interesa actuar sobre el folículo con viales, factores de crecimiento y estímulo controlado para mejorar caída, debilitamiento y respuesta capilar. Se trabaja en protocolo y gana mucho valor cuando se combina con pauta domiciliaria.",
    benefits: ["Actúa sobre el folículo", "Mejora calidad y densidad capilar", "Se potencia con tratamiento domiciliario"],
    order: 250,
    featured: true,
    relatedTreatments: ["tractaments-facials-personalitzats", "wonder-axon"],
  },
  {
    name: "Microneedling labios + ácido hialurónico",
    slug: "microneedling-llavis-acid-hialuronic",
    category: "estetica-regenerativa",
    shortDescription: "Tratamiento de labios orientado a hidratación, confort y mejora visual de la textura.",
    longDescription:
      "Protocolo específico para labios secos o apagados cuando se busca una mejora estética cuidada sin perder naturalidad.",
    benefits: ["Más hidratación", "Mejor textura", "Aspecto más cuidado"],
    order: 260,
    featured: false,
    relatedTreatments: ["hollywood-peel", "tractaments-facials-personalitzats"],
  },
  {
    name: "Ondas de choque",
    slug: "ones-acustiques",
    category: "estetica-avanzada",
    shortDescription: "Ondas acústicas para trabajar celulitis, fibrosis y calidad del tejido corporal.",
    longDescription:
      "Tecnología muy útil cuando interesa mejorar microcirculación, romper fibrosis y conseguir una piel más uniforme dentro de un protocolo corporal.",
    benefits: ["Muy útil para celulitis y fibrosis", "Mejora textura del tejido", "Potencia otros corporales"],
    order: 270,
    featured: false,
    relatedTreatments: ["cavitacio", "maderoterapia-gold"],
  },
  {
    name: "Presoterapia",
    slug: "presoterapia",
    category: "estetica-normal",
    shortDescription: "Presión de aire secuencial para drenaje, ligereza y apoyo de protocolos corporales.",
    longDescription:
      "Tratamiento cómodo y muy útil para piernas cansadas, retención de líquidos y como apoyo en remodelación corporal cuando interesa mejorar drenaje y confort.",
    benefits: ["Sensación inmediata de ligereza", "Apoyo de drenaje", "Muy combinable"],
    order: 280,
    featured: true,
    relatedTreatments: ["drenatges-limfatics", "cyclone-corporal"],
  },
  {
    name: "Tratamientos despigmentantes",
    slug: "tractaments-despigmentants",
    category: "estetica-avanzada",
    shortDescription: "Protocolos para tratar manchas, tono irregular y pigmentación con estrategia y seguimiento.",
    longDescription:
      "Se trabajan siempre por fases, con diagnóstico previo, selección correcta de activos o láser y mucho control sobre la estacionalidad y la exposición solar.",
    benefits: ["Mejora de uniformidad", "Enfoque progresivo y realista", "Control para evitar recaídas"],
    order: 290,
    featured: true,
    relatedTreatments: ["taques", "laser-taques"],
  },
  {
    name: "Kojic SK",
    slug: "taques",
    category: "estetica-avanzada",
    shortDescription: "Vial despigmentante para manchas, melasma y tono irregular dentro de un protocolo controlado.",
    longDescription:
      "Se utiliza cuando interesa trabajar hiperpigmentación con una estrategia más precisa, siempre sabiendo que las manchas no se corrigen con una sola sesión ni con promesas rápidas.",
    benefits: ["Ayuda a unificar el tono", "Encaja en protocolo despigmentante", "Seguimiento responsable"],
    order: 300,
    featured: false,
    relatedTreatments: ["tractaments-despigmentants", "laser-taques"],
  },
  {
    name: "Láser para manchas",
    slug: "laser-taques",
    category: "estetica-avanzada",
    shortDescription: "Tratamiento láser orientado a manchas localizadas, siempre con diagnóstico y selección precisa.",
    longDescription:
      "No todas las manchas se tratan igual. Aquí el láser se indica cuando toca y se acompaña de pauta de cuidado para minimizar recaídas y proteger la piel.",
    benefits: ["Trabajo localizado", "Selección responsable del caso", "Se integra con mantenimiento"],
    order: 310,
    featured: true,
    relatedTreatments: ["taques", "tractaments-despigmentants"],
  },
  {
    name: "Eliminación de tatuajes",
    slug: "eliminacio-tatuatges",
    category: "estetica-avanzada",
    shortDescription: "Reducción progresiva del tatuaje por sesiones, con valoración de tinta, zona y respuesta de la piel.",
    longDescription:
      "Tratamiento láser que fragmenta la tinta para que el cuerpo la elimine progresivamente. La evolución depende del color, la profundidad, la antigüedad y la zona; el negro y los tonos oscuros suelen responder mejor que otros colores.",
    benefits: ["Planificación realista por fases", "Valoración de tinta y zona", "Seguimiento entre sesiones"],
    order: 320,
    featured: true,
    relatedTreatments: ["laser-taques", "tractaments-corporals-personalitzats"],
  },
  {
    name: "Masajes relajantes",
    slug: "massatges-relaxants",
    category: "estetica-normal",
    shortDescription: "Masaje orientado a descargar tensión general, bajar estrés y favorecer bienestar.",
    longDescription:
      "Servicio pensado para personas que necesitan una pausa real, menos tensión acumulada y más sensación de descanso físico y mental.",
    benefits: ["Libera tensión", "Aporta bienestar general", "Recupera sensación de confort"],
    order: 330,
    featured: true,
    relatedTreatments: ["massatges-descontracturants", "spa-peus-mans"],
  },
  {
    name: "Masajes descontracturantes",
    slug: "massatges-descontracturants",
    category: "estetica-normal",
    shortDescription: "Masaje manual para zonas de sobrecarga, tensión muscular y malas posturas.",
    longDescription:
      "Se centra en zonas concretas donde hay más carga o contractura, con una intensidad adaptada a lo que el tejido necesita.",
    benefits: ["Descarga muscular localizada", "Mejora movilidad y confort", "Alivio desde la primera sesión"],
    order: 340,
    featured: true,
    relatedTreatments: ["massatges-relaxants", "drenatges-limfatics"],
  },
  {
    name: "Masajes anticelulíticos",
    slug: "massatges-anticellulitics",
    category: "estetica-normal",
    shortDescription: "Masaje corporal de apoyo en protocolos donde se quiere mejorar celulitis y activar tejido.",
    longDescription:
      "No sustituye a un protocolo completo, pero sí ayuda a movilizar tejido y dar continuidad cuando se trabaja celulitis o drenaje corporal.",
    benefits: ["Activa tejido manualmente", "Buen apoyo en celulitis", "Acompaña el mantenimiento"],
    order: 350,
    featured: false,
    relatedTreatments: ["maderoterapia-corporal", "ones-acustiques"],
  },
  {
    name: "Drenaje linfático manual",
    slug: "drenatges-limfatics",
    category: "estetica-normal",
    shortDescription: "Técnica manual específica para estimular drenaje, reducir hinchazón y mejorar ligereza corporal.",
    longDescription:
      "Tratamiento suave y técnico que trabaja el sistema linfático para mejorar retención de líquidos, pesadez, postoperatorios y confort general.",
    benefits: ["Menos hinchazón y pesadez", "Mejora drenaje y confort", "Muy útil entre fases corporales"],
    order: 360,
    featured: true,
    relatedTreatments: ["presoterapia", "massatges-relaxants"],
  },
  {
    name: "Lifting manual facial",
    slug: "lifting-manual-facial",
    category: "estetica-normal",
    shortDescription: "Masaje facial técnico para estimular tono, relajar facciones y mejorar aspecto de cansancio.",
    longDescription:
      "Tratamiento no invasivo para trabajar gesto, circulación y tono facial cuando se busca un rostro más descansado y vivo.",
    benefits: ["Rostro más descansado", "Mejora tono visual", "Tratamiento muy amable con la piel"],
    order: 370,
    featured: false,
    relatedTreatments: ["radiofrequencia-facial", "tractaments-facials-personalitzats"],
  },
  {
    name: "Tratamientos faciales personalizados",
    slug: "tractaments-facials-personalitzats",
    category: "estetica-regenerativa",
    shortDescription: "Protocolos a medida según diagnóstico, objetivo y respuesta real de la piel.",
    longDescription:
      "Aquí es donde entran los activos regenerativos y los planes más estratégicos: PROAGE GF, PROEXO GF, TEC-EXOSOME PDRN, HA HYDRO, REDENSA, CELLVIT, PROBIO SK o KOJIC SK, siempre elegidos según diagnóstico. No tratamos solo la arruga, la mancha o la deshidratación: trabajamos la calidad de la piel que los genera.",
    benefits: ["Plan facial totalmente personalizado", "Selección precisa de activos y técnicas", "Seguimiento continuo y reajustable"],
    order: 380,
    featured: true,
    relatedTreatments: ["wonder-axon", "microneedling-facial"],
  },
  {
    name: "Tratamientos corporales personalizados",
    slug: "tractaments-corporals-personalitzats",
    category: "estetica-avanzada",
    shortDescription: "Plan corporal a medida cuando el caso necesita combinar varias tecnologías con una estrategia clara.",
    longDescription:
      "Se diseñan por fases para combinar HIFU, cavitación, vacum, radiofrecuencia, Wonder Axon, drenaje o presoterapia según si el objetivo principal es grasa localizada, flacidez, celulitis o retención.",
    benefits: ["Estrategia corporal a medida", "Más control de progresión", "Plan escalable y revisable"],
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
    heroTitle: "Explora láser, aparatología y protocolos regenerativos con una lógica más clara.",
    heroDescription:
      "Ordenamos la oferta por tipo de intervención para que puedas comparar mejor, sabiendo que la indicación final siempre se define en la cita de diagnóstico.",
    heroHighlights: [
      "39 tratamientos activos",
      "Láser, faciales y corporales",
      "Criterio profesional antes de indicar",
      "Reserva y WhatsApp sin salir del flujo",
    ],
    sectionLabel: "Estructura principal",
    sectionTitle: "Selecciona una familia y revisa los tratamientos con el nivel de intervención que encaja contigo.",
    sectionDescription:
      "Cada ficha resume qué trabaja el tratamiento, qué puede aportar y cuándo conviene valorarlo. El objetivo no es vender por impulso, sino ayudarte a entender mejor la oferta.",
    categoryNavLabel: "Selector principal",
    categoryJumpLabel: "Cambiar categoría",
    treatmentCountLabel: "tratamientos",
    featuredLabel: "Destacado",
    cardCtaLabel: "Saber más",
    cardRelatedLabel: "Combinable con",
    relatedLabel: "Tratamientos relacionados",
    emptyStateLabel: "No hay tratamientos en esta categoría por ahora.",
    seoIntroTitle: "Tratamientos bien indicados, no sesiones al azar",
    seoIntroDescription:
      "En el centro no se trabaja con protocolos estándar ni con promesas rápidas. La recomendación siempre se adapta a diagnóstico, tolerancia, continuidad y evolución real.",
    detail: {
      backToTreatments: "Volver a tratamientos",
      category: "Categoría",
      keyBenefits: "Beneficios clave",
      relatedTreatments: "También te puede interesar",
      openModal: "Saber más",
      modalDescription: "Descripción general",
      modalIndicatedFor: "Cuándo suele encajar",
      modalGoals: "Objetivos del tratamiento",
      modalBenefits: "Qué puede aportar",
      modalDuration: "Duración orientativa",
      modalFrequency: "Frecuencia orientativa",
      modalSensation: "Sensación durante la sesión",
      modalConsiderations: "Cuidados y consideraciones",
      modalAssessment: "Qué valoramos antes de indicarlo",
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
