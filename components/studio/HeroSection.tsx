import { useEffect, useRef } from "react";
import { useGsap } from "@/lib/gsap";
import { HeroBrowserScene } from "./HeroBrowserScene";
import heroVideo from "@/assets/hero.mp4";

export function HeroSection() {
  const root = useRef<HTMLElement>(null);
  const headline = useRef<HTMLHeadingElement>(null);
  const browser = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const { gsap } = useGsap();

    const ctx = gsap.context(() => {
      const h = headline.current;

      if (h) {
        const text = "We build digital experiences that people remember.";
        h.innerHTML = "";
        const words = text.split(' ');
        const allChars: HTMLElement[] = [];

        words.forEach((word, wordIndex) => {
          const wordContainer = document.createElement("span");
          wordContainer.style.display = "inline-block";
          wordContainer.style.whiteSpace = "nowrap";
          
          [...word].forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.className = "inline-block";
            wordContainer.appendChild(span);
            allChars.push(span);
          });
          
          h.appendChild(wordContainer);
          
          if (wordIndex < words.length - 1) {
            const space = document.createElement("span");
            space.textContent = "\u00A0";
            space.style.display = "inline-block";
            h.appendChild(space);
          }
        });

        gsap.set(allChars, { yPercent: 120, opacity: 0 });
        gsap.to(allChars, {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.02,
          delay: 0.2,
        });
      }

      gsap.from(".hero-fade", { y: 24, opacity: 0, duration: 1, ease: "expo.out", stagger: 0.08, delay: 0.5 });
      gsap.from(".cta-form", { y: 30, opacity: 0, duration: 0.8, ease: "expo.out", delay: 0.15 });

      if (browser.current && root.current) {
        gsap.to(browser.current, {
          y: -40,
          scale: 0.95,
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
className="relative mx-auto flex flex-col items-center justify-center overflow-x-hidden max-w-full min-h-[100dvh] w-full pt-20 pb-16 px-6 sm:pt-24 sm:pb-20 md:px-10">      {/* Background Layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "brightness(0.4)" }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        
        {/* Left Column */}
        <div>
          <div className="hero-fade text-eyebrow mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-ink-mute" />
            ClickMasters / Digital Studio · Est. 2018
          </div>

          <h1
            ref={headline}
            className="overflow-hidden text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]"
          >
            We build digital experiences that people{" "}
            <span className="text-primary relative inline-block italic">
              Remember.
              <span className="absolute left-0 bottom-0 h-[3px] w-full bg-primary rounded-full" />
            </span>
          </h1>

          <p className="hero-fade mt-8 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            A small studio engineering large, cinematic products for ambitious
            brands. Strategy, design and code under one roof — crafted with
            obsessive attention to motion, performance and detail.
          </p>

          <div className="hero-fade mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-violet px-7 py-4 text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
              Start a project
              <span>→</span>
            </a>
            <a href="#work" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-ink transition-colors hover:bg-white/5">
              See selected work
            </a>
          </div>

          <div className="hero-fade mt-16 grid max-w-md grid-cols-3 gap-6">
            {["120+ Projects", "18 Awards", "99 Lighthouse"].map((item) => {
              const [val, label] = item.split(' ');
              return (
                <div key={label}>
                  <div className="text-2xl text-white md:text-3xl">{val}</div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-ink-mute">{label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column */}
        <div className="cta-form">
          <div className="rounded-3xl border bg-white/10 border-white/10 p-6 md:p-8 backdrop-blur-md">
            <h3 className="text-xl font-medium text-white">Ready to create something unforgettable?</h3>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" className="w-full rounded-xl bg-white/10 p-4 text-white" placeholder="Name" />
              <input type="email" className="w-full rounded-xl bg-white/10 p-4 text-white" placeholder="Email" />
              <textarea className="w-full rounded-xl bg-white/10 p-4 text-white" rows={3} placeholder="Project details" />
              <button type="submit" className="w-full rounded-xl bg-primary py-4 text-white">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}