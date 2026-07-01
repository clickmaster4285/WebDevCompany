"use client";

import { useState } from "react";
import { comparisons } from "@/data/comparisons";
import { CompareCard } from "./CompareCard";

const COMPARISONS_PER_PAGE = 9;

export function CompareGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(comparisons.length / COMPARISONS_PER_PAGE);
  const startIndex = (currentPage - 1) * COMPARISONS_PER_PAGE;
  const visibleComparisons = comparisons.slice(
    startIndex,
    startIndex + COMPARISONS_PER_PAGE
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-violet sm:text-sm">
            Comparison Library
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl md:text-5xl">
            Choose with clarity
          </h2>
        </div>

        <p className="text-sm text-slate-500">
          Showing <b>{visibleComparisons.length}</b> of{" "}
          <b>{comparisons.length}</b> comparisons
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleComparisons.map((comparison) => (
          <CompareCard key={comparison.id} comparison={comparison} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            const isActive = currentPage === page;

            return (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`h-10 min-w-10 rounded-full px-4 text-sm font-semibold transition ${
                  isActive
                    ? "bg-violet text-white shadow-lg shadow-violet/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-violet hover:text-violet"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}