"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const lux = [0.22, 1, 0.36, 1] as const;

interface HeroProps {
  /** If provided (and on desktop), plays as an atmospheric background layer. */
  videoSrc?: string;
}

export function Hero({ videoSrc }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  // Only load video on fine-pointer desktop widths (bandwidth UX on mobile).
  useEffect(() => {
    if (!videoSrc || typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setShowVideo(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [videoSrc]);

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    if (videoRef.current) videoRef.current.muted = next;
  };

  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      {/* Base visual — cinematic still, always present (also the mobile / no-video state) */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: lux }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=80"
          alt="Editorial campaign still"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_35%]"
        />

        {/* Atmospheric video layer — never the literal subject */}
        {showVideo && videoSrc && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: 0.35, filter: "saturate(0.4) brightness(0.6)" }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
      </motion.div>

      {/* Dark overlay — identical whether video plays or not, guarantees legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(26,25,22,0.3) 0%, rgba(26,25,22,0.5) 40%, rgba(26,25,22,0.85) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "rgba(210,175,145,0.18)" }}
      />

      <div className="shell relative z-[2] pb-[clamp(4rem,10vw,8rem)] pt-40">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: lux, delay: 0.5 }}
          className="eyebrow text-cream/80"
        >
          AI photoshoot studio · Dublin
        </motion.p>

        <h1 className="display mt-7 max-w-[16ch] text-cream text-[clamp(2.8rem,7.5vw,6.5rem)]">
          {"The campaign look, without the photoshoot."
            .split(" ")
            .map((word, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: lux, delay: 0.6 + i * 0.06 }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: lux, delay: 1.1 }}
          className="mt-8 max-w-lg font-sans text-base font-light leading-relaxed text-cream/75 sm:text-lg"
        >
          Fís creates campaign-ready imagery for fashion, beauty, and lifestyle
          brands — directed by hand, delivered in days, at a fraction of a
          traditional shoot.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: lux, delay: 1.25 }}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="rounded-full bg-accent px-7 py-3.5 font-sans text-sm font-medium text-cream shadow-[0_14px_40px_-16px_rgba(45,80,22,0.95)] transition-all duration-300 ease-lux hover:-translate-y-0.5 hover:bg-accent-light"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-cream/30 px-7 py-3.5 font-sans text-sm font-light text-cream/90 backdrop-blur-sm transition-all duration-300 ease-lux hover:border-cream/70"
          >
            Book a creative call
          </a>
        </motion.div>
      </div>

      {/* Mute / unmute — only when a video is actually playing (desktop) */}
      {showVideo && videoSrc && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          title={muted ? "Unmute" : "Mute"}
          className="absolute bottom-8 right-8 z-[3] hidden h-9 w-9 items-center justify-center rounded-full bg-white/10 text-cream backdrop-blur-md transition-colors duration-200 hover:bg-white/20 md:flex"
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      )}
    </section>
  );
}
