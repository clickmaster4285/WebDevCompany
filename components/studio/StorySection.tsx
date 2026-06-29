


import Image from "next/image";
import { useEffect, useRef } from "react";
import { useGsap } from "@/lib/gsap";
import storyImg from "@/public/assets/story-workstation.jpg";

export function StorySection() {
  const root = useRef<HTMLElement>(null);
  const imgWrap = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = useGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgWrap.current,
        { clipPath: "inset(40% 20% 40% 20% round 24px)" },
        {
          clipPath: "inset(0% 0% 0% 0% round 24px)",
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            end: "center center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        img.current,
        { scale: 1.25 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      gsap.from(".story-line", {
        yPercent: 110,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: root.current, start: "top 60%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="story" className="relative mx-auto py-32 md:py-44 md:mx-auto">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="text-eyebrow mb-6">/ The studio</div>
            <h2 className="text-display text-[clamp(2.2rem,5vw,4.4rem)] text-ink">
              <span className="overflow-hidden inline-block"><span className="story-line inline-block">Craft as</span></span>{" "}
              <span className="overflow-hidden inline-block"><span className="story-line inline-block">a system.</span></span>
              <br />
              <span className="overflow-hidden inline-block"><span className="story-line inline-block text-ink-mute">Code as</span></span>{" "}
              <span className="overflow-hidden inline-block"><span className="story-line inline-block text-ink-mute">a material.</span></span>
            </h2>
            <p className="mt-6 md:mt-8 max-w-full md:max-w-md text-sm md:text-base text-ink-soft leading-relaxed">
              We're a senior team of designers and engineers obsessed with the
              details others overlook — the easing curve on a hover, the
              twelve-millisecond paint delay, the kerning of a single headline.
              We build digital products that compound business growth.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              {[
                ["Philosophy", "Design and engineering as one craft."],
                ["Detail", "Pixel-perfect, motion-aware, accessible."],
                ["Outcome", "Products that drive measurable growth."],
                ["Partnership", "Long-term collaboration, not handoffs."],
              ].map(([h, d]) => (
                <div key={h}>
                  <div className="text-xs uppercase tracking-widest text-violet-soft">{h}</div>
                  <div className="mt-2 text-sm text-ink-soft">{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div ref={imgWrap} className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
              <Image
                ref={img}
                src={storyImg}
                alt="A modern developer workstation at night"
                loading="lazy"
                width={1600}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs uppercase tracking-widest text-ink-soft">
                <span>Studio · Berlin / Remote</span>
                <span>Since MMXVIII</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}