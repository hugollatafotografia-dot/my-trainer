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
      "Este sitio informa sobre servicios de estetica y depilacion laser en Andorra. Los datos de titularidad marcados como pendientes deben validarse antes de publicacion definitiva.",
    effectiveDateLabel: "Fecha de revision",
    effectiveDateValue: "26 de marzo de 2026",
    statusNote:
      "Documento preparado con maxima prudencia para Andorra. Requiere validacion final de asesoria juridica con datos societarios cerrados.",
    sections: [
      {
        title: "1. Titular del sitio web",
        paragraphs: [
          "Nombre comercial: Centros Ideal Andorra.",
          "Email de contacto: illa.carlemany@centresideal.com.",
          "Telefono: +376 688 080.",
          "Direccion operativa: Av. Carlemany, 70, AD700 Andorra.",
        ],
        bullets: [
          "Dato pendiente de validacion: denominacion social exacta.",
          "Dato pendiente de validacion: NRT.",
          "Dato pendiente de validacion: domicilio social completo.",
        ],
      },
      {
        title: "2. Objeto y alcance",
        paragraphs: [
          "La web ofrece informacion comercial y de orientacion sobre tratamientos esteticos no invasivos.",
          "La indicacion final de tratamiento se confirma siempre en valoracion presencial.",
        ],
      },
      {
        title: "3. Condiciones de uso",
        bullets: [
          "La persona usuaria se compromete a un uso licito y diligente del sitio.",
          "Se prohibe el uso del sitio para afectar su seguridad, disponibilidad o integridad.",
          "El centro puede actualizar contenidos, estructura o servicios sin preaviso.",
        ],
      },
      {
        title: "4. Propiedad intelectual e industrial",
        paragraphs: [
          "Marca, imagenes, contenidos y diseno estan protegidos por la normativa aplicable.",
          "No se permite reproduccion total o parcial sin autorizacion expresa de la titularidad.",
        ],
      },
      {
        title: "5. Responsabilidad",
        paragraphs: [
          "El centro aplica medidas razonables de calidad y seguridad, pero no garantiza ausencia absoluta de errores tecnicos.",
          "Los contenidos no sustituyen asesoramiento medico ni sanitario.",
        ],
      },
      {
        title: "6. Marco normativo de referencia",
        bullets: [
          "Constitucion del Principado de Andorra (art. 14, derecho a la intimidad).",
          "Llei 29/2021, del 28 d'octubre, qualificada de proteccio de dades personals.",
          "Llei 35/2014, del 27 de novembre, de serveis de confianca electronica (y modificaciones vigentes).",
        ],
      },
    ],
  },
  privacy: {
    title: "Politica de privacidad",
    intro:
      "Esta politica describe como se tratan datos personales en el contexto de consultas y gestion de citas del centro.",
    effectiveDateLabel: "Fecha de revision",
    effectiveDateValue: "26 de marzo de 2026",
    statusNote:
      "Estructura juridica lista para produccion. Pendiente completar identificacion del responsable con datos societarios definitivos.",
    sections: [
      {
        title: "1. Responsable del tratamiento",
        paragraphs: [
          "Responsable comercial: Centros Ideal Andorra.",
          "Canal de contacto para privacidad: illa.carlemany@centresideal.com.",
        ],
        bullets: [
          "Pendiente validar denominacion social y NRT.",
          "Pendiente validar si procede nombramiento formal de DPD.",
        ],
      },
      {
        title: "2. Datos que se pueden tratar",
        bullets: [
          "Identificativos y de contacto (nombre, telefono, email).",
          "Datos aportados en consulta sobre objetivos esteticos y disponibilidad de agenda.",
          "Datos tecnicos minimos de navegacion para seguridad y funcionamiento del sitio.",
        ],
      },
      {
        title: "3. Finalidades",
        bullets: [
          "Gestion de consultas previas y solicitud de valoracion.",
          "Coordinacion de agenda y seguimiento operativo del servicio.",
          "Mejora de experiencia web y medicion interna cuando exista consentimiento para analitica.",
        ],
      },
      {
        title: "4. Base juridica",
        bullets: [
          "Aplicacion de medidas precontractuales a peticion de la persona interesada.",
          "Consentimiento para tratamientos que lo requieran (p. ej. analitica no esencial).",
          "Interes legitimo en seguridad, prevencion de abuso y continuidad operativa.",
        ],
      },
      {
        title: "5. Conservacion",
        bullets: [
          "Consultas no convertidas en cita: plazo interno limitado y revisable.",
          "Datos vinculados a prestacion de servicio: conservacion segun obligaciones legales aplicables.",
          "Registros tecnicos: retencion minimizada segun necesidad operativa.",
        ],
      },
      {
        title: "6. Destinatarios y transferencias",
        paragraphs: [
          "No se comunican datos a terceros salvo obligacion legal o proveedores necesarios para la prestacion del servicio.",
          "Cuando intervengan encargados de tratamiento, se formalizan clausulas contractuales adecuadas.",
        ],
      },
      {
        title: "7. Derechos de las personas",
        bullets: [
          "Acceso, rectificacion, supresion, oposicion, limitacion y portabilidad cuando proceda.",
          "Canal de ejercicio: illa.carlemany@centresideal.com.",
          "Autoridad de control: Agencia Andorrana de Proteccio de Dades (APDA).",
        ],
      },
      {
        title: "8. Medidas de seguridad",
        bullets: [
          "Control de acceso, minimizacion de datos y registros tecnicos de actividad.",
          "Revisiones periodicas de configuracion y buenas practicas de seguridad.",
        ],
      },
    ],
  },
  cookies: {
    title: "Politica de cookies",
    intro:
      "Informacion sobre cookies y tecnologias equivalentes utilizadas en este sitio, con especial atencion a consentimiento y configuracion.",
    effectiveDateLabel: "Fecha de revision",
    effectiveDateValue: "26 de marzo de 2026",
    statusNote:
      "La web incluye banner de consentimiento y permite rechazar analitica no esencial. Debe revisarse periodicamente el inventario tecnico.",
    sections: [
      {
        title: "1. Que son",
        paragraphs: [
          "Las cookies son pequenos archivos que se almacenan en el navegador para recordar configuraciones o medir uso del sitio.",
        ],
      },
      {
        title: "2. Cookies y almacenamiento usados",
        bullets: [
          "Cookie tecnica de idioma: ideal_locale (necesaria para mostrar el sitio en el idioma seleccionado).",
          "Almacenamiento local de consentimiento: ideal.cookies.consent.v1.",
          "Almacenamiento local de analitica interna y sesion: solo si la persona acepta medicion.",
        ],
      },
      {
        title: "3. Categorias",
        bullets: [
          "Tecnicas necesarias: activas por defecto para funcionamiento basico.",
          "Analitica: desactivada por defecto hasta consentimiento expreso.",
        ],
      },
      {
        title: "4. Gestion del consentimiento",
        bullets: [
          "Puede aceptar todo o mantener solo esenciales desde el banner inicial.",
          "Puede cambiar su preferencia en cualquier momento desde el enlace de cookies del pie de pagina.",
        ],
      },
      {
        title: "5. Marco normativo",
        bullets: [
          "Llei 29/2021, del 28 d'octubre, qualificada de proteccio de dades personals.",
          "Normativa andorrana vigente en materia de servicios electronicos y privacidad aplicable al canal web.",
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
    title: "Politica de privacitat",
  },
  cookies: {
    ...esContent.cookies,
    title: "Politica de cookies",
  },
};

const frContent: LegalContent = {
  ...esContent,
  legalNotice: {
    ...esContent.legalNotice,
    title: "Mentions legales",
  },
  privacy: {
    ...esContent.privacy,
    title: "Politique de confidentialite",
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
