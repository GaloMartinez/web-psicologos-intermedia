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
            {/* Nombre en serif — marca personal, no producto SaaS */}
            <Link to="/" className="group flex flex-col leading-none">
              <span className="font-serif text-[1.35rem] md:text-[1.6rem] font-medium text-primary group-hover:text-secondary transition-colors duration-200 leading-none tracking-[-0.01em]">
                {siteConfig.professional.name}
              </span>
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-neutral-500 mt-0.5 leading-none">
                Psicólogo clínico · CABA
              </span>
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
