import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          The Blog
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/blog"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            Articles
          </Link>
          <Button asChild size="sm" variant="outline" className="border-neutral-700 text-neutral-200 hover:bg-neutral-800 hover:text-white">
            <Link href="/blog">Start Reading</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}