// app/testimonials/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Twitter,
  Youtube,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  ThumbsUp,
  Award,
  MessageSquare,
  Play,
  Building2,
  Sparkles,
  Calendar,
  ExternalLink,
  ArrowUp,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Import images from your assets folder
import michelChen from "@/assets/testimonials/michel-chen.avif";
import jessica from "@/assets/testimonials/jessica.avif";
import williamsCarter from "@/assets/testimonials/williams carter.avif";
import sarahCarter from "@/assets/testimonials/sarah carter.avif";
import photo from "@/assets/testimonials/photo-1507003211169-0a1dd7228f2d.avif";
import emily from "@/assets/testimonials/emily.avif";

interface Testimonial {
  name: string;
  title: string;
  description: string;
  imageUrl: any;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
  rating?: number;
  company?: string;
  industry?: string;
  useCase?: string;
  featured?: boolean;
  date?: string;
  videoUrl?: string;
}

interface TestimonialStats {
  totalClients: number;
  satisfactionRate: number;
  averageRating: number;
  projectsDelivered: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Michael Chen",
    title: "Senior Software Engineer, Cloud Infrastructure",
    description:
      "Working with this team completely changed our infrastructure game. The support and expertise were incredible. They delivered beyond our expectations and helped us scale to millions of users.",
    imageUrl: michelChen,
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
    rating: 5,
    company: "CloudTech Inc.",
    industry: "Technology",
    useCase: "Infrastructure Scaling",
    featured: true,
    date: "2024-01-15",
  },
  {
    name: "Jessica Roberts",
    title: "Lead Data Scientist, InsightX",
    description:
      "The data analytics platform they built gave our team the confidence and tools needed for true data-driven decisions. Their dashboarding capabilities went above and beyond our expectations.",
    imageUrl: jessica,
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
    rating: 5,
    company: "InsightX Analytics",
    industry: "Data Science",
    useCase: "Analytics Platform",
    featured: true,
    date: "2024-02-01",
  },
  {
    name: "William Carter",
    title: "VP Product, NovaLabs",
    description:
      "NovaLabs helped our products find the perfect market fit. Their engineering team exceeded every delivery milestone and provided exceptional technical leadership.",
    imageUrl: williamsCarter,
    githubUrl: "#",
    twitterUrl: "#",
    youtubeUrl: "#",
    linkedinUrl: "#",
    rating: 5,
    company: "NovaLabs",
    industry: "Product Development",
    useCase: "Product Strategy",
    featured: true,
    date: "2024-02-15",
  },
  {
    name: "Sarah Johnson",
    title: "CTO, HealthTech Solutions",
    description:
      "Their expertise in healthcare technology was invaluable. They delivered a HIPAA-compliant platform that revolutionized how we handle patient data while maintaining the highest security standards.",
    imageUrl: sarahCarter,
    rating: 5,
    company: "HealthTech Solutions",
    industry: "Healthcare",
    useCase: "HIPAA Compliance",
    date: "2024-01-20",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "David Park",
    title: "VP Engineering, FinTech Innovations",
    description:
      "They built a robust financial platform that handles millions of transactions daily. Their attention to security and performance is unmatched in the industry.",
    imageUrl: photo,
    rating: 5,
    company: "FinTech Innovations",
    industry: "Fintech",
    useCase: "Financial Platform",
    date: "2024-02-10",
  },
  {
    name: "Emily Rodriguez",
    title: "Marketing Director, GrowthLab",
    description:
      "The marketing automation platform they developed increased our lead conversion by 150%. Their team understood our needs perfectly and delivered a solution that exceeded expectations.",
    imageUrl: emily,
    rating: 4,
    company: "GrowthLab",
    industry: "Marketing",
    useCase: "Marketing Automation",
    date: "2024-01-25",
  },
];

const stats: TestimonialStats = {
  totalClients: 500,
  satisfactionRate: 98,
  averageRating: 4.8,
  projectsDelivered: 1200,
};

