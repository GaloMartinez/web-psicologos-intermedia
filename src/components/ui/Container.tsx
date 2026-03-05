import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Container = ({ className, children, ...rest }: ContainerProps) => (
  <div
    className={cn("w-full mx-auto max-w-7xl px-6 sm:px-10 lg:px-24", className)}
    {...rest}
  >
    {children}
  </div>
);
