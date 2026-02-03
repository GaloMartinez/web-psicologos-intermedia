import { motion } from "framer-motion";
import { Button } from "./Button";
import { Container } from "./Container";

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
  className = "",
}: CTASectionProps) => {
  return (
    <section className={`bg-[color:var(--color-secondary-5)] py-16 md:py-20 ${className}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px 0px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={primaryAction.href}
              external={primaryAction.external}
            >
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
    </section>
  );
};
