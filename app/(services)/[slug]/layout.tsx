// app/services/[slug]/layout.tsx

import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";
import Script from "next/script";
import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export default async function ServiceLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  // Trigger 404 if the service route doesn't exist
  if (!service) {
    notFound();
  }

  // Build JSON-LD Schema for SEO
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'Organization',
      name: 'Your Company Name',
      url: 'https://yourdomain.com',
    },
    serviceType: service.schema?.serviceType || 'Web Development',
    audience: {
      '@type': 'Audience',
      name: service.schema?.audience || 'Business Organizations',
    },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: service.pricing?.range || 'Contact for pricing',
        priceCurrency: 'USD',
      },
    },
  };

  // Build FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (service.faqs || []).map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="services-layout-wrapper">
      {/* JSON-LD Schemas */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      {service.faqs && service.faqs.length > 0 && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* ✅ 1. NAVIGATION - At the very top */}
      <Nav />

      {/* ✅ 2. BREADCRUMB - Below Nav with top padding to prevent overlap */}
      <nav className="container mx-auto px-4 pt-20 pb-3 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center flex-wrap gap-1">
          <li>
            <Link href="/" className="text-gray-300 hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
         
          
          <li className="text-gray-300">/</li>
          <li className="text-gray-300 font-medium">{service.title}</li>
        </ol>
      </nav>

      {/* ✅ 3. MAIN CONTENT */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* ✅ 4. FOOTER */}
      <Footer />
    </div>
  );
}