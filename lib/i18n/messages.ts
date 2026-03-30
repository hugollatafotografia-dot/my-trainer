import { defaultLocale, type Locale } from "./config";

export type SiteDictionary = {
  languageLabel: string;
  localeName: string;
  seo: {
    title: string;
    description: string;
  };
  brand: {
    legalName: string;
    heroLine: string;
    specialty: string;
    location: string;
    address: string;
    floor: string;
    phoneDisplay: string;
    phoneIntl: string;
    whatsappNumber: string;
    email: string;
    hoursPending: string;
  };
  nav: {
    treatments: string;
    about: string;
    results: string;
    contact: string;
    book: string;
  };
  legal: {
    legalNotice: string;
    privacy: string;
    cookies: string;
  };
  cta: {
    book: string;
    whatsapp: string;
    viewTreatments: string;
    viewResults: string;
    confirmWhatsapp: string;
  };
  global: {
    noCommitment: string;
    firstVisit: string;
    contactDirect: string;
  };
  footer: {
    topEyebrow: string;
    topTitle: string;
    description: string;
    navigation: string;
    legal: string;
    contact: string;
    rights: string;
  };
  whatsapp: {
    floatingLabel: string;
    supportLabel: string;
    supportTitle: string;
    supportDescription: string;
    supportHumanNotice: string;
    supportFutureNotice: string;
  };
  chat: {
    launcherLabel: string;
    launcherAriaLabel: string;
    panelLabel: string;
    panelTitle: string;
    panelDescription: string;
    welcomeMessage: string;
    inputPlaceholder: string;
    inputAriaLabel: string;
    sendLabel: string;
    closeLabel: string;
    resetLabel: string;
    thinkingLabel: string;
    errorMessage: string;
    rateLimitError: string;
    maxLengthError: string;
    openInContactLabel: string;
    openInContactDescription: string;
    bookingHint: string;
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      highlights: string[];
      panelEyebrow: string;
      panelDescription: string;
    };
    firstVisit: {
      label: string;
      title: string;
      cards: { title: string; description: string }[];
      note: string;
    };
    method: {
      label: string;
      title: string;
      pillars: { id: string; title: string; description: string }[];
    };
    treatments: {
      label: string;
      title: string;
      lines: { name: string; objective: string; session: string }[];
      operationLabel: string;
      operationSignals: { label: string; value: string }[];
    };
    team: {
      label: string;
      title: string;
      description: string;
      members: {
        name: string;
        role: string;
        focus: string;
        image: string;
        alt: string;
      }[];
    };
    process: {
      label: string;
      title: string;
      steps: { id: string; title: string; description: string }[];
      cardLabel: string;
    };
    closing: {
      label: string;
      title: string;
      description: string;
    };
  };
  treatmentsPage: {
    hero: {
      label: string;
      title: string;
      description: string;
      panelEyebrow: string;
      panelDescription: string;
    };
    lines: {
      label: string;
      title: string;
      description: string;
      detail: string;
    };
    method: {
      label: string;
      title: string;
      description: string;
      phaseLabel: string;
      phases: { id: string; title: string; description: string }[];
    };
    closing: {
      label: string;
      title: string;
      description: string;
    };
  };
  treatmentDetail: {
    summaryLabel: string;
    summaryTitle: string;
    goalsLabel: string;
    goalsTitle: string;
    closingLabel: string;
    closingTitle: string;
    closingDescription: string;
    items: Record<
      string,
      {
        label: string;
        title: string;
        summary: string;
        duration: string;
        cadence: string;
        focus: string[];
        indications: string[];
        image: string;
        imageAlt: string;
      }
    >;
  };
  resultsPage: {
    hero: {
      label: string;
      title: string;
      description: string;
      panelEyebrow: string;
      panelDescription: string;
    };
    documentation: {
      label: string;
      title: string;
      description: string;
      pillars: { title: string; description: string }[];
    };
    visual: {
      label: string;
      title: string;
      description: string;
      assets: { id: string; label: string; src: string; alt: string }[];
    };
    transparency: {
      label: string;
      title: string;
      description: string;
      rows: string[];
    };
    closing: {
      label: string;
      title: string;
      description: string;
    };
  };
  aboutPage: {
    hero: {
      label: string;
      title: string;
      description: string;
      panelEyebrow: string;
      panelDescription: string;
    };
    method: {
      label: string;
      title: string;
      description: string;
      principles: { title: string; description: string }[];
    };
    identity: {
      label: string;
      title: string;
      highlights: string[];
    };
    closing: {
      label: string;
      title: string;
      description: string;
    };
  };
  contactPage: {
    hero: {
      label: string;
      title: string;
      description: string;
      panelEyebrow: string;
      panelDescription: string;
    };
    channels: {
      label: string;
      title: string;
      description: string;
      rows: { label: string; value: string; note: string }[];
    };
    process: {
      label: string;
      title: string;
      description: string;
      steps: { id: string; title: string; description: string }[];
    };
    support: {
      label: string;
      title: string;
      description: string;
    };
    closing: {
      label: string;
      title: string;
      description: string;
    };
  };
  bookingPage: {
    hero: {
      label: string;
      title: string;
      description: string;
      panelEyebrow: string;
      panelDescription: string;
    };
    includes: {
      label: string;
      title: string;
      description: string;
      rows: string[];
    };
    process: {
      label: string;
      title: string;
      description: string;
      steps: { id: string; title: string; description: string }[];
    };
    closing: {
      label: string;
      title: string;
      description: string;
    };
  };
  legalPages: {
    legalNotice: {
      title: string;
      intro: string;
      holderTitle: string;
      holderDescription: string;
      conditionsTitle: string;
      conditionsIntro: string;
      useTitle: string;
      useDescription: string;
      intellectualTitle: string;
      intellectualDescription: string;
    };
    privacy: {
      title: string;
      intro: string;
      dataTitle: string;
      dataDescription: string;
      purposeTitle: string;
      purposeDescription: string;
      rightsTitle: string;
      rightsIntro: string;
      rightsCardTitle: string;
      rightsCardDescription: string;
    };
    cookies: {
      title: string;
      intro: string;
      technicalTitle: string;
      technicalDescription: string;
      analyticsTitle: string;
      analyticsDescription: string;
      consentTitle: string;
      consentDescription: string;
      configTitle: string;
      configIntro: string;
      configCardTitle: string;
      configCardDescription: string;
    };
  };
};

const baseBrand = {
  legalName: "Centros Ideal Andorra",
  heroLine: "Medicina estética y láser de diodo",
  specialty: "Depilación láser diodo y estética avanzada",
  location: "Centre Comercial Illa Carlemany, Escaldes-Engordany, Andorra",
  address: "Av. Carlemany, 70, AD700 Andorra",
  floor: "Segunda planta",
  phoneDisplay: "688 080",
  phoneIntl: "+376 688 080",
  whatsappNumber: "376688080",
  email: "illa.carlemany@centresideal.com",
};

