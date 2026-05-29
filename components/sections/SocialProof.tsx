"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { brandLogos, testimonials } from "@/lib/constants";
import { fadeUp, inViewOptions, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);

  return (
    <section
      ref={ref}
      className="section-pad border-t border-border bg-secondary"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <SectionLabel>Trusted by growing Irish brands</SectionLabel>

        <motion.div
          className="mt-10 flex gap-10 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {brandLogos.map((brand) => (
            <motion.div
              key={brand.name}
              variants={fadeUp}
              className={cn(
                "flex shrink-0 items-center justify-center text-foreground opacity-45 md:shrink",
                brand.className
              )}
            >
              {brand.name}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((t) => (
            <motion.div key={t.author} variants={fadeUp}>
              <Card className="h-full border-border bg-canvas shadow-sm">
                <CardContent className="flex h-full flex-col p-8 lg:p-10">
                  <div className="mb-6">
                    <p
                      className="font-serif leading-none tracking-tight text-accent"
                      style={{
                        fontSize: "clamp(2rem, 4vw, 2.5rem)",
                        fontWeight: 400,
                        color: "var(--accent)",
                      }}
                    >
                      {t.metricValue}{" "}
                      <span className="text-[0.55em] font-sans font-medium uppercase tracking-[0.12em] text-foreground-muted">
                        {t.metricLabel}
                      </span>
                    </p>
                  </div>
                  <blockquote className="font-serif text-lg italic leading-[1.5] text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-6 text-sm text-foreground-muted">
                    — {t.author}, {t.role}
                  </footer>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
