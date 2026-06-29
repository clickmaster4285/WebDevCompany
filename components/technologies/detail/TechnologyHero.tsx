import Link from "next/link";
import type { Technology } from "@/data/technologies";

type TechnologyHeroProps = {
  technology: Technology;
};

export function TechnologyHero({ technology }: TechnologyHeroProps) {
  const hero = technology.page.completePageCopy.aboveTheFold;

  return (
    <section className="relative overflow-hidden bg-[#182332] px-6 pb-20 pt-36 text-white">
      <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-violet/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Link
            href="/technologies"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white/80 transition hover:bg-white/15 hover:text-white"
          >
            ← Technologies
          </Link>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.28em] text-violet">
            {technology.category}
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
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
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-violet/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-violet">
                  {technology.level}
                </span>

                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-2xl font-black text-white">
                  {technology.icon}
                </span>
              </div>

              <h2 className="mt-10 text-3xl font-black tracking-[-0.05em]">
                {technology.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {technology.page.uniquePositioning}
              </p>

              <div className="mt-8 grid gap-3">
                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                    Search Intent
                  </p>

                  <p className="mt-2 text-sm font-bold text-slate-800">
                    {technology.page.searchIntent}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                    Buyer Persona
                  </p>

                  <p className="mt-2 text-sm font-bold text-slate-800">
                    {technology.page.buyerPersona}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}