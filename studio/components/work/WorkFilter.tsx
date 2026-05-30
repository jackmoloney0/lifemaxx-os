"use client";

import { motion } from "framer-motion";
import { workCategories, type WorkFilterValue } from "@/lib/workData";
import { cn } from "@/lib/cn";

interface WorkFilterProps {
  active: WorkFilterValue;
  activeCount: number;
  onChange: (value: WorkFilterValue) => void;
}

export function WorkFilter({ active, activeCount, onChange }: WorkFilterProps) {
  return (
    <div className="-mx-1 flex items-center gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {workCategories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={cn(
              "shrink-0 rounded-full border px-[18px] py-2 font-sans text-xs tracking-[0.08em] transition-all duration-200 ease-lux",
              isActive
                ? "border-ink bg-ink text-cream"
                : "border-line bg-transparent text-faint hover:bg-cream-muted hover:text-ink"
            )}
          >
            {category}
            {isActive && category !== "All" && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="ml-1.5 text-[11px] text-cream/60"
              >
                ({activeCount})
              </motion.span>
            )}
          </button>
        );
      })}
    </div>
  );
}
