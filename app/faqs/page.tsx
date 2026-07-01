// app/faqs/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  X,
  MessageCircle,
  Mail,
  Calendar,
  ThumbsUp,
  ThumbsDown,
  ArrowUp,
  Sparkles,
  Star,
  Briefcase,
  FileText,
  ChevronRight,
} from "lucide-react";
import { faqs, categories, faqStats, getFAQsByCategory, getPopularFAQs, getCategoryCount, searchFAQs } from "@/data/faqs";

const INTRO_STYLE_ID = "faq1-animations";

const palettes = {
  dark: {
    surface: "bg-neutral-950 text-neutral-100",
    panel: "bg-neutral-900/50",
    panelHover: "hover:bg-neutral-800/50",
    border: "border-white/10",
    borderHover: "hover:border-white/20",
    heading: "text-white",
    headingSecondary: "text-neutral-200",
    muted: "text-neutral-400",
    mutedLight: "text-neutral-500",
    iconRing: "border-white/20",
    iconSurface: "bg-white/5",
    icon: "text-white",
    toggle: "border-white/20 text-white",
    toggleSurface: "bg-white/10",
    glow: "rgba(255, 255, 255, 0.08)",
    aurora:
      "radial-gradient(ellipse 50% 100% at 10% 0%, rgba(226, 232, 240, 0.15), transparent 65%), #000000",
    shadow:
      "shadow-[0_36px_140px_-60px_rgba(10,10,10,0.95)]",
    overlay:
      "linear-gradient(130deg, rgba(255,255,255,0.04) 0%, transparent 65%)",
    inputBg: "bg-white/5",
    statsBg: "bg-white/5",
  },
  light: {
    surface: "bg-slate-50 text-neutral-900",
    panel: "bg-white/80",
    panelHover: "hover:bg-white",
    border: "border-neutral-200",
    borderHover: "hover:border-neutral-300",
    heading: "text-neutral-900",
    headingSecondary: "text-neutral-700",
    muted: "text-neutral-600",
    mutedLight: "text-neutral-400",
    iconRing: "border-neutral-300",
    iconSurface: "bg-neutral-900/5",
    icon: "text-neutral-900",
    toggle: "border-neutral-200 text-neutral-900",
    toggleSurface: "bg-white",
    glow: "rgba(15, 15, 15, 0.08)",
    aurora:
      "radial-gradient(ellipse 50% 100% at 10% 0%, rgba(15, 23, 42, 0.08), rgba(255, 255, 255, 0.95) 70%)",
    shadow:
      "shadow-[0_36px_120px_-70px_rgba(15,15,15,0.18)]",
    overlay:
      "linear-gradient(130deg, rgba(15,23,42,0.08) 0%, transparent 70%)",
    inputBg: "bg-white",
    statsBg: "bg-white/50",
  },
};

