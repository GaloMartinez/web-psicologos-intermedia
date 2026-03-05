import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUpView, fadeInUpViewDelayed } from "@/lib/animations";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/siteConfig";

/** 3 trust pillars — each with a primary statement and supporting detail */
const TRUST_ITEMS = [
  {
    badgeKey: "license" as const,
    getDetail: () => siteConfig.professional.license,
    delay: 0,
  },
  {
    badgeKey: "formation" as const,
    getDetail: () => "Actualización permanente en enfoques y técnicas terapéuticas",
    delay: 0.1,
  },
  {
    badgeKey: "approach" as const,
    getDetail: () => "Respeto por tu proceso y tus tiempos",
    delay: 0.2,
  },
];

export const TrustSection = () => {
  const parallaxRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  const hasImage = Boolean(siteConfig.trust.parallaxImage);

  const headingClass = hasImage ? "text-white"      : "text-primary";
  const subClass     = hasImage ? "text-white/70"   : "text-neutral-500";
  const lineClass    = hasImage ? "bg-white/25"     : "bg-accent/35";
  const labelClass   = hasImage ? "text-white/90"   : "text-neutral-700";
  const detailClass  = hasImage ? "text-white/55"   : "text-neutral-500";

  return (
    <Section
      ref={parallaxRef}
      bg="transparent"
      spacing="sm"
      className="relative overflow-hidden"
    >
      {hasImage && (
        <>
          <motion.div style={{ y }} className="absolute inset-0 -z-10">
            <div
              className="absolute inset-0 w-full h-[150%] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${siteConfig.trust.parallaxImage})`,
                top: "-25%",
              }}
            />
          </motion.div>
          <div
            className="absolute inset-0 -z-10 bg-neutral-900"
            style={{ opacity: siteConfig.trust.parallaxOverlay ?? 0.55 }}
          />
        </>
      )}

      <Container className="relative z-10">
        {/* Heading — compact */}
        <motion.div {...fadeInUpView} className="text-center mb-10">
          <h2 className={cn("font-serif text-2xl md:text-3xl font-semibold leading-tight", headingClass)}>
            Confianza profesional
          </h2>
          <p className={cn("font-sans text-sm mt-2 leading-relaxed", subClass)}>
            Compromiso con la ética y la formación continua
          </p>
        </motion.div>

        {/* 3-column trust band */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-6 md:gap-x-12 max-w-4xl mx-auto">
          {TRUST_ITEMS.map(({ badgeKey, getDetail, delay }) => (
            <motion.div
              key={badgeKey}
              {...fadeInUpViewDelayed(delay)}
              className="flex flex-col items-center text-center"
            >
              {/* Thin accent bar — visual anchor */}
              <div className={cn("w-8 h-px mb-4", lineClass)} />

              {/* Primary statement — what you can trust */}
              <p className={cn("font-serif text-base md:text-lg font-medium leading-snug mb-1.5", labelClass)}>
                {siteConfig.trust[badgeKey]}
              </p>

              {/* Supporting detail — the specific credential or context */}
              <p className={cn("font-sans text-xs leading-relaxed", detailClass)}>
                {getDetail()}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
