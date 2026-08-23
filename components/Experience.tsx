import RevealHeading from "./RevealHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-ink/[0.06] dark:border-white/[0.06]">
      <div className="container-content">
        <p className="section-label">Experience</p>
        <RevealHeading as="h2" className="text-3xl font-semibold tracking-tight mb-14">
          Where I&apos;ve been
        </RevealHeading>

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink/10 dark:bg-white/10" aria-hidden="true" />
          <div className="space-y-10">
            {experience.map((item) => (
              <div key={item.title} className="relative pl-8">
                <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent dark:border-accent-dark bg-bg dark:bg-bg-dark" />
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="text-sm text-ink-muted dark:text-ink-muted-dark mb-2">{item.org}</p>
                <p className="text-base text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
