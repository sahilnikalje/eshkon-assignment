import { getPosts } from "@/lib/contentful";
import BlogGrid from "@/components/blog/BlogGrid";
import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog — The Blog",
  description: "All articles on engineering, design, and building products.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12">
        <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500">All Articles</p>
        <h1 className="text-3xl font-bold text-white">The Blog</h1>
        <p className="mt-2 text-neutral-400">
          {posts.length} {posts.length === 1 ? "article" : "articles"} published
        </p>
      </div>
      <BlogGrid posts={posts} />
    </div>
  );
}