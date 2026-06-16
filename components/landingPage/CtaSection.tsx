
"use client";
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
    const onLeave = () => { el.style.transform = ""; };
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
      className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-white transition-[transform,box-shadow] duration-300 violet-glow hover:shadow-[0_40px_100px_-20px_var(--violet)]"
    >
      {children}
    </button>
  );
}

export function CtaSection() {
  const root = useRef<HTMLElement>(null);
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = useGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(scene.current, { scale: 0.6, opacity: 0, y: 100 }, {
        scale: 1, opacity: 1, y: 0,
        ease: "expo.out",
        scrollTrigger: { trigger: root.current, start: "top 80%", end: "center center", scrub: true },
      });
      gsap.from(".cta-line", {
        yPercent: 110,
        duration: 1,
        ease: "expo.out",
        stagger: 0.07,
        scrollTrigger: { trigger: root.current, start: "top 60%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="contact" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,oklch(0.62_0.21_295/0.18),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="text-center">
          <div className="text-eyebrow mb-6">/ Begin</div>
          <h2 className="text-display mx-auto max-w-5xl text-[clamp(2.6rem,8vw,7.2rem)] text-ink">
            {"Let's build something".split(" ").map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-top mr-[0.2em]">
                <span className="cta-line inline-block">{w}</span>
              </span>
            ))}
            <br />
            <span className="inline-block overflow-hidden align-top">
              <span className="cta-line inline-block text-violet-soft italic">exceptional.</span>
            </span>
          </h2>
        </div>

        <div ref={scene} className="mx-auto mt-20 aspect-[5/4] w-full max-w-[860px]">
          <HeroBrowserScene />
        </div>

        {/* <div className="mx-auto mt-20 grid max-w-[1100px] grid-cols-1 gap-12 md:grid-cols-[1.2fr_1fr]">
          <form className="glass rounded-3xl p-8 md:p-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field label="Your name" placeholder="Jane Doe" />
              <Field label="Company" placeholder="Helix Inc." />
              <Field label="Email" placeholder="jane@helix.co" className="md:col-span-2" />
              <div className="md:col-span-2">
                <label className="mb-3 block text-xs uppercase tracking-widest text-ink-mute">
                  Project budget
                </label>
                <div className="flex flex-wrap gap-2">
                  {["50k–100k", "100k–250k", "250k+", "Let's talk"].map((b) => (
                    <button
                      type="button"
                      key={b}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-ink-soft transition-colors hover:border-violet hover:text-ink"
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="mb-3 block text-xs uppercase tracking-widest text-ink-mute">
                  Tell us about the project
                </label>
                <textarea
                  rows={4}
                  placeholder="A few sentences about the product, audience and timeline."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-ink placeholder:text-ink-mute focus:border-violet focus:outline-none"
                />
              </div>
              <div className="md:col-span-2 mt-2 flex justify-end">
                <MagneticButton>Send brief →</MagneticButton>
              </div>
            </div>
          </form>

          <div className="flex flex-col justify-between gap-10">
            <div>
              <div className="text-eyebrow mb-3">/ Studio</div>
              <p className="text-ink-soft">
                Available for two new partnerships this quarter. Most engagements begin with a one-week
                discovery sprint.
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="text-ink-mute">Email</div>
              <a href="mailto:marketing@clickmasters.pk" className="text-display text-2xl text-ink hover:text-violet-soft">
                marketing@clickmasters.pk
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <div className="text-ink-mute">Locations</div>
              <div className="text-ink">Berlin · Lisbon · Remote</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

function Field({ label, placeholder, className = "" }: { label: string; placeholder: string; className?: string }) {
  return (
    <div className={className}>
      <label className="mb-3 block text-xs uppercase tracking-widest text-ink-mute">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-ink placeholder:text-ink-mute focus:border-violet focus:outline-none"
      />
    </div>
  );
}