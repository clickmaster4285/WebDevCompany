import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";
import { CompareHero } from "./CompareHero";
import { CompareGrid } from "./CompareGrid";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";

export function ComparePage() {
  return (
    <main className="relative min-h-screen bg-background text-slate-900">
      <Nav />
      <div className="border-b border-white/[0.06] bg-surface-1/40 backdrop-blur-sm mt-[80px] md:mt-[100px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb
            customLabels={{ 'compare': 'Comparisons' }}
          />
        </div>
      </div>
      <CompareHero />
      <CompareGrid />
      <Footer />
    </main>
  );
}
