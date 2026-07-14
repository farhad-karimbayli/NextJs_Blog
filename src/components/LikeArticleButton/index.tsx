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
    <button type="button" onClick={() => setLikes((currentLikes) => currentLikes + 1)}>
      Like ({likes})
    </button>
  );
}
