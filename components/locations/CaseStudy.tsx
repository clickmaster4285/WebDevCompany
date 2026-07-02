// components/location/CaseStudy.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

interface KPIResult {
  metric: string;
  result: string;
  importance: string;
}

interface CaseStudyProps {
  region: string;
  primarySectors: string[];
}

export const CaseStudy: React.FC<CaseStudyProps> = ({ region, primarySectors }) => {
  const results: KPIResult[] = [
    {
      metric: "Conversion",
      result: "Up materially",
      importance: `More ${region} buyers converted`
    },
    {
      metric: "Sector fit",
      result: "Generic → tailored",
      importance: "Built to the industry's real needs"
    },
    {
      metric: "Local relevance",
      result: "Improved",
      importance: `Reflects the ${region} market`
    },
    {
      metric: "Ownership",
      result: "Full, no lock-in",
      importance: "Client controls the build"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <SectionHeader
        title={`Representative ${region} Outcome`}
        subtitle="Illustrative of typical engagements; representative, not a specific named client."
      />

      <div className="glass rounded-2xl border border-white/5 p-6 md:p-8 mt-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-violet uppercase tracking-wider mb-2">Challenge</h4>
              <p className="text-ink-soft leading-relaxed">
                A {region} business in one of the region&apos;s core sectors had a site that didn&apos;t 
                reflect its market or convert its buyers — built by a generalist who didn&apos;t 
                understand the local {primarySectors.slice(0, 2).join(' and ')} context or the 
                standards its sector required.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-violet uppercase tracking-wider mb-2">Solution</h4>
              <p className="text-ink-soft leading-relaxed">
                We rebuilt it with genuine sector fluency and conversion engineering, tuned 
                to {region} buyers and the requirements of its industry, with transparent 
                pricing and full ownership.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-violet uppercase tracking-wider mb-4">Results</h4>
            <div className="grid grid-cols-2 gap-4">
              {results.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-4 border border-white/5 text-center"
                >
                  <div className="text-xl font-bold text-violet">{item.result}</div>
                  <div className="text-sm font-medium text-ink mt-1">{item.metric}</div>
                  <div className="text-xs text-ink-mute mt-1">{item.importance}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};