// components/case-study/CaseStudyApproach.tsx
interface ApproachItem {
  title: string;
  description: string;
}

interface CaseStudyApproachProps {
  approach: ApproachItem[];
  stepNumber?: string;
}

export function CaseStudyApproach({ approach, stepNumber = "02" }: CaseStudyApproachProps) {
  if (!approach || approach.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-violet">
          Step {stepNumber}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
          Our Approach
        </span>
      </div>
      
      <div className="space-y-6">
        {approach.map((item, index) => (
          <div 
            key={index} 
            className="border-l-4 border-violet/30 pl-4 hover:border-violet transition-colors duration-200"
          >
            <h3 className="text-base lg:text-lg font-semibold text-ink">
              {item.title}
            </h3>
            <p className="text-ink-soft mt-1 leading-relaxed text-sm lg:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}