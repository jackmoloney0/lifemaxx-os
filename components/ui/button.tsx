import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-sans text-sm font-medium tracking-[0.02em] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded-full bg-accent text-[var(--text-inverse)] hover:bg-[var(--accent-light)] hover:scale-[0.97]",
        dark: "rounded-full bg-deep text-[var(--text-inverse)] hover:scale-[0.98] hover:bg-[#2a2926]",
        ghost:
          "rounded-full bg-transparent text-[var(--text-muted-warm)] hover:underline hover:scale-[1.02]",
        outline:
          "rounded-full border border-border bg-canvas text-foreground hover:bg-canvas-secondary hover:scale-[0.97]",
        secondary:
          "rounded-full bg-canvas-secondary text-foreground hover:bg-border hover:scale-[0.97]",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
