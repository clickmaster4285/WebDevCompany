



import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useGsap } from "@/lib/gsap";
import p1 from "@/public/assets/testimonial-1.jpg";
import p2 from "@/public/assets/testimonial-2.jpg";

const ITEMS = [
  {
    quote: "ClickMasters didn't just redesign our product — they reshaped how our team thinks about craft. Every detail compounds.",
    name: "Helena Marsh",
    role: "CPO, Helix Analytics",
    portrait: p1,
  },
  {
    quote: "The most senior engineering partner we've ever worked with. Cinematic motion, real engineering, real results.",
    name: "Daniel Vogt",
    role: "Founder, Northwind Pay",
    portrait: p2,
  },
];

export function TestimonialsSection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = useGsap();
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".t-card").forEach((card) => {
        gsap.from(card.querySelectorAll(".t-line"), {
          yPercent: 110,
          duration: 1,
          ease: "expo.out",
          stagger: 0.06,
          scrollTrigger: { trigger: card, start: "top 70%" },
        });
        const img = card.querySelector(".t-img");
        if (img) {
          gsap.fromTo(img, { scale: 1.2 }, {
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
          });
        }
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="text-eyebrow mb-4">/ Voices</div>
        <h2 className="text-display text-[clamp(2rem,5vw,4rem)] text-ink max-w-3xl">
          Words from the people <span className="text-violet-soft">we build with.</span>
        </h2>
      </div>

      <div className="mt-20 space-y-32">
        {ITEMS.map((t, i) => (
          <article
            key={t.name}
            className="t-card mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-[1fr_1.4fr]"
          >
            <div className={`relative aspect-[4/5] overflow-hidden rounded-3xl ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <Image src={t.portrait} alt={t.name} loading="lazy" className="t-img absolute inset-0 h-full w-full object-cover" fill />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-ink-soft">
                {t.role}
              </div>
            </div>
            <div>
              <div className="text-display text-[clamp(1.6rem,3.4vw,3rem)] leading-[1.1] text-ink">
                {t.quote.split(" ").map((w, j) => (
                  <span key={j} className="inline-block overflow-hidden align-top mr-[0.25em]">
                    <span className="t-line inline-block">{w}</span>
                  </span>
                ))}
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-ink-mute" />
                <div>
                  <div className="text-ink">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-ink-mute">{t.role}</div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}