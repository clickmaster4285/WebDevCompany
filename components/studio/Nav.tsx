"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Define the case studies data with proper slugs
const caseStudiesData = [
  {
    id: "1",
    slug: "fintech-wealth-management-platform",
    label: "FinTech Wealth Management Platform",
    tag: "FinTech",
    icon: "💰",
    description: "Built a scalable wealth management platform serving 50,000+ users",
    metrics: { users: "50K+", growth: "300%" }
  },
  {
    id: "2",
    slug: "healthtech-frailty-assessment-tool",
    label: "HealthTech NHS Frailty Assessment",
    tag: "HealthTech",
    icon: "🏥",
    description: "AI-powered frailty assessment tool for NHS hospitals",
    metrics: { patients: "10K+", accuracy: "95%" }
  },
  {
    id: "3",
    slug: "ecommerce-revolution",
    label: "E-Commerce Platform Redesign",
    tag: "E-Commerce",
    icon: "🛒",
    description: "Complete redesign increasing conversion by 45%",
    metrics: { revenue: "2.5M", conversion: "45%" }
  },
  {
    id: "4",
    slug: "saas-analytics-dashboard",
    label: "SaaS Analytics Dashboard",
    tag: "SaaS",
    icon: "📊",
    description: "Real-time analytics dashboard for enterprise clients",
    metrics: { speed: "10x faster", uptime: "99.99%" }
  }
];

// Blog data with slugs
const blogData = [
  {
    id: "1",
    slug: "how-ai-is-changing-saas-products",
    label: "How AI is changing SaaS products",
    tag: "Insight",
    icon: "✍️",
    description: "Exploring the impact of AI on modern SaaS development"
  },
  {
    id: "2",
    slug: "modern-web-app-architecture",
    label: "Modern web app architecture",
    tag: "Engineering",
    icon: "⚙️",
    description: "Best practices for building scalable web applications"
  }
];

const resourceCategories = [
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "Real client projects, outcomes and success stories.",
    items: caseStudiesData.map(cs => ({
      label: cs.label,
      tag: cs.tag,
      icon: cs.icon,
      slug: cs.slug,
      description: cs.description,
      metrics: cs.metrics
    }))
  },
  {
    title: "Blogs",
    href: "/blog",
    description: "Latest insights, ideas, updates and industry articles.",
    items: blogData.map(blog => ({
      label: blog.label,
      tag: blog.tag,
      icon: blog.icon,
      slug: blog.slug,
      description: blog.description
    }))
  },
  {
    title: "FAQs",
    href: "/faqs",
    description: "Common questions about our process and services.",
    items: [
      {
        label: "How long does a project take?",
        tag: "Process",
        icon: "❓",
        slug: "#"
      },
      {
        label: "Do you work with startups?",
        tag: "Support",
        icon: "💬",
        slug: "#"
      },
    ],
  },
  {
    title: "Testimonials",
    href: "/testimonials",
    description: "Client feedback and stories from successful projects.",
    items: [
      {
        label: "Amazing delivery and communication",
        tag: "Client",
        icon: "⭐",
        slug: "#"
      },
      {
        label: "Helped us launch faster",
        tag: "Review",
        icon: "💜",
        slug: "#"
      },
    ],
  },
];

const resourceCategories = [
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "Real client projects, outcomes and success stories.",
    items: [
      {
        label: "FinTech Wealth Management Platform",
        tag: "FinTech",
        icon: "💰",
      },
      {
        label: "HealthTech NHS Frailty Assessment",
        tag: "HealthTech",
        icon: "🏥",
      },
    ],
  },
  {
    title: "Blogs",
    href: "/blogs",
    description: "Latest insights, ideas, updates and industry articles.",
    items: [
      {
        label: "How AI is changing SaaS products",
        tag: "Insight",
        icon: "✍️",
      },
      {
        label: "Modern web app architecture",
        tag: "Engineering",
        icon: "⚙️",
      },
    ],
  },
  {
    title: "FAQs",
    href: "/faqs",
    description: "Common questions about our process and services.",
    items: [
      {
        label: "How long does a project take?",
        tag: "Process",
        icon: "❓",
      },
      {
        label: "Do you work with startups?",
        tag: "Support",
        icon: "💬",
      },
    ],
  },
  {
    title: "Testimonials",
    href: "/testimonials",
    description: "Client feedback and stories from successful projects.",
    items: [
      {
        label: "Amazing delivery and communication",
        tag: "Client",
        icon: "⭐",
      },
      {
        label: "Helped us launch faster",
        tag: "Review",
        icon: "💜",
      },
    ],
  },
];

