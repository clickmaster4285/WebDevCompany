// components/ui/Section.tsx

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BackgroundVariant =
  | "default"
  | "surface"
  | "violet"
  | "transparent";

type PaddingVariant =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl";

interface SectionProps {
  children: ReactNode;
  background?: BackgroundVariant;
  padding?: PaddingVariant;
  className?: string;
  id?: string;
}

const bgClasses: Record<BackgroundVariant, string> = {
  default: "bg-surface-0",
  surface: "bg-surface-1/50 backdrop-blur-sm",
  violet: "bg-violet/10",
  transparent: "bg-transparent",
};

const paddingClasses: Record<PaddingVariant, string> = {
  none: "py-0",
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-20 md:py-32",
};

export function Section({
  children,
  background = "default",
  padding = "md",
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        bgClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}