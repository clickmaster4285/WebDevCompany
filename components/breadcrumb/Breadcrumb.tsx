// components/breadcrumb/Breadcrumb.tsx
'use client';
import type { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getLocationPageBySlug } from "@/data/locationdata"; // adjust path if needed

// Route label mappings (static)
const routeLabels: Record<string, string> = {
  'services': 'Services',
  'blogs': 'Blogs',
  'blog': 'Blog',
  'case-studies': 'Case Studies',
  'costs': 'Cost Guides',
  'faqs': 'FAQs',
  'technologies': 'Technologies',
  'testimonials': 'Testimonials',
  'locations': 'Locations',
  'industries': 'Industries',
  'compare': 'Comparisons',
};

interface BreadcrumbProps {
  className?: string;
  customLabels?: Record<string, string>;
  hideHome?: boolean;
  maxItems?: number;
}

function generateBreadcrumbs(
  pathname: string,
  customLabels?: Record<string, string>,
  hideHome?: boolean,
  maxItems?: number
) {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs = [];

  // Add Home if not hidden
  if (!hideHome) {
    breadcrumbs.push({
      label: 'Home',
      href: '/',
      isHome: true,
      isLast: paths.length === 0,
    });
  }

  let currentPath = '';
  let visiblePaths = paths;

  // Handle truncation
  if (maxItems && paths.length > maxItems) {
    const firstItems = paths.slice(0, maxItems - 1);
    const lastItem = paths[paths.length - 1];
    visiblePaths = [...firstItems, '...', lastItem];
  }

  for (let i = 0; i < visiblePaths.length; i++) {
    const segment = visiblePaths[i];

    if (segment === '...') {
      breadcrumbs.push({
        label: '...',
        href: '#',
        isHome: false,
        isLast: false,
        isEllipsis: true,
      });
      continue;
    }

    currentPath += `/${segment}`;

    // Determine label
    let label = customLabels?.[segment] || routeLabels[segment];

    // --- NEW: Check if this is a location slug ---
    if (!label && segment.startsWith('web-development-company-')) {
      const location = getLocationPageBySlug(segment);
      if (location) {
        // Use the city name for a cleaner breadcrumb (e.g., "San Antonio")
        label = location.city;
        // If you prefer the full title, use location.title instead.
      }
    }

    // Auto-generate label if still not found
    if (!label) {
      if (segment.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)) {
        label = 'Details';
      } else if (segment.match(/^[0-9]+$/)) {
        label = `Item ${segment}`;
      } else {
        label = segment
          .replace(/-/g, ' ')
          .replace(/(^\w|\s\w)/g, (char) => char.toUpperCase());
      }
    }

    const isLast = i === visiblePaths.length - 1;

    breadcrumbs.push({
      label,
      href: currentPath,
      isHome: false,
      isLast,
      isEllipsis: false,
    });
  }

  return breadcrumbs;
}

export function Breadcrumb({
  className,
  customLabels,
  hideHome = false,
  maxItems,
}: BreadcrumbProps = {}) {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(
    pathname,
    customLabels,
    hideHome,
    maxItems
  );

  // Don't render on home page or if only home remains
  if (breadcrumbs.length === 0 || (breadcrumbs.length === 1 && breadcrumbs[0].label === 'Home')) {
    return null;
  }

  return (
    <nav
      className={cn("w-full", className)}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-1.5 flex-wrap">
        {breadcrumbs.map((item, index) => (
          <li key={item.href + index} className="flex items-center gap-1.5">
            {index > 0 && (
              <ChevronRight className="h-3.5 w-3.5 text-ink-mute/40 flex-shrink-0" />
            )}

            {item.isEllipsis ? (
              <span className="text-ink-mute/50 text-sm px-1 select-none">···</span>
            ) : item.isLast ? (
              <span
                className="flex items-center gap-1.5 text-ink-soft text-sm font-medium truncate max-w-[200px]"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1.5 text-ink-mute text-sm transition-colors duration-200",
                  "hover:text-violet",
                  item.isHome && "hover:text-violet"
                )}
              >
                {item.isHome && <Home className="h-3.5 w-3.5 flex-shrink-0" />}
                {!item.isHome && <span>{item.label}</span>}
                {item.isHome && <span className="sr-only">Home</span>}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;