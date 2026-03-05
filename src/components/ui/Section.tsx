import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SectionBg = "white" | "muted" | "transparent";
type SectionSpacing = "sm" | "md" | "lg" | "xl";

/** Maps bg tokens to Tailwind background classes. */
const bgMap: Record<SectionBg, string> = {
  white: "bg-white",
  muted: "bg-neutral-100",
  transparent: "",
};

/**
 * Maps spacing tokens to vertical padding.
 *   sm  → py-12 md:py-16   (compact: lista, mapa)
 *   md  → py-16 md:py-24   (estándar: la mayoría de secciones)
 *   lg  → py-20 md:py-28   (generoso: hero, CTA, how-I-work)
 *   xl  → py-24 md:py-32   (destacado: parallax, trust)
 */
const spacingMap: Record<SectionSpacing, string> = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-28",
  xl: "py-24 md:py-32",
};

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  bg?: SectionBg;
  spacing?: SectionSpacing;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ bg = "white", spacing = "md", className, children, ...rest }, ref) => (
    <section
      ref={ref}
      className={cn(bgMap[bg], spacingMap[spacing], className)}
      {...rest}
    >
      {children}
    </section>
  )
);

Section.displayName = "Section";
