import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUpView, fadeInUpViewDelayed } from "@/lib/animations";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTASection } from "@/sections/shared";
import { siteConfig } from "@/config/siteConfig";

export const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (id: string) =>
    setExpandedService(expandedService === id ? null : id);

  const whatsAppUrl = buildWhatsAppUrl(
    siteConfig.professional.whatsapp.number,
    siteConfig.professional.whatsapp.message
  );

  return (
    <>
      <Helmet>
        <title>{siteConfig.seo.services.title}</title>
        <meta name="description" content={siteConfig.seo.services.description} />
        <meta property="og:title" content={siteConfig.seo.services.title} />
        <meta property="og:description" content={siteConfig.seo.services.description} />
      </Helmet>

      <PageHero
        label="Servicios"
        title="Áreas de trabajo"
        subtitle="Las consultas que acompaño con más frecuencia. Si no encontrás lo que buscás aquí, podés escribirme igualmente."
      />

      {/* Información de modalidad — inline, no card */}
      <Section bg="white" spacing="sm">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              {...fadeInUpView}
              className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-neutral-200 rounded-xl overflow-hidden"
            >
              {[
                { label: "Modalidad", value: siteConfig.serviceInfo.modality },
                { label: "Duración", value: siteConfig.serviceInfo.duration },
                { label: "Frecuencia", value: siteConfig.serviceInfo.frequency },
              ].map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`px-7 py-6 ${
                    i < 2 ? "border-b sm:border-b-0 sm:border-r border-neutral-200" : ""
                  }`}
                >
                  <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-600 mb-1.5">
                    {label}
                  </p>
                  <p className="font-serif text-primary font-medium leading-snug">
                    {value}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Lista expandible de servicios */}
      <Section bg="muted" spacing="md">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUpView} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-accent" />
                <span className="font-sans text-xs text-accent uppercase tracking-[0.18em] font-medium">
                  Consultas frecuentes
                </span>
              </div>
              <h2 className="font-serif text-primary">
                ¿En qué trabajo?
              </h2>
            </motion.div>

            <div className="border-t border-neutral-200">
              {siteConfig.services.map((service, index) => {
                const isOpen = expandedService === service.id;
                return (
                  <motion.div
                    key={service.id}
                    {...fadeInUpViewDelayed(index * 0.06)}
                    className="border-b border-neutral-200"
                  >
                    <button
                      onClick={() => toggleService(service.id)}
                      className="w-full flex items-start justify-between gap-6 px-2 py-7 text-left hover:bg-white/60 transition-colors duration-200 group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex gap-5 items-center flex-1 min-w-0">
                        {/* Número */}
                        <span
                          className="font-serif shrink-0 leading-none select-none"
                          style={{
                            fontSize: "0.95rem",
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
                          {service.title}
                        </h3>
                      </div>

                      {/* Icono +/– */}
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
                          <div className="px-2 pb-8 pl-[4.5rem]">
                            <p className="font-sans text-neutral-600 leading-relaxed mb-6">
                              {service.description}
                            </p>
                            <Button href="/contacto#form" variant="outline" className="text-sm">
                              Consultar disponibilidad
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Público objetivo */}
            <motion.div
              {...fadeInUpViewDelayed(0.4)}
              className="mt-10 p-7 border border-neutral-200 rounded-xl bg-white/50"
            >
              <p className="font-sans text-xs text-neutral-600 uppercase tracking-widest mb-3">
                ¿Para quién es este espacio?
              </p>
              <p className="font-sans text-neutral-600 leading-relaxed">
                {siteConfig.serviceInfo.targetAudience}
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="¿Algo de esto resuena con lo que estás viviendo?"
        subtitle="No hace falta tener todo claro antes de escribir. En la primera entrevista podemos explorar juntos si este es el espacio adecuado."
        primaryAction={{ text: "Solicitar primera entrevista", href: "/contacto#form" }}
        secondaryAction={{
          text: "Consultar por WhatsApp",
          href: whatsAppUrl,
          external: true,
        }}
      />
    </>
  );
};
