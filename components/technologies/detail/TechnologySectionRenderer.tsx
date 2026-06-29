import { TechnologyTable } from "./TechnologyTable";
import { TechnologyOutcome } from "./TechnologyOutcome";
import { TechnologyFAQ } from "./TechnologyFAQ";
import { TechnologyCTA } from "./TechnologyCTA";
import { createSectionId } from "./TechnologyTableOfContents";

type TechnologySectionRendererProps = {
  section: any;
  index: number;
};

export function TechnologySectionRenderer({
  section,
  index,
}: TechnologySectionRendererProps) {
  return (
<section
  id={createSectionId(section.heading)}
  className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_14px_45px_rgba(15,23,42,0.045)] md:p-8"
>      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs font-black text-slate-300">
            / {String(index + 1).padStart(2, "0")}
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] text-slate-950 md:text-4xl">
            {section.heading}
          </h2>

          {section.subheading && (
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-500">
              {section.subheading}
            </p>
          )}
        </div>
      </div>

      {section.content && (
        <div className="mt-7 space-y-5">
          {section.content.split("\n\n").map((paragraph: string) => (
            <p
              key={paragraph}
              className="text-[15px] leading-8 text-slate-600"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}

      <TechnologyTable table={section.table} />

      {section.steps && (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {section.steps.map((step: string, stepIndex: number) => (
            <div
              key={step}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet text-sm font-black text-white">
                {stepIndex + 1}
              </span>

              <p className="mt-4 text-sm font-bold leading-6 text-slate-700">
                {step}
              </p>
            </div>
          ))}
        </div>
      )}

      <TechnologyOutcome
        challenge={section.challenge}
        solution={section.solution}
        results={section.results}
      />

      <TechnologyFAQ faqs={section.faqs} />

      <TechnologyCTA
        primaryCTA={section.primaryCTA}
        secondaryCTA={section.secondaryCTA}
      />
    </section>
  );
}