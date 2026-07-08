import { locations, navLinks, siteName, socialLinks } from "@/data/content";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="kontakt" className="border-t border-border-soft bg-foreground text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-xl font-semibold text-white">
              {siteName.first} <span className="text-accent">{siteName.second}</span>
            </p>
            <p className="mt-3 text-sm">
              Salon manicure i pedicure w Warszawie — Powiśle i Port Praski.
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-3 py-1 text-xs transition-colors hover:border-white/50 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Nawigacja</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#polityka-prywatnosci" className="transition-colors hover:text-white">
                  Polityka Prywatności
                </a>
              </li>
            </ul>
          </div>

          {locations.map((loc) => (
            <div key={loc.name}>
              <p className="text-sm font-semibold text-white">{loc.name}</p>
              <p className="mt-3 text-sm">{loc.address}</p>
              <p className="mt-1 text-sm">{loc.hours}</p>
              <p className="text-sm">{loc.hoursSat}</p>
              <p className="mt-1 text-sm font-semibold text-accent">{loc.phone}</p>
            </div>
          ))}
        </Reveal>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs">
          <p>
            © 2026 {siteName.first} {siteName.second} – Wszystkie Prawa Zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
