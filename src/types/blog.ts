import { Document } from "@contentful/rich-text-types";

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  content: Document;
  coverImage: string;
  publishedDate: string;
};

export type BlogPostPreview = Omit<BlogPost, "content">;