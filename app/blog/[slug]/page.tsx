import Link from "next/link";
import { notFound } from "next/navigation";
import LikeArticleButton from "@/src/components/LikeArticleButton";
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
    <article>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <LikeArticleButton initialLikes={0} />
      <p>
        <Link href="/">Back to all articles</Link>
      </p>
    </article>
  );
}
