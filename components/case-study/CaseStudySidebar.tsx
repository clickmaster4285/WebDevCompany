'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Section {
  id: string;
  label: string;
}

interface ProjectDetails {
  sector?: string;
  country?: string;
  status?: string;
  contract?: string;
  techStackCount?: string;
  readingTime?: string;
  ipOwnership?: string;
  lastUpdated?: string;
  writtenBy?: string;
  reviewedBy?: string;
}

interface CaseStudySidebarProps {
  sections?: Section[];
  projectDetails?: ProjectDetails;
}

export function CaseStudySidebar({
  projectDetails,
  sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'approach', label: 'Approach' },
    { id: 'results', label: 'Results' },
    { id: 'testimonial', label: 'Testimonial' },
  ],
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

    if (!element) return;

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-surface-1 rounded-2xl shadow-soft border border-border p-6 lg:p-8 space-y-6">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
            Contents
          </h3>
        </div>

        <nav className="space-y-1">
          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                type="button"
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

        <div className="pt-4 border-t border-border">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-violet hover:bg-violet/90 text-white text-sm font-medium rounded-lg transition-colors duration-200 violet-glow"
          >
            Hire Us →
          </Link>
        </div>
      </div>

      {projectDetails && (
        <div className="bg-surface-1 rounded-2xl shadow-soft border border-border p-6 space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
            Project Details
          </h3>

          <div className="space-y-3 text-sm">
            {projectDetails.sector && (
              <DetailRow label="Sector" value={projectDetails.sector} />
            )}

            {projectDetails.country && (
              <DetailRow label="Country" value={projectDetails.country} />
            )}

            {projectDetails.status && (
              <DetailRow label="Status" value={projectDetails.status} />
            )}

            {projectDetails.contract && (
              <DetailRow label="Contract" value={projectDetails.contract} />
            )}

            {projectDetails.readingTime && (
              <DetailRow label="Reading Time" value={projectDetails.readingTime} />
            )}

            {projectDetails.ipOwnership && (
              <DetailRow label="IP Ownership" value={projectDetails.ipOwnership} />
            )}

            {projectDetails.lastUpdated && (
              <DetailRow label="Last Updated" value={projectDetails.lastUpdated} />
            )}

            {projectDetails.reviewedBy && (
              <DetailRow label="Reviewed By" value={projectDetails.reviewedBy} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border/60 pb-2 last:border-b-0 last:pb-0">
      <span className="text-ink-mute">{label}</span>
      <span className="text-right font-medium text-ink">{value}</span>
    </div>
  );
}