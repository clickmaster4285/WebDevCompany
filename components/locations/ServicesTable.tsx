// components/location/ServicesTable.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  ShoppingCart,
  LayoutGrid,
  Layers,
  Palette,
  Wrench,
  ArrowUpRight,
  LucideIcon,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';

interface ServiceItem {
  service: string;
  description: string;
  benefit: string;
  icon?: LucideIcon;
}

interface ServicesTableProps {
  services: ServiceItem[];
  city: string;
  region: string;
}

// Map service names to icons (fallback to Code2)
const iconMap: Record<string, LucideIcon> = {
  'Custom websites': Code2,
  'E-commerce & Shopify': ShoppingCart,
  'Web applications': LayoutGrid,
  'SaaS development': Layers,
  'Web design & UI/UX': Palette,
  'Maintenance & optimization': Wrench,
};

export const ServicesTable: React.FC<ServicesTableProps> = ({ services, city, region }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <SectionHeader
        title={`Web Development Services for ${city} Businesses`}
        subtitle={`Full-service web development, tuned to ${region}'s sectors and buyers.`}
      />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((item, index) => {
          const Icon = item.icon || iconMap[item.service] || Code2;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl border border-white/5 p-6 overflow-hidden hover:border-violet/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet/10"
            >
              {/* Decorative glow on hover */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative flex items-center justify-between mb-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-violet/10 border border-violet/20 group-hover:bg-violet/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-violet" />
                </span>
                <ArrowUpRight className="w-5 h-5 text-ink-mute opacity-0 group-hover:opacity-100 group-hover:text-violet transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
              </div>

              {/* Content */}
              <h3 className="relative text-lg font-semibold text-ink mb-2 group-hover:text-violet transition-colors">
                {item.service}
              </h3>

              <p className="relative text-sm text-ink-mute mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="relative pt-4 border-t border-white/5">
                <p className="text-xs uppercase tracking-wider text-ink-mute mb-1.5 font-medium">
                  For {city} Businesses
                </p>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {item.benefit}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export const getDefaultServices = (city: string, region: string): ServiceItem[] => {
  return [
    {
      service: "Custom websites",
      description: "Conversion-engineered custom sites",
      benefit: `Built to convert ${city}-area buyers in your sector`,
      icon: Code2,
    },
    {
      service: "E-commerce & Shopify",
      description: "Stores built to sell",
      benefit: `For ${region} consumer and retail brands`,
      icon: ShoppingCart,
    },
    {
      service: "Web applications",
      description: "Custom apps and portals",
      benefit: `For ${city} businesses needing real functionality`,
      icon: LayoutGrid,
    },
    {
      service: "SaaS development",
      description: "Scalable SaaS products",
      benefit: `For ${region}'s startups and software companies`,
      icon: Layers,
    },
    {
      service: "Web design & UI/UX",
      description: "Conversion- and brand-focused design",
      benefit: `Distinctive, on-brand experiences for ${city}`,
      icon: Palette,
    },
    {
      service: "Maintenance & optimization",
      description: "Ongoing care and CRO",
      benefit: `Keeping ${city} sites fast, secure, converting`,
      icon: Wrench,
    },
  ];
};