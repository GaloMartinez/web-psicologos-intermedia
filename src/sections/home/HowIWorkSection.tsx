import { motion } from "framer-motion";
import { fadeInUpView, fadeInUpViewDelayed } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/siteConfig";

export const HowIWorkSection = () => {
  return (
    <Section bg="white" spacing="lg">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header editorial */}
          <motion.div {...fadeInUpView} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-accent" />
              <span className="font-sans text-xs text-accent uppercase tracking-[0.18em] font-medium">
                El proceso
              </span>
            </div>
            <h2 className="font-serif text-primary max-w-sm">
              Cómo trabajo
            </h2>
          </motion.div>

          {/* Lista numerada editorial */}
          <div>
            {siteConfig.howIWork.map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUpViewDelayed(index * 0.12)}
                className="group border-t border-neutral-200 py-10 first:border-t-0 first:pt-0 grid grid-cols-[64px_1fr] gap-6 md:gap-10 items-start"
              >
                {/* Número — visible, parte del diseño, no ruido decorativo */}
                <div className="flex flex-col items-start pt-1">
                  <span
                    className="font-serif leading-none select-none"
                    style={{
                      fontSize: "3rem",
                      color: "var(--color-accent)",
                      opacity: 0.48,
                      fontWeight: 400,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Contenido */}
                <div>
                  <h3 className="font-serif text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-neutral-600 leading-relaxed text-base max-w-xl">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nota de cierre — datos concretos, no quote genérica */}
          <motion.div
            {...fadeInUpViewDelayed(0.4)}
            className="mt-4 pt-10 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12"
          >
            {[
              { value: "50 min", label: "por sesión" },
              { value: "Semanal", label: "frecuencia habitual" },
              { value: "1ª entrevista", label: "sin compromiso" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p
                  className="font-serif text-primary font-medium leading-none mb-1"
                  style={{ fontSize: "1.35rem" }}
                >
                  {value}
                </p>
                <p className="font-sans text-xs text-neutral-500 uppercase tracking-widest">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
