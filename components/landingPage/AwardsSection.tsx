"use client";

const AWARDS = [
  { y: "2025", n: "Awwwards", d: "Site of the Day · 4×" },
  { y: "2024", n: "FWA", d: "Of the Day · 2×" },
  { y: "2024", n: "CSS Design Awards", d: "Best Innovation" },
  { y: "2024", n: "Webby Honoree", d: "Visual Design" },
  { y: "2023", n: "Communication Arts", d: "Interactive Annual" },
  { y: "2023", n: "The One Show", d: "Merit · UX" },
  { y: "2023", n: "Lovie Awards", d: "Gold · Craft" },
  { y: "2022", n: "ADC Awards", d: "Silver Cube" },
];

export function AwardsSection() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-eyebrow mb-4">/ Recognition</div>
            <h2 className="text-display text-[clamp(2rem,5vw,4rem)] text-ink max-w-2xl">
              A wall worth <span className="text-violet-soft">scrolling.</span>
            </h2>
          </div>
          <div className="text-sm text-ink-mute">Industry awards · Featured publications</div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {AWARDS.map((a) => (
            <div
              key={a.n + a.y + a.d}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-white/5 to-transparent p-6 transition-all duration-500 hover:-translate-y-1 hover:border-violet/40"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-ink-mute">{a.y}</div>
                <div className="mt-6 text-display text-2xl text-ink">{a.n}</div>
                <div className="mt-2 text-sm text-ink-soft">{a.d}</div>
                <div className="mt-8 inline-flex items-center gap-2 text-xs text-violet-soft">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-ink-mute">
          <span>Featured in</span>
          {["Sidebar", "Codrops", "CSS Winner", "Httpster", "Muz.li", "Hover States"].map((p) => (
            <span key={p} className="opacity-70">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}