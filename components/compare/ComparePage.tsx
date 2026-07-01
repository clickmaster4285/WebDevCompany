import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";
import { CompareHero } from "./CompareHero";
import { CompareGrid } from "./CompareGrid";

export function ComparePage() {
  return (
    <main className="relative min-h-screen bg-slate-100 text-slate-900">
      <Nav />
      <CompareHero />
      <CompareGrid />
      <Footer />
    </main>
  );
}