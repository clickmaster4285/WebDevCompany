// components/services/FAQSection.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion, Variants } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { FAQ } from "@/data/services";
import { Section } from "@/components/ui/Section";

interface FAQSectionProps {
  faqs: FAQ[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
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

const reducedItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeItemVariants = shouldReduceMotion
    ? reducedItemVariants
    : itemVariants;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section background="gray" padding="lg">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          }
        >
          <span className="text-eyebrow inline-flex items-center gap-2 rounded-full border border-violet/20 bg-violet/10 px-4 py-1.5 text-violet-soft">
            <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
            Common Questions
          </span>
          <h2 className="text-display mt-5 text-3xl text-foreground md:text-4xl">
            Questions Serious Buyers Ask
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Straight answers to the things that matter most when evaluating a
            solution.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                variants={activeItemVariants}
                custom={index}
              >
                <div
                  className={`group relative overflow-hidden rounded-2xl border bg-surface-1/80 transition-all duration-300 ${
                    isOpen
                      ? "border-violet/40 shadow-lg shadow-violet/5"
                      : "border-border/60 hover:border-violet/30"
                  }`}
                >
                  {/* Left accent indicator */}
                  <div
                    className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet via-violet/60 to-violet/20 transition-opacity duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                    }`}
                  />

                  <button
                    className={`flex w-full items-center gap-4 px-6 py-5 text-left transition-colors duration-300 md:px-7 md:py-6 ${
                      isOpen ? "bg-violet/[0.03]" : "hover:bg-muted/30"
                    }`}
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                  >
                    {/* Numbered badge */}
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-300 ${
                        isOpen
                          ? "bg-violet text-foreground"
                          : "bg-violet/10 text-violet"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-base font-semibold text-foreground md:text-lg">
                      {faq.question}
                    </span>

                    <motion.span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isOpen
                          ? "bg-violet text-foreground"
                          : "bg-violet/10 text-violet group-hover:bg-violet group-hover:text-foreground"
                      }`}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown className="h-5 w-5" aria-hidden="true" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
                        }
                      >
                        <div className="border-t border-border/50 px-6 pb-6 pt-4 md:px-7">
                          <p className="leading-relaxed text-muted-foreground">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}