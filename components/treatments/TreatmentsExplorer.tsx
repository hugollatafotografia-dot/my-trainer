"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import Button from "@/components/Button";
import PremiumModal from "@/components/premium/PremiumModal";
import type {
  TreatmentCategory,
  TreatmentCategoryId,
  TreatmentItem,
  TreatmentsCatalogContent,
} from "@/lib/content/treatments-catalog";
import { TRACK_EVENTS } from "@/lib/tracking/events";
import { cn } from "@/lib/utils";

type TreatmentsExplorerProps = {
  content: TreatmentsCatalogContent;
  mode?: "home" | "page";
  bridgeHref?: string;
  bridgeLabel?: string;
  reserveHref?: string;
  whatsappHref?: string;
  treatmentsBasePath?: string;
};

const CATEGORY_DEFAULT_DURATION: Record<TreatmentCategoryId, string> = {
  "estetica-normal": "30-60 min por sesión",
  "estetica-avanzada": "30-75 min por sesión",
  "estetica-regenerativa": "30-60 min por sesión",
};

const CATEGORY_DEFAULT_FREQUENCY: Record<TreatmentCategoryId, string> = {
  "estetica-normal": "Se pauta según mantenimiento, confort y objetivo del caso.",
  "estetica-avanzada": "Se organiza por fases y se ajusta según la respuesta real del tejido.",
  "estetica-regenerativa": "Bloques progresivos con revisión periódica según tolerancia y evolución.",
};

const CATEGORY_DEFAULT_SENSATION: Record<TreatmentCategoryId, string> = {
  "estetica-normal": "Suelen ser sesiones confortables y bien toleradas.",
  "estetica-avanzada": "La intensidad se ajusta al caso; puede notarse trabajo técnico localizado.",
  "estetica-regenerativa": "La sensación depende de la técnica y de la zona, pero siempre se trabaja con control de tolerancia.",
};

const CATEGORY_DEFAULT_CONSIDERATIONS: Record<TreatmentCategoryId, string> = {
  "estetica-normal": "Seguir las pautas básicas de cuidado y mantenimiento indicadas en cabina.",
  "estetica-avanzada": "Respetar tiempos, preparación previa y cuidados posteriores cuando el protocolo lo requiera.",
  "estetica-regenerativa": "Cumplir plan de continuidad, fotoprotección y cuidados de barrera o activos indicados.",
};

const CATEGORY_DEFAULT_ASSESSMENT: Record<TreatmentCategoryId, string> = {
  "estetica-normal": "Recomendable si hay sensibilidad, dudas de compatibilidad o si se va a combinar con otros tratamientos.",
  "estetica-avanzada": "Imprescindible cuando el objetivo requiere aparatología, láser, combinación de técnicas o trabajo por fases.",
  "estetica-regenerativa": "Muy recomendable para elegir bien activos, intensidad y ritmo de regeneración.",
};

const DURATION_OVERRIDES: Record<string, string> = {
  "wonder-axon": "30-45 min por sesión",
  "hollywood-peel": "30-45 min por sesión",
  "depilacio-laser": "20-70 min según zona",
  "peeling-quimic-facial": "30-45 min por sesión",
  "neteja-cutis-vapor": "50-60 min por sesión",
  "neteja-cutis-punta-diamant": "30-45 min por sesión",
  "depilacio-cera-calenta-tebia": "20-45 min según zona",
  "radiofrequencia-facial": "30-45 min por sesión",
  "radiofrequencia-corporal": "30-60 min por sesión",
  "cyclone-luxury-facial": "30-45 min por sesión",
  "cyclone-corporal": "50-75 min por sesión",
  cavitacio: "30-45 min por sesión",
  "hifu-corporal": "45-60 min por zona",
  vacunterapia: "35-60 min por sesión",
  "ones-galvaniques": "20-30 min por sesión",
  fototerapia: "15-30 min por sesión",
  "alta-frequencia": "5-10 min dentro del tratamiento",
  "eliminacio-tatuatges": "30-60 min por sesión",
  "presoterapia": "20-40 min por sesión",
  taques: "30-45 min por sesión",
  "massatges-relaxants": "50-70 min por sesión",
  "massatges-descontracturants": "45-60 min por sesión",
  "drenatges-limfatics": "45-60 min por sesión",
  "lifting-manual-facial": "45-60 min por sesión",
  "microneedling-capilar": "45-60 min por sesión",
  "microneedling-facial": "45-60 min por sesión",
  "microneedling-corporal": "45-60 min por sesión",
  "microneedling-llavis-acid-hialuronic": "35-50 min por sesión",
  "spa-peus-mans": "35-50 min por sesión",
};

