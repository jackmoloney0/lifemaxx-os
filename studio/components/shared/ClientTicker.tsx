import { Fragment } from "react";
import { tickerBrands, tickerStyles } from "@/lib/tickerData";

export function ClientTicker() {
  // Render the list twice so the -50% keyframe creates a seamless loop.
  const loop = [...tickerBrands, ...tickerBrands];

  return (
    <div className="ticker-container relative h-14 overflow-hidden border-y border-line bg-cream-muted">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-20 bg-gradient-to-r from-cream-muted to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-20 bg-gradient-to-l from-cream-muted to-transparent" />

      <div className="ticker-track h-full">
        {loop.map((brand, i) => (
          <Fragment key={`${brand.name}-${i}`}>
            <span style={tickerStyles[brand.style]} className="text-ink/50">
              {brand.name}
            </span>
            <span aria-hidden className="text-ink/20">
              ·
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
