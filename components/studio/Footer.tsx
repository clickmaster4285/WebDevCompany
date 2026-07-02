"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import footerImg from "@/public/assets/footer.png";
import Image from "next/image";

export function Footer() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/8 bg-surface-1 py-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 text-ink">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="shrink-0"
              >
           <Image
  src={footerImg}
  alt=""
  aria-hidden="true"
  width={64}
  height={64}
  className="h-auto w-16 object-contain"
/>
              </motion.div>

              <span className="text-3xl font-semibold tracking-wide sm:text-xl">
                ClickMasters<span className="text-violet">.</span>
              </span>
            </Link>

            <p className="mt-6 max-w-xs text-sm text-ink-mute">
              A premium web development studio crafting cinematic digital
              products.
            </p>

            {/* Social/Trust Badge */}
            <div className="mt-6 flex items-center gap-2 text-xs text-ink-mute">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-violet" />
              Currently accepting two new projects
            </div>
          </div>

          {/* Company Column */}
          <div>
            <div className="text-xs uppercase tracking-widest text-ink-mute">
              Company
            </div>
            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              <li>
                <Link href="/" className="transition-colors hover:text-violet-soft">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-violet-soft">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-violet-soft">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="transition-colors hover:text-violet-soft">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <div className="text-xs uppercase tracking-widest text-ink-mute">
              Services
            </div>
            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              <li>
                <Link href="/services/web-development-services" className="transition-colors hover:text-violet-soft">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-design-services" className="transition-colors hover:text-violet-soft">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/web-application-development" className="transition-colors hover:text-violet-soft">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-development" className="transition-colors hover:text-violet-soft">
                  eCommerce Development
                </Link>
              </li>
              <li>
                <Link href="/services/saas-development" className="transition-colors hover:text-violet-soft">
                  SaaS Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <div className="text-xs uppercase tracking-widest text-ink-mute">
              Industries
            </div>
            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              <li>
                <Link href="/industries/healthcare-web-development" className="transition-colors hover:text-violet-soft">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries/fintech-web-development" className="transition-colors hover:text-violet-soft">
                  Fintech
                </Link>
              </li>
              <li>
                <Link href="/industries/ecommerce-web-development" className="transition-colors hover:text-violet-soft">
                  eCommerce & Retail
                </Link>
              </li>
              <li>
                <Link href="/industries/saas-web-development" className="transition-colors hover:text-violet-soft">
                  SaaS & Tech
                </Link>
              </li>
              <li>
                <Link href="/industries/real-estate-web-development" className="transition-colors hover:text-violet-soft">
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Technologies Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-xs uppercase tracking-widest text-ink-mute">
              Resources
            </div>
            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              <li>
                <Link href="/case-studies" className="transition-colors hover:text-violet-soft">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="transition-colors hover:text-violet-soft">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="transition-colors hover:text-violet-soft">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="transition-colors hover:text-violet-soft">
                  Testimonials
                </Link>
              </li>
            </ul>

            {/* Technologies Sub-section */}
            <div className="mt-6 text-xs uppercase tracking-widest text-ink-mute">
              Technologies
            </div>
            <ul className="mt-3 space-y-3 text-sm text-ink-soft">
              <li>
                <Link href="/technologies" className="transition-colors hover:text-violet-soft">
                  Our Tech Stack
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Scroll to Top Button */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-8 text-xs text-ink-mute">
          <div>
            © {new Date().getFullYear()} ClickMasters. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            {/* Social/Trust Badge */}
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-violet" />
              Available for projects
            </span>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="group flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-ink-soft transition-all hover:bg-violet hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to Top</span>
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}