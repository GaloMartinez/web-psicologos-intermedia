import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/siteConfig";

// SVG noise como data URL — textura sutil que evita el look de fondo plano
const GRAIN_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`;

export const HeroSection = () => {
  const hasPhoto = Boolean(siteConfig.about.image);
  const whatsAppUrl = buildWhatsAppUrl(
    siteConfig.professional.whatsapp.number,
    siteConfig.professional.whatsapp.message
  );

  return (
    <section className="relative min-h-[92vh] flex items-center bg-neutral-100 overflow-hidden">

      {/* ── Grain texture — lo que diferencia "diseñado" de "generado por IA" ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: GRAIN_BG,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
          opacity: 0.024,
        }}
      />

      {/* ── Gradiente atmosférico — profundidad cálida desde abajo-izquierda ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-3/5 h-3/5 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 80% at 0% 100%, rgba(190,121,85,0.07) 0%, transparent 65%)",
        }}
      />

      {/* ── Línea decorativa vertical izquierda — ancla editorial ── */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-px hidden lg:block pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(190,121,85,0.28) 25%, rgba(190,121,85,0.28) 75%, transparent 100%)",
        }}
      />

      {/* ── Foto editorial: ocupa el lado derecho completo ── */}
      {hasPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="hidden lg:block absolute right-0 top-0 bottom-0 w-[44%]"
        >
          <img
            src={siteConfig.about.image}
            alt={siteConfig.about.imageAlt}
            className="w-full h-full object-cover object-[center_top]"
            loading="eager"
          />

          {/* Blend izquierdo — funde la foto con el fondo cálido */}
          <div
            className="absolute inset-y-0 left-0 w-44 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #F0EDE7 0%, rgba(240,237,231,0.7) 35%, transparent 100%)",
            }}
          />

          {/* Vignette base */}
          <div
            className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(26,53,53,0.1), transparent)",
            }}
          />

          {/* Badge matrícula flotante */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute left-8 bottom-10 bg-white/92 backdrop-blur-md rounded-xl shadow-[0_4px_24px_rgba(26,53,53,0.1)] px-4 py-3 border border-neutral-200/80"
          >
            <p className="font-sans text-[9px] text-neutral-600 uppercase tracking-[0.18em]">
              Habilitado
            </p>
            <p className="font-serif text-primary font-medium text-sm leading-tight mt-0.5">
              {siteConfig.professional.license}
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* ── Contenido ── */}
      <Container className="relative z-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={hasPhoto ? "max-w-xl lg:max-w-[52%]" : "max-w-2xl"}
        >
          {/* Etiqueta profesional */}
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-7 h-px bg-accent/70" />
            <span className="font-sans text-[11px] text-accent tracking-[0.2em] uppercase font-medium">
              Psicólogo clínico · {siteConfig.professional.license}
            </span>
          </div>

          {/* Heading principal — Cormorant 500 es más elegante que 600 */}
          <h1 className="font-serif text-primary mb-5">
            {siteConfig.hero.title}
          </h1>

          {/* Bajada — ancho máximo para legibilidad óptima */}
          <p
            className="font-sans text-neutral-600 mb-9 leading-relaxed"
            style={{ fontSize: "1.05rem", maxWidth: "44ch" }}
          >
            {siteConfig.hero.subtitle}
          </p>

          {/* Señal de disponibilidad */}
          <div className="flex items-center gap-2.5 mb-8">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-55" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-sans text-[11px] text-neutral-600 tracking-[0.01em]">
              Agenda disponible — primeras entrevistas esta semana
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/contacto#form">{siteConfig.hero.ctaPrimary}</Button>
            <Button variant="outline" href={whatsAppUrl} external>
              {siteConfig.hero.ctaSecondary}
            </Button>
          </div>

          {/* Trust strip — horizontal con divisores verticales */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 pt-8 border-t border-neutral-200"
          >
            <div className="flex items-start gap-0">
              {[
                { label: "Experiencia", value: "9 años" },
                { label: "Modalidad", value: "Online · Presencial" },
                { label: "Ubicación", value: "Palermo, CABA" },
              ].map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`${i > 0 ? "pl-6 border-l border-neutral-200 ml-6" : ""}`}
                >
                  <p className="font-sans text-[9px] text-neutral-600 uppercase tracking-[0.15em] mb-1">
                    {label}
                  </p>
                  <p className="font-serif text-primary font-medium text-sm leading-snug">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
