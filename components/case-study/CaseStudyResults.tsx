// components/case-study/CaseStudyResults.tsx
import { CheckCircle } from 'lucide-react';

interface CaseStudyResultsProps {
  results: string[];
  stepNumber?: string;
}

export function CaseStudyResults({ results, stepNumber = "03" }: CaseStudyResultsProps) {
  if (!results || results.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-violet">
          Step {stepNumber}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
          Results
        </span>
      </div>
      
      <div className="space-y-3">
        {results.map((result, index) => (
          <div 
            key={index} 
            className="flex items-start gap-3 bg-violet/5 rounded-lg p-4 border border-violet/10"
          >
            <CheckCircle className="h-5 w-5 text-violet mt-0.5 shrink-0" />
            <span className="text-ink-soft">{result}</span>
          </div>
        ))}
      </div>
    </section>
  );
}