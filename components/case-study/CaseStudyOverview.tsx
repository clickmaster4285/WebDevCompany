// components/case-study/CaseStudyOverview.tsx
interface CaseStudyOverviewProps {
  description: string;
}

export function CaseStudyOverview({ description }: CaseStudyOverviewProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
        Overview
      </h2>
      <p className="text-ink-soft leading-relaxed text-base lg:text-lg">
        {description}
      </p>
    </section>
  );
}