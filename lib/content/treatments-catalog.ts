import type { Locale } from "@/lib/i18n/config";

export type TreatmentCategoryId =
  | "estetica-normal"
  | "estetica-avanzada"
  | "estetica-regenerativa";

export type TreatmentCategory = {
  id: TreatmentCategoryId;
  name: string;
  description: string;
};

export type TreatmentDetailModal = {
  label: string;
  title: string;
  intro: string;
  consistsOf: string[];
  objectives: string[];
  zones: string[];
  timings: string[];
  recommendations: string[];
  followUp: string[];
  notes: string[];
};

export type TreatmentItem = {
  id: string;
  name: string;
  categoryId: TreatmentCategoryId;
  categoryName: string;
  featured?: boolean;
  shortDescription: string;
  objective: string;
  duration: string;
  frequency: string;
  candidate: string;
  ctaLabel: string;
  modal: TreatmentDetailModal;
};

export type TreatmentsCatalogContent = {
  closeModalLabel: string;
  heroLabel: string;
  heroTitle: string;
  heroDescription: string;
  heroHighlights: string[];
  sectionLabel: string;
  sectionTitle: string;
  sectionDescription: string;
  filterLabel: string;
  detailLabel: string;
  featuredLabel: string;
  secondaryLabel: string;
  secondaryDescription: string;
  explorer: {
    guide: string;
    activeCategoryLabel: string;
    availableTreatmentsLabel: string;
    nextCategoryLabel: string;
    stepLabel: string;
    featuredBadge: string;
    showMoreLabel: string;
    showLessLabel: string;
    emptyStateLabel: string;
  };
  labels: {
    objective: string;
    duration: string;
    frequency: string;
    candidate: string;
    category: string;
    consistsOf: string;
    objectives: string;
    zonesAndTimings: string;
    recommendationsAndFollowUp: string;
    notes: string;
    candidateProfile: string;
  };
  categories: TreatmentCategory[];
  treatments: TreatmentItem[];
  seoIntroTitle: string;
  seoIntroDescription: string;
};

const esCategories: TreatmentCategory[] = [
  {
    id: "estetica-normal",
    name: "Estética normal",
    description:
      "Bloque base con facial, corporal y cabina para mantenimiento, mejora visible y continuidad técnica.",
  },
  {
    id: "estetica-avanzada",
    name: "Estética avanzada",
    description:
      "Tecnología y protocolos de precisión para objetivos que requieren más intensidad y trazabilidad.",
  },
  {
    id: "estetica-regenerativa",
    name: "Estética regenerativa",
    description:
      "Recuperación de barrera, soporte de piel sensible y continuidad de resultados con enfoque conservador.",
  },
];

const esCategoryNameById = Object.fromEntries(esCategories.map((category) => [category.id, category.name])) as Record<
  TreatmentCategoryId,
  string
>;

