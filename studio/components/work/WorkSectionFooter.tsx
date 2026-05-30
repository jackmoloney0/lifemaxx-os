"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function WorkSectionFooter() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid grid-cols-1 gap-10 lg:grid-cols-2"
    >
      {/* Left — deliberate whitespace */}
      <div aria-hidden className="hidden lg:block" />

      {/* Right — CTA block */}
      <div className="lg:max-w-md lg:justify-self-end">
        <p className="eyebrow text-faint">Ready to replace your studio?</p>
        <p className="display mt-4 text-[22px] italic leading-snug text-ink sm:text-[26px]">
          See what Fís would create for your next campaign.
        </p>
        <a
          href="#contact"
          data-cursor="cta"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-sans text-[13px] font-medium text-cream transition-colors duration-200 ease-lux hover:bg-accent"
        >
          Book a creative call
          <span aria-hidden>→</span>
        </a>
      </div>
    </motion.div>
  );
}
