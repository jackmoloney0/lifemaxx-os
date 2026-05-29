"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart,
  Clock,
  Mic,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { whyFisFeatures } from "@/lib/constants";
import { fadeUp, inViewOptions, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Mic,
  BarChart,
  RefreshCw,
};

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const Icon = iconMap[icon] ?? Clock;

  return (
    <div className="border-l-4 border-accent pl-4">
      <div className="flex items-start gap-4">
        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
        <div>
          <h3 className="mb-1 font-serif text-lg font-normal text-foreground">
            {title}
          </h3>
          <p
            className="font-sans leading-[1.55] text-foreground-muted"
            style={{ fontSize: 15 }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function WhyFis() {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);

  return (
    <section ref={ref} className="section-pad bg-canvas-secondary">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-section">Built for the way Irish people buy.</h2>
          <p className="mt-6 font-sans text-lg leading-relaxed text-foreground-muted">
            Irish e-commerce moves fast. Your creative should keep up — without
            sounding like it was written in California.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {whyFisFeatures.map((feature) => (
            <FeatureItem
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
