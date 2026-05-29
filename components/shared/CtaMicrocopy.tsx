import { CTA_MICROCOPY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function CtaMicrocopy({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "max-w-md font-sans text-xs leading-relaxed text-[#6B6560]",
        className
      )}
    >
      {CTA_MICROCOPY}
    </p>
  );
}
