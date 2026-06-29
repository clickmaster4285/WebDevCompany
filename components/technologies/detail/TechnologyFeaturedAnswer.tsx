type TechnologyFeaturedAnswerProps = {
  content?: string;
};

export function TechnologyFeaturedAnswer({
  content,
}: TechnologyFeaturedAnswerProps) {
  if (!content) return null;

  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-violet">
          Featured Answer
        </p>

        <p className="mt-4 text-lg leading-8 text-slate-700">{content}</p>
      </div>
    </section>
  );
}