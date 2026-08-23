import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="section-label justify-center">404</p>
      <h1 className="text-3xl font-semibold tracking-tight mb-4">Page not found</h1>
      <p className="text-ink-muted dark:text-ink-muted-dark mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="btn-primary">
        Back to home
      </Link>
    </main>
  );
}
