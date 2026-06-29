// components/case-study/CaseStudyStats.tsx
import { MapPin, FileText, Cpu, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CaseStudyStatsProps {
  region: string;
  contract: string;
  techStackCount: string;
  ipOwnership: string;
  className?: string;
  cardClassName?: string;
  labelClassName?: string;
  valueClassName?: string;
}

export function CaseStudyStats({ 
  region, 
  contract, 
  techStackCount, 
  ipOwnership,
  className = '',
  cardClassName = '',
  labelClassName = '',
  valueClassName = ''
}: CaseStudyStatsProps) {
  const stats = [
    {
      label: 'Region',
      value: region,
      icon: MapPin,
    },
    {
      label: 'Contract',
      value: contract,
      icon: FileText,
    },
    {
      label: 'Tech Stack',
      value: techStackCount,
      icon: Cpu,
    },
    {
      label: 'IP',
      value: ipOwnership,
      icon: Shield,
    },
  ];

  return (
    <div className={`border-b border-border py-8 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card 
              key={stat.label}
              className={`bg-surface-1 border-border shadow-soft hover:shadow-md transition-shadow ${cardClassName}`}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <stat.icon className="h-4 w-4 text-ink-mute" />
                  <span className={`text-xs font-medium uppercase tracking-wider text-ink-mute ${labelClassName}`}>
                    {stat.label}
                  </span>
                </div>
                <span className={`text-base font-semibold text-ink mt-1 block ${valueClassName}`}>
                  {stat.value}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}