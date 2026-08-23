import RevealHeading from "./RevealHeading";
import { tutoring } from "@/lib/data";

export default function Tutoring() {
  return (
    <section id="tutoring" className="py-16 md:py-24 border-t border-ink/[0.06] dark:border-white/[0.06]">
      <div className="container-content">
        <p className="section-label">Teaching Side</p>
        <RevealHeading as="h2" className="text-3xl font-semibold tracking-tight mb-4">
          Online Academic Tutor
        </RevealHeading>
        <p className="text-ink-muted dark:text-ink-muted-dark max-w-2xl mb-14">{tutoring.intro}</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {tutoring.classes.map((c) => (
            <div key={c.grade} className="card-surface p-7">
              <h3 className="text-base font-semibold mb-3">{c.grade}</h3>
              {c.subjects.length === 1 && c.subjects[0] === "All Subjects" ? (
                <p className="text-sm text-ink-muted dark:text-ink-muted-dark">All Subjects</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {c.subjects.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <a href="#contact" className="btn-primary mt-10">
          Get in touch about tutoring
        </a>
      </div>
    </section>
  );
}
