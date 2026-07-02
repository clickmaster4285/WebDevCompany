"use client";

import { useMemo, useState, type ChangeEvent } from "react";
import Link from "next/link";
import {
  Search,
  X,
  MessageCircle,
  Mail,
  Calendar,
  ArrowUp,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { faqPages } from "@/data/faq-pages";

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useState(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const faqCards = useMemo(() => {
    return faqPages.map((faq) => ({
      slug: faq.slug,
      title: faq.page.title,
      answer: faq.aboveTheFold.directAnswer,
    }));
  }, []);

  const filteredFaqs = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) return faqCards;

    return faqCards.filter((item) => {
      return (
        item.title.toLowerCase().includes(term) ||
        item.answer.toLowerCase().includes(term)
      );
    });
  }, [faqCards, searchTerm]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="relative overflow-hidden bg-[#182332] px-6 pb-20 pt-36 text-white">
        <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-violet/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white/80">
            <Sparkles className="h-4 w-4 text-violet" />
            FAQs
          </span>

          <h1 className="mt-7 text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Straight answers to common questions about our services, process,
            and how we help businesses grow online.
          </p>

          <div className="mx-auto mt-10 max-w-2xl">
            <div className="relative rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur">
              <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/45" />

              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search questions..."
                className="w-full rounded-xl bg-white px-12 py-4 text-sm font-semibold text-slate-950 outline-none placeholder:text-slate-400"
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-slate-100 p-1 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {searchTerm && (
              <p className="mt-3 text-sm text-white/55">
                Found {filteredFaqs.length} result
                {filteredFaqs.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-violet">
            FAQ Library
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950 md:text-4xl">
            Choose a question
          </h2>
        </div>

        {filteredFaqs.length === 0 ? (
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-center">
            <p className="text-lg font-black text-slate-950">
              No questions found
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Try adjusting your search.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredFaqs.map((item) => (
              <Link
                key={item.slug}
                href={`/faqs/${item.slug}`}
                className="group block h-full"
              >
                <article className="relative flex min-h-[132px] items-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-7 py-6 shadow-[0_12px_35px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-violet/30 hover:shadow-[0_22px_60px_rgba(124,92,255,0.12)]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-violet/10 blur-3xl" />
                  </div>

                  <div className="relative mr-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-950 transition-all duration-300 group-hover:border-violet group-hover:bg-violet group-hover:text-white">
                    <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>

                  <h3 className="relative text-[21px] font-black leading-[1.18] tracking-[-0.035em] text-slate-950 transition-colors duration-300 group-hover:text-violet">
                    {item.title}
                  </h3>
                </article>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet/15 text-violet">
              <MessageCircle className="h-8 w-8" />
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] md:text-4xl">
              Have a question that’s not listed here?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65">
              Reach out to our team and we will help you understand the best
              next step for your project.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 text-sm font-black text-white shadow-lg shadow-violet/20 transition hover:bg-violet/90"
              >
                <Mail className="h-4 w-4" />
                Contact Support
              </a>

              <a
                href="/book-call"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white/15"
              >
                <Calendar className="h-4 w-4" />
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-8 z-40 rounded-full border border-slate-200 bg-white p-3 text-slate-700 shadow-lg transition hover:scale-105 hover:text-violet"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      <a
        href="/chat"
        className="fixed bottom-8 right-8 z-40 flex items-center gap-2 rounded-full bg-violet p-4 text-white shadow-lg shadow-violet/20 transition hover:scale-105 hover:bg-violet/90"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden text-sm font-black md:inline">Chat with us</span>
      </a>
    </main>
  );
}