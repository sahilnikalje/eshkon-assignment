import { createClient } from "contentful";
import { BlogPost } from "@/types/blog";
import { Document } from "@contentful/rich-text-types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

function mapPost(item: any): BlogPost {
  return {
    title: item.fields.title as string,
    slug: item.fields.slug as string,
    excerpt: item.fields.excerpt as string,
    content: item.fields.content as Document,
    coverImage: "https:" + item.fields.coverImage.fields.file.url,
    publishedDate: item.fields.publishedDate as string,
  };
}

export async function getPosts(): Promise<BlogPost[]> {
  const res = await client.getEntries({
    content_type: "blogPost",
    order: ["-fields.publishedDate"],
  });

  return res.items.map(mapPost);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const res = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": slug,
    limit: 1,
  });

  if (!res.items.length) return null;
  return mapPost(res.items[0]);
}