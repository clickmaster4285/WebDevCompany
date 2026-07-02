// components/location/FeaturedAnswerBlock.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FeaturedAnswerBlockProps {
  city: string;
  primarySectors: string[];
  pricingRange: string;
  region: string;
}

export const FeaturedAnswerBlock: React.FC<FeaturedAnswerBlockProps> = ({
  city,
  primarySectors,
  pricingRange,
  region
}) => {
  const content = `For ${city} businesses, the best web development partner combines senior engineering, conversion focus, and fluency in the local market's dominant sectors — ${primarySectors.slice(0, 3).join(', ')}. ${city}-area web development typically ranges ${pricingRange} depending on scope, from a custom marketing site to an enterprise platform or SaaS product. The right partner understands ${region}'s economy and buyers, builds to convert, and prices transparently — whether based locally or serving the market with deep local understanding.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative overflow-hidden glass rounded-2xl border border-violet/20 p-6 md:p-8 my-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet/5 via-transparent to-transparent"></div>
      <div className="relative flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet/20 flex items-center justify-center">
          <span className="text-violet text-xl">✦</span>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-violet uppercase tracking-wider">Featured Answer</span>
            <span className="text-xs text-ink-mute">·</span>
            <span className="text-xs text-ink-mute">GEO/AEO Optimized</span>
          </div>
          <p className="text-ink-soft leading-relaxed">{content}</p>
        </div>
      </div>
    </motion.div>
  );
};