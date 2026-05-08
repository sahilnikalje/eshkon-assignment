import { getPosts } from "@/lib/contentful";
import Hero from "@/components/home/Hero";
import LatestPosts from "@/components/home/LatestPosts";

export const revalidate = 60;

export default async function HomePage() {
  const posts = await getPosts();
  const latest = posts.slice(0, 3);

  return (
    <>
      <Hero />
      <LatestPosts posts={latest} />
    </>
  );
}