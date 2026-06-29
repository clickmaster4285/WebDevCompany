// components/ui/TemplateCTA.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TemplateCTAProps {
  badge?: string;
  heading: string;
  subtext: string;
  buttonText: string;
  buttonHref?: string;
  className?: string;
  variant?: 'default' | 'compact' | 'minimal';
}

export function TemplateCTA({ 
  badge = "Start Today", 
  heading, 
  subtext, 
  buttonText = "Start Your Journey →",
  buttonHref = "#contact",
  className,
  variant = "default"
}: TemplateCTAProps) {
  return (
    <section 
      className={cn(
        "relative overflow-hidden rounded-[32px] bg-surface-1 border border-border px-6 py-16 text-center shadow-soft transition-all duration-300",
        variant === "compact" && "py-12 px-4",
        variant === "minimal" && "py-10 px-4 bg-transparent border-0 shadow-none",
        className
      )}
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-linear-to-br  from-violet/5 via-transparent to-rose-500/5 pointer-events-none" />
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-violet/5 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-rose-500/5 blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/50 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-ink-mute backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
          {badge}
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-3xl font-bold text-ink md:text-4xl lg:text-5xl">
          {heading}
        </h2>

        {/* Subtext */}
        <p className="mx-auto mt-4 max-w-lg text-sm text-ink-soft md:text-base">
          {subtext}
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <Link 
            href={buttonHref}
            className={cn(
              "inline-flex items-center gap-2 rounded-full bg-violet px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300",
              "hover:bg-violet/90 hover:scale-[1.02] hover:shadow-lg hover:shadow-violet/25",
              "focus:outline-none focus:ring-2 focus:ring-violet focus:ring-offset-2 focus:ring-offset-background",
              "violet-glow"
            )}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Optional: Trust indicator */}
        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-ink-mute">
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-violet" />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-violet" />
            Free consultation
          </span>
        </div>
      </div>
    </section>
  );
}