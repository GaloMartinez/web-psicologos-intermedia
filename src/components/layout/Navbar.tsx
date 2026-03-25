import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "@/config/navLinks";

export const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <nav className="hidden lg:flex items-center space-x-6">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`font-sans text-sm font-medium tracking-wide transition-colors duration-150 ${
            isActive(link.path)
              ? "text-primary border-b border-primary pb-px"
              : "text-neutral-600 hover:text-primary"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