export const dictionaries: Record<string, SiteDictionary> = {
  es: {
    languageLabel: "Idioma",
    localeName: "Español",
    seo: {
      title: "Centros Ideal Andorra",
      description:
        "Centros Ideal Andorra: depilación láser diodo y estética avanzada en Illa Carlemany, con valoración profesional y seguimiento clínico.",
    },
    brand: {
      ...baseBrand,
      hoursPending: "Horario en validación final. Consulta disponibilidad por WhatsApp.",
    },
    nav: {
      treatments: "Tratamientos",
      about: "Sobre nosotros",
      results: "Resultados",
      contact: "Contacto",
      book: "Reservar",
    },
    legal: {
      legalNotice: "Aviso legal",
      privacy: "Privacidad",
      cookies: "Cookies",
    },
    cta: {
      book: "Reservar valoración",
      whatsapp: "WhatsApp",
      viewTreatments: "Ver tratamientos",
      viewResults: "Ver resultados",
      confirmWhatsapp: "Confirmar por WhatsApp",
    },
    global: {
      noCommitment: "Sin compromiso.",
      firstVisit: "Primera visita",
      contactDirect: "Contacto directo",
    },
    footer: {
      topEyebrow: "Centros Ideal Andorra",
      topTitle: "Reserva valoración o consulta por WhatsApp.",
      description:
        "Centro especializado en depilación láser diodo y estética avanzada con criterio clínico y atención personalizada.",
      navigation: "Navegación",
      legal: "Legal",
      contact: "Contacto",
      rights: "Todos los derechos reservados.",
    },
    whatsapp: {
      floatingLabel: "Atención WhatsApp",
      supportLabel: "Canal de asistencia",
      supportTitle: "Soporte operativo por WhatsApp",
      supportDescription:
        "Canal principal para resolver dudas, coordinar valoración y confirmar agenda.",
      supportHumanNotice:
        "Actualmente la atención la gestiona el equipo del centro.",
      supportFutureNotice:
        "Estructura preparada para incorporar una capa de asistencia avanzada en futuras fases.",
    },
    chat: {
      launcherLabel: "Asistente",
      launcherAriaLabel: "Abrir asistente digital",
      panelLabel: "Asistente digital",
      panelTitle: "Orientación inmediata",
      panelDescription:
        "Te ayudo con tratamientos, tiempos orientativos y cómo reservar tu valoración.",
      welcomeMessage:
        "Hola, soy el asistente digital de Centros Ideal Andorra. Puedo orientarte sobre tratamientos y proceso de reserva.",
      inputPlaceholder: "Escribe tu consulta",
      inputAriaLabel: "Mensaje para el asistente",
      sendLabel: "Enviar",
      closeLabel: "Cerrar",
      resetLabel: "Reiniciar",
      thinkingLabel: "Pensando...",
      errorMessage:
        "Ahora mismo no he podido responder. Inténtalo de nuevo en unos segundos.",
      rateLimitError:
        "Has enviado demasiadas consultas seguidas. Espera un minuto e inténtalo de nuevo.",
      maxLengthError: "El mensaje supera la longitud permitida",
      openInContactLabel: "Abrir asistente",
      openInContactDescription:
        "Disponible para resolver dudas frecuentes antes de reservar.",
      bookingHint:
        "La indicación definitiva se confirma en la valoración presencial del centro.",
    },
    home: {
      hero: {
        eyebrow: "Centros Ideal Andorra · Illa Carlemany",
        title: "Depilación láser diodo y estética avanzada.",
        description: "Valoración inicial de 30 minutos con criterio profesional.",
        highlights: [
          "Centre Comercial Illa Carlemany",
          "Av. Carlemany, 70 · 2ª planta",
        ],
        panelEyebrow: "Primera visita",
        panelDescription: "Diagnóstico, pauta y recomendación personalizada.",
      },
      firstVisit: {
        label: "Primera visita",
        title: "Valoración clínica clara.",
        cards: [
          {
            title: "Diagnóstico",
            description: "Evaluación de necesidades y objetivo prioritario.",
          },
          {
            title: "Plan recomendado",
            description: "Pauta inicial, frecuencia y marco de inversión.",
          },
        ],
        note: "Disponibilidad sujeta a agenda del centro.",
      },
      method: {
        label: "Método",
        title: "Protocolo con control y seguimiento.",
        pillars: [
          {
            id: "01",
            title: "Valoración individual",
            description: "Cada caso se define por diagnóstico.",
          },
          {
            id: "02",
            title: "Aplicación precisa",
            description: "Técnica ajustada al objetivo clínico.",
          },
        ],
      },
      treatments: {
        label: "Tratamientos",
        title: "Líneas principales.",
        lines: [
          {
            name: "Depilación láser diodo",
            objective: "Protocolo por zonas con seguimiento.",
            session: "Sesión según zona",
          },
          {
            name: "Rejuvenecimiento facial",
            objective: "Luminosidad, textura y tono.",
            session: "60-75 min",
          },
          {
            name: "Remodelación corporal",
            objective: "Drenaje y definición.",
            session: "50-60 min",
          },
        ],
        operationLabel: "Operativa real",
        operationSignals: [
          {
            label: "Dirección",
            value: "Av. Carlemany, 70, AD700 Andorra",
          },
          {
            label: "Ubicación",
            value: "Centre Comercial Illa Carlemany · segunda planta",
          },
          {
            label: "Horario",
            value: "Pendiente de validación final.",
          },
        ],
      },
      team: {
        label: "Equipo",
        title: "Personas reales detrás del centro.",
        description: "Estructura preparada para fichas profesionales validadas.",
        members: [
          {
            name: "Coordinación de centro",
            role: "Gestión de agenda y seguimiento",
            focus: "Acompañamiento desde la valoración inicial.",
            image: "/images/pages/hero/equipo/equipo-eli.png",
            alt: "Equipo de atención en Centros Ideal Andorra",
          },
          {
            name: "Especialista láser diodo",
            role: "Depilación láser",
            focus: "Protocolos por zonas con criterio técnico.",
            image: "/images/pages/hero/equipo/equipo-jaquie-20260326.png",
            alt: "Especialista aplicando protocolo láser",
          },
          {
            name: "Especialista estética avanzada",
            role: "Facial y corporal",
            focus: "Planes de tratamiento personalizados.",
            image: "/images/pages/hero/equipo/equipo-karen-20260326.png",
            alt: "Especialista en cabina de estética avanzada",
          },
        ],
      },
      process: {
        label: "Proceso",
        title: "Solicitud, confirmación y valoración.",
        steps: [
          {
            id: "01",
            title: "Solicitud",
            description: "Objetivo y franja horaria.",
          },
          {
            id: "02",
            title: "Confirmación",
            description: "Disponibilidad y condiciones.",
          },
          {
            id: "03",
            title: "Valoración",
            description: "Diagnóstico y recomendación final.",
          },
        ],
        cardLabel: "Canal directo",
      },
      closing: {
        label: "Reserva",
        title: "Reserva valoración profesional.",
        description: "Confirmación según agenda disponible.",
      },
    },
    treatmentsPage: {
      hero: {
        label: "Tratamientos",
        title: "Protocolos con criterio clínico.",
        description: "Indicación personalizada tras valoración.",
        panelEyebrow: "Duración",
        panelDescription: "Sesiones definidas según zona y protocolo.",
      },
      lines: {
        label: "Líneas principales",
        title: "Tratamientos de referencia.",
        description: "Plan definitivo en consulta.",
        detail: "Ver detalle",
      },
      method: {
        label: "Método",
        title: "Proceso en tres fases.",
        description: "Valoración, plan y seguimiento.",
        phaseLabel: "Fase",
        phases: [
          {
            id: "01",
            title: "Valoración",
            description: "Diagnóstico y objetivo prioritario.",
          },
          {
            id: "02",
            title: "Plan clínico",
            description: "Frecuencia y pauta por fases.",
          },
          {
            id: "03",
            title: "Seguimiento",
            description: "Ajustes por evolución observada.",
          },
        ],
      },
      closing: {
        label: "Reserva",
        title: "Confirma tu valoración inicial.",
        description: "Sin compromiso.",
      },
    },
    treatmentDetail: {
      summaryLabel: "Resumen clínico",
      summaryTitle: "Indicaciones frecuentes.",
      goalsLabel: "Objetivos de tratamiento",
      goalsTitle: "Objetivos principales.",
      closingLabel: "Reserva",
      closingTitle: "Solicita tu valoración.",
      closingDescription: "Recomendación final en consulta.",
      items: {
        "rejuvenecimiento-facial": {
          label: "Tratamiento facial",
          title: "Rejuvenecimiento y luminosidad",
          summary: "Mejora progresiva de textura, tono y firmeza.",
          duration: "60-75 min",
          cadence: "Frecuencia tras valoración",
          focus: ["Luminosidad", "Textura", "Tono uniforme"],
          indications: [
            "Piel apagada o irregular.",
            "Pérdida de confort y elasticidad.",
            "Necesidad de mantenimiento facial profesional.",
          ],
          image: "/images/pages/tratamientos/hero/hero-tratamientos-esteticos.png",
          imageAlt: "Tratamiento facial en cabina estética",
        },
        "remodelacion-corporal": {
          label: "Tratamiento corporal",
          title: "Remodelación localizada",
          summary: "Trabajo por zonas con enfoque no invasivo.",
          duration: "50-60 min",
          cadence: "Pauta por fases",
          focus: ["Drenaje", "Definición", "Confort corporal"],
          indications: [
            "Retención y sensación de pesadez.",
            "Necesidad de definición localizada.",
            "Protocolo corporal de mantenimiento.",
          ],
          image: "/images/pages/tratamientos/proceso/flujo-proceso-tratamiento.png",
          imageAlt: "Procedimiento de remodelación corporal",
        },
        "piel-sensible": {
          label: "Tratamiento dermocalmante",
          title: "Calma y barrera cutánea",
          summary: "Protocolo conservador para piel sensible.",
          duration: "50-55 min",
          cadence: "Ajustes por tolerancia",
          focus: ["Calma", "Reparación", "Confort"],
          indications: [
            "Rojeces y sensibilidad recurrente.",
            "Tirantez o disconfort cutáneo.",
            "Piel reactiva con necesidad de soporte de barrera.",
          ],
          image: "/images/pages/hero/primera-visita/sala-valoracion-estetica.png",
          imageAlt: "Evaluación de piel sensible en cabina",
        },
      },
    },
    resultsPage: {
      hero: {
        label: "Resultados",
        title: "Resultados con criterio.",
        description: "Documentación clínica y seguimiento.",
        panelEyebrow: "Marco clínico",
        panelDescription: "Diagnóstico, seguimiento y revisión.",
      },
      documentation: {
        label: "Documentación",
        title: "Cómo medimos evolución.",
        description: "Registro aplicado en consulta.",
        pillars: [
          { title: "Diagnóstico inicial", description: "Punto de partida documentado." },
          { title: "Seguimiento", description: "Control por fases." },
          { title: "Criterio de publicación", description: "Solo casos autorizados." },
        ],
      },
      visual: {
        label: "Documentación visual",
        title: "Material clínico autorizado.",
        description: "Registros editoriales sujetos a autorización.",
        assets: [
          {
            id: "registro_1",
            label: "Registro 01",
            src: "/images/pages/resultados/comparativas/comparativa-antes-tratamiento.png",
            alt: "Registro clínico de evolución",
          },
          {
            id: "registro_2",
            label: "Registro 02",
            src: "/images/pages/resultados/comparativas/comparativa-despues-tratamiento.png",
            alt: "Seguimiento visual autorizado",
          },
        ],
      },
      transparency: {
        label: "Transparencia",
        title: "Comunicación responsable.",
        description: "Información clínica y expectativas realistas.",
        rows: [
          "No se publican promesas de resultado.",
          "La evolución depende del caso clínico.",
          "La indicación final se confirma en consulta.",
        ],
      },
      closing: {
        label: "Reserva",
        title: "Solicita una valoración individual.",
        description: "Recomendación en consulta.",
      },
    },
    aboutPage: {
      hero: {
        label: "Sobre nosotros",
        title: "Centro de estética avanzada en Illa Carlemany.",
        description: "Depilación láser diodo y tratamientos personalizados.",
        panelEyebrow: "Centro",
        panelDescription: "Atención profesional y seguimiento.",
      },
      method: {
        label: "Forma de trabajo",
        title: "Criterio, método y control.",
        description: "Estructura clínica estable.",
        principles: [
          { title: "Diagnóstico experto", description: "Valoración clínica previa." },
          { title: "Plan por fases", description: "Objetivo, frecuencia y revisión." },
          { title: "Seguimiento", description: "Ajustes por evolución." },
        ],
      },
      identity: {
        label: "Identidad del centro",
        title: "Confianza y continuidad.",
        highlights: [
          "Cabinas individuales y atención personalizada.",
          "Depilación láser diodo y estética avanzada.",
          "Coordinación directa por WhatsApp.",
        ],
      },
      closing: {
        label: "Contacto",
        title: "Consulta tu caso con el centro.",
        description: "Respuesta según disponibilidad.",
      },
    },
    contactPage: {
      hero: {
        label: "Contacto",
        title: "Canal directo con el centro.",
        description: "Atención previa a reserva y seguimiento operativo.",
        panelEyebrow: "Atención",
        panelDescription: "Respuesta por horario y agenda.",
      },
      channels: {
        label: "Canales",
        title: "Contacto operativo.",
        description: "Información útil antes de confirmar.",
        rows: [
          { label: "WhatsApp", value: "688 080", note: "Canal preferente." },
          { label: "Teléfono", value: "688 080", note: "Atención por horario." },
          { label: "Email", value: "illa.carlemany@centresideal.com", note: "Consultas generales." },
          { label: "Dirección", value: "Av. Carlemany, 70, AD700 Andorra", note: "Centre Comercial Illa Carlemany · segunda planta." },
          { label: "Horario", value: "Pendiente de validación", note: "Se confirmará en actualización oficial." },
        ],
      },
      process: {
        label: "Proceso",
        title: "Respuesta y confirmación.",
        description: "Secuencia breve.",
        steps: [
          { id: "01", title: "Solicitud", description: "Objetivo y franja." },
          { id: "02", title: "Respuesta", description: "Disponibilidad y condiciones." },
          { id: "03", title: "Confirmación", description: "Reserva final." },
        ],
      },
      support: {
        label: "WhatsApp",
        title: "Canal preparado para asistencia avanzada.",
        description:
          "La base de contacto está estructurada para incorporar en el futuro automatización de consultas recurrentes sin perder control del equipo.",
      },
      closing: {
        label: "Reserva",
        title: "Confirma tu valoración inicial.",
        description: "Sin compromiso.",
      },
    },
    bookingPage: {
      hero: {
        label: "Reservar valoración",
        title: "Reserva clara y sin fricción.",
        description: "Confirmación por WhatsApp.",
        panelEyebrow: "Valoración",
        panelDescription: "Duración orientativa de 30 minutos.",
      },
      includes: {
        label: "Qué incluye",
        title: "Primera visita",
        description: "Información antes de decidir tratamiento.",
        rows: [
          "Diagnóstico facial o corporal.",
          "Objetivo prioritario y pauta inicial.",
          "Inversión orientativa.",
        ],
      },
      process: {
        label: "Proceso",
        title: "Solicitud, confirmación y consulta.",
        description: "Secuencia simple.",
        steps: [
          { id: "01", title: "Solicitud", description: "Objetivo y franja." },
          { id: "02", title: "Confirmación", description: "Horario y condiciones." },
          { id: "03", title: "Consulta", description: "Diagnóstico y recomendación." },
        ],
      },
      closing: {
        label: "Confirmación",
        title: "Reserva tu valoración ahora.",
        description: "Sin compromiso.",
      },
    },
    legalPages: {
      legalNotice: {
        title: "Aviso legal",
        intro: "Información general sobre titularidad, uso del sitio y condiciones aplicables.",
        holderTitle: "Identificación del titular",
        holderDescription:
          "Titular: Centros Ideal Andorra. Contacto: illa.carlemany@centresideal.com · +376 688 080.",
        conditionsTitle: "Condiciones generales",
        conditionsIntro:
          "El acceso y la navegación implican un uso responsable del contenido y respeto a la normativa vigente.",
        useTitle: "Uso adecuado",
        useDescription:
          "El usuario se compromete a un uso lícito del sitio y a no alterar su funcionamiento.",
        intellectualTitle: "Propiedad intelectual",
        intellectualDescription:
          "Textos, marcas e identidad visual están protegidos conforme a la legislación aplicable.",
      },
      privacy: {
        title: "Política de privacidad",
        intro: "Política sobre recogida y tratamiento de datos personales del usuario.",
        dataTitle: "Datos tratados",
        dataDescription:
          "Datos identificativos y de contacto facilitados en consultas o solicitudes de cita.",
        purposeTitle: "Finalidad",
        purposeDescription:
          "Gestión de consultas, reservas y comunicaciones vinculadas al servicio solicitado.",
        rightsTitle: "Gestión de derechos",
        rightsIntro:
          "El usuario puede ejercer sus derechos de acceso, rectificación, supresión y oposición por canal de contacto oficial.",
        rightsCardTitle: "Ejercicio de derechos",
        rightsCardDescription:
          "Las solicitudes se atenderán según normativa vigente y plazos aplicables.",
      },
      cookies: {
        title: "Política de cookies",
        intro: "Información sobre uso de cookies técnicas y de medición en el sitio.",
        technicalTitle: "Cookies técnicas",
        technicalDescription:
          "Necesarias para el funcionamiento básico y la seguridad de navegación.",
        analyticsTitle: "Cookies analíticas",
        analyticsDescription:
          "Permiten analizar uso del sitio y mejorar rendimiento y experiencia.",
        consentTitle: "Gestión del consentimiento",
        consentDescription:
          "El usuario puede aceptar, rechazar o ajustar preferencias en el panel de consentimiento.",
        configTitle: "Configuración",
        configIntro:
          "La configuración puede modificarse en cualquier momento desde el gestor de cookies.",
        configCardTitle: "Detalle de cookies",
        configCardDescription:
          "Se detallan categorías, duración y finalidad según las cookies activas en cada momento.",
      },
    },
  },
  ca: {
    languageLabel: "Idioma",
    localeName: "Català",
    seo: {
      title: "Centros Ideal Andorra",
      description:
        "Centros Ideal Andorra: depilació làser díode i estètica avançada a Illa Carlemany, amb valoració professional i seguiment clínic.",
    },
    brand: {
      ...baseBrand,
      hoursPending: "Horari en validació final. Consulta disponibilitat per WhatsApp.",
    },
    nav: {
      treatments: "Tractaments",
      about: "Sobre nosaltres",
      results: "Resultats",
      contact: "Contacte",
      book: "Reservar",
    },
    legal: {
      legalNotice: "Avís legal",
      privacy: "Privacitat",
      cookies: "Cookies",
    },
    cta: {
      book: "Reservar valoració",
      whatsapp: "WhatsApp",
      viewTreatments: "Veure tractaments",
      viewResults: "Veure resultats",
      confirmWhatsapp: "Confirmar per WhatsApp",
    },
    global: {
      noCommitment: "Sense compromís.",
      firstVisit: "Primera visita",
      contactDirect: "Contacte directe",
    },
    footer: {
      topEyebrow: "Centros Ideal Andorra",
      topTitle: "Reserva valoració o consulta per WhatsApp.",
      description:
        "Centre especialitzat en depilació làser díode i estètica avançada amb criteri clínic i atenció personalitzada.",
      navigation: "Navegació",
      legal: "Legal",
      contact: "Contacte",
      rights: "Tots els drets reservats.",
    },
    whatsapp: {
      floatingLabel: "Atenció WhatsApp",
      supportLabel: "Canal d'assistència",
      supportTitle: "Suport operatiu per WhatsApp",
      supportDescription:
        "Canal principal per resoldre dubtes, coordinar valoració i confirmar agenda.",
      supportHumanNotice:
        "Actualment l'atenció la gestiona l'equip del centre.",
      supportFutureNotice:
        "Estructura preparada per incorporar una capa d'assistència avançada en futures fases.",
    },
    chat: {
      launcherLabel: "Assistent",
      launcherAriaLabel: "Obrir assistent digital",
      panelLabel: "Assistent digital",
      panelTitle: "Orientació immediata",
      panelDescription:
        "T'ajudo amb tractaments, temps orientatius i com reservar la valoració.",
      welcomeMessage:
        "Hola, soc l'assistent digital de Centros Ideal Andorra. Puc orientar-te sobre tractaments i procés de reserva.",
      inputPlaceholder: "Escriu la teva consulta",
      inputAriaLabel: "Missatge per a l'assistent",
      sendLabel: "Enviar",
      closeLabel: "Tancar",
      resetLabel: "Reiniciar",
      thinkingLabel: "Pensant...",
      errorMessage:
        "Ara mateix no he pogut respondre. Torna-ho a provar en uns segons.",
      rateLimitError:
        "Has enviat massa consultes seguides. Espera un minut i torna-ho a provar.",
      maxLengthError: "El missatge supera la longitud permesa",
      openInContactLabel: "Obrir assistent",
      openInContactDescription:
        "Disponible per resoldre dubtes freqüents abans de reservar.",
      bookingHint:
        "La indicació definitiva es confirma a la valoració presencial del centre.",
    },
    home: {
      hero: {
        eyebrow: "Centros Ideal Andorra · Illa Carlemany",
        title: "Depilació làser díode i estètica avançada.",
        description: "Valoració inicial de 30 minuts amb criteri professional.",
        highlights: [
          "Centre Comercial Illa Carlemany",
          "Av. Carlemany, 70 · 2a planta",
        ],
        panelEyebrow: "Primera visita",
        panelDescription: "Diagnòstic, pauta i recomanació personalitzada.",
      },
      firstVisit: {
        label: "Primera visita",
        title: "Valoració clínica clara.",
        cards: [
          {
            title: "Diagnòstic",
            description: "Avaluació de necessitats i objectiu prioritari.",
          },
          {
            title: "Pla recomanat",
            description: "Pauta inicial, freqüència i marc d'inversió.",
          },
        ],
        note: "Disponibilitat subjecta a agenda del centre.",
      },
      method: {
        label: "Mètode",
        title: "Protocol amb control i seguiment.",
        pillars: [
          {
            id: "01",
            title: "Valoració individual",
            description: "Cada cas es defineix per diagnòstic.",
          },
          {
            id: "02",
            title: "Aplicació precisa",
            description: "Tècnica ajustada a l'objectiu clínic.",
          },
        ],
      },
      treatments: {
        label: "Tractaments",
        title: "Línies principals.",
        lines: [
          {
            name: "Depilació làser díode",
            objective: "Protocol per zones amb seguiment.",
            session: "Sessió segons zona",
          },
          {
            name: "Rejoveniment facial",
            objective: "Lluminositat, textura i to.",
            session: "60-75 min",
          },
          {
            name: "Remodelació corporal",
            objective: "Drenatge i definició.",
            session: "50-60 min",
          },
        ],
        operationLabel: "Operativa real",
        operationSignals: [
          { label: "Adreça", value: "Av. Carlemany, 70, AD700 Andorra" },
          {
            label: "Ubicació",
            value: "Centre Comercial Illa Carlemany · segona planta",
          },
          { label: "Horari", value: "Pendent de validació final." },
        ],
      },
      team: {
        label: "Equip",
        title: "Persones reals darrere del centre.",
        description: "Estructura preparada per a fitxes professionals validades.",
        members: [
          {
            name: "Coordinació de centre",
            role: "Gestió d'agenda i seguiment",
            focus: "Acompanyament des de la valoració inicial.",
            image: "/images/pages/hero/equipo/equipo-eli.png",
            alt: "Equip d'atenció a Centros Ideal Andorra",
          },
          {
            name: "Especialista làser díode",
            role: "Depilació làser",
            focus: "Protocols per zones amb criteri tècnic.",
            image: "/images/pages/hero/equipo/equipo-jaquie-20260326.png",
            alt: "Especialista aplicant protocol làser",
          },
          {
            name: "Especialista estètica avançada",
            role: "Facial i corporal",
            focus: "Plans de tractament personalitzats.",
            image: "/images/pages/hero/equipo/equipo-karen-20260326.png",
            alt: "Especialista en cabina d'estètica avançada",
          },
        ],
      },
      process: {
        label: "Procés",
        title: "Sol·licitud, confirmació i valoració.",
        steps: [
          { id: "01", title: "Sol·licitud", description: "Objectiu i franja horària." },
          { id: "02", title: "Confirmació", description: "Disponibilitat i condicions." },
          { id: "03", title: "Valoració", description: "Diagnòstic i recomanació final." },
        ],
        cardLabel: "Canal directe",
      },
      closing: {
        label: "Reserva",
        title: "Reserva valoració professional.",
        description: "Confirmació segons agenda disponible.",
      },
    },
    treatmentsPage: {
      hero: {
        label: "Tractaments",
        title: "Protocols amb criteri clínic.",
        description: "Indicació personalitzada després de valoració.",
        panelEyebrow: "Durada",
        panelDescription: "Sessions definides segons zona i protocol.",
      },
      lines: {
        label: "Línies principals",
        title: "Tractaments de referència.",
        description: "Pla definitiu a consulta.",
        detail: "Veure detall",
      },
      method: {
        label: "Mètode",
        title: "Procés en tres fases.",
        description: "Valoració, pla i seguiment.",
        phaseLabel: "Fase",
        phases: [
          { id: "01", title: "Valoració", description: "Diagnòstic i objectiu prioritari." },
          { id: "02", title: "Pla clínic", description: "Freqüència i pauta per fases." },
          { id: "03", title: "Seguiment", description: "Ajustos segons evolució observada." },
        ],
      },
      closing: {
        label: "Reserva",
        title: "Confirma la teva valoració inicial.",
        description: "Sense compromís.",
      },
    },
    treatmentDetail: {
      summaryLabel: "Resum clínic",
      summaryTitle: "Indicacions freqüents.",
      goalsLabel: "Objectius del tractament",
      goalsTitle: "Objectius principals.",
      closingLabel: "Reserva",
      closingTitle: "Sol·licita la teva valoració.",
      closingDescription: "Recomanació final a consulta.",
      items: {
        "rejuvenecimiento-facial": {
          label: "Tractament facial",
          title: "Rejoveniment i lluminositat",
          summary: "Millora progressiva de textura, to i fermesa.",
          duration: "60-75 min",
          cadence: "Freqüència després de valoració",
          focus: ["Lluminositat", "Textura", "To uniforme"],
          indications: [
            "Pell apagada o irregular.",
            "Pèrdua de confort i elasticitat.",
            "Necessitat de manteniment facial professional.",
          ],
          image: "/images/pages/tratamientos/hero/hero-tratamientos-esteticos.png",
          imageAlt: "Tractament facial en cabina estètica",
        },
        "remodelacion-corporal": {
          label: "Tractament corporal",
          title: "Remodelació localitzada",
          summary: "Treball per zones amb enfocament no invasiu.",
          duration: "50-60 min",
          cadence: "Pauta per fases",
          focus: ["Drenatge", "Definició", "Confort corporal"],
          indications: [
            "Retenció i sensació de pesadesa.",
            "Necessitat de definició localitzada.",
            "Protocol corporal de manteniment.",
          ],
          image: "/images/pages/tratamientos/proceso/flujo-proceso-tratamiento.png",
          imageAlt: "Procediment de remodelació corporal",
        },
        "piel-sensible": {
          label: "Tractament dermocalmant",
          title: "Calma i barrera cutània",
          summary: "Protocol conservador per a pell sensible.",
          duration: "50-55 min",
          cadence: "Ajustos per tolerància",
          focus: ["Calma", "Reparació", "Confort"],
          indications: [
            "Enrogiment i sensibilitat recurrent.",
            "Tibantor o disconfort cutani.",
            "Pell reactiva amb necessitat de suport de barrera.",
          ],
          image: "/images/pages/hero/primera-visita/sala-valoracion-estetica.png",
          imageAlt: "Avaluació de pell sensible en cabina",
        },
      },
    },
    resultsPage: {
      hero: {
        label: "Resultats",
        title: "Resultats amb criteri.",
        description: "Documentació clínica i seguiment.",
        panelEyebrow: "Marc clínic",
        panelDescription: "Diagnòstic, seguiment i revisió.",
      },
      documentation: {
        label: "Documentació",
        title: "Com mesurem l'evolució.",
        description: "Registre aplicat a consulta.",
        pillars: [
          { title: "Diagnòstic inicial", description: "Punt de partida documentat." },
          { title: "Seguiment", description: "Control per fases." },
          { title: "Criteri de publicació", description: "Només casos autoritzats." },
        ],
      },
      visual: {
        label: "Documentació visual",
        title: "Material clínic autoritzat.",
        description: "Registres editorials subjectes a autorització.",
        assets: [
          {
            id: "registro_1",
            label: "Registre 01",
            src: "/images/pages/resultados/comparativas/comparativa-antes-tratamiento.png",
            alt: "Registre clínic d'evolució",
          },
          {
            id: "registro_2",
            label: "Registre 02",
            src: "/images/pages/resultados/comparativas/comparativa-despues-tratamiento.png",
            alt: "Seguiment visual autoritzat",
          },
        ],
      },
      transparency: {
        label: "Transparència",
        title: "Comunicació responsable.",
        description: "Informació clínica i expectatives realistes.",
        rows: [
          "No es publiquen promeses de resultat.",
          "L'evolució depèn del cas clínic.",
          "La indicació final es confirma a consulta.",
        ],
      },
      closing: {
        label: "Reserva",
        title: "Sol·licita una valoració individual.",
        description: "Recomanació a consulta.",
      },
    },
    aboutPage: {
      hero: {
        label: "Sobre nosaltres",
        title: "Centre d'estètica avançada a Illa Carlemany.",
        description: "Depilació làser díode i tractaments personalitzats.",
        panelEyebrow: "Centre",
        panelDescription: "Atenció professional i seguiment.",
      },
      method: {
        label: "Forma de treball",
        title: "Criteri, mètode i control.",
        description: "Estructura clínica estable.",
        principles: [
          { title: "Diagnòstic expert", description: "Valoració clínica prèvia." },
          { title: "Pla per fases", description: "Objectiu, freqüència i revisió." },
          { title: "Seguiment", description: "Ajustos per evolució." },
        ],
      },
      identity: {
        label: "Identitat del centre",
        title: "Confiança i continuïtat.",
        highlights: [
          "Cabines individuals i atenció personalitzada.",
          "Depilació làser díode i estètica avançada.",
          "Coordinació directa per WhatsApp.",
        ],
      },
      closing: {
        label: "Contacte",
        title: "Consulta el teu cas amb el centre.",
        description: "Resposta segons disponibilitat.",
      },
    },
    contactPage: {
      hero: {
        label: "Contacte",
        title: "Canal directe amb el centre.",
        description: "Atenció prèvia a reserva i seguiment operatiu.",
        panelEyebrow: "Atenció",
        panelDescription: "Resposta per horari i agenda.",
      },
      channels: {
        label: "Canals",
        title: "Contacte operatiu.",
        description: "Informació útil abans de confirmar.",
        rows: [
          { label: "WhatsApp", value: "688 080", note: "Canal preferent." },
          { label: "Telèfon", value: "688 080", note: "Atenció per horari." },
          { label: "Email", value: "illa.carlemany@centresideal.com", note: "Consultes generals." },
          { label: "Adreça", value: "Av. Carlemany, 70, AD700 Andorra", note: "Centre Comercial Illa Carlemany · segona planta." },
          { label: "Horari", value: "Pendent de validació", note: "Es confirmarà en actualització oficial." },
        ],
      },
      process: {
        label: "Procés",
        title: "Resposta i confirmació.",
        description: "Seqüència breu.",
        steps: [
          { id: "01", title: "Sol·licitud", description: "Objectiu i franja." },
          { id: "02", title: "Resposta", description: "Disponibilitat i condicions." },
          { id: "03", title: "Confirmació", description: "Reserva final." },
        ],
      },
      support: {
        label: "WhatsApp",
        title: "Canal preparat per a assistència avançada.",
        description:
          "La base de contacte està estructurada per incorporar en el futur automatització de consultes recurrents sense perdre control de l'equip.",
      },
      closing: {
        label: "Reserva",
        title: "Confirma la teva valoració inicial.",
        description: "Sense compromís.",
      },
    },
    bookingPage: {
      hero: {
        label: "Reservar valoració",
        title: "Reserva clara i sense fricció.",
        description: "Confirmació per WhatsApp.",
        panelEyebrow: "Valoració",
        panelDescription: "Durada orientativa de 30 minuts.",
      },
      includes: {
        label: "Què inclou",
        title: "Primera visita",
        description: "Informació abans de decidir tractament.",
        rows: [
          "Diagnòstic facial o corporal.",
          "Objectiu prioritari i pauta inicial.",
          "Inversió orientativa.",
        ],
      },
      process: {
        label: "Procés",
        title: "Sol·licitud, confirmació i consulta.",
        description: "Seqüència simple.",
        steps: [
          { id: "01", title: "Sol·licitud", description: "Objectiu i franja." },
          { id: "02", title: "Confirmació", description: "Horari i condicions." },
          { id: "03", title: "Consulta", description: "Diagnòstic i recomanació." },
        ],
      },
      closing: {
        label: "Confirmació",
        title: "Reserva la teva valoració ara.",
        description: "Sense compromís.",
      },
    },
    legalPages: {
      legalNotice: {
        title: "Avís legal",
        intro: "Informació general sobre titularitat, ús del lloc i condicions aplicables.",
        holderTitle: "Identificació del titular",
        holderDescription:
          "Titular: Centros Ideal Andorra. Contacte: illa.carlemany@centresideal.com · +376 688 080.",
        conditionsTitle: "Condicions generals",
        conditionsIntro:
          "L'accés i la navegació impliquen un ús responsable del contingut i respecte a la normativa vigent.",
        useTitle: "Ús adequat",
        useDescription:
          "L'usuari es compromet a un ús lícit del lloc i a no alterar-ne el funcionament.",
        intellectualTitle: "Propietat intel·lectual",
        intellectualDescription:
          "Textos, marques i identitat visual estan protegits conforme a la legislació aplicable.",
      },
      privacy: {
        title: "Política de privacitat",
        intro: "Política sobre recollida i tractament de dades personals de l'usuari.",
        dataTitle: "Dades tractades",
        dataDescription:
          "Dades identificatives i de contacte facilitades en consultes o sol·licituds de cita.",
        purposeTitle: "Finalitat",
        purposeDescription:
          "Gestió de consultes, reserves i comunicacions vinculades al servei sol·licitat.",
        rightsTitle: "Gestió de drets",
        rightsIntro:
          "L'usuari pot exercir els seus drets d'accés, rectificació, supressió i oposició per canal de contacte oficial.",
        rightsCardTitle: "Exercici de drets",
        rightsCardDescription:
          "Les sol·licituds s'atendran segons normativa vigent i terminis aplicables.",
      },
      cookies: {
        title: "Política de cookies",
        intro: "Informació sobre l'ús de cookies tècniques i de mesura al lloc.",
        technicalTitle: "Cookies tècniques",
        technicalDescription:
          "Necessàries per al funcionament bàsic i la seguretat de navegació.",
        analyticsTitle: "Cookies analítiques",
        analyticsDescription:
          "Permeten analitzar l'ús del lloc i millorar rendiment i experiència.",
        consentTitle: "Gestió del consentiment",
        consentDescription:
          "L'usuari pot acceptar, rebutjar o ajustar preferències al panell de consentiment.",
        configTitle: "Configuració",
        configIntro:
          "La configuració es pot modificar en qualsevol moment des del gestor de cookies.",
        configCardTitle: "Detall de cookies",
        configCardDescription:
          "Es detallen categories, durada i finalitat segons les cookies actives en cada moment.",
      },
    },
  },
  fr: {
    languageLabel: "Langue",
    localeName: "Français",
    seo: {
      title: "Centros Ideal Andorra",
      description:
        "Centros Ideal Andorra : épilation laser diode et esthétique avancée à Illa Carlemany, avec évaluation professionnelle et suivi clinique.",
    },
    brand: {
      ...baseBrand,
      hoursPending: "Horaires en validation finale. Consultez la disponibilité via WhatsApp.",
    },
    nav: {
      treatments: "Traitements",
      about: "À propos",
      results: "Résultats",
      contact: "Contact",
      book: "Réserver",
    },
    legal: {
      legalNotice: "Mentions légales",
      privacy: "Confidentialité",
      cookies: "Cookies",
    },
    cta: {
      book: "Réserver une évaluation",
      whatsapp: "WhatsApp",
      viewTreatments: "Voir les traitements",
      viewResults: "Voir les résultats",
      confirmWhatsapp: "Confirmer via WhatsApp",
    },
    global: {
      noCommitment: "Sans engagement.",
      firstVisit: "Première visite",
      contactDirect: "Contact direct",
    },
    footer: {
      topEyebrow: "Centros Ideal Andorra",
      topTitle: "Réservez une évaluation ou contactez-nous via WhatsApp.",
      description:
        "Centre spécialisé en épilation laser diode et esthétique avancée, avec approche clinique et suivi personnalisé.",
      navigation: "Navigation",
      legal: "Légal",
      contact: "Contact",
      rights: "Tous droits réservés.",
    },
    whatsapp: {
      floatingLabel: "Support WhatsApp",
      supportLabel: "Canal d'assistance",
      supportTitle: "Support opérationnel via WhatsApp",
      supportDescription:
        "Canal principal pour répondre aux questions, coordonner l'évaluation et confirmer l'agenda.",
      supportHumanNotice:
        "Actuellement, l'accompagnement est assuré par l'équipe du centre.",
      supportFutureNotice:
        "Base prête pour intégrer une couche d'assistance avancée dans les prochaines phases.",
    },
    chat: {
      launcherLabel: "Assistant",
      launcherAriaLabel: "Ouvrir l'assistant digital",
      panelLabel: "Assistant digital",
      panelTitle: "Orientation immédiate",
      panelDescription:
        "Je vous aide sur les traitements, les durées indicatives et la réservation.",
      welcomeMessage:
        "Bonjour, je suis l'assistant digital de Centros Ideal Andorra. Je peux vous orienter sur les traitements et la réservation.",
      inputPlaceholder: "Écrivez votre demande",
      inputAriaLabel: "Message pour l'assistant",
      sendLabel: "Envoyer",
      closeLabel: "Fermer",
      resetLabel: "Réinitialiser",
      thinkingLabel: "Réflexion en cours...",
      errorMessage:
        "Je n'ai pas pu répondre pour le moment. Réessayez dans quelques secondes.",
      rateLimitError:
        "Vous avez envoyé trop de demandes successives. Attendez une minute puis réessayez.",
      maxLengthError: "Le message dépasse la longueur autorisée",
      openInContactLabel: "Ouvrir l'assistant",
      openInContactDescription:
        "Disponible pour répondre aux questions fréquentes avant la réservation.",
      bookingHint:
        "L'indication définitive est confirmée lors de l'évaluation en centre.",
    },
    home: {
      hero: {
        eyebrow: "Centros Ideal Andorra · Illa Carlemany",
        title: "Épilation laser diode et esthétique avancée.",
        description: "Évaluation initiale de 30 minutes avec approche professionnelle.",
        highlights: [
          "Centre Commercial Illa Carlemany",
          "Av. Carlemany, 70 · 2e étage",
        ],
        panelEyebrow: "Première visite",
        panelDescription: "Diagnostic, protocole et recommandation personnalisée.",
      },
      firstVisit: {
        label: "Première visite",
        title: "Évaluation clinique claire.",
        cards: [
          {
            title: "Diagnostic",
            description: "Évaluation des besoins et de l'objectif prioritaire.",
          },
          {
            title: "Plan recommandé",
            description: "Protocole initial, fréquence et cadre d'investissement.",
          },
        ],
        note: "Disponibilité selon l'agenda du centre.",
      },
      method: {
        label: "Méthode",
        title: "Protocole avec contrôle et suivi.",
        pillars: [
          {
            id: "01",
            title: "Évaluation individuelle",
            description: "Chaque cas est défini par diagnostic.",
          },
          {
            id: "02",
            title: "Application précise",
            description: "Technique adaptée à l'objectif clinique.",
          },
        ],
      },
      treatments: {
        label: "Traitements",
        title: "Lignes principales.",
        lines: [
          {
            name: "Épilation laser diode",
            objective: "Protocole par zones avec suivi.",
            session: "Séance selon zone",
          },
          {
            name: "Rajeunissement facial",
            objective: "Éclat, texture et teint.",
            session: "60-75 min",
          },
          {
            name: "Remodelage corporel",
            objective: "Drainage et définition.",
            session: "50-60 min",
          },
        ],
        operationLabel: "Opération réelle",
        operationSignals: [
          { label: "Adresse", value: "Av. Carlemany, 70, AD700 Andorra" },
          {
            label: "Emplacement",
            value: "Centre Commercial Illa Carlemany · deuxième étage",
          },
          { label: "Horaires", value: "En attente de validation finale." },
        ],
      },
      team: {
        label: "Équipe",
        title: "Des personnes réelles derrière le centre.",
        description: "Structure prête pour des profils professionnels validés.",
        members: [
          {
            name: "Coordination du centre",
            role: "Gestion d'agenda et suivi",
            focus: "Accompagnement dès l'évaluation initiale.",
            image: "/images/pages/hero/equipo/equipo-eli.png",
            alt: "Équipe d'accueil de Centros Ideal Andorra",
          },
          {
            name: "Spécialiste laser diode",
            role: "Épilation laser",
            focus: "Protocoles par zones avec rigueur technique.",
            image: "/images/pages/hero/equipo/equipo-jaquie-20260326.png",
            alt: "Spécialiste appliquant un protocole laser",
          },
          {
            name: "Spécialiste esthétique avancée",
            role: "Facial et corporel",
            focus: "Plans de traitement personnalisés.",
            image: "/images/pages/hero/equipo/equipo-karen-20260326.png",
            alt: "Spécialiste en cabine d'esthétique avancée",
          },
        ],
      },
      process: {
        label: "Processus",
        title: "Demande, confirmation et évaluation.",
        steps: [
          { id: "01", title: "Demande", description: "Objectif et créneau horaire." },
          { id: "02", title: "Confirmation", description: "Disponibilité et conditions." },
          { id: "03", title: "Évaluation", description: "Diagnostic et recommandation finale." },
        ],
        cardLabel: "Canal direct",
      },
      closing: {
        label: "Réservation",
        title: "Réservez une évaluation professionnelle.",
        description: "Confirmation selon l'agenda disponible.",
      },
    },
    treatmentsPage: {
      hero: {
        label: "Traitements",
        title: "Protocoles avec rigueur clinique.",
        description: "Indication personnalisée après évaluation.",
        panelEyebrow: "Durée",
        panelDescription: "Séances définies selon zone et protocole.",
      },
      lines: {
        label: "Lignes principales",
        title: "Traitements de référence.",
        description: "Plan final défini en consultation.",
        detail: "Voir le détail",
      },
      method: {
        label: "Méthode",
        title: "Processus en trois phases.",
        description: "Évaluation, plan et suivi.",
        phaseLabel: "Phase",
        phases: [
          { id: "01", title: "Évaluation", description: "Diagnostic et objectif prioritaire." },
          { id: "02", title: "Plan clinique", description: "Fréquence et protocole par phases." },
          { id: "03", title: "Suivi", description: "Ajustements selon évolution." },
        ],
      },
      closing: {
        label: "Réservation",
        title: "Confirmez votre évaluation initiale.",
        description: "Sans engagement.",
      },
    },
    treatmentDetail: {
      summaryLabel: "Résumé clinique",
      summaryTitle: "Indications fréquentes.",
      goalsLabel: "Objectifs du traitement",
      goalsTitle: "Objectifs principaux.",
      closingLabel: "Réservation",
      closingTitle: "Demandez votre évaluation.",
      closingDescription: "Recommandation finale en consultation.",
      items: {
        "rejuvenecimiento-facial": {
          label: "Traitement facial",
          title: "Rajeunissement et éclat",
          summary: "Amélioration progressive de la texture, du teint et de la fermeté.",
          duration: "60-75 min",
          cadence: "Fréquence après évaluation",
          focus: ["Éclat", "Texture", "Teint uniforme"],
          indications: [
            "Peau terne ou irrégulière.",
            "Perte de confort et d'élasticité.",
            "Besoin d'entretien facial professionnel.",
          ],
          image: "/images/pages/tratamientos/hero/hero-tratamientos-esteticos.png",
          imageAlt: "Traitement facial en cabine esthétique",
        },
        "remodelacion-corporal": {
          label: "Traitement corporel",
          title: "Remodelage localisé",
          summary: "Travail ciblé par zones avec approche non invasive.",
          duration: "50-60 min",
          cadence: "Protocole par phases",
          focus: ["Drainage", "Définition", "Confort corporel"],
          indications: [
            "Rétention et sensation de lourdeur.",
            "Besoin de définition localisée.",
            "Protocole corporel d'entretien.",
          ],
          image: "/images/pages/tratamientos/proceso/flujo-proceso-tratamiento.png",
          imageAlt: "Procédure de remodelage corporel",
        },
        "piel-sensible": {
          label: "Traitement dermo-apaisant",
          title: "Apaisement et barrière cutanée",
          summary: "Protocole conservateur pour peau sensible.",
          duration: "50-55 min",
          cadence: "Ajustements selon tolérance",
          focus: ["Apaisement", "Réparation", "Confort"],
          indications: [
            "Rougeurs et sensibilité récurrente.",
            "Tiraillements ou inconfort cutané.",
            "Peau réactive nécessitant un soutien de barrière.",
          ],
          image: "/images/pages/hero/primera-visita/sala-valoracion-estetica.png",
          imageAlt: "Évaluation de peau sensible en cabine",
        },
      },
    },
    resultsPage: {
      hero: {
        label: "Résultats",
        title: "Résultats avec rigueur.",
        description: "Documentation clinique et suivi.",
        panelEyebrow: "Cadre clinique",
        panelDescription: "Diagnostic, suivi et révision.",
      },
      documentation: {
        label: "Documentation",
        title: "Comment nous mesurons l'évolution.",
        description: "Enregistrement appliqué en consultation.",
        pillars: [
          { title: "Diagnostic initial", description: "Point de départ documenté." },
          { title: "Suivi", description: "Contrôle par phases." },
          { title: "Critère de publication", description: "Cas autorisés uniquement." },
        ],
      },
      visual: {
        label: "Documentation visuelle",
        title: "Matériel clinique autorisé.",
        description: "Registres éditoriaux soumis à autorisation.",
        assets: [
          {
            id: "registro_1",
            label: "Enregistrement 01",
            src: "/images/pages/resultados/comparativas/comparativa-antes-tratamiento.png",
            alt: "Enregistrement clinique d'évolution",
          },
          {
            id: "registro_2",
            label: "Enregistrement 02",
            src: "/images/pages/resultados/comparativas/comparativa-despues-tratamiento.png",
            alt: "Suivi visuel autorisé",
          },
        ],
      },
      transparency: {
        label: "Transparence",
        title: "Communication responsable.",
        description: "Information clinique et attentes réalistes.",
        rows: [
          "Aucune promesse de résultat n'est publiée.",
          "L'évolution dépend du cas clinique.",
          "L'indication finale est confirmée en consultation.",
        ],
      },
      closing: {
        label: "Réservation",
        title: "Demandez une évaluation individuelle.",
        description: "Recommandation en consultation.",
      },
    },
    aboutPage: {
      hero: {
        label: "À propos",
        title: "Centre d'esthétique avancée à Illa Carlemany.",
        description: "Épilation laser diode et traitements personnalisés.",
        panelEyebrow: "Centre",
        panelDescription: "Accompagnement professionnel et suivi.",
      },
      method: {
        label: "Méthode de travail",
        title: "Rigueur, méthode et contrôle.",
        description: "Structure clinique stable.",
        principles: [
          { title: "Diagnostic expert", description: "Évaluation clinique préalable." },
          { title: "Plan par phases", description: "Objectif, fréquence et révision." },
          { title: "Suivi", description: "Ajustements selon évolution." },
        ],
      },
      identity: {
        label: "Identité du centre",
        title: "Confiance et continuité.",
        highlights: [
          "Cabines individuelles et accompagnement personnalisé.",
          "Épilation laser diode et esthétique avancée.",
          "Coordination directe via WhatsApp.",
        ],
      },
      closing: {
        label: "Contact",
        title: "Échangez avec le centre sur votre cas.",
        description: "Réponse selon disponibilité.",
      },
    },
    contactPage: {
      hero: {
        label: "Contact",
        title: "Canal direct avec le centre.",
        description: "Accompagnement avant réservation et suivi opérationnel.",
        panelEyebrow: "Accueil",
        panelDescription: "Réponse selon horaires et agenda.",
      },
      channels: {
        label: "Canaux",
        title: "Contact opérationnel.",
        description: "Informations utiles avant confirmation.",
        rows: [
          { label: "WhatsApp", value: "688 080", note: "Canal prioritaire." },
          { label: "Téléphone", value: "688 080", note: "Accueil selon horaires." },
          { label: "Email", value: "illa.carlemany@centresideal.com", note: "Demandes générales." },
          { label: "Adresse", value: "Av. Carlemany, 70, AD700 Andorra", note: "Centre Commercial Illa Carlemany · deuxième étage." },
          { label: "Horaires", value: "En attente de validation", note: "Publication après confirmation officielle." },
        ],
      },
      process: {
        label: "Processus",
        title: "Réponse et confirmation.",
        description: "Séquence courte.",
        steps: [
          { id: "01", title: "Demande", description: "Objectif et créneau." },
          { id: "02", title: "Réponse", description: "Disponibilité et conditions." },
          { id: "03", title: "Confirmation", description: "Réservation finale." },
        ],
      },
      support: {
        label: "WhatsApp",
        title: "Canal prêt pour une assistance avancée.",
        description:
          "La base de contact est conçue pour intégrer à l'avenir une automatisation des demandes récurrentes, sans remplacer le contrôle de l'équipe.",
      },
      closing: {
        label: "Réservation",
        title: "Confirmez votre évaluation initiale.",
        description: "Sans engagement.",
      },
    },
    bookingPage: {
      hero: {
        label: "Réserver une évaluation",
        title: "Réservation claire et sans friction.",
        description: "Confirmation via WhatsApp.",
        panelEyebrow: "Évaluation",
        panelDescription: "Durée indicative de 30 minutes.",
      },
      includes: {
        label: "Inclus",
        title: "Première visite",
        description: "Informations avant de décider du traitement.",
        rows: [
          "Diagnostic facial ou corporel.",
          "Objectif prioritaire et protocole initial.",
          "Investissement indicatif.",
        ],
      },
      process: {
        label: "Processus",
        title: "Demande, confirmation et consultation.",
        description: "Séquence simple.",
        steps: [
          { id: "01", title: "Demande", description: "Objectif et créneau." },
          { id: "02", title: "Confirmation", description: "Horaires et conditions." },
          { id: "03", title: "Consultation", description: "Diagnostic et recommandation." },
        ],
      },
      closing: {
        label: "Confirmation",
        title: "Réservez votre évaluation maintenant.",
        description: "Sans engagement.",
      },
    },
    legalPages: {
      legalNotice: {
        title: "Mentions légales",
        intro: "Informations générales sur la titularité, l'usage du site et les conditions applicables.",
        holderTitle: "Identification du titulaire",
        holderDescription:
          "Titulaire : Centros Ideal Andorra. Contact : illa.carlemany@centresideal.com · +376 688 080.",
        conditionsTitle: "Conditions générales",
        conditionsIntro:
          "L'accès et la navigation impliquent un usage responsable du contenu et le respect de la réglementation en vigueur.",
        useTitle: "Usage approprié",
        useDescription:
          "L'utilisateur s'engage à un usage licite du site et à ne pas en altérer le fonctionnement.",
        intellectualTitle: "Propriété intellectuelle",
        intellectualDescription:
          "Les textes, marques et l'identité visuelle sont protégés conformément à la législation applicable.",
      },
      privacy: {
        title: "Politique de confidentialité",
        intro: "Politique relative à la collecte et au traitement des données personnelles.",
        dataTitle: "Données traitées",
        dataDescription:
          "Données d'identification et de contact fournies lors des demandes ou réservations.",
        purposeTitle: "Finalité",
        purposeDescription:
          "Gestion des demandes, réservations et communications liées au service sollicité.",
        rightsTitle: "Gestion des droits",
        rightsIntro:
          "L'utilisateur peut exercer ses droits d'accès, rectification, suppression et opposition via le canal officiel.",
        rightsCardTitle: "Exercice des droits",
        rightsCardDescription:
          "Les demandes seront traitées conformément à la réglementation en vigueur et aux délais applicables.",
      },
      cookies: {
        title: "Politique de cookies",
        intro: "Informations sur l'usage des cookies techniques et de mesure.",
        technicalTitle: "Cookies techniques",
        technicalDescription:
          "Nécessaires au fonctionnement de base et à la sécurité de navigation.",
        analyticsTitle: "Cookies analytiques",
        analyticsDescription:
          "Permettent d'analyser l'usage du site et d'améliorer les performances.",
        consentTitle: "Gestion du consentement",
        consentDescription:
          "L'utilisateur peut accepter, refuser ou ajuster ses préférences via le panneau de consentement.",
        configTitle: "Configuration",
        configIntro:
          "La configuration peut être modifiée à tout moment depuis le gestionnaire de cookies.",
        configCardTitle: "Détail des cookies",
        configCardDescription:
          "Les catégories, durées et finalités des cookies actifs sont détaillées en continu.",
      },
    },
  },
};

