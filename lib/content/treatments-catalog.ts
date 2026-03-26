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
    name: "Estetica normal",
    description:
      "Bloque base con facial, corporal y cabina para mantenimiento, mejora visible y continuidad tecnica.",
  },
  {
    id: "estetica-avanzada",
    name: "Estetica avanzada",
    description:
      "Tecnologia y protocolos de precision para objetivos que requieren mas intensidad y trazabilidad.",
  },
  {
    id: "estetica-regenerativa",
    name: "Estetica regenerativa",
    description:
      "Recuperacion de barrera, soporte de piel sensible y continuidad de resultados con enfoque conservador.",
  },
];

const esCategoryNameById = Object.fromEntries(esCategories.map((category) => [category.id, category.name])) as Record<
  TreatmentCategoryId,
  string
>;

const esTreatments: TreatmentItem[] = [
  {
    id: "higiene-facial-experta",
    name: "Higiene facial experta",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    featured: true,
    shortDescription: "Limpieza profunda por capas para recuperar equilibrio y luminosidad.",
    objective: "Desobstruir poro y preparar la piel para fases activas.",
    duration: "50-60 min",
    frequency: "Cada 4-6 semanas",
    candidate: "Piel mixta, poro obstruido o mantenimiento regular.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica normal",
      title: "Higiene facial experta",
      intro: "Sesion tecnica de limpieza profunda con extraccion selectiva y cierre calmante.",
      consistsOf: ["Analisis de piel", "Limpieza por capas", "Extraccion selectiva", "Mascara final"],
      objectives: ["Reducir congestion", "Mejorar textura", "Recuperar luminosidad"],
      zones: ["Rostro", "Cuello"],
      timings: ["Sesion de 50-60 min", "Sin baja social"],
      recommendations: ["Fotoproteccion diaria", "Evitar manipulacion 24h"],
      followUp: ["Revision en siguiente cita", "Ajuste de rutina domiciliaria"],
      notes: ["Se combina bien con LED calmante."],
    },
  },
  {
    id: "peeling-renovador-suave",
    name: "Peeling renovador suave",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    shortDescription: "Renovacion cosmetica para piel opaca y textura irregular.",
    objective: "Refinar relieve y mejorar brillo sin recuperacion larga.",
    duration: "35-45 min",
    frequency: "Cada 3-4 semanas",
    candidate: "Piel apagada o con poro visible.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica normal",
      title: "Peeling renovador suave",
      intro: "Exfoliacion controlada adaptada a tolerancia individual.",
      consistsOf: ["Valoracion inicial", "Aplicacion por capas", "Neutralizacion", "Cierre hidratante"],
      objectives: ["Aportar luz", "Pulir textura", "Preparar fases activas"],
      zones: ["Rostro", "Cuello"],
      timings: ["Sesion de 35-45 min", "Descamacion leve 24-72h"],
      recommendations: ["Fotoproteccion estricta", "No usar exfoliantes 48h"],
      followUp: ["Control de tolerancia", "Ajuste de concentracion"],
      notes: ["No indicado en piel sensibilizada sin preparacion."],
    },
  },
  {
    id: "cuidado-manos-unas-pro",
    name: "Cuidado manos y unas pro",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    shortDescription: "Mantenimiento tecnico de manos y unas con enfoque de salud estetica.",
    objective: "Mejorar aspecto de manos y conservar una estructura sana de una.",
    duration: "40-50 min",
    frequency: "Cada 2-4 semanas",
    candidate: "Personas que necesitan mantenimiento continuo de manos.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica normal",
      title: "Cuidado manos y unas pro",
      intro: "Sesion de mantenimiento con preparacion de placa, cuticula y acabado protector.",
      consistsOf: ["Preparacion tecnica", "Cuidado de cuticula", "Acabado protector"],
      objectives: ["Ordenar estructura de una", "Mejorar imagen de manos"],
      zones: ["Manos", "Unas"],
      timings: ["Sesion de 40-50 min"],
      recommendations: ["Hidratacion diaria", "Evitar agresion mecanica intensa"],
      followUp: ["Ritmo de mantenimiento segun crecimiento"],
      notes: ["Compatible con refuerzo de tratamiento domiciliario."],
    },
  },
  {
    id: "hidrodermoabrasion-premium",
    name: "Hidrodermoabrasion premium",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    featured: true,
    shortDescription: "Limpieza tecnica con infusion de activos para brillo y confort inmediato.",
    objective: "Mejorar hidratacion y calidad visible de la piel.",
    duration: "45-55 min",
    frequency: "Cada 3-5 semanas",
    candidate: "Piel deshidratada o poro visible.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica normal",
      title: "Hidrodermoabrasion premium",
      intro: "Sistema de exfoliacion, extraccion e infusion de activos en una sola sesion.",
      consistsOf: ["Exfoliacion controlada", "Extraccion asistida", "Infusion de activos"],
      objectives: ["Aumentar hidratacion", "Mejorar textura", "Aportar luminosidad"],
      zones: ["Rostro", "Cuello", "Escote"],
      timings: ["Sesion de 45-55 min", "Sin recuperacion"],
      recommendations: ["Fotoproteccion", "Hidratacion continua"],
      followUp: ["Control de respuesta", "Combinacion con tratamiento regenerativo"],
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
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica normal",
      title: "Microneedling cosmetico",
      intro: "Tecnica de microestimulo superficial combinada con activos de apoyo.",
      consistsOf: ["Preparacion", "Aplicacion por zonas", "Cierre reparador"],
      objectives: ["Mejorar textura", "Unificar tono", "Aportar calidad global"],
      zones: ["Rostro", "Cuello", "Escote"],
      timings: ["Sesion de 55-70 min", "Recuperacion 24-48h"],
      recommendations: ["Evitar calor 24h", "Fotoproteccion estricta"],
      followUp: ["Revision de tolerancia", "Ajuste de activos"],
      notes: ["La idoneidad se confirma tras diagnostico."],
    },
  },
  {
    id: "protocolo-antimanchas-facial",
    name: "Protocolo antimanchas facial",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    shortDescription: "Plan por sesiones para tono irregular y manchas visibles.",
    objective: "Mejorar homogeneidad de tono con estrategia progresiva.",
    duration: "50-60 min",
    frequency: "Cada 2-4 semanas",
    candidate: "Piel con hiperpigmentacion o tono desigual.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica normal",
      title: "Protocolo antimanchas facial",
      intro: "Combinacion de activos y tecnica en cabina para tono mas uniforme.",
      consistsOf: ["Diagnostico pigmentario", "Fase activa", "Cierre antioxidante"],
      objectives: ["Regular tono", "Reducir contraste de mancha", "Reforzar prevencion"],
      zones: ["Rostro", "Escote"],
      timings: ["Sesion de 50-60 min", "Recuperacion leve segun piel"],
      recommendations: ["Fotoproteccion todo el ano", "Evitar agresiones termicas"],
      followUp: ["Comparativa por bloque", "Ajuste segun estacionalidad"],
      notes: ["Necesita continuidad para consolidar resultado."],
    },
  },
  {
    id: "presoterapia-estetica",
    name: "Presoterapia estetica",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    featured: true,
    shortDescription: "Compresion secuencial para sensacion de ligereza y soporte drenante.",
    objective: "Reducir pesadez y apoyar planes corporales combinados.",
    duration: "30-40 min",
    frequency: "1-2 veces por semana",
    candidate: "Retencion de liquidos o piernas cansadas.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica normal",
      title: "Presoterapia estetica",
      intro: "Sesion de drenaje mecanico con intensidad ajustada.",
      consistsOf: ["Valoracion de base", "Compresion por fases", "Cierre y pautas"],
      objectives: ["Ligereza", "Confort", "Apoyo remodelante"],
      zones: ["Piernas", "Abdomen", "Brazos"],
      timings: ["Sesion de 30-40 min", "Sin recuperacion"],
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
    frequency: "1 sesion semanal",
    candidate: "Personas que priorizan trabajo manual progresivo.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica normal",
      title: "Maderoterapia corporal",
      intro: "Secuencia manual en cabina con instrumental de apoyo.",
      consistsOf: ["Revision de zonas", "Secuencia tecnica", "Cierre drenante"],
      objectives: ["Activar tejido", "Mejorar tono", "Mantener continuidad"],
      zones: ["Piernas", "Gluteos", "Abdomen"],
      timings: ["Sesion de 45-55 min"],
      recommendations: ["Hidratacion", "Regularidad", "Descanso muscular"],
      followUp: ["Registro de evolucion", "Ajuste de intensidad"],
      notes: ["Puede alternarse con presoterapia."],
    },
  },
  {
    id: "ritual-cuerpo-detox",
    name: "Ritual cuerpo detox",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    shortDescription: "Sesion corporal de cabina para desinflamar y revitalizar tejido.",
    objective: "Mejorar confort corporal y aspecto de piel en fases de mantenimiento.",
    duration: "55-65 min",
    frequency: "Quincenal",
    candidate: "Personas con cansancio corporal o piel apagada.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica normal",
      title: "Ritual cuerpo detox",
      intro: "Protocolo de cabina con secuencia drenante y fase nutritiva.",
      consistsOf: ["Preparacion", "Fase tecnica corporal", "Cierre confort"],
      objectives: ["Aliviar sensacion de pesadez", "Aportar tono visual"],
      zones: ["Piernas", "Abdomen", "Espalda baja"],
      timings: ["Sesion de 55-65 min"],
      recommendations: ["Hidratacion alta", "Mantener actividad"],
      followUp: ["Mantenimiento quincenal o mensual"],
      notes: ["Ideal como soporte entre bloques intensivos."],
    },
  },
  {
    id: "depilacion-laser-diodo",
    name: "Depilacion laser diodo",
    categoryId: "estetica-avanzada",
    categoryName: esCategoryNameById["estetica-avanzada"],
    featured: true,
    shortDescription: "Protocolo por zonas con parametros ajustados a fototipo y evolucion.",
    objective: "Reducir de forma progresiva el vello no deseado.",
    duration: "15-60 min",
    frequency: "Cada 4-8 semanas",
    candidate: "Vello facial o corporal con necesidad de pauta estable.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica avanzada",
      title: "Depilacion laser diodo",
      intro: "Tratamiento tecnico con ajustes por sesion y trazabilidad por zona.",
      consistsOf: ["Valoracion de fototipo", "Aplicacion por zonas", "Registro de respuesta"],
      objectives: ["Reducir densidad", "Mejorar confort", "Planificar mantenimiento"],
      zones: ["Facial", "Corporal"],
      timings: ["Sesion segun zona", "Retorno inmediato"],
      recommendations: ["Evitar exposicion solar intensa", "Rasurado segun pauta"],
      followUp: ["Revision por zona", "Ajuste de intervalos"],
      notes: ["La pauta definitiva se valida en consulta."],
    },
  },
  {
    id: "radiofrecuencia-corporal-multipolar",
    name: "Radiofrecuencia corporal multipolar",
    categoryId: "estetica-avanzada",
    categoryName: esCategoryNameById["estetica-avanzada"],
    featured: true,
    shortDescription: "Estimulo termico no invasivo para tono y textura corporal.",
    objective: "Mejorar firmeza y soporte de tejido en zonas localizadas.",
    duration: "40-55 min",
    frequency: "Cada 2-3 semanas",
    candidate: "Flacidez leve o necesidad de refuerzo de contorno.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica avanzada",
      title: "Radiofrecuencia corporal multipolar",
      intro: "Aplicacion por cuadrantes con control de temperatura y confort.",
      consistsOf: ["Mapa de zonas", "Aplicacion tecnica", "Cierre calmante"],
      objectives: ["Aportar firmeza", "Mejorar textura", "Sostener plan corporal"],
      zones: ["Abdomen", "Flancos", "Brazos", "Muslos"],
      timings: ["Sesion de 40-55 min", "Sin baja social"],
      recommendations: ["Hidratacion", "Actividad ligera post sesion"],
      followUp: ["Reevaluacion por bloque", "Ajuste de intensidad"],
      notes: ["Combinable con presoterapia y masaje tecnico."],
    },
  },
  {
    id: "electroporacion-dermoactiva",
    name: "Electroporacion dermoactiva",
    categoryId: "estetica-avanzada",
    categoryName: esCategoryNameById["estetica-avanzada"],
    shortDescription: "Vehiculizacion de activos sin aguja para piel facial y corporal localizada.",
    objective: "Potenciar penetracion de activos con sesion confortable.",
    duration: "40-50 min",
    frequency: "Cada 2-4 semanas",
    candidate: "Piel que busca impulso de hidratacion y elasticidad.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica avanzada",
      title: "Electroporacion dermoactiva",
      intro: "Permeabilizacion transitoria para aprovechar activos adaptados a objetivo.",
      consistsOf: ["Diagnostico objetivo", "Aplicacion por zonas", "Sellado final"],
      objectives: ["Hidratacion profunda", "Mejorar elasticidad", "Regular aspecto"],
      zones: ["Rostro", "Cuello", "Escote"],
      timings: ["Sesion de 40-50 min"],
      recommendations: ["Rutina suave post sesion", "Evitar calor intenso 24h"],
      followUp: ["Ajuste de activos", "Integracion en plan global"],
      notes: ["Alternativa de baja agresion para piel reactiva."],
    },
  },
  {
    id: "ritual-cabina-luminosidad",
    name: "Ritual cabina luminosidad",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    featured: true,
    shortDescription: "Sesion combinada de limpieza, masaje y activos de brillo.",
    objective: "Aportar efecto buena cara y confort inmediato.",
    duration: "60 min",
    frequency: "Mensual",
    candidate: "Piel cansada o previa a evento.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica normal",
      title: "Ritual cabina luminosidad",
      intro: "Tratamiento de cabina de impacto visual rapido con base tecnica.",
      consistsOf: ["Preparacion cutanea", "Masaje especifico", "Fase de activos"],
      objectives: ["Aportar luz", "Relajar facciones", "Mejorar textura"],
      zones: ["Rostro", "Cuello", "Escote"],
      timings: ["Sesion de 60 min"],
      recommendations: ["Hidratacion", "Fotoproteccion"],
      followUp: ["Mantenimiento mensual"],
      notes: ["Compatible con plan facial avanzado."],
    },
  },
  {
    id: "espalda-purificante-pro",
    name: "Espalda purificante pro",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    shortDescription: "Higiene tecnica de espalda para piel congestionada o con marcas.",
    objective: "Limpiar, calmar y mejorar textura de zona dorsal.",
    duration: "45-55 min",
    frequency: "Cada 3-5 semanas",
    candidate: "Congestion dorsal, poro obstruido o mantenimiento corporal.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica normal",
      title: "Espalda purificante pro",
      intro: "Protocolo de cabina para higiene y confort de espalda.",
      consistsOf: ["Limpieza por capas", "Extraccion selectiva", "Cierre calmante"],
      objectives: ["Reducir congestion", "Mejorar textura", "Disminuir marcas"],
      zones: ["Espalda"],
      timings: ["Sesion de 45-55 min"],
      recommendations: ["No manipular 24h", "Usar higiene suave"],
      followUp: ["Control de evolucion", "Ajuste de periodicidad"],
      notes: ["Puede combinarse con LED segun tolerancia."],
    },
  },
  {
    id: "protocolo-gluteo-firme",
    name: "Protocolo gluteo firme",
    categoryId: "estetica-normal",
    categoryName: esCategoryNameById["estetica-normal"],
    shortDescription: "Cabina corporal enfocada en tono visual de gluteo y parte alta de muslo.",
    objective: "Mejorar aspecto de firmeza con trabajo por fases.",
    duration: "50-60 min",
    frequency: "Semanal o quincenal",
    candidate: "Personas que buscan plan localizado en gluteo.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica normal",
      title: "Protocolo gluteo firme",
      intro: "Sesion tecnica de cabina con combinacion manual y aparatologia de apoyo.",
      consistsOf: ["Valoracion de zona", "Fase activa", "Cierre drenante"],
      objectives: ["Mejorar tono", "Aportar continuidad", "Sostener contorno"],
      zones: ["Gluteos", "Muslo posterior"],
      timings: ["Sesion de 50-60 min"],
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
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica avanzada",
      title: "Fotorejuvenecimiento IPL",
      intro: "Tratamiento de luz pulsada con seleccion de parametros segun indicacion.",
      consistsOf: ["Lectura de piel", "Aplicacion por zonas", "Fase calmante"],
      objectives: ["Regular tono", "Mejorar textura", "Reforzar luminosidad"],
      zones: ["Rostro", "Cuello", "Escote", "Manos"],
      timings: ["Sesion de 35-50 min", "Recuperacion ligera 24-48h"],
      recommendations: ["Fotoproteccion estricta", "Evitar calor 48h"],
      followUp: ["Control por bloque", "Ajuste de intervalo"],
      notes: ["Idoneidad sujeta a valoracion previa."],
    },
  },
  {
    id: "radiofrecuencia-facial-pro",
    name: "Radiofrecuencia facial pro",
    categoryId: "estetica-avanzada",
    categoryName: esCategoryNameById["estetica-avanzada"],
    featured: true,
    shortDescription: "Estimulo termico controlado para firmeza y contorno facial.",
    objective: "Aportar tension progresiva sin procedimiento invasivo.",
    duration: "45-60 min",
    frequency: "Cada 2-3 semanas",
    candidate: "Flacidez leve-moderada y perdida de tono.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica avanzada",
      title: "Radiofrecuencia facial pro",
      intro: "Aplicacion termica por cuadrantes con registro de respuesta por sesion.",
      consistsOf: ["Analisis inicial", "Aplicacion controlada", "Cierre calmante"],
      objectives: ["Mejorar firmeza", "Definir ovalo", "Mantener resultados"],
      zones: ["Ovalo", "Mejillas", "Cuello"],
      timings: ["Sesion de 45-60 min", "Sin baja social"],
      recommendations: ["Hidratacion", "Fotoproteccion"],
      followUp: ["Revision por bloque", "Plan de mantenimiento"],
      notes: ["Se integra bien con regenerativos."],
    },
  },
  {
    id: "ultrasonido-focalizado-estetico",
    name: "Ultrasonido focalizado estetico",
    categoryId: "estetica-avanzada",
    categoryName: esCategoryNameById["estetica-avanzada"],
    shortDescription: "Estimulo profundo de soporte para mejora de tension en zonas estrategicas.",
    objective: "Reforzar estructura de soporte en plan de firmeza facial.",
    duration: "60-75 min",
    frequency: "Cada 3-6 meses segun caso",
    candidate: "Piel con descolgamiento inicial o moderado.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica avanzada",
      title: "Ultrasonido focalizado estetico",
      intro: "Sesion de alta precision para estimular tejido de soporte.",
      consistsOf: ["Marcaje de zonas", "Aplicacion por capas", "Control de confort"],
      objectives: ["Mejorar soporte", "Definir contorno", "Sostener firmeza"],
      zones: ["Ovalo", "Papada", "Cuello"],
      timings: ["Sesion de 60-75 min", "Sin baja social"],
      recommendations: ["Hidratacion", "Fotoproteccion diaria"],
      followUp: ["Reevaluacion a 8-12 semanas"],
      notes: ["Indicado solo tras valoracion presencial."],
    },
  },
  {
    id: "bioestimulacion-led",
    name: "Bioestimulacion LED con activos",
    categoryId: "estetica-regenerativa",
    categoryName: esCategoryNameById["estetica-regenerativa"],
    featured: true,
    shortDescription: "Luz cosmetica para recuperar confort cutaneo y acelerar reparacion.",
    objective: "Calmar, reforzar barrera y mejorar respuesta de piel.",
    duration: "35-45 min",
    frequency: "Cada 7-14 dias",
    candidate: "Piel sensibilizada o en fase de recuperacion.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica regenerativa",
      title: "Bioestimulacion LED con activos",
      intro: "Protocolo de luz y activos de soporte regenerativo.",
      consistsOf: ["Lectura de barrera", "Aplicacion LED", "Sellado hidratante"],
      objectives: ["Calmar", "Recuperar", "Reforzar tolerancia"],
      zones: ["Rostro", "Cuello", "Escote"],
      timings: ["Sesion de 35-45 min", "Sin recuperacion"],
      recommendations: ["Rutina suave", "Fotoproteccion"],
      followUp: ["Control de confort", "Ajuste de frecuencia"],
      notes: ["Ideal tras fases intensivas."],
    },
  },
  {
    id: "protocolo-barrera-cutanea",
    name: "Protocolo barrera cutanea",
    categoryId: "estetica-regenerativa",
    categoryName: esCategoryNameById["estetica-regenerativa"],
    featured: true,
    shortDescription: "Recuperacion de piel reactiva para bajar rojez y mejorar tolerancia.",
    objective: "Restablecer confort y preparar la piel para fases posteriores.",
    duration: "45-55 min",
    frequency: "Cada 2-3 semanas",
    candidate: "Piel sensible, irritada o sobretratada.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica regenerativa",
      title: "Protocolo barrera cutanea",
      intro: "Plan conservador de recuperacion cutanea por bloques.",
      consistsOf: ["Diagnostico de sensibilidad", "Activos calmantes", "Plan domiciliario"],
      objectives: ["Reducir rojez", "Mejorar tolerancia", "Reforzar barrera"],
      zones: ["Rostro", "Cuello"],
      timings: ["Sesion de 45-55 min"],
      recommendations: ["No sobreexfoliar", "Rutina estable", "Fotoproteccion"],
      followUp: ["Control en cada visita", "Escalado progresivo"],
      notes: ["Especialmente util tras sensibilizacion."],
    },
  },
  {
    id: "recuperacion-post-laser-calmante",
    name: "Recuperacion post-laser calmante",
    categoryId: "estetica-regenerativa",
    categoryName: esCategoryNameById["estetica-regenerativa"],
    shortDescription: "Soporte entre sesiones laser para recuperar confort y continuidad.",
    objective: "Disminuir sensibilidad y optimizar tolerancia de la siguiente sesion.",
    duration: "30-40 min",
    frequency: "Cada 1-2 semanas segun respuesta",
    candidate: "Clientas en pauta laser con piel reactiva.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica regenerativa",
      title: "Recuperacion post-laser calmante",
      intro: "Sesion de apoyo para estabilizar piel tras fases tecnicas.",
      consistsOf: ["Revision post sesion", "Fase calmante", "Sellado de barrera"],
      objectives: ["Disminuir irritacion", "Recuperar confort", "Mejorar tolerancia"],
      zones: ["Zona tratada"],
      timings: ["Sesion de 30-40 min"],
      recommendations: ["Evitar calor", "Rutina reparadora"],
      followUp: ["Control previo a nueva sesion"],
      notes: ["Se integra en planes avanzados combinados."],
    },
  },
  {
    id: "diagnostico-dermoestetico-digital",
    name: "Diagnostico dermoestetico digital",
    categoryId: "estetica-regenerativa",
    categoryName: esCategoryNameById["estetica-regenerativa"],
    featured: true,
    shortDescription: "Lectura inicial con fotografia estandarizada para planificar por objetivos.",
    objective: "Tomar decision de tratamiento con base real y medible.",
    duration: "30 min",
    frequency: "Al inicio y cada bloque",
    candidate: "Primera visita o revisiones de plan.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica regenerativa",
      title: "Diagnostico dermoestetico digital",
      intro: "Sesion de diagnostico para construir plan, prioridades y tiempos orientativos.",
      consistsOf: ["Historia breve", "Lectura de estado", "Propuesta de fases"],
      objectives: ["Priorizar necesidades", "Definir plan", "Evitar sobretratamiento"],
      zones: ["Facial y/o corporal segun caso"],
      timings: ["Sesion de 30 min"],
      recommendations: ["Seguir pauta indicada", "Traer referencias de rutina si existen"],
      followUp: ["Comparativas por bloque"],
      notes: ["Base para el resto de protocolos."],
    },
  },
  {
    id: "plan-cosmetica-domiciliaria",
    name: "Plan cosmetica domiciliaria",
    categoryId: "estetica-regenerativa",
    categoryName: esCategoryNameById["estetica-regenerativa"],
    shortDescription: "Ajuste de rutina en casa para sostener resultados entre sesiones.",
    objective: "Mejorar adherencia y evitar perdida de progreso.",
    duration: "20-30 min",
    frequency: "Mensual o bimensual",
    candidate: "Clientas en tratamiento que necesitan orden de rutina.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica regenerativa",
      title: "Plan cosmetica domiciliaria",
      intro: "Asesoria practica para ordenar rutina y reducir errores frecuentes.",
      consistsOf: ["Revision de productos actuales", "Diseno de rutina", "Plan de uso"],
      objectives: ["Sostener resultados", "Reducir irritacion", "Mejorar constancia"],
      zones: ["Rostro y cuerpo segun pauta"],
      timings: ["Sesion de 20-30 min"],
      recommendations: ["Mantener orden de aplicacion", "Registrar tolerancia"],
      followUp: ["Ajuste segun evolucion"],
      notes: ["No sustituye diagnostico medico cuando procede."],
    },
  },
  {
    id: "seguimiento-mensual-pro",
    name: "Seguimiento mensual pro",
    categoryId: "estetica-regenerativa",
    categoryName: esCategoryNameById["estetica-regenerativa"],
    shortDescription: "Control de avances, sensaciones y ajustes de frecuencia.",
    objective: "Mantener continuidad y evitar abandonos de plan.",
    duration: "20 min",
    frequency: "Mensual",
    candidate: "Planes medios o largos que requieren coordinacion.",
    ctaLabel: "Saber mas",
    modal: {
      label: "Estetica regenerativa",
      title: "Seguimiento mensual pro",
      intro: "Revision corta orientada a decision practica de continuidad.",
      consistsOf: ["Revision de bloque", "Ajuste de agenda", "Plan siguiente mes"],
      objectives: ["Ordenar continuidad", "Corregir desajustes", "Sostener adherencia"],
      zones: ["Segun tratamiento activo"],
      timings: ["Sesion de 20 min"],
      recommendations: ["Registrar cambios", "Mantener comunicacion activa"],
      followUp: ["Revision cada bloque mensual"],
      notes: ["Especialmente util en planes combinados."],
    },
  },
];

