"use client";

import { motion } from "framer-motion";
import { workStats } from "@/lib/workData";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { CountUpNumber } from "@/components/shared/CountUpNumber";

export function WorkSectionHeader() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1.2fr_1fr]"
    >
      {/* Left — headline */}
      <div>
        <p className="eyebrow text-faint">Selected work</p>
        <h2 className="display mt-5 italic text-ink text-[clamp(3.5rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.03em]">
          The work.
        </h2>
        <p className="mt-5 max-w-md font-sans text-[15px] font-light leading-relaxed text-faint">
          Campaigns for fashion, beauty, and lifestyle brands — created by Fís,
          finished by hand.
        </p>
      </div>

      {/* Right — live stats */}
      <div className="flex items-stretch gap-6 sm:gap-10 lg:justify-end">
        {workStats.map((stat, i) => (
          <div key={stat.label} className="flex items-stretch gap-6 sm:gap-10">
            {i > 0 && <span className="w-px self-stretch bg-line" />}
            <div>
              <CountUpNumber
                value={stat.value}
                suffix={stat.suffix}
                className="display block text-ink text-[clamp(2rem,4vw,3.5rem)] leading-none [font-variant-numeric:tabular-nums]"
              />
              <span className="mt-2 block font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
