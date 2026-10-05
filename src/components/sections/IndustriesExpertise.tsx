"use client";

import Image from "next/image";
import Link from "next/link";
import { INDUSTRIES_DATA } from "@/lib/industries-data";
import { Check } from "lucide-react";

export function IndustriesExpertise() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-crimson">
          Our Expertise
        </p>
        <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight text-darkblue">
          Industry-Specific Excellence
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          We bring specialized expertise to every industry we serve. Our deep knowledge and proven track record ensure your HR and event management challenges are met with precision and excellence.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES_DATA.map((industry) => (
          <div
            key={industry.id}
            className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            {/* Image Section */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-200">
              <Image
                src={industry.image}
                alt={`${industry.name} - Best HR and Event Management Solutions`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                <p className="mt-1 text-sm text-gray-200">We are the best in handling this industry</p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              {/* SEO Description */}
              <p className="text-sm text-muted line-clamp-2 mb-3">
                {industry.description}
              </p>

              {/* Expertise */}
              <div className="mb-4">
                <h4 className="font-semibold text-darkblue text-sm">Our Expertise</h4>
                <p className="mt-2 text-sm text-foreground">
                  {industry.expertise}
                </p>
              </div>

              {/* Experience */}
              <div className="mb-4 rounded-lg bg-blue-50 p-3">
                <h4 className="font-semibold text-darkblue text-sm mb-2">Years of Experience</h4>
                <p className="text-xs text-foreground">
                  {industry.experience}
                </p>
              </div>

              {/* Key Services */}
              <div className="mb-4">
                <h4 className="font-semibold text-darkblue text-sm mb-2">Key Services</h4>
                <ul className="space-y-1.5">
                  {industry.keyServices.map((service) => (
                    <li key={service} className="flex items-start gap-2 text-xs text-foreground">
                      <Check className="h-3.5 w-3.5 shrink-0 text-crimson mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div className="mb-5 rounded-lg border border-crimson/20 bg-crimson/5 p-3">
                <p className="text-xs text-foreground italic">
                  "{industry.highlights}"
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="cursor-hover inline-block w-full rounded-lg bg-darkblue px-4 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              >
                Get Industry Solutions
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Context Section */}
      <div className="mt-16 rounded-2xl bg-gradient-to-r from-darkblue/5 to-crimson/5 p-8 sm:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-bold text-darkblue">
            Why Industry Expertise Matters
          </h3>
          <p className="mt-4 text-lg text-muted">
            Every industry has unique HR challenges, regulatory requirements, and cultural nuances. Our specialized expertise in {INDUSTRIES_DATA.length} major sectors ensures that your HR and event management solutions are not just effective, but strategically aligned with your industry's specific needs and opportunities.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="cursor-hover rounded-full bg-darkblue px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.05] hover:shadow-md"
            >
              Discuss Your Industry Needs
            </Link>
            <Link
              href="/why-apcasd"
              className="cursor-hover rounded-full border-2 border-darkblue/20 px-8 py-3 text-sm font-semibold text-darkblue transition-all duration-300 hover:border-darkblue"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
