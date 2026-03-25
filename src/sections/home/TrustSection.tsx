import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUpView, fadeInUpViewDelayed } from "@/lib/animations";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/siteConfig";

const STATS = [
  {
    value: "9",
    unit: "años",
    label: "de práctica clínica continua",
    delay: 0,
  },
  {
    value: "MN",
    unit: "68.432",
    label: "Matrícula habilitante — CABA",
    delay: 0.1,
  },
  {
    value: "3",
    unit: "enfoques",
    label: "TCC · ACT · Psicodinámico",
    delay: 0.2,
  },
];

export const TrustSection = () => {
  const parallaxRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-22%", "22%"]);

  const hasImage = Boolean(siteConfig.trust.parallaxImage);

  const headingClass = hasImage ? "text-white" : "text-primary";
  const subClass = hasImage ? "text-white/80" : "text-neutral-600";
  const valueClass = hasImage ? "text-white" : "text-primary";
  // Cuando hay imagen oscura, text-accent (#BE7955 terracota) tiene bajo contraste.
  // Usamos un ámbar cálido claro que lee bien sobre overlays oscuros.
  const unitClass = hasImage ? "text-[#EEC27A]" : "text-accent";
  const labelClass = hasImage ? "text-white/75" : "text-neutral-600";
  const divClass = hasImage ? "bg-white/15" : "bg-neutral-200";

  return (
    <Section
      ref={parallaxRef}
      bg="transparent"
      spacing="lg"
      // bg-primary garantiza fondo oscuro siempre (fallback si la imagen no carga).
      // Los z-index son positivos para evitar que los stacking contexts de Framer Motion
      // (creados por transform) queden detrás del painted layer de la sección.
      className={cn("relative overflow-hidden", hasImage && "bg-primary")}
    >
      {hasImage && (
        <>
          {/* Imagen parallax — z-0, visible sobre bg-primary */}
          <motion.div
            style={{ y }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <div
              className="absolute inset-0 w-full h-[150%] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${siteConfig.trust.parallaxImage})`,
                top: "-25%",
              }}
            />
          </motion.div>
          {/* Overlay oscuro — z-0, después de la imagen en el DOM = encima de ella */}
          <div
            className="absolute inset-0 z-0 bg-primary pointer-events-none"
            style={{ opacity: siteConfig.trust.parallaxOverlay ?? 0.58 }}
          />
        </>
      )}

      <Container className="relative z-10">
        {/* Título section */}
        <motion.div {...fadeInUpView} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className={cn("w-8 h-px", divClass)} />
            <span
              className={cn(
                "font-sans text-xs uppercase tracking-[0.18em] font-medium",
                hasImage ? "text-white/60" : "text-neutral-600"
              )}
            >
              Credenciales
            </span>
            <span className={cn("w-8 h-px", divClass)} />
          </div>
          <h2 className={cn("font-serif", headingClass)}>
            Formación y experiencia
          </h2>
          <p className={cn("font-sans text-base mt-3 max-w-md mx-auto leading-relaxed", subClass)}>
            Una práctica construida sobre años de estudio, supervisión y
            compromiso con cada proceso.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 max-w-3xl mx-auto">
          {STATS.map(({ value, unit, label, delay }) => (
            <motion.div
              key={label}
              {...fadeInUpViewDelayed(delay)}
              className="text-center"
            >
              <div className="mb-3">
                <span
                  className={cn("font-serif font-light", valueClass)}
                  style={{ fontSize: "3.5rem", lineHeight: 1 }}
                >
                  {value}
                </span>
                <span
                  className={cn("font-serif ml-1.5 font-medium", unitClass)}
                  style={{ fontSize: "1.15rem" }}
                >
                  {unit}
                </span>
              </div>
              <p className={cn("font-sans text-sm leading-snug", labelClass)}>
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cita o nota ética */}
        <motion.div
          {...fadeInUpViewDelayed(0.4)}
          className={cn(
            "mt-16 mx-auto max-w-xl text-center border-t pt-10",
            hasImage ? "border-white/15" : "border-neutral-200"
          )}
        >
          <p
            className={cn(
              "font-serif italic leading-relaxed",
              hasImage ? "text-white/80" : "text-neutral-600",
              "text-lg"
            )}
          >
            "La ética no es un requisito burocrático. Es la base sobre la que se construye cualquier proceso terapéutico serio."
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};
