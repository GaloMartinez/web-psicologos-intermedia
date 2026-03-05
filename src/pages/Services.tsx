import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUpViewDelayed } from "@/lib/animations";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
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

  const renderServiceCard = (
    service: (typeof siteConfig.services)[number],
    index: number
  ) => (
    <motion.div key={service.id} {...fadeInUpViewDelayed(index * 0.1)}>
      <Card hover={false}>
        <div className="flex flex-col">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-serif text-xl font-medium text-primary leading-snug flex-1">
              {service.title}
            </h3>
            <button
              onClick={() => toggleService(service.id)}
              className="ml-4 text-neutral-600 hover:text-primary transition-colors shrink-0"
              aria-label={expandedService === service.id ? "Contraer" : "Expandir"}
            >
              <svg
                className={`w-6 h-6 transition-transform ${
                  expandedService === service.id ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          <AnimatePresence>
            {expandedService === service.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-sans text-neutral-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Button href="/contacto#form" variant="outline" className="text-sm">
                  Consultar disponibilidad
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {expandedService !== service.id && (
            <p className="font-sans text-neutral-600 line-clamp-3 mt-2 leading-relaxed">
              {service.description}
            </p>
          )}
        </div>
      </Card>
    </motion.div>
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
        title="Servicios"
        subtitle="Áreas en las que puedo acompañarte en tu proceso terapéutico"
      />

      <Section bg="white" spacing="md">
        <Container>
          {/* Información general */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <div className="space-y-4">
                {[
                  { label: "Modalidad de atención", value: siteConfig.serviceInfo.modality },
                  { label: "Duración", value: siteConfig.serviceInfo.duration },
                  { label: "Frecuencia", value: siteConfig.serviceInfo.frequency },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <h3 className="font-serif text-lg font-medium text-primary mb-1 leading-snug">
                      {label}
                    </h3>
                    <p className="font-sans text-neutral-600 leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Lista de servicios */}
          <SectionTitle align="left" title="Áreas de trabajo" subtitle="Servicios que ofrezco" />
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-6">
                {siteConfig.services.slice(0, 3).map((s, i) => renderServiceCard(s, i))}
              </div>
              <div className="space-y-6">
                {siteConfig.services.slice(3, 6).map((s, i) => renderServiceCard(s, i + 3))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="¿Tienes dudas sobre algún servicio?"
        subtitle="Puedo responder tus consultas y ayudarte a determinar si alguno de estos espacios es adecuado para lo que estás buscando."
        primaryAction={{ text: "Consultar disponibilidad", href: "/contacto#form" }}
        secondaryAction={{ text: "Consultar por WhatsApp", href: whatsAppUrl, external: true }}
      />
    </>
  );
};
