"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Web Design",
    tag: "UI/UX · Modern Web Experiences",
    year: "2025",
    color: "from-[#0F172A] via-[#1E293B] to-[#0F172A]",
    grid: "grid-cols-12 grid-rows-6",
    video: "/video/web-design.mp4",
  },
  {
    title: "Web Development",
    tag: "Frontend · Backend Systems",
    year: "2025",
    color: "from-[#0F172A] via-[#1E293B] to-[#0F172A]",
    grid: "grid-cols-8 grid-rows-8",
    video: "/video/web-dev.mp4",
  },
  {
    title: "AI Solutions",
    tag: "Artificial Intelligence · Product Systems",
    year: "2024",
    color: "from-[#0F172A] via-[#1E293B] to-[#0F172A]",
    grid: "grid-cols-10 grid-rows-6",
    video: "/video/ai.mp4",
  },
  {
    title: "Security Systems",
    tag: "Cybersecurity · SaaS Infrastructure",
    year: "2024",
    color: "from-[#0F172A] via-[#1E293B] to-[#0F172A]",
    grid: "grid-cols-12 grid-rows-8",
    video: "/video/security.mp4",
  },
];

function ProjectShot({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const maskWidth = useTransform(scrollYProgress, [0.1, 0.5], ["100%", "0%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen sticky top-0 flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ scale, opacity, y }}
        className={`relative w-[88vw] h-[78vh] rounded-2xl overflow-hidden bg-gradient-to-br ${project.color}`}
      >
        {/* VIDEO */}
        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* GRID */}
        <div
          className={`absolute inset-0 grid ${project.grid} gap-1 p-1 opacity-20`}
        >
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="bg-black/40 rounded" />
          ))}
        </div>

        {/* MASK */}
        <motion.div
          style={{ width: maskWidth }}
          className="absolute inset-y-0 right-0 bg-[#050816] z-10"
        />

        {/* NUMBER */}
        <div className="absolute bottom-6 right-8 text-white/10 text-[18vw] md:text-[12vw] leading-none z-20">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* TEXT */}
        <motion.div
          style={{ y: textY }}
          className="absolute left-8 md:left-16 bottom-12 md:bottom-20 max-w-2xl z-20"
        >
          <div className="text-white/70 mb-3">
            {project.tag} · {project.year}
          </div>
          <div className="text-white text-[10vw] md:text-[6vw] leading-none">
            {project.title}
          </div>
        </motion.div>

        {/* CASE STUDY LINK */}
        <div className="absolute top-6 right-8 text-white/60 z-20">
          ↗ case study
        </div>
      </motion.div>
    </section>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#050816]">
      <div className="px-6 md:px-12 pt-32 pb-16 max-w-7xl mx-auto">
        <div className="mb-4 text-sm text-white/60">/ Engineering</div>

        <h2 className="text-[clamp(2rem,5vw,4rem)] text-white">
          Modern <span className="text-violet-400">Engineering</span>
        </h2>
      </div>

      {projects.map((p, i) => (
        <ProjectShot key={p.title} project={p} index={i} />
      ))}

      <div className="h-[40vh]" />
    </section>
  );
}