const esTreatments: TreatmentItem[] = [
  {
    id: "higiene-facial-experta",
    name: "Limpieza facial profunda",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    featured: true,
    shortDescription: "Limpieza profunda por capas para recuperar equilibrio y luminosidad.",
    objective: "Desobstruir poro y preparar la piel para fases activas.",
    duration: "50-60 min",
    frequency: "Cada 4-6 semanas",
    candidate: "Piel mixta, poro obstruido o mantenimiento regular.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética normal",
      title: "Limpieza facial profunda",
      intro: "Sesión técnica de limpieza profunda con extracción selectiva y cierre calmante.",
      consistsOf: ["Analisis de piel", "Limpieza por capas", "Extracción selectiva", "Mascara final"],
      objectives: ["Reducir congestion", "Mejorar textura", "Recuperar luminosidad"],
      zones: ["Rostro", "Cuello"],
      timings: ["Sesión de 50-60 min", "Sin baja social"],
      recommendations: ["Fotoproteccion diaria", "Evitar manipulacion 24h"],
      followUp: ["Revisión en siguiente cita", "Ajuste de rutina domiciliaria"],
      notes: ["Se combina bien con LED calmante."],
    },
  },
  {
    id: "peeling-renovador-suave",
    name: "Peeling químico suave",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    shortDescription: "Renovacion cosmética para piel opaca y textura irregular.",
    objective: "Refinar relieve y mejorar brillo sin recuperación larga.",
    duration: "35-45 min",
    frequency: "Cada 3-4 semanas",
    candidate: "Piel apagada o con poro visible.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética normal",
      title: "Peeling químico suave",
      intro: "Exfoliacion controlada adaptada a tolerancia individual.",
      consistsOf: ["Valoracion inicial", "Aplicacion por capas", "Neutralizacion", "Cierre hidratante"],
      objectives: ["Aportar luz", "Pulir textura", "Preparar fases activas"],
      zones: ["Rostro", "Cuello"],
      timings: ["Sesión de 35-45 min", "Descamacion leve 24-72h"],
      recommendations: ["Fotoproteccion estricta", "No usar exfoliantes 48h"],
      followUp: ["Control de tolerancia", "Ajuste de concentracion"],
      notes: ["No indicado en piel sensibilizada sin preparación."],
    },
  },
  {
    id: "cuidado-manos-unas-pro",
    name: "Manicura completa",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    shortDescription: "Mantenimiento técnico de manos y unas con enfoque de salud estética.",
    objective: "Mejorar aspecto de manos y conservar una estructura sana de una.",
    duration: "40-50 min",
    frequency: "Cada 2-4 semanas",
    candidate: "Personas que necesitan mantenimiento continuo de manos.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética normal",
      title: "Manicura completa",
      intro: "Sesión de mantenimiento con preparación de placa, cuticula y acabado protector.",
      consistsOf: ["Preparación técnica", "Cuidado de cuticula", "Acabado protector"],
      objectives: ["Ordenar estructura de una", "Mejorar imagen de manos"],
      zones: ["Manos", "Unas"],
      timings: ["Sesión de 40-50 min"],
      recommendations: ["Hidratacion diaria", "Evitar agresion mecanica intensa"],
      followUp: ["Ritmo de mantenimiento segun crecimiento"],
      notes: ["Compatible con refuerzo de tratamiento domiciliario."],
    },
  },
  {
    id: "hidrodermoabrasion-premium",
    name: "Hydrafacial (hidrodermoabrasión)",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    featured: true,
    shortDescription: "Limpieza técnica con infusion de activos para brillo y confort inmediato.",
    objective: "Mejorar hidratacion y calidad visible de la piel.",
    duration: "45-55 min",
    frequency: "Cada 3-5 semanas",
    candidate: "Piel deshidratada o poro visible.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética normal",
      title: "Hydrafacial (hidrodermoabrasión)",
      intro: "Sistema de exfoliacion, extracción e infusion de activos en una sola sesión.",
      consistsOf: ["Exfoliacion controlada", "Extracción asistida", "Infusion de activos"],
      objectives: ["Aumentar hidratacion", "Mejorar textura", "Aportar luminosidad"],
      zones: ["Rostro", "Cuello", "Escote"],
      timings: ["Sesión de 45-55 min", "Sin recuperación"],
      recommendations: ["Fotoproteccion", "Hidratacion continua"],
      followUp: ["Control de respuesta", "Combinación con tratamiento regenerativo"],
      notes: ["Intensidad ajustada en piel sensible."],
    },
  },
  {
    id: "microneedling-cosmetico",
    name: "Microneedling cosmetico",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    featured: true,
    shortDescription: "Microestimulacion de piel para mejorar poro, marcas y tono.",
    objective: "Favorecer renovacion y uniformidad del relieve cutaneo.",
    duration: "55-70 min",
    frequency: "Cada 4-6 semanas",
    candidate: "Marcas superficiales, textura irregular o poro marcado.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética normal",
      title: "Microneedling cosmetico",
      intro: "Tecnica de microestimulo superficial combinada con activos de apoyo.",
      consistsOf: ["Preparacion", "Aplicacion por zonas", "Cierre reparador"],
      objectives: ["Mejorar textura", "Unificar tono", "Aportar calidad global"],
      zones: ["Rostro", "Cuello", "Escote"],
      timings: ["Sesión de 55-70 min", "Recuperación 24-48h"],
      recommendations: ["Evitar calor 24h", "Fotoproteccion estricta"],
      followUp: ["Revisión de tolerancia", "Ajuste de activos"],
      notes: ["La idoneidad se confirma tras diagnóstico."],
    },
  },
  {
    id: "protocolo-antimanchas-facial",
    name: "Tratamiento antimanchas facial",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    shortDescription: "Plan por sesiones para tono irregular y manchas visibles.",
    objective: "Mejorar homogeneidad de tono con estrategia progresiva.",
    duration: "50-60 min",
    frequency: "Cada 2-4 semanas",
    candidate: "Piel con hiperpigmentacion o tono desigual.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética normal",
      title: "Tratamiento antimanchas facial",
      intro: "Combinación de activos y técnica en cabina para tono más uniforme.",
      consistsOf: ["Diagnóstico pigmentario", "Fase activa", "Cierre antioxidante"],
      objectives: ["Regular tono", "Reducir contraste de mancha", "Reforzar prevencion"],
      zones: ["Rostro", "Escote"],
      timings: ["Sesión de 50-60 min", "Recuperación leve segun piel"],
      recommendations: ["Fotoproteccion todo el año", "Evitar agresiones termicas"],
      followUp: ["Comparativa por bloque", "Ajuste segun estacionalidad"],
      notes: ["Necesita continuidad para consolidar resultado."],
    },
  },
  {
    id: "presoterapia-estetica",
    name: "Presoterapia estética",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    featured: true,
    shortDescription: "Compresion secuencial para sensacion de ligereza y soporte drenante.",
    objective: "Reducir pesadez y apoyar planes corporales combinados.",
    duration: "30-40 min",
    frequency: "1-2 veces por semana",
    candidate: "Retencion de liquidos o piernas cansadas.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética normal",
      title: "Presoterapia estética",
      intro: "Sesión de drenaje mecanico con intensidad ajustada.",
      consistsOf: ["Valoracion de base", "Compresion por fases", "Cierre y pautas"],
      objectives: ["Ligereza", "Confort", "Apoyo remodelante"],
      zones: ["Piernas", "Abdomen", "Brazos"],
      timings: ["Sesión de 30-40 min", "Sin recuperación"],
      recommendations: ["Hidratacion", "Actividad suave"],
      followUp: ["Control semanal", "Ajuste de frecuencia"],
      notes: ["Compatible con maderoterapia y cabina corporal."],
    },
  },
  {
    id: "maderoterapia-corporal",
    name: "Maderoterapia corporal",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    shortDescription: "Trabajo manual con instrumental para activar tejido y tono visual.",
    objective: "Estimular tejido superficial y apoyar definicion.",
    duration: "45-55 min",
    frequency: "1 sesión semanal",
    candidate: "Personas que priorizan trabajo manual progresivo.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética normal",
      title: "Maderoterapia corporal",
      intro: "Secuencia manual en cabina con instrumental de apoyo.",
      consistsOf: ["Revisión de zonas", "Secuencia técnica", "Cierre drenante"],
      objectives: ["Activar tejido", "Mejorar tono", "Mantener continuidad"],
      zones: ["Piernas", "Gluteos", "Abdomen"],
      timings: ["Sesión de 45-55 min"],
      recommendations: ["Hidratacion", "Regularidad", "Descanso muscular"],
      followUp: ["Registro de evolucion", "Ajuste de intensidad"],
      notes: ["Puede alternarse con presoterapia."],
    },
  },
  {
    id: "ritual-cuerpo-detox",
    name: "Tratamiento corporal drenante",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    shortDescription: "Sesión corporal de cabina para desinflamar y revitalizar tejido.",
    objective: "Mejorar confort corporal y aspecto de piel en fases de mantenimiento.",
    duration: "55-65 min",
    frequency: "Quincenal",
    candidate: "Personas con cansancio corporal o piel apagada.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética normal",
      title: "Tratamiento corporal drenante",
      intro: "Protocolo de cabina con secuencia drenante y fase nutritiva.",
      consistsOf: ["Preparacion", "Fase técnica corporal", "Cierre confort"],
      objectives: ["Aliviar sensacion de pesadez", "Aportar tono visual"],
      zones: ["Piernas", "Abdomen", "Espalda baja"],
      timings: ["Sesión de 55-65 min"],
      recommendations: ["Hidratacion alta", "Mantener actividad"],
      followUp: ["Mantenimiento quincenal o mensual"],
      notes: ["Ideal como soporte entre bloques intensivos."],
    },
  },
  {
    id: "depilacion-laser-diodo",
    name: "Depilación laser diodo",
    categoryId: "estetica-avanzada",
    categoryName: esCategoryNameById["estetica-avanzada"],
    featured: true,
    shortDescription: "Protocolo por zonas con parámetros ajustados a fototipo y evolucion.",
    objective: "Reducir de forma progresiva el vello no deseado.",
    duration: "15-60 min",
    frequency: "Cada 4-8 semanas",
    candidate: "Vello facial o corporal con necesidad de pauta estable.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética avanzada",
      title: "Depilación laser diodo",
      intro: "Tratamiento técnico con ajustes por sesión y trazabilidad por zona.",
      consistsOf: ["Valoracion de fototipo", "Aplicacion por zonas", "Registro de respuesta"],
      objectives: ["Reducir densidad", "Mejorar confort", "Planificar mantenimiento"],
      zones: ["Facial", "Corporal"],
      timings: ["Sesión segun zona", "Retorno inmediato"],
      recommendations: ["Evitar exposicion solar intensa", "Rasurado segun pauta"],
      followUp: ["Revisión por zona", "Ajuste de intervalos"],
      notes: ["La pauta definitiva se valida en consulta."],
    },
  },
  {
    id: "radiofrecuencia-corporal-multipolar",
    name: "Radiofrecuencia corporal",
    categoryId: "estetica-avanzada",
    categoryName: esCategoryNameById["estetica-avanzada"],
    featured: true,
    shortDescription: "Estimulo termico no invasivo para tono y textura corporal.",
    objective: "Mejorar firmeza y soporte de tejido en zonas localizadas.",
    duration: "40-55 min",
    frequency: "Cada 2-3 semanas",
    candidate: "Flacidez leve o necesidad de refuerzo de contorno.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética avanzada",
      title: "Radiofrecuencia corporal",
      intro: "Aplicacion por cuadrantes con control de temperatura y confort.",
      consistsOf: ["Mapa de zonas", "Aplicacion técnica", "Cierre calmante"],
      objectives: ["Aportar firmeza", "Mejorar textura", "Sostener plan corporal"],
      zones: ["Abdomen", "Flancos", "Brazos", "Muslos"],
      timings: ["Sesión de 40-55 min", "Sin baja social"],
      recommendations: ["Hidratacion", "Actividad ligera post sesión"],
      followUp: ["Reevaluacion por bloque", "Ajuste de intensidad"],
      notes: ["Combinable con presoterapia y masaje técnico."],
    },
  },
  {
    id: "electroporacion-dermoactiva",
    name: "Mesoterapia virtual (electroporación)",
    categoryId: "estetica-avanzada",
    categoryName: esCategoryNameById["estetica-avanzada"],
    shortDescription: "Vehiculizacion de activos sin aguja para piel facial y corporal localizada.",
    objective: "Potenciar penetracion de activos con sesión confortable.",
    duration: "40-50 min",
    frequency: "Cada 2-4 semanas",
    candidate: "Piel que busca impulso de hidratacion y elasticidad.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética avanzada",
      title: "Mesoterapia virtual (electroporación)",
      intro: "Permeabilizacion transitoria para aprovechar activos adaptados a objetivo.",
      consistsOf: ["Diagnóstico objetivo", "Aplicacion por zonas", "Sellado final"],
      objectives: ["Hidratacion profunda", "Mejorar elasticidad", "Regular aspecto"],
      zones: ["Rostro", "Cuello", "Escote"],
      timings: ["Sesión de 40-50 min"],
      recommendations: ["Rutina suave post sesión", "Evitar calor intenso 24h"],
      followUp: ["Ajuste de activos", "Integracion en plan global"],
      notes: ["Alternativa de baja agresion para piel reactiva."],
    },
  },
  {
    id: "ritual-cabina-luminosidad",
    name: "Tratamiento flash luminosidad",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    featured: true,
    shortDescription: "Sesión combinada de limpieza, masaje y activos de brillo.",
    objective: "Aportar efecto buena cara y confort inmediato.",
    duration: "60 min",
    frequency: "Mensual",
    candidate: "Piel cansada o previa a evento.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética normal",
      title: "Tratamiento flash luminosidad",
      intro: "Tratamiento de cabina de impacto visual rapido con base técnica.",
      consistsOf: ["Preparación cutanea", "Masaje especifico", "Fase de activos"],
      objectives: ["Aportar luz", "Relajar facciones", "Mejorar textura"],
      zones: ["Rostro", "Cuello", "Escote"],
      timings: ["Sesión de 60 min"],
      recommendations: ["Hidratacion", "Fotoproteccion"],
      followUp: ["Mantenimiento mensual"],
      notes: ["Compatible con plan facial avanzado."],
    },
  },
  {
    id: "espalda-purificante-pro",
    name: "Limpieza de espalda",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    shortDescription: "Higiene técnica de espalda para piel congestionada o con marcas.",
    objective: "Limpiar, calmar y mejorar textura de zona dorsal.",
    duration: "45-55 min",
    frequency: "Cada 3-5 semanas",
    candidate: "Congestion dorsal, poro obstruido o mantenimiento corporal.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética normal",
      title: "Limpieza de espalda",
      intro: "Protocolo de cabina para higiene y confort de espalda.",
      consistsOf: ["Limpieza por capas", "Extracción selectiva", "Cierre calmante"],
      objectives: ["Reducir congestion", "Mejorar textura", "Disminuir marcas"],
      zones: ["Espalda"],
      timings: ["Sesión de 45-55 min"],
      recommendations: ["No manipular 24h", "Usar higiene suave"],
      followUp: ["Control de evolucion", "Ajuste de periodicidad"],
      notes: ["Puede combinarse con LED segun tolerancia."],
    },
  },
  {
    id: "protocolo-gluteo-firme",
    name: "Reafirmante de gluteos",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    shortDescription: "Cabina corporal enfocada en tono visual de gluteo y parte alta de muslo.",
    objective: "Mejorar aspecto de firmeza con trabajo por fases.",
    duration: "50-60 min",
    frequency: "Semanal o quincenal",
    candidate: "Personas que buscan plan localizado en gluteo.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética normal",
      title: "Reafirmante de gluteos",
      intro: "Sesión técnica de cabina con combinación manual y aparatologia de apoyo.",
      consistsOf: ["Valoracion de zona", "Fase activa", "Cierre drenante"],
      objectives: ["Mejorar tono", "Aportar continuidad", "Sostener contorno"],
      zones: ["Gluteos", "Muslo posterior"],
      timings: ["Sesión de 50-60 min"],
      recommendations: ["Hidratacion", "Trabajo muscular complementario"],
      followUp: ["Reevaluacion por bloque", "Ajuste de fases"],
      notes: ["Resultado progresivo, no inmediato."],
    },
  },
  {
    id: "fotorejuvenecimiento-ipl",
    name: "Fotorejuvenecimiento IPL",
    categoryId: "estetica-avanzada",
    categoryName: esCategoryNameById["estetica-avanzada"],
    featured: true,
    shortDescription: "Luz pulsada para trabajar tono irregular y signos de fotoenvejecimiento.",
    objective: "Mejorar homogeneidad de tono y calidad visual global.",
    duration: "35-50 min",
    frequency: "Cada 4-6 semanas",
    candidate: "Piel con manchas difusas o textura fotoenvejecida.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética avanzada",
      title: "Fotorejuvenecimiento IPL",
      intro: "Tratamiento de luz pulsada con seleccion de parámetros segun indicacion.",
      consistsOf: ["Lectura de piel", "Aplicacion por zonas", "Fase calmante"],
      objectives: ["Regular tono", "Mejorar textura", "Reforzar luminosidad"],
      zones: ["Rostro", "Cuello", "Escote", "Manos"],
      timings: ["Sesión de 35-50 min", "Recuperación ligera 24-48h"],
      recommendations: ["Fotoproteccion estricta", "Evitar calor 48h"],
      followUp: ["Control por bloque", "Ajuste de intervalo"],
      notes: ["Idoneidad sujeta a valoracion previa."],
    },
  },
  {
    id: "radiofrecuencia-facial-pro",
    name: "Radiofrecuencia facial",
    categoryId: "estetica-avanzada",
    categoryName: esCategoryNameById["estetica-avanzada"],
    featured: true,
    shortDescription: "Estimulo termico controlado para firmeza y contorno facial.",
    objective: "Aportar tension progresiva sin procedimiento invasivo.",
    duration: "45-60 min",
    frequency: "Cada 2-3 semanas",
    candidate: "Flacidez leve-moderada y perdida de tono.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética avanzada",
      title: "Radiofrecuencia facial",
      intro: "Aplicacion termica por cuadrantes con registro de respuesta por sesión.",
      consistsOf: ["Analisis inicial", "Aplicacion controlada", "Cierre calmante"],
      objectives: ["Mejorar firmeza", "Definir ovalo", "Mantener resultados"],
      zones: ["Ovalo", "Mejillas", "Cuello"],
      timings: ["Sesión de 45-60 min", "Sin baja social"],
      recommendations: ["Hidratacion", "Fotoproteccion"],
      followUp: ["Revisión por bloque", "Plan de mantenimiento"],
      notes: ["Se integra bien con regenerativos."],
    },
  },
  {
    id: "ultrasonido-focalizado-estetico",
    name: "HIFU facial",
    categoryId: "estetica-avanzada",
    categoryName: esCategoryNameById["estetica-avanzada"],
    shortDescription: "Estimulo profundo de soporte para mejora de tension en zonas estrategicas.",
    objective: "Reforzar estructura de soporte en plan de firmeza facial.",
    duration: "60-75 min",
    frequency: "Cada 3-6 meses segun caso",
    candidate: "Piel con descolgamiento inicial o moderado.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética avanzada",
      title: "HIFU facial",
      intro: "Sesión de alta precisión para estimular tejido de soporte.",
      consistsOf: ["Marcaje de zonas", "Aplicacion por capas", "Control de confort"],
      objectives: ["Mejorar soporte", "Definir contorno", "Sostener firmeza"],
      zones: ["Ovalo", "Papada", "Cuello"],
      timings: ["Sesión de 60-75 min", "Sin baja social"],
      recommendations: ["Hidratacion", "Fotoproteccion diaria"],
      followUp: ["Reevaluacion a 8-12 semanas"],
      notes: ["Indicado solo tras valoracion presencial."],
    },
  },
  {
    id: "bioestimulacion-led",
    name: "Terapia LED regeneradora",
    categoryId: "estetica-regenerativa",
    categoryName: esCategoryNameById["estetica-regenerativa"],
    featured: true,
    shortDescription: "Luz cosmética para recuperar confort cutaneo y acelerar reparacion.",
    objective: "Calmar, reforzar barrera y mejorar respuesta de piel.",
    duration: "35-45 min",
    frequency: "Cada 7-14 dias",
    candidate: "Piel sensibilizada o en fase de recuperación.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética regenerativa",
      title: "Terapia LED regeneradora",
      intro: "Protocolo de luz y activos de soporte regenerativo.",
      consistsOf: ["Lectura de barrera", "Aplicacion LED", "Sellado hidratante"],
      objectives: ["Calmar", "Recuperar", "Reforzar tolerancia"],
      zones: ["Rostro", "Cuello", "Escote"],
      timings: ["Sesión de 35-45 min", "Sin recuperación"],
      recommendations: ["Rutina suave", "Fotoproteccion"],
      followUp: ["Control de confort", "Ajuste de frecuencia"],
      notes: ["Ideal tras fases intensivas."],
    },
  },
  {
    id: "protocolo-barrera-cutanea",
    name: "Tratamiento piel sensible (barrera)",
    categoryId: "estetica-regenerativa",
    categoryName: esCategoryNameById["estetica-regenerativa"],
    featured: true,
    shortDescription: "Recuperación de piel reactiva para bajar rojez y mejorar tolerancia.",
    objective: "Restablecer confort y preparar la piel para fases posteriores.",
    duration: "45-55 min",
    frequency: "Cada 2-3 semanas",
    candidate: "Piel sensible, irritada o sobretratada.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética regenerativa",
      title: "Tratamiento piel sensible (barrera)",
      intro: "Plan conservador de recuperación cutanea por bloques.",
      consistsOf: ["Diagnóstico de sensibilidad", "Activos calmantes", "Plan domiciliario"],
      objectives: ["Reducir rojez", "Mejorar tolerancia", "Reforzar barrera"],
      zones: ["Rostro", "Cuello"],
      timings: ["Sesión de 45-55 min"],
      recommendations: ["No sobreexfoliar", "Rutina estable", "Fotoproteccion"],
      followUp: ["Control en cada visita", "Escalado progresivo"],
      notes: ["Especialmente util tras sensibilizacion."],
    },
  },
  {
    id: "recuperacion-post-laser-calmante",
    name: "Calmante post-laser",
    categoryId: "estetica-regenerativa",
    categoryName: esCategoryNameById["estetica-regenerativa"],
    shortDescription: "Soporte entre sesiones laser para recuperar confort y continuidad.",
    objective: "Disminuir sensibilidad y optimizar tolerancia de la siguiente sesión.",
    duration: "30-40 min",
    frequency: "Cada 1-2 semanas segun respuesta",
    candidate: "Clientas en pauta laser con piel reactiva.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética regenerativa",
      title: "Calmante post-laser",
      intro: "Sesión de apoyo para estabilizar piel tras fases técnicas.",
      consistsOf: ["Revisión post sesión", "Fase calmante", "Sellado de barrera"],
      objectives: ["Disminuir irritacion", "Recuperar confort", "Mejorar tolerancia"],
      zones: ["Zona tratada"],
      timings: ["Sesión de 30-40 min"],
      recommendations: ["Evitar calor", "Rutina reparadora"],
      followUp: ["Control previo a nueva sesión"],
      notes: ["Se integra en planes avanzados combinados."],
    },
  },
  {
    id: "diagnostico-dermoestetico-digital",
    name: "Diagnóstico facial digital",
    categoryId: "estetica-regenerativa",
    categoryName: esCategoryNameById["estetica-regenerativa"],
    featured: true,
    shortDescription: "Lectura inicial con fotografia estandarizada para planificar por objetivos.",
    objective: "Tomar decision de tratamiento con base real y medible.",
    duration: "30 min",
    frequency: "Al inicio y cada bloque",
    candidate: "Primera visita o revisiones de plan.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética regenerativa",
      title: "Diagnóstico facial digital",
      intro: "Sesión de diagnóstico para construir plan, prioridades y tiempos orientativos.",
      consistsOf: ["Historia breve", "Lectura de estado", "Propuesta de fases"],
      objectives: ["Priorizar necesidades", "Definir plan", "Evitar sobretratamiento"],
      zones: ["Facial y/o corporal segun caso"],
      timings: ["Sesión de 30 min"],
      recommendations: ["Seguir pauta indicada", "Traer referencias de rutina si existen"],
      followUp: ["Comparativas por bloque"],
      notes: ["Base para el resto de protocolos."],
    },
  },
  {
    id: "plan-cosmetica-domiciliaria",
    name: "Rutina cosmética personalizada",
    categoryId: "estetica-regenerativa",
    categoryName: esCategoryNameById["estetica-regenerativa"],
    shortDescription: "Ajuste de rutina en casa para sostener resultados entre sesiones.",
    objective: "Mejorar adherencia y evitar perdida de progreso.",
    duration: "20-30 min",
    frequency: "Mensual o bimensual",
    candidate: "Clientas en tratamiento que necesitan orden de rutina.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética regenerativa",
      title: "Rutina cosmética personalizada",
      intro: "Asesoria practica para ordenar rutina y reducir errores frecuentes.",
      consistsOf: ["Revisión de productos actuales", "Diseno de rutina", "Plan de uso"],
      objectives: ["Sostener resultados", "Reducir irritacion", "Mejorar constancia"],
      zones: ["Rostro y cuerpo segun pauta"],
      timings: ["Sesión de 20-30 min"],
      recommendations: ["Mantener orden de aplicacion", "Registrar tolerancia"],
      followUp: ["Ajuste segun evolucion"],
      notes: ["No sustituye diagnóstico médico cuando procede."],
    },
  },
  {
    id: "seguimiento-mensual-pro",
    name: "Revisión mensual de tratamiento",
    categoryId: "estetica-regenerativa",
    categoryName: esCategoryNameById["estetica-regenerativa"],
    shortDescription: "Control de avances, sensaciones y ajustes de frecuencia.",
    objective: "Mantener continuidad y evitar abandonos de plan.",
    duration: "20 min",
    frequency: "Mensual",
    candidate: "Planes medios o largos que requieren coordinacion.",
    ctaLabel: "Saber más",
    modal: {
      label: "Estética regenerativa",
      title: "Revisión mensual de tratamiento",
      intro: "Revisión corta orientada a decision practica de continuidad.",
      consistsOf: ["Revisión de bloque", "Ajuste de agenda", "Plan siguiente mes"],
      objectives: ["Ordenar continuidad", "Corregir desajustes", "Sostener adherencia"],
      zones: ["Segun tratamiento activo"],
      timings: ["Sesión de 20 min"],
      recommendations: ["Registrar cambios", "Mantener comunicacion activa"],
      followUp: ["Revisión cada bloque mensual"],
      notes: ["Especialmente util en planes combinados."],
    },
  },
];

