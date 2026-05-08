export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} The Blog. Built with Next.js & Contentful.
      </div>
    </footer>
  );
}