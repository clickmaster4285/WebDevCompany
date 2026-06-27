import Link from "next/link";

type ContentBlock =
  | { type: "featuredAnswer"; text: string }
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "checklist"; items: string[] }
  | { type: "table"; columns: string[]; rows: string[][] }
  | { type: "quote"; text: string; author?: string }
  | { type: "info"; title?: string; text: string }
  | { type: "warning"; title?: string; text: string }
  | { type: "success"; title?: string; text: string }
  | { type: "highlight"; title: string; text: string }
  | { type: "divider" }
  | { type: "cta"; title: string; description: string; buttonText: string; href: string };

type BlogContentRendererProps = {
  content: ContentBlock[];
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function BlogContentRenderer({ content }: BlogContentRendererProps) {
  return (
    <div className="space-y-10">
      {content.map((block, index) => {
   if (block.type === "featuredAnswer") {
  return (
    <section
      key={index}
      className="relative overflow-hidden rounded-[2.25rem] border border-violet/15 bg-white p-1 shadow-[0_30px_100px_rgba(15,23,42,0.08)]"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#ffffff_0%,#f5f3ff_45%,#eef2ff_100%)] p-8 md:p-10">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet/15 blur-2xl" />
        <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-slate-900/5 blur-2xl" />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet text-lg font-black text-white shadow-lg shadow-violet/25">
              AI
            </span>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-violet">
                Featured Answer
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Quick Answer
              </p>
            </div>
          </div>

          <p className="mt-7 text-xl font-semibold leading-9 tracking-[-0.01em] text-slate-850 md:text-2xl md:leading-10">
            {block.text}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["AI-citable", "Summary-first", "Decision-ready"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-violet/15 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

     if (block.type === "heading") {
  return (
    <div key={index} className="pt-12">
      <h2
        id={slugify(block.text)}
        className="relative inline-block scroll-mt-32 text-3xl font-black leading-tight tracking-[-0.03em] text-slate-950 md:text-5xl"
      >
        {block.text}

        <svg
          className="absolute -bottom-4 left-0 w-48 md:w-56"
          viewBox="0 0 240 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 16C40 10 78 7 116 8C155 9 192 11 230 15"
            stroke="#111827"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M18 20C58 14 108 13 170 15"
            stroke="#111827"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.35"
          />
        </svg>
      </h2>
    </div>
  );
}

if (block.type === "paragraph") {
  return (
    <div key={index} className="max-w-3xl">
      <p className="border-l-2 border-violet/30 pl-6 text-[19px] leading-[2] tracking-[-0.01em] text-slate-600">
        {block.text}
      </p>
    </div>
  );
}
        if (block.type === "list") {
          return (
            <ol key={index} className="space-y-4">
              {block.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white group-hover:bg-violet">
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>

                  <span className="text-lg leading-8 text-slate-600">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          );
        }

        if (block.type === "checklist") {
          return (
            <div key={index} className="grid gap-3">
              {block.items.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet text-sm font-bold text-white">
                    ✓
                  </span>
                  <p className="leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          );
        }

     if (block.type === "table") {
  return (
    <div key={index} className="space-y-4">
      {/* Mobile Card Table */}
      <div className="grid gap-4 md:hidden">
        {block.rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className="border-b border-slate-100 py-3 last:border-b-0"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {block.columns[cellIndex]}
                </p>

                <p
                  className={`mt-1 leading-7 ${
                    cellIndex === 0
                      ? "font-bold text-slate-950"
                      : "text-slate-600"
                  }`}
                >
                  {cell}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:block">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-950 text-white">
                {block.columns.map((column) => (
                  <th key={column} className="px-6 py-5 font-bold">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-t border-slate-100 transition hover:bg-slate-50"
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`px-6 py-5 leading-7 ${
                        cellIndex === 0
                          ? "font-bold text-slate-950"
                          : "text-slate-600"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="rounded-[2rem] border-l-4 border-violet bg-white p-8 shadow-sm"
            >
              <p className="text-2xl font-semibold leading-10 text-slate-950">
                “{block.text}”
              </p>

              {block.author && (
                <footer className="mt-4 text-sm font-semibold text-violet">
                  — {block.author}
                </footer>
              )}
            </blockquote>
          );
        }

        if (
          block.type === "info" ||
          block.type === "warning" ||
          block.type === "success"
        ) {
          const styles = {
            info: "border-blue-200 bg-blue-50 text-blue-950",
            warning: "border-amber-200 bg-amber-50 text-amber-950",
            success: "border-emerald-200 bg-emerald-50 text-emerald-950",
          };

          const labels = {
            info: "Note",
            warning: "Important",
            success: "Recommended",
          };

          return (
            <section
              key={index}
              className={`rounded-[1.5rem] border p-6 ${styles[block.type]}`}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em]">
                {block.title || labels[block.type]}
              </p>
              <p className="mt-3 leading-7">{block.text}</p>
            </section>
          );
        }

        if (block.type === "highlight") {
          return (
            <section
              key={index}
              className="rounded-[2rem] bg-slate-950 p-8 text-white"
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-soft">
                Highlight
              </p>

              <h3 className="mt-4 text-3xl font-black">{block.title}</h3>

              <p className="mt-4 leading-8 text-white/70">{block.text}</p>
            </section>
          );
        }

        if (block.type === "cta") {
          return (
            <section
              key={index}
              className="rounded-[2rem] bg-gradient-to-br from-violet to-slate-950 p-8 text-white shadow-xl"
            >
              <h3 className="text-3xl font-black">{block.title}</h3>

              <p className="mt-4 max-w-2xl leading-8 text-white/70">
                {block.description}
              </p>

              <Link
                href={block.href}
                className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950"
              >
                {block.buttonText}
              </Link>
            </section>
          );
        }

        if (block.type === "divider") {
          return <div key={index} className="h-px bg-slate-200" />;
        }

        return null;
      })}
    </div>
  );
}