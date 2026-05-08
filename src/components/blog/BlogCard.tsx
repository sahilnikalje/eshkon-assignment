import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = {
  post: BlogPost;
};

// formatting date for cards
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <Card className="overflow-hidden border-neutral-800 bg-neutral-900 transition-all duration-300 hover:border-neutral-600 hover:shadow-xl hover:shadow-black/30">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
        </div>
        <CardContent className="p-5">
          <div className="mb-3 flex items-center gap-2">
            <Badge variant="secondary" className="bg-neutral-800 text-neutral-400 hover:bg-neutral-700">
              Article
            </Badge>
            <span className="text-xs text-neutral-500">{formatDate(post.publishedDate)}</span>
          </div>
          <h3 className="mb-2 text-base font-semibold leading-snug text-neutral-100 transition-colors group-hover:text-white">
            {post.title}
          </h3>
          <p className="line-clamp-2 text-sm text-neutral-400">{post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
}