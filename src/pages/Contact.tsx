import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/siteConfig";

export const Contact = () => {
  const whatsAppUrl = buildWhatsAppUrl(
    siteConfig.professional.whatsapp.number,
    siteConfig.professional.whatsapp.message
  );

  useEffect(() => {
    if (window.location.hash === "#form") {
      setTimeout(() => {
        document
          .getElementById("contact-form")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{siteConfig.seo.contact.title}</title>
        <meta name="description" content={siteConfig.seo.contact.description} />
        <meta property="og:title" content={siteConfig.seo.contact.title} />
        <meta property="og:description" content={siteConfig.seo.contact.description} />
      </Helmet>

      <PageHero
        title="Contacto"
        subtitle="Estoy aquí para responder tus consultas y acompañarte en tu proceso"
      />

      {/* Formulario */}
      <Section bg="white" spacing="md" id="contact-form">
        <Container>
          <div className="max-w-2xl mx-auto">
            <SectionTitle
              title="Envíame un mensaje"
              subtitle="Completa el formulario y te responderé a la brevedad"
            />
            <ContactForm />
          </div>
        </Container>
      </Section>

      {/* Información de contacto */}
      <Section bg="muted" spacing="md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card>
              <h3 className="font-serif text-xl font-medium text-primary mb-4 leading-snug">
                Información de contacto
              </h3>
              <div className="space-y-3 text-neutral-600">
                <div>
                  <p className="font-sans font-medium text-neutral-900">Email</p>
                  <a
                    href={`mailto:${siteConfig.professional.email}`}
                    className="font-sans text-primary hover:text-primary/80 transition-colors"
                  >
                    {siteConfig.professional.email}
                  </a>
                </div>
                <div>
                  <p className="font-sans font-medium text-neutral-900">WhatsApp</p>
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-primary hover:text-primary/80 transition-colors"
                  >
                    Enviar mensaje
                  </a>
                </div>
                <div>
                  <p className="font-sans font-medium text-neutral-900">Modalidad</p>
                  <p className="font-sans text-neutral-600">{siteConfig.professional.modality}</p>
                </div>
                <div>
                  <p className="font-sans font-medium text-neutral-900">Ubicación</p>
                  <p className="font-sans text-neutral-600">{siteConfig.professional.city}</p>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="font-serif text-xl font-medium text-primary mb-4 leading-snug">
                Consulta directa por WhatsApp
              </h3>
              <p className="font-sans text-neutral-600 mb-6 leading-relaxed">
                Si prefieres, puedes contactarme directamente por WhatsApp. Te
                responderé en un plazo de 24 horas hábiles.
              </p>
              <Button href={whatsAppUrl} external className="w-full">
                Abrir WhatsApp
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {siteConfig.contact.location.enabled && (
        <Section bg="white" spacing="md">
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
        </Section>
      )}
    </>
  );
};
