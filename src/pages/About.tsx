import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  fadeInFromLeft,
  fadeInFromRight,
  fadeInUpViewDelayed,
  scaleInView,
} from "@/lib/animations";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTASection } from "@/sections/shared";
import { siteConfig } from "@/config/siteConfig";

export const About = () => {
  const whatsAppUrl = buildWhatsAppUrl(
    siteConfig.professional.whatsapp.number,
    siteConfig.professional.whatsapp.message
  );

  return (
    <>
      <Helmet>
        <title>{siteConfig.seo.about.title}</title>
        <meta name="description" content={siteConfig.seo.about.description} />
        <meta property="og:title" content={siteConfig.seo.about.title} />
        <meta property="og:description" content={siteConfig.seo.about.description} />
      </Helmet>

      {/* 1 — Presentación: quién soy */}
      <PageHero title="Sobre mí" subtitle={siteConfig.about.bio} />

      {/* 2 — Trayectoria: experiencia y contexto profesional */}
      <Section bg="white" spacing="md">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {siteConfig.about.image && (
                <motion.div {...fadeInFromLeft} className="order-2 lg:order-1">
                  <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
                    <img
                      src={siteConfig.about.image}
                      alt={siteConfig.about.imageAlt || "Foto profesional"}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              )}
              <motion.div {...fadeInFromRight()} className="order-1 lg:order-2">
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-5 leading-tight">
                  Mi trayectoria
                </h2>
                <div className="w-10 h-px bg-accent/50 mb-5" />
                <p className="font-sans text-neutral-600 leading-relaxed text-lg">
                  {siteConfig.about.extendedBio}
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3 — Formación: credenciales académicas */}
      <Section bg="muted" spacing="md">
        <Container>
          <div className="max-w-5xl mx-auto">
            <SectionTitle
              align="left"
              title="Formación profesional"
              subtitle="Formación académica y desarrollo continuo"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {siteConfig.about.formation.map((item, index) => (
                <motion.div key={index} {...fadeInUpViewDelayed(index * 0.1)}>
                  <Card className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <p className="font-sans text-neutral-600 leading-relaxed flex-1">
                        {item}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 4 — Afiliaciones: membresías institucionales */}
      <Section bg="white" spacing="md">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Afiliaciones y membresías"
              subtitle="Instituciones profesionales a las que pertenezco"
            />
            <div className="flex flex-wrap justify-center gap-3">
              {siteConfig.about.institutions.map((item, index) => (
                <motion.div key={index} {...scaleInView(index * 0.1)}>
                  <Badge variant="info" className="text-base px-6 py-3 font-medium">
                    {item}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 5 — Enfoque terapéutico: cómo trabajo y mis valores */}
      <Section bg="muted" spacing="md">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              align="left"
              title="Mi enfoque terapéutico"
              subtitle="Los principios que guían mi práctica clínica"
            />
            <Card hover={false}>
              <p className="font-sans text-neutral-600 leading-relaxed text-lg">
                {siteConfig.about.approach}
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 6 — CTA: invitación a contacto */}
      <CTASection
        title="¿Tienes preguntas?"
        subtitle="Puedo responder tus dudas sobre mi práctica y ayudarte a evaluar si este espacio es el indicado para ti."
        primaryAction={{ text: "Escribirme", href: "/contacto#form" }}
        secondaryAction={{ text: "Consultar por WhatsApp", href: whatsAppUrl, external: true }}
      />
    </>
  );
};
