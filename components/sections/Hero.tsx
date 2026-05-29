"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/shared/AnimatedText";
import { CtaMicrocopy } from "@/components/shared/CtaMicrocopy";
import { VideoMockup } from "@/components/shared/VideoMockup";
import { useBooking } from "@/components/providers/BookingProvider";

export function Hero() {
  const { openBooking } = useBooking();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-deep">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% -20%, rgba(45,80,22,0.18) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 85% 40%, rgba(45,80,22,0.22) 0%, transparent 50%), linear-gradient(180deg, #1a1916 0%, #121110 55%, #1a1916 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 100%, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col px-6 pt-[7.5rem] pb-20 lg:px-12 lg:pt-[8.5rem] lg:pb-28"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid flex-1 items-center gap-14 lg:grid-cols-12 lg:gap-6 xl:gap-10">
          <motion.div
            className="flex flex-col justify-center lg:col-span-7 lg:pr-8 xl:pr-12"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-8 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#6B6560]">
              Irish creators · 48-hour delivery
            </p>

            <AnimatedText
              text="Ads people actually watch."
              className="text-display max-w-[14ch] text-[var(--text-inverse)]"
              as="h1"
            />

            <motion.p
              className="mt-8 max-w-lg font-sans text-lg leading-[1.65] tracking-[-0.01em] text-[#8A8480] sm:text-xl sm:leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.55 }}
            >
              Fís matches you with top Irish creators to script, shoot, and
              deliver high-converting UGC video ads. 48-hour delivery. A fraction
              of the agency cost.
            </motion.p>

            <motion.div
              className="mt-12 flex flex-col gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.55 }}
            >
              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                <Button
                  size="lg"
                  className="min-w-[160px] px-8 shadow-[0_8px_32px_rgba(45,80,22,0.35)] transition-all hover:scale-[0.97]"
                  onClick={openBooking}
                >
                  Book a Call
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <a
                    href="#pricing"
                    className="text-[#8A8480] hover:text-[var(--text-inverse)]"
                  >
                    View Pricing &amp; Packages ↓
                  </a>
                </Button>
              </div>
              <CtaMicrocopy className="text-[#6B6560]" />
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center lg:col-span-5 lg:justify-end"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <VideoMockup />
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#5a5652]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-[#6B6560] to-transparent"
        />
      </div>
    </section>
  );
}
