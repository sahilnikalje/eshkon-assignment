import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-800 py-24 md:py-32">
      {/* subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-400">
          ✦ Thoughts on engineering & design
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
          Ideas worth{" "}
          <span className="bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            writing about
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg text-neutral-400">
          A blog about building products, writing clean code, and thinking clearly about hard problems.
        </p>

        <Button asChild size="lg" className="gap-2 bg-white text-neutral-900 hover:bg-neutral-200">
          <Link href="/blog">
            Read the blog <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  );
}