// app/location/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getLocationPageBySlug, getAllLocationSlugs } from '@/data/locationdata';
import { LocationPage } from '@/components/locations/LocationPage';

export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const pageData = getLocationPageBySlug(slug);

  if (!pageData) {
    return {
      title: 'Location Not Found',
      description: 'The requested location page could not be found.'
    };
  }

  return {
    title: pageData.title,
    description: pageData.metaDescription,
    alternates: {
      canonical: `https://yourdomain.com/location/${pageData.slug}`,
    },
  };
}

export default async function LocationPageRoute({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const pageData = getLocationPageBySlug(slug);

  if (!pageData) {
    notFound();
  }

  return <LocationPage data={pageData} />;
}