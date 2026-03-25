import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { fadeInUpView, fadeInUpViewDelayed } from "@/lib/animations";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
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
        label="Contacto"
        title="Escribime"
        subtitle="Si tenés dudas, ganas de empezar o simplemente querés saber más sobre cómo trabajo, estoy disponible. Respondo en un plazo de 24 a 48 horas hábiles."
      />

      {/* Layout principal: formulario + datos */}
      <Section bg="white" spacing="md" id="contact-form">
        <Container>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-14 lg:gap-20 items-start">

            {/* Formulario */}
            <div>
              <motion.div {...fadeInUpView} className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-px bg-accent" />
                  <span className="font-sans text-xs text-accent uppercase tracking-[0.18em] font-medium">
                    Formulario
                  </span>
                </div>
                <h2 className="font-serif text-primary" style={{ fontSize: "1.8rem" }}>
                  Enviame un mensaje
                </h2>
              </motion.div>
              <ContactForm />
            </div>

            {/* Info lateral — sencilla, sin cards */}
            <motion.div {...fadeInUpViewDelayed(0.15)} className="pt-2">
              <div className="space-y-8">
                {/* Email */}
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-600 mb-2">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.professional.email}`}
                    className="font-serif text-primary hover:text-secondary transition-colors text-base"
                  >
                    {siteConfig.professional.email}
                  </a>
                </div>

                {/* WhatsApp */}
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-600 mb-2">
                    WhatsApp
                  </p>
                  <Button href={whatsAppUrl} external className="w-full justify-center text-sm">
                    Abrir WhatsApp
                  </Button>
                </div>

                {/* Modalidad */}
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-600 mb-2">
                    Modalidad
                  </p>
                  <p className="font-sans text-neutral-600 text-sm leading-relaxed">
                    {siteConfig.professional.modality}
                  </p>
                </div>

                {/* Ubicación */}
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-neutral-600 mb-2">
                    Ubicación
                  </p>
                  <p className="font-sans text-neutral-600 text-sm leading-relaxed">
                    {siteConfig.professional.city}
                  </p>
                </div>

                {/* Tiempos de respuesta */}
                <div className="pt-4 border-t border-neutral-200">
                  <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                    Respondo dentro de las{" "}
                    <span className="font-medium text-primary">48 horas hábiles</span>.
                    Si es urgente, el WhatsApp es la vía más rápida.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Mapa (opcional) */}
      {siteConfig.contact.location.enabled && (
        <Section bg="muted" spacing="sm">
          <Container>
            <div className="max-w-4xl mx-auto">
              <p className="font-sans text-xs text-neutral-600 uppercase tracking-widest mb-4">
                Ubicación
              </p>
              <p className="font-serif text-primary mb-6">
                {siteConfig.contact.location.address}
              </p>
              {siteConfig.contact.location.mapUrl && (
                <div className="aspect-video rounded-xl overflow-hidden border border-neutral-200">
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
              )}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
};
