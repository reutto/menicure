import { services } from "@/data/content";
import Reveal from "./Reveal";

const serviceIcons: Record<string, string> = {
  hand: "M8 12V5a1.5 1.5 0 0 1 3 0v5m0-4a1.5 1.5 0 0 1 3 0v4m0-3a1.5 1.5 0 0 1 3 0v5m-9 1c-1.5-1.5-3-1-3 .5C5 17 8 21 12 21s7-3.5 7-8v-3a1.5 1.5 0 0 0-3 0",
  foot: "M9 3c-2 0-3 2-3 4 0 1.5.5 2.5 0 4-1 2-2 3-2 6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4c0-4-3-5-4-8-.5-1.5 0-3-1-4.5C12 3.5 10.5 3 9 3Z",
  gel: "M9 2h6l-1 5 2 2v9a4 4 0 0 1-8 0V9l2-2-1-5Z",
  brow: "M3 15c2-4 6-6 9-6s6 1 9 3",
  sparkle: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18",
  classic: "M12 2c1 2 3 3 3 6a3 3 0 1 1-6 0c0-3 2-4 3-6ZM6 22v-4a6 6 0 0 1 12 0v4",
};

export default function Services() {
  return (
    <section id="uslugi" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-accent-dark sm:text-4xl">
            Nasze Usługi
          </h2>
          <p className="mt-4 text-muted">
            Pełna oferta pielęgnacji dłoni i stóp w jednym miejscu.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.name}
              delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
              className="flex flex-col items-start gap-4 rounded-2xl border border-border-soft bg-surface p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blush-light text-accent-dark">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d={serviceIcons[service.icon]} />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-accent">
                  od {service.priceFrom} zł
                </p>
              </div>
              <a
                href="#rezerwuj"
                className="mt-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Umów wizytę
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href="#uslugi"
            className="text-sm font-semibold text-accent-dark underline underline-offset-4 hover:text-accent"
          >
            Zobacz wszystkie usługi
          </a>
        </Reveal>
      </div>
    </section>
  );
}
