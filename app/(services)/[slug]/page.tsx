// app/services/[slug]/page.tsx

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";

import { HeroSection } from "@/components/services/HeroSection";
import { CredibilityBar } from "@/components/services/CredibilityBar";
import { FeaturedAnswerBlock } from "@/components/services/FeaturedAnswerBlock";
import { ProblemSection } from "@/components/services/ProblemSection";
import { SolutionSection } from "@/components/services/SolutionSection";
import { CapabilitiesTable } from "@/components/services/CapabilitiesTable";
import { ComparisonTable } from "@/components/services/ComparisonTable";
import { ProcessSection } from "@/components/services/ProcessSection";
import { OutcomeSection } from "@/components/services/OutcomeSection";
import { BusinessCase } from "@/components/services/BusinessCase";
import { FAQSection } from "@/components/services/FAQSection";
import { CTASection } from "@/components/services/CTASection";
import { RiskReversal } from "@/components/services/RiskReversal";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const SITE_URL = "https://yourdomain.com";
const COMPANY_NAME = "Your Company Name";

// ✅ Centralized config per service (move to lib/config later if it grows)
const serviceConfig: Record<
  string,
  { showSocial: boolean; avatarImage: string }
> = {
  "web-development": {
    showSocial: true,
    avatarImage: "/hero/webdevelopment.jpg",
  },
  default: {
    showSocial: false,
    avatarImage: "/hero/default.jpg",
  },
};

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = `${SITE_URL}/services/${service.slug}`;

  return {
    title: `${service.title} | ${COMPANY_NAME}`,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: canonicalUrl,
      siteName: COMPANY_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const config = serviceConfig[slug] ?? serviceConfig.default;

  // ✅ JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/${service.slug}`,
    areaServed: "Global",
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection
        data={service.hero}
        slug={slug}
        showSocial={config.showSocial}
        socialLinks={{
          github: "https://github.com/yourcompany",
          linkedin: "https://linkedin.com/company/yourcompany",
          email: "hello@yourcompany.com",
        }}
        avatarImage={config.avatarImage}
      />

      <CredibilityBar items={service.hero.credibilityBar ?? []} />

      <FeaturedAnswerBlock
        question={service.featuredAnswer.question}
        answer={service.featuredAnswer.answer}
      />

      <ProblemSection
        heading={service.problemSection.heading}
        content={service.problemSection.content}
        stats={service.problemSection.stats}
      />

      <SolutionSection
        heading={service.solutionSection.heading}
        content={service.solutionSection.content}
        pillars={service.solutionSection.pillars}
      />

      <CapabilitiesTable
        heading={service.capabilities.heading}
        items={service.capabilities.items}
      />

      <ComparisonTable
        heading={service.comparison.heading}
        intro={service.comparison.intro}
        options={service.comparison.options}
      />

      <ProcessSection
        heading={service.process.heading}
        steps={service.process.steps}
      />

      <OutcomeSection
        challenge={service.outcome.challenge}
        solution={service.outcome.solution}
        metrics={service.outcome.metrics}
      />

      <BusinessCase
        heading={service.businessCase.heading}
        content={service.businessCase.content}
        valueStreams={service.businessCase.valueStreams}
      />

      <FAQSection faqs={service.faqs} />

      <CTASection
        heading={service.cta.heading}
        primary={service.cta.primary}
        secondary={service.cta.secondary}
        pricing={service.pricing}
      />

      <RiskReversal text={service.riskReversal} />
    </>
  );
}