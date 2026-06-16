"use client";

import { useEffect, useRef } from "react";
import { useGsap } from "@/lib/gsap";
import { HeroBrowserScene } from "./HeroBrowserScene";
const heroVideo = "/video/hero.mp4";

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

      gsap.from(".hero-fade", {
        y: 24,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
        delay: 0.5,
      });

      // Independent animation for CTA form - faster and shorter delay
      gsap.from(".cta-form", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "expo.out",
        delay: 0.15, // Much shorter delay
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
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[80vh] w-[80vw] -translate-x-1/2 rounded-full"
            style={{ background: "var(--grad-fade)" }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,oklch(0.62_0.21_295/0.15),transparent_40%)]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-[1.1fr_1fr]">
        {/* Left Column */}
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
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-7 py-4 text-sm font-medium text-white violet-glow transition-transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,oklch(1_0_0/0.25),transparent)] translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]" />
              Start a project
             
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

        {/* Right Column - CTA Form - REMOVED hero-fade class, added cta-form class */}
        <div className="cta-form lg:pt-8">
          <div className="rounded-3xl border bg-white/10 border-white/10 p-6 md:p-8 backdrop-blur-full">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-widest text-white/90">
                Let's talk
              </div>
              <h3 className="mt-5 text-2xl font-medium text-white leading-tight">
                Ready to create something unforgettable?
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Tell us about your project. We reply within 24 hours.
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll get back to you soon."); }}>
              <div>
                <label className="block text-xs uppercase tracking-widest text-white/80 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3.5 text-white placeholder:text-white/40 focus:border-violet focus:outline-none focus:ring-1 focus:ring-violet"
                  placeholder="Alex Rivera"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-white/80 mb-2">Work Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-3.5 text-white placeholder:text-white/40 focus:border-violet focus:outline-none focus:ring-1 focus:ring-violet"
                  placeholder="hello@yourcompany.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-white/80 mb-2">Project details</label>
                <textarea
                  rows={3}
                  className="w-full resize-y min-h-[100px] rounded-3xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-white/40 focus:border-violet focus:outline-none focus:ring-1 focus:ring-violet"
                  placeholder="We're launching a new brand and need a cinematic website..."
                />
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-2xl bg-primary py-4 text-sm font-semibold text-white transition-all hover:bg-primary/90 active:scale-[0.985]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                </span>
              </button>
            </form>
          </div>
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