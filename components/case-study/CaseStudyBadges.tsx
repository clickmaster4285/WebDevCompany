import { Badge } from '@/components/ui/badge';

interface CaseStudyBadgesProps {
  category: string;
  status?: string;
  contract?: string;
}

export function CaseStudyBadges({ category, status, contract }: CaseStudyBadgesProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-4">
      <Badge variant="outline" className="bg-white/10 text-white border-white/20 px-3 py-1 text-xs font-medium uppercase tracking-wider">
        {category}
      </Badge>
      {status && (
        <Badge variant="outline" className="bg-green-500/20 text-green-300 border-green-400/30 px-3 py-1 text-xs font-medium">
          {status}
        </Badge>
      )}
      {contract && (
        <Badge variant="outline" className="bg-blue-500/20 text-blue-300 border-blue-400/30 px-3 py-1 text-xs font-medium">
          {contract}
        </Badge>
      )}
    </div>
  );
}
