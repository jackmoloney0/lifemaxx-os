"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/lib/constants";
import { fadeUp, inViewOptions } from "@/lib/animations";

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);

  const leftColumn = faqItems.slice(0, 3);
  const rightColumn = faqItems.slice(3);

  return (
    <section ref={ref} className="section-pad bg-canvas-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          className="max-w-2xl"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-section">Questions.</h2>
          <p className="mt-4 font-sans text-lg text-foreground-muted">
            Everything else, ask us directly.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-0 md:grid-cols-2 md:gap-x-16"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Accordion type="single" collapsible className="w-full">
            {leftColumn.map((item, i) => (
              <AccordionItem key={item.question} value={`left-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="w-full">
            {rightColumn.map((item, i) => (
              <AccordionItem key={item.question} value={`right-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
