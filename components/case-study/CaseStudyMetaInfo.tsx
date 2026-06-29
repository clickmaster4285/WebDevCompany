import { Clock, MapPin, Calendar } from 'lucide-react';

interface CaseStudyMetaInfoProps {
  location: string;
  readingTime: string;
  lastUpdated: string;
}

export function CaseStudyMetaInfo({ location, readingTime, lastUpdated }: CaseStudyMetaInfoProps) {
  return (
    <div className="flex flex-wrap items-center gap-6 mt-4 text-sm text-slate-300">
      <span className="flex items-center gap-2">
        <MapPin className="h-4 w-4" />
        {location}
      </span>
      <span className="flex items-center gap-2">
        <Clock className="h-4 w-4" />
        {readingTime} read
      </span>
      <span className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        Updated {lastUpdated}
      </span>
    </div>
  );
}
