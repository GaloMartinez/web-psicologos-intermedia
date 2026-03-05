import { motion } from "framer-motion";
import { fadeInUpViewDelayed } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/siteConfig";

type HowIWorkItem = (typeof siteConfig.howIWork)[number] & {
  image?: string;
  imageAlt?: string;
};

export const HowIWorkSection = () => {
  const items = siteConfig.howIWork as HowIWorkItem[];
  const defaultImage =
    siteConfig.about.image || siteConfig.hero.backgroundImage || "";

  return (
    <Section bg="muted" spacing="lg">
      <Container>
        <SectionTitle
          title="Cómo trabajo"
          subtitle="Mi enfoque terapéutico, adaptado a cada persona"
        />
        <div className="space-y-6 md:space-y-7 max-w-5xl mx-auto">
          {items.map((item, index) => {
            const imageSrc = item.image || defaultImage;
            const imageAlt = item.imageAlt || item.title;

            return (
              <motion.div
                key={index}
                {...fadeInUpViewDelayed(index * 0.1)}
                className={`bg-white rounded-2xl border border-neutral-200 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {imageSrc && (
                  <div className="relative w-full md:w-2/5 h-56 md:h-auto md:min-h-60 shrink-0">
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex-1 p-8 md:p-10 flex items-center">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-neutral-600 leading-relaxed text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
