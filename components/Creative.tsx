import RevealHeading from "./RevealHeading";
import { creativeCategories } from "@/lib/data";

export default function Creative() {
  return (
    <section id="creative" className="py-16 md:py-24 border-t border-ink/[0.06] dark:border-white/[0.06]">
      <div className="container-content">
        <p className="section-label">Creative Side</p>
        <RevealHeading as="h2" className="text-3xl font-semibold tracking-tight mb-4">
          Graphic Artist &amp; Creative Work
        </RevealHeading>
        <p className="text-ink-muted dark:text-ink-muted-dark max-w-2xl mb-14">
          Alongside computer science, I take on client artwork, creative assignments, and commission-based
          design work.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {creativeCategories.map((cat) => (
            <div key={cat.title} className="card-surface p-7">
              <h3 className="text-base font-semibold mb-2">{cat.title}</h3>
              <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
