import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUpView, fadeInUpViewDelayed } from "@/lib/animations";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTASection } from "@/sections/shared";
import { siteConfig } from "@/config/siteConfig";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const whatsAppUrl = buildWhatsAppUrl(
    siteConfig.professional.whatsapp.number,
    siteConfig.professional.whatsapp.message
  );

  return (
    <>
      <Helmet>
        <title>{siteConfig.seo.faq.title}</title>
        <meta name="description" content={siteConfig.seo.faq.description} />
        <meta property="og:title" content={siteConfig.seo.faq.title} />
        <meta property="og:description" content={siteConfig.seo.faq.description} />
      </Helmet>

      <PageHero
        label="Preguntas frecuentes"
        title="Lo que me suelen preguntar"
        subtitle="Respuestas a las dudas más comunes sobre el proceso terapéutico, la primera entrevista, la modalidad y cómo empezar."
      />

      <Section bg="white" spacing="md">
        <Container>
          <div className="max-w-3xl mx-auto">

            {/* Intro contextual */}
            <motion.p
              {...fadeInUpView}
              className="font-sans text-neutral-600 leading-relaxed mb-14 text-base"
            >
              Si no encontrás tu pregunta acá, podés{" "}
              <a
                href="/contacto#form"
                className="text-primary underline underline-offset-4 hover:text-secondary transition-colors"
              >
                escribirme directamente
              </a>
              . No hay preguntas molestas cuando se trata de decidir si empezar una terapia.
            </motion.p>

            {/* Acordeón FAQ */}
            <div>
              {siteConfig.faqs.map((faq, index) => {
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

            {/* Nota de cierre */}
            <motion.div
              {...fadeInUpViewDelayed(0.5)}
              className="mt-14 pt-10 border-t border-neutral-200"
            >
              <p className="font-serif text-lg text-neutral-600 italic leading-relaxed max-w-xl">
                "No hay una forma correcta de llegar a terapia. Lo que importa es que algo en vos está listo para mirar."
              </p>
              <p className="font-sans text-xs text-neutral-600 mt-3 tracking-widest uppercase">
                — {siteConfig.professional.name}
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="¿Todavía tenés dudas?"
        subtitle="Podés escribirme sin compromiso. Respondo las preguntas que no estén acá y te cuento más sobre cómo trabajo."
        primaryAction={{ text: "Escribirme", href: "/contacto#form" }}
        secondaryAction={{
          text: "Consultar por WhatsApp",
          href: whatsAppUrl,
          external: true,
        }}
      />
    </>
  );
};
