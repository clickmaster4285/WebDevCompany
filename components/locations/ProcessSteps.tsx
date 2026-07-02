// components/location/ProcessSteps.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  city: string;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ steps, city }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <SectionHeader
        title={`How We Work With ${city} Clients`}
        subtitle="A transparent, low-risk process — same on every engagement."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 border border-white/5 hover:border-violet/20 transition-all hover:shadow-violet/10 hover:shadow-2xl group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-violet/5 rounded-full blur-2xl group-hover:bg-violet/10 transition-all"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-violet/10 group-hover:bg-violet/20 transition-colors text-violet font-bold text-sm">
                  {step.number}
                </span>
                <h4 className="font-semibold text-ink">{step.title}</h4>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const getDefaultProcessSteps = (city: string): ProcessStep[] => {
  return [
    {
      number: 1,
      title: "Discovery",
      description: `Your goals, sector, and ${city}-market context`
    },
    {
      number: 2,
      title: "Strategy",
      description: "What to build and why, governed by your goals"
    },
    {
      number: 3,
      title: "Architecture",
      description: "The structure, integrations, and approach"
    },
    {
      number: 4,
      title: "Design",
      description: "Conversion- and brand-led design for your audience"
    },
    {
      number: 5,
      title: "Development",
      description: "Senior build in increments, with working demos"
    },
    {
      number: 6,
      title: "QA",
      description: "Functional, performance, and security testing as a gate"
    },
    {
      number: 7,
      title: "Launch",
      description: "Controlled, monitored deployment — no traffic loss"
    },
    {
      number: 8,
      title: "Optimization",
      description: "Ongoing conversion and performance work"
    }
  ];
};