const esCatalog: TreatmentsCatalogContent = {
  closeModalLabel: "Cerrar",
  heroLabel: "Catálogo de tratamientos",
  heroTitle: "Tres líneas maestras para decidir con claridad: normal, avanzada y regenerativa.",
  heroDescription:
    "Toda la oferta se organiza en tres macrocategorías para explorar mejor y entender en qué fase encaja cada tratamiento.",
  heroHighlights: [
    "Diagnóstico previo obligatorio",
    "Planes combinables por fases",
    "Seguimiento profesional continuo",
  ],
  sectionLabel: "Tratamientos",
  sectionTitle: "Exploración por categorías con foco en utilidad real.",
  sectionDescription:
    "Cada ficha resume objetivo, duración, frecuencia y perfil de caso, con detalle completo en modal para comparar mejor.",
  filterLabel: "Filtrar por categoría",
  detailLabel: "Saber más",
  featuredLabel: "Tratamientos recomendados en esta categoría",
  secondaryLabel: "Más opciones de la misma categoría",
  secondaryDescription: "Abre cualquier tratamiento para revisar protocolo, zonas, tiempos y seguimiento.",
  explorer: {
    guide: "Selecciona una categoría, compara tratamientos y abre detalle en un clic.",
    activeCategoryLabel: "Categoría activa",
    availableTreatmentsLabel: "tratamientos disponibles",
    nextCategoryLabel: "Siguiente categoría",
    stepLabel: "Paso",
    featuredBadge: "Destacado",
    showMoreLabel: "Ver todos los tratamientos",
    showLessLabel: "Ver menos",
    emptyStateLabel: "No hay tratamientos en esta categoría por ahora.",
  },
  labels: {
    objective: "Objetivo",
    duration: "Duración",
    frequency: "Frecuencia",
    candidate: "Caso habitual",
    category: "Categoría",
    consistsOf: "En qué consiste",
    objectives: "Objetivos",
    zonesAndTimings: "Zonas y tiempos",
    recommendationsAndFollowUp: "Recomendaciones y seguimiento",
    notes: "Matices importantes",
    candidateProfile: "Perfil habitual",
  },
  categories: esCategories,
  treatments: esTreatments,
  seoIntroTitle: "Cómo estructuramos la indicación",
  seoIntroDescription:
    "No trabajamos con paquetes cerrados sin contexto. Definimos prioridad, medimos respuesta y ajustamos cada fase según evolución real.",
};

