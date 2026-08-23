import { site } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="grid-backdrop absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-content">
        <div className="flex items-center gap-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="sonar-dot absolute inline-flex h-2 w-2 rounded-full bg-emerald-500 text-emerald-500" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-ink-muted dark:text-ink-muted-dark">
            Open to collaborations &amp; professional opportunities
          </span>
        </div>

        <div className="flex items-center gap-5 mb-8">
          <div className="relative shrink-0">
          <div className="h-48 w-40 overflow-hidden rounded-2xl border border-accent/30 dark:border-accent-dark/30">
           <Image
             src="/images/khizer.jpeg"
             alt="Khizer Ahmed"
             width={280} 
             height={360}
             quality={100}
             className="h-full w-full object-cover"
            />
         </div>
                  {/* This pencil badge is a placeholder for a future owner-only "change photo"
                action once the private admin area exists. It is not functional yet and
                should not be visible to public visitors in that future version. */}
            <span className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-accent dark:bg-accent-dark text-white dark:text-bg-dark flex items-center justify-center border-2 border-bg dark:border-bg-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
            </span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight max-w-3xl">
          {site.name}
        </h1>
        <p className="mt-3 text-lg sm:text-xl font-medium text-accent dark:text-accent-dark">{site.role}</p>
        <p className="mt-6 max-w-xl text-base sm:text-lg text-ink-muted dark:text-ink-muted-dark">
          {site.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#projects" className="btn-primary">
            View my work
          </a>
          <a href="#contact" className="btn-secondary">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
