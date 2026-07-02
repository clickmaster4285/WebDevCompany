// components/location/CredibilityBar.tsx
import React from 'react';

interface CredibilityBarProps {
  items: string[];
  className?: string;
}

export const CredibilityBar: React.FC<CredibilityBarProps> = ({ items, className = '' }) => {
  return (
    <div className={`flex flex-wrap items-center gap-3 py-4 px-6 glass rounded-xl border border-white/10 ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="text-sm font-medium text-ink-soft">{item}</span>
          {index < items.length - 1 && (
            <span className="text-slate-600">·</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};