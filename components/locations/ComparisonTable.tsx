// components/location/ComparisonTable.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

interface ComparisonOption {
  option: string;
  strengths: string;
  weaknesses: string;
  position: string;
}

interface ComparisonTableProps {
  options: ComparisonOption[];
  city: string;
  region: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ options, city, region }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <SectionHeader
        title={`Why ${city} Businesses Choose Us`}
        subtitle={`The ${city} market offers several partner types. Here's the honest comparison.`}
      />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        {options.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group relative glass rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-300 hover:shadow-lg"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-white/5 bg-white/[0.02]">
              <h3 className="text-base font-semibold text-ink">
                {item.option}
              </h3>
            </div>

            {/* Strengths / Weaknesses */}
            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-green-500" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-mute font-medium mb-1">
                    Where It Works
                  </p>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {item.strengths}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5">
                  <X className="w-3.5 h-3.5 text-red-400" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink-mute font-medium mb-1">
                    Where It Falls Short
                  </p>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    {item.weaknesses}
                  </p>
                </div>
              </div>
            </div>

            {/* Our Position - highlighted callout */}
            <div className="mx-6 mb-6 px-4 py-3.5 rounded-xl bg-violet/10 border border-violet/20 group-hover:bg-violet/[0.15] group-hover:border-violet/30 transition-all duration-300">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-violet" />
                <p className="text-xs uppercase tracking-wider text-violet font-semibold">
                  Our Position
                </p>
              </div>
              <p className="text-sm font-medium text-ink leading-relaxed">
                {item.position}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const getDefaultComparisonOptions = (city: string, region: string, primarySector: string): ComparisonOption[] => {
  return [
    {
      option: "Largest local firms",
      strengths: "Brand cover, scale",
      weaknesses: "Cost; often junior delivery",
      position: "Senior delivery at better value"
    },
    {
      option: "Local generalist agency",
      strengths: "General local work",
      weaknesses: `${primarySector} sector depth`,
      position: "Sector-fluent and conversion-focused"
    },
    {
      option: "Freelancers",
      strengths: "Small budgets",
      weaknesses: "Scale, continuity, depth",
      position: "Team-grade capacity and reliability"
    },
    {
      option: "Out-of-market agency",
      strengths: "Possibly cheaper",
      weaknesses: `No ${city} market understanding`,
      position: `${region} fluency + senior delivery`
    }
  ];
};