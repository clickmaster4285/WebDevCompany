// components/breadcrumb/Breadcrumb.tsx
'use client';
import type { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ChevronRight, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

// Route label mappings
const routeLabels: Record<string, string> = {
  'services': 'Services',
  'blogs': 'Blogs',
  'case-studies': 'Case Studies',
  'costs': 'Costs',
  'faqs': 'FAQs',
  'technologies': 'Technologies',
  'testimonials': 'Testimonials',
};

interface BreadcrumbProps {
  className?: string;
  homeLabel?: string;
  customLabels?: Record<string, string>;
  hideHome?: boolean;
  maxItems?: number;
 separator?: ReactNode;// ✅ This is defined in the interface
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
      icon: Home,
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
  
  for (const segment of visiblePaths) {
    if (segment === '...') {
      breadcrumbs.push({
        label: '...',
        href: '#',
        icon: undefined,
        isEllipsis: true,
        isLast: false,
      });
      continue;
    }
    
    currentPath += `/${segment}`;
    
    // Determine label
    let label = customLabels?.[segment] || routeLabels[segment];
    
    // Auto-generate label if not found in mappings
    if (!label) {
      // Handle dynamic segments like IDs or slugs
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
    
    const isLast = currentPath === pathname || segment === paths[paths.length - 1];
    
    breadcrumbs.push({
      label,
      href: currentPath,
      icon: isLast ? FileText : undefined,
      isLast,
      isEllipsis: false,
    });
  }
  
  return breadcrumbs;
}

export function Breadcrumb({ 
  className,
  homeLabel = 'Home',
  customLabels,
  hideHome = false,
  maxItems,
  separator, // ✅ separator is now properly destructured
}: BreadcrumbProps = {}) {
  const pathname = usePathname();
  const breadcrumbs = generateBreadcrumbs(
    pathname, 
    customLabels, 
    hideHome, 
    maxItems
  );

  // Don't render if only home
  if (breadcrumbs.length === 0 || (breadcrumbs.length === 1 && breadcrumbs[0].label === 'Home')) {
    return null;
  }

  // Default separator
  const defaultSeparator = <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />;

  return (
    <nav 
      className={cn(
        "w-full py-3",
        className
      )} 
      aria-label="Breadcrumb"
    >
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
        {breadcrumbs.map((item, index) => (
          <div key={item.href + index} className="flex items-center gap-2 whitespace-nowrap">
            {index > 0 && (
              separator || defaultSeparator // ✅ separator is now defined
            )}
            
            {item.isEllipsis ? (
              <span className="text-gray-400 px-1">...</span>
            ) : item.isLast ? (
              <span className="flex items-center gap-1.5 text-gray-400 font-medium text-sm">
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.label}</span>
              </span>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-colors duration-200 text-sm",
                  index === 0 && "hover:text-blue-600"
                )}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Breadcrumb;