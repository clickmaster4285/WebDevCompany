import { CompareTable } from "./CompareTable";
import { createCompareSectionId } from "./createCompareSectionId";

type CompareSectionRendererProps = {
  section: any;
  index: number;
};

export function CompareSectionRenderer({
  section,
  index,
}: CompareSectionRendererProps) {
  return (
    <section
      id={createCompareSectionId(section.heading)}
      className="scroll-mt-24 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_14px_45px_rgba(15,23,42,0.045)] md:p-8"
    >
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

      <CompareTable table={section.table} />

      {section.steps && (
        <div className="mt-8">
          <div className="relative grid gap-4">
            {section.steps.map((step: string, stepIndex: number) => (
              <div
                key={step}
                className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5 md:grid md:grid-cols-[70px_1fr] md:gap-4"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet text-sm font-black text-white md:mb-0">
                  {stepIndex + 1}
                </div>

                <p className="text-sm font-bold leading-7 text-slate-700">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {(section.challenge || section.solution || section.results) && (
        <div className="mt-8">
          {(section.challenge || section.solution) && (
            <div className="grid gap-5 md:grid-cols-2">
              {section.challenge && (
                <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-red-500">
                    Challenge
                  </p>

                  <p className="mt-3 text-sm font-semibold leading-7 text-slate-700">
                    {section.challenge}
                  </p>
                </div>
              )}

              {section.solution && (
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">
                    Solution
                  </p>

                  <p className="mt-3 text-sm font-semibold leading-7 text-slate-700">
                    {section.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          <CompareTable
            title="Results"
            table={section.results}
          />
        </div>
      )}

      {section.faqs && (
        <div className="mt-8 grid gap-4">
          {section.faqs.map((faq: any) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <summary className="cursor-pointer list-none text-base font-black text-slate-950">
                {faq.question}
              </summary>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      )}

      {section.primaryCTA && (
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="rounded-full bg-violet px-6 py-3 text-sm font-black text-white shadow-lg shadow-violet/20 transition hover:bg-violet/90"
          >
            {section.primaryCTA}
          </a>

          {section.secondaryCTA && (
            <a
              href="/contact"
              className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-black text-slate-700 transition hover:border-violet hover:text-violet"
            >
              {section.secondaryCTA}
            </a>
          )}
        </div>
      )}
    </section>
  );
}