const esDictionary = dictionaries.es;

dictionaries.en = {
  ...esDictionary,
  languageLabel: "Language",
  localeName: "English",
  seo: {
    title: "Centros Ideal Andorra",
    description:
      "Centros Ideal Andorra: diode laser hair removal and advanced aesthetics at Illa Carlemany, with professional assessment and clinical follow-up.",
  },
  brand: {
    ...esDictionary.brand,
    floor: "Second floor",
    hoursPending: "Opening hours under final validation. Check availability on WhatsApp.",
  },
  nav: {
    treatments: "Treatments",
    about: "About us",
    results: "Results",
    contact: "Contact",
    book: "Book",
  },
  legal: {
    legalNotice: "Legal notice",
    privacy: "Privacy",
    cookies: "Cookies",
  },
  cta: {
    book: "Book consultation",
    whatsapp: "WhatsApp",
    viewTreatments: "View treatments",
    viewResults: "View results",
    confirmWhatsapp: "Confirm via WhatsApp",
  },
  global: {
    noCommitment: "No obligation.",
    firstVisit: "First visit",
    contactDirect: "Direct contact",
  },
  footer: {
    topEyebrow: "Centros Ideal Andorra",
    topTitle: "Book your assessment or reach out via WhatsApp.",
    description:
      "Specialised centre in diode laser hair removal and advanced aesthetics, with clinical criteria and personalised care.",
    navigation: "Navigation",
    legal: "Legal",
    contact: "Contact",
    rights: "All rights reserved.",
  },
  whatsapp: {
    floatingLabel: "WhatsApp support",
    supportLabel: "Support channel",
    supportTitle: "Operational support via WhatsApp",
    supportDescription:
      "Primary channel to answer questions, coordinate your assessment and confirm your agenda.",
    supportHumanNotice:
      "Support is currently managed directly by the centre team.",
    supportFutureNotice:
      "The architecture is ready to add an advanced assistance layer in upcoming phases.",
  },
  chat: {
    launcherLabel: "Assistant",
    launcherAriaLabel: "Open digital assistant",
    panelLabel: "Digital assistant",
    panelTitle: "Immediate guidance",
    panelDescription:
      "I can help you with treatments, indicative timelines and how to book your assessment.",
    welcomeMessage:
      "Hello, I am the digital assistant at Centros Ideal Andorra. I can guide you about treatments and booking flow.",
    inputPlaceholder: "Type your question",
    inputAriaLabel: "Message for the assistant",
    sendLabel: "Send",
    closeLabel: "Close",
    resetLabel: "Reset",
    thinkingLabel: "Thinking...",
    errorMessage:
      "I could not respond right now. Please try again in a few seconds.",
    rateLimitError:
      "You have sent too many requests in a row. Please wait one minute and try again.",
    maxLengthError: "Message exceeds the allowed length",
    openInContactLabel: "Open assistant",
    openInContactDescription:
      "Available to resolve frequent questions before booking.",
    bookingHint:
      "The final recommendation is confirmed during your in-person assessment at the centre.",
  },
  home: {
    ...esDictionary.home,
    closing: {
      label: "Booking",
      title: "Book your assessment now.",
      description: "No obligation.",
    },
  },
  treatmentsPage: {
    ...esDictionary.treatmentsPage,
    closing: {
      label: "Booking",
      title: "Request your assessment.",
      description: "Final recommendation in consultation.",
    },
  },
  resultsPage: {
    ...esDictionary.resultsPage,
    hero: {
      ...esDictionary.resultsPage.hero,
      label: "Results",
      title: "Results with clinical criteria.",
      description: "Clinical documentation and follow-up.",
    },
    closing: {
      label: "Booking",
      title: "Request an individual assessment.",
      description: "Recommendation in consultation.",
    },
  },
  aboutPage: {
    ...esDictionary.aboutPage,
    hero: {
      ...esDictionary.aboutPage.hero,
      label: "About us",
      title: "Advanced aesthetics centre at Illa Carlemany.",
      description: "Diode laser hair removal and personalised treatments.",
    },
    closing: {
      label: "Contact",
      title: "Discuss your case directly with the centre.",
      description: "Reply based on availability.",
    },
  },
  contactPage: {
    ...esDictionary.contactPage,
    hero: {
      ...esDictionary.contactPage.hero,
      label: "Contact",
      title: "Direct channel with the centre.",
      description: "Pre-booking support and operational follow-up.",
      panelEyebrow: "Support",
      panelDescription: "Response by opening hours and agenda.",
    },
    channels: {
      ...esDictionary.contactPage.channels,
      label: "Channels",
      title: "Operational contact.",
      description: "Useful information before confirmation.",
      rows: [
        { label: "WhatsApp", value: "688 080", note: "Priority channel." },
        { label: "Phone", value: "688 080", note: "Support by opening hours." },
        { label: "Email", value: "illa.carlemany@centresideal.com", note: "General inquiries." },
        {
          label: "Address",
          value: "Av. Carlemany, 70, AD700 Andorra",
          note: "Illa Carlemany Shopping Centre · second floor.",
        },
        {
          label: "Opening hours",
          value: "Pending validation",
          note: "Will be confirmed in an official update.",
        },
      ],
    },
    process: {
      ...esDictionary.contactPage.process,
      label: "Process",
      title: "Response and confirmation.",
      description: "Short sequence.",
      steps: [
        { id: "01", title: "Request", description: "Goal and time slot." },
        { id: "02", title: "Reply", description: "Availability and conditions." },
        { id: "03", title: "Confirmation", description: "Final booking." },
      ],
    },
    support: {
      ...esDictionary.contactPage.support,
      label: "WhatsApp",
      title: "Channel ready for advanced support.",
      description:
        "The contact flow is structured to add future automation for recurring questions without losing team control.",
    },
    closing: {
      label: "Booking",
      title: "Confirm your initial assessment.",
      description: "No obligation.",
    },
  },
  bookingPage: {
    ...esDictionary.bookingPage,
    hero: {
      ...esDictionary.bookingPage.hero,
      label: "Book assessment",
      title: "Clear, frictionless booking.",
      description: "Confirmation via WhatsApp.",
      panelEyebrow: "Assessment",
      panelDescription: "Estimated duration: 30 minutes.",
    },
    includes: {
      ...esDictionary.bookingPage.includes,
      label: "What's included",
      title: "First visit",
      description: "Information before deciding your treatment.",
      rows: [
        "Facial or body diagnosis.",
        "Priority objective and initial protocol.",
        "Indicative investment.",
      ],
    },
    process: {
      ...esDictionary.bookingPage.process,
      label: "Process",
      title: "Request, confirmation and consultation.",
      description: "Simple sequence.",
      steps: [
        { id: "01", title: "Request", description: "Goal and slot." },
        { id: "02", title: "Confirmation", description: "Schedule and conditions." },
        { id: "03", title: "Consultation", description: "Diagnosis and recommendation." },
      ],
    },
    closing: {
      label: "Confirmation",
      title: "Book your assessment now.",
      description: "No obligation.",
    },
  },
  legalPages: {
    legalNotice: {
      title: "Legal notice",
      intro: "General information about ownership, site usage and applicable conditions.",
      holderTitle: "Owner identification",
      holderDescription:
        "Owner: Centros Ideal Andorra. Contact: illa.carlemany@centresideal.com · +376 688 080.",
      conditionsTitle: "General conditions",
      conditionsIntro:
        "Access and navigation imply responsible use of content and compliance with current regulations.",
      useTitle: "Proper use",
      useDescription:
        "Users undertake to use the site lawfully and not disrupt its operation.",
      intellectualTitle: "Intellectual property",
      intellectualDescription:
        "Texts, trademarks and visual identity are protected by applicable legislation.",
    },
    privacy: {
      title: "Privacy policy",
      intro: "Policy on collection and processing of users' personal data.",
      dataTitle: "Processed data",
      dataDescription:
        "Identification and contact data provided in enquiries or booking requests.",
      purposeTitle: "Purpose",
      purposeDescription:
        "Management of enquiries, bookings and communications linked to requested services.",
      rightsTitle: "Rights management",
      rightsIntro:
        "Users can exercise rights of access, rectification, erasure and objection through official channels.",
      rightsCardTitle: "Exercising your rights",
      rightsCardDescription:
        "Requests are handled under applicable regulations and response times.",
    },
    cookies: {
      title: "Cookie policy",
      intro: "Information about technical and measurement cookies used on the site.",
      technicalTitle: "Technical cookies",
      technicalDescription:
        "Required for basic operation and secure browsing.",
      analyticsTitle: "Analytics cookies",
      analyticsDescription:
        "Used to analyse site usage and improve performance and experience.",
      consentTitle: "Consent management",
      consentDescription:
        "Users can accept, reject or adjust preferences in the consent panel.",
      configTitle: "Configuration",
      configIntro:
        "Settings can be changed at any time from the cookie manager.",
      configCardTitle: "Cookie details",
      configCardDescription:
        "Categories, durations and purposes are detailed based on active cookies.",
    },
  },
};

