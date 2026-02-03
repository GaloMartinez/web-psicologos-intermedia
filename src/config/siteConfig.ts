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
    name: "Lic. [Tu Nombre]",
    license: "MP [Número]",
    city: "Buenos Aires, Argentina",
    modality: "Online y Presencial",
    email: "contacto@tudominio.com",
    whatsapp: {
      number: "5491112345678", // Sin + ni espacios, formato internacional
      message: "Hola, me interesa conocer más sobre tu espacio terapéutico.",
    },
  },

  // Hero Section
  hero: {
    title: "Un espacio para tu bienestar emocional",
    subtitle:
      "Acompañamiento profesional desde un enfoque humanista y respetuoso de tus tiempos y necesidades.",
    ctaPrimary: "Solicitar entrevista",
    ctaSecondary: "Consultar por WhatsApp",
    backgroundImage: "/banner-principal.jpg", // Ruta a la imagen de fondo (opcional, dejar vacío "" para sin imagen)
    overlayOpacity: 0.3, // Opacidad del overlay oscuro sobre la imagen (0-1)
  },

  // Sobre mí
  about: {
    bio: `Soy psicóloga clínica con formación en enfoques humanistas y cognitivo-conductuales. 
    Mi práctica se centra en crear un espacio seguro y de confianza donde puedas explorar tus 
    inquietudes, emociones y desafíos personales.`,
    
    image: "/foto-perfil.jpg", // Ruta a la foto del profesional (opcional, dejar vacío "" para sin imagen)
    imageAlt: "Foto profesional", // Texto alternativo para la imagen
    
    extendedBio: `Mi formación incluye especialización en terapia individual y grupal, 
    con experiencia en el acompañamiento de personas que transitan diferentes momentos vitales. 
    Creo firmemente en la importancia de establecer una relación terapéutica basada en el respeto, 
    la empatía y la colaboración.`,
    
    formation: [
      "Licenciatura en Psicología - Universidad [Nombre]",
      "Especialización en Terapia Cognitivo-Conductual - [Institución]",
      "Formación en Enfoque Humanista - [Institución]",
      "Curso de Actualización en Psicología Clínica - [Institución]",
    ],
    
    institutions: [
      "Colegio de Psicólogos de [Provincia]",
      "[Otra institución o asociación]",
    ],
    
    approach: `Mi enfoque terapéutico se adapta a las necesidades de cada persona. Trabajo desde 
    una perspectiva integradora que combina herramientas de diferentes corrientes psicológicas, 
    siempre priorizando tu bienestar y respetando tu proceso personal.`,
    
    firstSession: `En la primera entrevista, nos conoceremos y podrás contarme qué te trae a 
    consultar. Es un espacio para que explores si este es el lugar adecuado para ti. No hay 
    compromisos ni presiones: es importante que te sientas cómodo/a con el proceso.`,
  },

  // Cómo trabajo
  howIWork: [
    {
      title: "Primera entrevista",
      description:
        "Un espacio de encuentro donde nos conocemos y evaluamos juntos si este es el lugar adecuado para tu proceso.",
    },
    {
      title: "Proceso terapéutico",
      description:
        "Sesiones regulares adaptadas a tus necesidades, con objetivos claros y revisión periódica del proceso.",
    },
    {
      title: "Modalidad flexible",
      description:
        "Atención online y presencial, con horarios que se adaptan a tu disponibilidad.",
    },
  ],

  // Servicios
  services: [
    {
      id: "ansiedad",
      title: "Ansiedad y estrés",
      description:
        "Acompañamiento para manejar síntomas de ansiedad, ataques de pánico y situaciones de estrés que afectan tu vida cotidiana.",
    },
    {
      id: "depresion",
      title: "Depresión y estado de ánimo",
      description:
        "Espacio para trabajar estados depresivos, tristeza persistente y dificultades en la regulación emocional.",
    },
    {
      id: "relaciones",
      title: "Relaciones interpersonales",
      description:
        "Exploración de patrones relacionales, comunicación asertiva y construcción de vínculos más saludables.",
    },
    {
      id: "autoestima",
      title: "Autoestima y autoconocimiento",
      description:
        "Trabajo orientado a fortalecer la autoestima, el autoconocimiento y la construcción de una identidad más sólida.",
    },
    {
      id: "duelo",
      title: "Duelo y pérdidas",
      description:
        "Acompañamiento en procesos de duelo, pérdidas significativas y transiciones vitales.",
    },
    {
      id: "trauma",
      title: "Trauma y experiencias difíciles",
      description:
        "Espacio seguro para procesar experiencias traumáticas y eventos difíciles que impactan en el presente.",
    },
  ],

  // Información de servicios
  serviceInfo: {
    modality: "Online y Presencial",
    duration: "Sesiones de 50 minutos",
    frequency: "Frecuencia semanal o quincenal, según necesidades",
    targetAudience:
      "Este espacio está dirigido a personas adultas que buscan un acompañamiento profesional para transitar diferentes momentos vitales, desafíos emocionales o procesos de autoconocimiento.",
  },

  // Confianza profesional
  trust: {
    license: "Matrícula profesional habilitante",
    formation: "Formación continua y actualización",
    approach: "Enfoque ético y respetuoso",
    experience: "Experiencia en acompañamiento terapéutico",
  },

  // Contacto
  contact: {
    formReasons: [
      "Consulta general",
      "Solicitar entrevista inicial",
      "Información sobre servicios",
      "Consulta sobre modalidad y horarios",
      "Otro motivo",
    ],
    successMessage:
      "Tu mensaje fue enviado correctamente. Te responderé en un plazo de 24 horas hábiles.",
    location: {
      enabled: false, // Cambiar a true si quieres mostrar ubicación
      address: "Dirección aproximada (sin datos sensibles)",
      mapUrl: "", // URL de Google Maps embed o similar
    },
  },

  // FAQs (opcional)
  faqs: [
    {
      question: "¿Cómo funciona la primera entrevista?",
      answer:
        "La primera entrevista es un espacio de encuentro donde nos conocemos, hablamos sobre qué te trae a consultar y evaluamos juntos si este es el lugar adecuado para tu proceso. No hay compromisos ni presiones.",
    },
    {
      question: "¿Qué modalidad de atención ofreces?",
      answer:
        "Trabajo tanto de forma presencial como online, adaptándome a tus necesidades y preferencias.",
    },
    {
      question: "¿Cuánto duran las sesiones?",
      answer:
        "Las sesiones tienen una duración de 50 minutos, con frecuencia semanal o quincenal según lo que acordemos en función de tus necesidades.",
    },
  ],

  // Enlaces sociales (opcional)
  socialLinks: [
    // {
    //   name: "LinkedIn",
    //   url: "https://linkedin.com/in/tu-perfil",
    // },
    // {
    //   name: "Instagram",
    //   url: "https://instagram.com/tu-perfil",
    // },
  ],

  // Disclaimer ético
  disclaimer: {
    text: "La información proporcionada en este sitio tiene carácter informativo y no sustituye el asesoramiento profesional. La terapia psicológica es un proceso personal que requiere compromiso y tiempo.",
    licenseInfo: "Ejercicio profesional habilitado según normativa vigente.",
  },

  // SEO por página
  seo: {
    home: {
      title: "Psicología Clínica | Espacio Terapéutico",
      description:
        "Acompañamiento profesional en psicología clínica. Atención online y presencial. Primera entrevista sin compromiso.",
    },
    about: {
      title: "Sobre mí | Formación y Enfoque Terapéutico",
      description:
        "Conoce mi formación, experiencia y enfoque terapéutico. Un espacio seguro para tu proceso personal.",
    },
    services: {
      title: "Servicios | Áreas de Trabajo",
      description:
        "Servicios de psicología clínica: ansiedad, depresión, relaciones interpersonales, autoestima y más.",
    },
    contact: {
      title: "Contacto | Solicitar Entrevista",
      description:
        "Contacta para solicitar una entrevista inicial o consultar sobre disponibilidad y modalidades de atención.",
    },
  },
};
