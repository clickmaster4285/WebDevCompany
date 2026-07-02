// components/location/AboveTheFold.tsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CredibilityBar } from './CredibilityBar';

interface AboveTheFoldProps {
  city: string;
  state: string;
  region: string;
  primarySectors: string[];
  credibilityBar: string[];
  primaryCTA: string;
  secondaryCTA: string;
}

export const AboveTheFold: React.FC<AboveTheFoldProps> = ({
  city,
  state,
  region,
  primarySectors,
  credibilityBar,
  primaryCTA,
  secondaryCTA
}) => {
  const title = `Web Development Company Serving ${city}, ${state}`;
  const description = `Senior-led web development for ${city} and ${region} businesses — conversion-engineered sites, stores, and applications built for the ${primarySectors.slice(0, 2).join(' and ')} sectors that drive this market. Enterprise-grade work, fair and transparent pricing, no big-agency overhead.`;

  return (
    <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Background - adjusted to not overlap navbar */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-transparent to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass border border-white/10">
            <span className="text-xs font-medium text-ink-mute uppercase tracking-wider">
              Serving {city} & {region}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-ink">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-ink-soft leading-relaxed">
            {description}
          </p>

          <div className="mt-8 max-w-4xl mx-auto">
            <CredibilityBar items={credibilityBar} />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
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

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-ink-mute">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Trusted by {city} businesses</span>
            <span className="text-slate-600">·</span>
            <span>{primarySectors.slice(0, 3).join(', ')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};