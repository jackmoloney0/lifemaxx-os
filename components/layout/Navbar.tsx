"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/constants";
import { useBooking } from "@/components/providers/BookingProvider";
import { Logo } from "@/components/shared/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const { openBooking } = useBooking();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border/40 bg-canvas/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
            : "bg-gradient-to-b from-deep/90 via-deep/50 to-transparent"
        )}
      >
        <nav className="nav-container mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <Logo theme={scrolled ? "light" : "dark"} />

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "font-sans text-[13px] font-medium tracking-[0.02em] transition-colors duration-300",
                    scrolled
                      ? "text-foreground-muted hover:text-foreground"
                      : "text-[#8A8480] hover:text-[var(--text-inverse)]"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 lg:block">
            <Button
              variant={scrolled ? "dark" : "default"}
              size="sm"
              className={cn(
                "px-5 transition-all duration-300",
                !scrolled &&
                  "border border-white/10 bg-[var(--accent)] shadow-[0_4px_24px_rgba(45,80,22,0.4)] hover:bg-[var(--accent-light)]"
              )}
              onClick={openBooking}
            >
              Book a Call
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "shrink-0 p-1 lg:hidden",
              scrolled ? "text-foreground" : "text-[var(--text-inverse)]"
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-deep px-6 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between gap-4">
            <Logo theme="dark" onClick={() => setMobileOpen(false)} />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="text-[var(--text-inverse)]"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>

          <ul className="mt-20 flex flex-col gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-serif text-4xl tracking-tight text-[var(--text-inverse)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            className="mt-auto w-full"
            size="lg"
            onClick={() => {
              setMobileOpen(false);
              openBooking();
            }}
          >
            Book a Call
          </Button>
        </motion.div>
      )}
    </>
  );
}
