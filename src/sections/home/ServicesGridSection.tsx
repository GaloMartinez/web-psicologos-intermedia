import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/siteConfig";

export const ServicesGridSection = () => (
  <Section bg="white" spacing="md">
    <Container>
      <SectionTitle
        title="Servicios"
        subtitle="Áreas en las que puedo acompañarte"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {siteConfig.services.slice(0, 6).map((service, index) => (
          <Card key={service.id} delay={index * 0.1} className="h-full flex flex-col">
            <h3 className="font-serif text-xl font-medium text-primary mb-3 leading-snug">
              {service.title}
            </h3>
            <p className="font-sans text-neutral-600 leading-relaxed grow">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button href="/servicios">Ver todos los servicios</Button>
      </div>
    </Container>
  </Section>
);