const caCatalog: TreatmentsCatalogContent = {
  ...esCatalog,
  closeModalLabel: "Tancar",
  heroLabel: "Catàleg de tractaments",
  heroTitle: "Tres línies mestres per decidir amb claredat: normal, avançada i regenerativa.",
  heroDescription:
    "Tota l'oferta s'organitza en tres macrocategories per explorar millor i entendre en quina fase encaixa cada tractament.",
  sectionLabel: "Tractaments",
  sectionTitle: "Exploració per categories amb focus en utilitat real.",
  sectionDescription:
    "Cada fitxa resumeix objectiu, durada, freqüència i perfil de cas, amb detall complet en modal.",
  filterLabel: "Filtrar per categoria",
  detailLabel: "Saber-ne més",
  featuredLabel: "Tractaments recomanats en aquesta categoria",
  secondaryLabel: "Més opcions de la mateixa categoria",
  secondaryDescription: "Obre qualsevol tractament per revisar protocol, zones, temps i seguiment.",
  explorer: {
    guide: "Selecciona una categoria, compara tractaments i obre el detall amb un clic.",
    activeCategoryLabel: "Categoria activa",
    availableTreatmentsLabel: "tractaments disponibles",
    nextCategoryLabel: "Següent categoria",
    stepLabel: "Pas",
    featuredBadge: "Destacat",
    showMoreLabel: "Veure tots els tractaments",
    showLessLabel: "Veure menys",
    emptyStateLabel: "No hi ha tractaments en aquesta categoria ara mateix.",
  },
  labels: {
    objective: "Objectiu",
    duration: "Durada",
    frequency: "Freqüència",
    candidate: "Cas habitual",
    category: "Categoria",
    consistsOf: "En què consisteix",
    objectives: "Objectius",
    zonesAndTimings: "Zones i temps",
    recommendationsAndFollowUp: "Recomanacions i seguiment",
    notes: "Matisos importants",
    candidateProfile: "Perfil habitual",
  },
  categories: [
    {
      id: "estetica-normal",
      name: "Estètica normal",
      description: "Bloc base amb facial, corporal i cabina per manteniment i continuïtat tècnica.",
    },
    {
      id: "estetica-avanzada",
      name: "Estètica avançada",
      description: "Tecnologia i protocols de precisió per objectius que necessiten més intensitat.",
    },
    {
      id: "estetica-regenerativa",
      name: "Estètica regenerativa",
      description: "Recuperació de barrera, qualitat cutània i tolerància en fases conservadores.",
    },
  ],
  treatments: esCatalog.treatments.map((item) => ({
    ...item,
    ctaLabel: "Saber-ne més",
  })),
};

