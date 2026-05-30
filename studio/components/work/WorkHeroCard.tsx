"use client";

import { motion } from "framer-motion";
import { heroWork } from "@/lib/workData";
import { cardReveal, viewportOnce } from "@/lib/motion";

export function WorkHeroCard() {
  return (
    <motion.a
      href="#contact"
      data-cursor="view"
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block h-[clamp(480px,65vh,720px)] w-full overflow-hidden rounded-[20px]"
      aria-label={`${heroWork.client} — ${heroWork.campaign}, view campaign`}
    >
      {/* Cinematic CSS-only background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #2C2420 0%, #1A1916 30%, #0D1A0D 60%, #1C1A18 100%)",
        }}
      />

      {/* Slow shimmer sheen */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="shimmer-sheen absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
      </div>

      {/* Bottom legibility gradient — darkens on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-lux"
        style={{
          background:
            "linear-gradient(to top, rgba(26,25,22,0.85) 0%, rgba(26,25,22,0.1) 40%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 ease-lux group-hover:bg-ink/[0.08]" />

      {/* Bottom-left content */}
      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-6 p-7 sm:p-10">
        <div>
          <h3 className="display text-3xl italic text-white sm:text-4xl">
            {heroWork.client}
          </h3>
          <p className="mt-2 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-white/55">
            {heroWork.campaign} · {heroWork.season}
          </p>

          {/* Result pill */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.12] px-3.5 py-1.5 backdrop-blur-md">
            <svg
              width="11"
              height="11"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
              className="text-accent-muted"
            >
              <path
                d="M6 10V2M6 2L2.5 5.5M6 2l3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-sans text-xs text-white">
              {heroWork.result}
            </span>
          </div>
        </div>

        {/* Bottom-right ghost link */}
        <span className="inline-flex items-center gap-1.5 font-sans text-[13px] text-white/80 transition-colors duration-300 group-hover:text-white">
          View campaign
          <span className="transition-transform duration-300 ease-lux group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </motion.a>
  );
}
