import type { Locale } from "@/lib/i18n/config";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  title: string;
  intro: string;
  effectiveDateLabel: string;
  effectiveDateValue: string;
  statusNote: string;
  pendingItems?: string[];
  sections: LegalSection[];
};

export type LegalContent = {
  legalNotice: LegalDocument;
  privacy: LegalDocument;
  cookies: LegalDocument;
};

const esContent: LegalContent = {
  legalNotice: {
    title: "Aviso legal",
    intro:
      "Este sitio web informa sobre servicios de estética y depilación laser prestados en Andorra. Se ha preparado con criterio de diligencia reforzada y debe completarse con los datos societarios definitivos antes de su cierre jurídico final.",
    effectiveDateLabel: "Fecha de revisión",
    effectiveDateValue: "26 de marzo de 2026",
    statusNote:
      "Base legal preparada para publicación profesional. Pendiente validación final por asesoría juridica local y cierre de datos registrales del responsable.",
    pendingItems: [
      "[PENDIENTE_VALIDAR] Denominacion social exacta del titular.",
      "[PENDIENTE_VALIDAR] NRT del responsable.",
      "[PENDIENTE_VALIDAR] Domicilio social completo.",
      "[PENDIENTE_VALIDAR] Datos de inscripción registral o licencia mercantil, si aplican.",
    ],
    sections: [
      {
        title: "1. Titularidad y datos de contacto",
        paragraphs: [
          "Nombre comercial: Centros Ideal Andorra.",
          "Canal general: illa.carlemany@centresideal.com.",
          "Telefono de contacto: +376 688 080.",
          "Direccion operativa informada: Av. Carlemany, 70, AD700 Andorra.",
          "Los datos marcados como pendientes deben integrarse antes de version legal definitiva.",
        ],
      },
      {
        title: "2. Objeto del sitio",
        paragraphs: [
          "La web tiene finalidad informativa, comercial y de pre-reserva de servicios esteticos.",
          "La información publicada no sustituye valoracion profesional individual ni asesoramiento médico.",
        ],
      },
      {
        title: "3. Condiciones de uso",
        bullets: [
          "La persona usuaria se compromete a usar el sitio de forma lícita y diligente.",
          "Queda prohibido cualquier uso que dañe, sature o comprometa seguridad, codigo o disponibilidad del servicio.",
          "El titular puede modificar contenidos, estructura y servicios para mejora operativa o cumplimiento normativo.",
        ],
      },
      {
        title: "4. Propiedad intelectual e industrial",
        bullets: [
          "Diseno, textos, marca, imagenes y elementos distintivos estan protegidos por normativa aplicable.",
          "No se autoriza reproducción, distribución o transformación sin permiso previo y expreso del titular.",
        ],
      },
      {
        title: "5. Disponibilidad, enlaces y responsabilidad",
        bullets: [
          "Se aplican medidas razonables para continuidad del servicio, sin garantizar ausencia absoluta de incidencias técnicas.",
          "El titular no responde por contenidos o políticas de terceros enlazados desde la web.",
          "La persona usuaria es responsable del uso que haga de la información publicada.",
        ],
      },
      {
        title: "6. Comunicaciones y marketing",
        bullets: [
          "Las comunicaciones comerciales solo se realizan conforme a base legitimadora válida o consentimiento cuando corresponda.",
          "La persona usuaria puede revocar permisos de comunicaciones no esenciales en cualquier momento.",
        ],
      },
      {
        title: "7. Marco normativo de referencia (Andorra)",
        bullets: [
          "Constitucion del Principado de Andorra (derecho a la intimidad y proteccion de la vida privada).",
          "Llei 29/2021, del 28 d'octubre, qualificada de proteccio de dades personals.",
          "Criterios y guías publicadas por la APDA para aviso legal, privacidad y cookies en entornos web.",
          "Resto de normativa andorrana vigente aplicable a servicios digitales, comercio electrónico y consumo.",
        ],
      },
    ],
  },
  privacy: {
    title: "Política de privacidad",
    intro:
      "Esta política explica como se tratan datos personales en la web y en la gestión de consultas, pre-reservas y seguimiento operativo del centro.",
    effectiveDateLabel: "Fecha de revisión",
    effectiveDateValue: "26 de marzo de 2026",
    statusNote:
      "Documento reforzado para contexto andorrano (Llei 29/2021). Requiere cierre de datos societarios y validación de asesoría legal antes de version final irreversible.",
    pendingItems: [
      "[PENDIENTE_VALIDAR] Identificacion completa del responsable (razon social y NRT).",
      "[PENDIENTE_VALIDAR] Confirmacion de Delegado/a de Proteccion de Datos (si procede por obligacion legal).",
      "[PENDIENTE_VALIDAR] Inventario final de encargados de tratamiento y herramientas activas.",
    ],
    sections: [
      {
        title: "1. Responsable del tratamiento",
        paragraphs: [
          "Responsable comercial: Centros Ideal Andorra.",
          "Contacto general: illa.carlemany@centresideal.com.",
          "Canal de privacidad: illa.carlemany@centresideal.com (hasta asignacion de canal especifico si procede).",
        ],
      },
      {
        title: "2. Categorias de datos tratados",
        bullets: [
          "Datos identificativos y de contacto: nombre, telefono, email.",
          "Datos de agenda y preferencia de cita (franja, profesional, disponibilidad).",
          "Datos de contexto de consulta aportados voluntariamente por la persona usuaria.",
          "Datos tecnicos minimos para seguridad, idioma y funcionamiento del sitio.",
        ],
      },
      {
        title: "3. Finalidades del tratamiento",
        bullets: [
          "Atender consultas y solicitudes de información.",
          "Gestionar pre-reservas, coordinacion de agenda y seguimiento de atencion.",
          "Mantener trazabilidad operativa del servicio y continuidad asistencial no sanitaria.",
          "Mejorar experiencia web con analítica opcional cuando exista consentimiento valido.",
        ],
      },
      {
        title: "4. Base legitimadora",
        bullets: [
          "Ejecucion de medidas precontractuales solícitadas por la persona interesada.",
          "Cumplimiento de obligaciones legales aplicables.",
          "Interes legitimo en seguridad, prevencion de abuso y organizacion interna.",
          "Consentimiento para finalidades opcionales (por ejemplo, analítica no esencial).",
        ],
      },
      {
        title: "5. Conservacion de datos",
        bullets: [
          "Consultas sin conversion a cita: conservación limitada y revisable en periodos internos de depuracion.",
          "Datos vinculados a servicio: conservación conforme a obligaciones legales, fiscales y de responsabilidad aplicables.",
          "Registros tecnicos y seguridad: retencion minimizada y proporcionada a la finalidad.",
        ],
      },
      {
        title: "6. Destinatarios y encargados",
        bullets: [
          "No se ceden datos a terceros salvo obligacion legal o necesidad operativa vinculada al servicio.",
          "Cuando intervienen proveedores, se formalizan clausulas de encargo y deberes de confidencialidad.",
          "Se aplica principio de minimización: acceso solo a quien lo necesita por funcion.",
        ],
      },
      {
        title: "7. Transferencias internacionales",
        paragraphs: [
          "Con caracter general no se preve transferencias internacionales fuera de Andorra sin base legitimadora y garantias adecuadas.",
          "Si se implantaran herramientas con tratamiento internacional, esta política se actualizara y se informara expresamente.",
        ],
      },
      {
        title: "8. Derechos de las personas interesadas",
        bullets: [
          "Derechos de acceso, rectificacion, supresion, oposicion, limitacion y portabilidad cuando resulten aplicables.",
          "El ejercicio puede solícitarse por escrito al canal de privacidad indicado.",
          "Si no se obtiene respuesta satisfactoria, puede acudirse a la APDA como autoridad de control competente.",
          "Datos de referencia APDA: apda@apda.ad | +376 808 115.",
        ],
      },
      {
        title: "9. Seguridad y confidencialidad",
        bullets: [
          "Control de acceso, revisiónes de configuración y medidas de minimización de datos.",
          "Buenas practicas de seguridad aplicadas a formularios, almacenamiento y operaciones internas.",
          "Compromiso de confidencialidad del personal y colaboradores con acceso autorizado.",
        ],
      },
      {
        title: "10. Actualizaciones de esta política",
        paragraphs: [
          "Esta política puede actualizarse para reflejar cambios normativos, tecnicos o de operativa interna.",
          "La fecha de revisión visible en cabecera indica la última actualización publicada.",
        ],
      },
    ],
  },
  cookies: {
    title: "Política de cookies",
    intro:
      "Esta política detalla el uso de cookies y almacenamiento local en la web, el sistema de consentimiento y la forma de gestiónar preferencias en cualquier momento.",
    effectiveDateLabel: "Fecha de revisión",
    effectiveDateValue: "26 de marzo de 2026",
    statusNote:
      "Modelo alineado con recomendaciones APDA para web: consentimiento granular, rechazo de opcionales y acceso permanente a gestión de preferencias.",
    pendingItems: [
      "[PENDIENTE_VALIDAR] Inventario final de herramientas de medición si se amplia analítica.",
      "[PENDIENTE_VALIDAR] Política de terceros concreta (si se incorporan servicios externos con cookies propias).",
    ],
    sections: [
      {
        title: "1. Qué son las cookies",
        paragraphs: [
          "Son ficheros o identificadores que el navegador almacena para recordar configuraciónes o apoyar funciones técnicas y de medición.",
          "Tambien se utiliza almacenamiento local para registrar preferencias de consentimiento.",
        ],
      },
      {
        title: "2. Categorias aplicadas en esta web",
        bullets: [
          "Técnicas necesarias: imprescindibles para funcionamiento básico (idioma, seguridad, continuidad de sesión funcional).",
          "Analitica opcional: solo se activa cuando la persona usuaria acepta esta categoría.",
          "No se condiciona la navegacion a aceptar cookies opcionales (sin cookie wall).",
        ],
      },
      {
        title: "3. Inventario tecnico actual",
        bullets: [
          "ideal_locale: cookie técnica necesaria para recordar idioma.",
          "ideal.cookies.consent.v1: almacenamiento local para guardar preferencias de cookies.",
          "Registros de analítica interna: únicamente tras consentimiento expreso para categoría analítica.",
        ],
      },
      {
        title: "4. Gestion del consentimiento",
        bullets: [
          "Banner inicial con acciones claras: aceptar todo, rechazar opcionales y guardar seleccion.",
          "Panel de preferencias accesible de forma permanente desde el footer (Gestionar cookies).",
          "La retirada o cambio de consentimiento puede realizarse en cualquier momento.",
        ],
      },
      {
        title: "5. Conservacion y revisión",
        bullets: [
          "Las preferencias se conservan hasta que la persona usuaria las modifique o limpie el navegador.",
          "El inventario de cookies se revisa periódicamente para mantener coherencia legal y técnica.",
        ],
      },
      {
        title: "6. Derechos y canales",
        bullets: [
          "Las solicitudes de privacidad y derechos pueden enviarse al canal indicado en la política de privacidad.",
          "La APDA actua como autoridad de control de referencia en Andorra.",
        ],
      },
      {
        title: "7. Marco normativo de referencia",
        bullets: [
          "Llei 29/2021, del 28 d'octubre, qualificada de proteccio de dades personals.",
          "Modelos y recomendaciones APDA para aviso legal, política de privacidad y política de cookies en planes web.",
          "Resto de normativa andorrana vigente aplicable a servicios digitales y comunicaciones electrónicas.",
        ],
      },
    ],
  },
};

const caContent: LegalContent = {
  ...esContent,
  legalNotice: {
    ...esContent.legalNotice,
    title: "Avis legal",
  },
  privacy: {
    ...esContent.privacy,
    title: "Política de privacitat",
  },
  cookies: {
    ...esContent.cookies,
    title: "Política de cookies",
  },
};

const frContent: LegalContent = {
  ...esContent,
  legalNotice: {
    ...esContent.legalNotice,
    title: "Mentions légales",
  },
  privacy: {
    ...esContent.privacy,
    title: "Politique de confidentialité",
  },
  cookies: {
    ...esContent.cookies,
    title: "Politique de cookies",
  },
};

const legalByLocale: Record<Locale, LegalContent> = {
  es: esContent,
  ca: caContent,
  fr: frContent,
};

export function getLegalContent(locale: Locale): LegalContent {
  return legalByLocale[locale] ?? esContent;
}
