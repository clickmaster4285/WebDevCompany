// components/case-study/CaseStudyHero.tsx
"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { CaseStudyBreadcrumb } from './CaseStudyBreadcrumb';
import { CaseStudyBadges } from './CaseStudyBadges';
import { CaseStudyMetaInfo } from './CaseStudyMetaInfo';

interface CaseStudyHeroProps {
  title: string;
  category: string;
  location: string;
  status?: string;
  contract?: string;
  readingTime: string;
  lastUpdated: string;
}

// Elegant Shape Component (from HeroGeometric)
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
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: "easeInOut",
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

export function CaseStudyHero({
  title,
  category,
  location,
  status,
  contract,
  readingTime,
  lastUpdated,
}: CaseStudyHeroProps) {
  // Fix: Use proper Framer Motion variants with correct easing type
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: "easeInOut",
      },
    }),
  };

  // Split title for gradient effect
  const titleParts = title.split(' ');

  return (
    <div className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-[#030303]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-rose-500/5 blur-3xl" />

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/15"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/15"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/15"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/15"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/15"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb - Left aligned */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-4"
          >
            <CaseStudyBreadcrumb title={title} />
          </motion.div>

          {/* Badges - Left aligned */}
          <motion.div
            custom={0.5}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <CaseStudyBadges category={category} status={status} contract={contract} />
          </motion.div>

          {/* Title with gradient effect */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-left">
              <span className="bg-clip-text text-transparent bg-linear-to-b from-white to-white/80">
                {titleParts.slice(0, Math.ceil(titleParts.length / 2)).join(' ')}
              </span>
              {titleParts.length > 1 && (
                <>
                  {' '}
                  <span
                    className={cn(
                      "bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-white/90 to-rose-300"
                    )}
                  >
                    {titleParts.slice(Math.ceil(titleParts.length / 2)).join(' ')}
                  </span>
                </>
              )}
            </h1>
          </motion.div>

          {/* Meta Info - Left aligned */}
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

          {/* Optional: Decorative indicator */}
          <motion.div
            custom={2.5}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-8 flex items-center gap-2 text-white/20 text-sm"
          >
            <Circle className="h-2 w-2 fill-rose-500/80" />
            <span className="tracking-wide">Case Study</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-0 bg-linear-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}