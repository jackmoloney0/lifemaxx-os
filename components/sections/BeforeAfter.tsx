"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ChevronsLeftRight,
  Heart,
  ImageIcon,
  MessageCircle,
  Play,
  Share2,
} from "lucide-react";
import { fadeUp, inViewOptions } from "@/lib/animations";
import { cn } from "@/lib/utils";

function LabelPill({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "before" | "after";
}) {
  return (
    <span
      className={cn(
        "absolute left-4 top-4 z-10 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider",
        variant === "before"
          ? "bg-black/5 text-foreground-muted"
          : "flex items-center gap-1.5 bg-white/10 text-[var(--text-inverse)]"
      )}
    >
      {variant === "after" && (
        <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
      )}
      {children}
    </span>
  );
}

function BeforeCard() {
  return (
    <div className="absolute inset-0 flex flex-col bg-white p-6 pt-12">
      <LabelPill variant="before">Before</LabelPill>
      <div
        className="mx-auto flex items-center justify-center rounded-lg"
        style={{
          width: "65%",
          height: "45%",
          background: "linear-gradient(135deg, #f0f0f0, #e0e0e0)",
        }}
      >
        <ImageIcon className="h-8 w-8 text-[#ccc]" strokeWidth={1.5} />
      </div>
      <p className="mt-6 text-center font-sans text-sm text-foreground-muted">
        NEW Summer Collection. Shop now.
      </p>
      <div className="mt-auto flex flex-wrap justify-center gap-2 pb-2">
        {["CTR: 0.4%", "ROAS: 0.9×", "Skip rate: 74%"].map((m) => (
          <span
            key={m}
            className="rounded-full bg-red-50 px-3 py-1 text-xs text-red-700/80"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

function AfterCard() {
  return (
    <div className="absolute inset-0 flex flex-col bg-deep p-4 pt-12">
      <LabelPill variant="after">After</LabelPill>
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <div className="h-8 w-8 rounded-full bg-accent-muted ring-2 ring-accent" />
        <span className="text-xs text-[var(--text-inverse)]">Aoife</span>
      </div>

      <div
        className="my-4 flex flex-1 flex-col items-center justify-center gap-3 rounded-lg"
        style={{
          background: "linear-gradient(160deg, #1a1a1a 0%, #0d1a0d 100%)",
        }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15">
          <Play className="h-[18px] w-[18px] text-white/40" fill="currentColor" />
        </div>
        <span className="font-sans text-xs uppercase tracking-widest text-white/30">
          Sample reel loading
        </span>
      </div>

      <p className="px-2 text-center text-sm font-medium leading-snug text-[var(--text-inverse)]">
        I&apos;ve been using this for 3 weeks and I&apos;m OBSESSED 👀
      </p>

      <div className="mt-4 flex items-center justify-center gap-6">
        <Heart className="h-4 w-4 text-[var(--text-inverse)]" strokeWidth={1.5} />
        <MessageCircle
          className="h-4 w-4 text-[var(--text-inverse)]"
          strokeWidth={1.5}
        />
        <Share2
          className="h-4 w-4 text-[var(--text-inverse)]"
          strokeWidth={1.5}
        />
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {["CTR: 2.1%", "ROAS: 3.4×", "Hook rate: 68%"].map((m) => (
          <span
            key={m}
            className="rounded-full bg-accent-muted/50 px-3 py-1 text-xs text-accent-light"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

export function BeforeAfter() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, inViewOptions);
  const [dividerX, setDividerX] = useState(50);
  const [mobileTab, setMobileTab] = useState<"before" | "after">("before");
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(90, Math.max(10, (x / rect.width) * 100));
    setDividerX(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateSlider(e.clientX);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateSlider(e.clientX);
  };

  return (
    <section id="before-after" ref={sectionRef} className="section-pad">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.h2
          className="text-section"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          The difference is immediate.
        </motion.h2>

        <div className="mt-10 flex gap-2 md:hidden">
          {(["before", "after"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setMobileTab(tab)}
              className={cn(
                "flex-1 rounded-full py-2.5 text-sm font-medium capitalize transition-all duration-200",
                mobileTab === tab
                  ? "bg-deep text-[var(--text-inverse)]"
                  : "bg-canvas-secondary text-foreground-muted"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6 md:mt-16">
          <div className="overflow-hidden rounded-2xl md:hidden">
            <div className="relative aspect-video">
              {mobileTab === "before" ? <BeforeCard /> : <AfterCard />}
            </div>
          </div>

          <div
            ref={containerRef}
            className="relative hidden aspect-video max-h-[520px] overflow-hidden rounded-2xl md:block"
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            <BeforeCard />
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 0 0 ${dividerX}%)` }}
            >
              <AfterCard />
            </div>

            <div
              className="absolute bottom-0 top-0 z-20 cursor-ew-resize"
              style={{ left: `${dividerX}%`, transform: "translateX(-50%)" }}
              onPointerDown={onPointerDown}
            >
              <div
                className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-border bg-white shadow-[0_2px_12px_rgba(0,0,0,0.15)] transition-transform hover:scale-[1.02]"
                style={{ width: 44, height: 44 }}
              >
                <ChevronsLeftRight className="h-4 w-4 text-foreground-muted" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
