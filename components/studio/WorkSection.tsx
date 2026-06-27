


import Image from "next/image";
import { useEffect, useRef } from "react";
import { useGsap } from "@/lib/gsap";
import saasImg from "@/assets/kitchenFlow.jpg";
import fintechImg from "@/assets/work-fintech.jpg";
import ecomImg from "@/assets/work-ecom.jpg";
import corpImg from "@/assets/work-corp.jpg";

const PROJECTS = [
{
  name: "Kitchen Flow",
  industry: "Restaurant",
  img: saasImg,
  desc: "A modern restaurant website featuring online reservations, digital menus, event bookings, and a premium dining experience.",
  tech: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
  result: "+156% reservations",
},
  {
    name: "SmileCraft Dental",
    industry: "Healthcare",
    img: fintechImg,
    desc: "A modern dental clinic website with online appointment booking, treatment pages, and patient resources.",
    tech: ["React", "Next.js", "Stripe"],
    result: "+94% bookings",
  },
  {
    name: "PrimeNest Realty",
    industry: "Real Estate",
    img: ecomImg,
    desc: "A property showcase platform featuring advanced search, interactive maps, and agent profiles.",
    tech: ["Next.js", "Mapbox", "Supabase"],
    result: "12K+ monthly visitors",
  },
  {
    name: "AutoMotive",
    industry: "E-commerce",
    img: corpImg,
    desc: "A scalable online store with custom product experiences, fast checkout, and optimized conversions.",
    tech: ["Shopify", "Hydrogen", "GraphQL"],
    result: "+143% revenue",
  },
];

export function WorkSection() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const { gsap, ScrollTrigger } = useGsap();
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".work-panel");
      panels.forEach((panel, i) => {
        if (i === panels.length - 1) return;
        gsap.to(panel, {
          scale: 0.92,
          yPercent: -8,
          opacity: 0.4,
          scrollTrigger: {
            trigger: panel,
            start: "top 5%",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="work" className="relative py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="text-eyebrow mb-4">/ Selected work</div>
        <h2 className="text-display text-[clamp(2rem,5vw,4rem)] text-ink max-w-3xl">
          Recent products we've shaped, shipped <span className="text-violet-soft">and scaled.</span>
        </h2>
      </div>

      <div className="mt-16 space-y-10 px-4 md:px-10">
        {PROJECTS.map((p, i) => (
          <article
            key={p.name}
            className="work-panel sticky top-24 mx-auto max-w-[1300px] overflow-hidden rounded-3xl border border-white/5 bg-surface-1"
            style={{ zIndex: i + 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-[16/10] md:aspect-auto">
                <Image src={p.img} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover" fill />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-1/60 to-transparent" />
              </div>
              <div className="flex flex-col justify-between p-8 md:p-14">
                <div className="flex items-start justify-between text-xs uppercase tracking-[0.3em] text-ink-mute">
                  <span className="text-violet-soft">0{i + 1}</span>
                  <span>{p.industry}</span>
                </div>
                <div>
                  <h3 className="text-display mt-10 text-[clamp(2rem,4vw,3.6rem)] text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-5 max-w-md text-ink-soft">{p.desc}</p>
                </div>
                <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-ink-soft">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="text-right">
                    <div className="text-display text-2xl text-violet-soft">{p.result}</div>
                    <div className="text-xs uppercase tracking-widest text-ink-mute">Outcome</div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}