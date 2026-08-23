import RevealHeading from "./RevealHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-ink/[0.06] dark:border-white/[0.06]">
      <div className="container-content">
        <p className="section-label">Education</p>
        <RevealHeading as="h2" className="text-3xl font-semibold tracking-tight mb-14">
          Academic background
        </RevealHeading>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <div key={edu.institution} className="card-surface p-7">
              <p className="text-xs font-medium uppercase tracking-wide text-accent dark:text-accent-dark mb-2">
                {edu.period}
              </p>
              <h3 className="text-base font-semibold mb-1">{edu.program}</h3>
              <p className="text-sm text-ink-muted dark:text-ink-muted-dark mb-3">
                {edu.institution} · {edu.location}
              </p>
              {edu.subjects && (
                <div className="flex flex-wrap gap-2">
                  {edu.subjects.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              )}
              {edu.certification && <span className="chip">{edu.certification}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
