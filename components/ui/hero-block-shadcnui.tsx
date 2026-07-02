// components/ui/hero-block-shadcnui.tsx

"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

interface HeroBlockProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  primaryCTALink?: string;
  secondaryCTALink?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
  avatarImage?: string;
}

export function HeroBlock({
  title = "Full Stack Developer",
  subtitle = "Crafting beautiful, performant web applications with modern technologies. Passionate about clean code and exceptional user experiences.",
  primaryCTA = "Get in Touch",
  secondaryCTA = "View Projects",
  primaryCTALink = "#contact",
  secondaryCTALink = "#projects",
  socialLinks = {
    github: "#",
    linkedin: "#",
    email: "#",
  },
  avatarImage,
}: HeroBlockProps) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-background min-h-screen w-full">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 inline-block"
          >
            <div className="mx-auto h-24 w-24 rounded-full border-4 border-background bg-gradient-to-br from-primary to-muted shadow-lg overflow-hidden">
              {avatarImage ? (
                <img
                  src={avatarImage}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-4xl font-bold text-white">
                  {title.charAt(0)}
                </div>
              )}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-5xl font-bold text-foreground md:text-7xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground md:text-2xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12 flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="gap-2" asChild>
              <a href={primaryCTALink}>
                <Mail className="h-4 w-4" />
                {primaryCTA}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href={secondaryCTALink}>
                View Projects
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.github && (
              <motion.a
                href={socialLinks.github}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-5 w-5" />
              </motion.a>
            )}
            {socialLinks.linkedin && (
              <motion.a
                href={socialLinks.linkedin}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            )}
            {socialLinks.email && (
              <motion.a
                href={`mailto:${socialLinks.email}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}