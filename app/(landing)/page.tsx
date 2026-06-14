"use client";

import { Nav } from "@/components/landingPage/Nav";
import { HeroSection } from "@/components/landingPage/HeroSection";
import { StorySection } from "@/components/landingPage/StorySection";
import { ServicesSection } from "@/components/landingPage/ServicesSection";
import { WorkSection } from "@/components/landingPage/WorkSection";
import { ProcessSection } from "@/components/landingPage/ProcessSection";
import { TechSection } from "@/components/landingPage/TechSection";
import { ResultsSection } from "@/components/landingPage/ResultsSection";
import { TestimonialsSection } from "@/components/landingPage/TestimonialsSection";
import { AwardsSection } from "@/components/landingPage/AwardsSection";
import { CtaSection } from "@/components/landingPage/CtaSection";
import { Footer } from "@/components/landingPage/Footer";
import { Partners } from "@/components/landingPage/Partners";
import  Projects  from "@/components/landingPage/Projects";
import { Process } from "@/components/landingPage/Process";


export default function Page() {
  return (
    <main className="relative bg-background text-ink">
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