export default function BlogLoading() {
  return (
    <main className="mx-auto w-[calc(100%-3rem)] max-w-4xl animate-pulse py-16 sm:w-[calc(100%-6rem)] sm:py-24">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
        Receiving archive signal...
      </p>
      <div className="mt-12 h-12 w-3/4 bg-slate-800" />
      <div className="mt-8 h-5 w-full bg-slate-800" />
      <div className="mt-4 h-5 w-5/6 bg-slate-800" />
    </main>
  );
}
