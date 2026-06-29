// components/case-study/CaseStudyCompliance.tsx
interface CaseStudyComplianceProps {
  standards: string[];
}

export function CaseStudyCompliance({ standards }: CaseStudyComplianceProps) {
  if (!standards || standards.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
        Compliance Standards
      </h2>
      <div className="flex flex-wrap gap-2">
        {standards.map((standard) => (
          <span
            key={standard}
            className="px-3 py-1.5 text-sm bg-violet/10 text-violet rounded-full border border-violet/20"
          >
            {standard}
          </span>
        ))}
      </div>
    </section>
  );
}