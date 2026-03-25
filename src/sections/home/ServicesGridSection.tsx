import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUpView, fadeInUpViewDelayed } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/siteConfig";

export const ServicesGridSection = () => (
  <Section bg="muted" spacing="lg">
    <Container>
      <div className="max-w-5xl mx-auto">
        {/* Header con descripción lateral — layout editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-16 mb-14 items-end">
          <motion.div {...fadeInUpView}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-accent" />
              <span className="font-sans text-xs text-accent uppercase tracking-[0.18em] font-medium">
                Áreas de trabajo
              </span>
            </div>
            <h2 className="font-serif text-primary">
              ¿En qué puedo acompañarte?
            </h2>
          </motion.div>
          <motion.p
            {...fadeInUpViewDelayed(0.1)}
            className="font-sans text-neutral-600 leading-relaxed"
          >
            Trabajo con personas adultas que atraviesan diferentes momentos
            vitales. Estas son las áreas en las que me especializo.
          </motion.p>
        </div>

        {/* Lista editorial — filas directamente sobre el fondo, sin card contenedora */}
        <div className="border-t border-neutral-200">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.id}
              {...fadeInUpViewDelayed(index * 0.07)}
              className="group border-b border-neutral-200"
            >
              <Link
                to="/servicios"
                className="flex items-start justify-between gap-6 px-2 py-7 hover:bg-white/70 transition-colors duration-200"
              >
                <div className="flex gap-5 items-start flex-1 min-w-0">
                  {/* Número */}
                  <span
                    className="font-serif shrink-0 mt-0.5 leading-none select-none"
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--color-accent)",
                      opacity: 0.5,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="font-serif font-medium text-primary mb-1.5 group-hover:text-secondary transition-colors"
                      style={{ fontSize: "1.12rem", lineHeight: 1.38 }}
                    >
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm text-neutral-600 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
                {/* Flecha */}
                <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity mt-1 shrink-0">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeInUpViewDelayed(0.5)}
          className="mt-10 flex justify-center"
        >
          <Button href="/servicios" variant="outline">
            Leer descripción completa
          </Button>
        </motion.div>
      </div>
    </Container>
  </Section>
);
