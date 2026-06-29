// components/services/CTASection.tsx

"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ArrowRight, Clock, Shield, FileText } from "lucide-react";
import { PricingData } from "@/data/services";
import { Button } from "@/components/ui/Button";

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const trustBadges = [
  { icon: Shield, text: "No obligation" },
  { icon: Clock, text: "30-minute consultation" },
  { icon: FileText, text: "Clear scope & pricing" },
];

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
   ───────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
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

const cardRevealVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const reducedItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
   ───────────────────────────────────────────── */

function TrustBadge({
  badge,
  index,
  shouldReduceMotion,
}: {
  badge: (typeof trustBadges)[0];
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const Icon = badge.icon;

  return (
    <motion.div
      variants={shouldReduceMotion ? reducedItemVariants : itemVariants}
      className="group flex items-center gap-3 text-ink-mute transition-colors duration-300 hover:text-violet"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet/10 text-violet ring-1 ring-violet/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-violet group-hover:text-white group-hover:shadow-violet group-hover:ring-violet/50">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <span className="text-sm font-medium">{badge.text}</span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */

interface CTASectionProps {
  heading: string;
  primary: string;
  secondary: string;
  pricing: PricingData;
}

export function CTASection({
  heading,
  primary,
  secondary,
  pricing,
}: CTASectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-80px" },
      };

  return (
    <section
      id="consultation"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-1 to-background" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-violet/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-surface-1/80 p-8 shadow-2xl backdrop-blur-2xl sm:p-10 md:p-14 lg:p-16"
          variants={cardRevealVariants}
          {...motionProps}
        >
          {/* Top gradient line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-violet/50 to-transparent" />

          {/* Inner top glow */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-violet/[0.07] to-transparent" />

          {/* Background grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Badge */}
            <motion.div
              className="mb-6 flex justify-center"
              variants={fadeUpVariants}
              {...motionProps}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet backdrop-blur-sm">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                Limited Availability
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="text-display text-balance mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl"
              variants={fadeUpVariants}
              {...motionProps}
              transition={{ delay: 0.1 }}
            >
              {heading}
            </motion.h2>

            {/* Pricing info */}
            <motion.div
              className="mx-auto mt-6 max-w-2xl space-y-2"
              variants={fadeUpVariants}
              {...motionProps}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg text-ink-soft">
                Typical investment:{" "}
                <strong className="text-violet-soft font-semibold">
                  {pricing.range}
                </strong>
              </p>
              <p className="text-sm leading-relaxed text-ink-mute">
                {pricing.note}
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Primary Button */}
              <motion.div
                variants={shouldReduceMotion ? reducedItemVariants : itemVariants}
                whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  href="#consultation"
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-violet px-6 py-3 text-sm font-semibold text-white shadow-violet transition-all duration-300 hover:bg-violet-soft hover:shadow-lg hover:shadow-violet/40 focus:outline-none focus:ring-2 focus:ring-violet/50 focus:ring-offset-2 focus:ring-offset-background"
                >
                  {primary}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Button>
              </motion.div>

              {/* Secondary Button */}
              <motion.div
                variants={shouldReduceMotion ? reducedItemVariants : itemVariants}
                whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  href="#estimate"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-ink backdrop-blur-sm transition-all duration-300 hover:border-violet/30 hover:bg-violet/10 hover:text-violet focus:outline-none focus:ring-2 focus:ring-violet/50 focus:ring-offset-2 focus:ring-offset-background"
                >
                  {secondary}
                </Button>
              </motion.div>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="mx-auto mt-12 h-px w-full max-w-lg bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* Trust badges */}
            <motion.div
              className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-6 sm:gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {trustBadges.map((badge, index) => (
                <TrustBadge
                  key={index}
                  badge={badge}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}