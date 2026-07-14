import LikeArticleButton from "@/src/components/LikeArticleButton";

// ISR: the server renders this blog page and refreshes its cached version
// after 30 seconds, so static content stays fast while update data is renewed.
export const revalidate = 30;

export default function Home() {
  const lastUpdated = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date());

  return (
    <main>
      <h1>Farhad Blog</h1>

      <article>
        <h2>My first post</h2>
        <p>This is a short placeholder for the first blog article.</p>
        <LikeArticleButton initialLikes={0} />
      </article>

      <article>
        <h2>Learning Next.js</h2>
        <p>This article will be about my first steps with Next.js.</p>
        <LikeArticleButton initialLikes={0} />
      </article>

      <article>
        <h2>About my life</h2>
        <p>Here I will write stories, thoughts, and personal notes.</p>
        <LikeArticleButton initialLikes={0} />
      </article>

      <section>
        <h2>Latest update</h2>
        <p>This page was generated on {lastUpdated}.</p>
      </section>
    </main>
  );
}
