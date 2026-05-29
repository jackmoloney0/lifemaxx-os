import { Logo } from "@/components/shared/Logo";
import { Instagram, Linkedin } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-deep text-[var(--text-inverse)]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <Logo theme="dark" href="/" />

          <p className="text-center text-sm text-[var(--text-muted-warm)]">
            Dublin, Ireland · hello@fisai.ie
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-[var(--text-muted-warm)] transition-colors hover:text-[var(--text-inverse)]"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href="#"
              className="text-[var(--text-muted-warm)] transition-colors hover:text-[var(--text-inverse)]"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-[var(--text-muted-warm)] transition-colors hover:text-[var(--text-inverse)]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-[var(--text-muted-warm)] opacity-70">
          © 2026 Fís. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
