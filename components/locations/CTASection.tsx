// components/location/CTASection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  city: string;
  primaryCTA: string;
  secondaryCTA: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  city,
  primaryCTA,
  secondaryCTA
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet/20 via-violet/5 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="glass rounded-3xl border border-white/10 p-8 md:p-12 lg:p-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ink">
            Build a Site That Works for Your {city} Business
          </h2>

          <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl mx-auto">
            Tell us about your {city}-area business, your sector, and your goals, and we&apos;ll 
            show you where conversion is leaking, how we&apos;d approach it with real market 
            understanding, and what a build would cost — sized to your goal, priced transparently.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-violet hover:bg-violet/90 text-white font-semibold rounded-xl transition-all shadow-violet hover:shadow-2xl"
            >
              {primaryCTA}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-ink-soft font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all"
            >
              {secondaryCTA}
            </motion.button>
          </div>

          <p className="mt-6 text-sm text-ink-mute max-w-xl mx-auto">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
            No cost, no obligation. Risk-free consultation.
          </p>

          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-xs text-ink-mute">
              Risk reversal: builds are fixed-scope to defined deliverables with transparent 
              changes; optimization is 30-day rolling, retained on measured results.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};