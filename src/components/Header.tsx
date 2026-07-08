"use client";

import { useState } from "react";
import { navLinks, siteName, socialLinks } from "@/data/content";

const socialIcons: Record<string, React.ReactNode> = {
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.86.24-1.5 1.53-1.5H16.5V4.35C16.24 4.31 15.34 4.25 14.28 4.25c-2.2 0-3.78 1.34-3.78 3.8V10.5H8v3h2.5V21h3Z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="font-serif text-xl font-semibold tracking-wide text-accent-dark sm:text-2xl">
          {siteName.first}{" "}
          <span className="text-accent">{siteName.second}</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+48222997375" className="text-sm font-medium text-muted">
            +48 22 299 73 75
          </a>
          <div className="flex items-center gap-2 text-muted">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="transition-colors hover:text-accent-dark"
              >
                <span className="sr-only">{s.label}</span>
                {socialIcons[s.label]}
              </a>
            ))}
          </div>
          <a
            href="#rezerwuj"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark"
          >
            Rezerwuj online
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Otwórz menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-accent-dark lg:hidden"
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border-soft bg-surface transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-[28rem]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-blush-light hover:text-accent-dark"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+48222997375"
            className="rounded-lg px-2 py-2.5 text-sm font-medium text-muted"
          >
            +48 22 299 73 75
          </a>
          <a
            href="#rezerwuj"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white shadow-sm"
          >
            Rezerwuj online
          </a>
        </nav>
      </div>
    </header>
  );
}
