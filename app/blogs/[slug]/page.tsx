import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";
import { BlogContentRenderer } from "@/components/studio/blogs/detail/BlogContentRenderer";
import { AnimatedCTA } from "@/components/studio/blogs/detail/AnimatedCTA";
import { BlogTOC } from "@/components/studio/blogs/detail/BlogTOC";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getBlogCtas(blog: any) {
  return [
    {
      label: "Free Strategy Call",
      title: "Not sure which partner fits your project?",
      description:
        "Use this guide to shortlist smarter — or talk to us and we’ll help you understand what type of team fits your scope, budget, and goals.",
      primaryText: "Start a project",
      secondaryText: "View our process",
      primaryHref: "/#contact",
      secondaryHref: "/#process",
      variant: "light",
    },
    {
      label: "Decision Framework",
      title: "Want the checklist behind this article?",
      description:
        "Turn the criteria into a practical evaluation scorecard you can use while comparing agencies, vendors, or development partners.",
      primaryText: "Request checklist",
      secondaryText: "Explore services",
      primaryHref: "/#contact",
      secondaryHref: "/#services",
      variant: "gradient",
    },
    {
      label: "Next Step",
      title: blog.cta?.title || "Ready to shortlist on fit?",
      description:
        blog.cta?.description ||
        "If senior-led delivery fits your needs, start with a scoping conversation.",
      primaryText: blog.cta?.primaryText || "Get matched",
      secondaryText: blog.cta?.secondaryText || "Request checklist",
      primaryHref: "/#contact",
      secondaryHref: "/#contact",
      variant: "dark",
    },
  ];
}

