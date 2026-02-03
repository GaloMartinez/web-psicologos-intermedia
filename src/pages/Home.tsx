import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { CTASection } from "../components/ui/CTASection";
import { Badge } from "../components/ui/Badge";
import { siteConfig } from "../config/siteConfig";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>{siteConfig.seo.home.title}</title>
        <meta name="description" content={siteConfig.seo.home.description} />
        <meta property="og:title" content={siteConfig.seo.home.title} />
        <meta
          property="og:description"
          content={siteConfig.seo.home.description}
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className={`relative min-h-[70vh] md:min-h-[80vh] flex items-center ${
          siteConfig.hero.backgroundImage
            ? "bg-cover bg-center bg-no-repeat"
            : "bg-white"
        }`}
        style={
          siteConfig.hero.backgroundImage
            ? {
                backgroundImage: `url(${siteConfig.hero.backgroundImage})`,
              }
            : undefined
        }
      >
        {/* Overlay oscuro para legibilidad del texto */}
        {siteConfig.hero.backgroundImage && (
          <div
            className="absolute inset-0 bg-neutral-900"
            style={{
              opacity: siteConfig.hero.overlayOpacity || 0.3,
            }}
          />
        )}

        {/* Overlay de fume blanco para contraste */}
        {siteConfig.hero.backgroundImage && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 100%)`,
            }}
          />
        )}

        {/* Contenido */}
        <Container className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center max-w-3xl mx-auto"
          >
            <h1
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight ${
                siteConfig.hero.backgroundImage
                  ? "text-white"
                  : "text-primary"
              }`}
            >
              {siteConfig.hero.title}
            </h1>
            <p
              className={`font-sans text-xl md:text-2xl mb-8 leading-relaxed ${
                siteConfig.hero.backgroundImage
                  ? "text-white/90"
                  : "text-neutral-600"
              }`}
            >
              {siteConfig.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto#form">
                {siteConfig.hero.ctaPrimary}
              </Button>
              {siteConfig.hero.backgroundImage ? (
                <motion.a
                  href={`https://wa.me/${siteConfig.professional.whatsapp.number}?text=${encodeURIComponent(
                    siteConfig.professional.whatsapp.message
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 border-2 border-white text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  {siteConfig.hero.ctaSecondary}
                </motion.a>
              ) : (
                <Button
                  variant="outline"
                  href={`https://wa.me/${siteConfig.professional.whatsapp.number}?text=${encodeURIComponent(
                    siteConfig.professional.whatsapp.message
                  )}`}
                  external
                >
                  {siteConfig.hero.ctaSecondary}
                </Button>
              )}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Cómo trabajo */}
      <section className="bg-neutral-100 py-16 md:py-20">
        <Container>
          <SectionTitle
            title="Cómo trabajo"
            subtitle="Un proceso claro y respetuoso de tus tiempos"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {siteConfig.howIWork.map((item, index) => (
              <Card key={index} delay={index * 0.1}>
                <h3 className="font-serif text-xl font-medium text-primary mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-neutral-600 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Servicios destacados */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <SectionTitle
            title="Servicios"
            subtitle="Áreas en las que puedo acompañarte"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {siteConfig.services.slice(0, 6).map((service, index) => (
              <Card key={service.id} delay={index * 0.1}>
                <h3 className="font-serif text-xl font-medium text-primary mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="font-sans text-neutral-600 mb-4 leading-relaxed">{service.description}</p>
                <Button
                  variant="outline"
                  href="/servicios"
                  className="text-sm"
                >
                  Ver más
                </Button>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/servicios">Ver todos los servicios</Button>
          </div>
        </Container>
      </section>

      {/* Confianza profesional */}
      <section className="py-16 md:py-20">
        <Container>
          <SectionTitle
            title="Confianza profesional"
            subtitle="Compromiso con la ética y la formación continua"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px 0px" }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Badge variant="info" className="mb-3">
                {siteConfig.trust.license}
              </Badge>
              <p className="text-sm text-neutral-600">
                {siteConfig.professional.license}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px 0px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <Badge variant="info" className="mb-3">
                {siteConfig.trust.formation}
              </Badge>
              <p className="text-sm text-neutral-600">
                Actualización constante en nuevas técnicas y enfoques
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px 0px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <Badge variant="info" className="mb-3">
                {siteConfig.trust.approach}
              </Badge>
              <p className="text-sm text-neutral-600">
                Respeto por tu proceso y tus tiempos
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px 0px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <Badge variant="info" className="mb-3">
                {siteConfig.trust.experience}
              </Badge>
              <p className="text-sm text-neutral-600">
                Acompañamiento profesional personalizado
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <CTASection
        title="¿Listo para comenzar?"
        subtitle="La primera entrevista es un espacio de encuentro sin compromisos. Podemos conocernos y evaluar juntos si este es el lugar adecuado para tu proceso."
        primaryAction={{
          text: "Solicitar entrevista",
          href: "/contacto#form",
        }}
        secondaryAction={{
          text: "Consultar por WhatsApp",
          href: `https://wa.me/${siteConfig.professional.whatsapp.number}?text=${encodeURIComponent(
            siteConfig.professional.whatsapp.message
          )}`,
          external: true,
        }}
      />
    </>
  );
};
