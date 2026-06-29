// components/case-study/CaseStudyTechStack.tsx
interface CaseStudyTechStackProps {
  techStack: string[];
}

export function CaseStudyTechStack({ techStack }: CaseStudyTechStackProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 text-sm bg-surface-2 text-ink-soft rounded-full border border-border"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}