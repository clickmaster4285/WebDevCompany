import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";
import { TechnologiesHero } from "./TechnologiesHero";
import { TechnologiesSearch } from "./TechnologiesSearch";
import { TechnologiesGrid } from "./TechnologiesGrid";

export function TechnologiesPage() {
  return (
    <main className="relative min-h-screen bg-slate-100 text-slate-900">
      <Nav />
      <TechnologiesHero />
      <TechnologiesSearch />
      <TechnologiesGrid />
      <Footer />
    </main>
  );
}