const frCatalog: TreatmentsCatalogContent = {
  ...esCatalog,
  closeModalLabel: "Fermer",
  heroLabel: "Catalogue de traitements",
  heroTitle: "Trois lignes claires pour choisir: normal, avancée et régénérative.",
  heroDescription:
    "Toute l'offre est organisée en trois macro-catégories pour comprendre rapidement où se situe chaque traitement.",
  sectionLabel: "Traitements",
  sectionTitle: "Exploration par catégories avec un vrai cadre de décision.",
  sectionDescription:
    "Chaque fiche résume objectif, durée, fréquence et profil de cas, puis ouvre le détail complet en modal.",
  filterLabel: "Filtrer par catégorie",
  detailLabel: "En savoir plus",
  featuredLabel: "Traitements recommandés dans cette catégorie",
  secondaryLabel: "Autres options de la même catégorie",
  secondaryDescription: "Ouvrez un traitement pour voir protocole, zones, durée et suivi.",
  explorer: {
    guide: "Choisissez une catégorie, comparez les traitements et ouvrez le détail en un clic.",
    activeCategoryLabel: "Catégorie active",
    availableTreatmentsLabel: "traitements disponibles",
    nextCategoryLabel: "Catégorie suivante",
    stepLabel: "Étape",
    featuredBadge: "Mis en avant",
    showMoreLabel: "Voir tous les traitements",
    showLessLabel: "Voir moins",
    emptyStateLabel: "Aucun traitement disponible dans cette catégorie pour le moment.",
  },
  labels: {
    objective: "Objectif",
    duration: "Durée",
    frequency: "Fréquence",
    candidate: "Cas habituel",
    category: "Catégorie",
    consistsOf: "En quoi cela consiste",
    objectives: "Objectifs",
    zonesAndTimings: "Zones et temps",
    recommendationsAndFollowUp: "Recommandations et suivi",
    notes: "Points importants",
    candidateProfile: "Profil habituel",
  },
  categories: [
    {
      id: "estetica-normal",
      name: "Esthétique normale",
      description: "Bloc de base avec visage, corps et cabine pour entretien et régularité.",
    },
    {
      id: "estetica-avanzada",
      name: "Esthétique avancée",
      description: "Technologie et protocoles de précision pour objectifs plus exigeants.",
    },
    {
      id: "estetica-regenerativa",
      name: "Esthétique régénérative",
      description: "Récupération de la barrière cutanée et soutien des peaux sensibles.",
    },
  ],
  treatments: esCatalog.treatments.map((item) => ({
    ...item,
    ctaLabel: "En savoir plus",
  })),
};

