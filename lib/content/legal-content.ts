import type { Locale } from "@/lib/i18n/config";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  eyebrowLabel?: string;
  pendingTitle?: string;
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
    eyebrowLabel: "Legal",
    pendingTitle: "Campos pendientes de cierre legal",
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
    eyebrowLabel: "Legal",
    pendingTitle: "Campos pendientes de cierre legal",
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
    eyebrowLabel: "Legal",
    pendingTitle: "Campos pendientes de cierre legal",
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

const enContent: LegalContent = {
  ...esContent,
  legalNotice: {
    ...esContent.legalNotice,
    eyebrowLabel: "Legal",
    pendingTitle: "Pending legal closure fields",
    title: "Legal notice",
    intro:
      "This website provides information about aesthetics and laser hair removal services delivered in Andorra. It has been prepared with enhanced diligence criteria and must be completed with final corporate data before legal closure.",
    effectiveDateLabel: "Review date",
    pendingItems: [
      "[PENDING_VALIDATION] Exact legal entity name.",
      "[PENDING_VALIDATION] Responsible party NRT.",
      "[PENDING_VALIDATION] Full registered address.",
      "[PENDING_VALIDATION] Registry data or commercial licence if applicable.",
    ],
    statusNote:
      "Legal baseline prepared for professional publication. Final validation by local legal counsel and closure of registry data are still pending.",
    sections: [
      {
        title: "1. Ownership and contact details",
        paragraphs: [
          "Commercial name: Centros Ideal Andorra.",
          "General channel: illa.carlemany@centresideal.com.",
          "Contact phone: +376 688 080.",
          "Operational address: Av. Carlemany, 70, AD700 Andorra.",
        ],
      },
      {
        title: "2. Website purpose",
        paragraphs: [
          "The website has an informative, commercial and pre-booking purpose for aesthetic services.",
          "Published information does not replace individual professional assessment or medical advice.",
        ],
      },
      {
        title: "3. Terms of use",
        bullets: [
          "Users agree to use the website lawfully and diligently.",
          "Any use that may damage, overload or compromise service security is prohibited.",
          "The owner may update content, structure and services for operational or legal reasons.",
        ],
      },
      {
        title: "4. Intellectual and industrial property",
        bullets: [
          "Design, texts, brand, images and distinctive elements are protected by applicable regulations.",
          "Reproduction, distribution or transformation is not authorised without prior express permission.",
        ],
      },
      {
        title: "5. Availability, links and liability",
        bullets: [
          "Reasonable measures are applied to ensure service continuity without guaranteeing absolute incident-free operation.",
          "The owner is not responsible for third-party content or policies linked from this website.",
          "Users are responsible for how they use published information.",
        ],
      },
      {
        title: "6. Communications and marketing",
        bullets: [
          "Commercial communications are sent only under valid legal basis or consent when required.",
          "Users can revoke non-essential communication permissions at any time.",
        ],
      },
      {
        title: "7. Regulatory framework (Andorra)",
        bullets: [
          "Constitution of the Principality of Andorra (privacy and private life protection).",
          "Llei 29/2021, of 28 October, on personal data protection.",
          "APDA guidance and criteria for legal notice, privacy and cookies in websites.",
          "Other applicable Andorran regulations for digital services and e-commerce.",
        ],
      },
    ],
  },
  privacy: {
    ...esContent.privacy,
    eyebrowLabel: "Legal",
    pendingTitle: "Pending legal closure fields",
    title: "Privacy policy",
    intro:
      "This policy explains how personal data is processed on the website and in the management of enquiries, pre-bookings and operational follow-up.",
    effectiveDateLabel: "Review date",
    pendingItems: [
      "[PENDING_VALIDATION] Full controller identification (legal name and NRT).",
      "[PENDING_VALIDATION] Data Protection Officer confirmation (if legally required).",
      "[PENDING_VALIDATION] Final list of processors and active tools.",
    ],
    statusNote:
      "Enhanced document for Andorran context (Llei 29/2021). It still requires corporate data closure and legal counsel validation before final irreversible version.",
    sections: [
      {
        title: "1. Data controller",
        paragraphs: [
          "Commercial controller: Centros Ideal Andorra.",
          "General contact: illa.carlemany@centresideal.com.",
          "Privacy channel: illa.carlemany@centresideal.com (until a specific channel is assigned if needed).",
        ],
      },
      {
        title: "2. Categories of data processed",
        bullets: [
          "Identification and contact data: name, phone and email.",
          "Agenda and appointment preferences (time window, professional, availability).",
          "Consultation context data voluntarily provided by the user.",
          "Minimum technical data for security, language and website operation.",
        ],
      },
      {
        title: "3. Processing purposes",
        bullets: [
          "Answer enquiries and information requests.",
          "Manage pre-bookings, agenda coordination and follow-up.",
          "Maintain operational traceability and non-medical care continuity.",
          "Improve web experience with optional analytics only when valid consent exists.",
        ],
      },
      {
        title: "4. Legal basis",
        bullets: [
          "Execution of pre-contractual steps requested by the data subject.",
          "Compliance with applicable legal obligations.",
          "Legitimate interest in security, abuse prevention and internal organisation.",
          "Consent for optional purposes (for example, non-essential analytics).",
        ],
      },
      {
        title: "5. Data retention",
        bullets: [
          "Enquiries not converted into appointments are retained for limited, reviewable periods.",
          "Service-linked data is retained according to legal, tax and liability obligations.",
          "Technical and security logs are retained minimally and proportionately.",
        ],
      },
      {
        title: "6. Recipients and processors",
        bullets: [
          "Data is not shared with third parties except legal obligation or operational necessity.",
          "When providers are involved, processing clauses and confidentiality duties are established.",
          "Data minimisation principle applies: access only when functionally necessary.",
        ],
      },
      {
        title: "7. International transfers",
        paragraphs: [
          "As a general rule, no international transfers outside Andorra are expected without proper legal basis and safeguards.",
          "If future tools require international processing, this policy will be updated and explicitly communicated.",
        ],
      },
      {
        title: "8. Data subject rights",
        bullets: [
          "Rights of access, rectification, erasure, objection, restriction and portability when applicable.",
          "Rights can be exercised in writing through the stated privacy channel.",
          "If no satisfactory response is received, users can contact APDA as supervisory authority.",
          "APDA reference contact: apda@apda.ad | +376 808 115.",
        ],
      },
      {
        title: "9. Security and confidentiality",
        bullets: [
          "Access control, configuration reviews and data minimisation measures.",
          "Security best practices on forms, storage and internal operations.",
          "Confidentiality commitment for staff and authorised collaborators.",
        ],
      },
      {
        title: "10. Policy updates",
        paragraphs: [
          "This policy may be updated to reflect legal, technical or operational changes.",
          "The review date shown in the header indicates the latest published update.",
        ],
      },
    ],
  },
  cookies: {
    ...esContent.cookies,
    eyebrowLabel: "Legal",
    pendingTitle: "Pending legal closure fields",
    title: "Cookie policy",
    intro:
      "This policy details the use of cookies and local storage on the website, the consent system and how preferences can be managed at any time.",
    effectiveDateLabel: "Review date",
    pendingItems: [
      "[PENDING_VALIDATION] Final inventory of measurement tools if analytics is expanded.",
      "[PENDING_VALIDATION] Specific third-party policy if external services with own cookies are added.",
    ],
    statusNote:
      "Model aligned with APDA web recommendations: granular consent, optional-cookie rejection and permanent access to preference management.",
    sections: [
      {
        title: "1. What cookies are",
        paragraphs: [
          "Cookies are files or identifiers stored by the browser to remember settings or support technical and measurement functions.",
          "Local storage is also used to keep consent preferences.",
        ],
      },
      {
        title: "2. Cookie categories used on this website",
        bullets: [
          "Essential technical cookies: required for basic operation (language, security, session continuity).",
          "Optional analytics cookies: activated only when users explicitly accept this category.",
          "Browsing is not conditioned to accepting optional cookies (no cookie wall).",
        ],
      },
      {
        title: "3. Current technical inventory",
        bullets: [
          "ideal_locale: essential cookie used to remember selected language.",
          "ideal.cookies.consent.v1: local storage key used to keep cookie preferences.",
          "Internal analytics logs: only after explicit consent for analytics category.",
        ],
      },
      {
        title: "4. Consent management",
        bullets: [
          "Initial banner with clear actions: accept all, reject optional and save selection.",
          "Preference panel permanently accessible from footer (Manage cookies).",
          "Consent can be withdrawn or changed at any time.",
        ],
      },
      {
        title: "5. Retention and review",
        bullets: [
          "Preferences are stored until users change them or clear browser data.",
          "Cookie inventory is reviewed periodically to maintain legal and technical consistency.",
        ],
      },
      {
        title: "6. Rights and channels",
        bullets: [
          "Privacy requests and rights can be sent through the channel stated in the privacy policy.",
          "APDA acts as reference supervisory authority in Andorra.",
        ],
      },
      {
        title: "7. Regulatory references",
        bullets: [
          "Llei 29/2021, of 28 October, on personal data protection.",
          "APDA models and guidance for legal notice, privacy and cookie policies in web projects.",
          "Other applicable Andorran regulations for digital services and electronic communications.",
        ],
      },
    ],
  },
};

