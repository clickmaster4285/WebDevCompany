"use client";

import { technologies } from "@/data/technologies";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight} from "lucide-react";
import { Dropdown, DropdownSection } from "@/components/ui/Dropdown";
import { serviceData } from "@/data/services";
import { caseStudies } from "@/data/case-studies";
import { blogs } from "@/data/blogs";
import { faqPages } from "@/data/faq-pages";
import { testimonials } from "@/data/resources/testimonials/testimonials";


const allServices = Object.keys(serviceData).map((slug) => ({
  label: serviceData[slug].title,
  href: `/${slug}`,
}));

const serviceCategories: DropdownSection[] = [
  {
    title: "All Services",
    href: "/services",
    description: "",
    items: allServices,
  },
];

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
      icon: "✍️",
      description: blog.excerpt || "",
    })),
  },
{
  title: "FAQs",
  href: "/faqs",
  description: "Common questions about our process and services.",
  items: faqPages.slice(0, 2).map((faq) => ({
    label:
      faq.page.title.length > 60
        ? `${faq.page.title.slice(0, 60)}...`
        : faq.page.title,
    href: `/faqs/${faq.slug}`,
    tag: "FAQ",
    icon: "❓",
    description: `${faq.aboveTheFold.directAnswer.slice(0, 80)}...`,
  })),
},
  {
    title: "Testimonials",
    href: "/testimonials",
    description: "Client feedback and stories from successful projects.",
    items: testimonials.slice(0, 2).map((testimonial) => ({
      label: testimonial.name,
      href: `/testimonials#${testimonial.name
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
      tag: testimonial.industry || "Client",
      icon: "⭐",
      description: `${testimonial.description.slice(0, 80)}...`,
      metrics: {
        ...(testimonial.company && { Company: testimonial.company }),
        ...(testimonial.rating && { Rating: `${testimonial.rating}/5` }),
      },
    })),
  },
];

const technologiesCategories: DropdownSection[] = [
  {
    title: "Technologies",
    href: "/technologies",
    description: "Explore the technologies we use to build modern products.",
    items: technologies.map((technology) => ({
      label: technology.title,
      href: `/technologies/${technology.slug}`,
      tag: technology.category,
      icon: technology.icon || "⚙️",
      description: technology.excerpt,
    })),
  },
];

const industriesCategories: DropdownSection[] = [
  {
    title: "Industries",
    href: "/industries",
    description: "Industry-specific web development solutions",
    items: [
      {
        label: "Healthcare Web Development",
        href: "/industries/healthcare-web-development",
      },
      {
        label: "Law Firm Web Development",
        href: "/industries/law-firm-web-development",
      },
      {
        label: "Real Estate Web Development",
        href: "/industries/real-estate-web-development",
      },
      {
        label: "Fintech & Financial Services Web Development",
        href: "/industries/fintech-web-development",
      },
      {
        label: "SaaS & Tech Web Development",
        href: "/industries/saas-web-development",
      },
      {
        label: "Manufacturing Web Development",
        href: "/industries/manufacturing-web-development",
      },
      {
        label: "eCommerce & Retail Web Development",
        href: "/industries/ecommerce-web-development",
      },
      {
        label: "Hospitality Web Development",
        href: "/industries/hospitality-web-development",
      },
      {
        label: "Education Web Development",
        href: "/industries/education-web-development",
      },
      {
        label: "Dental Web Development",
        href: "/industries/dental-web-development",
      },
      {
        label: "Construction Web Development",
        href: "/industries/construction-web-development",
      },
      {
        label: "Nonprofit Web Development",
        href: "/industries/nonprofit-web-development",
      },
    ],
  },
];

function DropdownTrigger({ label }: { label: string }) {
  return (
    <button className="inline-flex items-center rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-ink">
      {label}
      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
    </button>
  );
}

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
          <Link
            href="/solutions"
            className="rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-ink"
          >
            Solutions
          </Link>

          <Dropdown
            trigger={<DropdownTrigger label="Services" />}
            sections={serviceCategories}
            variant="links"
            layout="simple-grid"
            width="w-[500px]"
            showViewAll={false}
            showSidebar={false}
          />

          <Dropdown
            trigger={<DropdownTrigger label="Resources" />}
            sections={resourceCategories}
            variant="cards"
            width="w-[980px]"
            showViewAll={true}
            showSidebar={true}
          />

          <Dropdown
            trigger={<DropdownTrigger label="Technologies" />}
            sections={technologiesCategories}
            variant="links"
            layout="simple-grid"
            width="w-[580px]"
            showViewAll={true}
            showSidebar={false}
          />

          <Dropdown
            trigger={<DropdownTrigger label="Industries" />}
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
  className="group relative inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5"
>
  <span>Start a project</span>

  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>
      </div>
    </header>
  );
}