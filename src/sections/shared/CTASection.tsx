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
    spacing="lg"
    className={`bg-[color:var(--color-secondary-10)] border-t border-neutral-200 ${className ?? ""}`}
  >
    <Container>
      <motion.div {...fadeInUpView} className="text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-4 leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="font-sans text-lg text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={primaryAction.href} external={primaryAction.external}>
            {primaryAction.text}
          </Button>
          {secondaryAction && (
            <Button
              variant="outline"
              href={secondaryAction.href}
              external={secondaryAction.external}
            >
              {secondaryAction.text}
            </Button>
          )}
        </div>
      </motion.div>
    </Container>
  </Section>
);
