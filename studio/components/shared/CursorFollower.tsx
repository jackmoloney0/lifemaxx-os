"use client";

import { useEffect, useState, type RefObject } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Variant = "default" | "view" | "cta";

export function CursorFollower({
  containerRef,
}: {
  containerRef: RefObject<HTMLElement | null>;
}) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 30, mass: 0.4 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 30, mass: 0.4 });

  const [variant, setVariant] = useState<Variant>("default");
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  // Only run on fine pointers on desktop widths
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !enabled) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const hit = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      const kind = hit?.getAttribute("data-cursor");
      setVariant(kind === "cta" ? "cta" : kind === "view" ? "view" : "default");
    };
    const enter = () => setVisible(true);
    const leave = () => {
      setVisible(false);
      setVariant("default");
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, [enabled, containerRef, cursorX, cursorY]);

  if (!enabled) return null;

  const size = variant === "view" ? 48 : variant === "cta" ? 36 : 12;

  return (
    <motion.div
      aria-hidden
      style={{
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
        borderStyle: "solid",
        borderColor: "#1A1916",
      }}
      className="pointer-events-none fixed z-[9998] hidden items-center justify-center rounded-full lg:flex"
      animate={{
        width: size,
        height: size,
        backgroundColor:
          variant === "view"
            ? "#FFFFFF"
            : variant === "cta"
            ? "#2D5016"
            : "rgba(255,255,255,0)",
        borderWidth: variant === "default" ? 1.5 : 0,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {variant === "view" && (
        <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-ink">
          View
        </span>
      )}
    </motion.div>
  );
}
