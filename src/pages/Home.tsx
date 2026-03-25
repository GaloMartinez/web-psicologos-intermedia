import { Helmet } from "react-helmet-async";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { CTASection } from "@/sections/shared";
import { siteConfig } from "@/config/siteConfig";
import {
  HeroSection,
  HowIWorkSection,
  ServicesGridSection,
  TrustSection,
  FAQSection,
} from "@/sections/home";

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

      <HeroSection />
      <HowIWorkSection />
      <ServicesGridSection />
      <TrustSection />
      <FAQSection />

      <CTASection
        title="¿Es este el momento?"
        subtitle="No hace falta tener todo claro antes de dar el primer paso. La primera entrevista es un espacio de encuentro sin compromisos, donde podemos conocernos y ver si tiene sentido continuar."
        primaryAction={{
          text: "Solicitar primera entrevista",
          href: "/contacto#form",
        }}
        secondaryAction={{
          text: "Consultar por WhatsApp",
          href: buildWhatsAppUrl(
            siteConfig.professional.whatsapp.number,
            siteConfig.professional.whatsapp.message
          ),
          external: true,
        }}
      />
    </>
  );
};
