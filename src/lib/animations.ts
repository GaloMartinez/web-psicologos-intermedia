/** Animación de entrada al montar (hero de páginas). */
export const fadeInOnMount = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

/** Animación de entrada al hacer scroll (sin delay). */
export const fadeInUpView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-200px 0px" },
  transition: { duration: 0.5 },
};

/** Animación de entrada al hacer scroll con delay configurable. */
export const fadeInUpViewDelayed = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-200px 0px" },
  transition: { duration: 0.5, delay },
});

/** Desliza desde la izquierda al hacer scroll. */
export const fadeInFromLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-200px 0px" },
  transition: { duration: 0.6 },
};

/** Desliza desde la derecha al hacer scroll con delay configurable. */
export const fadeInFromRight = (delay = 0.1) => ({
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-200px 0px" },
  transition: { duration: 0.6, delay },
});

/** Escala desde 0.9 al hacer scroll con delay configurable. */
export const scaleInView = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.3, delay },
});
