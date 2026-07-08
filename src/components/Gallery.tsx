import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

const galleryItems = [
  "Galeria — realizacja 1",
  "Galeria — realizacja 2",
  "Galeria — realizacja 3",
  "Galeria — realizacja 4",
  "Galeria — realizacja 5",
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-blush-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-semibold text-accent-dark sm:text-4xl">
            Galeria Realizacji
          </h2>
          <p className="mt-4 text-muted">
            Efekty pracy naszych stylistek – każda realizacja to indywidualny
            projekt dopasowany do Ciebie.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {galleryItems.map((label, i) => (
            <Reveal key={label} delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}>
              <ImagePlaceholder label={label} icon="photo" aspect="aspect-square" />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href="#galeria"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark"
          >
            Zobacz całą galerię
          </a>
        </Reveal>
      </div>
    </section>
  );
}