export function Nav() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [activeResource, setActiveResource] = useState(resourceCategories[0]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle navigation to case study or blog
  const handleItemClick = (category: string, slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (slug && slug !== "#") {
      // Navigate to the specific slug
      if (category === "Case Studies") {
        router.push(`/case-studies/${slug}`);
      } else if (category === "Blogs") {
        router.push(`/blog/${slug}`);
      }
    }
  };

  // Handle "View All" click
  const handleViewAll = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (href && href !== "#") {
      router.push(href);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a href="/" className="flex items-center gap-2 text-ink">
          <span className="text-sm font-semibold tracking-wide">
            ClickMasters<span className="text-violet">.</span>
          </span>
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-2 text-sm text-ink-soft md:flex transition-all duration-500 ${
            scrolled ? "glass" : "bg-transparent"
          }`}
        >
          <a
            href="#story"
            className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-ink"
          >
            Studio
          </a>

          <a
            href="#services"
            className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-ink"
          >
            Services
          </a>

          <a
            href="#work"
            className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-ink"
          >
            Work
          </a>

          <div className="group relative">
            <button className="rounded-full px-4 py-2 text-violet transition-colors hover:bg-white/5 hover:text-ink">
              Resources <span className="ml-1">⌄</span>
            </button>

            <div className="invisible absolute left-1/2 top-full mt-4 w-[980px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="grid max-h-[420px] grid-cols-[300px_1fr] overflow-hidden rounded-2xl">
                {/* Left sidebar - Categories */}
                <div className="bg-slate-100 p-6">
                  <h3 className="text-xl font-bold text-slate-950">
                    Resources
                  </h3>

                  <div className="mt-5 space-y-3">
                    {resourceCategories.map((category) => {
                      const isActive =
                        activeResource.title === category.title;

                      return (
                        <a
                          key={category.title}
                          href={category.href}
                          onMouseEnter={() => setActiveResource(category)}
                          onClick={(e) => {
                            e.preventDefault();
                            if (category.href && category.href !== "#") {
                              router.push(category.href);
                            }
                          }}
                          className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition ${
                            isActive
                              ? "bg-violet text-white shadow-lg shadow-violet/20"
                              : "text-slate-700 hover:bg-white hover:text-violet"
                          }`}
                        >
                          <span>{category.title}</span>
                          <span>›</span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Right content - Items grid */}
                <div className="p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-violet">
                        {activeResource.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {activeResource.description}
                      </p>
                    </div>

                    <a
                      href={activeResource.href}
                      onClick={(e) => handleViewAll(activeResource.href, e)}
                      className="flex items-center gap-2 text-sm font-medium text-violet hover:underline"
                    >
                      View All <span>›</span>
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {activeResource.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.slug && item.slug !== "#" 
                          ? `/${activeResource.title.toLowerCase().replace(" ", "-")}/${item.slug}`
                          : "#"
                        }
                        onClick={(e) => {
                          if (item.slug && item.slug !== "#") {
                            handleItemClick(activeResource.title, item.slug, e);
                          } else {
                            e.preventDefault();
                          }
                        }}
                        onMouseEnter={() => setHoveredItem(item.label)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 ${
                          hoveredItem === item.label 
                            ? "shadow-lg scale-[1.02] border-violet/20" 
                            : "hover:shadow-md"
                        }`}
                      >
                        <div className="relative h-36 bg-slate-100 p-4">
                          <span className="rounded-full bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
                            • {item.tag}
                          </span>

                          <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-white text-3xl shadow-md">
                            {item.icon}
                          </div>

                          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-violet/10" />
                          <div className="absolute bottom-5 left-10 h-16 w-16 rounded-full bg-slate-200/70" />
                        </div>

                        <div className="p-4">
                          <h4 className="line-clamp-2 text-sm font-bold text-slate-900">
                            {item.label}
                          </h4>

                          {item.description && (
                            <p className="mt-1 text-xs text-slate-500 line-clamp-1">
                              {item.description}
                            </p>
                          )}

                          {/* Show metrics for case studies */}
                          {item.metrics && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {Object.entries(item.metrics).map(([key, value]) => (
                                <span 
                                  key={key}
                                  className="inline-flex items-center gap-1 rounded-full bg-violet/10 px-2 py-0.5 text-xs font-medium text-violet"
                                >
                                  {value}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="mt-2 flex items-center justify-between">
                            <span className="text-xs text-slate-400">
                              Click to read more →
                            </span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#process"
            className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-ink"
          >
            Process
          </a>

          <a
            href="#stack"
            className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-ink"
          >
            Stack
          </a>
        </nav>

        <Link
          href="/#contact"
          className="group relative inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Start a project
          <span className="inline-block transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </header>
  );
}