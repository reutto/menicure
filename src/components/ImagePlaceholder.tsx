type IconName =
  | "hand"
  | "foot"
  | "gel"
  | "brow"
  | "sparkle"
  | "classic"
  | "photo"
  | "map"
  | "user";

const icons: Record<IconName, React.ReactNode> = {
  hand: (
    <path d="M8 12V5a1.5 1.5 0 0 1 3 0v5m0-4a1.5 1.5 0 0 1 3 0v4m0-3a1.5 1.5 0 0 1 3 0v5m-9 1c-1.5-1.5-3-1-3 .5C5 17 8 21 12 21s7-3.5 7-8v-3a1.5 1.5 0 0 0-3 0" />
  ),
  foot: (
    <path d="M9 3c-2 0-3 2-3 4 0 1.5.5 2.5 0 4-1 2-2 3-2 6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4c0-4-3-5-4-8-.5-1.5 0-3-1-4.5C12 3.5 10.5 3 9 3Z" />
  ),
  gel: (
    <path d="M9 2h6l-1 5 2 2v9a4 4 0 0 1-8 0V9l2-2-1-5Z" />
  ),
  brow: (
    <path d="M3 15c2-4 6-6 9-6s6 1 9 3" />
  ),
  sparkle: (
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
  ),
  classic: (
    <path d="M12 2c1 2 3 3 3 6a3 3 0 1 1-6 0c0-3 2-4 3-6ZM6 22v-4a6 6 0 0 1 12 0v4" />
  ),
  photo: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="11" r="2" />
      <path d="m21 16-4.5-4.5a2 2 0 0 0-2.8 0L7 18" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4.5 5-6 8-6s6.5 1.5 8 6" />
    </>
  ),
};

type ImagePlaceholderProps = {
  label: string;
  icon?: IconName;
  aspect?: string;
  rounded?: boolean;
  bordered?: boolean;
  className?: string;
};

export default function ImagePlaceholder({
  label,
  icon = "photo",
  aspect = "aspect-[4/3]",
  rounded = true,
  bordered = true,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br from-blush-light to-blush text-accent-dark ${
        rounded ? "rounded-2xl" : ""
      } ${bordered ? "border border-border-soft" : ""} ${aspect} ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-10 w-10 opacity-70"
        aria-hidden="true"
      >
        {icons[icon]}
      </svg>
      <span className="px-3 text-center text-xs font-medium text-accent-dark/80">
        {label}
      </span>
    </div>
  );
}
