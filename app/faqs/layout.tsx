import type { ReactNode } from "react";
import { Nav } from "@/components/studio/Nav";
import { Footer } from "@/components/studio/Footer";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";

export default function FAQsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100 text-slate-900">
      <Nav />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}