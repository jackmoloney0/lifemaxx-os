"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import {
  pricingPackages,
  comparisonRows,
  type PricingPackage,
  type ComparisonRow,
} from "@/lib/pricingData";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Mode = "cards" | "table";

export function Pricing() {
  const [mode, setMode] = useState<Mode>("cards");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="pricing" className="section bg-cream">
      <div className="shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center"
        >
          <p className="eyebrow text-faint">Packages</p>
          <h2 className="display mt-5 text-[clamp(2rem,4.5vw,3.5rem)]">
            Pick the pipeline that fits.
          </h2>

          {/* Mode toggle */}
          <div className="mt-9 inline-flex gap-0.5 rounded-full border border-line bg-cream-muted p-[3px]">
            {(["cards", "table"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={cn(
                  "rounded-full px-4 py-1.5 font-sans text-xs transition-colors duration-200",
                  mode === m ? "bg-ink text-cream" : "text-faint hover:text-ink"
                )}
              >
                {m === "cards" ? "Show packages" : "Compare side by side"}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mt-14">
          <AnimatePresence mode="wait">
            {mode === "cards" ? (
              <motion.div
                key="cards"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3"
              >
                {pricingPackages.map((pkg) => (
                  <PriceCard
                    key={pkg.id}
                    pkg={pkg}
                    expanded={expanded === pkg.id}
                    onToggle={() =>
                      setExpanded((cur) => (cur === pkg.id ? null : pkg.id))
                    }
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="table"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <ComparisonTable rows={comparisonRows} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  pkg,
  expanded,
  onToggle,
}: {
  pkg: PricingPackage;
  expanded: boolean;
  onToggle: () => void;
}) {
  const featured = pkg.featured;
  const visibleIncludes = pkg.includes.slice(0, 4);
  const hiddenIncludes = pkg.includes.slice(4);
  const canExpand = hiddenIncludes.length > 0 || pkg.doesNotInclude.length > 0;

  return (
    <div
      className={cn(
        "flex flex-col rounded-[24px] p-8 transition-shadow duration-500 lg:p-9",
        featured
          ? "bg-ink text-cream shadow-[0_40px_90px_-45px_rgba(26,25,22,0.85)] lg:-mt-4 lg:pb-12 lg:pt-12"
          : "border border-line bg-cream-soft text-ink"
      )}
    >
      {featured && (
        <span className="mb-4 inline-flex w-fit rounded-full bg-accent px-3 py-1 font-sans text-[10px] uppercase tracking-[0.16em] text-cream">
          Most popular
        </span>
      )}

      <h3 className="display text-3xl">{pkg.name}</h3>
      <p
        className={cn(
          "mt-2 font-sans text-sm font-light",
          featured ? "text-cream/60" : "text-faint"
        )}
      >
        {pkg.tagline}
      </p>

      <div className="mt-6 flex items-end gap-1.5">
        <span className="display text-4xl">{pkg.price}</span>
        <span
          className={cn(
            "mb-1 font-sans text-xs",
            featured ? "text-cream/50" : "text-faint"
          )}
        >
          {pkg.cadence}
        </span>
      </div>

      <p
        className={cn(
          "mt-4 font-sans text-[13px] font-light leading-relaxed",
          featured ? "text-cream/55" : "text-faint"
        )}
      >
        {pkg.forWho}
      </p>

      <a
        href="#contact"
        className={cn(
          "mt-7 inline-flex justify-center rounded-full px-6 py-3 font-sans text-sm font-medium transition-all duration-200",
          featured
            ? "bg-accent text-cream hover:bg-accent-light"
            : "bg-ink text-cream hover:bg-accent"
        )}
      >
        {pkg.cta}
      </a>

      <div
        className={cn(
          "mt-7 h-px w-full",
          featured ? "bg-cream/10" : "bg-line"
        )}
      />

      {/* Includes (first 4 always) */}
      <ul className="mt-6 flex flex-col gap-3">
        {visibleIncludes.map((item) => (
          <IncludeRow key={item} label={item} featured={featured} />
        ))}
      </ul>

      {/* Progressive disclosure */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="more"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            {hiddenIncludes.length > 0 && (
              <ul className="mt-3 flex flex-col gap-3">
                {hiddenIncludes.map((item) => (
                  <IncludeRow key={item} label={item} featured={featured} />
                ))}
              </ul>
            )}

            {pkg.doesNotInclude.length > 0 && (
              <div className="mt-6">
                <div
                  className={cn(
                    "h-px w-full",
                    featured ? "bg-cream/10" : "bg-line"
                  )}
                />
                <p
                  className={cn(
                    "mt-5 font-sans text-[10px] uppercase tracking-[0.16em]",
                    featured ? "text-cream/40" : "text-faint"
                  )}
                >
                  Not included
                </p>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {pkg.doesNotInclude.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "flex items-center gap-2.5 font-sans text-[13px]",
                        featured ? "text-cream/50" : "text-faint"
                      )}
                      style={{ opacity: 0.6 }}
                    >
                      <X size={12} className="shrink-0" />
                      <span className="line-through">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {canExpand && (
        <button
          type="button"
          onClick={onToggle}
          className={cn(
            "mt-6 self-start font-sans text-xs transition-colors",
            featured
              ? "text-cream/55 hover:text-cream"
              : "text-faint hover:text-ink"
          )}
        >
          {expanded ? "Hide ↑" : "See full breakdown ↓"}
        </button>
      )}
    </div>
  );
}

function IncludeRow({ label, featured }: { label: string; featured: boolean }) {
  return (
    <li
      className={cn(
        "flex items-center gap-2.5 font-sans text-sm",
        featured ? "text-cream/80" : "text-ink/80"
      )}
    >
      <Check
        size={15}
        className={cn("shrink-0", featured ? "text-accent-muted" : "text-accent")}
      />
      {label}
    </li>
  );
}

function Cell({ value, featured }: { value: string | boolean; featured: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check size={14} className="mx-auto text-accent" />
    ) : (
      <X size={14} className="mx-auto text-faint opacity-40" />
    );
  }
  return (
    <span
      className={cn(
        "font-sans text-[13px]",
        featured ? "text-cream" : "text-ink"
      )}
    >
      {value}
    </span>
  );
}

function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-separate border-spacing-0 overflow-hidden rounded-[16px] border border-line">
        <thead className="sticky top-0 z-10">
          <tr>
            <th className="bg-cream px-5 py-5 text-left align-bottom">
              <span className="sr-only">Feature</span>
            </th>
            {pricingPackages.map((pkg) => (
              <th
                key={pkg.id}
                className={cn(
                  "px-5 py-5 text-center align-bottom",
                  pkg.featured ? "bg-ink" : "bg-cream"
                )}
              >
                <span
                  className={cn(
                    "block font-sans text-[11px] uppercase tracking-[0.14em]",
                    pkg.featured ? "text-accent-muted" : "text-faint"
                  )}
                >
                  {pkg.name}
                </span>
                <span
                  className={cn(
                    "mt-1 block display text-xl",
                    pkg.featured ? "text-cream" : "text-ink"
                  )}
                >
                  {pkg.price}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label}>
              <td
                className={cn(
                  "px-5 py-3.5 font-sans text-[13px] text-faint",
                  i % 2 === 0 ? "bg-cream-muted" : "bg-transparent"
                )}
              >
                {row.label}
              </td>
              <td
                className={cn(
                  "px-5 py-3.5 text-center",
                  i % 2 === 0 ? "bg-cream-muted" : "bg-transparent"
                )}
              >
                <Cell value={row.starter} featured={false} />
              </td>
              <td className="bg-ink px-5 py-3.5 text-center">
                <Cell value={row.growth} featured />
              </td>
              <td
                className={cn(
                  "px-5 py-3.5 text-center",
                  i % 2 === 0 ? "bg-cream-muted" : "bg-transparent"
                )}
              >
                <Cell value={row.custom} featured={false} />
              </td>
            </tr>
          ))}
          <tr>
            <td className="bg-cream px-5 py-5" />
            {pricingPackages.map((pkg) => (
              <td
                key={pkg.id}
                className={cn(
                  "px-5 py-5 text-center",
                  pkg.featured ? "bg-ink" : "bg-cream"
                )}
              >
                <a
                  href="#contact"
                  className={cn(
                    "inline-flex rounded-full px-4 py-2 font-sans text-xs font-medium transition-colors duration-200",
                    pkg.featured
                      ? "bg-accent text-cream hover:bg-accent-light"
                      : "bg-ink text-cream hover:bg-accent"
                  )}
                >
                  {pkg.cta}
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
