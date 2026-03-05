import { Helmet } from "react-helmet-async";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { CTASection } from "@/sections/shared";
import { siteConfig } from "@/config/siteConfig";
import {
  HeroSection,
  HowIWorkSection,
  ServicesGridSection,
  TrustSection,
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

      <CTASection
        title="¿Listo para comenzar?"
        subtitle="La primera entrevista es un espacio de encuentro sin compromisos. Podemos conocernos y evaluar juntos si este es el lugar adecuado para tu proceso."
        primaryAction={{
          text: "Solicitar entrevista",
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
