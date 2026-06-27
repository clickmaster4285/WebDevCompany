


import { useEffect, useRef } from "react";
import { useGsap } from "@/lib/gsap";

const CAPABILITIES = [
  { 
    n: "01", 
    t: "Frontend Excellence", 
    d: "Modern React, Next.js, and TypeScript — building interfaces that are fast, accessible, and a joy to use." 
  },
  { 
    n: "02", 
    t: "Backend & APIs", 
    d: "Robust Node.js services, RESTful APIs, and database architecture that scales with your business." 
  },
  { 
    n: "03", 
    t: "Motion & Interaction", 
    d: "Cinematic animations and micro-interactions using GSAP and Framer Motion that elevate user experiences." 
  },
  { 
    n: "04", 
    t: "Performance First", 
    d: "Sub-second load times, Core Web Vitals optimization, and lighthouse scores that dominate." 
  },
  { 
    n: "05", 
    t: "Headless CMS", 
    d: "Sanity, Contentful, or Strapi — content management that empowers your team without limitations." 
  },
  { 
    n: "06", 
    t: "Full‑Stack Delivery", 
    d: "From database to deployment — end-to-end solutions that are secure, monitored, and maintainable." 
  },
];

export function ProcessSection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = useGsap();
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".process-step");
      const bigs = gsap.utils.toArray<HTMLElement>(".process-big");
      items.forEach((item, i) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 40%",
          onToggle: (st) => {
            if (st.isActive) {
              bigs.forEach((b, j) => {
                gsap.to(b, { opacity: j === i ? 1 : 0, y: j === i ? 0 : 12, duration: 0.6, ease: "expo.out" });
              });
              gsap.to(".process-progress", {
                scaleY: (i + 1) / items.length,
                duration: 0.6,
                ease: "expo.out",
              });
            }
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="process" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="text-eyebrow mb-4">/ Capabilities</div>
        <h2 className="text-display max-w-3xl text-[clamp(2rem,5vw,4rem)] text-ink">
          Web development <span className="text-violet-soft">expertise</span> that delivers.
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-[1fr_1fr]">
          {/* Sticky right side number */}
          <div className="relative">
            <div className="sticky top-32 h-[70vh]">
              <div className="absolute left-0 top-0 h-full w-px bg-white/10">
                <div className="process-progress absolute inset-x-0 top-0 origin-top h-full bg-violet" style={{ transform: "scaleY(0.0001)" }} />
              </div>
              <div className="relative pl-10 h-full flex items-center">
                <div className="relative w-full">
                  {CAPABILITIES.map((s, i) => (
                    <div
                      key={s.n}
                      className="process-big absolute inset-0"
                      style={{ opacity: i === 0 ? 1 : 0 }}
                    >
                      <div className="text-eyebrow mb-3 text-violet-soft">Capability {s.n}</div>
                      <div className="text-display text-[clamp(5rem,14vw,12rem)] leading-none text-ink">
                        {s.n}
                      </div>
                      <div className="mt-4 text-display text-3xl text-ink md:text-5xl">{s.t}</div>
                      <p className="mt-6 max-w-md text-ink-soft">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right scroll list */}
          <div className="space-y-24 md:space-y-40">
            {CAPABILITIES.map((s) => (
              <div key={s.n} className="process-step border-t border-white/10 pt-8">
                <div className="flex items-baseline justify-between">
                  <div className="text-display text-4xl text-ink-soft">{s.n}</div>
                  <div className="text-xs uppercase tracking-widest text-ink-mute">Expertise</div>
                </div>
                <h3 className="text-display mt-6 text-3xl text-ink md:text-4xl">{s.t}</h3>
                <p className="mt-4 max-w-md text-ink-soft">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}