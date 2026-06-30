import Link from "next/link";

type CompareCardProps = {
  comparison: {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    icon?: string;
    level?: string;
  };
};

export function CompareCard({ comparison }: CompareCardProps) {
  const titleParts = comparison.title.split(" vs ");
  const leftOption = titleParts[0] || comparison.title;
  const rightOption = titleParts[1] || "Alternative";

  return (
    <Link href={`/compare/${comparison.slug}`} className="group block h-full">
      <article className="relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-[0_14px_45px_rgba(15,23,42,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-violet/30 hover:shadow-[0_28px_80px_rgba(124,92,255,0.14)] sm:min-h-[350px] sm:rounded-[2rem] sm:p-5">
        <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-violet/10 blur-3xl transition group-hover:bg-violet/20" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-44 w-44 rounded-full bg-slate-950/5 blur-3xl" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-violet">
              {comparison.category}
            </p>

            <p className="mt-2 font-mono text-[11px] font-bold text-slate-300">
              / {String(comparison.id).padStart(2, "0")}
            </p>
          </div>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-lg text-white shadow-lg transition group-hover:scale-105 group-hover:bg-violet sm:h-11 sm:w-11 sm:text-xl">
            {comparison.icon || "⚖️"}
          </span>
        </div>

        <div className="relative mt-7 rounded-[1.3rem] border border-slate-200 bg-slate-50 p-3 sm:mt-8 sm:rounded-[1.5rem] sm:p-4">
          <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-[1fr_auto_1fr] min-[420px]:items-center">
            <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                Option A
              </p>

              <h3 className="mt-2 break-words text-lg font-black tracking-[-0.04em] text-slate-950 sm:text-xl">
                {leftOption}
              </h3>
            </div>

            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-violet text-xs font-black text-white shadow-lg shadow-violet/20">
              VS
            </div>

            <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                Option B
              </p>

              <h3 className="mt-2 break-words text-lg font-black tracking-[-0.04em] text-slate-950 sm:text-xl">
                {rightOption}
              </h3>
            </div>
          </div>
        </div>

        <div className="relative mt-6 sm:mt-7">
          <h2 className="text-[21px] font-black leading-[1.08] tracking-[-0.045em] text-slate-950 transition-colors group-hover:text-violet sm:text-[24px]">
            {comparison.title}
          </h2>

          <p className="mt-4 line-clamp-3 text-[14px] leading-6 text-slate-600">
            {comparison.excerpt}
          </p>
        </div>

        <div className="relative mt-auto pt-7">
          <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
            <span className="w-fit rounded-full bg-violet/10 px-3 py-1.5 text-xs font-black text-violet">
              {comparison.level || "Decision Guide"}
            </span>

            <span className="flex items-center gap-2 text-sm font-black text-slate-500 transition group-hover:text-violet">
              Compare
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 transition group-hover:border-violet group-hover:bg-violet group-hover:text-white">
                ↗
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}