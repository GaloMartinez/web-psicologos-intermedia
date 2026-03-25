import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  fadeInFromLeft,
  fadeInFromRight,
  fadeInUpView,
  fadeInUpViewDelayed,
} from "@/lib/animations";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
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

      {/* 1 — Hero: quién soy */}
      <PageHero
        label="Sobre mí"
        title="Nicolás Ferreyra"
        subtitle={siteConfig.about.bio}
      />

      {/* 2 — Foto + trayectoria */}
      <Section bg="white" spacing="md">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

              {/* Foto */}
              {siteConfig.about.image && (
                <motion.div {...fadeInFromLeft} className="order-2 lg:order-1">
                  <div className="relative">
                    <div className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border border-secondary/25" />
                    <img
                      src={siteConfig.about.image}
                      alt={siteConfig.about.imageAlt || "Foto profesional"}
                      className="relative w-full aspect-[3/4] max-w-md object-cover rounded-2xl shadow-lg"
                      loading="lazy"
                    />
                  </div>

                  {/* Badge matrícula */}
                  <div className="mt-6 flex items-start gap-4">
                    <div className="w-px h-12 bg-accent/30 mt-1 shrink-0" />
                    <div>
                      <p className="font-sans text-xs text-neutral-600 uppercase tracking-widest mb-1">
                        Habilitado en CABA
                      </p>
                      <p className="font-serif text-primary font-medium">
                        Matrícula Nacional {siteConfig.professional.license}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Texto de trayectoria */}
              <motion.div
                {...fadeInFromRight()}
                className="order-1 lg:order-2 pt-2"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-accent" />
                  <span className="font-sans text-xs text-accent uppercase tracking-[0.18em] font-medium">
                    Trayectoria
                  </span>
                </div>
                <h2 className="font-serif text-primary mb-5">
                  Mi recorrido
                </h2>
                <div className="space-y-5">
                  {siteConfig.about.extendedBio
                    .split("\n\n")
                    .filter(Boolean)
                    .map((paragraph, i) => (
                      <p
                        key={i}
                        className="font-sans text-neutral-600 leading-relaxed"
                      >
                        {paragraph.trim()}
                      </p>
                    ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3 — Formación académica */}
      <Section bg="muted" spacing="md">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUpView} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-accent" />
                <span className="font-sans text-xs text-accent uppercase tracking-[0.18em] font-medium">
                  Formación
                </span>
              </div>
              <h2 className="font-serif text-primary">
                Credenciales académicas
              </h2>
            </motion.div>

            {/* Lista de formación — editorial, no cards */}
            <div>
              {siteConfig.about.formation.map((item, index) => (
                <motion.div
                  key={index}
                  {...fadeInUpViewDelayed(index * 0.1)}
                  className="border-t border-neutral-200 py-6 first:border-t-0 first:pt-0 grid grid-cols-[32px_1fr] gap-5 items-start"
                >
                  <span
                    className="font-serif text-accent/70 font-light leading-none mt-0.5"
                    style={{ fontSize: "1.05rem" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-sans text-neutral-600 leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 4 — Afiliaciones */}
      <Section bg="white" spacing="sm">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUpView} className="mb-8">
              <p className="font-sans text-xs text-neutral-600 uppercase tracking-widest">
                Membresías institucionales
              </p>
            </motion.div>
            <div className="space-y-3">
              {siteConfig.about.institutions.map((item, index) => (
                <motion.div
                  key={index}
                  {...fadeInUpViewDelayed(index * 0.08)}
                  className="flex items-center gap-4"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                  <p className="font-sans text-neutral-600 text-sm leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 5 — Enfoque terapéutico */}
      <Section bg="muted" spacing="md">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeInUpView} className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-accent" />
                <span className="font-sans text-xs text-accent uppercase tracking-[0.18em] font-medium">
                  Enfoque
                </span>
              </div>
              <h2 className="font-serif text-primary">
                Mi forma de trabajar
              </h2>
            </motion.div>

            <motion.div {...fadeInUpViewDelayed(0.15)} className="max-w-2xl">
              {siteConfig.about.approach
                .split("\n\n")
                .filter(Boolean)
                .map((paragraph, i) => (
                  <p
                    key={i}
                    className={`font-sans leading-relaxed text-neutral-600 ${
                      i > 0 ? "mt-5" : ""
                    }`}
                  >
                    {paragraph.trim()}
                  </p>
                ))}
            </motion.div>

            {/* Nota primera sesión */}
            <motion.div
              {...fadeInUpViewDelayed(0.25)}
              className="mt-12 pt-10 border-t border-neutral-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-accent" />
                <span className="font-sans text-xs text-neutral-600 uppercase tracking-widest">
                  La primera sesión
                </span>
              </div>
              <p className="font-sans text-neutral-600 leading-relaxed max-w-xl">
                {siteConfig.about.firstSession}
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 6 — CTA */}
      <CTASection
        title="¿Querés saber si este es el espacio para vos?"
        subtitle="Podemos charlar sin compromiso. La primera entrevista es un espacio para conocernos y evaluar si tiene sentido continuar."
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