const FREQUENCY_OVERRIDES: Record<string, string> = {
  "depilacio-laser": "Normalmente entre 4 y 8 semanas, según zona y ciclo del vello.",
  "hollywood-peel": "Cada 2-4 semanas según objetivo y estado de la piel.",
  "peeling-quimic-facial": "Habitualmente cada 2-4 semanas dentro del protocolo.",
  "radiofrequencia-facial": "Suele trabajarse cada 1-2 semanas en bloques de varias sesiones.",
  "radiofrequencia-corporal": "Suele pautarse 1-2 veces por semana según objetivo.",
  "cyclone-luxury-facial": "1 sesión por semana o cada 10 días; después mantenimiento mensual.",
  "microneedling-facial": "Normalmente cada 3-4 semanas, respetando la regeneración de la piel.",
  "microneedling-corporal": "Se pauta por fases según zona, objetivo y tolerancia.",
  "microneedling-capilar": "Se trabaja en protocolo; el ritmo se ajusta según caída y respuesta.",
  "eliminacio-tatuatges": "Cada 6-8 semanas para permitir que la piel se recupere bien.",
  "wonder-axon": "Entre 2 y 3 sesiones por semana según el objetivo.",
  "ones-acustiques": "Habitualmente 1-2 veces por semana dentro del protocolo.",
  "cyclone-corporal": "Fase inicial de 1-2 sesiones por semana; después se reevalúa.",
  cavitacio: "Habitualmente 1 sesión por semana en protocolos de varias sesiones.",
  "hifu-corporal": "Se pauta por fases; la reevaluación suele hacerse a las 8-12 semanas.",
  vacunterapia: "Normalmente 1-2 veces por semana según tejido y objetivo.",
  presoterapia: "Puede hacerse varias veces por semana o como complemento entre sesiones.",
  "drenatges-limfatics": "Puede hacerse con bastante regularidad, según retención y objetivo.",
};

const SENSATION_OVERRIDES: Record<string, string> = {
  "depilacio-laser": "Sensación de calor o pequeños pinchazos; no es agradable, pero sí tolerable.",
  "hollywood-peel": "Cómodo, con sensación de calor muy leve.",
  "peeling-quimic-facial": "Puede notarse ligero picor o escozor mientras actúa el ácido.",
  "radiofrequencia-facial": "Calor progresivo y agradable.",
  "radiofrequencia-corporal": "Calor progresivo, bien tolerado y ajustable.",
  "cyclone-luxury-facial": "Calor controlado con ligera succión, sin dolor.",
  "microneedling-facial": "Totalmente tolerable; depende de profundidad y zona.",
  "microneedling-corporal": "Variable según zona y profundidad, pero con tolerancia controlada.",
  "microneedling-capilar": "Puede notarse molestia ligera, pero es un tratamiento tolerable.",
  "eliminacio-tatuatges": "Molestia parecida a pequeños impactos o calor intenso.",
  "wonder-axon": "Contracción muscular intensa pero controlada.",
  "ones-acustiques": "Puede resultar molesto en zonas fibrosas, pero es tolerable.",
  "cyclone-corporal": "Intenso en algunas zonas, pero ajustable y tolerable.",
  cavitacio: "Suele ser una sesión cómoda y bastante agradable.",
  "hifu-corporal": "Calor profundo y pequeñas descargas internas; es más intenso que otros corporales.",
  vacunterapia: "Sensación de succión y calor; puede notarse más en zonas con celulitis.",
  presoterapia: "Muy cómoda y relajante, con presión secuencial controlada.",
};

const CONSIDERATION_OVERRIDES: Record<string, string> = {
  "depilacio-laser": "Evitar sol y solárium, revisar medicación o activos fotosensibilizantes y rasurar en vez de arrancar el vello.",
  "hollywood-peel": "Fotoprotección estricta y pauta básica de cuidado las horas posteriores.",
  "peeling-quimic-facial": "Fotoprotección estricta y control de activos domiciliarios según la pauta indicada.",
  "radiofrequencia-facial": "Revisamos contraindicaciones como embarazo, marcapasos o procesos cutáneos activos.",
  "radiofrequencia-corporal": "No se indica en embarazo, marcapasos u otras contraindicaciones específicas del calor profundo.",
  "microneedling-facial": "Después conviene evitar sol, maquillaje inmediato y activos como retinol o glicólico durante la pauta indicada.",
  "microneedling-capilar": "Funciona mejor si se combina con pauta domiciliaria y continuidad entre sesiones.",
  "eliminacio-tatuatges": "Es clave respetar recuperación, evitar sol y cuidar bien la zona entre sesiones.",
  "wonder-axon": "Puede dejar sensación de agujetas; conviene revisar contraindicaciones de estimulación eléctrica.",
  cavitacio: "Beber agua y moverse ayuda a metabolizar mejor la grasa liberada.",
  "hifu-corporal": "No es para perder peso general; suele necesitar combinación con drenaje o reafirmación.",
  vacunterapia: "Puede aparecer enrojecimiento o hematoma ocasional; se ajusta intensidad según el tejido.",
  presoterapia: "No sustituye la pérdida de grasa; trabaja líquidos, pesadez y confort corporal.",
};

