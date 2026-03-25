// Configuración centralizada del sitio
// Edita este archivo para personalizar toda la plantilla sin tocar componentes

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const siteConfig = {
  // Información profesional
  professional: {
    name: "Lic. Nicolás Ferreyra",
    license: "MN 68.432",
    city: "Palermo, CABA — Buenos Aires",
    modality: "Online y presencial",
    email: "contacto@nicolasferreyrapsi.com.ar",
    whatsapp: {
      number: "5491167438291",
      message: "Hola Nicolás, me interesa conocer más sobre tu espacio terapéutico.",
    },
  },

  // Hero Section
  hero: {
    title: "Un lugar donde encontrar claridad",
    subtitle:
      "Acompañamiento psicológico para adultos en momentos de transición, agotamiento o búsqueda de sentido. Nueve años de práctica clínica en Buenos Aires.",
    ctaPrimary: "Solicitar primera entrevista",
    ctaSecondary: "Consultar por WhatsApp",
    backgroundImage: "/banner-principal.jpg",
    overlayOpacity: 0.5,
  },

  // Sobre mí
  about: {
    bio: `Soy psicólogo clínico con nueve años de práctica en Buenos Aires. Trabajo con adultos que atraviesan momentos de transición, desgaste emocional o búsqueda de sentido. Mi enfoque es integrativo: combino herramientas de la Terapia Cognitivo-Conductual, la Terapia de Aceptación y Compromiso y la psicoterapia psicodinámica.`,

    image: "/foto-perfil.jpg",
    imageAlt: "Lic. Nicolás Ferreyra — Psicólogo clínico, Palermo Buenos Aires",

    extendedBio: `Me recibí en la UBA en 2014 y desde entonces profundicé mi formación en tres ejes: la estructura cognitiva detrás del sufrimiento, los procesos de aceptación y flexibilidad psicológica, y la historia vincular que se repite sin que lo advirtamos.

Creo en los procesos lentos. En la diferencia entre aliviar síntomas y transformar algo más profundo. Por eso trabajo en sesiones de frecuencia semanal y priorizo la continuidad terapéutica como condición de un cambio genuino.

Atiendo en mi consultorio de Palermo y de forma online para quienes están fuera de CABA o prefieren la comodidad de su propio espacio.`,

    formation: [
      "Licenciatura en Psicología — Universidad de Buenos Aires (UBA), 2014",
      "Formación en Terapia Cognitivo-Conductual — Instituto AIGLE, 2015–2017",
      "Certificación en Terapia de Aceptación y Compromiso (ACT) — ACBS Latinoamérica, 2018",
      "Posgrado en Psicoterapia Psicodinámica Breve — Fundación APRAMP, 2020",
    ],

    institutions: [
      "Asociación de Psicólogos de Buenos Aires (APBA)",
      "ACBS — Association for Contextual Behavioral Science, Capítulo Latinoamérica",
      "Colegio de Psicólogos de CABA — Matrícula Nacional 68.432",
    ],

    approach: `Trabajo desde un enfoque integrativo porque creo que cada persona necesita una combinación diferente de herramientas. Algunos procesos requieren más trabajo cognitivo; otros, más espacio para elaborar la historia personal o contactar con los propios valores.

Lo que no cambia es mi posición: estar presente, ser honesto y acompañar sin dirigir. El proceso es tuyo. Mi rol es crear las condiciones para que puedas avanzar.`,

    firstSession: `La primera entrevista dura 50 minutos. Me contás qué te trajo, yo te cuento cómo trabajo, y al final evaluamos juntos si tiene sentido continuar. No hay compromisos ni evaluaciones formales. Solo una conversación para ver si hay afinidad terapéutica.`,
  },

  // Cómo trabajo
  howIWork: [
    {
      title: "Primera entrevista",
      description:
        "Nos conocemos. Me contás qué te trajo hasta acá y evaluamos juntos si este es el espacio adecuado. No hay compromisos. Es el comienzo de una conversación, no un contrato.",
    },
    {
      title: "Proceso a tu ritmo",
      description:
        "Construimos un espacio semanal adaptado a lo que necesitás trabajar. El proceso no sigue un protocolo rígido: se va moldeando a medida que avanzamos y aparecen nuevas capas.",
    },
    {
      title: "Seguimiento y continuidad",
      description:
        "Revisamos los objetivos a medida que el trabajo avanza. Pensamos juntos si seguir, pausar o cerrar el proceso con consciencia. La terapia no es para siempre — pero sí para cuando importa.",
    },
  ],

  // Servicios
  services: [
    {
      id: "ansiedad",
      title: "Ansiedad y ataques de pánico",
      description:
        "El cuerpo que anticipa el peligro antes de que el pensamiento lo formule. Trabajamos las creencias que sostienen la ansiedad, desarrollamos recursos de regulación y aprendemos a habitar la incertidumbre sin que paralice.",
    },
    {
      id: "transiciones",
      title: "Transiciones vitales",
      description:
        "Cambios de trabajo, de pareja, de ciudad, de identidad. Momentos donde lo conocido ya no alcanza y lo nuevo todavía no tiene forma. Acompañamiento en ese umbral.",
    },
    {
      id: "duelo",
      title: "Duelo y pérdidas",
      description:
        "La pérdida no siempre es una muerte. Puede ser una relación, un proyecto, una versión de uno mismo que ya no existe. Explorar el duelo desde un lugar sin prisa ni expectativas de superación rápida.",
    },
    {
      id: "burnout",
      title: "Burnout y agotamiento profesional",
      description:
        "Cuando el cuerpo dice basta antes de que la mente lo reconozca. Trabajo en la identificación de los patrones que llevan al agotamiento y en la construcción de límites genuinos, no solo estratégicos.",
    },
    {
      id: "autoestima",
      title: "Autoestima e identidad",
      description:
        "Construir una narrativa propia que no dependa exclusivamente de la mirada ajena. Trabajo en la relación con uno mismo, los juicios internos y los mandatos incorporados a lo largo de la historia.",
    },
    {
      id: "vinculos",
      title: "Vínculos y relaciones",
      description:
        "Los patrones vinculares que se repiten y la posibilidad de elegir diferente. Comunicación, intimidad, dependencia emocional y la historia relacional que traemos al presente.",
    },
  ],

  // Información de servicios
  serviceInfo: {
    modality: "Online y presencial (Palermo, CABA)",
    duration: "Sesiones de 50 minutos",
    frequency: "Frecuencia semanal — quincenal en etapas avanzadas del proceso",
    targetAudience:
      "Trabajo con personas adultas que buscan un espacio terapéutico para transitar momentos de cambio, malestar emocional o autoconocimiento. No atiendo urgencias psiquiátricas ni poblaciones infanto-juveniles.",
  },

  // Confianza profesional
  trust: {
    license: "Matrícula Nacional 68.432",
    formation: "Formación integrativa (TCC · ACT · Psicodinámico)",
    approach: "Ética y respeto por el proceso de cada persona",
    experience: "Nueve años de práctica clínica continua",
    parallaxImage: "/img-parallax-intermedia.jpg",
    parallaxOverlay: 0.58,
  },

  // Metodología (página nueva)
  methodology: {
    intro: `Mi práctica se apoya en tres corrientes que no compiten entre sí: se complementan. Cada una aporta una perspectiva distinta del sufrimiento y del cambio posible. La combinación de estas herramientas me permite adaptar el trabajo a cada persona, sin forzar un único modelo sobre realidades diversas.`,
    approaches: [
      {
        id: "tcc",
        title: "Terapia Cognitivo-Conductual",
        shortName: "TCC",
        description:
          "Trabaja sobre la relación entre pensamientos, emociones y conductas. Ayuda a identificar creencias automáticas que generan malestar y a construir formas de pensar más flexibles y funcionales.",
        keyPoints: [
          "Identificación de pensamientos automáticos y distorsiones cognitivas",
          "Reestructuración de creencias poco útiles",
          "Técnicas de regulación emocional y exposición gradual",
          "Estrategias concretas para el manejo de la ansiedad y el estado de ánimo",
        ],
      },
      {
        id: "act",
        title: "Terapia de Aceptación y Compromiso",
        shortName: "ACT",
        description:
          "En lugar de combatir el malestar, propone desarrollar una relación diferente con él. Trabaja la flexibilidad psicológica, la clarificación de valores y la posibilidad de actuar en dirección a lo que importa, aún en presencia del dolor.",
        keyPoints: [
          "Defusión cognitiva: separarse de los pensamientos sin que dicten la conducta",
          "Aceptación de experiencias difíciles sin evitarlas ni amplificarlas",
          "Clarificación de valores como brújula de acción",
          "Compromiso con una vida con sentido, más allá del malestar",
        ],
      },
      {
        id: "psicodinamico",
        title: "Psicoterapia Psicodinámica",
        shortName: "Psicodinámico",
        description:
          "Explora la historia vincular y los patrones relacionales que se repiten en el presente. Permite entender de dónde vienen ciertas formas de relacionarse, sentir y reaccionar, y abre espacio para elegir diferente.",
        keyPoints: [
          "Exploración de la historia vincular temprana y su influencia actual",
          "Identificación de patrones relacionales inconscientes",
          "Trabajo con la transferencia y el vínculo terapéutico",
          "Espacio para la elaboración y el desarrollo de insight",
        ],
      },
    ],
    integrative: `No adhiero a un único modelo. En cada proceso terapéutico elijo las herramientas que mejor se ajustan a lo que la persona necesita en ese momento. Eso requiere formación continua, pero sobre todo, escucha genuina.`,
  },

  // Contacto
  contact: {
    formReasons: [
      "Consulta general",
      "Solicitar primera entrevista",
      "Información sobre modalidad online",
      "Consulta sobre horarios y disponibilidad",
      "Consulta sobre honorarios",
      "Otro motivo",
    ],
    successMessage:
      "Tu mensaje fue enviado correctamente. Respondo en un plazo de 24 a 48 horas hábiles.",
    location: {
      enabled: false,
      address: "Palermo, Ciudad Autónoma de Buenos Aires",
      mapUrl: "",
    },
  },

  // FAQs
  faqs: [
    {
      question: "¿Cómo sé si la terapia es para mí?",
      answer:
        "La terapia no es exclusiva para crisis. Muchas personas llegan con una sensación difusa de que algo no está bien, aunque no puedan nombrarlo todavía. Si sentís que algo falta, repetís patrones que querés cambiar o simplemente tenés curiosidad por conocerte mejor, eso ya es motivo suficiente.",
    },
    {
      question: "¿Cuánto tiempo dura un proceso terapéutico?",
      answer:
        "No existe un tiempo estándar. Algunos procesos duran seis meses, otros dos o tres años. Lo que importa es que el tiempo esté al servicio de un cambio genuino, no de una promesa de rapidez. En la primera entrevista charlamos sobre expectativas y objetivos.",
    },
    {
      question: "¿Cómo es la primera entrevista?",
      answer:
        "Dura 50 minutos. Me contás qué te trajo, exploramos un poco tu historia y al final te cuento cómo trabajo. No hay evaluaciones ni formularios. Solo una conversación para ver si hay afinidad terapéutica. No hay ningún compromiso de continuidad.",
    },
    {
      question: "¿Trabajás con medicación?",
      answer:
        "No prescibo medicación, pero puedo trabajar de forma coordinada con un psiquiatra si es necesario. Muchos procesos terapéuticos se complementan bien con soporte farmacológico, y eso se evalúa caso a caso.",
    },
    {
      question: "¿Qué pasa si quiero hacer una pausa?",
      answer:
        "La terapia no es una obligación. Si en algún momento querés pausar, lo charlamos y hacemos un cierre apropiado. Hay personas que retoman después de meses o años. Eso también es parte del proceso.",
    },
    {
      question: "¿Cómo funciona la modalidad online?",
      answer:
        "Las sesiones online se realizan por videollamada (Google Meet o la plataforma que prefieras) en el mismo horario semanal que acordamos. La experiencia es muy similar a la presencial. Muchas personas que empezaron online mantienen esta modalidad de forma indefinida.",
    },
  ],

  // Enlaces sociales (opcional)
  socialLinks: [] as SocialLink[],

  // Disclaimer ético
  disclaimer: {
    text: "La información en este sitio tiene carácter informativo y no reemplaza la consulta profesional. La psicoterapia es un proceso personal que requiere compromiso y tiempo.",
    licenseInfo:
      "Ejercicio profesional habilitado — MN 68.432 — Colegio de Psicólogos de CABA.",
  },

  // Calendly
  calendly: {
    firstSessionUrl: "https://calendly.com/nicolasferreyra/primera-entrevista",
    regularSessionUrl: "https://calendly.com/nicolasferreyra/sesion",
  },

  // SEO por página
  seo: {
    home: {
      title: "Lic. Nicolás Ferreyra — Psicólogo Clínico | Palermo, Buenos Aires",
      description:
        "Psicólogo clínico con nueve años de práctica. Atención de adultos en ansiedad, transiciones vitales, duelo y burnout. Online y presencial en Palermo, CABA.",
    },
    about: {
      title: "Sobre mí | Lic. Nicolás Ferreyra — Psicólogo Clínico",
      description:
        "Formación, enfoque terapéutico e historia profesional del Lic. Nicolás Ferreyra, psicólogo clínico con matrícula MN 68.432 en Buenos Aires.",
    },
    services: {
      title: "Servicios | Áreas de Trabajo — Lic. Nicolás Ferreyra",
      description:
        "Ansiedad, transiciones vitales, duelo, burnout, autoestima y vínculos. Conocé las áreas de trabajo y la modalidad de atención.",
    },
    contact: {
      title: "Contacto | Solicitar Primera Entrevista — Nicolás Ferreyra",
      description:
        "Escribí un mensaje o contactate por WhatsApp. Respondo en 24 a 48 horas hábiles. Primera entrevista sin compromiso de continuidad.",
    },
    faq: {
      title: "Preguntas Frecuentes | Lic. Nicolás Ferreyra",
      description:
        "Respuestas a las dudas más comunes sobre el proceso terapéutico, modalidad de atención, primera entrevista y honorarios.",
    },
    methodology: {
      title: "Metodología | Enfoque Integrativo — Lic. Nicolás Ferreyra",
      description:
        "Conocé el enfoque terapéutico integrativo: Terapia Cognitivo-Conductual, ACT y Psicoterapia Psicodinámica. Cómo y por qué funciona esta combinación.",
    },
  },
};
