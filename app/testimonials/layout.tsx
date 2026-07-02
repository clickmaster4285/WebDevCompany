// app/testimonials/layout.tsx
import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      {/* Breadcrumb - Below Nav */}
      <div className="border-b border-white/[0.06] bg-surface-1/40 backdrop-blur-sm mt-[80px] md:mt-[100px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb
            customLabels={{
              'testimonials': 'Testimonials',
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