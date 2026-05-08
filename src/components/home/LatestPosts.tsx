import Link from "next/link";
import { BlogPost } from "@/types/blog";
import BlogGrid from "@/components/blog/BlogGrid";
import { ArrowRight } from "lucide-react";

type Props = {
  posts: BlogPost[];
};

export default function LatestPosts({ posts }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="mb-1 text-xs uppercase tracking-widest text-neutral-500">Latest</p>
          <h2 className="text-2xl font-semibold text-white">Recent Articles</h2>
        </div>
        <Link
          href="/blog"
          className="flex items-center gap-1 text-sm text-neutral-400 transition-colors hover:text-white"
        >
          View all <ArrowRight size={14} />
        </Link>
      </div>
      <BlogGrid posts={posts} />
    </section>
  );
}