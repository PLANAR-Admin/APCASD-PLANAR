import Link from "next/link";

export function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-12 sm:pt-16">
      <div className="relative overflow-hidden rounded-[32px] bg-darkblue px-8 py-14 text-center text-white sm:px-16 sm:py-20">
        <span className="inline-block rounded-full bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-crimson">
          Ready to Talk?
        </span>
        <h2 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight">
          Tell Us What You&apos;re Planning
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">
          Whether you need HR support or are planning a corporate event, share a few
          details and our team can understand your requirement and guide the next step.
        </p>
        <Link
          href="/contact"
          className="cursor-hover mt-8 inline-block rounded-full border-2 border-transparent bg-white px-8 py-3.5 text-sm font-semibold text-darkblue shadow-md transition-all duration-300 hover:scale-[1.04] hover:border-white hover:bg-transparent hover:text-white hover:tracking-wide hover:shadow-lg"
        >
          Submit Requirement
        </Link>
      </div>
    </section>
  );
}
