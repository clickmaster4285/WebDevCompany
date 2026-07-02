import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";
import { BlogsHero } from "./BlogsHero";
import { BlogsSearch } from "./BlogsSearch";
import { BlogsGrid } from "./BlogsGrid";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";


export function BlogsPage() {
  return (
    <main className="relative min-h-screen bg-background text-slate-950">
      <Nav />
      <div className="border-b border-white/[0.06] bg-surface-1/40 backdrop-blur-sm mt-[80px] md:mt-[100px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb
            customLabels={{ 'blogs': 'Blogs' }}
          />
        </div>
      </div>
      <BlogsHero />
      <BlogsSearch />
      <BlogsGrid />
      <Footer />
    </main>
  );
}