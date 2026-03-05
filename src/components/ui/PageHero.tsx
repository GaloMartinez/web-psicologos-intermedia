import { motion } from "framer-motion";
import { fadeInOnMount } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

interface PageHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const PageHero = ({ title, subtitle, className }: PageHeroProps) => (
  <Section bg="white" spacing="lg" className={className}>
    <Container>
      <motion.div {...fadeInOnMount} className="text-center max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary leading-tight">
          {title}
        </h1>
        <div className="w-10 h-px bg-accent/50 mx-auto mt-5 mb-5" />
        <p className="font-sans text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      </motion.div>
    </Container>
  </Section>
);
