import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Componente que hace scroll al inicio de la página
 * cada vez que cambia la ruta, sin animación y sin activar eventos de scroll
 * 
 * Usa useLayoutEffect para ejecutarse antes del render, evitando que
 * las animaciones se activen durante el cambio de página
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Deshabilitar scroll suave temporalmente
    const html = document.documentElement;
    const body = document.body;
    const originalScrollBehavior = html.style.scrollBehavior;
    
    // Deshabilitar scroll suave completamente
    html.style.scrollBehavior = 'auto';
    body.style.scrollBehavior = 'auto';

    // Scroll instantáneo y directo - sin usar requestAnimationFrame
    // para que se ejecute inmediatamente antes del render
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Intentar usar behavior: 'instant' si está disponible
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    } catch (e) {
      // Fallback: ya hicimos scroll arriba
    }

    // Restaurar scroll suave después de un microtask
    // para que no interfiera con el scroll inicial
    Promise.resolve().then(() => {
      html.style.scrollBehavior = originalScrollBehavior || '';
      body.style.scrollBehavior = '';
    });
  }, [pathname]);

  return null;
};
