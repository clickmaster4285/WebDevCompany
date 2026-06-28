// components/services/RiskReversal.tsx

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, BadgeCheck, CheckCircle2 } from "lucide-react";

interface RiskReversalProps {
  text: string;
}

export function RiskReversal({ text }: RiskReversalProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative border-t border-border/60 bg-background py-16 md:py-20">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          }
        >
          <div className="glass group relative overflow-hidden rounded-2xl border border-violet/20 transition-all duration-300 hover:border-violet/40 hover:violet-glow">
            {/* Top accent bar */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet/60 via-violet/40 to-violet/20" />

            {/* Corner decorative checkmarks */}
            <div className="pointer-events-none absolute -bottom-6 -right-6 flex gap-2 text-violet/[0.04] transition-colors duration-500 group-hover:text-violet/[0.08]">
              <CheckCircle2 className="h-24 w-24" aria-hidden="true" />
              <CheckCircle2 className="h-24 w-24" aria-hidden="true" />
            </div>

            <div className="relative z-10 flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:gap-7 md:p-8">
              {/* Icon */}
              <motion.div
                className="relative flex h-16 w-16 shrink-0 items-center justify-center"
                whileHover={
                  shouldReduceMotion ? {} : { rotate: 360, scale: 1.08 }
                }
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Pulsing ring */}
                <div className="absolute inset-0 rounded-2xl bg-violet/15 animate-pulse" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-violet/15 text-violet ring-1 ring-violet/25 transition-all duration-300 group-hover:bg-violet group-hover:text-foreground group-hover:ring-violet/50">
                  <ShieldCheck className="h-8 w-8" aria-hidden="true" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    Risk Reversal
                  </h3>
                  <span className="text-eyebrow inline-flex items-center gap-1.5 rounded-full border border-violet/20 bg-violet/10 px-2.5 py-1 text-violet-soft">
                    <BadgeCheck className="h-3 w-3" aria-hidden="true" />
                    Our Guarantee
                  </span>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {text}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}