const esCatalog: TreatmentsCatalogContent = {
  closeModalLabel: "Cerrar",
  heroLabel: "Catalogo de tratamientos",
  heroTitle: "Tres lineas maestras para decidir con claridad: normal, avanzada y regenerativa.",
  heroDescription:
    "Toda la oferta se organiza en tres macrocategorias para explorar mejor y entender en que fase encaja cada tratamiento.",
  heroHighlights: [
    "Diagnostico previo obligatorio",
    "Planes combinables por fases",
    "Seguimiento profesional continuo",
  ],
  sectionLabel: "Tratamientos",
  sectionTitle: "Exploracion por categorias con foco en utilidad real.",
  sectionDescription:
    "Cada ficha resume objetivo, duracion, frecuencia y perfil de caso, con detalle completo en modal para comparar mejor.",
  filterLabel: "Filtrar por categoria",
  detailLabel: "Saber mas",
  featuredLabel: "Tratamientos recomendados en esta categoria",
  secondaryLabel: "Mas opciones de la misma categoria",
  secondaryDescription: "Abre cualquier tratamiento para revisar protocolo, zonas, tiempos y seguimiento.",
  labels: {
    objective: "Objetivo",
    duration: "Duracion",
    frequency: "Frecuencia",
    candidate: "Caso habitual",
    category: "Categoria",
    consistsOf: "En que consiste",
    objectives: "Objetivos",
    zonesAndTimings: "Zonas y tiempos",
    recommendationsAndFollowUp: "Recomendaciones y seguimiento",
    notes: "Matices importantes",
    candidateProfile: "Perfil habitual",
  },
  categories: esCategories,
  treatments: esTreatments,
  seoIntroTitle: "Como estructuramos la indicacion",
  seoIntroDescription:
    "No trabajamos con paquetes cerrados sin contexto. Definimos prioridad, medimos respuesta y ajustamos cada fase segun evolucion real.",
};

