import Link from "next/link";

type TechnologyCTAProps = {
  primaryCTA?: string;
  secondaryCTA?: string;
};

export function TechnologyCTA({
  primaryCTA,
  secondaryCTA,
}: TechnologyCTAProps) {
  if (!primaryCTA && !secondaryCTA) return null;

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {primaryCTA && (
        <Link
          href="/contact"
          className="rounded-full bg-violet px-6 py-3 text-sm font-black text-white shadow-lg shadow-violet/20 transition hover:bg-violet/90"
        >
          {primaryCTA}
        </Link>
      )}

      {secondaryCTA && (
        <Link
          href="/contact"
          className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-black text-slate-700 transition hover:border-violet hover:text-violet"
        >
          {secondaryCTA}
        </Link>
      )}
    </div>
  );
}