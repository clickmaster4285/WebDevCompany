// components/case-study/CaseStudyRelated.tsx
import Link from 'next/link';
import { CaseStudyCard } from '@/components/ui/CaseStudyCard';
import { ArrowRight } from 'lucide-react';

interface RelatedStudy {
  id: string;
  slug: string;
  icon: string;
  category: string;
  location: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
}

interface CaseStudyRelatedProps {
  studies: RelatedStudy[];
}

export function CaseStudyRelated({ studies }: CaseStudyRelatedProps) {
  if (!studies || studies.length === 0) return null;

  return (
    <section className="pt-8 border-t border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
          Related Case Studies
        </h2>
        <Link 
          href="/case-studies" 
          className="inline-flex items-center gap-1 text-sm font-medium text-violet hover:text-violet/80 transition-colors duration-200"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {studies.map((study) => (
          <div key={study.id} className="h-full">
            <CaseStudyCard
              slug={study.slug || study.id}
              category={study.category}
              location={study.location}
              title={study.title}
              description={study.description}
              techStack={study.techStack}
              imageUrl={study.imageUrl}
              compact={true}
              techStackLimit={3}
              showReadMore={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
}