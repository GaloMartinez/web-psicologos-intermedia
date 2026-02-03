import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { siteConfig } from "../../config/siteConfig";

export const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-neutral-600 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Información profesional */}
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

          {/* Enlaces */}
          <div>
            <h3 className="font-serif text-primary font-medium text-lg mb-4">
              Enlaces
            </h3>
            <nav className="space-y-2">
              <Link
                to="/"
                className="font-sans block text-sm hover:text-primary transition-colors"
              >
                Inicio
              </Link>
              <Link
                to="/sobre-mi"
                className="font-sans block text-sm hover:text-primary transition-colors"
              >
                Sobre mí
              </Link>
              <Link
                to="/servicios"
                className="font-sans block text-sm hover:text-primary transition-colors"
              >
                Servicios
              </Link>
              <Link
                to="/contacto"
                className="font-sans block text-sm hover:text-primary transition-colors"
              >
                Contacto
              </Link>
            </nav>
          </div>

          {/* Contacto */}
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
                href={`https://wa.me/${siteConfig.professional.whatsapp.number}?text=${encodeURIComponent(
                  siteConfig.professional.whatsapp.message
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans block hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
            </div>

            {/* Social Links */}
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

        {/* Disclaimer y Copyright */}
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