dictionaries.uk = {
  ...dictionaries.en,
  languageLabel: "Мова",
  localeName: "Українська",
  seo: {
    title: "Centros Ideal Andorra",
    description:
      "Centros Ideal Andorra: діодна лазерна епіляція та розширена естетика в Illa Carlemany, з професійною консультацією та клінічним супроводом.",
  },
  brand: {
    ...dictionaries.en.brand,
    floor: "Другий поверх",
    hoursPending: "Графік у фінальній валідації. Уточнюйте доступність через WhatsApp.",
  },
  nav: {
    treatments: "Процедури",
    about: "Про нас",
    results: "Результати",
    contact: "Контакт",
    book: "Запис",
  },
  legal: {
    legalNotice: "Правова інформація",
    privacy: "Приватність",
    cookies: "Файли cookie",
  },
  cta: {
    book: "Записатися на консультацію",
    whatsapp: "WhatsApp",
    viewTreatments: "Переглянути процедури",
    viewResults: "Переглянути результати",
    confirmWhatsapp: "Підтвердити у WhatsApp",
  },
  global: {
    noCommitment: "Без зобов'язань.",
    firstVisit: "Перший візит",
    contactDirect: "Прямий контакт",
  },
  footer: {
    topEyebrow: "Centros Ideal Andorra",
    topTitle: "Запишіться на консультацію або напишіть у WhatsApp.",
    description:
      "Центр, що спеціалізується на діодній лазерній епіляції та розширеній естетиці, з клінічним підходом і персональним супроводом.",
    navigation: "Навігація",
    legal: "Правова інформація",
    contact: "Контакт",
    rights: "Усі права захищено.",
  },
  home: {
    ...dictionaries.en.home,
    closing: {
      label: "Запис",
      title: "Запишіться на консультацію вже зараз.",
      description: "Без зобов'язань.",
    },
  },
  treatmentsPage: {
    ...dictionaries.en.treatmentsPage,
    closing: {
      label: "Запис",
      title: "Запросіть персональну консультацію.",
      description: "Фінальну рекомендацію підтверджуємо на очному візиті.",
    },
  },
  resultsPage: {
    ...dictionaries.en.resultsPage,
    hero: {
      label: "Результати",
      title: "Результати з професійним критерієм.",
      description: "Клінічна документація і супровід.",
      panelEyebrow: "Клінічна рамка",
      panelDescription: "Діагностика, супровід і перегляд.",
    },
    documentation: {
      label: "Документація",
      title: "Як ми фіксуємо динаміку.",
      description: "Структурований запис у межах консультації.",
      pillars: [
        { title: "Початкова діагностика", description: "Задокументована стартова точка." },
        { title: "Супровід", description: "Контроль по фазах." },
        { title: "Критерій публікації", description: "Лише погоджені кейси." },
      ],
    },
    visual: {
      label: "Візуальна документація",
      title: "Авторизовані клінічні матеріали.",
      description: "Візуальні реєстри публікуються тільки за дозволом.",
      assets: [
        {
          id: "registro_1",
          label: "Реєстр 01",
          src: "/images/pages/resultados/comparativas/comparativa-antes-tratamiento.png",
          alt: "Клінічний реєстр еволюції",
        },
        {
          id: "registro_2",
          label: "Реєстр 02",
          src: "/images/pages/resultados/comparativas/comparativa-despues-tratamiento.png",
          alt: "Авторизоване візуальне порівняння",
        },
      ],
    },
    transparency: {
      label: "Прозорість",
      title: "Відповідальна комунікація.",
      description: "Клінічна інформація і реалістичні очікування.",
      rows: [
        "Ми не публікуємо обіцянок результату.",
        "Еволюція залежить від конкретного клінічного кейсу.",
        "Фінальне показання підтверджується на консультації.",
      ],
    },
    closing: {
      label: "Запис",
      title: "Запросіть індивідуальну консультацію.",
      description: "Рекомендація формується очно в центрі.",
    },
  },
  aboutPage: {
    ...dictionaries.en.aboutPage,
    hero: {
      label: "Про нас",
      title: "Центр розширеної естетики в Illa Carlemany.",
      description: "Діодна лазерна епіляція та персоналізовані протоколи.",
      panelEyebrow: "Центр",
      panelDescription: "Професійний супровід і системний контроль.",
    },
    method: {
      label: "Підхід до роботи",
      title: "Критерій, метод і контроль.",
      description: "Стабільна клінічна структура без імпровізацій.",
      principles: [
        { title: "Експертна діагностика", description: "Попередня клінічна оцінка перед запуском плану." },
        { title: "План за фазами", description: "Ціль, частота і точки перегляду." },
        { title: "Супровід", description: "Корекція за реальною динамікою." },
      ],
    },
    identity: {
      label: "Ідентичність центру",
      title: "Довіра і безперервність.",
      highlights: [
        "Індивідуальні кабіни та персоналізований супровід.",
        "Діодний лазер і розширена естетика в одному центрі.",
        "Пряма координація через WhatsApp.",
      ],
    },
    closing: {
      label: "Контакт",
      title: "Обговоріть ваш кейс безпосередньо з командою центру.",
      description: "Відповідь відповідно до доступності.",
    },
  },
  contactPage: {
    ...dictionaries.en.contactPage,
    hero: {
      label: "Контакт",
      title: "Прямий канал зв'язку з центром.",
      description: "Супровід до запису і подальший операційний супровід.",
      panelEyebrow: "Підтримка",
      panelDescription: "Відповідь у межах графіка і доступності.",
    },
    channels: {
      label: "Канали",
      title: "Операційний контакт.",
      description: "Ключова інформація перед підтвердженням візиту.",
      rows: [
        { label: "WhatsApp", value: "688 080", note: "Пріоритетний канал." },
        { label: "Телефон", value: "688 080", note: "Відповідь у робочий час." },
        { label: "Email", value: "illa.carlemany@centresideal.com", note: "Загальні запити." },
        { label: "Адреса", value: "Av. Carlemany, 70, AD700 Andorra", note: "Illa Carlemany · другий поверх." },
        { label: "Графік", value: "Очікує підтвердження", note: "Оновимо після офіційної валідації." },
      ],
    },
    process: {
      label: "Процес",
      title: "Відповідь і підтвердження.",
      description: "Коротка та зрозуміла послідовність.",
      steps: [
        { id: "01", title: "Запит", description: "Ціль і часовий слот." },
        { id: "02", title: "Відповідь", description: "Доступність і умови." },
        { id: "03", title: "Підтвердження", description: "Фінальний запис." },
      ],
    },
    support: {
      label: "WhatsApp",
      title: "Канал, підготовлений до розширеної підтримки.",
      description:
        "Контактний контур вже структурований для автоматизації повторних запитань у майбутніх фазах без втрати контролю команди.",
    },
    closing: {
      label: "Запис",
      title: "Підтвердіть вашу первинну консультацію.",
      description: "Без зобов'язань.",
    },
  },
  bookingPage: {
    ...dictionaries.en.bookingPage,
    hero: {
      label: "Запис на консультацію",
      title: "Зрозумілий запис без зайвого тертя.",
      description: "Підтвердження через WhatsApp.",
      panelEyebrow: "Консультація",
      panelDescription: "Орієнтовна тривалість: 30 хвилин.",
    },
    includes: {
      label: "Що включено",
      title: "Перший візит",
      description: "Вся необхідна інформація перед рішенням про процедуру.",
      rows: [
        "Діагностика обличчя або тіла.",
        "Пріоритетна ціль і стартовий протокол.",
        "Орієнтовний бюджет.",
      ],
    },
    process: {
      label: "Процес",
      title: "Запит, підтвердження і консультація.",
      description: "Проста послідовність без плутанини.",
      steps: [
        { id: "01", title: "Запит", description: "Ціль і часовий слот." },
        { id: "02", title: "Підтвердження", description: "Графік і умови." },
        { id: "03", title: "Консультація", description: "Діагностика і рекомендація." },
      ],
    },
    closing: {
      label: "Підтвердження",
      title: "Запишіться на консультацію прямо зараз.",
      description: "Без зобов'язань.",
    },
  },
  legalPages: {
    legalNotice: {
      title: "Правова інформація",
      intro: "Загальна інформація про власника, правила використання сайту та застосовні умови.",
      holderTitle: "Ідентифікація власника",
      holderDescription:
        "Власник: Centros Ideal Andorra. Контакт: illa.carlemany@centresideal.com · +376 688 080.",
      conditionsTitle: "Загальні умови",
      conditionsIntro:
        "Доступ до сайту і навігація означають відповідальне використання контенту та дотримання чинного регулювання.",
      useTitle: "Належне використання",
      useDescription:
        "Користувач зобов'язується використовувати сайт законно та не порушувати його роботу.",
      intellectualTitle: "Інтелектуальна власність",
      intellectualDescription:
        "Тексти, торгові марки і візуальна ідентичність захищені чинним законодавством.",
    },
    privacy: {
      title: "Політика приватності",
      intro: "Політика збирання та обробки персональних даних користувача.",
      dataTitle: "Які дані обробляються",
      dataDescription:
        "Ідентифікаційні та контактні дані, які надаються у запитах або бронюваннях.",
      purposeTitle: "Мета обробки",
      purposeDescription:
        "Опрацювання запитів, записів і комунікацій, пов'язаних із запитаною послугою.",
      rightsTitle: "Реалізація прав",
      rightsIntro:
        "Користувач може реалізувати права доступу, виправлення, видалення та заперечення через офіційний канал.",
      rightsCardTitle: "Подання запиту",
      rightsCardDescription:
        "Запити обробляються відповідно до чинного регулювання та встановлених строків.",
    },
    cookies: {
      title: "Політика файлів cookie",
      intro: "Інформація про використання технічних і аналітичних cookie на сайті.",
      technicalTitle: "Технічні cookie",
      technicalDescription:
        "Необхідні для базової роботи сайту та безпечної навігації.",
      analyticsTitle: "Аналітичні cookie",
      analyticsDescription:
        "Дають змогу аналізувати використання сайту та покращувати його продуктивність.",
      consentTitle: "Керування згодою",
      consentDescription:
        "Користувач може прийняти, відхилити або змінити налаштування в панелі згоди.",
      configTitle: "Налаштування",
      configIntro:
        "Налаштування можна змінити будь-коли через менеджер cookie.",
      configCardTitle: "Деталі cookie",
      configCardDescription:
        "Категорії, тривалість і цілі описані відповідно до активних cookie.",
    },
  },
  whatsapp: {
    floatingLabel: "Підтримка WhatsApp",
    supportLabel: "Канал підтримки",
    supportTitle: "Операційна підтримка через WhatsApp",
    supportDescription:
      "Основний канал для питань, координації консультації та підтвердження запису.",
    supportHumanNotice:
      "Наразі підтримку веде команда центру.",
    supportFutureNotice:
      "Архітектура підготовлена до підключення розширеного рівня асистування в наступних фазах.",
  },
  chat: {
    ...dictionaries.en.chat,
    launcherLabel: "Асистент",
    launcherAriaLabel: "Відкрити цифрового асистента",
    panelLabel: "Цифровий асистент",
    panelTitle: "Швидка орієнтація",
    panelDescription:
      "Допоможу з процедурами, орієнтовними термінами і записом на консультацію.",
    welcomeMessage:
      "Вітаю, я цифровий асистент Centros Ideal Andorra. Допоможу з процедурами та процесом запису.",
    inputPlaceholder: "Напишіть ваше питання",
    inputAriaLabel: "Повідомлення для асистента",
    sendLabel: "Надіслати",
    closeLabel: "Закрити",
    resetLabel: "Скинути",
    thinkingLabel: "Думаю...",
    errorMessage:
      "Зараз не вдалося відповісти. Спробуйте ще раз за кілька секунд.",
    rateLimitError:
      "Забагато запитів поспіль. Зачекайте хвилину і спробуйте знову.",
    maxLengthError: "Повідомлення перевищує допустиму довжину",
    openInContactLabel: "Відкрити асистента",
    openInContactDescription:
      "Доступний для частих запитань перед записом.",
    bookingHint:
      "Фінальну рекомендацію підтверджують під час очної консультації в центрі.",
  },
};

