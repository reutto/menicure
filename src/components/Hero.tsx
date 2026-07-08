"use client";

import { useEffect, useState } from "react";
import { heroSlides } from "@/data/content";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.label}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <ImagePlaceholder
              label={slide.label}
              icon="photo"
              aspect="aspect-auto"
              rounded={false}
              bordered={false}
              className="h-full min-h-[520px]"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col items-start justify-end gap-6 px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
        <h1 className="max-w-2xl font-serif text-3xl font-semibold leading-tight text-white drop-shadow-sm sm:text-4xl lg:text-5xl">
          Salon manicure i pedicure w Warszawie
        </h1>
        <p className="max-w-xl text-base text-white/90 sm:text-lg">
          Profesjonalna pielęgnacja dłoni i stóp na najwyższym poziomie — w dwóch
          lokalizacjach: Powiśle i Port Praski.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#uslugi"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-accent-dark shadow-sm transition-transform hover:scale-[1.03]"
          >
            Nasze usługi
          </a>
          <a
            href="#rezerwuj"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03]"
          >
            Rezerwuj online
          </a>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.label}
            aria-label={`Pokaż slajd ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
