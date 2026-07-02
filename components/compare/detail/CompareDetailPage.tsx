import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";
import type { Comparison } from "@/data/comparisons";
import { CompareHero } from "./CompareHero";
import { ExpertVerdict } from "./ExpertVerdict";
import { DecisionSnapshot } from "./DecisionSnapshot";
import { CompareTable } from "./CompareTable";
import { CompareSectionRenderer } from "./CompareSectionRenderer";
import { CompareCTA } from "./CompareCTA";
import { CompareTableOfContents } from "./CompareTableOfContents";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";

type CompareDetailPageProps = {
  comparison: Comparison;
};

export function CompareDetailPage({
  comparison,
}: CompareDetailPageProps) {
  const page = comparison.page.completePageCopy;

  const leftOption =
    comparison.title.split(" vs ")[0] || comparison.title;

  const rightOption =
    comparison.title.split(" vs ")[1] || "Alternative";

  const finalCTASection = page.sections.find(
    (section: any) => section.primaryCTA
  );

  return (
    <main className="relative min-h-screen bg-background text-slate-900">
      <Nav />
      <div className="border-b border-white/[0.06] bg-surface-1/40 backdrop-blur-sm mt-[80px] md:mt-[100px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb
            customLabels={{
              'compare': 'Comparisons',
              [comparison.slug as string]: comparison.title,
            }}
          />
        </div>
      </div>

      <CompareHero comparison={comparison} />

      <ExpertVerdict
        content={page.featuredAnswerBlock?.content}
      />

      <DecisionSnapshot
        leftOption={leftOption}
        rightOption={rightOption}
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
  <div className="grid gap-6 lg:grid-cols-[230px_minmax(0,1fr)]">
          {/* Sticky TOC */}
          <CompareTableOfContents sections={page.sections} />

          {/* Main Content */}
          <div className="grid gap-6">
            <CompareTable
              title="Comparison Matrix"
              subtitle="A criteria-by-criteria view of both options."
              table={
                page.sections.find(
                  (section: any) => section.table
                )?.table
              }
            />

            {page.sections.map((section: any, index: number) => (
              <CompareSectionRenderer
                key={`${section.heading}-${index}`}
                section={section}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* CTA OUTSIDE GRID */}
        <div className="mt-10">
          <CompareCTA
            title="Need help choosing the right platform?"
            description="Tell us what your site needs to do — lead with content, lead with commerce, or both — and we'll recommend the right platform honestly."
            primaryCTA={
              finalCTASection?.primaryCTA ||
              "Get a recommendation"
            }
            secondaryCTA={
              finalCTASection?.secondaryCTA ||
              "Explore technologies"
            }
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
