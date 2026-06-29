"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Dropdown } from "@/components/ui/Dropdown";
import { serviceData } from "@/lib/data/services";

// Define service categories for Services dropdown (links only)
// Get all services - ONLY title and slug, nothing else
const allServices = Object.keys(serviceData).map(slug => ({
  label: serviceData[slug].title,
  href: `/services/${slug}`,
}));

// Services dropdown - just one category with all services as simple links
const serviceCategories: DropdownSection[] = [
  {
    title: "All Services",
    href: "/services",
    description: "", // Empty description
    items: allServices
  }
];


// Define resource categories for Resources dropdown (cards with metrics)
const resourceCategories: DropdownSection[] = [
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "Real client projects, outcomes and success stories.",
    items: [
      {
        label: "FinTech Wealth Management Platform",
        href: "/case-studies/fintech-wealth-management-platform",
        tag: "FinTech",
        icon: "💰",
        description:
          "Built a scalable wealth management platform serving 50,000+ users",
        metrics: { users: "50K+", growth: "300%" },
      },
      {
        label: "HealthTech NHS Frailty Assessment",
        href: "/case-studies/healthtech-frailty-assessment-tool",
        tag: "HealthTech",
        icon: "🏥",
        description: "AI-powered frailty assessment tool for NHS hospitals",
        metrics: { patients: "10K+", accuracy: "95%" },
      },
      {
        label: "E-Commerce Platform Redesign",
        href: "/case-studies/ecommerce-revolution",
        tag: "E-Commerce",
        icon: "🛒",
        description: "Complete redesign increasing conversion by 45%",
        metrics: { revenue: "2.5M", conversion: "45%" },
      },
      {
        label: "SaaS Analytics Dashboard",
        href: "/case-studies/saas-analytics-dashboard",
        tag: "SaaS",
        icon: "📊",
        description: "Real-time analytics dashboard for enterprise clients",
        metrics: { speed: "10x faster", uptime: "99.99%" },
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
        href: "/blog/how-ai-is-changing-saas-products",
        tag: "Insight",
        icon: "✍️",
        description: "Exploring the impact of AI on modern SaaS development",
      },
      {
        label: "Modern web app architecture",
        href: "/blog/modern-web-app-architecture",
        tag: "Engineering",
        icon: "⚙️",
        description: "Best practices for building scalable web applications",
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
        href: "/faqs#timeline",
        tag: "Process",
        icon: "❓",
      },
      {
        label: "Do you work with startups?",
        href: "/faqs#startups",
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
        href: "/testimonials#delivery",
        tag: "Client",
        icon: "⭐",
      },
      {
        label: "Helped us launch faster",
        href: "/testimonials#launch",
        tag: "Review",
        icon: "💜",
      },
    ],
  },
];

export function Nav() {
  const router = useRouter();
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
        <Link href="/" className="flex items-center gap-2 text-ink">
          <span className="text-sm font-semibold tracking-wide">
            ClickMasters<span className="text-violet">.</span>
          </span>
        </Link>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-2 text-sm text-ink-soft md:flex transition-all duration-500 ${
            scrolled ? "glass" : "bg-transparent"
          }`}
        >
          {/* Solutions */}
          <Link
            href="/solutions"
            className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-ink"
          >
            Solutions
          </Link>

          {/* Services Dropdown - Clean text links in 2 columns */}
          <Dropdown
            trigger={
              <button className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-ink">
                Services <span className="ml-1">⌄</span>
              </button>
            }
            sections={serviceCategories}
            variant="links"
            layout="simple-grid" // Clean text links, 6 per column
            width="w-[580px]"
          />

          {/* Resources Dropdown - Cards */}
          <Dropdown
            trigger={
              <button className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-ink">
                Resources <span className="ml-1">⌄</span>
              </button>
            }
            sections={resourceCategories}
            variant="cards"
            width="w-[980px]"
          />

          {/* Technologies */}
          <Link
            href="/technologies"
            className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-ink"
          >
            Technologies
          </Link>
        </nav>

        <Link
          href="/contact"
          className="group relative inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Start a project
          <span className="inline-block transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </header>
  );
}
