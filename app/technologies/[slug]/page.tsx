import { notFound } from "next/navigation";
import { technologies } from "@/data/technologies";
import { TechnologyDetailPage } from "@/components/technologies/detail/TechnologyDetailPage";

type TechnologyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return technologies.map((technology) => ({
    slug: technology.slug,
  }));
}

export async function generateMetadata({ params }: TechnologyPageProps) {
  const { slug } = await params;

  const technology = technologies.find((item) => item.slug === slug);

  if (!technology) {
    return {
      title: "Technology Not Found",
    };
  }

  return {
    title: `${technology.title} | ClickMasters`,
    description: technology.excerpt,
  };
}

export default async function Page({ params }: TechnologyPageProps) {
  const { slug } = await params;

  const technology = technologies.find((item) => item.slug === slug);

  if (!technology) {
    notFound();
  }

  return <TechnologyDetailPage technology={technology} />;
}