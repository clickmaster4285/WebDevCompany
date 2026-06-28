// components/services/BusinessCase.tsx

"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import {
  TrendingUp,
  ArrowUpRight,
  BarChart3,
  Zap,
  Clock,
  Shield,
} from "lucide-react";
import { Section } from "@/components/ui/Section";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const cardIcons = [BarChart3, Zap, Clock, Shield];

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
   ───────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 24,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const reducedItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
   ───────────────────────────────────────────── */

function ValueCard({
  stream,
  index,
  shouldReduceMotion,
}: {
  stream: string;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const Icon = cardIcons[index % cardIcons.length];

  return (
    <motion.div
      variants={shouldReduceMotion ? reducedItemVariants : itemVariants}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -10,
              scale: 1.02,
              transition: { type: "spring", stiffness: 350, damping: 15 },
            }
      }
      className="group relative h-full"
    >
      <div className="relative flex h-full min-h-65 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0d] p-6 shadow-xl shadow-black/40 backdrop-blur-xl transition-all duration-500 hover:border-violet/30 hover:bg-[#121212] hover:shadow-2xl hover:shadow-violet/5 sm:min-h-[280px] sm:p-7">
        
        {/* Top gradient line */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-violet/50 via-violet/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Corner ambient glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Decorative number - top right, subtle */}
        <div className="absolute right-4 top-3 select-none text-5xl font-bold leading-none text-white/[0.06] transition-colors duration-500 group-hover:text-violet/[0.10] sm:text-6xl">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Hover arrow */}
        <div className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/30 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-violet/30 group-hover:text-violet">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col">
          {/* Icon */}
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet/10 text-violet ring-1 ring-violet/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-violet group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet/30">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>

          {/* Text content - THE MAIN FIX */}
          <p
            className="flex-1 text-[15px] font-medium leading-relaxed text-white/90 sm:text-base"
            style={{ color: "rgba(255, 255, 255, 0.85)" }}
          >
            {stream}
          </p>

          {/* Bottom accent */}
          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-violet/0 transition-all duration-500 group-hover:text-violet/80">
            <span className="h-px w-0 bg-violet/40 transition-all duration-500 group-hover:w-6" />
            <span className="flex items-center gap-1">
              Detail
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5">
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet/60 to-violet/20"
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.min((index + 1) * 25, 100)}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.4 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */

interface BusinessCaseProps {
  heading: string;
  content: string;
  valueStreams: string[];
}

export function BusinessCase({
  heading,
  content,
  valueStreams,
}: BusinessCaseProps) {
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
      {/* Background ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-14 text-center sm:mb-16"
          variants={fadeUpVariants}
          {...motionProps}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet backdrop-blur-sm">
            <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
            Business Impact
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {heading}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-balance text-base leading-relaxed text-white/60 sm:text-lg">
            {content}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          role="list"
        >
          {valueStreams.map((stream, index) => (
            <ValueCard
              key={index}
              stream={stream}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}