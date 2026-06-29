


import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import AiVideo from "@/assets/ai.mp4";
import WebDesign from "@/assets/web-design.mp4";
import WebDev from "@/assets/web-dev.mp4";
import Security from "@/assets/security.mp4";

const projects = [
{
  title: "Web Design",
  tag: "UI/UX · Modern Web Experiences",
  year: "2025",
  color: "from-[#0F172A] via-[#1E293B] to-[#0F172A]",
  grid: "grid-cols-12 grid-rows-6",
  video: WebDesign,
},
  {
    title: "Web Development",
  tag: "Frontend · Backend Systems",
    year: "2025",
    color: "from-[#0F172A] via-[#1E293B] to-[#0F172A]",
    grid: "grid-cols-8 grid-rows-8",
    video: WebDev,
  },
  {
  title: "AI Solutions",
  tag: "Artificial Intelligence · Product Systems",
  year: "2024",
  color: "from-[#0F172A] via-[#1E293B] to-[#0F172A]",
  grid: "grid-cols-10 grid-rows-6",
  video: AiVideo,
},
 {
  title: "Security Systems",
  tag: "Cybersecurity · SaaS Infrastructure",
  year: "2024",
  color: "from-[#0F172A] via-[#1E293B] to-[#0F172A]",
  grid: "grid-cols-12 grid-rows-8",
  video: Security,
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

  // Mask starts at 100% (covering everything) then shrinks to 0% (fully revealed)
  const maskWidth = useTransform(scrollYProgress, [0.1, 0.5], ["100%", "0%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen top-0 flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ scale, opacity, y }}
        className={`relative w-[88vw] h-[78vh] rounded-2xl overflow-hidden bg-linear-to-br  ${project.color}`}
      >
        {/* ── VIDEO BACKGROUND ── */}
        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ── DARK TINT OVER VIDEO so text stays readable ── */}
        <div className="absolute inset-0 bg-black/50" />

        {/* ── GRID OVERLAY (visible before reveal, fades naturally under tint) ── */}
        <div
          className={`absolute inset-0 grid ${project.grid} gap-1 p-1 opacity-20`}
        >
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="bg-black/40 rounded" />
          ))}
        </div>

        {/* ── MASK: dark panel that slides LEFT to reveal video ── */}
        <motion.div
          style={{ width: maskWidth }}
          className="absolute inset-y-0 right-0 bg-[#050816] z-10"
        />

        {/* ── NUMBER WATERMARK ── */}
        <div className="absolute bottom-6 right-8 text-display text-white/10 text-[18vw] md:text-[12vw] leading-none z-20">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* ── TEXT CONTENT ── */}
        <motion.div
          style={{ y: textY }}
          className="absolute left-8 md:left-16 bottom-12 md:bottom-20 max-w-2xl z-20"
        >
          <div className="text-mono text-white/70 mb-3">
            {project.tag} · {project.year}
          </div>
          <div className="text-display text-white text-[10vw] md:text-[6vw] leading-none">
            {project.title}
          </div>
        </motion.div>

        {/* ── CASE STUDY LINK ── */}
        <div className="absolute top-6 right-8 text-mono text-white/60 z-20">
          ↗ case study
        </div>
      </motion.div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative bg-[#050816]">
      <div className="px-6 md:px-12 pt-32 pb-16 max-w-7xl mx-auto">
        <div className="text-eyebrow mb-4">/ Engineering</div>
        <h2 className="text-display max-w-3xl text-[clamp(2rem,5vw,4rem)] text-ink">
          Modern <span className="text-violet-soft">Engineering</span>
        </h2>

      </div>

      {projects.map((p, i) => (
        <ProjectShot key={p.title} project={p} index={i} />
      ))}
      <div className="h-[40vh]" />
    </section>
  );
}