"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { howItWorksSteps } from "@/lib/constants";
import { fadeUp, inViewOptions, staggerSteps } from "@/lib/animations";

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);

  return (
    <section id="how-it-works" ref={ref} className="section-pad">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2 className="text-section">Three steps. Forty-eight hours.</h2>

        <motion.div
          className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8"
          variants={staggerSteps}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div
            className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-16 hidden h-px border-t border-dashed border-border md:block"
            aria-hidden
          />

          {howItWorksSteps.map((step) => (
            <motion.article
              key={step.number}
              variants={fadeUp}
              className="relative overflow-visible"
            >
              <span
                className="pointer-events-none absolute -left-2 -top-4 z-0 font-serif leading-none text-foreground opacity-10"
                style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}
                aria-hidden
              >
                {step.number}
              </span>
              <div className="relative z-10 pt-10">
                <h3 className="mb-3 font-serif text-2xl font-normal text-foreground">
                  {step.title}
                </h3>
                <p className="font-sans text-base leading-relaxed text-foreground-muted">
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