function CTASection({ cta }: { cta: any }) {
if (cta.variant === "light") {
  return (
    <section className="my-16 [perspective:1200px]">
      <div className="group relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white shadow-[0_35px_120px_rgba(15,23,42,0.14)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_45px_140px_rgba(124,92,255,0.18)] lg:[transform-style:preserve-3d]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet/20 blur-3xl" />
        <div className="absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-slate-950/5 blur-3xl" />

        <div className="relative grid lg:grid-cols-[1fr_320px]">
          <div className="relative p-7 md:p-10 lg:[transform:translateZ(28px)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white shadow-lg shadow-violet/25">
              <span className="h-2 w-2 rounded-full bg-white" />
              Recommended Next Step
            </div>

            <p className="mt-5 text-[11px] font-black uppercase tracking-[0.32em] text-violet">
              {cta.label}
            </p>

            <h3 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] text-slate-950 md:text-4xl">
              {cta.title}
            </h3>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600">
              {cta.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Honest fit check", "No obligation", "Senior-led advice"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur"
                  >
                    ✓ {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={cta.primaryHref}
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white shadow-[0_14px_35px_rgba(15,23,42,0.25)] transition hover:-translate-y-0.5 hover:bg-violet"
              >
                {cta.primaryText} →
              </Link>

              <Link
                href={cta.secondaryHref}
                className="rounded-full border border-slate-200 bg-white/70 px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:border-violet hover:text-violet"
              >
                {cta.secondaryText}
              </Link>
            </div>
          </div>

          <div className="relative border-t border-slate-100 bg-slate-50/80 p-7 backdrop-blur lg:border-l lg:border-t-0 lg:[transform:translateZ(42px)]">
            <div className="absolute right-5 top-5 h-16 w-16 rounded-2xl border border-violet/20 bg-white shadow-[0_18px_50px_rgba(124,92,255,0.15)] rotate-6" />

            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
              Fit Check
            </p>

            <div className="mt-5 space-y-3">
              {[
                ["Scope", "Website / SaaS / Commerce"],
                ["Budget", "Clear range discussion"],
                ["Timeline", "Launch-ready planning"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition group-hover:-translate-y-0.5"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-850">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-slate-950 p-4 text-white shadow-[0_18px_50px_rgba(15,23,42,0.20)]">
              <p className="text-sm font-black">Quick recommendation</p>
              <p className="mt-2 text-xs leading-5 text-white/60">
                We’ll tell you if ClickMasters fits — and if not, what type of
                partner does.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

  if (cta.variant === "light") {
  return (
    <section className="my-16 overflow-hidden rounded-[2rem] border border-violet/20 bg-white shadow-[0_28px_100px_rgba(15,23,42,0.10)]">
      <div className="grid lg:grid-cols-[1fr_300px]">
        <div className=ward Anima"relative p-7 md:p-10">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-violet/15 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white shadow-lg shadow-violet/25">
              <span className="h-2 w-2 rounded-full bg-white" />
              Recommended Next Step
            </div>

            <p className="mt-5 text-[11px] font-black uppercase tracking-[0.32em] text-violet">
              {cta.label}
            </p>

            <h3 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] text-slate-950 md:text-4xl">
              {cta.title}
            </h3>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600">
              {cta.description}
            </p>

            <div className="mt-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-bold text-white">
              Start with a free project-fit check →
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Honest fit check", "No obligation", "Senior-led advice"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600"
                  >
                    ✓ {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={cta.primaryHref}
                className="rounded-full bg-violet px-6 py-3 text-sm font-black text-white shadow-lg shadow-violet/20 transition hover:-translate-y-0.5 hover:bg-slate-950"
              >
                {cta.primaryText} →
              </Link>

              <Link
                href={cta.secondaryHref}
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-violet hover:text-violet"
              >
                {cta.secondaryText}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 bg-slate-50 p-7 lg:border-l lg:border-t-0">
          <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
            Fit Check
          </p>

          <div className="mt-5 space-y-4">
            {[
              ["Scope", "Website / SaaS / Commerce"],
              ["Budget", "Clear range discussion"],
              ["Timeline", "Launch-ready planning"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl bg-white p-4 shadow-sm">
                <p clasward AnimasName="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {label}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>ward Anima
    </section>
  );
}

  return (
    <section className="my-20 overflow-hidden rounded-[2.5rem] bg-[#101827] p-1 shadow-[0_30px_100px_rgba(15,23,42,0.35)]">
      <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 p-8 text-white md:p-12">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-violet/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_260px] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-violet-soft">
              {cta.label}
            </p>

            <h3 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
              {cta.title}
            </h3>

            <p className="mt-5 max-w-2xl leading-8 text-white/65">
              {cta.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href={cta.primaryHref}
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5"
              >
                {cta.primaryText} →
              </Link>

              <Link
                href={cta.secondaryHref}
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {cta.secondaryText}
              </Link>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-white/40">
              Promise
            </p>

            <p className="mt-4 text-sm leading-6 text-white/70">
              If we are not the right fit, we will say that clearly and point
              you toward the type of team that is.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const ctas = getBlogCtas(blog);

  const headings = blog.content
    ?.filter((block: any) => block.type === "heading")
    .map((block: any) => block.text);

  const firstBlock = blog.content?.slice(0, 1) || [];
  const afterFirstBlock = blog.content?.slice(1) || [];

  const listIndex = afterFirstBlock.findIndex((block: any) => block.type === "list");
  const beforeMidCta =
    listIndex >= 0 ? afterFirstBlock.slice(0, listIndex + 1) : afterFirstBlock;
  const afterMidCta = listIndex >= 0 ? afterFirstBlock.slice(listIndex + 1) : [];

  return (
    <main className="min-h-screen bg-[#f6f7fb] text-slate-950">
      <Nav />

      <article>
      <section className="relative overflow-hidden bg-[#101827] px-6 pb-20 pt-36 text-white md:px-10">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />

  <div className="relative mx-auto max-w-6xl">
    <div className="flex flex-wrap items-center gap-2 text-sm text-white/50">
      <Link href="/" className="hover:text-white">
        Home
      </Link>
      <span>/</span>
      <Link href="/blogs" className="hover:text-white">
        Blogs
      </Link>
      <span>/</span>
      <span className="text-white/80">{blog.category}</span>
    </div>

    <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_340px] lg:items-end">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-violet-soft backdrop-blur">
            {blog.hero?.badge || blog.category}
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/60">
            {blog.readTime}
          </span>
        </div>

        <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.06em] text-white md:text-7xl">
          {blog.hero?.title || blog.title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-white/68">
          {blog.hero?.description || blog.excerpt}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/#contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5"
          >
            Start a project →
          </Link>

          <Link
            href="/blogs"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white/80 transition hover:border-white/30 hover:text-white"
          >
            Back to blogs
          </Link>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
          Article Details
        </p>

        <div className="mt-6 space-y-5">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/35">
              Written by
            </p>
            <p className="mt-1 font-semibold text-white">{blog.author}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/35">
              Published
            </p>
            <p className="mt-1 font-semibold text-white">{blog.date}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/35">
              Category
            </p>
            <p className="mt-1 font-semibold text-white">{blog.category}</p>
          </div>
        </div>
      </div>
    </div>

    {blog.credibility?.length > 0 && (
      <div className="mt-14 grid gap-3 md:grid-cols-5">
        {blog.credibility.map((item: string, index: number) => (
          <div
            key={item}
            className="group rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.09]"
          >
            <span className="text-xs font-black text-violet-soft">
              0{index + 1}
            </span>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/78">
              {item}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
</section>

        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[220px_1fr]">
<BlogTOC headings={headings || []} />

          <div className="min-w-0">
            <BlogContentRenderer content={firstBlock as any} />
            <AnimatedCTA cta={ctas[0]} />

            <BlogContentRenderer content={beforeMidCta as any} />
            <CTASection cta={ctas[1]} />

            <BlogContentRenderer content={afterMidCta as any} />

            {blog.faqs?.length > 0 && (
              <section className="mt-20 rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet">
                  Common Questions
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
                  Choosing a Web Development Company
                </h2>

                <div className="mt-8 space-y-4">
                  {blog.faqs.map((faq: any, index: number) => (
                    <details key={index} className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 open:bg-white">
                      <summary className="cursor-pointer list-none text-lg font-bold text-slate-950">
                        {faq.question}
                      </summary>

                      <p className="mt-4 leading-8 text-slate-600">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <CTASection cta={ctas[2]} />
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}