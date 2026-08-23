import { ArrowUpRight } from "lucide-react";
import RevealHeading from "./RevealHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-t border-ink/[0.06] dark:border-white/[0.06]">
      <div className="container-content">
        <p className="section-label">Projects</p>
        <RevealHeading as="h2" className="text-3xl font-semibold tracking-tight mb-14">
          Things I&apos;ve built
        </RevealHeading>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.slug}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface group p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 dark:hover:shadow-black/30"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-ink-muted dark:text-ink-muted-dark transition-all group-hover:text-accent dark:group-hover:text-accent-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="mt-3 text-base text-ink-muted dark:text-ink-muted-dark leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="chip">{project.category}</span>
                <span className="chip">{project.date}</span>
                <span className="chip">{project.role}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
