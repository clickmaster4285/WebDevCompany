import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";
import type { Technology } from "@/data/technologies";
import { TechnologyHero } from "./TechnologyHero";
import { TechnologyFeaturedAnswer } from "./TechnologyFeaturedAnswer";
import { TechnologySectionRenderer } from "./TechnologySectionRenderer";
import { TechnologyRiskReversal } from "./TechnologyRiskReversal";
import { TechnologyTableOfContents } from "./TechnologyTableOfContents";

type TechnologyDetailPageProps = {
  technology: Technology;
};

export function TechnologyDetailPage({
  technology,
}: TechnologyDetailPageProps) {
  const copy = technology.page.completePageCopy;

  return (
    <main className="relative min-h-screen bg-slate-100 text-slate-900">
      <Nav />

      <TechnologyHero technology={technology} />

      <TechnologyFeaturedAnswer content={copy.featuredAnswerBlock?.content} />

   <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[280px_1fr]">
  <TechnologyTableOfContents sections={copy.sections} />

  <div className="grid gap-6">
    {copy.sections.map((section: any, index: number) => (
      <TechnologySectionRenderer
        key={`${section.heading}-${index}`}
        section={section}
        index={index}
      />
    ))}
  </div>
</section>

      <TechnologyRiskReversal content={copy.riskReversal} />

      <Footer />
    </main>
  );
}