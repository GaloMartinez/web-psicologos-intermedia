import { motion } from "framer-motion";
import { fadeInUpView } from "@/lib/animations";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export const SectionTitle = ({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) => {
  const isLeft = align === "left";

  return (
    <motion.div
      {...fadeInUpView}
      className={`mb-12 md:mb-14 ${isLeft ? "text-left" : "text-center"} ${className}`}
    >
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary leading-tight">
        {title}
      </h2>
      <div className={`w-10 h-px bg-accent/50 mt-4 mb-4 ${isLeft ? "" : "mx-auto"}`} />
      {subtitle && (
        <p
          className={`font-sans text-lg text-neutral-600 leading-relaxed ${
            isLeft ? "max-w-2xl" : "max-w-2xl mx-auto"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
