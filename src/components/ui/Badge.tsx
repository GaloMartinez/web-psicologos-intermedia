import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "info";
  className?: string;
}

const VARIANTS = {
  default: "bg-neutral-100 text-neutral-700",
  success: "bg-[color:var(--color-accent-90)]/15 text-accent",
  info: "bg-[color:var(--color-secondary-10)] text-primary",
} as const;

export const Badge = ({
  children,
  variant = "default",
  className,
}: BadgeProps) => (
  <span
    className={cn(
      "inline-flex items-center px-3 py-1.5 rounded-md font-sans text-sm font-medium",
      VARIANTS[variant],
      className
    )}
  >
    {children}
  </span>
);
