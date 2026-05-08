import { Skeleton } from "@/components/ui/skeleton";

export default function BlogDetailLoading() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Skeleton className="mb-3 h-4 w-32 bg-neutral-800" />
      <Skeleton className="mb-3 h-10 w-full bg-neutral-800" />
      <Skeleton className="mb-8 h-10 w-3/4 bg-neutral-800" />
      <Skeleton className="mb-10 aspect-[16/9] w-full rounded-xl bg-neutral-800" />
      <div className="space-y-3 pt-10">
        <Skeleton className="h-4 w-full bg-neutral-800" />
        <Skeleton className="h-4 w-full bg-neutral-800" />
        <Skeleton className="h-4 w-4/5 bg-neutral-800" />
        <Skeleton className="mt-4 h-4 w-full bg-neutral-800" />
        <Skeleton className="h-4 w-3/4 bg-neutral-800" />
      </div>
    </div>
  );
}