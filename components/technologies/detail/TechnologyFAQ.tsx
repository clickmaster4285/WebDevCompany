type TechnologyFAQProps = {
  faqs?: {
    question: string;
    answer: string;
  }[];
};

export function TechnologyFAQ({ faqs }: TechnologyFAQProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-8 grid gap-4">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
          <summary className="cursor-pointer list-none text-base font-black text-slate-950">
            {faq.question}
          </summary>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}