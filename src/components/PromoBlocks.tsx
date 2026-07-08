import { promoBlocks } from "@/data/content";
import Reveal from "./Reveal";
import ImagePlaceholder from "./ImagePlaceholder";

export default function PromoBlocks() {
  return (
    <section className="bg-blush-light py-20 sm:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        {promoBlocks.map((block, i) => (
          <Reveal
            key={block.title}
            className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-14 ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full lg:w-1/2">
              <ImagePlaceholder
                label={`Sekcja — ${block.title}`}
                icon={i % 2 === 0 ? "hand" : "foot"}
                aspect="aspect-[4/3]"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
                {block.title}
              </h3>
              <p className="mt-4 text-muted">{block.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