function buildLocalizedGenericTreatments(locale: "en" | "uk" | "ru"): TreatmentItem[] {
  const copyByLocale = {
    en: {
      shortDescription: "Professional protocol tailored after in-person diagnosis.",
      objective: "Objective defined according to diagnosis and priorities.",
      duration: "Defined in consultation",
      frequency: "Defined by treatment phase",
      candidate: "Suitability confirmed during first visit.",
      ctaLabel: "Learn more",
      modal: {
        intro: "Protocol adapted to your case after professional assessment.",
        consistsOf: ["Initial diagnosis", "Phase-based protocol", "Technical execution"],
        objectives: ["Main objective", "Safety and tolerance", "Result continuity"],
        zones: ["Defined according to indication"],
        timings: ["Timing confirmed in consultation"],
        recommendations: ["Follow specialist indications"],
        followUp: ["Periodic review and plan adjustment"],
        notes: ["Final indication is always confirmed in centre."],
      },
    },
    uk: {
      shortDescription: "Професійний протокол, адаптований після очної діагностики.",
      objective: "Ціль визначається за результатами діагностики та пріоритетів.",
      duration: "Визначається на консультації",
      frequency: "Визначається за фазою плану",
      candidate: "Доцільність підтверджується під час першого візиту.",
      ctaLabel: "Детальніше",
      modal: {
        intro: "Протокол адаптується під ваш кейс після професійної оцінки.",
        consistsOf: ["Початкова діагностика", "План за фазами", "Технічне виконання"],
        objectives: ["Головна ціль", "Безпека і переносимість", "Безперервність результату"],
        zones: ["Визначаються за показаннями"],
        timings: ["Тривалість підтверджується на консультації"],
        recommendations: ["Дотримуйтеся рекомендацій спеціаліста"],
        followUp: ["Регулярний контроль і корекція плану"],
        notes: ["Фінальні показання підтверджуються лише в центрі."],
      },
    },
    ru: {
      shortDescription: "Профессиональный протокол, адаптированный после очной диагностики.",
      objective: "Цель определяется по результатам диагностики и приоритетам.",
      duration: "Определяется на консультации",
      frequency: "Определяется фазой плана",
      candidate: "Подходящий профиль подтверждается на первом визите.",
      ctaLabel: "Подробнее",
      modal: {
        intro: "Протокол адаптируется под ваш кейс после профессиональной оценки.",
        consistsOf: ["Первичная диагностика", "План по фазам", "Техническое выполнение"],
        objectives: ["Основная цель", "Безопасность и переносимость", "Непрерывность результата"],
        zones: ["Определяются по показаниям"],
        timings: ["Длительность подтверждается на консультации"],
        recommendations: ["Следуйте рекомендациям специалиста"],
        followUp: ["Регулярный контроль и корректировка плана"],
        notes: ["Финальные показания подтверждаются только в центре."],
      },
    },
  } as const;

  const localizedNameById = {
    en: {
      "higiene-facial-experta": "Advanced deep facial cleansing",
      "peeling-renovador-suave": "Gentle chemical peel",
      "cuidado-manos-unas-pro": "Complete manicure",
      "hidrodermoabrasion-premium": "Hydrafacial (hydrodermabrasion)",
      "microneedling-cosmetico": "Cosmetic microneedling",
      "protocolo-antimanchas-facial": "Facial dark-spot protocol",
      "presoterapia-estetica": "Aesthetic pressotherapy",
      "maderoterapia-corporal": "Body maderotherapy",
      "ritual-cuerpo-detox": "Draining body treatment",
      "depilacion-laser-diodo": "Diode laser hair removal",
      "radiofrecuencia-corporal-multipolar": "Body radiofrequency",
      "electroporacion-dermoactiva": "Virtual mesotherapy (electroporation)",
      "ritual-cabina-luminosidad": "Flash glow treatment",
      "espalda-purificante-pro": "Back cleansing",
      "protocolo-gluteo-firme": "Glute-firming protocol",
      "fotorejuvenecimiento-ipl": "IPL photorejuvenation",
      "radiofrecuencia-facial-pro": "Facial radiofrequency",
      "ultrasonido-focalizado-estetico": "Facial HIFU",
      "bioestimulacion-led": "Regenerative LED therapy",
      "protocolo-barrera-cutanea": "Sensitive skin barrier treatment",
      "recuperacion-post-laser-calmante": "Post-laser soothing protocol",
      "diagnostico-dermoestetico-digital": "Digital facial diagnosis",
      "plan-cosmetica-domiciliaria": "Personalised home skincare routine",
      "seguimiento-mensual-pro": "Monthly treatment review",
    },
    uk: {
      "higiene-facial-experta": "Глибоке очищення обличчя",
      "peeling-renovador-suave": "М'який хімічний пілінг",
      "cuidado-manos-unas-pro": "Повний манікюр",
      "hidrodermoabrasion-premium": "Hydrafacial (гідродермабразія)",
      "microneedling-cosmetico": "Косметичний мікронідлінг",
      "protocolo-antimanchas-facial": "Протокол проти пігментації обличчя",
      "presoterapia-estetica": "Естетична пресотерапія",
      "maderoterapia-corporal": "Мадеротерапія тіла",
      "ritual-cuerpo-detox": "Дренажна процедура для тіла",
      "depilacion-laser-diodo": "Діодна лазерна епіляція",
      "radiofrecuencia-corporal-multipolar": "Радіочастотна терапія тіла",
      "electroporacion-dermoactiva": "Віртуальна мезотерапія (електропорація)",
      "ritual-cabina-luminosidad": "Експрес-процедура сяйва",
      "espalda-purificante-pro": "Очищення спини",
      "protocolo-gluteo-firme": "Протокол підтяжки сідниць",
      "fotorejuvenecimiento-ipl": "IPL-фотореювенація",
      "radiofrecuencia-facial-pro": "Радіочастотна терапія обличчя",
      "ultrasonido-focalizado-estetico": "HIFU для обличчя",
      "bioestimulacion-led": "Регенеративна LED-терапія",
      "protocolo-barrera-cutanea": "Протокол для чутливої шкіри (бар'єр)",
      "recuperacion-post-laser-calmante": "Заспокійливий постлазерний протокол",
      "diagnostico-dermoestetico-digital": "Цифрова діагностика обличчя",
      "plan-cosmetica-domiciliaria": "Персоналізований домашній догляд",
      "seguimiento-mensual-pro": "Щомісячний контроль плану",
    },
    ru: {
      "higiene-facial-experta": "Глубокое очищение лица",
      "peeling-renovador-suave": "Мягкий химический пилинг",
      "cuidado-manos-unas-pro": "Полный маникюр",
      "hidrodermoabrasion-premium": "Hydrafacial (гидродермабразия)",
      "microneedling-cosmetico": "Косметический микронидлинг",
      "protocolo-antimanchas-facial": "Протокол против пигментации лица",
      "presoterapia-estetica": "Эстетическая прессотерапия",
      "maderoterapia-corporal": "Мадеротерапия тела",
      "ritual-cuerpo-detox": "Дренирующая процедура для тела",
      "depilacion-laser-diodo": "Диодная лазерная эпиляция",
      "radiofrecuencia-corporal-multipolar": "Радиочастотная терапия тела",
      "electroporacion-dermoactiva": "Виртуальная мезотерапия (электропорация)",
      "ritual-cabina-luminosidad": "Экспресс-процедура сияния",
      "espalda-purificante-pro": "Очищение спины",
      "protocolo-gluteo-firme": "Протокол подтяжки ягодиц",
      "fotorejuvenecimiento-ipl": "IPL-фотореювенация",
      "radiofrecuencia-facial-pro": "Радиочастотная терапия лица",
      "ultrasonido-focalizado-estetico": "HIFU для лица",
      "bioestimulacion-led": "Регенеративная LED-терапия",
      "protocolo-barrera-cutanea": "Протокол для чувствительной кожи (барьер)",
      "recuperacion-post-laser-calmante": "Успокаивающий постлазерный протокол",
      "diagnostico-dermoestetico-digital": "Цифровая диагностика лица",
      "plan-cosmetica-domiciliaria": "Персонализированный домашний уход",
      "seguimiento-mensual-pro": "Ежемесячный контроль плана",
    },
  } as const;

  const categoryNameById = {
    en: {
      "estetica-normal": "Normal aesthetics",
      "estetica-avanzada": "Advanced aesthetics",
      "estetica-regenerativa": "Regenerative aesthetics",
    },
    uk: {
      "estetica-normal": "Базова естетика",
      "estetica-avanzada": "Розширена естетика",
      "estetica-regenerativa": "Регенеративна естетика",
    },
    ru: {
      "estetica-normal": "Базовая эстетика",
      "estetica-avanzada": "Продвинутая эстетика",
      "estetica-regenerativa": "Регенеративная эстетика",
    },
  } as const;

  const copy = copyByLocale[locale];
  const names = localizedNameById[locale];
  const categories = categoryNameById[locale];

  return esCatalog.treatments.map((item) => ({
    ...item,
    name: names[item.id as keyof typeof names] ?? item.name,
    categoryName: categories[item.categoryId],
    shortDescription: copy.shortDescription,
    objective: copy.objective,
    duration: copy.duration,
    frequency: copy.frequency,
    candidate: copy.candidate,
    ctaLabel: copy.ctaLabel,
    modal: {
      ...item.modal,
      label: categories[item.categoryId],
      title: names[item.id as keyof typeof names] ?? item.modal.title,
      intro: copy.modal.intro,
      consistsOf: [...copy.modal.consistsOf],
      objectives: [...copy.modal.objectives],
      zones: [...copy.modal.zones],
      timings: [...copy.modal.timings],
      recommendations: [...copy.modal.recommendations],
      followUp: [...copy.modal.followUp],
      notes: [...copy.modal.notes],
    },
  }));
}

