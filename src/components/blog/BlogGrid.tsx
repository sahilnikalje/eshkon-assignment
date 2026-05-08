import { BlogPost } from "@/types/blog";
import BlogCard from "./BlogCard";

type Props = {
  posts: BlogPost[];
};

export default function BlogGrid({ posts }: Props) {
  if (!posts.length) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-4xl">📭</p>
        <h3 className="mt-4 text-lg font-medium text-neutral-300">No posts yet</h3>
        <p className="mt-1 text-sm text-neutral-500">Check back soon.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}