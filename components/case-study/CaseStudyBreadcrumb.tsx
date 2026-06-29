import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface CaseStudyBreadcrumbProps {
  title: string;
}

export function CaseStudyBreadcrumb({ title }: CaseStudyBreadcrumbProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
      <Link href="/" className="hover:text-white transition-colors">
        Home
      </Link>
      <ChevronRight className="h-3 w-3 text-white/40" />
      <Link href="/case-studies" className="hover:text-white transition-colors">
        Case Studies
      </Link>
      <ChevronRight className="h-3 w-3 text-white/40" />
      <span className="text-white/80 truncate max-w-[300px]">
        {title.split('—')[0].trim()}
      </span>
    </div>
  );
}