const caCatalog: TreatmentsCatalogContent = {
  ...esCatalog,
  closeModalLabel: "Tancar",
  heroLabel: "Cataleg de tractaments",
  heroTitle: "Tres linies mestres per decidir amb claredat: normal, avancada i regenerativa.",
  heroDescription:
    "Tota l'oferta s'organitza en tres macrocategories per explorar millor i entendre en quina fase encaixa cada tractament.",
  sectionLabel: "Tractaments",
  sectionTitle: "Exploracio per categories amb focus en utilitat real.",
  sectionDescription:
    "Cada fitxa resumeix objectiu, durada, frequencia i perfil de cas, amb detall complet en modal.",
  filterLabel: "Filtrar per categoria",
  detailLabel: "Saber-ne mes",
  featuredLabel: "Tractaments recomanats en aquesta categoria",
  secondaryLabel: "Mes opcions de la mateixa categoria",
  secondaryDescription: "Obre qualsevol tractament per revisar protocol, zones, temps i seguiment.",
  labels: {
    objective: "Objectiu",
    duration: "Durada",
    frequency: "Frequencia",
    candidate: "Cas habitual",
    category: "Categoria",
    consistsOf: "En que consisteix",
    objectives: "Objectius",
    zonesAndTimings: "Zones i temps",
    recommendationsAndFollowUp: "Recomanacions i seguiment",
    notes: "Matisos importants",
    candidateProfile: "Perfil habitual",
  },
  categories: [
    {
      id: "estetica-normal",
      name: "Estetica normal",
      description: "Bloc base amb facial, corporal i cabina per manteniment i continuitat tecnica.",
    },
    {
      id: "estetica-avanzada",
      name: "Estetica avancada",
      description: "Tecnologia i protocols de precisio per objectius que necessiten mes intensitat.",
    },
    {
      id: "estetica-regenerativa",
      name: "Estetica regenerativa",
      description: "Recuperacio de barrera, qualitat cutania i tolerancia en fases conservadores.",
    },
  ],
  treatments: esCatalog.treatments.map((item) => ({
    ...item,
    ctaLabel: "Saber-ne mes",
  })),
};

