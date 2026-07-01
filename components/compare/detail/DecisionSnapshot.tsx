type DecisionSnapshotProps = {
  leftOption: string;
  rightOption: string;
};

export function DecisionSnapshot({
  leftOption,
  rightOption,
}: DecisionSnapshotProps) {
  const cards = [
    {
      label: "Best for content",
      winner: leftOption,
      description: "Ideal when publishing, SEO and content flexibility lead.",
      icon: "📰",
    },
    {
      label: "Best for commerce",
      winner: rightOption,
      description: "Ideal when selling, checkout and store operations lead.",
      icon: "🛒",
    },
    {
      label: "Lowest overhead",
      winner: rightOption,
      description: "Managed platform with simpler day-to-day operations.",
      icon: "⚡",
    },
    {
      label: "Maximum ownership",
      winner: leftOption,
      description: "Open-source control, flexible hosting and deeper ownership.",
      icon: "🔐",
    },
  ];

  return (
    <section className="px-6 pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-violet">
              Decision Snapshot
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950 md:text-4xl">
              Quick winner by situation
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            Use this as a fast decision filter before reading the full matrix.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.label}
              className="group rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.045)] transition hover:-translate-y-1 hover:border-violet/25 hover:shadow-[0_24px_70px_rgba(124,92,255,0.10)]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                  {card.icon}
                </span>

                <span className="rounded-full bg-violet/10 px-3 py-1 text-xs font-black text-violet">
                  Winner
                </span>
              </div>

              <p className="mt-6 text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                {card.label}
              </p>

              <h3 className="mt-2 text-3xl font-black tracking-[-0.05em] text-slate-950">
                {card.winner}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}