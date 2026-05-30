"use client";

import { motion } from "framer-motion";
import type { WorkCard } from "@/lib/workData";
import { cn } from "@/lib/cn";

const spanClass: Record<WorkCard["size"], string> = {
  tall: "work-span-tall",
  wide: "sm:col-span-2 work-span-wide",
  normal: "",
};

export function WorkGridCard({ card }: { card: WorkCard }) {
  return (
    <motion.a
      layout
      layoutId={card.client}
      href="#contact"
      data-cursor="view"
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "group work-card-ar relative block overflow-hidden rounded-[14px]",
        spanClass[card.size]
      )}
      aria-label={`${card.client} — ${card.campaign}, view campaign`}
    >
      {/* Cinematic gradient placeholder */}
      <div className="absolute inset-0" style={{ background: card.bgGradient }} />

      {/* Hover border */}
      <div className="absolute inset-0 z-20 rounded-[14px] border border-white/0 transition-colors duration-500 ease-lux group-hover:border-white/15" />

      {/* Category pill — top-left */}
      <div className="absolute left-4 top-4 z-10 rounded-[4px] border border-cream/20 bg-cream/[0.15] px-2.5 py-1 backdrop-blur-md">
        <span className="font-sans text-[9px] uppercase tracking-[0.18em] text-cream/90">
          {card.category}
        </span>
      </div>

      {/* Legibility overlay — lightens on hover */}
      <div
        className="absolute inset-0 opacity-70 transition-opacity duration-[600ms] ease-lux group-hover:opacity-50"
        style={{
          background:
            "linear-gradient(to top, rgba(26,25,22,0.80) 0%, rgba(26,25,22,0.2) 50%, transparent 100%)",
        }}
      />

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
        <div className="min-w-0 translate-y-1 transition-transform duration-500 ease-lux group-hover:translate-y-0">
          <h3 className="flex items-center gap-1.5 font-display italic text-white text-[clamp(16px,2.5vw,22px)] leading-[1.1]">
            <span className="truncate">{card.client}</span>
            <span className="shrink-0 translate-x-[-4px] text-base opacity-0 transition-all duration-500 ease-lux group-hover:translate-x-0 group-hover:opacity-100">
              →
            </span>
          </h3>
          <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.14em] text-cream/65">
            {card.campaign} · {card.season}
          </p>
        </div>

        {/* Result pill */}
        <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.12] px-3 py-1.5 backdrop-blur-md">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: "var(--accent-muted)" }}
          />
          <span className="whitespace-nowrap font-sans text-[11px] text-white">
            {card.result}
          </span>
        </div>
      </div>
    </motion.a>
  );
}
