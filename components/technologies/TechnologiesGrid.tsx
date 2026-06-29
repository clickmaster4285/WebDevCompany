"use client";

import { useState } from "react";
import { technologies } from "../../data/technologies";
import { TechnologyCard } from "./TechnologyCard";

const TECHNOLOGIES_PER_PAGE = 12;

export function TechnologiesGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(technologies.length / TECHNOLOGIES_PER_PAGE);
  const startIndex = (currentPage - 1) * TECHNOLOGIES_PER_PAGE;
  const visibleTechnologies = technologies.slice(
    startIndex,
    startIndex + TECHNOLOGIES_PER_PAGE
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet">
            Technology Library
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-950 md:text-4xl">
            Explore our technologies
          </h2>
        </div>

        <p className="text-sm text-slate-500">
          Showing <b>{visibleTechnologies.length}</b> of{" "}
          <b>{technologies.length}</b> technologies
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visibleTechnologies.map((technology) => (
          <TechnologyCard key={technology.id} technology={technology} />
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