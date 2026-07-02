"use client";

import { useEffect, useState } from "react";
import { createSectionId } from "./createSectionId";

type TechnologyTableOfContentsProps = {
  sections: {
    heading: string;
  }[];
};

export function TechnologyTableOfContents({
  sections,
}: TechnologyTableOfContentsProps) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const ids = sections.map((section) => createSectionId(section.heading));

    const handleScroll = () => {
      let currentId = ids[0] || "";

      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 120) {
          currentId = id;
        }
      }

      setActiveId(currentId);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleClick = (heading: string) => {
    const id = createSectionId(heading);
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveId(id);
  };

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.045)]">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-violet">
          On this page
        </p>

        <div className="mt-5 grid gap-2">
          {sections.map((section, index) => {
            const id = createSectionId(section.heading);
            const isActive = activeId === id;

            return (
              <button
                key={`${section.heading}-${index}`}
                type="button"
                onClick={() => handleClick(section.heading)}
                className={`group flex w-full gap-3 rounded-xl px-3 py-2 text-left text-sm font-bold transition ${
                  isActive
                    ? "bg-violet text-white shadow-md shadow-violet/20"
                    : "text-slate-500 hover:bg-slate-100 hover:text-violet"
                }`}
              >
                <span
                  className={`font-mono text-xs ${
                    isActive ? "text-white/70" : "text-slate-300"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="line-clamp-2">{section.heading}</span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}