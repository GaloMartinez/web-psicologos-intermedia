import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { siteConfig } from "../config/siteConfig";

export const About = () => {
  return (
    <>
      <Helmet>
        <title>{siteConfig.seo.about.title}</title>
        <meta name="description" content={siteConfig.seo.about.description} />
        <meta property="og:title" content={siteConfig.seo.about.title} />
        <meta
          property="og:description"
          content={siteConfig.seo.about.description}
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
              Sobre mí
            </h1>
            <p className="font-sans text-xl text-neutral-600 leading-relaxed">{siteConfig.about.bio}</p>
          </motion.div>
        </Container>
      </section>

      {/* Bio extendida */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Imagen y Bio en layout responsive */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
              {/* Imagen del profesional */}
              {siteConfig.about.image && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-200px 0px" }}
                  transition={{ duration: 0.5 }}
                  className="md:col-span-1"
                >
                  <div className="relative aspect-square md:aspect-auto md:h-full max-w-sm mx-auto md:max-w-none">
                    <img
                      src={siteConfig.about.image}
                      alt={siteConfig.about.imageAlt || "Foto profesional"}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </motion.div>
              )}

              {/* Bio extendida */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-200px 0px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`prose prose-lg max-w-none ${
                  siteConfig.about.image ? "md:col-span-2" : ""
                }`}
              >
                <h2 className="font-serif text-2xl font-medium text-primary mb-4 leading-snug">
                  Mi trayectoria
                </h2>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {siteConfig.about.extendedBio}
                </p>
              </motion.div>
            </div>

            {/* Resto del contenido */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px 0px" }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none"
            >

              <h2 className="text-2xl font-semibold text-primary mb-4 mt-8">
                Formación
              </h2>
              <ul className="list-disc list-inside space-y-2 text-neutral-600 mb-6">
                {siteConfig.about.formation.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4 mt-8">
                Instituciones
              </h2>
              <ul className="list-disc list-inside space-y-2 text-neutral-600 mb-6">
                {siteConfig.about.institutions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold text-primary mb-4 mt-8">
                Mi enfoque terapéutico
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {siteConfig.about.approach}
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Primera entrevista */}
      <section className="bg-neutral-100 py-16 md:py-20">
        <Container>
          <SectionTitle
            title="Qué esperar en la primera entrevista"
            subtitle="Un espacio de encuentro sin presiones ni compromisos"
          />
          <div className="max-w-3xl mx-auto">
            <Card>
              <p className="text-neutral-600 leading-relaxed text-lg">
                {siteConfig.about.firstSession}
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
              ¿Te gustaría conocernos?
            </h2>
            <p className="font-sans text-lg text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              La primera entrevista es un espacio para conocernos y evaluar
              juntos si este es el lugar adecuado para tu proceso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contacto#form">Solicitar entrevista</Button>
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
