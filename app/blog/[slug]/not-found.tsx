import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <article>
      <h2>Article not found</h2>
      <p>The requested blog article does not exist.</p>
      <Link href="/">Back to all articles</Link>
    </article>
  );
}
