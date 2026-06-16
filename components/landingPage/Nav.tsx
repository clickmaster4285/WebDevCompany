
"use client";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="#top" className="flex items-center gap-2 text-ink">
      
          <span className="text-sm font-semibold tracking-wide">ClickMasters<span className="text-violet">.</span></span>
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-2 text-sm text-ink-soft md:flex transition-all duration-500 ${
            scrolled ? "glass" : "bg-transparent"
          }`}
        >
          {[
            ["Studio", "#story"],
            ["Services", "#services"],
            ["Work", "#work"],
            ["Process", "#process"],
            ["Stack", "#stack"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Start a project
          
        </a>
      </div>
    </header>
  );
}