"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import footerImg from "@/assets/footer.png";

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-surface-1 py-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 text-ink">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="shrink-0"
              >
                <Image
                  src={footerImg}
                  alt="ClickMasters logo"
                  className="w-16 h-auto object-contain"
                />
              </motion.div>

              <span className="text-3xl sm:text-xl font-semibold tracking-wide">
                ClickMasters<span className="text-violet">.</span>
              </span>
            </div>

            <p className="mt-6 max-w-xs text-sm text-ink-mute">
              A premium web development studio crafting cinematic digital products.
            </p>
          </div>

          {[
            ["Studio", ["About", "Process", "Careers", "Journal"]],
            [
              "Services",
              ["Web Development", "UI/UX Design", "Web Applications", "Performance"],
            ],
            [
              "Contact",
              [
                "marketing@clickmasters.pk",
                "Berlin · Lisbon",
                "Available Q2 2026",
                "",
              ],
            ],
          ].map(([h, items]) => (
            <div key={h as string}>
              <div className="text-xs uppercase tracking-widest text-ink-mute">
                {h as string}
              </div>

              <ul className="mt-5 space-y-3 text-sm text-ink-soft">
                {(items as string[]).map((x) => (
                  <li key={x}>
                    <a className="hover:text-violet-soft transition-colors" href="#">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-8 text-xs text-ink-mute">
          <div>© {new Date().getFullYear()} ClickMasters. All rights reserved.</div>

          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Currently accepting two new projects
          </div>
        </div>
      </div>
    </footer>
  );
}