import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-56 sm:pt-48 sm:pb-80">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-[clamp(2.5rem,6vw,4.25rem)] font-medium leading-[1] tracking-normal text-darkblue">
          Building Stronger Teams <br className="hidden sm:block" />
          Creating Better Business Experiences
        </h1>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row">
          <Link
            href="/contact"
            className="cursor-hover cta-gradient-flow w-full rounded-full border-2 border-transparent px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.04] hover:border-white hover:bg-transparent hover:text-white hover:tracking-wide hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)] sm:w-auto"
          >
            Talk to Our Team
          </Link>
          <Link
            href="/hr-solutions"
            className="cursor-hover w-full rounded-full border-2 border-darkblue/20 px-7 py-3.5 text-sm font-semibold text-darkblue transition-all duration-300 hover:scale-[1.04] hover:border-white hover:bg-transparent hover:tracking-wide hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)] sm:w-auto"
          >
            Explore Our Solutions
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[170px] overflow-hidden sm:h-[270px]">
        <div className="mountain-track" />
      </div>
    </section>
  );
}
