import RevealHeading from "./RevealHeading";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-ink/[0.06] dark:border-white/[0.06]">
      <div className="container-content grid md:grid-cols-[1fr_1.3fr] gap-12">
        <div>
          <p className="section-label">About</p>
          <RevealHeading as="h2" className="text-3xl font-semibold tracking-tight">
            Who I am
          </RevealHeading>
        </div>

        <div>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-base text-ink-muted dark:text-ink-muted-dark leading-relaxed mb-5 max-w-2xl">
              {p}
            </p>
          ))}

          <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 max-w-lg">
            {about.highlights.map((h) => (
              <div key={h.label}>
                <dt className="text-xs uppercase tracking-wide text-ink-muted dark:text-ink-muted-dark mb-1">
                  {h.label}
                </dt>
                <dd className="text-sm font-medium">{h.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 card-surface p-5 max-w-lg">
            <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed">
              {about.quickHighlight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
