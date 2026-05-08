import { notFound } from "next/navigation";
import Image from "next/image";
import { getPosts, getPostBySlug } from "@/lib/contentful";
import RichTextRenderer from "@/components/blog/RichTextRender";
import type { Metadata } from "next";

export const revalidate = 60;

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} — The Blog`,
    description: post.excerpt,
  };
}

// formatting date for the detail header
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      {/* header */}
      <div className="mb-8">
        <p className="mb-3 text-sm text-neutral-500">{formatDate(post.publishedDate)}</p>
        <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
          {post.title}
        </h1>
        <p className="text-lg text-neutral-400">{post.excerpt}</p>
      </div>

      {/* cover image */}
      <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      {/* rich text */}
      <div className="border-t border-neutral-800 pt-10">
        <RichTextRenderer content={post.content} />
      </div>
    </article>
  );
}