const ASSESSMENT_OVERRIDES: Record<string, string> = {
  "depilacio-laser": "Es imprescindible para valorar fototipo, tipo de vello, zonas hormonales y seguridad del protocolo.",
  "hollywood-peel": "Conviene revisar acné, sensibilidad y objetivo real para saber si es mantenimiento o parte de un plan.",
  "peeling-quimic-facial": "Necesaria para elegir ácido, concentración, época del año y compatibilidad con tu rutina.",
  "radiofrequencia-facial": "Conviene revisar grado de flacidez, objetivo y posibles contraindicaciones.",
  "radiofrequencia-corporal": "Importante para saber si el objetivo principal es firmeza, volumen o celulitis y si debe combinarse.",
  "cyclone-luxury-facial": "La valoración define si conviene como tratamiento principal, potenciador o mantenimiento.",
  "microneedling-facial": "Muy importante para elegir profundidad, activos y si la piel está preparada para regenerar bien.",
  "microneedling-capilar": "Se valora tipo de caída, grado de debilitamiento y si necesita apoyo domiciliario o protocolo más largo.",
  "eliminacio-tatuatges": "La valoración inicial es clave para analizar tinta, color, zona y número orientativo de sesiones.",
  "wonder-axon": "Conviene revisar objetivo corporal, tono muscular y contraindicaciones antes de empezar.",
  "ones-acustiques": "La valoración nos dice si el tejido necesita ondas de choque, drenaje o una secuencia corporal distinta.",
  "cyclone-corporal": "Muy recomendable para decidir el orden entre HIFU, cavitación, vacum y radiofrecuencia.",
  cavitacio: "Conviene revisar si la grasa es superficial, si hay flacidez asociada y qué combinación le conviene al caso.",
  "hifu-corporal": "Es imprescindible para saber si realmente hay grasa localizada profunda y si hace falta combinarlo.",
  vacunterapia: "Se valora tipo de celulitis, retención o flacidez para ajustar intensidad y objetivo.",
  presoterapia: "Conviene revisar si el volumen se relaciona con líquidos y si hay contraindicaciones circulatorias.",
};

const INDICATED_FOR_OVERRIDES: Record<string, string[]> = {
  "depilacio-laser": [
    "Vello facial o corporal cuando se busca una reduccion muy significativa y duradera.",
    "Casos donde interesa dejar de depender de cera, pinza o rasurado constante.",
    "Personas que ya han probado laser antes y quieren revisar por que no les funciono bien.",
  ],
  "hollywood-peel": [
    "Piel apagada, poro visible, exceso de grasa o imperfecciones iniciales.",
    "Quien busca efecto buena cara antes de un evento o como mantenimiento visible.",
    "Casos donde interesa limpiar mejor la piel sin tiempo de recuperacion.",
  ],
  "peeling-quimic-facial": [
    "Manchas, acné, textura irregular, poro dilatado y envejecimiento cutaneo.",
    "Pieles que necesitan renovacion progresiva sin un peeling agresivo.",
    "Protocolos donde hay que mejorar tono y calidad de piel con estrategia.",
  ],
  "neteja-cutis-vapor": [
    "Piel congestionada, comedones, exceso de grasa y necesidad de higiene profunda.",
    "Casos donde la piel necesita desincrustacion y extraccion bien hecha antes de otros tratamientos.",
    "Pieles que buscan limpieza real, no solo sensacion de frescor.",
  ],
  "neteja-cutis-punta-diamant": [
    "Piel apagada, textura irregular y poro visible.",
    "Preparacion de la piel antes de vehiculizar activos o combinar otras tecnicas.",
    "Quien busca una exfoliacion mecanica controlada y bien tolerada.",
  ],
  "radiofrequencia-facial": [
    "Flacidez leve, perdida de firmeza, arrugas y necesidad de mejorar calidad de piel.",
    "Primeros signos de envejecimiento cuando se busca una alternativa no invasiva.",
    "Protocolos donde hace falta reafirmar entre fases regenerativas.",
  ],
  "cyclone-luxury-facial": [
    "Falta de tonicidad, flacidez leve o moderada y piel con menos luminosidad.",
    "Primeras fases de descolgamiento en las que interesa redefinir el ovalo.",
    "Casos donde se busca un tratamiento confortable, visible y sin downtime.",
  ],
  "ones-galvaniques": [
    "Deshidratacion, arrugas finas y protocolos donde interesa potenciar la penetracion de activos.",
    "Pieles que no quieren o no pueden trabajar con agujas en ese momento.",
    "Tratamientos faciales que necesitan vehiculizacion mas eficaz sin agredir la piel.",
  ],
  fototerapia: [
    "Acné, inflamacion, envejecimiento, sensibilidad y mejora global de la piel.",
    "Pieles reactivas o en recuperacion despues de microneedling, laser u otros tratamientos.",
    "Protocolos donde interesa calmar, regenerar o acelerar la recuperacion.",
  ],
  "alta-frequencia": [
    "Piel grasa, acneica o con poros obstruidos.",
    "Como paso final en limpiezas o protocolos de acné.",
    "Casos donde hace falta oxigenar, desinfectar y ayudar a calmar la inflamacion.",
  ],
  "microneedling-facial": [
    "Flacidez, arrugas, manchas, poro dilatado, acné y mejora global de la calidad de la piel.",
    "Pieles que necesitan estimular colageno y regeneracion real, no solo un efecto superficial.",
    "Protocolos donde el activo elegido debe trabajar mas en profundidad.",
  ],
  "microneedling-capilar": [
    "Caida del cabello por distintos tipos de alopecia, debilitamiento o falta de densidad.",
    "Casos donde interesa mejorar calidad capilar trabajando sobre el foliculo.",
    "Protocolos capilares que se benefician de combinar cabina y pauta domiciliaria.",
  ],
  "ones-acustiques": [
    "Celulitis fibrosa o compacta, fibrosis y zonas donde el tejido necesita reorganizacion.",
    "Protocolos corporales donde hace falta mejorar microcirculacion y calidad de la piel.",
    "Casos en los que interesa movilizar tejido antes o entre otras fases corporales.",
  ],
  presoterapia: [
    "Retencion de liquidos, piernas cansadas, hinchazon y pesadez corporal.",
    "Complemento de protocolos corporales donde hace falta mejorar drenaje y confort.",
    "Casos donde el volumen esta mas relacionado con liquidos que con grasa.",
  ],
  "eliminacio-tatuatges": [
    "Tatuajes que se quieren reducir o eliminar de forma progresiva.",
    "Casos donde hay que valorar color, profundidad, antiguedad y zona antes de pautar.",
    "Personas que entienden que el proceso requiere varias sesiones y seguimiento.",
  ],
  "wonder-axon": [
    "Tonificacion, fortalecimiento muscular y apoyo a la remodelacion corporal.",
    "Gluteos, abdomen, piernas y otras zonas donde se busca mejorar tono y definicion.",
    "Personas que quieren un complemento valioso al ejercicio y al protocolo corporal.",
  ],
  "radiofrequencia-corporal": [
    "Flacidez corporal, perdida de firmeza y mala calidad del tejido.",
    "Casos donde hace falta reafirmar despues de trabajar volumen o drenaje.",
    "Protocolos corporales que necesitan soporte de colageno y elasticidad.",
  ],
  "cyclone-corporal": [
    "Grasa localizada, celulitis, flacidez corporal y retencion de liquidos.",
    "Casos que no se resuelven con una sola tecnologia y requieren secuencia.",
    "Personas que necesitan un protocolo corporal global y revisable por fases.",
  ],
  cavitacio: [
    "Grasa localizada superficial en abdomen, flancos, cartucheras, muslos o brazos.",
    "Casos donde interesa reducir volumen progresivamente sin cirugia.",
    "Protocolos que despues necesitan drenaje, movilizacion o reafirmacion.",
  ],
  "hifu-corporal": [
    "Grasa localizada resistente y mas profunda, no perdida de peso general.",
    "Abdomen, flancos, cartucheras, muslos o brazos bien seleccionados.",
    "Casos donde interesa una lipolisis profunda dentro de un plan corporal completo.",
  ],
  vacunterapia: [
    "Celulitis blanda o edematosa, retencion y tejidos con poca movilidad.",
    "Casos donde hace falta drenar, movilizar y reafirmar a la vez.",
    "Protocolos corporales donde la calidad del tejido condiciona el resultado.",
  ],
  "massatges-relaxants": [
    "Estres, sobrecarga general y necesidad de desconexion fisica y mental.",
    "Personas que buscan bajar tension y recuperar bienestar.",
    "Casos donde el objetivo principal es relajacion y confort.",
  ],
  "massatges-descontracturants": [
    "Sobrecarga muscular, malas posturas y tension localizada.",
    "Espalda, cuello, hombros u otras zonas con mas carga.",
    "Personas que necesitan alivio real de contractura o rigidez.",
  ],
  "drenatges-limfatics": [
    "Retencion de liquidos, piernas cansadas, hinchazon o postoperatorios.",
    "Casos donde el sistema linfatico necesita estimulo manual especifico.",
    "Protocolos corporales en los que el drenaje es clave para consolidar resultado.",
  ],
  "tractaments-facials-personalitzats": [
    "Casos donde no tiene sentido vender un solo tratamiento cerrado.",
    "Pieles que necesitan combinar regeneracion, despigmentacion, hidratacion o soporte de barrera.",
    "Clientas que buscan mejorar calidad de piel con una estrategia de verdad personalizada.",
  ],
  "tractaments-corporals-personalitzats": [
    "Casos corporales donde el objetivo principal puede ser grasa, flacidez, celulitis o retencion.",
    "Personas que necesitan combinar tecnologias segun respuesta real y no por moda.",
    "Protocolos que requieren secuencia, seguimiento y reajuste entre fases.",
  ],
};

