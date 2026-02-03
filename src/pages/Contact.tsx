import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { ContactForm } from "../components/forms/ContactForm";
import { siteConfig } from "../config/siteConfig";

export const Contact = () => {
  useEffect(() => {
    // Scroll to form if hash is present
    if (window.location.hash === "#form") {
      setTimeout(() => {
        const formElement = document.getElementById("contact-form");
        formElement?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{siteConfig.seo.contact.title}</title>
        <meta
          name="description"
          content={siteConfig.seo.contact.description}
        />
        <meta property="og:title" content={siteConfig.seo.contact.title} />
        <meta
          property="og:description"
          content={siteConfig.seo.contact.description}
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
              Contacto
            </h1>
            <p className="font-sans text-xl text-neutral-600 leading-relaxed">
              Estoy aquí para responder tus consultas y acompañarte en tu
              proceso
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Formulario */}
      <section id="contact-form" className="py-16 md:py-20">
        <Container>
          <div className="max-w-2xl mx-auto">
            <SectionTitle
              title="Envíame un mensaje"
              subtitle="Completa el formulario y te responderé a la brevedad"
            />
            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Información de contacto */}
      <section className="bg-neutral-100 py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <h3 className="font-serif text-xl font-medium text-primary mb-4 leading-snug">
                Información de contacto
              </h3>
              <div className="space-y-3 text-neutral-600">
                <div>
                  <p className="font-medium text-neutral-900">Email</p>
                  <a
                    href={`mailto:${siteConfig.professional.email}`}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    {siteConfig.professional.email}
                  </a>
                </div>
                <div>
                  <p className="font-medium text-neutral-900">WhatsApp</p>
                  <a
                    href={`https://wa.me/${siteConfig.professional.whatsapp.number}?text=${encodeURIComponent(
                      siteConfig.professional.whatsapp.message
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Enviar mensaje
                  </a>
                </div>
                <div>
                  <p className="font-medium text-neutral-900">Modalidad</p>
                  <p className="text-neutral-600">
                    {siteConfig.professional.modality}
                  </p>
                </div>
                <div>
                  <p className="font-medium text-neutral-900">Ubicación</p>
                  <p className="text-neutral-600">
                    {siteConfig.professional.city}
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Consulta directa por WhatsApp
              </h3>
              <p className="text-neutral-600 mb-6">
                Si prefieres, puedes contactarme directamente por WhatsApp. Te
                responderé en un plazo de 24 horas hábiles.
              </p>
              <Button
                href={`https://wa.me/${siteConfig.professional.whatsapp.number}?text=${encodeURIComponent(
                  siteConfig.professional.whatsapp.message
                )}`}
                external
                className="w-full"
              >
                Abrir WhatsApp
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* Mapa (opcional) */}
      {siteConfig.contact.location.enabled && (
        <section className="py-16 md:py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              <SectionTitle
                title="Ubicación"
                subtitle={siteConfig.contact.location.address}
              />
              {siteConfig.contact.location.mapUrl && (
                <Card>
                  <div className="aspect-video">
                    <iframe
                      src={siteConfig.contact.location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación"
                    />
                  </div>
                </Card>
              )}
            </div>
          </Container>
        </section>
      )}
    </>
  );
};
