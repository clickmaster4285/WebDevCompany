import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Quote,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { FAQPage } from "@/data/faq-pages";

type FAQDetailPageProps = {
  faq: FAQPage;
};

export function FAQDetailPage({ faq }: FAQDetailPageProps) {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f8f6ff] text-slate-900">
      <section className="relative overflow-hidden px-4 pb-10 pt-28 sm:px-6 sm:pb-14 sm:pt-32 lg:pb-20 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,92,255,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.12),transparent_35%)]" />

        <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[1.5rem] border border-violet/10 bg-white/85 p-4 shadow-[0_30px_100px_rgba(30,27,75,0.10)] backdrop-blur-xl sm:rounded-[2rem] sm:p-6 lg:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/faqs"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-violet/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-violet transition hover:bg-violet hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to FAQs
            </Link>

            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                placeholder="Search FAQs..."
                className="w-full rounded-full border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm font-semibold outline-none transition focus:border-violet"
              />
            </div>
          </div>

          <div className="mt-8 grid min-w-0 gap-8 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-start">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full bg-violet/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-violet sm:text-xs">
                <Sparkles className="h-4 w-4" />
                Direct Answer
              </span>

              <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">
                {faq.aboveTheFold.headline}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {faq.aboveTheFold.directAnswer}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {faq.aboveTheFold.credibilityBar.items.map((item) => (
                  <div
                    key={item}
                    className="flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet/10 text-violet">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>

                    <span className="min-w-0 text-sm font-black text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={faq.aboveTheFold.primaryCta.url}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-violet px-6 py-4 text-sm font-black text-white shadow-xl shadow-violet/20 transition hover:-translate-y-0.5 hover:bg-violet/90"
                >
                  {faq.aboveTheFold.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={faq.aboveTheFold.secondaryCta.url}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-black text-slate-700 transition hover:-translate-y-0.5 hover:border-violet hover:text-violet"
                >
                  {faq.aboveTheFold.secondaryCta.label}
                </Link>
              </div>
            </div>

            {/* Quick Snapshot Section - Mobile friendly view adjusted */}
            <div className="min-w-0">
              <div className="rounded-[1.5rem] border border-violet/10 bg-gradient-to-br from-white to-violet/5 p-4 shadow-[0_25px_90px_rgba(124,92,255,0.14)] sm:rounded-[2rem] sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-violet">
                      Quick Snapshot
                    </p>
                    <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950 sm:text-3xl">
                      At a glance
                    </h2>
                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet text-white">
                    <Clock className="h-5 w-5" />
                  </span>
                </div>

                {/* Stacks vertically on mobile nicely now */}
                <div className="mt-5 space-y-3">
                  {faq.quickReference.rows.slice(0, 5).map((row) => (
                    <div
                      key={row.point}
                      className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-4 xs:flex-row xs:items-center xs:justify-between xs:gap-4"
                    >
                      <span className="text-xs font-bold text-slate-500 sm:text-sm">
                        {row.point}
                      </span>
                      <span className="text-sm font-black text-slate-950 xs:text-right">
                        {row.detail}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
                  <div className="flex gap-3">
                    <Quote className="h-6 w-6 shrink-0 text-violet" />
                    <p className="text-sm font-semibold leading-7 text-white/75">
                      {faq.riskReversal.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-8 rounded-[1.5rem] border border-violet/20 bg-violet/5 p-5 sm:rounded-[2rem] sm:p-7 lg:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-violet">
                  Featured Answer
                </p>

                <p className="mt-4 max-w-4xl text-base font-semibold leading-8 text-slate-800 sm:text-lg">
                  {faq.featuredAnswerBlock.text}
                </p>
              </div>

              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-violet shadow-lg">
                <ShieldCheck className="h-6 w-6" />
              </span>
            </div>
          </section>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:py-12">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_330px]">
          <div className="grid min-w-0 gap-7">
            <ContentBlock
              title={faq.explainedSection.title}
              body={faq.explainedSection.body}
            />

            <ContentBlock
              title={faq.howThisAppliesToYou.title}
              body={faq.howThisAppliesToYou.body}
            />

            <DataTable
              title={faq.quickReference.title}
              subtitle={faq.quickReference.subtitle}
              rows={faq.quickReference.rows}
            />

            <DataTable
              title={faq.whyTrustOurAnswer.title}
              subtitle={faq.whyTrustOurAnswer.body}
              rows={faq.whyTrustOurAnswer.rows}
            />

            <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.05)] sm:rounded-[2rem] sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-violet">
                {faq.yourNextStep.title}
              </p>

              <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-slate-950 sm:text-3xl">
                {faq.yourNextStep.subtitle}
              </h2>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {faq.yourNextStep.steps.map((step) => (
                  <div
                    key={step.step}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet text-sm font-black text-white">
                      {step.step}
                    </span>

                    <h3 className="mt-4 text-lg font-black text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.05)] sm:rounded-[2rem] sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-violet">
                {faq.bottomLine.title}
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <InfoBox
                  title="Challenge"
                  text={faq.bottomLine.challenge}
                  tone="red"
                />

                <InfoBox
                  title="Solution"
                  text={faq.bottomLine.solution}
                  tone="green"
                />
              </div>

              <DataTable title="Key Takeaways" rows={faq.bottomLine.kpis} />
            </section>

            <ContentBlock
              title={faq.whyHonestAnswerMatters.title}
              body={faq.whyHonestAnswerMatters.body}
            />
          </div>

          <aside className="hidden space-y-6 lg:block lg:sticky lg:top-28 lg:self-start">
            <SideCard title="At a Glance">
              <div className="space-y-3">
                {faq.quickReference.rows.slice(0, 5).map((row) => (
                  <div
                    key={row.point}
                    className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm font-semibold text-slate-500">
                      {row.point}
                    </span>
                    <span className="text-right text-sm font-black text-slate-950">
                      {row.detail}
                    </span>
                  </div>
                ))}
              </div>
            </SideCard>

            <SideCard title="Related Questions">
              <div className="space-y-2">
                {faq.relatedQuestions.map((item) => (
                  <details
                    key={item.question}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <summary className="cursor-pointer list-none text-sm font-black text-slate-950">
                      {item.question}
                    </summary>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </SideCard>

            <SideCard title="Bottom Line">
              <p className="text-sm leading-7 text-slate-600">
                {faq.riskReversal.text}
              </p>
            </SideCard>
          </aside>
        </div>

        <section className="mt-10 rounded-[1.5rem] bg-slate-950 p-6 text-white shadow-2xl sm:rounded-[2rem] sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-violet">
            Specific Question
          </p>

          <h2 className="mt-4 text-2xl font-black tracking-[-0.04em] sm:text-3xl md:text-4xl">
            {faq.specificQuestionCta.title}
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
            {faq.specificQuestionCta.body}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href={faq.specificQuestionCta.primaryCta.url}
              className="inline-flex items-center justify-center rounded-full bg-violet px-6 py-3 text-sm font-black text-white shadow-lg shadow-violet/20 transition hover:bg-violet/90"
            >
              {faq.specificQuestionCta.primaryCta.label}
            </Link>

            <Link
              href={faq.specificQuestionCta.secondaryCta.url}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white/15"
            >
              {faq.specificQuestionCta.secondaryCta.label}
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}

function ContentBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="min-w-0 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.05)] sm:rounded-[2rem] sm:p-8">
      <h2 className="text-2xl font-black tracking-[-0.04em] text-slate-950 sm:text-3xl">
        {title}
      </h2>

      <div className="mt-5 space-y-5">
        {body.split("\n\n").map((paragraph) => (
          <p key={paragraph} className="text-[15px] leading-8 text-slate-600">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

function SideCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
      <h3 className="text-xl font-black tracking-[-0.03em] text-slate-950">
        {title}
      </h3>

      <div className="mt-5">{children}</div>
    </section>
  );
}

function InfoBox({
  title,
  text,
  tone,
}: {
  title: string;
  text: string;
  tone: "red" | "green";
}) {
  const styles =
    tone === "red"
      ? "border-red-100 bg-red-50 text-red-500"
      : "border-emerald-100 bg-emerald-50 text-emerald-600";

  return (
    <div className={`rounded-2xl border p-5 ${styles}`}>
      <p className="text-xs font-black uppercase tracking-[0.2em]">{title}</p>

      <p className="mt-3 text-sm font-semibold leading-7 text-slate-700">
        {text}
      </p>
    </div>
  );
}

{/* CHANGED COMPONENT: Now transforms dynamically into a clean Card stack view on mobile screens */}
function DataTable({
  title,
  subtitle,
  rows,
}: {
  title: string;
  subtitle?: string;
  rows: Record<string, string | number>[];
}) {
  if (!rows || rows.length === 0) return null;

  const headers = Object.keys(rows[0]);

  return (
    <section className="min-w-0 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.05)] sm:rounded-[2rem]">
      <div className="border-b border-slate-100 p-5 sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-violet">
          {title}
        </p>

        {subtitle && (
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      {/* 1. Mobile View: Hidden on SM and up screens. Renders key-value blocks as card lists */}
      <div className="block p-5 space-y-4 sm:hidden bg-slate-50/50">
        {rows.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="p-4 bg-white border border-slate-150 rounded-2xl shadow-sm space-y-3"
          >
            <div className="text-xs font-bold text-violet bg-violet/5 w-fit px-2.5 py-1 rounded-md">
              Entry #{rowIndex + 1}
            </div>
            {headers.map((header, valIndex) => (
              <div key={header} className="flex flex-col gap-1 border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                  {header.replace(/([A-Z])/g, " $1")}
                </span>
                <span className={`text-sm ${valIndex === 0 ? "font-black text-slate-950" : "font-medium text-slate-600"}`}>
                  {String(row[header])}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 2. Desktop View: Hidden on mobile, displays crisp native layout from tablets onwards */}
      <div className="hidden sm:block w-full overflow-x-auto">
        <table className="w-full min-w-[620px] border-collapse text-left">
          <thead className="bg-slate-950 text-white">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="whitespace-nowrap px-4 py-4 text-[11px] font-black uppercase tracking-[0.16em] sm:px-5 sm:text-xs"
                >
                  {header.replace(/([A-Z])/g, " $1")}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t border-slate-100">
                {headers.map((header, valueIndex) => (
                  <td
                    key={header}
                    className={`px-4 py-4 text-sm leading-6 sm:px-5 ${
                      valueIndex === 0
                        ? "font-black text-slate-950"
                        : "font-medium text-slate-600"
                    }`}
                  >
                    {String(row[header])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}