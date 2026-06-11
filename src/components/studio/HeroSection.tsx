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

        // Split into words to preserve word wrapping
        const words = text.split(' ');
        const allChars: HTMLElement[] = [];

        words.forEach((word, wordIndex) => {
          // Create container for each word to prevent breaking within word
          const wordContainer = document.createElement("span");
          wordContainer.style.display = "inline-block";
          wordContainer.style.whiteSpace = "nowrap";
          
          // Create spans for each character in the word
          [...word].forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.className = "inline-block";
            wordContainer.appendChild(span);
            allChars.push(span);
          });
          
          h.appendChild(wordContainer);
          
          // Add space between words (except after last word)
          if (wordIndex < words.length - 1) {
            const space = document.createElement("span");
            space.textContent = "\u00A0"; // Non-breaking space
            space.style.display = "inline-block";
            h.appendChild(space);
          }
        });

        gsap.set(allChars, {
          yPercent: 120,
          opacity: 0,
        });

        gsap.to(allChars, {
          yPercent: 0,
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.02,
          delay: 0.2,
        });
      }

      gsap.from(".hero-fade", {
        y: 24,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
        delay: 0.5,
      });

      gsap.from(browser.current, {
        opacity: 0,
        y: 60,
        scale: 0.94,
        duration: 1.4,
        ease: "expo.out",
        delay: 0.3,
      });

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
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-16"
    >
      {/* Background Video */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          style={{ filter: "brightness(0.4)" }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        {/* Ambient glow overlay to maintain original atmosphere */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[80vh] w-[80vw] -translate-x-1/2 rounded-full"
            style={{ background: "var(--grad-fade)" }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,oklch(0.62_0.21_295/0.15),transparent_40%)]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="hero-fade text-eyebrow mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-ink-mute" />
            ClickMasters / Digital Studio · Est. 2018
          </div>

          <h1
            ref={headline}
            className="overflow-hidden text-display text-white text-7xl leading-[0.95]"
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
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-violet px-7 py-4 text-sm font-medium text-white violet-glow transition-transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,oklch(1_0_0/0.25),transparent)] translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]" />
              Start a project
              <span>→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-ink transition-colors hover:bg-white/5"
            >
              See selected work
            </a>
          </div>

          <div className="hero-fade mt-16 grid max-w-md grid-cols-3 gap-6">
            {[
              ["120+", "Projects"],
              ["18", "Awards"],
              ["99", "Lighthouse"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="text-display text-2xl text-ink md:text-3xl">{v}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-ink-mute">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div ref={browser} className="relative aspect-[5/4] w-full">
          <HeroBrowserScene />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <div className="hero-fade flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink-mute">
          <span className="h-px w-8 bg-ink-mute" />
          Scroll
        </div>
      </div>
    </section>
  );
}