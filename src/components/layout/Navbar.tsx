import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";

export const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/sobre-mi", label: "Sobre mí" },
    { path: "/servicios", label: "Servicios" },
    { path: "/contacto", label: "Contacto" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`font-medium transition-colors ${
            isActive(link.path)
              ? "text-primary border-b-2 border-primary pb-1"
              : "text-neutral-600 hover:text-primary"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