const GOAL_OVERRIDES: Record<string, string[]> = {
  "depilacio-laser": [
    "Debilitar el foliculo para conseguir una reduccion muy significativa del vello.",
    "Ajustar parametros segun fototipo, zona y respuesta real entre sesiones.",
    "Plantear continuidad y mantenimiento en zonas hormonales o mas resistentes.",
  ],
  "hollywood-peel": [
    "Limpiar en profundidad con carbon activo y laser sin downtime.",
    "Mejorar luminosidad, textura y aspecto general de la piel desde la primera sesion.",
    "Apoyar protocolos de sebo, poro y piel apagada.",
  ],
  "peeling-quimic-facial": [
    "Acelerar la renovacion celular de forma controlada.",
    "Mejorar tono, manchas, poro y textura sin una agresion innecesaria.",
    "Integrar la piel en un protocolo por fases segun objetivo y epoca del año.",
  ],
  "neteja-cutis-vapor": [
    "Desincrustar impurezas y facilitar extracciones bien hechas.",
    "Dejar la piel mas descongestionada, limpia y receptiva.",
    "Preparar la base para tratamientos mas avanzados.",
  ],
  "neteja-cutis-punta-diamant": [
    "Eliminar celulas muertas con una exfoliacion mecanica controlada.",
    "Afinar textura y mejorar la apariencia del poro.",
    "Potenciar la penetracion de activos o la eficacia de otros tratamientos.",
  ],
  "radiofrequencia-facial": [
    "Generar calor dermico para estimular colageno y firmeza.",
    "Aportar efecto tensor inmediato con mejora progresiva de soporte cutaneo.",
    "Mejorar la calidad global de la piel sin tiempo de recuperacion.",
  ],
  "cyclone-luxury-facial": [
    "Combinar radiofrecuencia y vacumterapia para activar colageno y circulacion.",
    "Redefinir el ovalo y mejorar tonicidad en fases iniciales de flacidez.",
    "Usarlo como tratamiento visible, potenciador o mantenimiento estrategico.",
  ],
  "ones-galvaniques": [
    "Vehiculizar activos ionizables mas alla de una aplicacion manual.",
    "Mejorar hidratacion, luminosidad y eficacia cosmetica sin agujas.",
    "Ofrecer una alternativa suave cuando no toca microneedling.",
  ],
  fototerapia: [
    "Estimular procesos biologicos segun la longitud de onda adecuada.",
    "Calmar, regenerar o apoyar pieles con acne, inflamacion o sensibilidad.",
    "Potenciar resultados y acelerar recuperacion de otros protocolos.",
  ],
  "alta-frequencia": [
    "Oxigenar y desinfectar la piel con efecto bactericida.",
    "Ayudar a reducir inflamacion y brotes activos.",
    "Cerrar bien tratamientos de limpieza o acne dentro de un protocolo mayor.",
  ],
  "microneedling-facial": [
    "Crear microcanales controlados para estimular colageno y regeneracion.",
    "Mejorar textura, tono, densidad y calidad de piel de forma progresiva.",
    "Vehiculizar exosomas, factores de crecimiento, acido hialuronico u otros activos segun diagnostico.",
  ],
  "microneedling-capilar": [
    "Estimular el foliculo para mejorar calidad, densidad y respuesta capilar.",
    "Vehiculizar viales capilares como parte de protocolos tipo ProHair.",
    "Trabajar en continuidad junto a tratamiento domiciliario cuando hace falta.",
  ],
  "ones-acustiques": [
    "Estimular microcirculacion y drenaje en tejido con celulitis o fibrosis.",
    "Reorganizar el tejido para mejorar su textura y respuesta.",
    "Potenciar otros tratamientos corporales dentro de una secuencia logica.",
  ],
  presoterapia: [
    "Favorecer drenaje mecanico y eliminacion de liquidos.",
    "Reducir pesadez, hinchazon y sensacion de cansancio.",
    "Servir de apoyo entre fases de remodelacion corporal.",
  ],
  "eliminacio-tatuatges": [
    "Fragmentar la tinta para que el organismo la elimine progresivamente.",
    "Trabajar con expectativas realistas segun color, profundidad y antiguedad.",
    "Proteger la piel entre sesiones y ajustar bien el ritmo del proceso.",
  ],
  "wonder-axon": [
    "Provocar contracciones supramaximas que no se alcanzan voluntariamente.",
    "Mejorar tono muscular, firmeza y definicion corporal.",
    "Aportar un complemento rapido y eficaz a habitos y protocolos corporales.",
  ],
  "radiofrequencia-corporal": [
    "Estimular colageno para reafirmar y mejorar elasticidad.",
    "Acompanar protocolos de volumen para evitar flacidez.",
    "Mejorar calidad del tejido en zonas corporales con menos tono.",
  ],
  "cyclone-corporal": [
    "Secuenciar HIFU, cavitacion, vacum y radiofrecuencia con sentido.",
    "Reducir volumen de forma progresiva mientras se mejora drenaje y firmeza.",
    "Trabajar el cuerpo como proceso, no como una sesion aislada.",
  ],
  cavitacio: [
    "Romper grasa superficial localizada de forma no invasiva.",
    "Favorecer reduccion progresiva de volumen dentro de un protocolo completo.",
    "Preparar el tejido para drenaje, vacum o reafirmacion posterior.",
  ],
  "hifu-corporal": [
    "Atacar grasa localizada profunda con ultrasonido focalizado.",
    "Conseguir reduccion progresiva de centimetros en zonas bien indicadas.",
    "Servir de base para protocolos combinados con drenaje y firmeza.",
  ],
  vacunterapia: [
    "Movilizar tejido y activar circulacion mediante succion controlada.",
    "Drenar, mejorar celulitis y reforzar firmeza con calor profundo.",
    "Actuar como puente entre tratamientos mas intensivos del protocolo corporal.",
  ],
  "massatges-relaxants": [
    "Bajar tension general y mejorar bienestar fisico y mental.",
    "Mejorar circulacion y sensacion de descanso.",
    "Aportar una pausa real sin perder el enfoque de cuidado profesional.",
  ],
  "massatges-descontracturants": [
    "Liberar zonas con mas carga o contractura.",
    "Mejorar movilidad y sensacion de alivio desde la primera sesion.",
    "Adaptar intensidad segun lo que el tejido necesita.",
  ],
  "drenatges-limfatics": [
    "Estimular manualmente el sistema linfatico con tecnica especifica de arrastre.",
    "Reducir volumen cuando el problema principal son liquidos y no grasa.",
    "Mejorar ligereza, confort y respuesta de otros tratamientos corporales.",
  ],
  "tractaments-facials-personalitzats": [
    "Elegir con criterio entre PROAGE GF, PROEXO GF, TEC-EXOSOME PDRN, HA HYDRO, REDENSA, CELLVIT, PROBIO SK o KOJIC SK.",
    "Trabajar la calidad de la piel desde la causa: densidad, hidratacion, firmeza, manchas, barrera o vitalidad.",
    "Construir un protocolo facial por fases y reajustarlo segun evolucion real.",
  ],
  "tractaments-corporals-personalitzats": [
    "Combinar HIFU, cavitacion, vacum, radiofrecuencia, Wonder Axon, drenaje o presoterapia segun el objetivo real.",
    "Secuenciar tecnologias para que el tratamiento no dependa de una sola maquina.",
    "Revisar progreso y reajustar el plan corporal segun resultados y tolerancia.",
  ],
};