const industries = ["all", ...new Set(testimonials.map((t) => t.industry).filter(Boolean))];

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % testimonials.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + testimonials.length) % testimonials.length
    );

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handle scroll for back to top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  const filteredTestimonials =
    activeFilter === "all"
      ? testimonials
      : testimonials.filter(
          (t) => t.industry === activeFilter || t.useCase === activeFilter
        );

  const socialIcons = [
    { icon: Github, url: currentTestimonial.githubUrl, label: "GitHub" },
    { icon: Twitter, url: currentTestimonial.twitterUrl, label: "Twitter" },
    { icon: Youtube, url: currentTestimonial.youtubeUrl, label: "YouTube" },
    { icon: Linkedin, url: currentTestimonial.linkedinUrl, label: "LinkedIn" },
  ];

  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "w-4 h-4",
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-ink-mute"
        )}
      />
    ));
  };

  const renderSmallStars = (rating: number = 5) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "w-3.5 h-3.5",
          i < Math.round(rating)
            ? "text-yellow-400 fill-yellow-400"
            : "text-ink-mute/30"
        )}
      />
    ));
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-linear-to-br from-violet/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-violet/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-violet/5 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-violet/10 text-violet px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Client Success Stories</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight mb-6">
              What Our Clients Say
            </h1>

            <p className="text-lg md:text-xl text-ink-soft mb-8 max-w-2xl mx-auto">
              Real stories from real people who transformed their businesses
              with our solutions
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { icon: Users, value: stats.totalClients, label: "Clients" },
                {
                  icon: ThumbsUp,
                  value: `${stats.satisfactionRate}%`,
                  label: "Satisfaction",
                },
                {
                  icon: Star,
                  value: stats.averageRating,
                  label: "Avg. Rating",
                },
                {
                  icon: Award,
                  value: stats.projectsDelivered,
                  label: "Projects",
                },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-surface-1 rounded-2xl p-4 border border-border"
                >
                  <stat.icon className="w-6 h-6 text-violet mx-auto mb-2" />
                  <div className="text-2xl font-bold text-ink">
                    {stat.value}
                  </div>
                  <div className="text-xs text-ink-mute">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-12 bg-surface-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink mb-2">
              Featured Testimonials
            </h2>
            <p className="text-ink-soft">
              Hear from our most satisfied clients
            </p>
          </div>

          {/* Desktop Carousel */}
          <div className="hidden md:flex relative items-center">
            {/* Avatar */}
            <div className="w-[400px] h-[400px] rounded-3xl overflow-hidden bg-surface-2 shrink-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.imageUrl}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={currentTestimonial.imageUrl}
                    alt={currentTestimonial.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    draggable={false}
                    priority
                    quality={90}
                  />
                  {currentTestimonial.featured && (
                    <div className="absolute top-4 left-4 bg-violet text-white text-xs font-medium px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Card */}
            <div className="bg-surface-1 rounded-3xl shadow-2xl p-8 -ml-15 z-10 max-w-xl flex-1 border border-border">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(currentTestimonial.rating)}
                  </div>

                  <div className="mb-4">
                    <h2 className="text-2xl font-bold text-ink">
                      {currentTestimonial.name}
                    </h2>
                    <p className="text-sm text-ink-soft">
                      {currentTestimonial.title}
                    </p>
                    {currentTestimonial.company && (
                      <p className="text-sm text-violet">
                        {currentTestimonial.company}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-ink-mute mb-4">
                    {currentTestimonial.industry && (
                      <span className="bg-surface-2 px-2 py-1 rounded-full">
                        {currentTestimonial.industry}
                      </span>
                    )}
                    {currentTestimonial.useCase && (
                      <span className="bg-surface-2 px-2 py-1 rounded-full">
                        {currentTestimonial.useCase}
                      </span>
                    )}
                  </div>

                  <p className="text-ink-soft text-base leading-relaxed mb-6">
                    &quot;{currentTestimonial.description}&quot;
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      {socialIcons.map(({ icon: IconComponent, url, label }) => (
                        <Link
                          key={label}
                          href={url || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-surface-2 rounded-full flex items-center justify-center transition-all hover:bg-violet/20 hover:scale-105"
                          aria-label={label}
                        >
                          <IconComponent className="w-4 h-4 text-ink" />
                        </Link>
                      ))}
                    </div>
                    {currentTestimonial.date && (
                      <div className="flex items-center gap-1 text-xs text-ink-mute">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(currentTestimonial.date)}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden max-w-sm mx-auto text-center">
            <div className="w-full aspect-square bg-surface-2 rounded-3xl overflow-hidden mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.imageUrl}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full relative"
                >
                  <Image
                    src={currentTestimonial.imageUrl}
                    alt={currentTestimonial.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    draggable={false}
                    priority
                    quality={90}
                  />
                  {currentTestimonial.featured && (
                    <div className="absolute top-4 left-4 bg-violet text-white text-xs font-medium px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="flex justify-center gap-1 mb-2">
                    {renderStars(currentTestimonial.rating)}
                  </div>

                  <h2 className="text-xl font-bold text-ink mb-1">
                    {currentTestimonial.name}
                  </h2>
                  <p className="text-sm text-ink-soft mb-1">
                    {currentTestimonial.title}
                  </p>
                  {currentTestimonial.company && (
                    <p className="text-sm text-violet mb-3">
                      {currentTestimonial.company}
                    </p>
                  )}

                  <p className="text-ink-soft text-sm leading-relaxed mb-4">
                    &quot;{currentTestimonial.description}&quot;
                  </p>

                  <div className="flex justify-center space-x-3">
                    {socialIcons.map(({ icon: IconComponent, url, label }) => (
                      <Link
                        key={label}
                        href={url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-surface-2 rounded-full flex items-center justify-center transition-all hover:bg-violet/20 hover:scale-105"
                        aria-label={label}
                      >
                        <IconComponent className="w-4 h-4 text-ink" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={() => {
                handlePrevious();
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 3000);
              }}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full bg-surface-1 border border-border shadow-soft flex items-center justify-center hover:bg-surface-2 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-ink" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, testimonialIndex) => (
                <button
                  key={testimonialIndex}
                  onClick={() => {
                    setCurrentIndex(testimonialIndex);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 3000);
                  }}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    testimonialIndex === currentIndex
                      ? "bg-violet w-8"
                      : "bg-ink-mute/30 hover:bg-ink-mute/50"
                  )}
                  aria-label={`Go to testimonial ${testimonialIndex + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                handleNext();
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 3000);
              }}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-surface-1 border border-border shadow-soft flex items-center justify-center hover:bg-surface-2 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-ink" />
            </button>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-12 bg-surface-1">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-ink mb-2">
              Video Testimonials
            </h2>
            <p className="text-ink-soft">
              See our clients share their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials
              .filter((t) => t.videoUrl)
              .map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="group relative aspect-video bg-surface-2 rounded-2xl overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-violet/30 to-purple-500/30 group-hover:from-violet/20 group-hover:to-purple-500/20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-white/80 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="py-12 bg-surface-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-ink">
                All Testimonials
              </h2>
              <p className="text-ink-soft">
                Read what our clients are saying
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              <button
                onClick={() => setActiveFilter("all")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeFilter === "all"
                    ? "bg-violet text-white shadow-lg shadow-violet/25"
                    : "bg-surface-1 text-ink-soft hover:bg-surface-2"
                )}
              >
                All
              </button>
              {industries
                .filter((i): i is string => i !== "all" && i !== undefined)
                .map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setActiveFilter(industry)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all",
                      activeFilter === industry
                        ? "bg-violet text-white shadow-lg shadow-violet/25"
                        : "bg-surface-1 text-ink-soft hover:bg-surface-2"
                    )}
                  >
                    {industry}
                  </button>
                ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-surface-1 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 overflow-hidden border border-border group"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-2 shrink-0">
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                          quality={80}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-ink text-sm">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-ink-mute line-clamp-1">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                    {testimonial.rating && (
                      <div className="flex">{renderStars(testimonial.rating)}</div>
                    )}
                  </div>

                  {/* Content */}
                  <p className="text-ink-soft text-sm leading-relaxed line-clamp-3">
                    &quot;{testimonial.description}&quot;
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
                    {testimonial.industry && (
                      <span className="text-xs bg-surface-2 text-ink-soft px-2 py-1 rounded-full">
                        {testimonial.industry}
                      </span>
                    )}
                    {testimonial.useCase && (
                      <span className="text-xs bg-surface-2 text-ink-soft px-2 py-1 rounded-full">
                        {testimonial.useCase}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                    <div className="flex items-center gap-2">
                      {testimonial.company && (
                        <span className="text-sm font-medium text-ink">
                          {testimonial.company}
                        </span>
                      )}
                    </div>
                    {testimonial.date && (
                      <span className="text-xs text-ink-mute">
                        {formatDate(testimonial.date)}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-ink-mute">
                No testimonials found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Industry-Specific Section with KPI Card Design Language */}
      <section className="py-12 bg-surface-1">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-violet/10 text-violet px-3 py-1 rounded-full text-xs font-medium mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>By Industry</span>
            </div>
            <h2 className="text-3xl font-bold text-ink mb-2">
              Testimonials by Industry
            </h2>
            <p className="text-ink-soft">
              See how different industries benefit from our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries
              .filter((i): i is string => i !== "all" && i !== undefined)
              .map((industry) => {
                const industryTestimonials = testimonials.filter(
                  (t) => t.industry === industry
                );
                if (industryTestimonials.length === 0) return null;

                // Calculate average rating for this industry
                const avgRating =
                  industryTestimonials.reduce((acc, t) => acc + (t.rating || 0), 0) /
                  industryTestimonials.length;

                return (
                  <div
                    key={industry}
                    className="group relative overflow-hidden rounded-xl bg-surface-0 border border-border shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {/* Subtle corner decorations (matching KPI Card) */}
                    <span className="pointer-events-none absolute -right-6 -top-6 inline-flex h-16 w-16 rounded-full bg-violet/5" />
                    <span className="pointer-events-none absolute -right-2 -top-2 inline-flex h-8 w-8 rounded-full bg-violet/5" />

                    <div className="p-6">
                      {/* Header with Industry Name and Count */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="rounded-lg bg-violet/10 p-2.5 text-violet transition-colors group-hover:bg-violet/20">
                            <Building2 className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-ink text-lg">
                              {industry}
                            </h3>
                            <p className="text-xs text-ink-mute">
                              {industryTestimonials.length} testimonials
                            </p>
                          </div>
                        </div>
                        {avgRating > 0 && (
                          <div className="flex items-center gap-1">
                            <div className="flex">
                              {renderSmallStars(avgRating)}
                            </div>
                            <span className="text-xs font-medium text-ink-soft ml-1">
                              {avgRating.toFixed(1)}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Testimonials */}
                      <div className="space-y-4 mt-2">
                        {industryTestimonials.slice(0, 2).map((t) => (
                          <blockquote
                            key={t.name}
                            className="relative pl-4 border-l-2 border-violet/40 hover:border-violet transition-colors"
                          >
                            {/* Quote icon (subtle) */}
                            <span className="absolute -left-1 -top-1 text-violet/20 text-xs">
                              "
                            </span>
                            <p className="text-sm text-ink-soft line-clamp-2 pl-1">
                              {t.description}
                            </p>
                            <footer className="flex items-center gap-2 mt-1.5">
                              <div className="w-5 h-5 rounded-full bg-surface-2 overflow-hidden shrink-0">
                                {t.imageUrl && (
                                  <Image
                                    src={t.imageUrl}
                                    alt={t.name}
                                    width={20}
                                    height={20}
                                    className="w-full h-full object-cover"
                                  />
                                )}
                              </div>
                              <span className="text-xs font-medium text-ink-mute">
                                {t.name}
                              </span>
                              {t.company && (
                                <>
                                  <span className="text-ink-mute/30">•</span>
                                  <span className="text-xs text-ink-mute/60">
                                    {t.company}
                                  </span>
                                </>
                              )}
                            </footer>
                          </blockquote>
                        ))}
                      </div>

                      {/* Bottom bar (matching KPI Card) */}
                      <div className="bg-violet/20 mt-4 h-0.5 w-16 rounded opacity-60 group-hover:w-24 transition-all duration-300" />

                      {/* View all link (subtle) */}
                      <button
                        onClick={() => setActiveFilter(industry)}
                        className="mt-3 text-xs text-ink-mute hover:text-violet transition-colors flex items-center gap-1 group-hover:gap-2"
                      >
                        View all {industryTestimonials.length} testimonials
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-br from-violet to-purple-800 text-ink">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-surface-1/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" />
            <span>Share Your Experience</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg text-ink-soft/80 mb-8 max-w-2xl mx-auto">
            Have you had a great experience with us? We&apos;d love to hear your
            story and feature it here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/submit-testimonial"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-surface-1 text-violet font-semibold rounded-full hover:bg-surface-1/90 transition-all duration-200 shadow-soft hover:shadow-xl"
            >
              <MessageSquare className="w-5 h-5" />
              Submit Your Testimonial
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border/30 text-ink font-semibold rounded-full hover:bg-surface-1/10 transition-all duration-200"
            >
              <ExternalLink className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-8 p-3 bg-surface-1 rounded-full shadow-soft border border-border hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
        >
          <ArrowUp className="w-5 h-5 text-ink" />
        </button>
      )}
    </div>
  );
}
