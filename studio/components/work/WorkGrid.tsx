"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { workCards, type WorkFilterValue } from "@/lib/workData";
import { WorkGridCard } from "./WorkGridCard";
import { WorkFilter } from "./WorkFilter";

export function WorkGrid() {
  const [active, setActive] = useState<WorkFilterValue>("All");

  const filtered = useMemo(() => {
    if (active === "All") return workCards;
    return workCards.filter((card) => card.category === active);
  }, [active]);

  return (
    <div className="flex flex-col gap-8">
      <WorkFilter
        active={active}
        activeCount={filtered.length}
        onChange={setActive}
      />

      <LayoutGroup>
        {filtered.length > 0 ? (
          <motion.div layout className="work-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((card) => (
                <WorkGridCard key={card.client} card={card} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex min-h-[220px] items-center justify-center rounded-[14px] border border-line bg-cream/40"
          >
            <p className="display text-2xl italic text-faint">
              More campaigns coming soon.
            </p>
          </motion.div>
        )}
      </LayoutGroup>
    </div>
  );
}
