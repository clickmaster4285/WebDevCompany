
"use client";
// components/ui/SectionHeader.tsx
import React from 'react';


interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle: string;
  className?: string; // Allow custom className overrides}
}

export function SectionHeader({ badge, title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={`section-hero ${className}`}>
      {badge && (
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
          <span className="text-violet">✨</span> {badge}
        </div>
      )}
      <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-lg text-lg text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}