const frCatalog: TreatmentsCatalogContent = {
  ...esCatalog,
  closeModalLabel: "Fermer",
  heroLabel: "Catalogue de traitements",
  heroTitle: "Trois lignes claires pour choisir: normal, avancee et regenerative.",
  heroDescription:
    "Toute l'offre est organisee en trois macro-categories pour comprendre rapidement ou se situe chaque traitement.",
  sectionLabel: "Traitements",
  sectionTitle: "Exploration par categories avec un vrai cadre de decision.",
  sectionDescription:
    "Chaque fiche resume objectif, duree, frequence et profil de cas, puis ouvre le detail complet en modal.",
  filterLabel: "Filtrer par categorie",
  detailLabel: "En savoir plus",
  featuredLabel: "Traitements recommandes dans cette categorie",
  secondaryLabel: "Autres options de la meme categorie",
  secondaryDescription: "Ouvrez un traitement pour voir protocole, zones, duree et suivi.",
  labels: {
    objective: "Objectif",
    duration: "Duree",
    frequency: "Frequence",
    candidate: "Cas habituel",
    category: "Categorie",
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
      name: "Esthetique normale",
      description: "Bloc de base avec visage, corps et cabine pour entretien et regularite.",
    },
    {
      id: "estetica-avanzada",
      name: "Esthetique avancee",
      description: "Technologie et protocoles de precision pour objectifs plus exigeants.",
    },
    {
      id: "estetica-regenerativa",
      name: "Esthetique regenerative",
      description: "Recuperation de la barriere cutanee et soutien des peaux sensibles.",
    },
  ],
  treatments: esCatalog.treatments.map((item) => ({
    ...item,
    ctaLabel: "En savoir plus",
  })),
};

const catalogByLocale: Record<Locale, TreatmentsCatalogContent> = {
  es: esCatalog,
  ca: caCatalog,
  fr: frCatalog,
};

export function getTreatmentsCatalog(locale: Locale): TreatmentsCatalogContent {
  return catalogByLocale[locale] ?? esCatalog;
}
