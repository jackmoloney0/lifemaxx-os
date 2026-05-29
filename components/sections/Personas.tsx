"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personas } from "@/lib/constants";
import { CreatorReelPreview } from "@/components/shared/CreatorReelPreview";
import { fadeUp, inViewOptions, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Personas() {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);

  return (
    <section id="creators" ref={ref} className="section-pad bg-canvas-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2 className="text-section">Your creative team.</h2>
        <p className="mt-6 max-w-2xl font-sans text-lg text-foreground-muted">
          Four Irish creators. Each with a distinct voice, audience, and aesthetic.
          Hover to preview their reel.
        </p>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {personas.map((persona) => (
            <motion.article
              key={persona.handle}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "rounded-2xl border border-border/50 bg-gradient-to-br p-8 shadow-sm transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] lg:p-10",
                persona.gradient
              )}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <CreatorReelPreview
                  videoSrc={persona.reelVideo}
                  name={persona.name}
                  accentColor={persona.accentColor}
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-2xl text-foreground">
                    {persona.name}
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    {persona.handle}
                  </p>
                  <p className="mt-1 text-xs text-foreground-muted">
                    {persona.age} · {persona.location} · {persona.accent}
                  </p>
                  <p className="mt-0.5 text-[11px] text-foreground-muted">
                    {persona.since}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {persona.niches.map((niche) => (
                  <span
                    key={niche}
                    className="whitespace-nowrap rounded-full border border-border px-2.5 py-[3px] font-sans text-[11px] text-foreground"
                    style={{ background: "rgba(255,255,255,0.7)" }}
                  >
                    {niche}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                {persona.bio}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Available for your niche
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
