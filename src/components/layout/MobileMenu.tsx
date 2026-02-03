import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { path: "/", label: "Inicio" },
  { path: "/sobre-mi", label: "Sobre mí" },
  { path: "/servicios", label: "Servicios" },
  { path: "/contacto", label: "Contacto" },
];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-semibold text-primary">
                  {siteConfig.professional.name}
                </h3>
                <button
                  onClick={onClose}
                  className="text-neutral-600 hover:text-primary transition-colors"
                  aria-label="Cerrar menú"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={onClose}
                    className="block py-2 text-neutral-700 hover:text-primary font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-neutral-200">
                <a
                  href={`https://wa.me/${siteConfig.professional.whatsapp.number}?text=${encodeURIComponent(
                    siteConfig.professional.whatsapp.message
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 px-4 bg-accent text-white rounded-lg hover:bg-[color:var(--color-accent-90)] transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
