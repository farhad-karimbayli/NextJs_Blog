export const posts = [
  {
    slug: "my-first-post",
    title: "My first post",
    description: "This is a short placeholder for the first blog article.",
  },
  {
    slug: "learning-next-js",
    title: "Learning Next.js",
    description: "This article will be about my first steps with Next.js.",
  },
  {
    slug: "about-my-life",
    title: "About my life",
    description: "Here I will write stories, thoughts, and personal notes.",
  },
] as const;

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
