"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Services() {
  return (
    <section id="studio" className="section relative bg-cream">
      <div className="shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl"
        >
          <p className="eyebrow text-faint">What we make</p>
          <h2 className="display mt-6 text-[clamp(2rem,4.5vw,3.5rem)]">
            Three ways to work with the studio.
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.012 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="group flex min-h-[26rem] flex-col justify-between rounded-[24px] bg-graphite p-9 text-cream shadow-[0_30px_70px_-40px_rgba(26,25,22,0.7)] transition-shadow duration-500 ease-lux hover:shadow-[0_44px_90px_-40px_rgba(26,25,22,0.85)] lg:p-11"
            >
              <div>
                <div className="flex items-start justify-between">
                  <h3 className="display text-4xl text-cream">{service.title}</h3>
                  <span className="mt-2 h-1.5 w-1.5 rotate-45 bg-accent-muted transition-transform duration-500 ease-lux group-hover:rotate-[225deg]" />
                </div>
                <p className="mt-6 max-w-xs font-sans text-sm font-light leading-relaxed text-cream/60">
                  {service.subtitle}
                </p>
              </div>

              <div>
                <div className="h-px w-full bg-cream/10" />
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="font-display text-3xl text-accent-muted">
                      {service.metric}
                    </p>
                    <p className="mt-1 font-sans text-xs font-light tracking-wide text-cream/45">
                      {service.note}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="rounded-full border border-cream/25 px-5 py-2.5 font-sans text-xs font-medium tracking-wide text-cream transition-all duration-300 ease-lux hover:border-accent-muted hover:text-accent-muted"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
