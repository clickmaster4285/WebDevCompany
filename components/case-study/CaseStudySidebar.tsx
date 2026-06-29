// components/case-study/CaseStudySidebar.tsx
'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Section {
  id: string;
  label: string;
}

interface CaseStudySidebarProps {
  sections?: Section[];
}

export function CaseStudySidebar({ 
  sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'approach', label: 'Approach' },
    { id: 'results', label: 'Results' },
    { id: 'testimonial', label: 'Testimonial' },
  ] 
}: CaseStudySidebarProps) {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-surface-1 rounded-2xl shadow-soft border border-border p-6 lg:p-8 space-y-6">
      {/* CONTENTS Header */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
          Contents
        </h3>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-1">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                'w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200',
                'hover:bg-surface-2',
                isActive 
                  ? 'bg-violet/10 text-violet font-medium' 
                  : 'text-ink-soft hover:text-ink'
              )}
            >
              <span>{section.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Hire Us Button */}
      <div className="pt-4 border-t border-border">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-violet hover:bg-violet/90 text-white text-sm font-medium rounded-lg transition-colors duration-200 violet-glow"
        >
          Hire Us →
        </Link>
      </div>
    </div>
  );
}