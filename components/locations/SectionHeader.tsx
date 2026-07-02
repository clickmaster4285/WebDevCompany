// components/shared/SectionHeader.tsx
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  light = false,
  className = '' 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg md:text-xl max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-slate-300' : 'text-ink-soft'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 bg-gradient-to-r from-violet to-violet-soft mt-4 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};