import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const BASE =
  "bg-white border border-neutral-200 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.06)] p-6 transition-all duration-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.07),0_8px_24px_rgba(0,0,0,0.10)] hover:border-neutral-300 will-change-transform";

export const Card = ({
  children,
  className,
  hover = true,
  delay = 0,
}: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-160px 0px" }}
    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    className={cn(BASE, !hover && "hover:shadow-none hover:border-neutral-200", className)}
  >
    {children}
  </motion.div>
);