function categorySectionId(category: TreatmentCategory) {
  return `cat-${category.slug}`;
}

function categoryIdFromHash(categories: TreatmentCategory[], hash: string): TreatmentCategoryId | null {
  const normalized = hash.replace(/^#/, "");
  if (!normalized.startsWith("cat-")) {
    return null;
  }

  const slug = normalized.replace(/^cat-/, "");
  const match = categories.find((category) => category.slug === slug);
  return match?.id ?? null;
}

function buildTreatmentMeta(item: TreatmentItem) {
  const duration = DURATION_OVERRIDES[item.slug] ?? CATEGORY_DEFAULT_DURATION[item.category];
  const frequency = FREQUENCY_OVERRIDES[item.slug] ?? CATEGORY_DEFAULT_FREQUENCY[item.category];
  const sensation = SENSATION_OVERRIDES[item.slug] ?? CATEGORY_DEFAULT_SENSATION[item.category];
  const considerations =
    CONSIDERATION_OVERRIDES[item.slug] ?? CATEGORY_DEFAULT_CONSIDERATIONS[item.category];
  const assessment = ASSESSMENT_OVERRIDES[item.slug] ?? CATEGORY_DEFAULT_ASSESSMENT[item.category];

  return {
    duration,
    frequency,
    sensation,
    considerations,
    assessment,
  };
}

function TreatmentCard({
  item,
  openLabel,
  featuredLabel,
  onOpen,
}: {
  item: TreatmentItem;
  openLabel: string;
  featuredLabel: string;
  onOpen: () => void;
}) {
  const meta = buildTreatmentMeta(item);

  return (
    <article className="surface-card group relative h-full rounded-[1.25rem] border border-[color:var(--color-line)]/70 bg-[color:var(--color-surface-strong)] px-4 py-4 shadow-[0_20px_44px_-34px_rgba(36,20,28,0.36)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-brand)]/34 hover:shadow-[0_24px_48px_-34px_rgba(36,20,28,0.42)] sm:px-5 sm:py-5">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-[1.02rem] leading-[1.2] font-semibold tracking-[-0.015em] text-[color:var(--color-foreground)]">{item.name}</h3>
        {item.featured ? (
          <span className="inline-flex h-7 shrink-0 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-brand)]/24 bg-[color:var(--color-brand-soft)] px-2.5 text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)]">
            {featuredLabel}
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">{item.shortDescription}</p>

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {item.benefits.slice(0, 3).map((benefit) => (
          <li
            key={benefit}
            className="rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-pill)] px-2.5 py-1 text-[0.66rem] leading-5 text-[color:var(--color-muted)]"
          >
            {benefit}
          </li>
        ))}
      </ul>

      <p className="mt-3 text-[0.72rem] leading-6 text-[color:var(--color-muted)]">
        <span className="font-semibold text-[color:var(--color-foreground)]">Duración:</span> {meta.duration}
      </p>

      <div className="mt-4">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex h-10 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-brand)]/26 bg-[color:var(--color-brand-soft)] px-4 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)] transition-colors duration-300 hover:border-[color:var(--color-brand)] hover:bg-[color:var(--color-brand)] hover:text-white"
        >
          {openLabel}
        </button>
      </div>
    </article>
  );
}

