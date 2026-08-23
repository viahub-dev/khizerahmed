import RevealHeading from "./RevealHeading";
import { skills, tools, interests } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-ink/[0.06] dark:border-white/[0.06]">
      <div className="container-content">
        <p className="section-label">Skills</p>
        <RevealHeading as="h2" className="text-3xl font-semibold tracking-tight mb-14">
          What I work with
        </RevealHeading>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-sm font-semibold text-ink-muted dark:text-ink-muted-dark mb-3">Programming</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((s) => (
                <span key={s.name} className="chip">
                  {s.name} · {s.level}
                </span>
              ))}
            </div>

            <h3 className="text-sm font-semibold text-ink-muted dark:text-ink-muted-dark mb-3">
              Tools &amp; Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-muted dark:text-ink-muted-dark mb-3">
              Exploring &amp; interested in
            </h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((i) => (
                <span key={i} className="chip">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