const ukContent: LegalContent = {
  ...enContent,
  legalNotice: {
    ...enContent.legalNotice,
    eyebrowLabel: "Правова інформація",
    pendingTitle: "Пункти, що потребують юридичного підтвердження",
    title: "Правова інформація",
    intro:
      "Цей сайт інформує про естетичні послуги та лазерну епіляцію в Андоррі. Документ підготовлено з підвищеним рівнем юридичної обачності й підлягає фінальній верифікації реєстраційних даних.",
    effectiveDateLabel: "Дата перегляду",
    statusNote:
      "Юридична база готова до професійної публікації. Потрібне фінальне погодження локального юридичного консультанта та закриття реєстраційних даних.",
    pendingItems: [
      "[ПІДТВЕРДИТИ] Точна юридична назва власника.",
      "[ПІДТВЕРДИТИ] NRT відповідальної сторони.",
      "[ПІДТВЕРДИТИ] Повна юридична адреса.",
      "[ПІДТВЕРДИТИ] Реєстраційні дані або комерційна ліцензія (за потреби).",
    ],
    sections: [
      {
        title: "1. Власник і контактні дані",
        paragraphs: [
          "Комерційна назва: Centros Ideal Andorra.",
          "Загальний канал: illa.carlemany@centresideal.com.",
          "Контактний телефон: +376 688 080.",
          "Операційна адреса: Av. Carlemany, 70, AD700 Andorra.",
        ],
      },
      {
        title: "2. Призначення сайту",
        paragraphs: [
          "Сайт має інформаційну, комерційну та функцію попереднього запису на естетичні послуги.",
          "Опублікована інформація не замінює індивідуальну професійну оцінку або медичну консультацію.",
        ],
      },
      {
        title: "3. Умови використання",
        bullets: [
          "Користувач зобов'язується використовувати сайт законно та добросовісно.",
          "Заборонене використання, що може шкодити безпеці, доступності або стабільності сервісу.",
          "Власник може оновлювати контент, структуру і сервіси з операційних або юридичних причин.",
        ],
      },
      {
        title: "4. Інтелектуальна та промислова власність",
        bullets: [
          "Дизайн, тексти, бренд, зображення та інші елементи захищені чинним законодавством.",
          "Відтворення, розповсюдження чи переробка без попереднього письмового дозволу заборонені.",
        ],
      },
      {
        title: "5. Доступність, зовнішні посилання і відповідальність",
        bullets: [
          "Вживаються розумні заходи для безперервності сервісу, без гарантії абсолютної відсутності технічних збоїв.",
          "Власник не відповідає за контент або політики зовнішніх ресурсів, на які ведуть посилання.",
          "Користувач несе відповідальність за спосіб використання опублікованої інформації.",
        ],
      },
      {
        title: "6. Комунікації та маркетинг",
        bullets: [
          "Маркетингові повідомлення надсилаються лише за наявності належної правової підстави або згоди.",
          "Користувач може відкликати дозвіл на неключові комунікації у будь-який момент.",
        ],
      },
      {
        title: "7. Нормативна база (Андорра)",
        bullets: [
          "Конституція Князівства Андорра (право на приватність).",
          "Llei 29/2021 від 28 жовтня щодо захисту персональних даних.",
          "Критерії та рекомендації APDA для правової інформації, політики приватності та політики файлів cookie на вебсайтах.",
          "Інші чинні норми Андорри щодо цифрових сервісів і електронної комерції.",
        ],
      },
    ],
  },
  privacy: {
    ...enContent.privacy,
    eyebrowLabel: "Правова інформація",
    pendingTitle: "Пункти, що потребують юридичного підтвердження",
    title: "Політика приватності",
    intro:
      "Ця політика пояснює, як обробляються персональні дані на сайті та в процесах запитів, попереднього запису й операційного супроводу.",
    effectiveDateLabel: "Дата перегляду",
    statusNote:
      "Документ посилено під нормативний контекст Андорри (Llei 29/2021). Потребує фінального підтвердження юридичних реквізитів і консультаційної валідації.",
    pendingItems: [
      "[ПІДТВЕРДИТИ] Повна ідентифікація контролера (юридична назва та NRT).",
      "[ПІДТВЕРДИТИ] Підтвердження DPO (якщо вимагається законом).",
      "[ПІДТВЕРДИТИ] Кінцевий перелік процесорів і активних інструментів.",
    ],
    sections: [
      {
        title: "1. Контролер даних",
        paragraphs: [
          "Комерційний контролер: Centros Ideal Andorra.",
          "Загальний контакт: illa.carlemany@centresideal.com.",
          "Канал приватності: illa.carlemany@centresideal.com (до призначення окремого каналу).",
        ],
      },
      {
        title: "2. Категорії даних",
        bullets: [
          "Ідентифікаційні та контактні дані: ім'я, телефон, електронна пошта.",
          "Дані запису і переваг за часом/спеціалістом.",
          "Контекст запиту, добровільно наданий користувачем.",
          "Мінімальні технічні дані для безпеки, мови і роботи сайту.",
        ],
      },
      {
        title: "3. Цілі обробки",
        bullets: [
          "Опрацювання запитів і звернень.",
          "Керування записами, координація графіка та супровід.",
          "Операційна відстежуваність сервісу.",
          "Покращення досвіду користування сайтом через опційну аналітику лише за валідної згоди.",
        ],
      },
      {
        title: "4. Правова підстава",
        bullets: [
          "Виконання переддоговірних дій на запит суб'єкта даних.",
          "Дотримання юридичних зобов'язань.",
          "Легітимний інтерес у безпеці та внутрішній організації.",
          "Згода для опційних цілей (наприклад, неключової аналітики).",
        ],
      },
      {
        title: "5. Строки зберігання",
        bullets: [
          "Запити без переходу в запис зберігаються обмежений період із регулярним переглядом.",
          "Дані, пов'язані з послугою, зберігаються відповідно до юридичних і податкових вимог.",
          "Технічні та безпекові логи зберігаються мінімально і пропорційно.",
        ],
      },
      {
        title: "6. Отримувачі та процесори",
        bullets: [
          "Дані не передаються третім сторонам, окрім випадків юридичного обов'язку або операційної необхідності.",
          "Із постачальниками укладаються договори обробки та конфіденційності.",
          "Діє принцип мінімізації доступу: лише за функціональною потребою.",
        ],
      },
      {
        title: "7. Міжнародні передачі",
        paragraphs: [
          "У загальному випадку міжнародні передачі за межі Андорри не передбачаються без належних гарантій.",
          "У разі підключення інструментів з міжнародною обробкою політика буде оновлена й комунікована.",
        ],
      },
      {
        title: "8. Права суб'єктів даних",
        bullets: [
          "Права доступу, виправлення, видалення, заперечення, обмеження та переносимості (коли застосовно).",
          "Запити подаються письмово через вказаний канал приватності.",
          "У разі відсутності задовільної відповіді можна звернутися до APDA.",
          "Контакти APDA: apda@apda.ad | +376 808 115.",
        ],
      },
      {
        title: "9. Безпека і конфіденційність",
        bullets: [
          "Контроль доступу, перегляд конфігурацій і мінімізація даних.",
          "Безпекові практики у формах, зберіганні та внутрішніх процесах.",
          "Зобов'язання конфіденційності персоналу й авторизованих підрядників.",
        ],
      },
      {
        title: "10. Оновлення політики",
        paragraphs: [
          "Політика може змінюватися у зв'язку з правовими, технічними чи операційними оновленнями.",
          "Дата перегляду у верхній частині сторінки відображає останню публічну версію.",
        ],
      },
    ],
  },
  cookies: {
    ...enContent.cookies,
    eyebrowLabel: "Правова інформація",
    pendingTitle: "Пункти, що потребують юридичного підтвердження",
    title: "Політика файлів cookie",
    intro:
      "Ця політика описує використання файлів cookie і локального сховища, механізм згоди та керування налаштуваннями у будь-який момент.",
    effectiveDateLabel: "Дата перегляду",
    statusNote:
      "Модель узгоджена з рекомендаціями APDA: деталізована згода, можливість відмови від опційних файлів cookie та постійний доступ до керування налаштуваннями.",
    pendingItems: [
      "[ПІДТВЕРДИТИ] Фінальний перелік аналітичних інструментів (у разі розширення).",
      "[ПІДТВЕРДИТИ] Окрема політика третіх сторін (якщо підключаються зовнішні сервіси).",
    ],
    sections: [
      {
        title: "1. Що таке файли cookie",
        paragraphs: [
          "Файли cookie - це ідентифікатори, які браузер зберігає для підтримки налаштувань і технічних функцій.",
          "Також використовується локальне сховище для збереження налаштувань згоди.",
        ],
      },
      {
        title: "2. Категорії файлів cookie на сайті",
        bullets: [
          "Технічні (обов'язкові): потрібні для базової роботи (мова, безпека, сесійна безперервність).",
          "Аналітичні (опційні): активуються лише після явної згоди користувача.",
          "Доступ до сайту не блокується при відмові від опційних файлів cookie.",
        ],
      },
      {
        title: "3. Поточний технічний перелік",
        bullets: [
          "ideal_locale: обов'язковий файл cookie для запам'ятовування мови.",
          "ideal.cookies.consent.v1: ключ локального сховища для збереження рішень щодо файлів cookie.",
          "Внутрішні аналітичні записи: лише після згоди на аналітичну категорію.",
        ],
      },
      {
        title: "4. Керування згодою",
        bullets: [
          "Початковий банер з чіткими діями: прийняти все, відхилити опційні, зберегти вибір.",
          "Панель налаштувань постійно доступна у футері (керування файлами cookie).",
          "Згоду можна відкликати або змінити у будь-який момент.",
        ],
      },
      {
        title: "5. Зберігання і перегляд",
        bullets: [
          "Налаштування зберігаються, доки користувач їх не змінить або не очистить дані браузера.",
          "Перелік файлів cookie регулярно переглядається для юридичної та технічної відповідності.",
        ],
      },
      {
        title: "6. Права і канали",
        bullets: [
          "Запити щодо приватності подаються через канал, зазначений у політиці приватності.",
          "APDA є профільним наглядовим органом в Андоррі.",
        ],
      },
      {
        title: "7. Нормативні посилання",
        bullets: [
          "Llei 29/2021 від 28 жовтня щодо захисту персональних даних.",
          "Шаблони й рекомендації APDA для правової інформації, політики приватності та політики файлів cookie у вебпроєктах.",
          "Інші застосовні норми Андорри щодо цифрових сервісів і електронних комунікацій.",
        ],
      },
    ],
  },
};

