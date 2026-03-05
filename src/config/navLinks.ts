export const NAV_LINKS = [
  { path: "/", label: "Inicio" },
  { path: "/sobre-mi", label: "Sobre mí" },
  { path: "/servicios", label: "Servicios" },
  { path: "/contacto", label: "Contacto" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
