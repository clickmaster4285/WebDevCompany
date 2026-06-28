// components/services/OutcomeSection.tsx

"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import {
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Target,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { OutcomeMetric } from "@/lib/data/services";
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
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
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

const metricVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
      delay: i * 0.1,
    },
  }),
};

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
   ───────────────────────────────────────────── */

function ChallengeSolutionCard({
  type,
  content,
  shouldReduceMotion,
}: {
  type: "challenge" | "solution";
  content: string;
  shouldReduceMotion: boolean | null;
}) {
  const isChallenge = type === "challenge";
  const accentColor = isChallenge ? "destructive" : "violet";
  const Icon = isChallenge ? AlertTriangle : Lightbulb;
  const title = isChallenge ? "Challenge" : "Solution";

  return (
    <motion.div variants={itemVariants} className="relative">
      <Card
        className={`group relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-surface-1/60 p-6 shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:border-${accentColor}/25 hover:bg-surface-1/80 hover:shadow-2xl sm:p-8`}
      >
        {/* Top accent line */}
        <div
          className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-${accentColor}/60 to-transparent`}
        />

        {/* Ambient glow on hover */}
        <div
          className={`pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-${accentColor}/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Header */}
        <div className="mb-5 flex items-center gap-4 sm:mb-6">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl bg-${accentColor}/10 text-${accentColor} ring-1 ring-${accentColor}/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-${accentColor} group-hover:text-white group-hover:shadow-lg group-hover:shadow-${accentColor}/20 group-hover:ring-${accentColor}/40`}
          >
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            {title}
          </CardTitle>
        </div>

        {/* Content */}
        <CardContent className="p-0">
          <p className="text-balance text-[15px] leading-relaxed text-ink-soft/80 sm:text-base sm:leading-relaxed">
            {content}
          </p>
        </CardContent>

        {/* Bottom accent indicator */}
        <div
          className={`mt-6 flex items-center gap-2 text-sm font-medium text-${accentColor}/0 transition-all duration-500 group-hover:text-${accentColor}/80 sm:mt-8`}
        >
          <span
            className={`h-px w-0 bg-${accentColor}/40 transition-all duration-500 group-hover:w-6`}
          />
          <span className="flex items-center gap-1">
            {isChallenge ? "The problem" : "Our approach"}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Card>
    </motion.div>
  );
}

function MetricCard({
  metric,
  index,
  shouldReduceMotion,
}: {
  metric: OutcomeMetric;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      variants={metricVariants}
      custom={index}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -6,
              scale: 1.02,
              transition: { type: "spring", stiffness: 400, damping: 17 },
            }
      }
      className="group relative"
    >
      <Card className="relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-surface-1/60 p-6 shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:border-violet/25 hover:bg-surface-1/80 hover:shadow-2xl hover:shadow-violet/10 sm:p-7">
        {/* Top gradient line */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-violet/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Corner glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet/10 text-violet ring-1 ring-violet/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-violet group-hover:text-white group-hover:ring-violet/40">
            <Target className="h-4 w-4" />
          </div>
          <span className="text-xs font-mono font-medium text-ink-mute">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Metric value */}
        <div className="mt-2">
          <p className="text-sm font-medium text-ink-mute">{metric.kpi}</p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-violet sm:text-3xl">
            {metric.result}
          </p>
        </div>

        {/* Description */}
        <div className="mt-4 border-t border-white/[0.04] pt-4">
          <p className="text-sm leading-relaxed text-ink-soft/70">
            {metric.whyItMatters}
          </p>
        </div>

        {/* Progress indicator */}
        <div className="mt-5">
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/[0.04]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-violet/60 to-violet/30"
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.min((index + 1) * 25, 100)}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */

interface OutcomeSectionProps {
  challenge: string;
  solution: string;
  metrics: OutcomeMetric[];
}

export function OutcomeSection({
  challenge,
  solution,
  metrics,
}: OutcomeSectionProps) {
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
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-violet/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          className="mb-16 text-center sm:mb-20"
          variants={fadeUpVariants}
          {...motionProps}
        >
          <span className="text-eyebrow mb-4 inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/10 px-4 py-1.5 text-violet backdrop-blur-sm">
            <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
            Proven Results
          </span>
          <h2 className="text-display text-balance mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl">
            Representative Outcome
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-relaxed text-ink-soft sm:text-lg">
            Real numbers from a real engagement. Here is how we turned the
            challenge into measurable impact.
          </p>
        </motion.div>

        {/* ── Challenge & Solution Cards ── */}
        <div className="relative">
          <motion.div
            className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <ChallengeSolutionCard
              type="challenge"
              content={challenge}
              shouldReduceMotion={shouldReduceMotion}
            />
            <ChallengeSolutionCard
              type="solution"
              content={solution}
              shouldReduceMotion={shouldReduceMotion}
            />
          </motion.div>

          {/* Connector Arrow - Desktop Only */}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
            <motion.div
              initial={shouldReduceMotion ? false : { scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { type: "spring", stiffness: 300, damping: 20, delay: 0.4 }
              }
              className="flex h-14 w-14 items-center justify-center rounded-full border border-violet/20 bg-surface-2 text-violet shadow-xl shadow-violet/10 ring-4 ring-background backdrop-blur-xl"
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </div>
        </div>

        {/* ── Divider ── */}
        <motion.div
          className="mx-auto mt-16 flex max-w-3xl items-center gap-6 sm:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <span className="text-eyebrow text-violet/80">Key Metrics</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>

        {/* ── Metrics Grid ── */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              metric={metric}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}