const ruContent: LegalContent = {
  ...enContent,
  legalNotice: {
    ...enContent.legalNotice,
    eyebrowLabel: "Правовая информация",
    pendingTitle: "Пункты, требующие юридического подтверждения",
    title: "Правовая информация",
    intro:
      "Этот сайт информирует об эстетических услугах и лазерной эпиляции в Андорре. Документ подготовлен с повышенной юридической тщательностью и подлежит финальной верификации реестровых данных.",
    effectiveDateLabel: "Дата пересмотра",
    statusNote:
      "Юридическая база готова к профессиональной публикации. Требуется финальное согласование локального юридического консультанта и закрытие реестровых данных.",
    pendingItems: [
      "[ПОДТВЕРДИТЬ] Точное юридическое наименование владельца.",
      "[ПОДТВЕРДИТЬ] NRT ответственной стороны.",
      "[ПОДТВЕРДИТЬ] Полный юридический адрес.",
      "[ПОДТВЕРДИТЬ] Реестровые данные или коммерческая лицензия (при необходимости).",
    ],
    sections: [
      {
        title: "1. Владелец и контактные данные",
        paragraphs: [
          "Коммерческое наименование: Centros Ideal Andorra.",
          "Общий канал: illa.carlemany@centresideal.com.",
          "Контактный телефон: +376 688 080.",
          "Операционный адрес: Av. Carlemany, 70, AD700 Andorra.",
        ],
      },
      {
        title: "2. Назначение сайта",
        paragraphs: [
          "Сайт имеет информационную, коммерческую и функцию предварительной записи на эстетические услуги.",
          "Опубликованная информация не заменяет индивидуальную профессиональную оценку или медицинскую консультацию.",
        ],
      },
      {
        title: "3. Условия использования",
        bullets: [
          "Пользователь обязуется использовать сайт законно и добросовестно.",
          "Запрещено использование, способное нарушить безопасность, доступность или стабильность сервиса.",
          "Владелец может обновлять контент, структуру и сервисы по операционным или юридическим причинам.",
        ],
      },
      {
        title: "4. Интеллектуальная и промышленная собственность",
        bullets: [
          "Дизайн, тексты, бренд, изображения и иные элементы защищены применимым законодательством.",
          "Воспроизведение, распространение или переработка без предварительного письменного разрешения запрещены.",
        ],
      },
      {
        title: "5. Доступность, внешние ссылки и ответственность",
        bullets: [
          "Принимаются разумные меры для непрерывности сервиса без гарантии полного отсутствия технических сбоев.",
          "Владелец не несет ответственности за контент и политики внешних ресурсов по ссылкам.",
          "Пользователь несет ответственность за способ использования опубликованной информации.",
        ],
      },
      {
        title: "6. Коммуникации и маркетинг",
        bullets: [
          "Маркетинговые сообщения отправляются только при наличии правового основания или согласия.",
          "Пользователь может отозвать согласие на неключевые коммуникации в любой момент.",
        ],
      },
      {
        title: "7. Нормативная база (Андорра)",
        bullets: [
          "Конституция Княжества Андорра (право на приватность).",
          "Llei 29/2021 от 28 октября о защите персональных данных.",
          "Критерии и рекомендации APDA по правовой информации, политике конфиденциальности и политике файлов cookie на веб-сайтах.",
          "Иные действующие нормы Андорры в сфере цифровых сервисов и электронной коммерции.",
        ],
      },
    ],
  },
  privacy: {
    ...enContent.privacy,
    eyebrowLabel: "Правовая информация",
    pendingTitle: "Пункты, требующие юридического подтверждения",
    title: "Политика конфиденциальности",
    intro:
      "Эта политика объясняет, как обрабатываются персональные данные на сайте и в процессах запросов, предварительной записи и операционного сопровождения.",
    effectiveDateLabel: "Дата пересмотра",
    statusNote:
      "Документ усилен под нормативный контекст Андорры (Llei 29/2021). Требует финального подтверждения юридических реквизитов и консультационной валидации.",
    pendingItems: [
      "[ПОДТВЕРДИТЬ] Полная идентификация контролера (юридическое название и NRT).",
      "[ПОДТВЕРДИТЬ] Подтверждение DPO (если требуется законом).",
      "[ПОДТВЕРДИТЬ] Финальный перечень процессоров и активных инструментов.",
    ],
    sections: [
      {
        title: "1. Контролер данных",
        paragraphs: [
          "Коммерческий контролер: Centros Ideal Andorra.",
          "Общий контакт: illa.carlemany@centresideal.com.",
          "Канал приватности: illa.carlemany@centresideal.com (до назначения отдельного канала).",
        ],
      },
      {
        title: "2. Категории данных",
        bullets: [
          "Идентификационные и контактные данные: имя, телефон, электронная почта.",
          "Данные записи и предпочтений по времени/специалисту.",
          "Контекст запроса, добровольно предоставленный пользователем.",
          "Минимальные технические данные для безопасности, языка и работы сайта.",
        ],
      },
      {
        title: "3. Цели обработки",
        bullets: [
          "Обработка запросов и обращений.",
          "Управление записями, координация графика и сопровождение.",
          "Операционная прослеживаемость сервиса.",
          "Улучшение пользовательского опыта на сайте через опциональную аналитику только при валидном согласии.",
        ],
      },
      {
        title: "4. Правовое основание",
        bullets: [
          "Выполнение преддоговорных действий по запросу субъекта данных.",
          "Соблюдение юридических обязательств.",
          "Легитимный интерес в безопасности и внутренней организации.",
          "Согласие для опциональных целей (например, неключевой аналитики).",
        ],
      },
      {
        title: "5. Сроки хранения",
        bullets: [
          "Запросы без перехода в запись хранятся ограниченный период с регулярным пересмотром.",
          "Данные, связанные с услугой, хранятся согласно юридическим и налоговым требованиям.",
          "Технические и безопасностные логи хранятся минимально и пропорционально.",
        ],
      },
      {
        title: "6. Получатели и процессоры",
        bullets: [
          "Данные не передаются третьим лицам, кроме случаев юридической обязанности или операционной необходимости.",
          "С поставщиками оформляются договоры обработки и конфиденциальности.",
          "Действует принцип минимизации доступа: только по функциональной необходимости.",
        ],
      },
      {
        title: "7. Международные передачи",
        paragraphs: [
          "В общем случае международные передачи за пределы Андорры не предполагаются без надлежащих гарантий.",
          "При подключении инструментов с международной обработкой политика будет обновлена и сообщена пользователям.",
        ],
      },
      {
        title: "8. Права субъектов данных",
        bullets: [
          "Права доступа, исправления, удаления, возражения, ограничения и переносимости (когда применимо).",
          "Запросы подаются письменно через указанный канал конфиденциальности.",
          "При отсутствии удовлетворительного ответа можно обратиться в APDA.",
          "Контакты APDA: apda@apda.ad | +376 808 115.",
        ],
      },
      {
        title: "9. Безопасность и конфиденциальность",
        bullets: [
          "Контроль доступа, пересмотр конфигураций и минимизация данных.",
          "Практики безопасности для форм, хранения и внутренних процессов.",
          "Обязательства конфиденциальности для персонала и авторизованных подрядчиков.",
        ],
      },
      {
        title: "10. Обновления политики",
        paragraphs: [
          "Политика может изменяться в связи с юридическими, техническими или операционными обновлениями.",
          "Дата пересмотра в верхней части страницы отражает последнюю опубликованную версию.",
        ],
      },
    ],
  },
  cookies: {
    ...enContent.cookies,
    eyebrowLabel: "Правовая информация",
    pendingTitle: "Пункты, требующие юридического подтверждения",
    title: "Политика файлов cookie",
    intro:
      "Эта политика описывает использование файлов cookie и локального хранилища, механизм согласия и управление настройками в любой момент.",
    effectiveDateLabel: "Дата пересмотра",
    statusNote:
      "Модель согласована с рекомендациями APDA: детализированное согласие, возможность отклонить опциональные файлы cookie и постоянный доступ к управлению настройками.",
    pendingItems: [
      "[ПОДТВЕРДИТЬ] Финальный перечень аналитических инструментов (при расширении).",
      "[ПОДТВЕРДИТЬ] Отдельная политика третьих сторон (если подключаются внешние сервисы).",
    ],
    sections: [
      {
        title: "1. Что такое файлы cookie",
        paragraphs: [
          "Файлы cookie - это идентификаторы, которые браузер хранит для поддержки настроек и технических функций.",
          "Также используется локальное хранилище для сохранения пользовательских решений по согласию.",
        ],
      },
      {
        title: "2. Категории файлов cookie на сайте",
        bullets: [
          "Технические (обязательные): нужны для базовой работы (язык, безопасность, непрерывность сессии).",
          "Аналитические (опциональные): активируются только после явного согласия пользователя.",
          "Доступ к сайту не блокируется при отказе от опциональных файлов cookie.",
        ],
      },
      {
        title: "3. Текущий технический перечень",
        bullets: [
          "ideal_locale: обязательный файл cookie для запоминания языка.",
          "ideal.cookies.consent.v1: ключ локального хранилища для хранения настроек файлов cookie.",
          "Внутренние аналитические записи: только после согласия на аналитическую категорию.",
        ],
      },
      {
        title: "4. Управление согласием",
        bullets: [
          "Стартовый баннер с понятными действиями: принять все, отклонить опциональные, сохранить выбор.",
          "Панель настроек постоянно доступна в футере (управление файлами cookie).",
          "Согласие можно отозвать или изменить в любой момент.",
        ],
      },
      {
        title: "5. Хранение и пересмотр",
        bullets: [
          "Настройки хранятся, пока пользователь их не изменит или не очистит данные браузера.",
          "Перечень файлов cookie регулярно пересматривается для юридической и технической согласованности.",
        ],
      },
      {
        title: "6. Права и каналы",
        bullets: [
          "Запросы по приватности направляются через канал, указанный в политике конфиденциальности.",
          "APDA выступает профильным надзорным органом в Андорре.",
        ],
      },
      {
        title: "7. Нормативные ссылки",
        bullets: [
          "Llei 29/2021 от 28 октября о защите персональных данных.",
          "Шаблоны и рекомендации APDA по правовой информации, политике конфиденциальности и политике файлов cookie в веб-проектах.",
          "Иные применимые нормы Андорры в сфере цифровых сервисов и электронных коммуникаций.",
        ],
      },
    ],
  },
};

const legalByLocale: Record<Locale, LegalContent> = {
  es: esContent,
  ca: caContent,
  fr: frContent,
  en: enContent,
  uk: ukContent,
  ru: ruContent,
};

export function getLegalContent(locale: Locale): LegalContent {
  return legalByLocale[locale] ?? esContent;
}
