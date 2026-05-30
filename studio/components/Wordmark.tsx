import { cn } from "@/lib/cn";

export function Wordmark({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display text-2xl leading-none tracking-tight",
        onDark ? "text-cream" : "text-ink",
        className
      )}
    >
      <span aria-hidden className="inline-block h-1.5 w-1.5 rotate-45 bg-accent" />
      Fís
    </span>
  );
}
