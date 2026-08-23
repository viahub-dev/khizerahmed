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