function FAQ1() {
  const getRootTheme = () => {
    if (typeof document === "undefined") return "dark";
    if (document.documentElement.classList.contains("dark")) return "dark";
    if (document.documentElement.classList.contains("light")) return "light";
    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  };

  type Theme = "dark" | "light";

const [theme, setTheme] = useState<Theme>("dark");
  const [introReady, setIntroReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [feedback, setFeedback] = useState<
    Record<string, "helpful" | "not-helpful">
  >({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Inject animations
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(INTRO_STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = INTRO_STYLE_ID;
    style.innerHTML = `
      @keyframes faq1-fade-up {
        0% { transform: translate3d(0, 20px, 0); opacity: 0; filter: blur(6px); }
        60% { filter: blur(0); }
        100% { transform: translate3d(0, 0, 0); opacity: 1; filter: blur(0); }
      }
      @keyframes faq1-beam-spin {
        0% { transform: rotate(0deg) scale(1); }
        100% { transform: rotate(360deg) scale(1); }
      }
      @keyframes faq1-pulse {
        0% { transform: scale(0.7); opacity: 0.55; }
        60% { opacity: 0.1; }
        100% { transform: scale(1.25); opacity: 0; }
      }
      @keyframes faq1-meter {
        0%, 20% { transform: scaleX(0); transform-origin: left; }
        45%, 60% { transform: scaleX(1); transform-origin: left; }
        80%, 100% { transform: scaleX(0); transform-origin: right; }
      }
      @keyframes faq1-tick {
        0%, 30% { transform: translateX(-6px); opacity: 0.4; }
        50% { transform: translateX(2px); opacity: 1; }
        100% { transform: translateX(20px); opacity: 0; }
      }
      .faq1-intro {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.85rem;
        padding: 0.85rem 1.4rem;
        border-radius: 9999px;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(12, 12, 12, 0.42);
        color: rgba(248, 250, 252, 0.92);
        text-transform: uppercase;
        letter-spacing: 0.35em;
        font-size: 0.65rem;
        width: 100%;
        max-width: 24rem;
        margin: 0 auto;
        mix-blend-mode: screen;
        opacity: 0;
        transform: translate3d(0, 12px, 0);
        filter: blur(8px);
        transition: opacity 720ms ease, transform 720ms ease, filter 720ms ease;
        isolation: isolate;
      }
      .faq1-intro--light {
        border-color: rgba(17, 17, 17, 0.12);
        background: rgba(248, 250, 252, 0.88);
        color: rgba(15, 23, 42, 0.78);
        mix-blend-mode: multiply;
      }
      .faq1-intro--active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        filter: blur(0);
      }
      .faq1-intro__beam,
      .faq1-intro__pulse {
        position: absolute;
        inset: -110%;
        pointer-events: none;
        border-radius: 50%;
      }
      .faq1-intro__beam {
        background: conic-gradient(from 160deg, rgba(226, 232, 240, 0.25), transparent 32%, rgba(148, 163, 184, 0.22) 58%, transparent 78%, rgba(148, 163, 184, 0.18));
        animation: faq1-beam-spin 18s linear infinite;
        opacity: 0.55;
      }
      .faq1-intro--light .faq1-intro__beam {
        background: conic-gradient(from 180deg, rgba(15, 23, 42, 0.18), transparent 30%, rgba(71, 85, 105, 0.18) 58%, transparent 80%, rgba(15, 23, 42, 0.14));
      }
      .faq1-intro__pulse {
        border: 1px solid currentColor;
        opacity: 0.25;
        animation: faq1-pulse 3.4s ease-out infinite;
      }
      .faq1-intro__label {
        position: relative;
        z-index: 1;
        font-weight: 600;
        letter-spacing: 0.4em;
      }
      .faq1-intro__meter {
        position: relative;
        z-index: 1;
        flex: 1 1 auto;
        height: 1px;
        background: linear-gradient(90deg, transparent, currentColor 35%, transparent 85%);
        transform: scaleX(0);
        transform-origin: left;
        animation: faq1-meter 5.8s ease-in-out infinite;
        opacity: 0.7;
      }
      .faq1-intro__tick {
        position: relative;
        z-index: 1;
        width: 0.55rem;
        height: 0.55rem;
        border-radius: 9999px;
        background: currentColor;
        box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
        animation: faq1-tick 3.2s ease-in-out infinite;
      }
      .faq1-intro--light .faq1-intro__tick {
        box-shadow: 0 0 0 4px rgba(15, 15, 15, 0.08);
      }
      .faq1-fade {
        opacity: 0;
        transform: translate3d(0, 24px, 0);
        filter: blur(12px);
        transition: opacity 700ms ease, transform 700ms ease, filter 700ms ease;
      }
      .faq1-fade--ready {
        animation: faq1-fade-up 860ms cubic-bezier(0.22, 0.68, 0, 1) forwards;
      }
      .faq1-stats-item {
        opacity: 0;
        transform: translate3d(0, 20px, 0);
        animation: faq1-fade-up 600ms cubic-bezier(0.22, 0.68, 0, 1) forwards;
      }
      .faq1-stats-item:nth-child(1) { animation-delay: 100ms; }
      .faq1-stats-item:nth-child(2) { animation-delay: 200ms; }
      .faq1-stats-item:nth-child(3) { animation-delay: 300ms; }
      .faq1-stats-item:nth-child(4) { animation-delay: 400ms; }
    `;

    document.head.appendChild(style);

    return () => {
      if (style.parentNode) style.remove();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIntroReady(true);
      return;
    }
    const frame = window.requestAnimationFrame(() => setIntroReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const applyThemeFromRoot = () => setTheme(getRootTheme());

    applyThemeFromRoot();

    const observer = new MutationObserver(applyThemeFromRoot);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "bento-theme") applyThemeFromRoot();
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      setHasEntered(true);
      return;
    }

    let timeout: NodeJS.Timeout;
    const onLoad = () => {
      timeout = setTimeout(() => setHasEntered(true), 120);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const palette = useMemo(() => palettes[theme], [theme]);

  const toggleTheme = () => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    setTheme(next);
    try {
      window.localStorage?.setItem("bento-theme", next);
    } catch (_err) {
      /* ignore */
    }
  };

  const toggleQuestion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const filteredFaqs = useMemo(() => {
    let filtered = faqs;

    if (activeCategory !== "all") {
      filtered = getFAQsByCategory(activeCategory);
    }

    if (searchTerm.trim()) {
      filtered = searchFAQs(searchTerm);
      // If category filter is applied, filter further
      if (activeCategory !== "all") {
        filtered = filtered.filter((faq) => faq.meta === activeCategory);
      }
    }

    return filtered;
  }, [searchTerm, activeCategory]);

  const popularFaqs = useMemo(() => {
    return getPopularFAQs();
  }, []);

  const handleFeedback = (question: string, helpful: boolean) => {
    setFeedback((prev) => ({
      ...prev,
      [question]: helpful ? "helpful" : "not-helpful",
    }));
  };

  const setCardGlow = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--faq-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--faq-y", `${event.clientY - rect.top}px`);
  };

  const clearCardGlow = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.currentTarget;
    target.style.removeProperty("--faq-x");
    target.style.removeProperty("--faq-y");
  };

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden transition-colors duration-700 ${palette.surface}`}
    >
      {/* Background Effects */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: palette.aurora }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-80"
        style={{
          background: palette.overlay,
          mixBlendMode: theme === "dark" ? "screen" : "multiply",
        }}
      />

      <section
        className={`relative z-10 mx-auto flex max-w-4xl flex-col gap-8 px-6 py-24 lg:max-w-5xl lg:px-12 ${
          hasEntered ? "faq1-fade--ready" : "faq1-fade"
        }`}
      >
        {/* 1. Intro Badge */}
        <div
          className={`faq1-intro ${introReady ? "faq1-intro--active" : ""} ${
            theme === "light" ? "faq1-intro--light" : "faq1-intro--dark"
          }`}
        >
          <span className="faq1-intro__beam" aria-hidden="true" />
          <span className="faq1-intro__pulse" aria-hidden="true" />
          <span className="faq1-intro__label">Signal FAQ</span>
          <span className="faq1-intro__meter" aria-hidden="true" />
          <span className="faq1-intro__tick" aria-hidden="true" />
        </div>

        {/* 2. Hero Section */}
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className={`w-4 h-4 ${palette.muted}`} />
              <p className={`text-xs uppercase tracking-[0.35em] ${palette.muted}`}>
                Knowledge Base
              </p>
            </div>
            <h1 className={`text-4xl font-semibold leading-tight md:text-5xl ${palette.heading}`}>
              Focus on the signal, <br className="hidden sm:block" />
              not the noise.
            </h1>
            <p className={`max-w-xl text-base ${palette.muted}`}>
              Everything you need to know about partnering with our team,
              condensed into calm monochrome clarity.
            </p>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className={`relative inline-flex h-11 items-center gap-3 rounded-full border px-5 text-sm font-medium transition-colors duration-500 ${palette.toggleSurface} ${palette.toggle}`}
            aria-pressed={theme === "dark" ? "true" : "false"}
          >
            <span className="relative flex h-6 w-6 items-center justify-center">
              <span
                className={`pointer-events-none absolute inset-0 rounded-full border opacity-40 ${
                  theme === "dark"
                    ? "border-white/30 animate-pulse"
                    : "border-neutral-400/50"
                }`}
              />
              <span
                className={`h-3 w-3 rounded-full transition-all duration-500 ${
                  theme === "dark" ? "bg-white" : "bg-neutral-900"
                }`}
              />
            </span>
            {theme === "dark" ? "Night" : "Day"} mode
          </button>
        </header>

        {/* 3. Search Bar */}
        <div className="relative max-w-2xl w-full mx-auto">
          <div
            className={`relative flex items-center rounded-full border px-6 py-3 transition-all duration-300 ${palette.border} ${palette.panel} focus-within:border-violet/50 focus-within:shadow-lg focus-within:shadow-violet/5`}
          >
            <Search className={`w-5 h-5 mr-3 ${palette.muted}`} />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full bg-transparent outline-none text-sm ${palette.heading} placeholder:${palette.muted}`}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className={`p-1 rounded-full hover:bg-white/10 transition-colors ${palette.muted}`}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {searchTerm && (
            <p className={`text-xs mt-3 text-center ${palette.muted}`}>
              Found {filteredFaqs.length} result
              {filteredFaqs.length !== 1 ? "s" : ""}
            </p>
          )}
        </div>

        {/* 4. Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 px-4 rounded-2xl border border-white/5 bg-white/5">
          <div className="faq1-stats-item text-center">
            <div className={`text-2xl font-bold ${palette.heading}`}>{faqStats.totalQuestions}+</div>
            <div className={`text-xs ${palette.muted}`}>Answered Questions</div>
          </div>
          <div className="faq1-stats-item text-center">
            <div className={`text-2xl font-bold ${palette.heading}`}>{faqStats.satisfactionRate}%</div>
            <div className={`text-xs ${palette.muted}`}>Satisfaction Rate</div>
          </div>
          <div className="faq1-stats-item text-center">
            <div className={`text-2xl font-bold ${palette.heading}`}>{faqStats.averageRating}</div>
            <div className={`text-xs ${palette.muted}`}>Average Rating</div>
          </div>
          <div className="faq1-stats-item text-center">
            <div className={`text-2xl font-bold ${palette.heading}`}>{faqStats.supportAvailable}</div>
            <div className={`text-xs ${palette.muted}`}>Support Available</div>
          </div>
        </div>

        {/* 5. Category Filters */}
        <div className="flex flex-wrap gap-2 py-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-violet text-white shadow-lg shadow-violet/20"
                  : `${palette.border} ${palette.muted} hover:${palette.heading} ${palette.panelHover}`
              }`}
            >
              {category.icon} {category.name}{" "}
              <span className="opacity-50 text-[10px]">
                ({getCategoryCount(category.id)})
              </span>
            </button>
          ))}
        </div>

        {/* 6. Popular Questions */}
        {!searchTerm && activeCategory === "all" && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Star className={`w-4 h-4 text-yellow-500`} />
              <h2 className={`text-sm font-medium ${palette.headingSecondary}`}>
                Popular Questions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {popularFaqs.map((faq) => (
                <button
                  key={faq.question}
                  onClick={() => {
                    const index = faqs.findIndex((f) => f.question === faq.question);
                    if (index !== -1) {
                      setActiveIndex(index);
                      setTimeout(() => {
                        document
                          .getElementById(`faq-item-${index}`)
                          ?.scrollIntoView({ behavior: "smooth", block: "center" });
                      }, 100);
                    }
                  }}
                  className={`group p-4 rounded-xl border transition-all duration-300 text-left ${palette.border} ${palette.panel} hover:-translate-y-0.5 hover:shadow-lg ${palette.borderHover}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-lg">⭐</span>
                    <div>
                      <p
                        className={`text-sm font-medium ${palette.heading} group-hover:text-violet transition-colors line-clamp-2`}
                      >
                        {faq.question}
                      </p>
                      <p className={`text-xs mt-1 ${palette.muted}`}>
                        Most asked question
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 7. FAQ List */}
        <ul className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className={`text-center py-12 ${palette.muted}`}>
              <p className="text-lg">No questions found</p>
              <p className="text-sm mt-2">Try adjusting your search or filter</p>
            </div>
          ) : (
            filteredFaqs.map((item, index) => {
              const originalIndex = faqs.indexOf(item);
              const open = activeIndex === originalIndex;
              const panelId = `faq-panel-${originalIndex}`;
              const buttonId = `faq-trigger-${originalIndex}`;
              const isHovered = hoveredIndex === originalIndex;

              return (
                <li
                  id={`faq-item-${originalIndex}`}
                  key={item.question}
                  className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 focus-within:-translate-y-0.5 ${palette.border} ${palette.panel} ${palette.shadow}`}
                  onMouseMove={setCardGlow}
                  onMouseEnter={() => setHoveredIndex(originalIndex)}
onMouseLeave={(event) => {
  clearCardGlow(event);
  setHoveredIndex(null);
}}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                      open || isHovered ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background: `radial-gradient(240px circle at var(--faq-x, 50%) var(--faq-y, 50%), ${palette.glow}, transparent 70%)`,
                    }}
                  />

                  <button
                    type="button"
                    id={buttonId}
                    aria-controls={panelId}
                    aria-expanded={open}
                    onClick={() => toggleQuestion(originalIndex)}
                    style={{
                      "--faq-outline":
                        theme === "dark"
                          ? "rgba(255,255,255,0.35)"
                          : "rgba(17,17,17,0.25)",
                    } as React.CSSProperties}
                    className="relative flex w-full items-start gap-6 px-8 py-7 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--faq-outline)"
                  >
                    <span
                      className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105 ${palette.iconRing} ${palette.iconSurface}`}
                    >
                      <span
                        className={`pointer-events-none absolute inset-0 rounded-full border opacity-30 ${palette.iconRing} ${
                          open ? "animate-ping" : ""
                        }`}
                      />
                      <svg
                        className={`relative h-5 w-5 transition-transform duration-500 ${palette.icon} ${
                          open ? "rotate-45" : ""
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 5v14"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5 12h14"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>

                    <div className="flex flex-1 flex-col gap-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                        <h2
                          className={`text-lg font-medium leading-tight sm:text-xl ${palette.heading}`}
                        >
                          {item.question}
                        </h2>
                        {item.meta && (
                          <span
                            className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.35em] transition-opacity duration-300 sm:ml-auto ${palette.border} ${palette.muted}`}
                          >
                            {item.meta}
                          </span>
                        )}
                      </div>

                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className={`overflow-hidden text-sm leading-relaxed transition-[max-height] duration-500 ease-out ${
                          open ? "max-h-64" : "max-h-0"
                        } ${palette.muted}`}
                      >
                        <p className="pr-2">{item.answer}</p>

                        {/* Feedback buttons */}
                        <div className="flex items-center gap-4 mt-4 pt-3 border-t border-white/5">
                          <span className={`text-xs ${palette.mutedLight}`}>
                            Was this helpful?
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleFeedback(item.question, true);
                            }}
                            className={`p-1.5 rounded-full transition-colors ${
                              feedback[item.question] === "helpful"
                                ? "bg-green-500/20 text-green-500"
                                : `hover:bg-white/10 ${palette.muted}`
                            }`}
                          >
                            <ThumbsUp className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleFeedback(item.question, false);
                            }}
                            className={`p-1.5 rounded-full transition-colors ${
                              feedback[item.question] === "not-helpful"
                                ? "bg-red-500/20 text-red-500"
                                : `hover:bg-white/10 ${palette.muted}`
                            }`}
                          >
                            <ThumbsDown className="w-4 h-4" />
                          </button>
                          {feedback[item.question] && (
                            <span className="text-xs text-green-500 animate-in fade-in duration-300">
                              Thanks for your feedback!
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })
          )}
        </ul>

        {/* 8. CTA Section */}
        <div
          className={`relative overflow-hidden rounded-3xl border p-8 md:p-12 text-center ${palette.border} ${palette.panel}`}
        >
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-violet/10 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-violet" />
              </div>
            </div>
            <h2 className={`text-2xl font-semibold mb-2 ${palette.heading}`}>
              Still have questions?
            </h2>
            <p className={`text-sm max-w-md mx-auto mb-6 ${palette.muted}`}>
              We're here to help. Reach out to our team and we'll get back to you
              within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-violet text-white rounded-full hover:bg-violet/90 transition-colors shadow-lg shadow-violet/20"
              >
                <Mail className="w-4 h-4" />
                Contact Support
              </a>
              <a
                href="/book-call"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-colors ${palette.border} ${palette.heading} hover:bg-white/5`}
              >
                <Calendar className="w-4 h-4" />
                Book a Call
              </a>
            </div>
          </div>
        </div>

        {/* 9. Related Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              href: "/case-studies",
              icon: <Briefcase className="w-5 h-5" />,
              title: "Case Studies",
              desc: "See how we've helped clients succeed",
            },
            {
              href: "/blogs",
              icon: <FileText className="w-5 h-5" />,
              title: "Blog Posts",
              desc: "Latest insights and updates",
            },
            {
              href: "/testimonials",
              icon: <Star className="w-5 h-5" />,
              title: "Testimonials",
              desc: "What our clients say about us",
            },
          ].map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              className={`group p-6 rounded-xl border transition-all duration-300 ${palette.border} ${palette.panel} hover:-translate-y-0.5 hover:shadow-lg ${palette.borderHover}`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-lg bg-violet/10 text-violet transition-colors group-hover:bg-violet/20`}
                >
                  {resource.icon}
                </div>
                <div className="flex-1">
                  <h3
                    className={`font-medium ${palette.heading} group-hover:text-violet transition-colors flex items-center gap-1`}
                  >
                    {resource.title}
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  </h3>
                  <p className={`text-sm ${palette.muted}`}>{resource.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 10. Footer Note */}
        <div className={`text-center text-xs ${palette.mutedLight} pt-4`}>
          <p>Can't find what you're looking for? We're always updating our FAQ.</p>
          <p className="mt-1">
            Last updated: {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* 11. Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-24 right-8 p-3 rounded-full shadow-lg transition-all duration-300 ${palette.panel} ${palette.border} hover:scale-105 hover:shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-300`}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* 12. Live Chat Button */}
      <a
        href="/chat"
        className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg transition-all duration-300 bg-violet text-white hover:bg-violet/90 hover:scale-105 hover:shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-300`}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:inline text-sm font-medium">Chat with us</span>
      </a>
    </div>
  );
}

export default FAQ1;
export { FAQ1 };