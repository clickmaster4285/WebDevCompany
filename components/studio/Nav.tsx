"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Dropdown, DropdownSection } from "@/components/ui/Dropdown";
import { serviceData } from "@/data/services";
import { caseStudies } from "@/data/case-studies";
import { blogs } from "@/data/blogs";
import { faqs, getFAQIcon } from "@/data/faqs";
import { testimonials } from "@/data/resources/testimonials/testimonials";

// Define service categories for Services dropdown (links only)
// Get all services - ONLY title and slug, nothing else
const allServices = Object.keys(serviceData).map((slug) => ({
  label: serviceData[slug].title,
  href: `/${slug}`,
}));

// Services dropdown - just one category with all services as simple links
const serviceCategories: DropdownSection[] = [
  {
    title: "All Services",
    href: "/services",
    description: "", // Empty description
    items: allServices,
  },
];

// Define resource categories for Resources dropdown (cards with metrics)
const resourceCategories: DropdownSection[] = [
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "Real client projects, outcomes and success stories.",
    items: caseStudies.slice(0, 2).map((study) => ({
      label: study.title,
      href: `/case-studies/${study.slug}`,
      tag: study.category,
      icon: study.icon,
      description: study.description,
      metrics: {
        ...(study.results &&
          study.results.length > 0 && {
            "Key Result": study.results[0].replace(/^[^-]*-/, "").trim(),
          }),
        ...(study.projectDetails && {
          Status: study.projectDetails.status,
        }),
      },
    })),
  },
  {
    title: "Blogs",
    href: "/blogs",
    description: "Latest insights, ideas, updates and industry articles.",
    items: blogs.slice(0, 2).map((blog) => ({
      label: blog.title,
      href: `/blogs/${blog.slug}`,
      tag: blog.category || "Insight",
      icon: blog.icon || "✍️",
      description: blog.excerpt || blog.description || "",
    })),
  },
  {
    title: "FAQs",
    href: "/faqs",
    description: "Common questions about our process and services.",
    items: faqs.slice(0, 2).map((faq) => ({
      label: faq.question.length > 60 ? faq.question.slice(0, 60) + "..." : faq.question,
      href: `/faqs#faq-item-${faqs.indexOf(faq)}`,
      tag: faq.meta,
      icon: getFAQIcon(faq.meta),
      description: faq.answer.slice(0, 80) + "...",
    })),
  },
  {
    title: "Testimonials",
    href: "/testimonials",
    description: "Client feedback and stories from successful projects.",
    items: testimonials.slice(0, 2).map((testimonial) => ({
      label: testimonial.name,
      href: `/testimonials#${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`,
      tag: testimonial.industry || "Client",
      icon: "⭐",
      description: testimonial.description.slice(0, 80) + "...",
      metrics: {
        ...(testimonial.company && { "Company": testimonial.company }),
        ...(testimonial.rating && { "Rating": `${testimonial.rating}/5` }),
      }
    })),
  },
];

const technologiesCategories: DropdownSection[] = [
  {
    title: "Technologies",
    href: "/technologies",
    description: "Modern frontend technologies and frameworks",
    items: [
      { label: "React", href: "/technologies/react" },
      { label: "Next.js", href: "/technologies/nextjs" },
      { label: "TypeScript", href: "/technologies/typescript" },
      { label: "Tailwind CSS", href: "/technologies/tailwind" },
      { label: "Vue.js", href: "/technologies/vue" },
      { label: "Angular", href: "/technologies/angular" },
    ],
  },
];

// Industries data - single category like Technologies
const industriesCategories: DropdownSection[] = [
  {
    title: "Industries",
    href: "/industries",
    description: "Industry-specific web development solutions",
    items: [
      { label: "Healthcare Web Development", href: "/industries/healthcare-web-development" },
      { label: "Law Firm Web Development", href: "/industries/law-firm-web-development" },
      { label: "Real Estate Web Development", href: "/industries/real-estate-web-development" },
      { label: "Fintech & Financial Services Web Development", href: "/industries/fintech-web-development" },
      { label: "SaaS & Tech Web Development", href: "/industries/saas-web-development" },
      { label: "Manufacturing Web Development", href: "/industries/manufacturing-web-development" },
      { label: "eCommerce & Retail Web Development", href: "/industries/ecommerce-web-development" },
      { label: "Hospitality Web Development", href: "/industries/hospitality-web-development" },
      { label: "Education Web Development", href: "/industries/education-web-development" },
      { label: "Dental Web Development", href: "/industries/dental-web-development" },
      { label: "Construction Web Development", href: "/industries/construction-web-development" },
      { label: "Nonprofit Web Development", href: "/industries/nonprofit-web-development" },
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
          className={`hidden items-center gap-1 rounded-full px-2 py-2 text-sm text-ink-soft transition-all duration-500 md:flex ${
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

          {/* Services Dropdown - No Sidebar, No View All */}
          <Dropdown
            trigger={
              <button className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-ink">
                Services <span className="ml-1">⌄</span>
              </button>
            }
            sections={serviceCategories}
            variant="links"
            layout="simple-grid"
            width="w-[500px]"
            showViewAll={false}
            showSidebar={false}
          />

          {/* Resources Dropdown - With Sidebar, With View All */}
          <Dropdown
            trigger={
              <button className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-ink">
                Resources <span className="ml-1">⌄</span>
              </button>
            }
            sections={resourceCategories}
            variant="cards"
            width="w-[980px]"
            showViewAll={true}
            showSidebar={true}
          />

          {/* Technologies Dropdown - No Sidebar, With View All */}
          <Dropdown
            trigger={
              <button className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-ink">
                Technologies <span className="ml-1">⌄</span>
              </button>
            }
            sections={technologiesCategories}
            variant="links"
            layout="simple-grid"
            width="w-[580px]"
            showViewAll={true}
            showSidebar={false}
          />
          {/* industries Dropdown - No Sidebar, With View All */}
          <Dropdown
            trigger={
              <button className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-ink">
                Industries <span className="ml-1">⌄</span>
              </button>
            }
            sections={industriesCategories}
            variant="links"
            layout="simple-grid"
            width="w-[580px]"
            showViewAll={true}
            showSidebar={false}
          />
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