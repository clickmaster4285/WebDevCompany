

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const PARTNERS = [
  { name: "Clutch", icon: "https://cdn.simpleicons.org/clutch/4B9CD3", dark: false },
  { name: "Google", icon: "https://cdn.simpleicons.org/google/4285F4", dark: false },
  { name: "HubSpot", icon: "https://cdn.simpleicons.org/hubspot/FF7A59", dark: false },
  { name: "Shopify Partners", icon: "https://cdn.simpleicons.org/shopify/7AB55C", dark: false },
  { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF", dark: false },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000", dark: true },
  { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7", dark: false },
  { name: "Cloudflare", icon: "https://cdn.simpleicons.org/cloudflare/F38020", dark: false },
  { name: "DigitalOcean", icon: "https://cdn.simpleicons.org/digitalocean/0080FF", dark: false },
  { name: "Contentful", icon: "https://cdn.simpleicons.org/contentful/2478CC", dark: false },
  { name: "Sanity", icon: "https://cdn.simpleicons.org/sanity/F03E2F", dark: false },
  { name: "Storyblok", icon: "https://cdn.simpleicons.org/storyblok/09B3AF", dark: false },
  { name: "Algolia", icon: "https://cdn.simpleicons.org/algolia/5468FF", dark: false },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E", dark: false },
  { name: "Upwork", icon: "https://cdn.simpleicons.org/upwork/6FDA44", dark: false },
  { name: "Toptal", icon: "https://cdn.simpleicons.org/toptal/7E3ACB", dark: false },
  { name: "Fiverr", icon: "https://cdn.simpleicons.org/fiverr/1DBF73", dark: false },
];

export function Partners() {
  const partnersRow = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative z-10 bg-black px-6">
      <div className="mx-auto max-w-7xl">
        {/* Partners Section */}
        <div className="mt-32">
          <div
            className="relative overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <motion.div
              className="flex gap-12 md:gap-16 items-center will-change-transform"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
              {partnersRow.map((partner, i) => (
                <motion.div
                  key={`${partner.name}-${i}`}
                  className="flex flex-col items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-18 h-18 md:w-22 md:h-22 flex items-center justify-center rounded-2xl  p-4 transition-all duration-300 hover:bg-white/10">
                    <img
                      src={partner.icon}
                      alt={partner.name}
                      className={`w-full h-full object-contain transition-all duration-300 ${
                        partner.dark ? "brightness-0 invert" : ""
                      }`}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}