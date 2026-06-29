// app/ClientWrapper.tsx
"use client";

import { Nav } from "@/components/studio/Nav";
import { HeroSection } from "@/components/studio/HeroSection";
import { StorySection } from "@/components/studio/StorySection";
import { ServicesSection } from "@/components/studio/ServicesSection";
import { WorkSection } from "@/components/studio/WorkSection";
import { ProcessSection } from "@/components/studio/ProcessSection";
import { TechSection } from "@/components/studio/TechSection";
import { ResultsSection } from "@/components/studio/ResultsSection";
import { TestimonialsSection } from "@/components/studio/TestimonialsSection";
import { AwardsSection } from "@/components/studio/AwardsSection";
import { CtaSection } from "@/components/studio/CtaSection";
import { Footer } from "@/components/studio/Footer";
import { Partners } from "@/components/studio/Partners";
import { Projects } from "@/components/studio/Projects";
import { Process } from "@/components/studio/Process";

export default function ClientWrapper() {
  return (
    <main className="relative w-full overflow-x-hidden bg-background text-ink">
      <Nav />
      <HeroSection />
      <Partners />
      <StorySection />
      <ServicesSection />
      <TechSection />
      <WorkSection />
      <ProcessSection />
      <Process />
      <Projects />
      <ResultsSection />
      <TestimonialsSection />
      <AwardsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}