"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

type CreatorReelPreviewProps = {
  videoSrc: string;
  name: string;
  accentColor: string;
  className?: string;
};

export function CreatorReelPreview({
  videoSrc,
  name,
  accentColor,
  className,
}: CreatorReelPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    void v.play();
    setPlaying(true);
  };

  const pause = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  };

  return (
    <div
      className={cn(
        "group relative mb-5 aspect-[9/16] w-full max-w-[140px] overflow-hidden rounded-xl bg-deep shadow-md",
        className
      )}
      onMouseEnter={play}
      onMouseLeave={pause}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center gap-2 bg-deep/40 transition-opacity duration-300",
          playing ? "opacity-0" : "opacity-100"
        )}
      >
        <span
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-transform group-hover:scale-105"
          style={{ boxShadow: `0 0 24px ${accentColor}40` }}
        >
          <Play className="ml-0.5 h-4 w-4 fill-white text-white" />
        </span>
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-white/80">
          Watch reel
        </span>
      </div>
      <span className="sr-only">{name} sample reel</span>
    </div>
  );
}
