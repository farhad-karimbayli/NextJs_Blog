import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <main className="mx-auto w-[calc(100%-3rem)] max-w-3xl py-16 sm:w-[calc(100%-6rem)] sm:py-24">
      <article className="border-l-2 border-amber-300 pl-6 sm:pl-10">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Lost transmission</p>
      <h1 className="mt-5 font-mono text-4xl font-bold uppercase leading-tight text-slate-100 sm:text-6xl">Article not found</h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">The requested blog article does not exist.</p>
      <Link className="mt-8 inline-block font-mono text-sm font-bold uppercase tracking-[0.12em] text-cyan-300 hover:text-amber-200" href="/">Back to all entries</Link>
      </article>
    </main>
  );
}
