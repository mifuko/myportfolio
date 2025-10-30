import BlogCard from "../components/BlogCard";

export default function BlogPage() {
  const posts = [
    { id: 1, title: "Build a Personal Site with Next.js", image: "/p1.jpg" },
    { id: 2, title: "Tailwind for Developers", image: "/p2.jpg" },
    { id: 3, title: "How Web3 Wallets Work", image: "/p3.jpg" },
    { id: 4, title: "Deploying with Vercel", image: "/p4.jpg" },
  ];

  return (
    <main className="min-h-screen px-10 py-20 bg-neutral-50">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">Blog</h1>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
}