dictionaries.ru = {
  ...dictionaries.en,
  languageLabel: "Язык",
  localeName: "Русский",
  seo: {
    title: "Centros Ideal Andorra",
    description:
      "Centros Ideal Andorra: диодная лазерная эпиляция и продвинутая эстетика в Illa Carlemany, с профессиональной консультацией и клиническим сопровождением.",
  },
  brand: {
    ...dictionaries.en.brand,
    floor: "Второй этаж",
    hoursPending: "График на финальной валидации. Уточняйте доступность через WhatsApp.",
  },
  nav: {
    treatments: "Процедуры",
    about: "О нас",
    results: "Результаты",
    contact: "Контакт",
    book: "Запись",
  },
  legal: {
    legalNotice: "Правовая информация",
    privacy: "Конфиденциальность",
    cookies: "Файлы cookie",
  },
  cta: {
    book: "Записаться на консультацию",
    whatsapp: "WhatsApp",
    viewTreatments: "Смотреть процедуры",
    viewResults: "Смотреть результаты",
    confirmWhatsapp: "Подтвердить в WhatsApp",
  },
  global: {
    noCommitment: "Без обязательств.",
    firstVisit: "Первый визит",
    contactDirect: "Прямой контакт",
  },
  footer: {
    topEyebrow: "Centros Ideal Andorra",
    topTitle: "Запишитесь на консультацию или свяжитесь через WhatsApp.",
    description:
      "Центр, специализирующийся на диодной лазерной эпиляции и продвинутой эстетике, с клиническим подходом и персональным сопровождением.",
    navigation: "Навигация",
    legal: "Правовая информация",
    contact: "Контакт",
    rights: "Все права защищены.",
  },
  home: {
    ...dictionaries.en.home,
    closing: {
      label: "Запись",
      title: "Запишитесь на консультацию уже сейчас.",
      description: "Без обязательств.",
    },
  },
  treatmentsPage: {
    ...dictionaries.en.treatmentsPage,
    closing: {
      label: "Запись",
      title: "Запросите персональную консультацию.",
      description: "Финальную рекомендацию подтверждаем на очном визите.",
    },
  },
  resultsPage: {
    ...dictionaries.en.resultsPage,
    hero: {
      label: "Результаты",
      title: "Результаты с профессиональным критерием.",
      description: "Клиническая документация и сопровождение.",
      panelEyebrow: "Клиническая рамка",
      panelDescription: "Диагностика, сопровождение и пересмотр.",
    },
    documentation: {
      label: "Документация",
      title: "Как мы фиксируем динамику.",
      description: "Структурированный протокол в рамках консультации.",
      pillars: [
        { title: "Первичная диагностика", description: "Задокументированная стартовая точка." },
        { title: "Сопровождение", description: "Контроль по фазам." },
        { title: "Критерий публикации", description: "Только согласованные кейсы." },
      ],
    },
    visual: {
      label: "Визуальная документация",
      title: "Авторизованные клинические материалы.",
      description: "Визуальные материалы публикуются только по разрешению.",
      assets: [
        {
          id: "registro_1",
          label: "Реестр 01",
          src: "/images/pages/resultados/comparativas/comparativa-antes-tratamiento.png",
          alt: "Клинический реестр эволюции",
        },
        {
          id: "registro_2",
          label: "Реестр 02",
          src: "/images/pages/resultados/comparativas/comparativa-despues-tratamiento.png",
          alt: "Авторизованное визуальное сравнение",
        },
      ],
    },
    transparency: {
      label: "Прозрачность",
      title: "Ответственная коммуникация.",
      description: "Клиническая информация и реалистичные ожидания.",
      rows: [
        "Мы не публикуем обещаний результата.",
        "Динамика зависит от конкретного клинического случая.",
        "Финальные показания подтверждаются на консультации.",
      ],
    },
    closing: {
      label: "Запись",
      title: "Запросите индивидуальную консультацию.",
      description: "Рекомендация формируется очно в центре.",
    },
  },
  aboutPage: {
    ...dictionaries.en.aboutPage,
    hero: {
      label: "О нас",
      title: "Центр продвинутой эстетики в Illa Carlemany.",
      description: "Диодная лазерная эпиляция и персонализированные протоколы.",
      panelEyebrow: "Центр",
      panelDescription: "Профессиональное сопровождение и системный контроль.",
    },
    method: {
      label: "Подход к работе",
      title: "Критерий, метод и контроль.",
      description: "Стабильная клиническая структура без импровизации.",
      principles: [
        { title: "Экспертная диагностика", description: "Предварительная клиническая оценка перед запуском плана." },
        { title: "План по фазам", description: "Цель, частота и точки пересмотра." },
        { title: "Сопровождение", description: "Корректировка по реальной динамике." },
      ],
    },
    identity: {
      label: "Идентичность центра",
      title: "Доверие и непрерывность.",
      highlights: [
        "Индивидуальные кабинеты и персонализированное сопровождение.",
        "Диодный лазер и продвинутая эстетика в одном центре.",
        "Прямая координация через WhatsApp.",
      ],
    },
    closing: {
      label: "Контакт",
      title: "Обсудите ваш кейс напрямую с командой центра.",
      description: "Ответ в соответствии с доступностью.",
    },
  },
  contactPage: {
    ...dictionaries.en.contactPage,
    hero: {
      label: "Контакт",
      title: "Прямой канал связи с центром.",
      description: "Сопровождение до записи и дальнейшее операционное сопровождение.",
      panelEyebrow: "Поддержка",
      panelDescription: "Ответ в рамках графика и доступности.",
    },
    channels: {
      label: "Каналы",
      title: "Операционный контакт.",
      description: "Ключевая информация до подтверждения визита.",
      rows: [
        { label: "WhatsApp", value: "688 080", note: "Приоритетный канал." },
        { label: "Телефон", value: "688 080", note: "Ответ в рабочее время." },
        { label: "Email", value: "illa.carlemany@centresideal.com", note: "Общие запросы." },
        { label: "Адрес", value: "Av. Carlemany, 70, AD700 Andorra", note: "Illa Carlemany · второй этаж." },
        { label: "График", value: "Ожидает подтверждения", note: "Обновим после официальной валидации." },
      ],
    },
    process: {
      label: "Процесс",
      title: "Ответ и подтверждение.",
      description: "Короткая и понятная последовательность.",
      steps: [
        { id: "01", title: "Запрос", description: "Цель и временной слот." },
        { id: "02", title: "Ответ", description: "Доступность и условия." },
        { id: "03", title: "Подтверждение", description: "Финальная запись." },
      ],
    },
    support: {
      label: "WhatsApp",
      title: "Канал, подготовленный к расширенной поддержке.",
      description:
        "Контактная структура уже готова к автоматизации повторяющихся запросов в будущих фазах без потери контроля команды.",
    },
    closing: {
      label: "Запись",
      title: "Подтвердите вашу первичную консультацию.",
      description: "Без обязательств.",
    },
  },
  bookingPage: {
    ...dictionaries.en.bookingPage,
    hero: {
      label: "Запись на консультацию",
      title: "Понятная запись без лишнего трения.",
      description: "Подтверждение через WhatsApp.",
      panelEyebrow: "Консультация",
      panelDescription: "Ориентировочная длительность: 30 минут.",
    },
    includes: {
      label: "Что включено",
      title: "Первый визит",
      description: "Вся необходимая информация до решения о процедуре.",
      rows: [
        "Диагностика лица или тела.",
        "Приоритетная цель и стартовый протокол.",
        "Ориентировочный бюджет.",
      ],
    },
    process: {
      label: "Процесс",
      title: "Запрос, подтверждение и консультация.",
      description: "Простая последовательность без путаницы.",
      steps: [
        { id: "01", title: "Запрос", description: "Цель и временной слот." },
        { id: "02", title: "Подтверждение", description: "График и условия." },
        { id: "03", title: "Консультация", description: "Диагностика и рекомендация." },
      ],
    },
    closing: {
      label: "Подтверждение",
      title: "Запишитесь на консультацию прямо сейчас.",
      description: "Без обязательств.",
    },
  },
  legalPages: {
    legalNotice: {
      title: "Правовая информация",
      intro: "Общая информация о владельце, правилах использования сайта и применимых условиях.",
      holderTitle: "Идентификация владельца",
      holderDescription:
        "Владелец: Centros Ideal Andorra. Контакт: illa.carlemany@centresideal.com · +376 688 080.",
      conditionsTitle: "Общие условия",
      conditionsIntro:
        "Доступ к сайту и навигация означают ответственное использование контента и соблюдение действующего регулирования.",
      useTitle: "Надлежащее использование",
      useDescription:
        "Пользователь обязуется использовать сайт законно и не нарушать его работу.",
      intellectualTitle: "Интеллектуальная собственность",
      intellectualDescription:
        "Тексты, товарные знаки и визуальная идентичность защищены применимым законодательством.",
    },
    privacy: {
      title: "Политика конфиденциальности",
      intro: "Политика сбора и обработки персональных данных пользователя.",
      dataTitle: "Какие данные обрабатываются",
      dataDescription:
        "Идентификационные и контактные данные, предоставляемые в запросах или бронировании.",
      purposeTitle: "Цель обработки",
      purposeDescription:
        "Обработка запросов, записей и коммуникаций, связанных с запрошенной услугой.",
      rightsTitle: "Реализация прав",
      rightsIntro:
        "Пользователь может реализовать права доступа, исправления, удаления и возражения через официальный канал.",
      rightsCardTitle: "Подача запроса",
      rightsCardDescription:
        "Запросы обрабатываются в соответствии с действующим регулированием и установленными сроками.",
    },
    cookies: {
      title: "Политика файлов cookie",
      intro: "Информация об использовании технических и аналитических cookie на сайте.",
      technicalTitle: "Технические cookie",
      technicalDescription:
        "Необходимы для базовой работы сайта и безопасной навигации.",
      analyticsTitle: "Аналитические cookie",
      analyticsDescription:
        "Позволяют анализировать использование сайта и улучшать производительность.",
      consentTitle: "Управление согласием",
      consentDescription:
        "Пользователь может принять, отклонить или изменить настройки в панели согласия.",
      configTitle: "Настройки",
      configIntro:
        "Настройки можно изменить в любой момент через менеджер cookie.",
      configCardTitle: "Детали cookie",
      configCardDescription:
        "Категории, срок хранения и цели описаны по активным cookie.",
    },
  },
  whatsapp: {
    floatingLabel: "Поддержка WhatsApp",
    supportLabel: "Канал поддержки",
    supportTitle: "Операционная поддержка через WhatsApp",
    supportDescription:
      "Основной канал для вопросов, согласования консультации и подтверждения записи.",
    supportHumanNotice:
      "Сейчас поддержку ведёт команда центра.",
    supportFutureNotice:
      "Архитектура готова к добавлению продвинутого слоя ассистирования на следующих этапах.",
  },
  chat: {
    ...dictionaries.en.chat,
    launcherLabel: "Ассистент",
    launcherAriaLabel: "Открыть цифрового ассистента",
    panelLabel: "Цифровой ассистент",
    panelTitle: "Быстрая навигация",
    panelDescription:
      "Помогу с процедурами, ориентировочными сроками и записью на консультацию.",
    welcomeMessage:
      "Здравствуйте, я цифровой ассистент Centros Ideal Andorra. Помогу с процедурами и процессом записи.",
    inputPlaceholder: "Введите ваш вопрос",
    inputAriaLabel: "Сообщение ассистенту",
    sendLabel: "Отправить",
    closeLabel: "Закрыть",
    resetLabel: "Сбросить",
    thinkingLabel: "Думаю...",
    errorMessage:
      "Сейчас не удалось ответить. Попробуйте снова через несколько секунд.",
    rateLimitError:
      "Слишком много запросов подряд. Подождите минуту и попробуйте снова.",
    maxLengthError: "Сообщение превышает допустимую длину",
    openInContactLabel: "Открыть ассистента",
    openInContactDescription:
      "Доступен для частых вопросов перед записью.",
    bookingHint:
      "Финальная рекомендация подтверждается на очной консультации в центре.",
  },
};

export function getDictionary(locale: Locale): SiteDictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
