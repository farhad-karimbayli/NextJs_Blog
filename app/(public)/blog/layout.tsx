import Link from "next/link";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen bg-[#090b10] text-slate-100">
      <header className="mx-auto flex w-[calc(100%-3rem)] max-w-6xl items-center justify-between border-b border-cyan-300/30 py-6 sm:w-[calc(100%-6rem)]">
        <Link
          className="font-mono text-sm font-bold uppercase tracking-[0.14em] text-cyan-200 transition-colors hover:text-amber-200"
          href="/"
        >
          Farhad&apos;s blog
        </Link>
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">Archive</span>
      </header>
      {children}
    </section>
  );
}
