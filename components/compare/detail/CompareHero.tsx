import Link from "next/link";
import type { Comparison } from "@/data/comparisons";

type CompareHeroProps = {
  comparison: Comparison;
};

export function CompareHero({ comparison }: CompareHeroProps) {
  const copy = comparison.page.completePageCopy;
  const hero = copy.aboveTheFold;

  const titleParts = comparison.title.split(" vs ");

  const leftOption = titleParts[0] || comparison.title;
  const rightOption = titleParts[1] || "Alternative";

  return (
    <section className="relative overflow-hidden bg-[#182332] px-6 pb-20 pt-36 text-white">
      <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-violet/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/80 transition hover:bg-white/15 hover:text-white"
          >
            ← Compare
          </Link>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.28em] text-violet">
            {comparison.level || comparison.category}
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
            {hero.headline}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-violet px-6 py-3 text-sm font-black text-white shadow-xl shadow-violet/20 transition hover:-translate-y-0.5 hover:bg-violet/90"
            >
              {hero.primaryCTA}
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              {hero.secondaryCTA}
            </Link>
          </div>

          <p className="mt-7 max-w-3xl text-sm font-medium leading-6 text-white/55">
            {hero.credibilityBar}
          </p>
        </div>

        <div className="relative">
          <div className="rounded-[2.2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <div className="rounded-[1.7rem] bg-white p-6 text-slate-950">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-violet/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-violet">
                  Decision Guide
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-2xl">
                  {comparison.icon || "⚖️"}
                </span>
              </div>

              <div className="mt-10 grid gap-4">
                <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                    Option A
                  </p>
                  <h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">
                    {leftOption}
                  </h2>
                </div>

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet text-sm font-black text-white shadow-xl shadow-violet/25">
                  VS
                </div>

                <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                    Option B
                  </p>
                  <h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">
                    {rightOption}
                  </h2>
                </div>
              </div>

              <div className="mt-6 rounded-[1.4rem] bg-slate-950 p-5 text-white">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-violet">
                  Decision Principle
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-white/75">
                  {comparison.page.uniquePositioning}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}