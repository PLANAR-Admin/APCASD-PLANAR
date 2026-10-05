function SplitCircle({ reverse }: { reverse?: boolean }) {
  return (
    <div className="footer-ticker-roll flex h-24 w-24 shrink-0 overflow-hidden rounded-full sm:h-40 sm:w-40">
      <span className={`h-full w-1/2 ${reverse ? "bg-darkblue" : "bg-crimson"}`} />
      <span className={`h-full w-1/2 ${reverse ? "bg-crimson" : "bg-darkblue"}`} />
    </div>
  );
}

function TickerShapes() {
  return (
    <>
      <SplitCircle />
      <div className="h-24 w-56 shrink-0 rounded-full bg-darkblue sm:h-40 sm:w-96" />
      <SplitCircle reverse />
      <div className="footer-ticker-roll h-24 w-24 shrink-0 rounded-full bg-crimson sm:h-40 sm:w-40" />
      <div className="flex h-24 shrink-0 items-center gap-2.5 sm:h-40 sm:gap-4">
        <div className="h-full w-6 rounded-full bg-crimson sm:w-9" />
        <div className="h-full w-6 rounded-full bg-crimson sm:w-9" />
        <div className="h-full w-6 rounded-full bg-crimson sm:w-9" />
      </div>
    </>
  );
}

// Each half of the track must on its own be at least as wide as the widest
// real viewport, or the far edge of the loop shows blank background before
// it wraps. One group is ~1100px at the largest breakpoint, so 6 per half
// (~6600px) comfortably covers even ultra-wide desktop monitors.
const GROUPS_PER_HALF = 6;

export function ShapesDivider() {
  return (
    <div className="relative h-[150px] w-full overflow-hidden bg-background sm:h-[220px]">
      <div className="footer-ticker-marquee flex h-full w-max items-center gap-5 sm:gap-8">
        {Array.from({ length: GROUPS_PER_HALF * 2 }).map((_, i) => (
          <TickerShapes key={i} />
        ))}
      </div>
    </div>
  );
}
