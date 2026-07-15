import Link from "next/link";
import LikeArticleButton from "@/src/components/LikeArticleButton";
import { posts } from "@/src/data/posts";

// ISR: the server renders this blog page and refreshes its cached version
// after 30 seconds, so static content stays fast while update data is renewed.
export const revalidate = 30;

export default function Home() {
  const lastUpdated = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date());

  return (
    <main>
      <h1>Farhad Blog</h1>

      {posts.map((post) => (
        <article key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </Link>
          <LikeArticleButton initialLikes={0} />
        </article>
      ))}

      <section>
        <h2>Latest update</h2>
        <p>This page was generated on {lastUpdated}.</p>
      </section>
    </main>
  );
}
