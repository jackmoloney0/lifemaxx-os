"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Shirt,
  Sparkles,
  Home,
  Package,
  Megaphone,
  TrendingUp,
  CalendarDays,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import {
  productCategories,
  budgetRanges,
  goals,
  getRecommendation,
  type CategoryId,
  type GoalId,
  type Recommendation,
} from "@/lib/briefEngineLogic";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

const icons: Record<string, LucideIcon> = {
  Shirt,
  Sparkles,
  Home,
  Package,
  Megaphone,
  TrendingUp,
  CalendarDays,
};

type Step = 1 | 2 | 3 | "result";

const crossfade = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
};

export function CreativeBriefEngine() {
  const [step, setStep] = useState<Step>(1);
  const [category, setCategory] = useState<CategoryId | null>(null);
  const [budget, setBudget] = useState<number | null>(null);
  const [goal, setGoal] = useState<GoalId | null>(null);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const recommendation: Recommendation | null =
    category && budget && goal ? getRecommendation(category, budget, goal) : null;

  const selectCategory = (id: CategoryId) => {
    setCategory(id);
    setTimeout(() => setStep(2), 300);
  };

  const selectGoal = (id: GoalId) => {
    setGoal(id);
    setTimeout(() => setStep("result"), 300);
  };

  const reset = () => {
    setStep(1);
    setCategory(null);
    setBudget(null);
    setGoal(null);
    setEmail("");
    setSent(false);
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          recommendation: recommendation?.packageName,
        }),
      });
    } catch {
      /* stub — ignore network errors */
    }
    setSent(true);
  };

  const stepIndex = step === "result" ? 3 : step;
  const budgetPct = budget ? ((budget - 1) / 4) * 100 : 0;

  return (
    <section className="section relative overflow-hidden bg-ink text-cream">
      <div className="shell relative">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow text-accent-muted">Creative Brief Engine</p>
          <h2 className="display mt-5 text-cream text-[clamp(2.5rem,5vw,4rem)] italic">
            Find your package.
          </h2>
          <p className="mt-4 font-sans text-[15px] font-light text-cream/60">
            Three questions. One recommendation. No sales call required.
          </p>
        </motion.div>

        {/* Step indicator */}
        {step !== "result" && (
          <div className="mt-12 flex items-center justify-center gap-3">
            {[1, 2, 3].map((n, i) => (
              <div key={n} className="flex items-center gap-3">
                {i > 0 && (
                  <span
                    className={cn(
                      "h-px w-8 transition-colors duration-300",
                      n <= stepIndex ? "bg-cream/70" : "bg-cream/20"
                    )}
                  />
                )}
                <span
                  className={cn(
                    "h-2.5 w-2.5 rounded-full border transition-colors duration-300",
                    n <= stepIndex
                      ? "border-cream bg-cream"
                      : "border-cream/40 bg-transparent"
                  )}
                />
              </div>
            ))}
          </div>
        )}

        {/* Form / result area */}
        <div className="mx-auto mt-12 max-w-2xl">
          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div key="step1" {...crossfade}>
                <h3 className="mb-6 text-center font-sans text-lg font-light text-cream/90">
                  What do you sell?
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {productCategories.map((c) => {
                    const Icon = icons[c.icon];
                    const selected = category === c.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => selectCategory(c.id as CategoryId)}
                        className={cn(
                          "flex flex-col items-center gap-4 rounded-2xl border p-6 text-center transition-all duration-200",
                          selected
                            ? "border-accent-muted bg-accent/30 shadow-[0_0_0_1px_var(--accent-muted)]"
                            : "border-cream/[0.12] bg-cream/[0.06] hover:bg-cream/[0.1]"
                        )}
                      >
                        <Icon
                          size={32}
                          strokeWidth={1.5}
                          className={cn(
                            "transition-colors duration-200",
                            selected ? "text-accent-muted" : "text-cream/70"
                          )}
                        />
                        <span className="font-sans text-sm text-cream">
                          {c.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div key="step2" {...crossfade}>
                <h3 className="mb-8 text-center font-sans text-lg font-light text-cream/90">
                  What&apos;s your monthly shoot budget?
                </h3>

                {/* Clickable breakpoints */}
                <div className="flex items-start justify-between gap-1">
                  {budgetRanges.map((b) => {
                    const selected = budget === b.value;
                    return (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setBudget(b.value)}
                        className="flex flex-1 flex-col items-center gap-3"
                      >
                        <span
                          className={cn(
                            "h-3.5 w-3.5 rounded-full border-2 transition-all duration-200",
                            selected
                              ? "border-accent-muted bg-accent-muted"
                              : "border-cream/40 bg-transparent"
                          )}
                        />
                        <span
                          className={cn(
                            "text-center font-sans text-[11px] transition-colors duration-200",
                            selected ? "text-cream" : "text-cream/50"
                          )}
                        >
                          {b.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Range input */}
                <input
                  type="range"
                  min={1}
                  max={5}
                  step={1}
                  value={budget ?? 3}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="brief-range mt-6 w-full"
                  style={{
                    background: `linear-gradient(to right, var(--accent-muted) 0%, var(--accent-muted) ${budgetPct}%, rgba(245,242,238,0.2) ${budgetPct}%, rgba(245,242,238,0.2) 100%)`,
                  }}
                  aria-label="Monthly shoot budget"
                />

                <AnimatePresence>
                  {budget !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-10 flex justify-center"
                    >
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3 font-sans text-sm text-cream transition-colors duration-200 hover:bg-cream hover:text-ink"
                      >
                        Next <ArrowRight size={15} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div key="step3" {...crossfade}>
                <h3 className="mb-6 text-center font-sans text-lg font-light text-cream/90">
                  What&apos;s the main goal?
                </h3>
                <div className="flex flex-col gap-4">
                  {goals.map((g) => {
                    const Icon = icons[g.icon];
                    const selected = goal === g.id;
                    return (
                      <button
                        key={g.id}
                        type="button"
                        onClick={() => selectGoal(g.id as GoalId)}
                        className={cn(
                          "flex items-center gap-5 rounded-2xl border p-5 text-left transition-all duration-200",
                          selected
                            ? "border-accent-muted bg-accent/30 shadow-[0_0_0_1px_var(--accent-muted)]"
                            : "border-cream/[0.12] bg-cream/[0.06] hover:bg-cream/[0.1]"
                        )}
                      >
                        <Icon
                          size={26}
                          strokeWidth={1.5}
                          className={cn(
                            "shrink-0 transition-colors duration-200",
                            selected ? "text-accent-muted" : "text-cream/70"
                          )}
                        />
                        <span>
                          <span className="block font-sans text-[15px] font-medium text-cream">
                            {g.label}
                          </span>
                          <span className="mt-0.5 block font-sans text-[13px] font-light text-cream/55">
                            {g.description}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* RESULT */}
            {step === "result" && recommendation && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* green bloom */}
                <div
                  className="pointer-events-none absolute -inset-10 -z-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 40%, rgba(74,124,47,0.20) 0%, transparent 60%)",
                  }}
                />
                <div className="relative rounded-[24px] border border-cream/10 bg-cream/[0.04] p-9 sm:p-11">
                  <p className="eyebrow text-accent-muted">Recommended for you</p>
                  <h3 className="display mt-4 text-cream text-[clamp(2rem,4vw,2.75rem)]">
                    {recommendation.packageName}
                  </h3>
                  <p className="mt-2 font-display text-xl italic text-cream/55">
                    {recommendation.tagline}
                  </p>
                  <p className="mt-6 font-display text-3xl text-cream">
                    {recommendation.price}
                  </p>

                  <ul className="mt-6 flex flex-col gap-2.5">
                    {recommendation.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2.5 font-sans text-sm text-cream/80"
                      >
                        <Check size={15} className="shrink-0 text-accent-muted" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-sans text-sm font-medium text-cream transition-all duration-200 hover:bg-accent-light"
                    >
                      {recommendation.ctaLabel} <ArrowRight size={15} />
                    </a>
                    <button
                      type="button"
                      onClick={reset}
                      className="font-sans text-[13px] text-cream/50 underline-offset-4 transition-colors hover:text-cream/80 hover:underline"
                    >
                      Start over
                    </button>
                  </div>

                  {/* Lead capture */}
                  <div className="mt-9 border-t border-cream/10 pt-7">
                    {sent ? (
                      <p className="font-sans text-sm text-accent-muted">
                        Sent. Check your inbox shortly.
                      </p>
                    ) : (
                      <form
                        onSubmit={sendEmail}
                        className="flex flex-col gap-4 sm:flex-row sm:items-end"
                      >
                        <label className="flex-1">
                          <span className="block font-sans text-[13px] text-cream/60">
                            Want us to email this to you?
                          </span>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@brand.com"
                            className="mt-2 w-full border-0 border-b border-cream/30 bg-transparent py-2 font-sans text-sm text-cream placeholder:text-cream/30 focus:border-cream focus:outline-none focus:ring-0"
                          />
                        </label>
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 whitespace-nowrap font-sans text-sm text-cream transition-colors hover:text-accent-muted"
                        >
                          Send it <ArrowRight size={15} />
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
