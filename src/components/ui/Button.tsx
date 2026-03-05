import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  external?: boolean;
  disabled?: boolean;
}

const BASE =
  "inline-flex items-center justify-center px-7 py-3.5 rounded-md font-sans font-medium text-sm tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 origin-center";

const VARIANTS = {
  primary:
    "bg-accent text-white hover:bg-[color:var(--color-accent-90)] focus:ring-accent",
  secondary:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-600",
  outline:
    "border-2 border-primary text-primary hover:bg-neutral-50 focus:ring-primary",
} as const;

const SPRING = { type: "spring", stiffness: 360, damping: 24 } as const;

export const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  type = "button",
  external = false,
  disabled = false,
}: ButtonProps) => {
  const classes = cn(BASE, VARIANTS[variant], className);

  if (href && external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={SPRING}
        style={{ transformOrigin: "center" }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  if (href) {
    return (
      <Link
        to={href}
        className={cn(classes, "hover:scale-[1.02] active:scale-[0.98] transition-transform duration-150 ease-out")}
        style={{ transformOrigin: "center", display: "inline-flex" }}
      >
        {children}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={SPRING}
      style={{ transformOrigin: "center" }}
      className={cn(classes, disabled && "opacity-50 cursor-not-allowed")}
    >
      {children}
    </motion.button>
  );
};
