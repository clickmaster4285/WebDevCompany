type ExpertVerdictProps = {
  content?: string;
};

export function ExpertVerdict({ content }: ExpertVerdictProps) {
  if (!content) return null;

  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-violet/20 bg-white shadow-[0_20px_70px_rgba(124,92,255,0.10)]">
        <div className="border-b border-slate-100 bg-violet/5 px-6 py-5 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-violet">
                Expert Verdict
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950 md:text-3xl">
                The honest recommendation
              </h2>
            </div>

            <span className="rounded-full bg-slate-950 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
              Decision Summary
            </span>
          </div>
        </div>

        <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-violet">
              Best answer
            </p>

            <p className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em]">
              It depends on your center of gravity.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/65">
              The right platform is the one that supports your primary business
              motion instead of fighting it.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-[15px] font-semibold leading-8 text-slate-700">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}