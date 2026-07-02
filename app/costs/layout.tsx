// app/costs/layout.tsx

import { ReactNode } from "react";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function CostsLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Nav */}
      <Nav />

      {/* Breadcrumb - Below Nav */}
      <div className="border-b border-white/[0.06] bg-surface-1/40 backdrop-blur-sm mt-[80px] md:mt-[100px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb
            customLabels={{
              'costs': 'Cost Guides',
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}