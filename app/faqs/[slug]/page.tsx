import { notFound } from "next/navigation";
import { faqPages } from "@/data/faq-pages";
import { FAQDetailPage } from "@/components/faq-detail/FAQDetailPage";

type FAQDetailRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return faqPages.map((faq) => ({
    slug: faq.slug,
  }));
}

export async function generateMetadata({ params }: FAQDetailRouteProps) {
  const { slug } = await params;
  const faq = faqPages.find((item) => item.slug === slug);

  if (!faq) {
    return {
      title: "FAQ Not Found",
    };
  }

  return {
    title: `${faq.page.title} | ClickMasters`,
    description: faq.aboveTheFold.directAnswer,
  };
}

export default async function Page({ params }: FAQDetailRouteProps) {
  const { slug } = await params;
  const faq = faqPages.find((item) => item.slug === slug);

  if (!faq) {
    notFound();
  }

  return <FAQDetailPage faq={faq} />;
}