function HomeCard({
  item,
  featuredLabel,
  ctaLabel,
  href,
}: {
  item: TreatmentItem;
  featuredLabel: string;
  ctaLabel: string;
  href: string;
}) {
  return (
    <article className="surface-card relative h-full rounded-[1.2rem] px-4 py-4 sm:px-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[1rem] font-semibold tracking-[-0.015em] text-[color:var(--color-foreground)]">{item.name}</h3>
        {item.featured ? (
          <span className="inline-flex h-7 shrink-0 items-center rounded-[var(--radius-pill)] border border-[color:var(--color-brand)]/24 bg-[color:var(--color-brand-soft)] px-2.5 text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)]">
            {featuredLabel}
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-[0.87rem] leading-6 text-[color:var(--color-muted)]">{item.shortDescription}</p>

      <div className="mt-4">
        <Link
          href={href}
          className="inline-flex h-10 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-brand)]/26 bg-[color:var(--color-brand-soft)] px-4 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-brand)] transition-colors duration-300 hover:border-[color:var(--color-brand)] hover:bg-[color:var(--color-brand)] hover:text-white"
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}

export default function TreatmentsExplorer({
  content,
  mode = "page",
  bridgeHref,
  bridgeLabel,
  reserveHref = "/reservar",
  whatsappHref,
  treatmentsBasePath = "/tratamientos",
}: TreatmentsExplorerProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<TreatmentCategoryId>(
    content.categories[0]?.id ?? "estetica-normal",
  );
  const [activeTreatmentSlug, setActiveTreatmentSlug] = useState<string | null>(null);

  const treatmentsByCategory = useMemo(
    () =>
      Object.fromEntries(
        content.categories.map((category) => [
          category.id,
          content.treatments.filter((item) => item.category === category.id).sort((a, b) => a.order - b.order),
        ]),
      ) as Record<TreatmentCategory["id"], TreatmentItem[]>,
    [content.categories, content.treatments],
  );

  const activeCategory = useMemo(
    () => content.categories.find((category) => category.id === activeCategoryId) ?? content.categories[0],
    [activeCategoryId, content.categories],
  );

  const activeTreatments = useMemo(() => {
    const items = treatmentsByCategory[activeCategoryId] ?? [];
    if (mode !== "home") {
      return items;
    }

    const featured = items.filter((item) => item.featured);
    const source = featured.length >= 4 ? featured : items;
    return source.slice(0, 4);
  }, [activeCategoryId, mode, treatmentsByCategory]);

  const activeTreatment = useMemo(
    () => content.treatments.find((item) => item.slug === activeTreatmentSlug) ?? null,
    [activeTreatmentSlug, content.treatments],
  );

  const activeTreatmentCategory = useMemo(
    () =>
      activeTreatment
        ? content.categories.find((category) => category.id === activeTreatment.category) ?? null
        : null,
    [activeTreatment, content.categories],
  );

  useEffect(() => {
    if (mode !== "page" || typeof window === "undefined") {
      return;
    }

    const applyHashCategory = () => {
      const hashCategoryId = categoryIdFromHash(content.categories, window.location.hash);
      if (hashCategoryId) {
        setActiveCategoryId(hashCategoryId);
      }
    };

    applyHashCategory();
    window.addEventListener("hashchange", applyHashCategory);
    return () => {
      window.removeEventListener("hashchange", applyHashCategory);
    };
  }, [content.categories, mode]);

  const setCategory = (category: TreatmentCategory) => {
    setActiveCategoryId(category.id);

    if (mode === "page" && typeof window !== "undefined") {
      const hash = `#${categorySectionId(category)}`;
      window.history.replaceState(null, "", hash);
    }
  };

  if (mode === "home") {
    return (
      <section className="mt-7">
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
          {content.categories.map((category) => {
            const isActive = category.id === activeCategoryId;
            const count = treatmentsByCategory[category.id]?.length ?? 0;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setCategory(category)}
                className={cn(
                  "inline-flex h-10 shrink-0 items-center rounded-[var(--radius-pill)] border px-3.5 text-[0.65rem] font-semibold uppercase tracking-[0.08em] transition-colors duration-300",
                  isActive
                    ? "border-[color:var(--color-brand)] bg-[color:var(--color-brand)] text-white"
                    : "border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] text-[color:var(--color-muted)] hover:border-[color:var(--color-brand)]/48 hover:text-[color:var(--color-brand)]",
                )}
              >
                {category.name} ({count})
              </button>
            );
          })}
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {activeTreatments.map((item) => (
            <HomeCard
              key={item.slug}
              item={item}
              featuredLabel={content.featuredLabel}
              ctaLabel={content.cardCtaLabel}
              href={`${treatmentsBasePath}/${item.slug}`}
            />
          ))}
        </div>

        {bridgeHref && bridgeLabel ? (
          <div className="mt-5">
            <Link
              href={bridgeHref}
              className="inline-flex h-11 items-center justify-center rounded-[var(--radius-pill)] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-5 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-[color:var(--color-foreground)] transition-colors duration-300 hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
            >
              {bridgeLabel}
            </Link>
          </div>
        ) : null}
      </section>
    );
  }

  const modalMeta = activeTreatment ? buildTreatmentMeta(activeTreatment) : null;
  const modalIndicatedFor = activeTreatment ? INDICATED_FOR_OVERRIDES[activeTreatment.slug] ?? null : null;
  const modalGoals = activeTreatment
    ? GOAL_OVERRIDES[activeTreatment.slug] ?? [activeTreatment.shortDescription, activeTreatmentCategory?.intervention ?? ""].filter((entry) => Boolean(entry))
    : [];
  const modalBenefits = activeTreatment ? activeTreatment.benefits : [];

  return (
    <section className="mt-8 space-y-6">
      <article className="rounded-[1.35rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5 sm:py-5">
        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.11em] text-[color:var(--color-accent)]">
          {content.categoryNavLabel}
        </p>

        <div className="no-scrollbar mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-2.5">
          {content.categories.map((category) => {
            const count = treatmentsByCategory[category.id]?.length ?? 0;
            const isActive = category.id === activeCategoryId;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setCategory(category)}
                aria-pressed={isActive}
                className={cn(
                  "inline-flex min-h-[3.05rem] w-full items-center justify-center rounded-[var(--radius-pill)] border px-4 text-[0.69rem] font-semibold uppercase tracking-[0.08em] transition-[color,background-color,border-color,transform,box-shadow] duration-300",
                  isActive
                    ? "border-[color:var(--color-brand)] bg-[color:var(--color-brand)] text-white shadow-[0_18px_34px_-24px_rgba(73,34,53,0.74)]"
                    : "border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] text-[color:var(--color-muted)] hover:-translate-y-px hover:border-[color:var(--color-brand)]/46 hover:text-[color:var(--color-brand)]",
                )}
              >
                {category.name} ({count})
              </button>
            );
          })}
        </div>
      </article>

      {activeCategory ? (
        <article
          id={categorySectionId(activeCategory)}
          className="rounded-[1.35rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-5 sm:px-6"
        >
          <h3 className="text-[1.16rem] font-semibold tracking-[-0.02em] text-[color:var(--color-foreground)]">{activeCategory.name}</h3>
          <p className="mt-2 max-w-[62rem] text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{activeCategory.description}</p>

          <div className="mt-4 grid gap-2.5 lg:grid-cols-3">
            <p className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 py-3 text-[0.82rem] leading-6 text-[color:var(--color-muted)]">
              {activeCategory.profile}
            </p>
            <p className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 py-3 text-[0.82rem] leading-6 text-[color:var(--color-muted)]">
              {activeCategory.intervention}
            </p>
            <p className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-strong)] px-3.5 py-3 text-[0.82rem] leading-6 text-[color:var(--color-muted)]">
              {activeCategory.differentiation}
            </p>
          </div>
        </article>
      ) : null}

      {activeTreatments.length ? (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {activeTreatments.map((item) => (
            <TreatmentCard
              key={item.slug}
              item={item}
              openLabel={content.detail.openModal}
              featuredLabel={content.featuredLabel}
              onOpen={() => setActiveTreatmentSlug(item.slug)}
            />
          ))}
        </div>
      ) : (
        <article className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">
          {content.emptyStateLabel}
        </article>
      )}

      <PremiumModal
        open={Boolean(activeTreatment)}
        onClose={() => setActiveTreatmentSlug(null)}
        closeLabel={content.closeModalLabel}
        size="xl"
        label={activeTreatmentCategory?.name}
        title={activeTreatment?.name ?? ""}
      >
        {activeTreatment && modalMeta ? (
          <div className="space-y-5">
            <section className="rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
              <h4 className="text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalDescription}</h4>
              <p className="mt-2 text-[0.9rem] leading-7 text-[color:var(--color-muted)]">{activeTreatment.longDescription}</p>
            </section>

            <div className="grid gap-3 lg:grid-cols-2">
              <section className="rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
                <h4 className="text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalIndicatedFor}</h4>
                {modalIndicatedFor ? (
                  <ul className="mt-2 space-y-1.5 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">
                    {modalIndicatedFor.map((entry) => (
                      <li key={entry} className="flex items-start gap-2">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-brand)]" />
                        <span>{entry}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-[0.88rem] leading-7 text-[color:var(--color-muted)]">{activeTreatmentCategory?.profile}</p>
                )}
              </section>

              <section className="rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
                <h4 className="text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalGoals}</h4>
                <ul className="mt-2 space-y-1.5 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">
                  {modalGoals.map((goal) => (
                    <li key={goal} className="flex items-start gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-brand)]" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
                <h4 className="text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalBenefits}</h4>
                <ul className="mt-2 space-y-1.5 text-[0.86rem] leading-6 text-[color:var(--color-muted)]">
                  {modalBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-brand)]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
                <h4 className="text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalDuration}</h4>
                <p className="mt-2 text-[0.88rem] leading-7 text-[color:var(--color-muted)]">{modalMeta.duration}</p>

                <h4 className="mt-4 text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalFrequency}</h4>
                <p className="mt-2 text-[0.88rem] leading-7 text-[color:var(--color-muted)]">{modalMeta.frequency}</p>
              </section>

              <section className="rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
                <h4 className="text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalSensation}</h4>
                <p className="mt-2 text-[0.88rem] leading-7 text-[color:var(--color-muted)]">{modalMeta.sensation}</p>

                <h4 className="mt-4 text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalConsiderations}</h4>
                <p className="mt-2 text-[0.88rem] leading-7 text-[color:var(--color-muted)]">{modalMeta.considerations}</p>
              </section>
            </div>

            <section className="rounded-[1.05rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-4 py-4 sm:px-5">
              <h4 className="text-[0.86rem] font-semibold uppercase tracking-[0.09em] text-[color:var(--color-accent)]">{content.detail.modalAssessment}</h4>
              <p className="mt-2 text-[0.88rem] leading-7 text-[color:var(--color-muted)]">{modalMeta.assessment}</p>
            </section>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <Button
                href={reserveHref}
                size="md"
                trackingEvent={TRACK_EVENTS.CLICK_RESERVAR}
                trackingSource="tratamientos_modal_primary"
                trackingLabel={`reservar_${activeTreatment.slug}_modal`}
                className="h-11 w-full px-5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] sm:w-auto"
              >
                {content.detail.ctaPrimary}
              </Button>
              {whatsappHref ? (
                <Button
                  href={whatsappHref}
                  size="md"
                  variant="secondary"
                  trackingEvent={TRACK_EVENTS.CLICK_WHATSAPP}
                  trackingSource="tratamientos_modal_secondary"
                  trackingLabel={`whatsapp_${activeTreatment.slug}_modal`}
                  className="h-11 w-full px-5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] sm:w-auto"
                >
                  {content.detail.ctaSecondary}
                </Button>
              ) : null}
            </div>
          </div>
        ) : null}
      </PremiumModal>
    </section>
  );
}
