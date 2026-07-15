export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <h1>Farhad Blog</h1>
      {children}
    </section>
  );
}
