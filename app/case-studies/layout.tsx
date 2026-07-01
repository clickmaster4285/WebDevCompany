// app/case-studies/layout.tsx
"use client";
import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Specific Nav for this section if needed, or re-use existing */}
      <Nav />

      <div className="border-b border-border/60 bg-surface-1/30 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb 
            homeLabel="Home"
            customLabels={{
              'case-studies': 'Case Studies',
            }}
            maxItems={4}
          />
        </div>
      </div>
      
      {/* This renders your page.tsx content */}
      <main className="grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}