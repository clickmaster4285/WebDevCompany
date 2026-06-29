// components/services/ServiceLayout.tsx

import { ReactNode } from "react";
import Script from "next/script";
import { ServicePageData } from "@/data/services";
import { ServiceBreadcrumb } from "./ServiceBreadcrumb";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ServiceLayoutProps {
  children: ReactNode;
  service: ServicePageData;
  breadcrumbItems: BreadcrumbItem[];
}

const COMPANY_NAME = "Your Company Name";
const SITE_URL = "https://yourdomain.com";

export function ServiceLayout({ children, service, breadcrumbItems }: ServiceLayoutProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    serviceType: service.schema.serviceType,
    audience: {
      "@type": "Audience",
      name: service.schema.audience,
    },
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: service.pricing.range,
        priceCurrency: "USD",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-background">
        <ServiceBreadcrumb items={breadcrumbItems} />
        {children}
      </main>
    </>
  );
}