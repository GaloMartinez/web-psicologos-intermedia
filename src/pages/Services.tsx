import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { siteConfig } from "../config/siteConfig";

export const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <>
      <Helmet>
        <title>{siteConfig.seo.services.title}</title>
        <meta
          name="description"
          content={siteConfig.seo.services.description}
        />
        <meta property="og:title" content={siteConfig.seo.services.title} />
        <meta
          property="og:description"
          content={siteConfig.seo.services.description}
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-6 leading-tight">
              Servicios
            </h1>
            <p className="font-sans text-xl text-neutral-600 leading-relaxed">
              Áreas en las que puedo acompañarte en tu proceso terapéutico
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Información general */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto mb-12">
            <Card>
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-lg font-medium text-primary mb-2 leading-snug">
                    Modalidad de atención
                  </h3>
                  <p className="font-sans text-neutral-600 leading-relaxed">{siteConfig.serviceInfo.modality}</p>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-primary mb-2 leading-snug">
                    Duración
                  </h3>
                  <p className="font-sans text-neutral-600 leading-relaxed">{siteConfig.serviceInfo.duration}</p>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-primary mb-2 leading-snug">
                    Frecuencia
                  </h3>
                  <p className="font-sans text-neutral-600 leading-relaxed">{siteConfig.serviceInfo.frequency}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Lista de servicios */}
          <SectionTitle
            title="Áreas de trabajo"
            subtitle="Servicios que ofrezco"
          />
          <div className="max-w-4xl mx-auto space-y-4">
            {siteConfig.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-200px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover={false}>
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-medium text-primary mb-2 leading-snug">
                          {service.title}
                        </h3>
                        <AnimatePresence>
                          {expandedService === service.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="text-neutral-600 mb-4">
                                {service.description}
                              </p>
                              <Button
                                href="/contacto#form"
                                variant="outline"
                                className="text-sm"
                              >
                                Consultar disponibilidad
                              </Button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <button
                        onClick={() => toggleService(service.id)}
                        className="ml-4 text-neutral-600 hover:text-primary transition-colors"
                        aria-label={
                          expandedService === service.id
                            ? "Contraer"
                            : "Expandir"
                        }
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
                    {expandedService !== service.id && (
                      <p className="text-neutral-600 line-clamp-2 mt-2">
                        {service.description}
                      </p>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Para quién */}
      <section className="bg-neutral-100 py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionTitle
              title="Para quién puede ser útil este espacio"
              subtitle=""
            />
            <Card>
              <p className="text-neutral-600 leading-relaxed text-lg">
                {siteConfig.serviceInfo.targetAudience}
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl font-medium text-primary mb-4 leading-snug">
              ¿Tienes dudas sobre algún servicio?
            </h2>
            <p className="font-sans text-lg text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Puedo responder tus consultas y ayudarte a determinar si alguno de
              estos espacios es adecuado para lo que estás buscando.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto#form">Consultar disponibilidad</Button>
              <Button
                variant="outline"
                href={`https://wa.me/${siteConfig.professional.whatsapp.number}?text=${encodeURIComponent(
                  siteConfig.professional.whatsapp.message
                )}`}
                external
              >
                Consultar por WhatsApp
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
};
