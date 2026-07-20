export const posts = [
  {
    slug: "my-first-post",
    title: "My first post",
    description: "The first transmission from my personal archive.",
    tags: ["journal", "star-wars", "thrawn"],
    content: [
      "Every archive begins with a first record. This one is a place for the ideas, lessons, and observations that are worth returning to later.",
      "I like the calm and deliberate way Grand Admiral Thrawn studies a problem before acting. That same approach is useful in programming: observe the system, understand its shape, and only then decide what to change.",
      "The articles here will connect everyday life, learning, and stories from Star Wars. This opening entry is the first signal in that longer transmission.",
    ],
  },
  {
    slug: "learning-next-js",
    title: "Learning Next.js",
    description: "This article will be about my first steps with Next.js.",
    tags: ["nextjs", "react", "learning"],
    content: [
      "Learning Next.js becomes easier when each feature is connected to a real page. Routing, layouts, server rendering, and client components stop being abstract ideas once they work together in one project.",
      "This blog began with three static cards. It now has dynamic article routes, generated parameters, metadata, incremental regeneration, and a small interactive like button.",
      "The next step is to understand how route groups and Suspense shape an application without changing its public URLs. Small experiments like these make the framework much easier to remember.",
    ],
  },
  {
    slug: "about-my-life",
    title: "About my life",
    description: "Here I will write stories, thoughts, and personal notes.",
    tags: ["journal", "learning", "life"],
    content: [
      "Not every useful lesson comes from a course or a technical book. Many of them appear in ordinary days, conversations, mistakes, and decisions that seem small at the time.",
      "Writing those moments down creates distance and makes patterns easier to notice. A personal journal can work like a navigation map: it does not choose the destination, but it helps show where you have already been.",
      "This section will collect those quieter records alongside programming notes. Both are part of the same process of learning how to think more clearly and build with more intention.",
    ],
  },
] as const;

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getAllTags() {
  return [...new Set(posts.flatMap((post) => post.tags))].sort();
}

export function getPostsByTag(tag: string) {
  const normalizedTag = tag.toLowerCase();

  return posts.filter((post) =>
    post.tags.some((postTag) => postTag === normalizedTag),
  );
}

export function getRelatedPosts(slug: string, tags: readonly string[]) {
  return posts.filter(
    (post) =>
      post.slug !== slug && post.tags.some((tag) => tags.includes(tag)),
  );
}
