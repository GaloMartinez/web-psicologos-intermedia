import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeInOnMount } from "@/lib/animations";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/siteConfig";

export const HeroSection = () => {
  const hasBg = Boolean(siteConfig.hero.backgroundImage);
  const whatsAppUrl = buildWhatsAppUrl(
    siteConfig.professional.whatsapp.number,
    siteConfig.professional.whatsapp.message
  );

  return (
    <section
      className={cn(
        "relative min-h-[75vh] md:min-h-[82vh] flex items-center",
        hasBg ? "bg-cover bg-center bg-no-repeat" : "bg-white"
      )}
      style={hasBg ? { backgroundImage: `url(${siteConfig.hero.backgroundImage})` } : undefined}
    >
      {/* Dark overlay */}
      {hasBg && (
        <div
          className="absolute inset-0 bg-neutral-900"
          style={{ opacity: siteConfig.hero.overlayOpacity ?? 0.35 }}
        />
      )}
      {/* Left-biased gradient — illuminates the text area */}
      {hasBg && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 25% 55%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 100%)",
          }}
        />
      )}

      <Container className="py-20 md:py-28">
        <motion.div {...fadeInOnMount} className="relative z-10 text-left">
          <h1
            className={cn(
              "font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 leading-tight tracking-tight max-w-2xl lg:max-w-3xl",
              hasBg ? "text-white" : "text-primary"
            )}
          >
            {siteConfig.hero.title}
          </h1>
          <p
            className={cn(
              "font-sans text-lg md:text-xl mb-10 leading-relaxed max-w-xl",
              hasBg ? "text-white/85" : "text-neutral-600"
            )}
          >
            {siteConfig.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-start">
            <Button href="/contacto#form">{siteConfig.hero.ctaPrimary}</Button>
            {hasBg ? (
              <motion.a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 360, damping: 24 }}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-md font-sans font-medium text-sm tracking-wide transition-all duration-200 border border-white/70 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-0"
              >
                {siteConfig.hero.ctaSecondary}
              </motion.a>
            ) : (
              <Button variant="outline" href={whatsAppUrl} external>
                {siteConfig.hero.ctaSecondary}
              </Button>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
