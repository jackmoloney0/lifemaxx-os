"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { heroReelVideo } from "@/lib/constants";

export function VideoMockup() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string>(heroReelVideo.mp4);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, [src, ready]);

  const onError = () => {
    if (src !== heroReelVideo.fallback) {
      setSrc(heroReelVideo.fallback);
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-[45%] rounded-full opacity-80"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 45%, rgba(45,80,22,0.42) 0%, rgba(45,80,22,0.12) 40%, transparent 72%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        className="relative flex justify-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div
            className="relative z-10"
            style={{
              width: "clamp(260px, 32vw, 320px)",
              aspectRatio: "320 / 660",
              background:
                "linear-gradient(145deg, #2a2a2c 0%, #141416 45%, #0c0c0d 100%)",
              borderRadius: 48,
              padding: 13,
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.12), 0 40px 100px rgba(0,0,0,0.65), 0 0 120px rgba(45,80,22,0.15)",
            }}
          >
            <div
              className="absolute left-1/2 z-20 -translate-x-1/2 rounded-[22px] bg-black"
              style={{ top: 18, width: 96, height: 30 }}
            />

            <div
              className="relative h-full w-full overflow-hidden"
              style={{ borderRadius: 38, background: "#050505" }}
            >
              <video
                ref={videoRef}
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onLoadedData={() => setReady(true)}
                onError={onError}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div
                className="pointer-events-none absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 28%, transparent 62%, rgba(0,0,0,0.55) 100%)",
                }}
              />

              <div className="relative z-20 flex h-full flex-col justify-between p-5 pt-12">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-full bg-white/20 ring-2 ring-white/30 backdrop-blur-sm" />
                  <div>
                    <p className="text-[13px] font-medium text-white drop-shadow-sm">
                      Aoife
                    </p>
                    <p className="text-[11px] text-white/70">@aoife.irl</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 pb-1">
                  <Heart className="h-5 w-5 text-white/90 drop-shadow" strokeWidth={1.5} />
                  <MessageCircle className="h-5 w-5 text-white/90 drop-shadow" strokeWidth={1.5} />
                  <Share2 className="h-5 w-5 text-white/90 drop-shadow" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>

          <div
            className="pointer-events-none absolute -bottom-6 left-1/2 z-0 h-24 w-[85%] -translate-x-1/2 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(45,80,22,0.25), transparent 70%)",
              filter: "blur(12px)",
            }}
          />
        </motion.div>
      </motion.div>

      <p className="mt-8 text-center font-sans text-[10px] uppercase tracking-[0.2em] text-[#6B6560]">
        Sample ad · Irish UGC
      </p>
    </div>
  );
}
