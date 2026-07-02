// components/location/HowWeServe.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

interface HowWeServeProps {
  city: string;
  region: string;
  primarySectors: string[];
  pricingRange: string;
}

const ServiceCard = ({ title, description, delay }: { title: string; description: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="glass rounded-2xl p-6 border border-white/5 hover:border-violet/20 transition-all hover:shadow-violet/10 hover:shadow-2xl group"
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-violet/10 group-hover:bg-violet/20 transition-colors flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-violet"></div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-ink mb-2">{title}</h4>
        <p className="text-ink-soft leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

export const HowWeServe: React.FC<HowWeServeProps> = ({
  city,
  region,
  primarySectors,
  pricingRange
}) => {
  const services = [
    {
      title: "Local-market understanding",
      description: `Understanding ${city}&apos;s market means we build the way ${city} companies actually grow.`
    },
    {
      title: "Sector depth",
      description: `We serve ${city}&apos;s dominant industries — ${primarySectors.join(', ')} — building to each sector's specific requirements rather than applying a generic template.`
    },
    {
      title: "Conversion focus",
      description: `Every build is engineered to convert ${city}-area buyers, not just to look good.`
    },
    {
      title: "Fair, transparent pricing",
      description: `${pricingRange} — we deliver senior, conversion-focused work at fair, transparent pricing, sized to your goal.`
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
        title={`How We Serve ${city} Businesses`}
        subtitle={`Bringing senior, conversion-focused web development to ${city} and ${region} with genuine fluency in the local market.`}
      />

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            delay={index * 0.1}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-8 text-ink-soft text-center text-lg leading-relaxed max-w-3xl mx-auto"
      >
        Whether your {city} business needs a custom marketing site, an e-commerce store, 
        a web application, or a SaaS product, we build it to convert, to fit your sector, 
        and to scale — and you own the entire build, with no lock-in.
      </motion.p>
    </motion.div>
  );
};