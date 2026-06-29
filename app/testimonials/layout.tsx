// app/case-studies/layout.tsx
"use client";
import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Specific Nav for this section if needed, or re-use existing */}
      <Nav />
      
      {/* This renders your page.tsx content */}
      <main className="grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}