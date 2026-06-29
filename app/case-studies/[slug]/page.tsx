// app/case-studies/[slug]/page.tsx
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import { TemplateCTA } from "@/components/ui/TemplateCta";
import {
  CaseStudyHero,
  CaseStudyOverview,
  CaseStudyTechStack,
  CaseStudyCompliance,
  CaseStudyChallenge,
  CaseStudyApproach,
  CaseStudyResults,
  CaseStudyTestimonial,
  CaseStudySidebar,
  CaseStudyRelated,
} from "@/components/case-study";
import { CaseStudyStats } from "@/components/case-study/CaseStudyStats";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  const relatedStudies = caseStudies
    .filter((s) => s.id !== study.id)
    .slice(0, 3);

  const sidebarSections = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "Challenge" },
    { id: "approach", label: "Approach" },
    { id: "results", label: "Results" },
    { id: "testimonial", label: "Testimonial" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Hero Section */}
      <CaseStudyHero
        title={study.title}
        category={study.category}
        location={study.location}
        status={study.projectDetails?.status}
        contract={study.projectDetails?.contract}
        readingTime={study.projectDetails?.readingTime || "5 min"}
        lastUpdated={study.projectDetails?.lastUpdated || "2025"}
      />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl w-full px-6 md:px-12 py-12 lg:py-16">
        {/* Stats Bar — full width, above the grid */}
        <CaseStudyStats
          region={study.location}
          contract={study.projectDetails?.contract || "N/A"}
          techStackCount={study.techStack.length.toString()}
          ipOwnership={study.projectDetails?.ipOwnership || "N/A"}
        />

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
          {/* Left: Sidebar (1/3 width) — sticky */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-16 space-y-6">
              <CaseStudySidebar
                projectDetails={study.projectDetails}
                sections={sidebarSections}
              />
            </div>
          </div>

          {/* Right: Main Content Column (2/3 width) */}
          <div className="lg:col-span-2 order-1 lg:order-2 space-y-12">
            <div id="overview" className="scroll-mt-24">
              <CaseStudyOverview description={study.description} />
            </div>

            <div id="tech-stack" className="scroll-mt-24">
              <CaseStudyTechStack techStack={study.techStack} />
            </div>

            {study.complianceStandards &&
              study.complianceStandards.length > 0 && (
                <div id="compliance" className="scroll-mt-24">
                  <CaseStudyCompliance standards={study.complianceStandards} />
                </div>
              )}

            <div id="challenge" className="scroll-mt-24">
              <CaseStudyChallenge challenge={study.challenge} stepNumber="01" />
            </div>

            <div id="approach" className="scroll-mt-24">
              <CaseStudyApproach approach={study.approach} stepNumber="02" />
            </div>

            <div id="results" className="scroll-mt-24">
              <CaseStudyResults results={study.results} stepNumber="03" />
            </div>

            <div id="testimonial" className="scroll-mt-24">
              <CaseStudyTestimonial
                quote={study.testimonial?.quote}
                author={study.testimonial?.author}
                reviewedBy={study.projectDetails?.reviewedBy}
              />
            </div>

            {/* Related Case Studies — full width below grid */}
            <CaseStudyRelated studies={relatedStudies} />

            {/* CTA Section */}
            <div className="pt-8 border-t border-border">
              <TemplateCTA
                heading="Ready to Transform Your Business?"
                subtext="Let's discuss how our technical expertise can help you achieve remarkable results."
                buttonText="Get in Touch"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}