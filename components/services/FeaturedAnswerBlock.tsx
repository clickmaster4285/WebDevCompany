// components/services/FeaturedAnswerBlock.tsx

"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Quote } from "lucide-react";

interface FeaturedAnswerBlockProps {
  question: string;
  answer: string;
}

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function FeaturedAnswerBlock({
  question,
  answer,
}: FeaturedAnswerBlockProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-surface-0 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="group relative rounded-2xl border border-border/60 bg-surface-1/50 p-8 shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-violet/30 hover:shadow-violet-glow md:p-12">
            <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-violet via-violet-soft to-violet opacity-80" />

            <motion.div
              className="absolute -left-4 -top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-violet-soft text-white shadow-violet-glow md:-left-6 md:-top-6 md:h-14 md:w-14"
              initial={shouldReduceMotion ? false : { scale: 0, rotate: -20 }}
              whileInView={shouldReduceMotion ? undefined : { scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.2,
              }}
            >
              <Quote className="h-5 w-5 md:h-6 md:w-6" />
            </motion.div>

            <div className="mt-2">
              <motion.h2
                className="text-balance text-2xl font-semibold tracking-tight text-ink md:text-3xl"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {question}
              </motion.h2>

              <motion.div
                className="mt-5 text-pretty text-base leading-relaxed text-ink-soft md:text-lg"
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                {answer}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}