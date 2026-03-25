import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUpView, fadeInUpViewDelayed } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/siteConfig";

// Muestra solo las primeras 4 FAQs en el home
const PREVIEW_COUNT = 4;

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = siteConfig.faqs.slice(0, PREVIEW_COUNT);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Section bg="white" spacing="lg">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div {...fadeInUpView} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-accent" />
              <span className="font-sans text-xs text-accent uppercase tracking-[0.18em] font-medium">
                Preguntas frecuentes
              </span>
            </div>
            <h2 className="font-serif text-primary">
              Lo que me suelen preguntar
            </h2>
          </motion.div>

          {/* Acordeón */}
          <div>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  {...fadeInUpViewDelayed(index * 0.07)}
                  className="border-b border-neutral-200 last:border-b-0"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex gap-5 items-start flex-1">
                      <span
                        className="font-serif shrink-0 mt-0.5 leading-none select-none"
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--color-accent)",
                          opacity: 0.45,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className="font-serif font-medium text-primary group-hover:text-secondary transition-colors"
                        style={{ fontSize: "1.12rem", lineHeight: 1.38 }}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <span
                      className={`text-accent font-sans font-light text-xl shrink-0 mt-0.5 transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-[3.25rem]">
                          <p className="font-sans text-neutral-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Link a la página completa */}
          <motion.div
            {...fadeInUpViewDelayed(0.4)}
            className="mt-10 pt-8 border-t border-neutral-200 flex items-center justify-between flex-wrap gap-4"
          >
            <p className="font-sans text-sm text-neutral-600">
              ¿Tenés otra pregunta?
            </p>
            <Link
              to="/preguntas-frecuentes"
              className="font-sans text-sm font-medium text-primary hover:text-secondary transition-colors flex items-center gap-2"
            >
              Ver todas las preguntas
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
