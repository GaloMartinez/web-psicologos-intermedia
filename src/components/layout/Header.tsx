import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { MobileMenu } from "./MobileMenu";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { siteConfig } from "../../config/siteConfig";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-30">
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Nombre */}
            <Link
              to="/"
              className="font-sans text-xl md:text-2xl font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              {siteConfig.professional.name}
            </Link>

            {/* Desktop Nav */}
            <Navbar />

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                href={`https://wa.me/${siteConfig.professional.whatsapp.number}?text=${encodeURIComponent(
                  siteConfig.professional.whatsapp.message
                )}`}
                variant="outline"
                external
              >
                WhatsApp
              </Button>
              <Button href="/contacto">Contacto</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-neutral-600 hover:text-primary transition-colors"
              aria-label="Abrir menú"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