const enCatalog: TreatmentsCatalogContent = {
  ...esCatalog,
  closeModalLabel: "Close",
  heroLabel: "Treatments catalogue",
  heroTitle: "Three clear lines to decide with confidence: normal, advanced and regenerative.",
  heroDescription:
    "The full offer is structured into three macro-categories to make exploration easier and clarify where each treatment fits.",
  heroHighlights: ["Category comparison", "Full treatment profiles", "Indication-based guidance"],
  sectionLabel: "Treatments",
  sectionTitle: "Category-based exploration focused on practical value.",
  sectionDescription:
    "Each profile summarises objective, duration, frequency and typical case, with complete details in a modal.",
  filterLabel: "Filter by category",
  detailLabel: "Learn more",
  featuredLabel: "Recommended treatments in this category",
  secondaryLabel: "More options in the same category",
  secondaryDescription: "Open any treatment to review protocol, areas, timing and follow-up.",
  explorer: {
    guide: "Choose a category, compare treatments and open full detail in one click.",
    activeCategoryLabel: "Active category",
    availableTreatmentsLabel: "available treatments",
    nextCategoryLabel: "Next category",
    stepLabel: "Step",
    featuredBadge: "Featured",
    showMoreLabel: "View all treatments",
    showLessLabel: "View less",
    emptyStateLabel: "No treatments are currently available in this category.",
  },
  labels: {
    objective: "Objective",
    duration: "Duration",
    frequency: "Frequency",
    candidate: "Typical case",
    category: "Category",
    consistsOf: "What it includes",
    objectives: "Objectives",
    zonesAndTimings: "Areas and timing",
    recommendationsAndFollowUp: "Recommendations and follow-up",
    notes: "Key notes",
    candidateProfile: "Typical profile",
  },
  categories: [
    {
      id: "estetica-normal",
      name: "Normal aesthetics",
      description:
        "Core block with facial, body and in-cabin protocols for maintenance, visible improvement and continuity.",
    },
    {
      id: "estetica-avanzada",
      name: "Advanced aesthetics",
      description:
        "Technology and precision protocols for objectives requiring higher intensity and traceability.",
    },
    {
      id: "estetica-regenerativa",
      name: "Regenerative aesthetics",
      description:
        "Barrier recovery, sensitive skin support and continuity of outcomes with a conservative approach.",
    },
  ],
  treatments: buildLocalizedGenericTreatments("en"),
  seoIntroTitle: "How we structure indications",
  seoIntroDescription:
    "We do not use closed packages without context. We prioritise, measure response and adjust every phase based on real evolution.",
};

