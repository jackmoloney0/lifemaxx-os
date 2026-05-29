"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CtaMicrocopy } from "@/components/shared/CtaMicrocopy";
import { useBooking } from "@/components/providers/BookingProvider";
import { fadeUp, inViewOptions } from "@/lib/animations";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);
  const { openBooking } = useBooking();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-deep"
      style={{ padding: "10rem 0" }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          opacity: 0.18,
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
        <motion.h2
          className="font-serif text-[var(--text-inverse)]"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Most brands don&apos;t need
          <br />
          more ads.
          <br />
          They need better creative.
        </motion.h2>

        <motion.p
          className="mx-auto mt-10 max-w-[520px] font-sans text-lg leading-relaxed"
          style={{ color: "#8A8480" }}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Book a 20-minute strategy call. We&apos;ll audit your current creative,
          identify what&apos;s killing performance, and show you exactly what Fís
          would produce for your brand.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="px-10 py-[18px] text-[15px] transition-all hover:scale-[0.97] hover:bg-[var(--accent-light)]"
              onClick={openBooking}
            >
              Book Strategy Call
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#pricing" className="text-[#8A8480] hover:text-[var(--text-inverse)]">
                View Pricing &amp; Packages ↓
              </a>
            </Button>
          </div>
          <CtaMicrocopy className="mx-auto text-center text-[#6B6560]" />
        </motion.div>
      </div>
    </section>
  );
}
