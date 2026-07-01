// components/case-study/CaseStudyHero.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { CaseStudyBreadcrumb } from "./CaseStudyBreadcrumb";
import { CaseStudyBadges } from "./CaseStudyBadges";
import { CaseStudyMetaInfo } from "./CaseStudyMetaInfo";

interface CaseStudyHeroProps {
  title: string;
  category: string;
  location: string;
  status?: string;
  contract?: string;
  readingTime: string;
  lastUpdated: string;
}

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/8",
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
        rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96] as const,
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
            "bg-linear-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/15",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

export function CaseStudyHero({
  title,
  category,
  location,
  status,
  contract,
  readingTime,
  lastUpdated,
}: CaseStudyHeroProps) {
  const titleParts = title.split(" ");
  const splitIndex = Math.ceil(titleParts.length / 2);
  const firstTitlePart = titleParts.slice(0, splitIndex).join(" ");
  const secondTitlePart = titleParts.slice(splitIndex).join(" ");

  return (
    <div className="relative flex min-h-screen w-full items-center justify-start overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-rose-500/5 blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/15"
          className="left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/15"
          className="right-[-5%] top-[70%] md:right-[0%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/15"
          className="bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/15"
          className="right-[15%] top-[10%] md:right-[20%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/15"
          className="left-[20%] top-[5%] md:left-[25%] md:top-[10%]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-4"
          >
            <CaseStudyBreadcrumb title={title} />
          </motion.div>

          <motion.div
            custom={0.5}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <CaseStudyBadges
              category={category}
              status={status}
              contract={contract}
            />
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="mb-6 text-left text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-linear-to-b from-white to-white/80 bg-clip-text text-transparent">
                {firstTitlePart}
              </span>

              {secondTitlePart && (
                <>
                  {" "}
                  <span className="bg-linear-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
                    {secondTitlePart}
                  </span>
                </>
              )}
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <CaseStudyMetaInfo
              location={location}
              readingTime={readingTime}
              lastUpdated={lastUpdated}
            />
          </motion.div>

          <motion.div
            custom={2.5}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 flex items-center gap-2 text-sm text-white/20"
          >
            <Circle className="h-2 w-2 fill-rose-500/80" />
            <span className="tracking-wide">Case Study</span>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#030303] via-transparent to-[#030303]/80" />
    </div>
  );
}