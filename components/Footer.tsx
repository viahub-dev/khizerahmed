import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ink/[0.06] dark:border-white/[0.06] py-8">
      <div className="container-content flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-muted dark:text-ink-muted-dark">
        <p>© {new Date().getFullYear()} {site.name}. Built with Next.js &amp; Tailwind CSS.</p>
        <p>{site.location}</p>
      </div>
    </footer>
  );
}
