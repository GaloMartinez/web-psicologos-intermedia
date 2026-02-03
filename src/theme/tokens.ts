/**
 * Design Tokens - Paleta de colores profesional y ética
 * 
 * Reglas de uso:
 * - 70-75% del sitio: blanco o neutral-100 (aire y calma)
 * - Primary: H1/H2, links importantes, íconos (NO fondos grandes)
 * - Accent: SOLO CTA principal y hover, highlight mínimo
 * - Secondary: fondos suaves con opacity (secciones, CTA bands)
 * - Texto: neutral-900 (principal), neutral-600 (secundario)
 * - No gradientes, no colores saturados compitiendo
 */

export const tokens = {
  colors: {
    primary: "#1F3A5F",      // Azul profundo - títulos, links, íconos
    secondary: "#4A6FA5",   // Azul suave - fondos suaves, elementos secundarios
    accent: "#7FB7BE",      // Verde-azulado - CTA principal únicamente
    
    neutral: {
      900: "#1F2933",       // Texto principal
      600: "#6B7280",       // Texto secundario
      200: "#E5E7EB",       // Bordes
      100: "#F7F9FB",       // Fondos claros
    },
    
    white: "#FFFFFF",
  },
  
  // Opcional: spacing y radius para escalabilidad futura
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
  },
  
  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
  },
} as const;

// Helper para obtener colores con opacidad
export const getColorWithOpacity = (color: string, opacity: number) => {
  // Convierte hex a rgba
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
