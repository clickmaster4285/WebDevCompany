// components/location/BusinessCase.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

interface BusinessCaseProps {
  city: string;
  region: string;
  primarySector: string;
}

export const BusinessCase: React.FC<BusinessCaseProps> = ({ city, region, primarySector }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <SectionHeader
        title={`The Business Case for ${city} Businesses`}
        subtitle="Web development ROI comes from converting more traffic, fitting your sector's requirements, and scaling as you grow."
      />

      <div className="relative overflow-hidden glass rounded-2xl border border-white/5 p-6 md:p-8 mt-8">
        <div className="absolute inset-0 bg-gradient-to-r from-violet/5 via-transparent to-transparent"></div>
        <div className="relative space-y-4 text-ink-soft">
          <p className="text-lg leading-relaxed">
            For a {city} business, web development ROI comes from converting more of your 
            hard-won local and target-market traffic, fitting your sector&apos;s specific 
            requirements, and scaling as you grow.
          </p>
          <p className="leading-relaxed">
            A conversion-engineered site returns its cost by lifting conversion on existing 
            traffic; sector-fluent work avoids the cost of a partner who doesn&apos;t understand 
            {region}&apos;s {primarySector} reality; and fair, transparent pricing means you 
            invest in outcomes, not big-agency overhead.
          </p>
          <div className="pt-4 border-t border-white/5">
            <p className="font-medium text-ink">
              We frame every {city} engagement around the return — conversion lift, sector fit, 
              and scalability — sized to your goal and priced transparently.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};