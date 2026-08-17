import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="text-[var(--fg-dim)]">That route doesn&apos;t exist on this portfolio.</p>
      <Link
        href="/"
        className="rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-black"
      >
        Back home
      </Link>
    </div>
  );
}
