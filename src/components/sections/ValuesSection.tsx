import { ShieldCheck, Users, HeartHandshake, BadgeCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SITE } from "@/lib/site";

const VALUE_STYLES: Record<string, { icon: LucideIcon; bg: string; text: string }> = {
  Integrity: { icon: ShieldCheck, bg: "bg-crimson/10", text: "text-crimson" },
  "People Excellence": { icon: Users, bg: "bg-darkblue/10", text: "text-darkblue" },
  "Client Commitment": { icon: HeartHandshake, bg: "bg-amber-500/10", text: "text-amber-600" },
  Professionalism: { icon: BadgeCheck, bg: "bg-emerald-500/10", text: "text-emerald-600" },
};

export function ValuesSection() {
  return (
    <section className="bg-surface py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Why APCASD PLANAR
          </p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold text-darkblue">
            The values behind every engagement
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-5">
          {SITE.values.map((value) => {
            const { icon: Icon, bg, text } = VALUE_STYLES[value];
            return (
              <div
                key={value}
                className="flex aspect-square flex-col items-center justify-center gap-2.5 rounded-2xl border border-border bg-white p-3 text-center shadow-sm sm:gap-3 sm:p-3 lg:p-6"
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full sm:h-16 sm:w-16 lg:h-20 lg:w-20 ${bg} ${text}`}
                >
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10" strokeWidth={2} />
                </span>
                <p className="text-xs font-bold leading-snug text-darkblue sm:text-sm">{value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
