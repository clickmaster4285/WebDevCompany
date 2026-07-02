// components/case-study/CaseStudyProjectDetails.tsx

import type { LucideIcon } from "lucide-react";
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
} from "lucide-react";

interface CaseStudyProjectDetailsProps {
  projectDetails?: Record<string, string | number | undefined | null>;
  className?: string;
}

type DetailConfigItem = {
  icon: LucideIcon;
  label: string;
};

export function CaseStudyProjectDetails({
  projectDetails,
  className = "",
}: CaseStudyProjectDetailsProps) {
  if (!projectDetails || Object.keys(projectDetails).length === 0) {
    return null;
  }

  const detailConfig: Record<string, DetailConfigItem> = {
    sector: { icon: Building2, label: "SECTOR" },
    country: { icon: Globe, label: "COUNTRY" },
    region: { icon: Globe, label: "REGION" },
    status: { icon: Clock, label: "STATUS" },
    contract: { icon: FileText, label: "CONTRACT" },
    techStackCount: { icon: Cpu, label: "TECH STACK" },
    readingTime: { icon: BookOpen, label: "READING TIME" },
    ipOwnership: { icon: Shield, label: "IP OWNERSHIP" },
    lastUpdated: { icon: Calendar, label: "LAST UPDATED" },
    writtenBy: { icon: User, label: "WRITTEN BY" },
    reviewedBy: { icon: Users, label: "REVIEWED BY" },
  };

  const visibleDetails = Object.entries(projectDetails).filter(
    ([key, value]) =>
      key in detailConfig && value !== undefined && value !== null && value !== ""
  );

  if (visibleDetails.length === 0) {
    return null;
  }

  return (
    <div
      className={`rounded-2xl border border-border bg-surface-1 p-6 shadow-soft lg:p-8 ${className}`}
    >
      <h2 className="mb-6 text-xs font-semibold uppercase tracking-wider text-ink-mute">
        Project Details
      </h2>

      <dl className="space-y-4">
        {visibleDetails.map(([key, value]) => {
          const config = detailConfig[key];

          if (!config) return null;

          const Icon = config.icon;

          return (
            <div key={key} className="flex items-start gap-4">
              <div className="mt-0.5 h-5 w-5 shrink-0">
                <Icon aria-hidden="true" className="h-5 w-5 text-ink-mute" />
              </div>

              <div className="min-w-0 flex-1">
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-mute">
                  {config.label}
                </dt>

                <dd className="mt-1 text-sm font-medium text-ink">
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