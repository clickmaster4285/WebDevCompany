import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";
import type { Technology } from "@/data/technologies";
import { TechnologyHero } from "./TechnologyHero";
import { TechnologyFeaturedAnswer } from "./TechnologyFeaturedAnswer";
import { TechnologySectionRenderer } from "./TechnologySectionRenderer";
import { TechnologyRiskReversal } from "./TechnologyRiskReversal";
import { TechnologyTableOfContents } from "./TechnologyTableOfContents";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";

type TechnologyDetailPageProps = {
  technology: Technology;
};

export function TechnologyDetailPage({
  technology,
}: TechnologyDetailPageProps) {
  const copy = technology.page.completePageCopy;

  return (
    <div className="flex flex-col min-h-screen bg-background text-slate-900">
      <Nav />

      {/* Breadcrumb - Below Nav */}
      <div className="border-b border-white/[0.06] bg-surface-1/40 backdrop-blur-sm mt-[80px] md:mt-[100px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb
            customLabels={{
              'technologies': 'Technologies',
              [technology.slug]: technology.title,
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="grow">
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
      </main>

      <Footer />
    </div>
  );
}
