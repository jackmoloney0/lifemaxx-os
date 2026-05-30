import { Wordmark } from "./Wordmark";
import { navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-cream pb-12 pt-4">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-10 border-t border-line pt-12 md:flex-row md:items-center">
          <Wordmark />

          <nav className="flex flex-wrap gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-light text-faint transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@fis.ie"
              className="font-sans text-sm font-light text-faint transition-colors hover:text-ink"
            >
              hello@fis.ie
            </a>
          </nav>
        </div>

        <p className="mt-10 font-sans text-xs font-light tracking-wide text-faint/70">
          © 2026 Fís. Campaign imagery for considered brands.
        </p>
      </div>
    </footer>
  );
}
