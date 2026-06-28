// components/services/SolutionSection.tsx

"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { Zap, ArrowUpRight } from "lucide-react";
import { SolutionPillar } from "@/lib/data/services";
import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
   ───────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const iconRevealVariants: Variants = {
  hidden: { scale: 0.5, opacity: 0, rotate: -10 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      delay: 0.3,
    },
  },
};

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
   ───────────────────────────────────────────── */

function PillarCard({
  pillar,
  index,
  shouldReduceMotion,
}: {
  pillar: SolutionPillar;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -12,
              scale: 1.02,
              transition: { type: "spring", stiffness: 350, damping: 15 },
            }
      }
      className="group relative"
    >
      <Card className="relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-1/50 p-7 shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:border-violet/30 hover:bg-surface-1/70 hover:shadow-2xl hover:shadow-violet/10 sm:p-8">
        {/* Top gradient accent line */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-violet/50 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

        {/* Corner glow on hover */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Subtle inner border glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-violet/10" />
        </div>

        {/* Card content */}
        <div className="relative">
          {/* Icon container */}
          <motion.div
            variants={iconRevealVariants}
            className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet/10 text-violet ring-1 ring-violet/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-violet group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet/30 group-hover:ring-violet/40"
          >
            <Zap className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
          </motion.div>

          {/* Title */}
          <CardTitle className="mb-4 text-xl font-semibold leading-tight tracking-tight text-ink transition-colors duration-300 group-hover:text-violet sm:text-2xl">
            {pillar.title}
          </CardTitle>

          {/* Description */}
          <CardContent className="p-0">
            <p className="text-balance text-[15px] leading-relaxed text-ink-soft/80 transition-colors duration-300 group-hover:text-ink-soft sm:text-base">
              {pillar.description}
            </p>
          </CardContent>

          {/* Bottom link indicator */}
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-violet/0 transition-all duration-500 group-hover:text-violet/90">
            <span className="h-px w-0 bg-violet/50 transition-all duration-500 group-hover:w-6" />
            <span className="flex items-center gap-1">
              Learn more
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */

interface SolutionSectionProps {
  heading: string;
  content: string;
  pillars: SolutionPillar[];
}

export function SolutionSection({ heading, content, pillars }: SolutionSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
      };

  return (
    <Section
      background="transparent"
      padding="lg"
      className="relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ── Eyebrow Badge ── */}
        <motion.div
          className="mb-6 flex justify-center"
          variants={fadeUpVariants}
          {...motionProps}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet backdrop-blur-sm">
            <Zap className="h-3.5 w-3.5" aria-hidden="true" />
            Our Approach
          </span>
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          className="text-display text-balance text-center text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl"
          variants={fadeUpVariants}
          {...motionProps}
          transition={{ delay: 0.1 }}
        >
          {heading}
        </motion.h2>

        {/* ── Subtitle ── */}
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-balance text-center text-base leading-relaxed text-ink-soft sm:text-lg sm:leading-relaxed"
          variants={fadeUpVariants}
          {...motionProps}
          transition={{ delay: 0.2 }}
        >
          {content}
        </motion.p>

        {/* ── Pillar Cards Grid ── */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {pillars.map((pillar, index) => (
            <PillarCard
              key={index}
              pillar={pillar}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}