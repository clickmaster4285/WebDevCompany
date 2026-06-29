// components/ui/CaseStudyCard.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseStudyCardProps {
  slug?: string;
  category: string;
  location: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  // Compact mode props
  compact?: boolean;
  imageHeight?: string;
  contentPadding?: string;
  titleSize?: string;
  descriptionSize?: string;
  descriptionLines?: number;
  techStackLimit?: number;
  showReadMore?: boolean;
}

// Extracted CardContent as a separate component
interface CardContentProps {
  imageUrl: string;
  title: string;
  category: string;
  location: string;
  description: string;
  techStack: string[];
  compact: boolean;
  imageHeight: string;
  contentPadding: string;
  titleSize: string;
  descriptionSize: string;
  descriptionLines: number;
  techStackLimit?: number;
  showReadMore: boolean;
}

function CardContent({
  imageUrl,
  title,
  category,
  location,
  description,
  techStack,
  compact,
  imageHeight,
  contentPadding,
  titleSize,
  descriptionSize,
  descriptionLines,
  techStackLimit,
  showReadMore,
}: CardContentProps) {
  const displayTechStack = techStackLimit ? techStack.slice(0, techStackLimit) : techStack;
  const hasMoreTech = techStackLimit && techStack.length > techStackLimit;

  return (
    <>
      {/* Image Section */}
      <div className={cn("relative w-full overflow-hidden bg-surface-2", imageHeight)}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent" />

        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="rounded-full bg-surface-1/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold text-ink-soft border border-border shadow-sm">
            {category}
          </span>
          <span className="rounded-full bg-surface-1/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-medium text-ink-mute border border-border shadow-sm">
            {location}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className={cn("flex flex-1 flex-col", contentPadding)}>
        <h3
          className={cn(
            "font-semibold text-ink leading-tight line-clamp-2 group-hover:text-violet transition-colors",
            titleSize
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "text-ink-soft leading-relaxed mt-2",
            descriptionSize,
            `line-clamp-${descriptionLines}`
          )}
        >
          {description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {displayTechStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-surface-2 px-2.5 py-0.5 text-[10px] font-medium text-ink-mute border border-border"
            >
              {tech}
            </span>
          ))}
          {hasMoreTech && (
            <span className="rounded-full bg-surface-2 px-2.5 py-0.5 text-[10px] font-medium text-ink-mute border border-border">
              +{techStack.length - techStackLimit!}
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      {showReadMore && (
        <div
          className={cn(
            "flex items-center justify-between border-t border-border mt-auto",
            compact ? "px-4 py-3" : "px-6 py-4"
          )}
        >
          <span
            className={cn(
              "font-medium text-violet group-hover:text-violet/80 transition-colors",
              compact ? "text-[10px]" : "text-sm"
            )}
          >
            READ FULL STORY
          </span>
          <div
            className={cn(
              "flex items-center justify-center rounded-full bg-violet/10 text-violet group-hover:bg-violet group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5",
              compact ? "h-6 w-6" : "h-8 w-8"
            )}
          >
            <ArrowRight
              className={cn(
                "transition-transform group-hover:translate-x-0.5",
                compact ? "w-3 h-3" : "w-4 h-4"
              )}
            />
          </div>
        </div>
      )}
    </>
  );
}

// Helper function to generate category images
function getCategoryImage(category: string, fallbackImage?: string): string {
  const categoryImages: Record<string, string> = {
    PropTech: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    FinTech: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    GovTech: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&h=400&fit=crop',
    HealthTech: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    eCommerce: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    EdTech: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    InsurTech: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
    Logistics: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    Retail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    MarTech: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop',
    CleanTech: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop',
    HRTech: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
    LegalTech: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
    AgriTech: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&h=400&fit=crop',
    Transport: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&h=400&fit=crop',
  };
  return categoryImages[category] || fallbackImage || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop';
}

export function CaseStudyCard({
  slug,
  category,
  location,
  title,
  description,
  techStack,
  imageUrl,
  // Compact mode defaults
  compact = false,
  imageHeight = compact ? 'h-[140px]' : 'h-[200px]',
  contentPadding = compact ? 'p-4' : 'p-6',
  titleSize = compact ? 'text-sm' : 'text-lg',
  descriptionSize = compact ? 'text-xs' : 'text-sm',
  descriptionLines = compact ? 2 : 3,
  techStackLimit = compact ? 3 : undefined,
  showReadMore = true,
}: CaseStudyCardProps) {
  const finalImageUrl = imageUrl || getCategoryImage(category);

  const cardContentProps: CardContentProps = {
    imageUrl: finalImageUrl,
    title,
    category,
    location,
    description,
    techStack,
    compact,
    imageHeight,
    contentPadding,
    titleSize,
    descriptionSize,
    descriptionLines,
    techStackLimit,
    showReadMore,
  };

  // If no slug, render without Link
  if (!slug) {
    return (
      <div
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-xl bg-surface-1 border border-border shadow-soft transition-all duration-300 hover:shadow-md",
          compact ? "hover:-translate-y-0.5" : "hover:-translate-y-1"
        )}
      >
        <CardContent {...cardContentProps} />
      </div>
    );
  }

  // With slug - render with Link
  return (
    <Link href={`/case-studies/${slug}`} className="group block h-full">
      <div
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-xl bg-surface-1 border border-border shadow-soft transition-all duration-300 hover:shadow-md",
          compact ? "hover:-translate-y-0.5" : "hover:-translate-y-1"
        )}
      >
        <CardContent {...cardContentProps} />
      </div>
    </Link>
  );
}