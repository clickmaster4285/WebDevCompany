// app/locations/layout.tsx

import { Metadata } from 'next';
import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";

export const metadata: Metadata = {
  title: 'Web Development Company Locations',
  description: 'Senior-led web development serving top US metros with genuine local market understanding.',
};

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      {/* Breadcrumb - Below Nav */}
      <div className="border-b border-white/[0.06] bg-surface-1/40  backdrop-blur-sm mt-[80px] md:mt-[100px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb
            customLabels={{
              'locations': 'Locations',
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}
