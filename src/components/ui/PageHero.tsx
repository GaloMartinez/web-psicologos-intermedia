import { motion } from "framer-motion";
import { fadeInOnMount } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

interface PageHeroProps {
  title: string;
  subtitle: string;
  label?: string;
  className?: string;
}

export const PageHero = ({ title, subtitle, label, className }: PageHeroProps) => (
  <Section bg="muted" spacing="md" className={className}>
    <Container>
      <motion.div {...fadeInOnMount} className="max-w-3xl">
        {/* Etiqueta opcional */}
        {label && (
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-accent" />
            <span className="font-sans text-xs text-accent uppercase tracking-[0.18em] font-medium">
              {label}
            </span>
          </div>
        )}

        {/* Título */}
        <h1 className="font-serif text-primary mb-5">{title}</h1>

        {/* Separador */}
        <div className="w-10 h-px bg-accent/55 mb-6" />

        {/* Subtítulo — ancho óptimo de lectura ~65ch */}
        <p className="font-sans text-neutral-600 leading-relaxed max-w-xl" style={{ fontSize: "1.05rem" }}>
          {subtitle}
        </p>
      </motion.div>
    </Container>
  </Section>
);
