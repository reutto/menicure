"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "fingerspa-cookie-consent";

const categories = [
  { key: "essential", label: "Niezbędne", locked: true },
  { key: "preferences", label: "Preferencje", locked: false },
  { key: "statistics", label: "Statystyczne", locked: false },
  { key: "marketing", label: "Marketingowe", locked: false },
] as const;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState({
    essential: true,
    preferences: false,
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    // Reads a browser-only API, so this can't be a lazy initial state
    // (would mismatch the server-rendered markup) — must run post-mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const save = (value: typeof prefs) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-border-soft bg-surface/98 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur sm:p-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            Używamy plików cookies, aby zapewnić najlepsze doświadczenie na naszej
            stronie. Możesz zaakceptować wszystkie, odrzucić opcjonalne lub
            dostosować ustawienia.
          </p>
          <div className="flex shrink-0 flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setShowSettings((v) => !v)}
              className="rounded-full border border-border-soft px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-blush-light"
            >
              Ustawienia
            </button>
            <button
              type="button"
              onClick={() =>
                save({ essential: true, preferences: false, statistics: false, marketing: false })
              }
              className="rounded-full border border-border-soft px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-blush-light"
            >
              Odrzuć
            </button>
            <button
              type="button"
              onClick={() =>
                save({ essential: true, preferences: true, statistics: true, marketing: true })
              }
              className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Akceptuj wszystkie
            </button>
          </div>
        </div>

        {showSettings && (
          <div className="grid grid-cols-2 gap-3 rounded-xl bg-blush-light p-4 sm:grid-cols-4">
            {categories.map((cat) => (
              <label
                key={cat.key}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <input
                  type="checkbox"
                  checked={prefs[cat.key]}
                  disabled={cat.locked}
                  onChange={(e) =>
                    setPrefs((p) => ({ ...p, [cat.key]: e.target.checked }))
                  }
                  className="h-4 w-4 accent-accent"
                />
                {cat.label}
              </label>
            ))}
            <button
              type="button"
              onClick={() => save(prefs)}
              className="col-span-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-dark sm:col-span-4"
            >
              Zapisz ustawienia
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
