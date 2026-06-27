import Link from "next/link";

type BlogCardProps = {
  blog: {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image?: string;
    hero?: {
      badge?: string;
      title?: string;
      description?: string;
    };
    credibility?: string[];
  };
};

export function BlogCard({ blog }: BlogCardProps) {
  const previewPoints = blog.credibility?.slice(0, 3) ?? [];

  return (
    <Link href={`/blogs/${blog.slug}`} className="group block h-full">
      <article className="flex h-full flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet/30 hover:shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-violet/10 px-3 py-1 text-xs font-semibold text-violet">
              {blog.category}
            </span>

            {blog.hero?.badge && (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                {blog.hero.badge}
              </span>
            )}
          </div>

          <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition group-hover:border-violet group-hover:bg-violet group-hover:text-white">
            Read More →
          </span>
        </div>

        <div className="mt-7">
          <h3 className="text-2xl font-bold leading-tight text-slate-950 transition-colors group-hover:text-violet">
            {blog.title}
          </h3>

          <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
            {blog.hero?.description || blog.excerpt}
          </p>
        </div>

        {previewPoints.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {previewPoints.map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-500"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="mt-8 flex items-end justify-between border-t border-slate-100 pt-5">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {blog.author}
            </p>
            <p className="mt-1 text-xs text-slate-500">{blog.date}</p>
          </div>

          <p className="text-sm font-medium text-slate-500">
            {blog.readTime}
          </p>
        </div>
      </article>
    </Link>
  );
}