// components/services/ComparisonTable.tsx

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, X, Award } from "lucide-react";
import { ComparisonOption } from "@/data/services";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/card";

interface ComparisonTableProps {
  heading: string;
  intro: string;
  options: ComparisonOption[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export function ComparisonTable({ heading, intro, options }: ComparisonTableProps) {
  const shouldReduceMotion = useReducedMotion();
  const activeCardVariants = shouldReduceMotion ? reducedCardVariants : cardVariants;

  return (
    <Section background="default" padding="lg">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-4 py-1.5 text-sm font-medium text-violet backdrop-blur-sm">
            <Award className="h-4 w-4" aria-hidden="true" />
            Why Choose Us
          </span>
          <h2 className="text-display mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-ink-soft sm:text-lg">
            {intro}
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          role="list"
        >
          {options.map((option, index) => (
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

                <CardContent className="relative flex flex-1 flex-col gap-4 p-6">
                  {/* Option name */}
                  <h3 className="text-base font-semibold text-ink">
                    {option.option}
                  </h3>

                  {/* Where it works */}
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-soft">
                      {option.whereWorks}
                    </span>
                  </div>

                  {/* Where it fails */}
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                      <X className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-soft">
                      {option.whereFails}
                    </span>
                  </div>

                  {/* Our position - highlighted callout */}
                  <div className="mt-1 flex items-start gap-2 rounded-xl border border-violet/20 bg-violet/10 p-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet text-white">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-violet-soft">
                      {option.ourPosition}
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