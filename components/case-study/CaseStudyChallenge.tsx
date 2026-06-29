// components/case-study/CaseStudyChallenge.tsx
interface CaseStudyChallengeProps {
  challenge: string;
  stepNumber: string;
}

export function CaseStudyChallenge({ challenge, stepNumber }: CaseStudyChallengeProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-violet">
          Step {stepNumber}
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
          Challenge
        </span>
      </div>
      <p className="text-ink-soft leading-relaxed text-base lg:text-lg">
        {challenge}
      </p>
    </section>
  );
}