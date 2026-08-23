import RevealHeading from "./RevealHeading";
import { quranTutor } from "@/lib/data";

export default function QuranTutor() {
  return (
    <section id="quran-tutor" className="py-16 md:py-24 border-t border-ink/[0.06] dark:border-white/[0.06]">
      <div className="container-content">
        <div
          className="h-[3px] w-16 opacity-50 text-walnut dark:text-accent-dark mb-6"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, currentColor 0, currentColor 2px, transparent 2px, transparent 7px)"
          }}
          aria-hidden="true"
        />
        <p className="section-label-walnut">Teaching Side</p>
        <RevealHeading as="h2" className="text-3xl font-semibold tracking-tight mb-4">
          Online Qur&apos;an Tutor
        </RevealHeading>
        <p className="text-base text-ink-muted dark:text-ink-muted-dark max-w-2xl mb-14 leading-relaxed">
          {quranTutor.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-sm font-semibold text-ink-muted dark:text-ink-muted-dark mb-4">
              Teaching scope
            </h3>
            <div className="flex flex-wrap gap-2">
              {quranTutor.scope.map((item) => (
                <span key={item} className="chip chip-walnut">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink-muted dark:text-ink-muted-dark mb-4">
              Service highlights
            </h3>
            <ul className="space-y-3">
              {quranTutor.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-ink-muted dark:text-ink-muted-dark">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-walnut dark:bg-accent-dark shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a href="#contact" className="btn-outline-walnut mt-12">
          Get in touch about Qur&apos;an lessons
        </a>
      </div>
    </section>
  );
}
