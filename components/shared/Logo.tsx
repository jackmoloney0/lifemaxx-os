import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  href?: string;
  onClick?: () => void;
  theme?: "dark" | "light";
  className?: string;
};

export function Logo({
  href = "/",
  onClick,
  theme = "dark",
  className,
}: LogoProps) {
  const mark = (
    <Image
      src="/logo.png"
      alt="Fís Marketing Agency Logo"
      width={200}
      height={64}
      priority
      className={cn(
        "block h-9 w-auto object-contain object-left sm:h-10 lg:h-12",
        theme === "dark" && "brightness-[1.15] contrast-[1.05]",
        className
      )}
    />
  );

  if (!href) {
    return <span className="logo-wrapper flex min-w-[120px] items-center">{mark}</span>;
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className="logo-wrapper flex min-w-[120px] shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-deep"
    >
      {mark}
    </Link>
  );
}
