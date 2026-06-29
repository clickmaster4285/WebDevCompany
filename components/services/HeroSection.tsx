// components/services/HeroSection.tsx

"use client";

import { useEffect, useRef, useCallback } from "react";
import {
  motion,
  useReducedMotion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Code2,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

export interface HeroData {
  heading: string;
  subheading: string;
  primaryCTA: string;
  secondaryCTA: string;
  primaryCTALink?: string;
  secondaryCTALink?: string;
  socialProof?: string;
}

interface HeroSectionProps {
  data: HeroData;
  slug?: string;
  showSocial?: boolean;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  avatarImage?: string;
}

// components/services/HeroSection.tsx

const getBadgeText = (slug: string | undefined): string => {
  if (!slug) return "Trusted Partner";

  const badges: Record<string, string> = {
    // ✅ Existing services
    "web-development-services": "Web Experts",
    "enterprise-web-development": "Enterprise Grade",
    "saas-development": "SaaS Ready",
    "ecommerce-development": "Revenue Engine",
    "shopify-development": "Shopify Expert",
    "wordpress-development": "WordPress Pro",
    "web-design-services": "Design Excellence",
    "custom-web-development": "Bespoke Solutions",
    "web-application-development": "Built to Scale",
    
    // ✅ NEW SERVICES - Add these
    "shopify-plus-development": "Shopify Plus Expert",
    "woocommerce-development": "WooCommerce Pro",
    "magento-development": "Magento Enterprise",
    "headless-commerce-development": "Headless Commerce",
    "cms-development": "CMS Specialist",
    "ai-web-development": "AI Innovation",
    "ai-chatbot-development": "AI Chatbot Expert",
    "api-development": "API Architecture",
    "website-redesign-services": "Redesign Pro",
    "website-speed-optimization": "Speed Optimizer",
    "website-maintenance-services": "Maintenance Pro",
    "full-stack-development": "Full-Stack Experts",
  };

  // Direct match first
  if (badges[slug]) return badges[slug];

  // Fallback partial matches
  for (const [key, value] of Object.entries(badges)) {
    if (slug.includes(key.replace(/-/g, ''))) return value;
  }
  
  return "Trusted Partner";
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const stats = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Client Retention", value: "95%" },
  { label: "Uptime Guaranteed", value: "99.9%" },
];

const features = [
  { icon: Code2, label: "Clean Code" },
  { icon: Zap, label: "Performance" },
  { icon: Shield, label: "Secure" },
  { icon: Globe, label: "SEO Ready" },
];

export function HeroSection({
  data,
  slug,
  showSocial = false,
  socialLinks = {},
}: HeroSectionProps) {
  const badgeText = getBadgeText(slug);
  const shouldReduceMotion = useReducedMotion();

  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // ✅ FIXED: Use a ref to store the handler
  const handleMouseMoveRef = useRef<(event: MouseEvent) => void>();

  useEffect(() => {
    // Define the handler inside the effect
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    };

    // Store in ref for cleanup if needed
    handleMouseMoveRef.current = handleMouseMove;

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]); // ✅ Only depend on mouseX and mouseY

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      var(--color-primary) / 0.12,
      transparent 80%
    )
  `;

  const words = data.heading.trim().split(/\s+/).filter(Boolean);
  const hasMultipleWords = words.length > 1;
  const leadWords = hasMultipleWords ? words.slice(0, -1).join(" ") : "";
  const lastWord = hasMultipleWords ? words.at(-1) : data.heading;

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-surface-0 px-4 py-20 md:px-6"
    >
      {/* Background grid */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Noise texture */}
      <div
        aria-hidden
        className="grain-after absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient orbs */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -right-40 h-125 w-125 rounded-full bg-violet/20 blur-[120px]"
        animate={
          shouldReduceMotion
            ? {}
            : { scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -left-40 h-150 w-150 rounded-full bg-violet/10 blur-[140px]"
        animate={
          shouldReduceMotion
            ? {}
            : { scale: [1, 1.18, 1], opacity: [0.3, 0.6, 0.3] }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Mouse spotlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlightBackground }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex max-w-5xl flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-1/50 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-ink-soft backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-violet" />
          </span>
          {badgeText}
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-display text-4xl leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {hasMultipleWords ? (
            <>
              {leadWords}{" "}
              <span className="bg-linear-to-r from-violet to-violet-soft bg-clip-text text-transparent">
                {lastWord}
              </span>
            </>
          ) : (
            <span className="bg-linear-to-r from-violet to-violet-soft bg-clip-text text-transparent">
              {lastWord}
            </span>
          )}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-base text-ink-soft sm:text-lg md:text-xl"
        >
          {data.subheading}
        </motion.p>

        {/* Feature pills */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {features.map((feature) => (
            <span
              key={feature.label}
              className="flex items-center gap-1.5 rounded-full border border-border bg-surface-1/50 px-3 py-1 text-xs text-ink-soft backdrop-blur-sm transition-colors hover:border-violet/30 hover:bg-violet/5 sm:text-sm"
            >
              <feature.icon className="h-3.5 w-3.5 text-violet" />
              {feature.label}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <motion.a
            href={data.primaryCTALink ?? "#contact"}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-violet px-6 py-3 text-sm font-medium text-white shadow-violet-glow transition-all hover:bg-violet/90 hover:shadow-lg sm:px-8 sm:py-3.5 sm:text-base"
            whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
          >
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            {data.primaryCTA}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </motion.a>

          <motion.a
            href={data.secondaryCTALink ?? "#projects"}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-1/50 px-6 py-3 text-sm font-medium text-ink-soft backdrop-blur-sm transition-all hover:border-violet/30 hover:bg-violet/5 hover:text-ink sm:px-8 sm:py-3.5 sm:text-base"
            whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
          >
            {data.secondaryCTA}
            <ChevronDown className="h-4 w-4" />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-border pt-8 sm:gap-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block text-2xl font-semibold text-ink sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-0.5 block text-xs text-ink-mute sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Socials */}
        {showSocial && (
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-3"
          >
            {[
              { key: "github", icon: Github, href: socialLinks.github },
              { key: "linkedin", icon: Linkedin, href: socialLinks.linkedin },
              { key: "email", icon: Mail, href: socialLinks.email },
            ]
              .filter((s) => s.href)
              .map((s) => (
                <motion.a
                  key={s.key}
                  href={s.key === "email" ? `mailto:${s.href}` : s.href}
                  target={s.key === "email" ? undefined : "_blank"}
                  rel={s.key === "email" ? undefined : "noreferrer"}
                  aria-label={s.key}
                  className="rounded-full border border-border bg-surface-1/50 p-2.5 text-ink-mute backdrop-blur-sm transition-colors hover:border-violet/30 hover:bg-violet/5 hover:text-ink"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                >
                  <s.icon className="h-4 w-4" />
                </motion.a>
              ))}
          </motion.div>
        )}
      </motion.div>

      {/* Floating code mockup */}
      <motion.div
        aria-hidden
        className="absolute right-8 bottom-8 hidden w-64 overflow-hidden rounded-lg border border-border bg-surface-1/80 backdrop-blur-xl lg:block"
        initial={{ opacity: 0, y: 40, rotate: 6 }}
        animate={
          shouldReduceMotion
            ? { opacity: 0.7, y: 0, rotate: 6 }
            : { opacity: 0.8, y: 0, rotate: 6 }
        }
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="space-y-0.5 p-4 font-mono text-[10px] leading-5 text-ink-soft/70">
          <div>
            <span className="text-violet">const</span>{" "}
            <span className="text-ink">launchProject</span>{" "}
            <span className="text-ink-soft/50">=</span>{" "}
            <span className="text-violet">async</span>{" "}
            <span className="text-ink-soft/50">()</span>{" "}
            <span className="text-violet">=&gt;</span>{" "}
            <span className="text-ink-soft/50">{"{"}</span>
          </div>
          <div className="pl-3">
            <span className="text-violet">await</span>{" "}
            <span className="text-ink">build</span>
            <span className="text-ink-soft/50">();</span>
          </div>
          <div className="pl-3">
            <span className="text-violet">await</span>{" "}
            <span className="text-ink">deploy</span>
            <span className="text-ink-soft/50">();</span>
          </div>
          <div className="pl-3">
            <span className="text-violet">return</span>{" "}
            <span className="text-emerald-400">success</span>
            <span className="text-ink-soft/50">;</span>
          </div>
          <div className="text-ink-soft/50">{"}"};</div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-mute lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs uppercase tracking-widest">
          Scroll to explore
        </span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}