"use client";

import { useEffect, useState } from "react";
import { createCompareSectionId } from "./createCompareSectionId";

type CompareTableOfContentsProps = {
  sections: {
    heading: string;
  }[];
};

export function CompareTableOfContents({
  sections,
}: CompareTableOfContentsProps) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const ids = sections.map((section) =>
      createCompareSectionId(section.heading)
    );

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
    const id = createCompareSectionId(heading);
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
      <div className="sticky top-16 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-[1rem] border border-slate-200 bg-white p-3 shadow-[0_10px_35px_rgba(15,23,42,0.04)]">
        <p className="px-2 text-[10px] font-black uppercase tracking-[0.22em] text-violet">
          On this page
        </p>

        <div className="mt-3 grid gap-1">
          {sections.map((section, index) => {
            const id = createCompareSectionId(section.heading);
            const isActive = activeId === id;

            return (
              <button
                key={`${section.heading}-${index}`}
                type="button"
                onClick={() => handleClick(section.heading)}
                className={`group flex w-full gap-2 rounded-lg px-2 py-1.5 text-left text-[11px] font-bold leading-5 transition ${
                  isActive
                    ? "bg-violet text-white shadow-md shadow-violet/20"
                    : "text-slate-500 hover:bg-slate-100 hover:text-violet"
                }`}
              >
                <span
                  className={`font-mono text-[10px] ${
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