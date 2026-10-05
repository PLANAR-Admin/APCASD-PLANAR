"use client";

import Image from "next/image";
import Link from "next/link";
import { INDUSTRIES_DATA } from "@/lib/industries-data";

export function IndustriesStackedSections() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <div className="mb-16 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-crimson">
          Our Expertise
        </p>
        <h2 className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight text-darkblue">
          Industry-Specific Excellence
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          We bring specialized expertise to every industry we serve. Our deep knowledge and proven
          track record ensure your HR and event management challenges are met with precision and excellence.
        </p>
      </div>

      {/* Industries Stacked Sections */}
      <div className="space-y-16 sm:space-y-20">
        {INDUSTRIES_DATA.map((industry, index) => (
          <div
            key={industry.id}
            className={`flex flex-col gap-8 lg:gap-12 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image Section */}
            <div className="relative flex-shrink-0 overflow-hidden rounded-2xl lg:w-1/2 h-96">
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center lg:w-1/2">
              <div className="mb-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-crimson">
                  Industry Solution
                </p>
                <h3 className="text-3xl font-bold text-darkblue">{industry.name}</h3>
                <p className="mt-2 text-lg text-muted italic">{industry.description}</p>
              </div>

              {/* Our Expertise */}
              <div className="mb-8 pb-8 border-b border-border">
                <h4 className="mb-3 font-semibold text-darkblue">Our Expertise</h4>
                <p className="text-sm text-foreground leading-relaxed">{industry.expertise}</p>
              </div>

              {/* Years of Experience */}
              <div className="mb-8 pb-8 border-b border-border">
                <h4 className="mb-3 font-semibold text-darkblue">Years of Experience</h4>
                <p className="text-sm text-foreground leading-relaxed bg-blue-50 p-4 rounded-lg">
                  {industry.experience}
                </p>
              </div>

              {/* Key Services */}
              <div className="mb-8 pb-8 border-b border-border">
                <h4 className="mb-4 font-semibold text-darkblue">Key Services</h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {industry.keyServices.map((service) => (
                    <li key={service} className="flex items-start text-sm text-foreground">
                      <span className="mr-3 flex-shrink-0 text-crimson font-bold">✓</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights Quote */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-darkblue italic border-l-4 border-crimson pl-4">
                  "{industry.highlights}"
                </p>
              </div>

              {/* CTA Button */}
              <div>
                <Link
                  href={`/contact?industry=${encodeURIComponent(industry.name)}`}
                  className="inline-flex items-center justify-center rounded-lg bg-darkblue px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-800 hover:text-white hover:shadow-lg hover:scale-105"
                >
                  Get Industry Solutions
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-20 rounded-2xl border border-border bg-gradient-to-r from-blue-50 to-indigo-50 p-8 text-center sm:p-12">
        <h3 className="text-2xl font-bold text-darkblue">
          Don't see your industry listed?
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          We have expertise across diverse sectors. If you don't see your industry, reach out to us.
          We likely have experience in your domain and can provide tailored HR and event management solutions.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-darkblue px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-800 hover:text-white hover:shadow-lg hover:scale-105"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
