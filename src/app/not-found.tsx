import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-6xl font-bold text-neutral-700">404</p>
      <h2 className="mt-4 text-xl font-semibold text-white">Page not found</h2>
      <p className="mt-2 text-neutral-500">
        This article doesn&apos;t exist or may have been removed.
      </p>
      <Button asChild className="mt-8 bg-white text-neutral-900 hover:bg-neutral-200">
        <Link href="/blog">Back to Blog</Link>
      </Button>
    </div>
  );
}