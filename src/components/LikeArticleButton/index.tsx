"use client";

import { useState } from "react";

type LikeArticleButtonProps = {
  initialLikes?: number;
};

export default function LikeArticleButton({
  initialLikes = 0,
}: LikeArticleButtonProps) {
  const [likes, setLikes] = useState(initialLikes);

  return (
    <button
      className="mt-auto w-fit border border-slate-600 bg-[#090b10] px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.1em] text-slate-200 transition-colors hover:border-cyan-300 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
      type="button"
      onClick={() => setLikes((currentLikes) => currentLikes + 1)}
    >
      Like ({likes})
    </button>
  );
}
