import { Link } from "react-router-dom";
import { NAV_LINKS } from "@/config/navLinks";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/siteConfig";

export const Footer = () => {
  const whatsAppUrl = buildWhatsAppUrl(
    siteConfig.professional.whatsapp.number,
    siteConfig.professional.whatsapp.message
  );
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/70">
      <Container>
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-b border-white/10">
          {/* Columna 1: identidad */}
          <div>
            <h3 className="font-serif text-white text-xl font-medium mb-2">
              {siteConfig.professional.name}
            </h3>
            <p className="font-sans text-sm text-white/50 mb-5">
              {siteConfig.professional.license}
            </p>
            <p className="font-sans text-sm leading-relaxed mb-1">
              {siteConfig.professional.modality}
            </p>
            <p className="font-sans text-sm leading-relaxed">
              {siteConfig.professional.city}
            </p>
          </div>

          {/* Columna 2: navegación */}
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-widest text-white/40 mb-5">
              Navegación
            </h4>
            <nav className="space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-sans block text-sm text-white/65 hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Columna 3: contacto */}
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-widest text-white/40 mb-5">
              Contacto
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${siteConfig.professional.email}`}
                className="font-sans block text-white/65 hover:text-white transition-colors duration-150"
              >
                {siteConfig.professional.email}
              </a>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans block text-white/65 hover:text-white transition-colors duration-150"
              >
                WhatsApp
              </a>
              <Link
                to="/contacto#form"
                className="font-sans block text-white/65 hover:text-white transition-colors duration-150"
              >
                Formulario de contacto
              </Link>
            </div>

            {/* Agendar */}
            <div className="mt-8">
              <Link
                to="/agenda"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-accent hover:text-white transition-colors duration-150"
              >
                Agendar sesión
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="py-8 space-y-2 text-xs text-white/35">
          <p className="font-sans leading-relaxed max-w-2xl">
            {siteConfig.disclaimer.text}
          </p>
          <p className="font-sans">{siteConfig.disclaimer.licenseInfo}</p>
          <p className="font-sans pt-2">
            © {year} {siteConfig.professional.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};
