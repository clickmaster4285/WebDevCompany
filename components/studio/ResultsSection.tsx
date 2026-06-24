


import { useEffect, useRef } from "react";
import { useGsap } from "@/lib/gsap";

const STATS = [
  { v: 120, suffix: "+", l: "Projects Delivered" },
  { v: 99, suffix: "%", l: "Avg. Lighthouse Score" },
  { v: 96, suffix: "%", l: "Client Satisfaction" },
  { v: 4.2, suffix: "×", l: "Avg. Revenue Growth", decimals: 1 },
];

function Counter({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const { gsap, ScrollTrigger } = useGsap();
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: value,
      duration: 2.2,
      ease: "expo.out",
      onUpdate: () => {
        el.textContent = obj.v.toFixed(decimals);
      },
      scrollTrigger: { trigger: el, start: "top 80%" },
    });
    return () => { tween.kill(); };
  }, [value, decimals]);
  return (
    <span className="text-display text-[clamp(3rem,7vw,6rem)] text-ink">
      <span ref={ref}>0</span>
      <span className="text-violet-soft">{suffix}</span>
    </span>
  );
}

function Ring({ percent }: { percent: number }) {
  const r = 54;
  const C = 2 * Math.PI * r;
  const ref = useRef<SVGCircleElement>(null);
  useEffect(() => {
    const { gsap, ScrollTrigger } = useGsap();
    if (!ref.current) return;
    gsap.fromTo(ref.current, { strokeDashoffset: C }, {
      strokeDashoffset: C - (C * percent) / 100,
      duration: 2,
      ease: "expo.out",
      scrollTrigger: { trigger: ref.current, start: "top 85%" },
    });
  }, [percent, C]);
  return (
    <svg viewBox="0 0 120 120" className="h-20 w-20">
      <circle cx="60" cy="60" r={r} fill="none" stroke="oklch(1 0 0 / 0.08)" strokeWidth="6" />
      <circle
        ref={ref}
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke="var(--violet)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={C}
        strokeDashoffset={C}
        transform="rotate(-90 60 60)"
      />
    </svg>
  );
}

export function ResultsSection() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="text-eyebrow mb-4">/ Results</div>
        <h2 className="text-display text-[clamp(2rem,5vw,4rem)] text-ink max-w-3xl">
          Numbers that <span className="text-violet-soft">compound.</span>
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.l} className="relative bg-surface-1 p-8 md:p-10">
              <div className="flex items-start justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-violet-soft">0{i + 1}</span>
                <Ring percent={[88, 99, 96, 84][i]} />
              </div>
              <div className="mt-8">
                <Counter value={s.v} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <div className="mt-4 text-sm text-ink-mute">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}