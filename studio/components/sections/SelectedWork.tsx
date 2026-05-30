"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WorkSectionHeader } from "@/components/work/WorkSectionHeader";
import { WorkHeroCard } from "@/components/work/WorkHeroCard";
import { WorkGrid } from "@/components/work/WorkGrid";
import { WorkSectionFooter } from "@/components/work/WorkSectionFooter";
import { CursorFollower } from "@/components/shared/CursorFollower";

export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelInView = useInView(sectionRef, { margin: "-20% 0px -20% 0px" });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="cursor-none-fine relative bg-cream-muted"
    >
      {/* Custom cursor — desktop fine pointers only, scoped to this section */}
      <CursorFollower containerRef={sectionRef} />

      {/* Vertical scroll-linked section label (desktop only) */}
      <motion.span
        aria-hidden
        animate={{ opacity: labelInView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed left-4 top-1/2 z-10 hidden font-sans text-[10px] uppercase tracking-[0.25em] text-line xl:block"
        style={{
          writingMode: "vertical-rl",
          transform: "translateY(-50%) rotate(180deg)",
        }}
      >
        Fís · Selected Work
      </motion.span>

      <div className="section shell flex flex-col gap-14 sm:gap-16">
        <WorkSectionHeader />
        <WorkHeroCard />
        <WorkGrid />
        <WorkSectionFooter />
      </div>
    </section>
  );
}
