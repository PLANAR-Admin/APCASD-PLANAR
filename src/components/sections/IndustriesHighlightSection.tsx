import Link from "next/link";
import Image from "next/image";
import { INDUSTRIES_DATA } from "@/lib/industries-data";

export function IndustriesHighlightSection() {
  // Select 6 featured industries for the Why APCASD page
  const featuredIndustries = INDUSTRIES_DATA.slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-crimson">
          Industries We Serve
        </p>
        <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight text-darkblue">
          Sector-Specific Expertise
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          With deep domain knowledge and proven expertise across diverse sectors, APCASD PLANAR delivers
          industry-tailored HR solutions and event management services. Our specialized approach ensures
          every client receives solutions designed for their unique operational challenges and growth objectives.
        </p>
      </div>

      {/* Featured Industries Grid */}
      <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredIndustries.map((industry) => (
          <div
            key={industry.id}
            className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative h-40 w-full overflow-hidden bg-gray-200">
              <Image
                src={industry.image}
                alt={`${industry.name} - HR and Event Management Solutions`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-darkblue">{industry.name}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted">{industry.description}</p>
              <p className="mt-3 text-xs font-semibold text-crimson uppercase tracking-[0.1em]">
                {industry.experience.split(",")[0]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Industries Content Block */}
      <div className="mb-12 rounded-2xl border border-border bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
        <h3 className="text-xl font-bold text-darkblue">Why Choose APCASD for Industry Solutions?</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="font-semibold text-darkblue">Deep Sector Knowledge</h4>
            <p className="mt-2 text-sm text-foreground">
              Our team brings years of experience working with IT companies, manufacturing firms, financial
              institutions, healthcare organizations, pharmaceutical companies, retail chains, educational institutions,
              startups, and professional services firms. We understand the unique HR and talent challenges of each sector.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-darkblue">Proven Track Record</h4>
            <p className="mt-2 text-sm text-foreground">
              From tech conferences and manufacturing training programs to healthcare recruitment and retail brand activations,
              we've successfully delivered HR solutions and events across banking, finance, insurance, and every major industry vertical.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-darkblue">Customized Solutions</h4>
            <p className="mt-2 text-sm text-foreground">
              Each industry has distinct workforce dynamics. Whether you're in automotive, BFSI, professional services,
              or education, we tailor our HR strategies, recruitment approaches, and event experiences to your sector's specific needs.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-darkblue">Rapid Scaling Capability</h4>
            <p className="mt-2 text-sm text-foreground">
              From startups building their first teams to enterprises managing thousands of employees, we scale our solutions.
              Our experience spans government, private sector, and diverse industry sizes from SMEs to multinational corporations.
            </p>
          </div>
        </div>
      </div>

      {/* CTA to Industries Page */}
      <div className="text-center">
        <p className="mb-4 text-muted">
          Explore how we serve your industry and discover tailored solutions designed for your success.
        </p>
        <Link
          href="/industries"
          className="inline-flex items-center justify-center rounded-lg bg-darkblue px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-blue-900 hover:shadow-lg"
        >
          View All Industries
        </Link>
      </div>
    </section>
  );
}