const ukCatalog: TreatmentsCatalogContent = {
  ...enCatalog,
  closeModalLabel: "Закрити",
  heroLabel: "Каталог процедур",
  heroTitle: "Три зрозумілі лінії для рішення: базова, розширена та регенеративна естетика.",
  heroDescription:
    "Уся пропозиція структурована в три макрокатегорії, щоб легше порівнювати та розуміти логіку призначення.",
  heroHighlights: ["Порівняння за категоріями", "Повні картки процедур", "Рекомендація за показаннями"],
  sectionLabel: "Процедури",
  sectionTitle: "Перегляд за категоріями з практичним фокусом.",
  sectionDescription:
    "Кожна картка містить ціль, тривалість, частоту і типовий профіль кейсу, з повними деталями у модальному вікні.",
  filterLabel: "Фільтр за категорією",
  detailLabel: "Детальніше",
  featuredLabel: "Рекомендовані процедури в цій категорії",
  secondaryLabel: "Більше варіантів у цій категорії",
  secondaryDescription: "Відкрийте процедуру, щоб переглянути протокол, зони, час і супровід.",
  explorer: {
    guide: "Оберіть категорію, порівняйте процедури та відкрийте деталі в один клік.",
    activeCategoryLabel: "Активна категорія",
    availableTreatmentsLabel: "доступних процедур",
    nextCategoryLabel: "Наступна категорія",
    stepLabel: "Крок",
    featuredBadge: "Рекомендовано",
    showMoreLabel: "Показати всі процедури",
    showLessLabel: "Показати менше",
    emptyStateLabel: "Зараз у цій категорії немає доступних процедур.",
  },
  labels: {
    objective: "Ціль",
    duration: "Тривалість",
    frequency: "Частота",
    candidate: "Типовий кейс",
    category: "Категорія",
    consistsOf: "Що включає",
    objectives: "Цілі",
    zonesAndTimings: "Зони та час",
    recommendationsAndFollowUp: "Рекомендації та супровід",
    notes: "Ключові примітки",
    candidateProfile: "Типовий профіль",
  },
  categories: [
    {
      id: "estetica-normal",
      name: "Базова естетика",
      description: "Базовий блок для підтримки, видимого покращення і стабільної динаміки.",
    },
    {
      id: "estetica-avanzada",
      name: "Розширена естетика",
      description: "Технологічні протоколи для цілей, що потребують вищої інтенсивності.",
    },
    {
      id: "estetica-regenerativa",
      name: "Регенеративна естетика",
      description: "Відновлення бар'єру шкіри, підтримка чутливої шкіри і контрольована безперервність.",
    },
  ],
  treatments: buildLocalizedGenericTreatments("uk"),
  seoIntroTitle: "Як ми формуємо призначення",
  seoIntroDescription:
    "Ми не продаємо універсальні пакети. Пріоритизуємо задачі, оцінюємо реакцію і коригуємо кожну фазу за реальною динамікою.",
};

const ruCatalog: TreatmentsCatalogContent = {
  ...enCatalog,
  closeModalLabel: "Закрыть",
  heroLabel: "Каталог процедур",
  heroTitle: "Три понятные линии для решения: базовая, продвинутая и регенеративная эстетика.",
  heroDescription:
    "Вся линейка структурирована в три макрокатегории, чтобы проще сравнивать и понимать логику назначения.",
  heroHighlights: ["Сравнение по категориям", "Полные карточки процедур", "Рекомендация по показаниям"],
  sectionLabel: "Процедуры",
  sectionTitle: "Просмотр по категориям с практическим фокусом.",
  sectionDescription:
    "Каждая карточка содержит цель, длительность, частоту и типовой профиль кейса, с полными деталями в модальном окне.",
  filterLabel: "Фильтр по категории",
  detailLabel: "Подробнее",
  featuredLabel: "Рекомендованные процедуры в этой категории",
  secondaryLabel: "Больше вариантов в этой категории",
  secondaryDescription: "Откройте любую процедуру, чтобы посмотреть протокол, зоны, время и сопровождение.",
  explorer: {
    guide: "Выберите категорию, сравните процедуры и откройте детали в один клик.",
    activeCategoryLabel: "Активная категория",
    availableTreatmentsLabel: "доступных процедур",
    nextCategoryLabel: "Следующая категория",
    stepLabel: "Шаг",
    featuredBadge: "Рекомендовано",
    showMoreLabel: "Показать все процедуры",
    showLessLabel: "Показать меньше",
    emptyStateLabel: "В этой категории пока нет доступных процедур.",
  },
  labels: {
    objective: "Цель",
    duration: "Длительность",
    frequency: "Частота",
    candidate: "Типовой кейс",
    category: "Категория",
    consistsOf: "Что включает",
    objectives: "Цели",
    zonesAndTimings: "Зоны и время",
    recommendationsAndFollowUp: "Рекомендации и сопровождение",
    notes: "Ключевые примечания",
    candidateProfile: "Типовой профиль",
  },
  categories: [
    {
      id: "estetica-normal",
      name: "Базовая эстетика",
      description: "Базовый блок для поддержания результата, видимого улучшения и регулярности.",
    },
    {
      id: "estetica-avanzada",
      name: "Продвинутая эстетика",
      description: "Технологичные протоколы для задач с более высокой интенсивностью.",
    },
    {
      id: "estetica-regenerativa",
      name: "Регенеративная эстетика",
      description: "Восстановление кожного барьера, поддержка чувствительной кожи и контролируемая непрерывность.",
    },
  ],
  treatments: buildLocalizedGenericTreatments("ru"),
  seoIntroTitle: "Как мы формируем назначения",
  seoIntroDescription:
    "Мы не предлагаем шаблонные пакеты без контекста. Приоритизируем задачи, оцениваем ответ и корректируем каждую фазу по реальной динамике.",
};

const catalogByLocale: Record<Locale, TreatmentsCatalogContent> = {
  es: esCatalog,
  ca: caCatalog,
  fr: frCatalog,
  en: enCatalog,
  uk: ukCatalog,
  ru: ruCatalog,
};

export function getTreatmentsCatalog(locale: Locale): TreatmentsCatalogContent {
  return catalogByLocale[locale] ?? esCatalog;
}
