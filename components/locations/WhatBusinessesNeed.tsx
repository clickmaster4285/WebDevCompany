// components/location/WhatBusinessesNeed.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

interface WhatBusinessesNeedProps {
  city: string;
  region: string;
  primarySectors: string[];
  buyerPersona: string;
}

export const WhatBusinessesNeed: React.FC<WhatBusinessesNeedProps> = ({
  city,
  region,
  primarySectors,
  buyerPersona
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <SectionHeader
        title={`What ${city} Businesses Need From a Web Development Partner`}
        subtitle={`Understanding ${region}&apos;s economy and what ${city} buyers actually require.`}
      />

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="space-y-4 text-ink-soft">
          <p className="text-lg leading-relaxed">
            {city}&apos;s economy is defined by <span className="text-ink font-semibold">{primarySectors.slice(0, 3).join(', ')}</span>. 
            For a web development partner, that means generic capability isn&apos;t enough — 
            {city} buyers need someone who understands the sectors that define this market 
            and the standards they demand.
          </p>
          <p className="leading-relaxed">
            {buyerPersona}. A partner who doesn&apos;t grasp this — who treats a {city} business 
            like any other client — produces work that misses what actually matters here, 
            costing conversions, credibility, or compliance depending on the sector.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 border border-white/5">
          <h4 className="text-sm font-semibold text-violet uppercase tracking-wider mb-4">
            Market Reality
          </h4>
          <p className="text-ink-soft leading-relaxed">
            The local market reality compounds it: {city} has a crowded field of agencies, 
            ranging from large shops to freelancers — quality and seniority vary widely. 
            The result is that many {city} businesses either overpay the largest firms for 
            junior delivery, or settle for generalists who don&apos;t understand their sector — 
            when what they need is senior, conversion-focused work from a partner fluent 
            in {region}&apos;s economy.
          </p>
        </div>
      </div>
    </motion.div>
  );
};