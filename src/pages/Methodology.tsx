import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { fadeInUpView, fadeInUpViewDelayed, fadeInFromLeft, fadeInFromRight } from "@/lib/animations";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTASection } from "@/sections/shared";
import { siteConfig } from "@/config/siteConfig";

const APPROACH_COLORS: Record<string, string> = {
  tcc: "#1A3535",
  act: "#4A7C6F",
  psicodinamico: "#BE7955",
};

export const Methodology = () => {
  const whatsAppUrl = buildWhatsAppUrl(
    siteConfig.professional.whatsapp.number,
    siteConfig.professional.whatsapp.message
  );

  return (
    <>
      <Helmet>
        <title>{siteConfig.seo.methodology.title}</title>
        <meta name="description" content={siteConfig.seo.methodology.description} />
        <meta property="og:title" content={siteConfig.seo.methodology.title} />
        <meta property="og:description" content={siteConfig.seo.methodology.description} />
      </Helmet>

      <PageHero
        label="Metodología"
        title="Enfoque integrativo"
        subtitle="Cómo combino distintas corrientes terapéuticas para adaptar el trabajo a cada persona."
      />

      {/* Introducción */}
      <Section bg="white" spacing="md">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">
              <motion.div {...fadeInFromLeft}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-accent" />
                  <span className="font-sans text-xs text-accent uppercase tracking-[0.18em] font-medium">
                    ¿Por qué integrativo?
                  </span>
                </div>
                <h2 className="font-serif text-primary mb-5">
                  Herramientas, no dogmas
                </h2>
                <p className="font-sans text-neutral-600 leading-relaxed">
                  {siteConfig.methodology.intro}
                </p>
              </motion.div>

              {/* Panel lateral con los tres enfoques */}
              <motion.div {...fadeInFromRight()} className="space-y-4">
                {siteConfig.methodology.approaches.map((approach) => (
                  <div
                    key={approach.id}
                    className="flex items-center gap-4 px-5 py-4 rounded-xl border border-neutral-200 bg-neutral-100"
                  >
                    <div
                      className="w-2 h-8 rounded-full shrink-0"
                      style={{ backgroundColor: APPROACH_COLORS[approach.id] }}
                    />
                    <div>
                      <p className="font-serif text-primary font-medium leading-snug">
                        {approach.shortName}
                      </p>
                      <p className="font-sans text-xs text-neutral-600 mt-0.5">
                        {approach.title}
                      </p>
                    </div>
                  </div>
                ))}
                <p className="font-sans text-xs text-neutral-600 text-center pt-2 leading-relaxed">
                  Tres corrientes, un proceso integrado
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Los tres enfoques — uno por uno */}
      <Section bg="muted" spacing="md">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUpView} className="mb-14">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-accent" />
                <span className="font-sans text-xs text-accent uppercase tracking-[0.18em] font-medium">
                  Los enfoques
                </span>
              </div>
              <h2 className="font-serif text-primary">
                Tres perspectivas del cambio
              </h2>
            </motion.div>

            <div className="space-y-0 divide-y divide-neutral-200">
              {siteConfig.methodology.approaches.map((approach, index) => (
                <motion.div
                  key={approach.id}
                  {...fadeInUpViewDelayed(index * 0.12)}
                  className="py-12 first:pt-0 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start"
                >
                  {/* Nombre del enfoque */}
                  <div>
                    <div
                      className="w-8 h-1 rounded-full mb-4"
                      style={{ backgroundColor: APPROACH_COLORS[approach.id] }}
                    />
                    <p
                      className="font-serif font-medium leading-snug"
                      style={{
                        color: APPROACH_COLORS[approach.id],
                        fontSize: "1.6rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {approach.shortName}
                    </p>
                    <p className="font-sans text-xs text-neutral-600 mt-2 leading-snug max-w-[160px]">
                      {approach.title}
                    </p>
                  </div>

                  {/* Contenido */}
                  <div>
                    <p className="font-sans text-neutral-600 leading-relaxed mb-7">
                      {approach.description}
                    </p>
                    <ul className="space-y-3">
                      {approach.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="w-1 h-1 rounded-full mt-2.5 shrink-0"
                            style={{ backgroundColor: APPROACH_COLORS[approach.id] }}
                          />
                          <span className="font-sans text-sm text-neutral-600 leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* La postura integrativa */}
      <Section bg="white" spacing="md">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInUpView}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-accent" />
                  <span className="font-sans text-xs text-accent uppercase tracking-[0.18em] font-medium">
                    La integración
                  </span>
                </div>
                <h2 className="font-serif text-primary mb-5">
                  Cómo se combina en la práctica
                </h2>
                <p className="font-sans text-neutral-600 leading-relaxed">
                  {siteConfig.methodology.integrative}
                </p>
              </motion.div>

              {/* Ejemplos de combinación */}
              <motion.div {...fadeInUpViewDelayed(0.15)} className="space-y-5">
                {[
                  {
                    situation: "Ansiedad crónica",
                    tools: "TCC para identificar patrones + ACT para habitar la incertidumbre",
                  },
                  {
                    situation: "Duelo o pérdida",
                    tools: "Psicodinámico para elaborar + ACT para conectar con valores actuales",
                  },
                  {
                    situation: "Patrones relacionales",
                    tools: "Psicodinámico para comprender la historia + TCC para cambiar conductas",
                  },
                  {
                    situation: "Burnout profesional",
                    tools: "ACT para clarificar valores + TCC para reestructurar creencias de obligación",
                  },
                ].map(({ situation, tools }) => (
                  <div
                    key={situation}
                    className="px-6 py-5 rounded-xl bg-neutral-100 border border-neutral-200"
                  >
                    <p className="font-serif text-primary font-medium mb-1.5 text-base">
                      {situation}
                    </p>
                    <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                      {tools}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="¿Querés saber cómo aplicaría este enfoque a tu caso?"
        subtitle="En la primera entrevista te cuento cómo trabajaría específicamente con lo que vos traés."
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
