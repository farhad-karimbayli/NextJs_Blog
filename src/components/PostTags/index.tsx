import Link from "next/link";

type PostTagsProps = {
  tags: readonly string[];
};

export default function PostTags({ tags }: PostTagsProps) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Article tags">
      {tags.map((tag) => (
        <li key={tag}>
          <Link
            className="inline-flex border border-cyan-300/30 bg-cyan-300/5 px-2.5 py-1 font-mono text-xs font-bold uppercase tracking-[0.08em] text-cyan-200 transition-colors hover:border-amber-300/60 hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
            href={`/blog/tags/${tag}`}
          >
            #{tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
