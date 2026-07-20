import Link from "next/link";
import { notFound } from "next/navigation";
import PostTags from "@/src/components/PostTags";
import { getAllTags, getPostsByTag } from "@/src/data/posts";

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const normalizedTag = tag.toLowerCase();
  const taggedPosts = getPostsByTag(normalizedTag);

  if (taggedPosts.length === 0) {
    notFound();
  }

  return (
    <main className="mx-auto w-[calc(100%-3rem)] max-w-5xl py-16 sm:w-[calc(100%-6rem)] sm:py-24">
      <Link
        className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-cyan-300 transition-colors hover:text-amber-200"
        href="/"
      >
        All entries
      </Link>

      <header className="mt-12 border-l-2 border-amber-300 pl-6 sm:pl-10">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
          Archive channel
        </p>
        <h1 className="mt-4 font-mono text-4xl font-bold uppercase leading-tight tracking-[0.03em] text-slate-100 sm:text-6xl">
          Records tagged #{normalizedTag}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
          {taggedPosts.length} {taggedPosts.length === 1 ? "entry" : "entries"} found in this signal group.
        </p>
      </header>

      <section className="mt-12 grid border-l border-t border-slate-700 sm:grid-cols-2" aria-label={`Articles tagged ${normalizedTag}`}>
        {taggedPosts.map((post) => (
          <article
            className="flex min-h-64 flex-col border-b border-r border-slate-700 bg-[#10151c] p-7 transition-colors hover:bg-[#13212a]"
            key={post.slug}
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="font-mono text-2xl font-bold uppercase leading-tight tracking-[0.03em] text-slate-100 transition-colors hover:text-cyan-200">
                {post.title}
              </h2>
              <p className="mt-4 leading-7 text-slate-400">{post.description}</p>
            </Link>
            <div className="mt-auto pt-7">
              <PostTags tags={post.tags} />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
