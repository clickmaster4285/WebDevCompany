import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ClickMasters — Premium Web Development Studio" },
      { name: "description", content: "Award-winning web development studio crafting cinematic digital products with React, Three.js and GSAP." },
      { property: "og:title", content: "ClickMasters — Premium Web Development Studio" },
      { property: "og:description", content: "Award-winning web development studio crafting cinematic digital products with React, Three.js and GSAP." },
    ],
  }),
  component: Index,
});

function Index() {
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
