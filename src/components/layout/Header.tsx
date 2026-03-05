import { Link } from "react-router-dom";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/siteConfig";

export const Header = () => {
  const { isOpen, open, close } = useMobileMenu();

  return (
    <>
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-30">
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              to="/"
              className="font-sans text-xl md:text-2xl font-semibold tracking-tight text-primary hover:text-primary/75 transition-colors duration-150"
            >
              {siteConfig.professional.name}
            </Link>

            <Navbar />

            <div className="hidden lg:flex items-center space-x-3">
              <Button
                href={buildWhatsAppUrl(
                  siteConfig.professional.whatsapp.number,
                  siteConfig.professional.whatsapp.message
                )}
                variant="outline"
                external
              >
                WhatsApp
              </Button>
              <Button href="/agenda">Agendar sesión</Button>
            </div>

            <button
              onClick={open}
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

      <MobileMenu isOpen={isOpen} onClose={close} />
    </>
  );
};
