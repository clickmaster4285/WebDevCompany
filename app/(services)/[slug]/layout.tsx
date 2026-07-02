// app/services/[slug]/layout.tsx
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export default async function ServiceLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <div className="flex-1 pt-[80px] md:pt-[100px]">
        {/* Breadcrumb - Below Nav */}
        <div className="border-b border-white/[0.06] bg-surface-1/40 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumb
              customLabels={{
                'services': 'Services',
                [resolvedParams.slug]: service.title
              }}
            />
          </div>
        </div>

        {/* Main Content */}
        <main>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}