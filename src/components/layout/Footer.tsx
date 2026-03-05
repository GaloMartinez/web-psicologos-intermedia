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

  return (
    <footer className="bg-neutral-100 text-neutral-600 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-primary font-medium text-lg mb-4">
              {siteConfig.professional.name}
            </h3>
            <p className="font-sans text-sm mb-2">
              {siteConfig.professional.license}
            </p>
            <p className="font-sans text-sm mb-2">
              {siteConfig.professional.city}
            </p>
            <p className="font-sans text-sm">
              {siteConfig.professional.modality}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-primary font-medium text-lg mb-4">
              Enlaces
            </h3>
            <nav className="space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-sans block text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-serif text-primary font-medium text-lg mb-4">
              Contacto
            </h3>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${siteConfig.professional.email}`}
                className="font-sans block hover:text-primary transition-colors"
              >
                {siteConfig.professional.email}
              </a>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans block hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
            </div>

            {siteConfig.socialLinks.length > 0 && (
              <div className="mt-4 flex space-x-4">
                {siteConfig.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-neutral-600 hover:text-primary transition-colors"
                    aria-label={social.name}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-8 text-sm text-center space-y-2">
          <p className="font-sans text-neutral-600">{siteConfig.disclaimer.text}</p>
          <p className="font-sans text-neutral-600">{siteConfig.disclaimer.licenseInfo}</p>
          <p className="font-sans text-neutral-600 mt-4">
            © {new Date().getFullYear()} {siteConfig.professional.name}. Todos
            los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};
