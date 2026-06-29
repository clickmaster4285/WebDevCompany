// app/case-studies/page.tsx
"use client";

import { useState, useMemo, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { TemplateCTA } from "@/components/ui/TemplateCta";
import { caseStudyPageHeader } from "@/data/page-config";
import { caseStudies } from "@/data/case-studies";
import { Search, SlidersHorizontal, Circle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// Elegant Shape Component (matching hero)
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export default function CaseStudiesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Logic: Filter data based on search input
  const filteredStudies = useMemo(() => {
    return caseStudies.filter((study) => {
      const searchLower = searchQuery.toLowerCase();
      return (
        study.title.toLowerCase().includes(searchLower) ||
        study.category.toLowerCase().includes(searchLower) ||
        study.techStack?.some((tech) =>
          tech.toLowerCase().includes(searchLower),
        )
      );
    });
  }, [searchQuery]);

  // Logic: Pagination calculations
  const totalPages = Math.ceil(filteredStudies.length / itemsPerPage);
  const paginatedStudies = filteredStudies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Handle search input change
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="min-h-screen bg-[#030303] flex flex-col">
      {/* Hero Section with Geometric Background */}
      <section className="relative w-full overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-indigo-500/[0.15]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />

          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-rose-500/[0.15]"
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          />

          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient="from-violet-500/[0.15]"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          />

          <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            gradient="from-amber-500/[0.15]"
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          />

          <ElegantShape
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            gradient="from-cyan-500/[0.15]"
            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 md:mb-8"
            >
              <Circle className="h-2 w-2 fill-rose-500/80" />
              <span className="text-sm text-white/60 tracking-wide">
                {caseStudyPageHeader.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  {caseStudyPageHeader.title}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-2xl">
                {caseStudyPageHeader.subtitle}
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              custom={2.5}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-4 max-w-2xl"
            >
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search by title, tech, sector..."
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all text-white placeholder:text-white/40 backdrop-blur-sm"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>

              <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-white/60 hover:text-white">
                <SlidersHorizontal className="h-5 w-5" />
                <span className="hidden md:inline">Filters</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
      </section>

      {/* Results Section */}
      <section className="relative bg-[#030303] py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-white/40 text-sm">
              Showing {paginatedStudies.length} of {filteredStudies.length} case studies
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-white/40 hover:text-white text-sm transition-colors"
              >
                Clear search
              </button>
            )}
          </div>

          {/* Results Grid */}
          {paginatedStudies.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {paginatedStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  custom={index}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <CaseStudyCard
                    key={study.id}
                    slug={study.slug || study.id}
                    icon={study.icon}
                    category={study.category}
                    location={study.location}
                    title={study.title}
                    description={study.description}
                    techStack={study.techStack}
                    imageUrl={study.imageUrl}
                    // InflectedCard props for dark theme
                    parentBackgroundColor="#0A0A0A"
                    titleColor="#FFFFFF"
                    descriptionColor="#A1A1AA"
                    buttonBackgroundColor="#4F46E5"
                    buttonBackgroundHoverColor="#6366F1"
                    imageHoverScale={1.08}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-24"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-4">
                <Sparkles className="h-4 w-4 text-white/40" />
                <span className="text-sm text-white/40">No results found</span>
              </div>
              <h3 className="text-xl font-semibold text-white/80">No results found</h3>
              <p className="text-white/40 mt-2">Try adjusting your search terms.</p>
            </motion.div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              {(() => {
                const delta = 2;
                const range: (number | string)[] = [];
                for (let i = 1; i <= totalPages; i++) {
                  if (
                    i === 1 ||
                    i === totalPages ||
                    (i >= currentPage - delta && i <= currentPage + delta)
                  ) {
                    range.push(i);
                  } else if (range[range.length - 1] !== "...") {
                    range.push("...");
                  }
                }
                return range;
              })().map((page, index) => (
                <button
                  key={index}
                  onClick={() => typeof page === "number" && setCurrentPage(page)}
                  disabled={page === "..."}
                  className={cn(
                    "px-4 py-2 rounded-lg transition-colors",
                    page === currentPage
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-600/25"
                      : page === "..."
                        ? "cursor-default text-white/30"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {page}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className={cn(
                  "ml-2 transition-colors text-white/60 hover:text-white disabled:text-white/20 disabled:cursor-not-allowed"
                )}
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#030303]">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-20 lg:py-24 border-t border-white/5">
          <TemplateCTA
            heading="Ready to Be Our Next Success Story?"
            subtext="Let's discuss how our technical expertise can help your business achieve measurable growth."
            buttonText="Get in Touch"
          />
        </div>
      </section>
    </div>
  );
}
