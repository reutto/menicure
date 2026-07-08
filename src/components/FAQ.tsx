"use client";

import { useState } from "react";
import { faqItems } from "@/data/content";
import Reveal from "./Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-accent-dark sm:text-4xl">
            Najczęściej zadawane pytania
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal
                key={item.question}
                delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                className="overflow-hidden rounded-2xl border border-border-soft bg-surface"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-medium text-foreground">{item.question}</span>
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blush-light text-accent-dark transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm text-muted">{item.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
