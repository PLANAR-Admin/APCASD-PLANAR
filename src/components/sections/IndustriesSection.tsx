import { IndustriesPile } from "./IndustriesPile";

export function IndustriesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="rounded-3xl bg-[#f1eefb] px-6 py-10 sm:px-10 sm:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Industries We Serve
          </p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold text-darkblue">
            Industry-Specific Expertise to Drive Your Success
          </h2>
        </div>

        <div className="mt-10">
          <IndustriesPile />
        </div>
      </div>
    </section>
  );
}
