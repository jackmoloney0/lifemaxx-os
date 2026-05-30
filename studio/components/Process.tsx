"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Process() {
  return (
    <section id="process" className="section bg-cream">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <p className="eyebrow text-faint">How it works</p>
            <h2 className="display mt-6 text-[clamp(2rem,4.5vw,3.5rem)]">
              A calm, deliberate process.
            </h2>
            <p className="mt-6 max-w-sm font-sans text-base font-light leading-relaxed text-faint">
              No vague milestones, no surprises. You see the direction before
              anything is produced, and you own every final frame.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="grid grid-cols-[auto_1fr] gap-8 border-t border-line py-9"
              >
                <span className="font-display text-3xl text-accent">
                  {step.number}
                </span>
                <div>
                  <h3 className="display text-3xl">{step.title}</h3>
                  <p className="mt-3 max-w-md font-sans text-sm font-light leading-relaxed text-faint">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
