import Link from "next/link";

type CompareCTAProps = {
  title?: string;
  description?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
};

export function CompareCTA({
  title = "Still unsure which option fits?",
  description = "Share your goals and we’ll recommend the right platform honestly — even if that means telling you not to use the option you expected.",
  primaryCTA = "Get an honest recommendation",
  secondaryCTA = "Explore technologies",
}: CompareCTAProps) {
  return (
    <section className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-violet">
            Decision Support
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.04em] md:text-5xl">
            {title}
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-7 text-white/70">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link
            href="/contact"
            className="rounded-full bg-violet px-6 py-3 text-sm font-black text-white shadow-lg shadow-violet/20 transition hover:bg-violet/90"
          >
            {primaryCTA}
          </Link>

          <Link
            href="/technologies"
            className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white/15"
          >
            {secondaryCTA}
          </Link>
        </div>
      </div>
    </section>
  );
}