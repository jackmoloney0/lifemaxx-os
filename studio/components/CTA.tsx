"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function CTA() {
  return (
    <section className="section bg-cream">
      <div className="shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grain relative overflow-hidden rounded-[28px] bg-graphite px-8 py-[clamp(4rem,9vw,8rem)] text-center shadow-[0_50px_120px_-50px_rgba(26,25,22,0.8)] sm:px-16"
        >
          <div
            className="pointer-events-none absolute -top-1/3 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(74,124,47,0.28) 0%, transparent 65%)",
            }}
          />
          <p className="eyebrow relative text-cream/55">Let&apos;s begin</p>
          <h2 className="display relative mx-auto mt-6 max-w-[16ch] text-cream text-[clamp(2.2rem,5.5vw,4.5rem)]">
            Let&apos;s make something worth looking at.
          </h2>
          <div className="relative mt-11 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@fis.ie"
              className="rounded-full bg-accent px-8 py-4 font-sans text-sm font-medium text-cream shadow-[0_18px_50px_-18px_rgba(45,80,22,0.95)] transition-all duration-300 ease-lux hover:-translate-y-0.5 hover:bg-accent-light"
            >
              Book a creative call
            </a>
            <a
              href="#work"
              className="rounded-full border border-cream/25 px-8 py-4 font-sans text-sm font-light text-cream/90 transition-all duration-300 ease-lux hover:border-cream/60"
            >
              See the work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
