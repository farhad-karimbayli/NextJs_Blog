import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import LikeArticleButton from "@/src/components/LikeArticleButton";
import PostTags from "@/src/components/PostTags";
import RelatedPosts from "@/src/components/RelatedPosts";
import { getPostBySlug, posts } from "@/src/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto w-[calc(100%-3rem)] max-w-4xl py-16 sm:w-[calc(100%-6rem)] sm:py-24">
      <Link
        className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-cyan-300 transition-colors hover:text-amber-200"
        href="/"
      >
        All entries
      </Link>
      <article className="mt-12 border-l-2 border-cyan-300 pl-6 sm:pl-10">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-amber-300">Journal entry</p>
        <h1 className="mt-5 font-mono text-5xl font-bold uppercase leading-[0.98] tracking-[0.02em] text-slate-100 sm:text-7xl">
          {post.title}
        </h1>
        <p className="mt-6 text-xl leading-9 text-slate-300">{post.description}</p>
        <div className="mt-7">
          <PostTags tags={post.tags} />
        </div>
        <div className="my-10 w-24 border-t-2 border-amber-300" />
        <div className="max-w-2xl space-y-6">
          {post.content.map((paragraph) => (
            <p className="text-lg leading-9 text-slate-300" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <LikeArticleButton initialLikes={0} />
      </article>

      <Suspense
        fallback={
          <section className="mt-16 animate-pulse border-t border-cyan-300/30 pt-10" aria-label="Loading related articles">
            <div className="h-3 w-32 bg-amber-300/30" />
            <div className="mt-4 h-7 w-56 bg-slate-700" />
            <div className="mt-7 grid gap-px bg-slate-700 sm:grid-cols-2">
              <div className="h-36 bg-[#10151c]" />
              <div className="h-36 bg-[#10151c]" />
            </div>
          </section>
        }
      >
        <RelatedPosts currentSlug={post.slug} tags={post.tags} />
      </Suspense>
    </main>
  );
}
