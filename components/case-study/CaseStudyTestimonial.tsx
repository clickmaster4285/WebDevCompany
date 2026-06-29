// components/case-study/CaseStudyTestimonial.tsx
interface CaseStudyTestimonialProps {
  quote: string;
  author: string;
  reviewedBy?: string;
}

export function CaseStudyTestimonial({ quote, author, reviewedBy }: CaseStudyTestimonialProps) {
  if (!quote) return null;

  return (
    <section className="rounded-2xl border border-border p-8 lg:p-10 shadow-soft hover:shadow-md transition-shadow duration-200 bg-surface-1">
      {/* CLIENT TESTIMONIAL Heading */}
      <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-mute mb-6">
        Client Testimonial
      </h2>

      {/* Quote with large quotation mark */}
      <div className="relative">
        {/* Large quotation mark */}
        <div className="absolute -top-2 -left-1 text-6xl text-violet/20 font-serif leading-none">
          &quot;
        </div>
        
        {/* Quote text */}
        <blockquote className="text-ink leading-relaxed pl-6">
          <p className="text-base lg:text-lg">
            {quote}
          </p>
        </blockquote>
      </div>

      {/* Author */}
      <footer className="mt-6 text-sm font-medium text-ink-soft pl-6">
        — {author}
      </footer>

      {/* Divider */}
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm text-ink-mute font-medium">
          ClickMasters Case Study Team
        </p>
        <p className="text-sm text-ink-mute/70">
          Reviewed by {reviewedBy || 'James Whitmore, CTO'}
        </p>
      </div>
    </section>
  );
}