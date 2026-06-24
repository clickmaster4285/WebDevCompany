

import { useEffect, useRef } from "react";
import { useGsap } from "@/lib/gsap";
import { HeroBrowserScene } from "./HeroBrowserScene";

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    };

    const onLeave = () => {
      el.style.transform = "";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <button
      ref={ref}
      className="group inline-flex items-center gap-3 rounded-full bg-violet px-8 py-4 text-base font-medium text-white transition-[transform,box-shadow] duration-300 violet-glow hover:shadow-[0_40px_100px_-20px_var(--violet)]"
    >
      {children}
    </button>
  );
}

export function CtaSection() {
  const root = useRef<HTMLElement>(null);
  const scene = useRef<HTMLDivElement>(null);

  // Hook moved to the top level to fix the ESLint error
  const { gsap } = useGsap();

  useEffect(() => {
    if (!gsap || !root.current) return;

    const ctx = gsap.context(() => {
      // Scene animation
      gsap.fromTo(
        scene.current,
        { scale: 0.6, opacity: 0, y: 100 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          ease: "expo.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 80%",
            end: "center center",
            scrub: true,
          },
        },
      );

      // Text stagger animation
      gsap.from(".cta-line", {
        yPercent: 110,
        duration: 1,
        ease: "expo.out",
        stagger: 0.07,
        scrollTrigger: {
          trigger: root.current,
          start: "top 60%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, [gsap]);

  return (
    <section ref={root} id="contact" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,oklch(0.62_0.21_295/0.18),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-350 px-6 md:px-10">
        <div className="text-center">
          <div className="text-eyebrow mb-6">/ Begin</div>
          <h2 className="text-display mx-auto max-w-5xl text-[clamp(2.6rem,8vw,7.2rem)] text-ink">
            {"Let's build something".split(" ").map((w, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden align-top mr-[0.2em]"
              >
                <span className="cta-line inline-block">{w}</span>
              </span>
            ))}
            <br />
            <span className="inline-block overflow-hidden align-top">
              <span className="cta-line inline-block text-violet-soft italic">
                exceptional.
              </span>
            </span>
          </h2>
        </div>

        <div ref={scene} className="mx-auto mt-20 aspect-5/4 w-full max-w-215">
          <HeroBrowserScene />
        </div>
        {/* Now the linter will see that MagneticButton is being used */}
        <div className="flex justify-center mt-10">
          <MagneticButton>Send brief →</MagneticButton>
        </div>
      </div>
    </section>
  );
}
