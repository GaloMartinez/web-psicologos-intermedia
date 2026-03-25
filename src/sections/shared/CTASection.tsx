import { motion } from "framer-motion";
import { fadeInUpView } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryAction: {
    text: string;
    href: string;
    external?: boolean;
  };
  secondaryAction?: {
    text: string;
    href: string;
    external?: boolean;
  };
  className?: string;
}

export const CTASection = ({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  className,
}: CTASectionProps) => (
  <Section
    bg="transparent"
    spacing="xl"
    className={`bg-primary relative overflow-hidden ${className ?? ""}`}
  >
    {/* Comillas decorativas — elemento tipográfico de fondo, no genérico */}
    <div
      aria-hidden="true"
      className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-8 select-none pointer-events-none"
      style={{
        fontSize: "22rem",
        lineHeight: 1,
        fontFamily: "var(--font-family-serif)",
        color: "white",
        opacity: 0.028,
        userSelect: "none",
      }}
    >
      "
    </div>

    {/* Línea decorativa superior */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <Container className="relative z-10">
      <motion.div {...fadeInUpView} className="max-w-2xl">

        {/* Eyebrow — estilo diferente al resto de secciones (sin la línea/barra) */}
        <p className="font-sans text-accent text-xs uppercase tracking-[0.22em] font-medium mb-8">
          Primer paso
        </p>

        {/* Heading grande */}
        <h2
          className="font-serif text-white mb-6 leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          {title}
        </h2>

        {subtitle && (
          <p className="font-sans text-white/65 text-lg leading-relaxed mb-10 max-w-xl">
            {subtitle}
          </p>
        )}

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Button href={primaryAction.href} external={primaryAction.external}>
            {primaryAction.text}
          </Button>
          {secondaryAction && (
            <Button
              variant="ghost"
              href={secondaryAction.href}
              external={secondaryAction.external}
            >
              {secondaryAction.text}
            </Button>
          )}
        </div>

        {/* Friction reducers — lo que baja la barrera de entrada */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {[
            "Primera entrevista exploratoria",
            "Sin compromiso de continuidad",
            "Respuesta en 24–48 h",
          ].map((item) => (
            <span
              key={item}
              className="font-sans text-xs text-white/38 flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-accent/55 shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </Container>
  </Section>
);
