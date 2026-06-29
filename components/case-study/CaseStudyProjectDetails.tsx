// components/case-study/CaseStudyProjectDetails.tsx
import {
  Building2,
  Globe,
  Clock,
  FileText,
  Cpu,
  BookOpen,
  Shield,
  Calendar,
  User,
  Users,
} from 'lucide-react';

interface CaseStudyProjectDetailsProps {
  projectDetails: Record<string, string | number>;
  className?: string;
}

export function CaseStudyProjectDetails({ 
  projectDetails, 
  className = '' 
}: CaseStudyProjectDetailsProps) {
  if (!projectDetails || Object.keys(projectDetails).length === 0) {
    return null;
  }

  // Map project detail keys to icons and display names
  const detailConfig: Record<string, { icon: React.ElementType; label: string }> = {
    sector: { icon: Building2, label: 'SECTOR' },
    country: { icon: Globe, label: 'COUNTRY' },
    region: { icon: Globe, label: 'REGION' },
    status: { icon: Clock, label: 'STATUS' },
    contract: { icon: FileText, label: 'CONTRACT' },
    techStackCount: { icon: Cpu, label: 'TECH STACK' },
    readingTime: { icon: BookOpen, label: 'READING TIME' },
    ipOwnership: { icon: Shield, label: 'IP OWNERSHIP' },
    lastUpdated: { icon: Calendar, label: 'LAST UPDATED' },
    writtenBy: { icon: User, label: 'WRITTEN BY' },
    reviewedBy: { icon: Users, label: 'REVIEWED BY' },
  };

  // Filter to only show details that exist in the config
  const visibleDetails = Object.entries(projectDetails).filter(
    ([key]) => key in detailConfig
  );

  if (visibleDetails.length === 0) {
    return null;
  }

  return (
    <div className={`bg-surface-1 rounded-2xl shadow-soft border border-border p-6 lg:p-8 ${className}`}>
      <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-mute mb-6">
        Project Details
      </h2>
      
      <dl className="space-y-4">
        {visibleDetails.map(([key, value]) => {
          const config = detailConfig[key as keyof typeof detailConfig];
          if (!config) return null;
          
          const Icon = config.icon;
          
          return (
            <div key={key} className="flex items-start gap-4">
              <div className="shrink-0 w-5 h-5 mt-0.5">
                <Icon className="h-5 w-5 text-ink-mute" />
              </div>
              <div className="flex-1 min-w-0">
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                  {config.label}
                </dt>
                <dd className="text-sm font-medium text-ink mt-1">
                  {String(value)}
                </dd>
              </div>
            </div>
          );
        })}
      </dl>
    </div>
  );
}