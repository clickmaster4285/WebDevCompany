"use client";

import { motion } from "framer-motion";
import footerImg from "@/public/assets/footer.png"; // Make sure this path is correct in your project

// Note: Removed the unused @tanstack/react-router import to avoid bundling conflicts

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-surface-1 py-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 text-ink">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="shrink-0"
              >
                <img
                  src={footerImg.src || footerImg} // Safe fallback for local asset imports in Next.js
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-16 object-contain"
                />
              </motion.div>

              <span className="text-3xl font-semibold tracking-wide sm:text-xl">
                ClickMasters<span className="text-violet">.</span>
              </span>
            </div>

            <p className="mt-6 max-w-xs text-sm text-ink-mute">
              A premium web development studio crafting cinematic digital
              products.
            </p>
          </div>

          {[
            ["Studio", ["About", "Process", "Careers", "Journal"]],
            [
              "Services",
              [
                "Web Development",
                "UI/UX Design",
                "Web Applications",
                "Performance",
              ],
            ],
            [
              "Contact",
              [
                "marketing@clickmasters.pk",
                "Berlin · Lisbon",
                "Available Q2 2026",
              ],
            ],
          ].map(([heading, items]) => (
            <div key={heading as string}>
              <div className="text-xs uppercase tracking-widest text-ink-mute">
                {heading as string}
              </div>

              <ul className="mt-5 space-y-3 text-sm text-ink-soft">
                {(items as string[]).map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="transition-colors hover:text-violet-soft"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-8 text-xs text-ink-mute">
          <div>
            © {new Date().getFullYear()} ClickMasters. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-violet" />
            Currently accepting two new projects
          </div>
        </div>
      </div>
    </footer>
  );
}