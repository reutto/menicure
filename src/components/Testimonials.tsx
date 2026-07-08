import { testimonials } from "@/data/content";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="opinie" className="bg-blush-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-accent-dark sm:text-4xl">
            Co mówią nasi Klienci?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <span className="rounded-full bg-surface px-5 py-2 text-sm font-semibold text-foreground shadow-sm">
              Booksy ★ 4.9 · 3000+ opinii
            </span>
            <span className="rounded-full bg-surface px-5 py-2 text-sm font-semibold text-foreground shadow-sm">
              Google ★ 4.8 · 220+ opinii
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={`${t.name}-${i}`}
              delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
              className="flex h-full flex-col gap-3 rounded-2xl border border-border-soft bg-surface p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-foreground">{t.name}</p>
                <span className="rounded-full bg-blush px-3 py-1 text-xs font-semibold text-accent-dark">
                  {t.source}
                </span>
              </div>
              <p className="text-sm text-muted">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-auto text-xs text-muted/70">{t.date}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
