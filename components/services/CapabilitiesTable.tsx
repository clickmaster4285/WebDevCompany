// components/services/CapabilitiesTable.tsx

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Layers, Check } from "lucide-react";
import { CapabilityItem } from "@/data/services";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/card";

interface CapabilitiesTableProps {
  heading: string;
  items: CapabilityItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
    },
  },
};

const reducedCardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export function CapabilitiesTable({ heading, items }: CapabilitiesTableProps) {
  const shouldReduceMotion = useReducedMotion();
  const activeCardVariants = shouldReduceMotion ? reducedCardVariants : cardVariants;

  return (
    <Section background="default" padding="lg">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-display text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {heading}
        </motion.h2>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          role="list"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={activeCardVariants}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -6, transition: { duration: 0.25, ease: "easeOut" } }
              }
              role="listitem"
            >
              <Card
                tabIndex={0}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-surface-1/50 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet/30 hover:shadow-violet-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0"
              >
                {/* Hover glow wash */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet/0 to-violet/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-violet/10 group-hover:to-violet/5" />

                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-violet/0 via-violet/0 to-violet/0 transition-all duration-300 group-hover:via-violet/60" />

                <CardContent className="relative flex flex-1 flex-col gap-4 p-6">
                  {/* Icon + service name */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet/20 bg-violet/10 text-violet transition-all duration-300 group-hover:scale-110 group-hover:border-violet/40 group-hover:bg-violet group-hover:text-white">
                      <Layers className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-ink leading-snug">
                      {item.service}
                    </h3>
                  </div>

                  {/* What it is */}
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {item.whatItIs}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full bg-border/50" />

                  {/* Business impact */}
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet/15 text-violet">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-ink">
                      {item.businessImpact}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}