import Image from "next/image";
import Link from "next/link";
import LikeArticleButton from "@/src/components/LikeArticleButton";
import PostTags from "@/src/components/PostTags";
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
    <main className="min-h-screen bg-[#090b10]">
      <section
        className="relative isolate flex min-h-[620px] items-center overflow-hidden border-b border-cyan-300/30"
        aria-labelledby="page-title"
      >
        <Image
          src="/cosmic-journal-hero.png"
          alt="Grand Admiral Thrawn before the Chiss Ascendancy emblem"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-65"
        />
        <div className="absolute inset-0 -z-10 bg-[#05070b]/65" />
        <div className="pointer-events-none absolute inset-6 border border-cyan-300/20 sm:inset-10" />
        <div className="relative z-10 mx-auto w-[calc(100%-3rem)] max-w-6xl py-20 sm:w-[calc(100%-6rem)]">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
            Personal notes from the outer rim
          </p>
          <h1
            id="page-title"
            className="mt-5 max-w-3xl font-mono text-5xl font-bold uppercase leading-[0.95] tracking-[0.02em] text-slate-100 sm:text-7xl lg:text-8xl"
          >
            Farhad&apos;s Journal
          </h1>
          <p className="mt-6 max-w-xl border-l-2 border-amber-300 pl-4 text-lg leading-8 text-slate-200">
            A small archive of life, learning, and stories from a galaxy far, far
            away.
          </p>
          <a
            className="mt-9 inline-flex border border-cyan-200 bg-[#0b1720]/90 px-5 py-3 font-mono text-sm font-bold uppercase tracking-[0.12em] text-cyan-100 transition-colors hover:border-amber-300 hover:text-amber-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            href="#notes"
          >
            Read the latest notes
          </a>
        </div>
      </section>

      <section
        id="notes"
        className="mx-auto w-[calc(100%-3rem)] max-w-6xl py-20 sm:w-[calc(100%-6rem)]"
        aria-labelledby="notes-title"
      >
        <div className="mb-8 flex flex-col gap-4 border-b border-slate-700 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
            Field notes
          </p>
          <h2 id="notes-title" className="font-mono text-3xl font-bold uppercase tracking-[0.06em] text-slate-100">
            Latest entries
          </h2>
        </div>

        <div className="grid border-l border-t border-slate-700 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              className="group flex min-h-[310px] flex-col border-b border-r border-slate-700 bg-[#10151c] p-7 transition-colors hover:bg-[#13212a]"
              key={post.slug}
            >
              <p className="mb-10 font-mono text-xs font-bold tracking-[0.16em] text-amber-300">
                LOG_0{index + 1}
              </p>
              <Link className="block" href={`/blog/${post.slug}`}>
                <h3 className="font-mono text-2xl font-bold uppercase leading-tight tracking-[0.03em] text-slate-100 group-hover:text-cyan-200">
                  {post.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-400">{post.description}</p>
                <span className="mt-7 inline-block font-mono text-sm font-bold uppercase tracking-[0.1em] text-cyan-300 group-hover:text-amber-200">
                  Open record
                </span>
              </Link>
              <div className="my-6">
                <PostTags tags={post.tags} />
              </div>
              <LikeArticleButton initialLikes={0} />
            </article>
          ))}
        </div>
      </section>

      <section
        className="mx-auto flex w-[calc(100%-3rem)] flex-col gap-6 border-t border-cyan-300/30 py-12 sm:w-[calc(100%-6rem)] sm:max-w-6xl sm:flex-row sm:items-end sm:justify-between"
        aria-labelledby="update-title"
      >
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
            Signal received
          </p>
          <h2 id="update-title" className="mt-3 font-mono text-2xl font-bold uppercase tracking-[0.06em] text-slate-100">
            Latest update
          </h2>
        </div>
        <p className="max-w-sm border-l border-slate-600 pl-4 font-mono text-sm leading-6 text-slate-400">
          This page was generated on {lastUpdated}.
        </p>
      </section>
    </main>
  );
}
