// components/services/ProblemSection.tsx

"use client";

import { motion, useReducedMotion, useInView, Variants } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { ProblemStat } from "@/lib/data/services";
import { Section } from "@/components/ui/Section";

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
   ───────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const statCardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
   ───────────────────────────────────────────── */

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  value: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric portion
    const numericMatch = value.match(/[\d.]+/);
    if (!numericMatch) {
      setDisplayValue(value);
      return;
    }

    const target = parseFloat(numericMatch[0]);
    const isPercentage = value.includes("%");
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      let formatted: string;
      if (isPercentage) {
        formatted = current.toFixed(1);
      } else if (target >= 1000) {
        formatted = Math.floor(current).toLocaleString();
      } else if (Number.isInteger(target)) {
        formatted = Math.floor(current).toString();
      } else {
        formatted = current.toFixed(1);
      }

      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, suffix, prefix, duration]);

  return (
    <span ref={ref} className="tabular-nums tracking-tight">
      {displayValue}
    </span>
  );
}

function StatCard({
  stat,
  index,
  shouldReduceMotion,
}: {
  stat: ProblemStat;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const suffix = stat.value.includes("%") ? "%" : "";
  const prefix = stat.value.includes("$") ? "$" : "";
  const cleanValue = stat.value.replace(/[$,%]/g, "");

  return (
    <motion.div
      variants={statCardVariants}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -6,
              scale: 1.02,
              transition: { type: "spring", stiffness: 400, damping: 17 },
            }
      }
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-surface-1/60 p-6 text-center backdrop-blur-xl transition-colors duration-500 hover:border-destructive/25 hover:bg-surface-1/80 sm:p-8"
    >
      {/* Ambient glow on hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-destructive/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="text-display text-3xl font-semibold text-destructive sm:text-4xl md:text-5xl">
          <AnimatedCounter
            value={cleanValue}
            prefix={prefix}
            suffix={suffix}
            duration={1.8 + index * 0.2}
          />
        </div>

        <div className="mt-2 text-sm font-semibold tracking-wide text-ink sm:text-base">
          {stat.label}
        </div>

        <div className="mt-1.5 text-sm leading-relaxed text-ink-mute">
          {stat.description}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-destructive/60 to-transparent transition-all duration-700 group-hover:w-full" />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */

interface ProblemSectionProps {
  heading: string;
  content: string[];
  stats?: ProblemStat[];
}

export function ProblemSection({ heading, content, stats }: ProblemSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const contentRef = useRef(null);

  // Respect user's motion preferences
  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-80px" },
      };

  return (
    <Section
      background="transparent"
      padding="lg"
      className="relative overflow-hidden"
    >
      {/* Background ambient effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-destructive/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-4xl">
        {/* ── Eyebrow Badge ── */}
        <motion.div
          className="mb-6 flex justify-center"
          variants={fadeUpVariants}
          {...motionProps}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/10 px-4 py-1.5 text-sm font-medium text-violet">
            <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
            The Hidden Cost
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

        {/* ── Content ── */}
        <motion.div
          ref={contentRef}
          className="mt-8 space-y-5 text-balance text-base leading-relaxed text-ink-soft sm:text-lg sm:leading-relaxed"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {content.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={itemVariants}
              className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-destructive/40"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        {/* ── Stats Grid ── */}
        {stats && stats.length > 0 && (
          <motion.div
            className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                stat={stat}
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </motion.div>
        )}
      </div>
    </Section>
  );
}