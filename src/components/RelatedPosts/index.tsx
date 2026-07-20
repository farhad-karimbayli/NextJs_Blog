import Link from "next/link";
import { getRelatedPosts } from "@/src/data/posts";

type RelatedPostsProps = {
  currentSlug: string;
  tags: readonly string[];
};

export default async function RelatedPosts({
  currentSlug,
  tags,
}: RelatedPostsProps) {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const relatedPosts = getRelatedPosts(currentSlug, tags);

  return (
    <section className="mt-16 border-t border-cyan-300/30 pt-10" aria-labelledby="related-title">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
        Matching signals
      </p>
      <h2 id="related-title" className="mt-3 font-mono text-2xl font-bold uppercase tracking-[0.05em] text-slate-100">
        Related by tags
      </h2>

      {relatedPosts.length > 0 ? (
        <div className="mt-7 grid border-l border-t border-slate-700 sm:grid-cols-2">
          {relatedPosts.map((post) => (
            <Link
              className="border-b border-r border-slate-700 bg-[#10151c] p-6 transition-colors hover:bg-[#13212a]"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <h3 className="font-mono text-lg font-bold uppercase tracking-[0.03em] text-slate-100">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{post.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="mt-6 border-l border-slate-600 pl-4 text-slate-400">
          No related records found yet.
        </p>
      )}
    </section>
  );
}
