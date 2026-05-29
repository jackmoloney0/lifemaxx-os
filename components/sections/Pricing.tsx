"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/lib/constants";
import { useBooking } from "@/components/providers/BookingProvider";
import { CtaMicrocopy } from "@/components/shared/CtaMicrocopy";
import { fadeUp, inViewOptions, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, inViewOptions);
  const { openBooking } = useBooking();

  return (
    <section id="pricing" ref={ref} className="section-pad">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2 className="text-section">Straightforward pricing.</h2>
        <p className="mt-6 max-w-xl font-sans text-lg text-foreground-muted">
          No retainers with hidden extras. No surprise invoices.
        </p>

        <motion.div
          className="mt-16 grid gap-8 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {pricingPlans.map((plan) => {
            const isGrowth = plan.popular;
            const isCustom = "isCustom" in plan && plan.isCustom;

            return (
              <motion.div
                key={plan.id}
                variants={fadeUp}
                className={cn("relative", isGrowth && "lg:-mt-4 lg:mb-4")}
              >
                {isGrowth && (
                  <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-accent px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--text-inverse)]">
                    Most Popular
                  </span>
                )}

                <div
                  className={cn(
                    "flex h-full flex-col rounded-3xl border p-8 lg:p-10",
                    isGrowth
                      ? "border-accent bg-deep outline outline-2 outline-accent outline-offset-[-2px]"
                      : "border-border bg-canvas"
                  )}
                >
                  <p
                    className={cn(
                      "text-eyebrow normal-case tracking-[0.1em]",
                      isGrowth
                        ? "text-[var(--text-inverse)]"
                        : "text-foreground-muted"
                    )}
                  >
                    {plan.name}
                  </p>
                  <p
                    className={cn(
                      "mt-2 font-sans text-sm",
                      isGrowth
                        ? "text-[var(--text-inverse)]/70"
                        : "text-foreground-muted"
                    )}
                  >
                    {plan.videos}
                  </p>

                  <div className={cn("mt-6", isCustom ? "mb-4" : "mb-8")}>
                    <span
                      className="font-serif tracking-tight text-foreground"
                      style={{
                        fontSize: isCustom
                          ? "1.75rem"
                          : "clamp(2rem, 4vw, 3rem)",
                        color: isGrowth
                          ? "var(--text-inverse)"
                          : "var(--text-primary)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span
                        className={cn(
                          "ml-1.5 font-sans",
                          isCustom ? "mt-0.5 block text-[13px]" : "text-sm"
                        )}
                        style={{
                          color: isGrowth
                            ? "rgba(245,242,238,0.6)"
                            : "var(--text-secondary)",
                        }}
                      >
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {isCustom && "customDescription" in plan ? (
                    <p className="flex-1 font-sans text-sm leading-relaxed text-foreground-muted">
                      {plan.customDescription}
                    </p>
                  ) : (
                    <ul className="flex-1 space-y-2.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5"
                        >
                          <Check
                            className="mt-[3px] h-3.5 w-3.5 shrink-0"
                            style={{
                              color: isGrowth
                                ? "var(--accent-muted)"
                                : "var(--accent)",
                            }}
                            strokeWidth={2}
                          />
                          <span
                            className="font-sans text-sm leading-snug"
                            style={{
                              color: isGrowth
                                ? "var(--text-inverse)"
                                : "var(--text-primary)",
                            }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Button
                    className={cn(
                      "mt-10 w-full transition-transform hover:scale-[0.97]",
                      isGrowth && "bg-accent hover:bg-[var(--accent-light)]"
                    )}
                    variant={
                      isCustom ? "outline" : isGrowth ? "default" : "default"
                    }
                    onClick={openBooking}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <CtaMicrocopy className="mx-auto mt-12 max-w-lg text-center" />
      </div>
    </section>
  );
}
