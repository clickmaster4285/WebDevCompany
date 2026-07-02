// components/location/FAQ.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  city: string;
}

const FAQAccordion: React.FC<{ item: FAQItem; index: number }> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="glass rounded-xl border border-white/5 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-medium text-ink">{item.question}</span>
        <span className={`text-violet transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-4 text-ink-soft leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ: React.FC<FAQProps> = ({ items, city }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <SectionHeader
        title={`Common Questions: Web Development in ${city}`}
        subtitle="Objection Handling + AEO"
      />

      <div className="space-y-4 mt-8">
        {items.map((item, index) => (
          <FAQAccordion key={index} item={item} index={index} />
        ))}
      </div>

      <div className="mt-6 text-center text-xs text-ink-mute">
        <span className="inline-block w-1 h-1 rounded-full bg-violet mr-2"></span>
        AEO Optimized • Schema Markup Ready
      </div>
    </motion.div>
  );
};

export const getDefaultFAQs = (
  city: string,
  region: string,
  primarySectors: string[],
  pricingRange: string
): FAQItem[] => {
  return [
    {
      question: `Do you work with ${city} businesses specifically?`,
      answer: `Yes — we serve ${city} and ${region} with senior, conversion-focused web development and genuine fluency in the local market's dominant sectors (${primarySectors[0]} and more). Whether we're working with you remotely or locally, we bring real understanding of ${region}'s economy and buyers, which generic out-of-market agencies lack.`
    },
    {
      question: `How much does web development cost in ${city}?`,
      answer: `${city}-area web development typically ranges ${pricingRange} depending on scope — from a custom marketing site at the lower end to an enterprise platform or SaaS product at the upper end. We give a fixed estimate tied to your defined scope after a short conversation, and we right-size to your goal rather than overselling.`
    },
    {
      question: `Why hire a partner who understands the ${city} market?`,
      answer: `Because ${region}'s economy has a distinct character. A partner fluent in this market builds work that fits your sector and converts your buyers, where a generic agency produces work that misses what matters here. Local-market understanding translates directly into better results.`
    },
    {
      question: `What industries do you serve in ${city}?`,
      answer: `We serve ${city}'s dominant sectors — ${primarySectors.join(', ')} — building to each industry's specific requirements rather than applying a generic template. Given ${region}'s strength in ${primarySectors[0]}, we bring particular depth there, but we serve the full range of local businesses with conversion-focused, sector-aware work.`
    },
    {
      question: "Do we own the website you build?",
      answer: `Completely — the code, design, content, and documentation are yours, with no lock-in, whether you're a ${city} business or anywhere in ${region}. Full ownership and control; you can host it anywhere and take it to any developer. We keep the relationship on results, not lock-in.`
    },
    {
      question: `Can you work with us remotely or do you meet in person?`,
      answer: `Both work — we serve ${city} and ${region} clients effectively whether remotely or with local meetings, depending on your preference. Modern web development is largely collaborative-online regardless of location, and what matters most is our genuine understanding of your ${region} market and sector, which we bring either way.`
    }
  ];
};