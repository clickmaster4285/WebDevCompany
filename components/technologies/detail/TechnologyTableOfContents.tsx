type TechnologyTableOfContentsProps = {
  sections: {
    heading: string;
  }[];
};

function createSectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function TechnologyTableOfContents({
  sections,
}: TechnologyTableOfContentsProps) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.045)]">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-violet">
          On this page
        </p>

        <div className="mt-5 grid gap-2">
          {sections.map((section, index) => (
            <a
              key={`${section.heading}-${index}`}
              href={`#${createSectionId(section.heading)}`}
              className="group flex gap-3 rounded-xl px-3 py-2 text-sm font-bold text-slate-500 transition hover:bg-slate-100 hover:text-violet"
            >
              <span className="font-mono text-xs text-slate-300 group-hover:text-violet">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="line-clamp-2">{section.heading}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

export { createSectionId };