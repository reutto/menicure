import { locations } from "@/data/content";
import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Locations() {
  return (
    <section id="lokalizacje" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-accent-dark sm:text-4xl">
            Lokalizacje
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {locations.map((loc, i) => (
            <Reveal
              key={loc.name}
              delay={i === 0 ? 1 : 2}
              className="overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-sm"
            >
              <ImagePlaceholder
                label={`Mapa — ${loc.name}`}
                icon="map"
                aspect="aspect-[16/9]"
                rounded={false}
                bordered={false}
              />
              <div className="flex flex-col gap-2 p-6">
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {loc.name}
                </h3>
                <p className="text-sm text-muted">{loc.address}</p>
                <p className="text-sm text-muted">{loc.hours}</p>
                <p className="text-sm text-muted">{loc.hoursSat}</p>
                <p className="text-sm font-semibold text-accent">{loc.phone}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="#lokalizacje"
                    className="rounded-full border border-border-soft px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-blush-light"
                  >
                    Zobacz na mapie
                  </a>
                  <a
                    href="#rezerwuj"
                    className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                  >
                    Umów wizytę
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
