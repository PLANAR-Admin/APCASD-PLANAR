import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  markOnly?: boolean;
  light?: boolean;
}

/** Official APCASD PLANAR logo artwork (brand assets, dots + wordmark). */
export function Logo({ className, markOnly = false, light = false }: LogoProps) {
  if (markOnly) {
    return (
      <span className={cn("relative inline-block h-8 w-[26px] shrink-0", className)}>
        <Image
          src="/images/logo-mark.svg"
          alt="APCASD PLANAR"
          fill
          sizes="26px"
          className={cn("object-contain", light && "brightness-0 invert")}
          priority
        />
      </span>
    );
  }

  return (
    <span className={cn("relative inline-block h-9 w-[122px] shrink-0 sm:h-10 sm:w-[136px]", className)}>
      <Image
        src="/images/logo-full.png"
        alt="APCASD PLANAR (OPC) Private Limited"
        fill
        sizes="136px"
        className={cn("object-contain object-left", light && "brightness-0 invert")}
        priority
      />
    </span>
  );
}
