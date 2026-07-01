import { notFound } from "next/navigation";
import { comparisons } from "@/data/comparisons";
import { CompareDetailPage } from "@/components/compare/detail/CompareDetailPage";

type ComparePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return comparisons
    .filter((comparison) => typeof comparison.slug === "string")
    .map((comparison) => ({
      slug: comparison.slug,
    }));
}

export async function generateMetadata({ params }: ComparePageProps) {
  const { slug } = await params;

  const comparison = comparisons.find((item) => item.slug === slug);

  if (!comparison) {
    return {
      title: "Comparison Not Found",
    };
  }

  return {
    title: `${comparison.title} | ClickMasters`,
    description: comparison.excerpt,
  };
}

export default async function Page({ params }: ComparePageProps) {
  const { slug } = await params;

  const comparison = comparisons.find((item) => item.slug === slug);

  if (!comparison) {
    notFound();
  }

  return <CompareDetailPage comparison={comparison} />;
}