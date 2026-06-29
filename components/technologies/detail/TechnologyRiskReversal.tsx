type TechnologyRiskReversalProps = {
  content?: string;
};

export function TechnologyRiskReversal({
  content,
}: TechnologyRiskReversalProps) {
  if (!content) return null;

  return (
    <section className="px-6 py-10">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-violet">
          Risk Reversal
        </p>

        <p className="mt-4 text-lg leading-8 text-white/75">{content}</p>
      </div>
    </section>
  );
}