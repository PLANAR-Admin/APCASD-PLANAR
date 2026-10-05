"use client";

import { useState, useEffect } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/services/Breadcrumb";
import { SITE } from "@/lib/site";
import { ArrowRight } from "lucide-react";

interface JobListing {
  id: string;
  title: string;
  department: string;
  description: string;
  requirements: string[];
  active: boolean;
}

export default function CareersPage() {
  const [listings, setListings] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchListings();
  }, []);

  async function fetchListings() {
    try {
      const res = await fetch("/api/careers/listings");
      if (res.ok) {
        const data = await res.json();
        setListings(data.listings || []);
      }
    } catch (err) {
      console.error("Failed to fetch listings:", err);
    }
    setLoading(false);
  }

  const activeListings = listings.filter((l) => l.active);

  return (
    <div className="pt-28 pb-24 sm:pt-32">
      <div className="mx-auto max-w-4xl px-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Careers" }]} />
      </div>

      {/* Hero Section */}
      <div className="mx-auto mt-10 max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-crimson">
              Careers
            </p>
            <h1 className="text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight text-darkblue">
              Build Your Career With Us
            </h1>
            <p className="mt-5 text-lg text-muted">
              Join our team and be part of a people-focused organization committed to integrity,
              excellence, and professional growth.
            </p>

            {activeListings.length > 0 ? (
              <div className="mt-8">
                <p className="text-sm font-semibold text-darkblue mb-4">
                  {activeListings.length} Position{activeListings.length !== 1 ? "s" : ""} Open
                </p>
                <Link
                  href="#job-listings"
                  className="cursor-hover inline-block rounded-full border-2 border-transparent bg-darkblue px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.04] hover:border-white hover:bg-transparent hover:tracking-wide hover:text-darkblue hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)]"
                >
                  View Open Positions
                </Link>
              </div>
            ) : (
              <p className="mt-5 text-muted">
                We don&apos;t have any open roles listed right now, but we&apos;re always glad to
                hear from people who share our values. Send us your profile and we&apos;ll reach
                out when a relevant opportunity comes up.
              </p>
            )}

            <Link
              href="/contact"
              className="cursor-hover mt-4 inline-block rounded-full border-2 border-darkblue/20 px-7 py-3.5 text-sm font-semibold text-darkblue transition-all duration-300 hover:scale-[1.04] hover:border-white hover:bg-transparent hover:tracking-wide hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)]"
            >
              Send Your Profile
            </Link>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src="/images/who-we-are.jpg"
              alt="Team collaboration and hiring"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Job Listings */}
      {!loading && activeListings.length > 0 && (
        <div id="job-listings" className="mx-auto mt-20 max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-darkblue mb-8">Open Positions</h2>
          <div className="space-y-6">
            {activeListings.map((job) => (
              <div
                key={job.id}
                className="rounded-2xl border border-border bg-white p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-darkblue">{job.title}</h3>
                    <p className="text-sm text-muted mt-1">{job.department}</p>
                  </div>
                </div>

                <p className="text-foreground mb-6 leading-relaxed">{job.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-darkblue mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-crimson shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/careers/apply"
                  className="cursor-hover inline-flex items-center gap-2 rounded-full bg-darkblue px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.04] hover:border-white hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)]"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Listings Message */}
      {!loading && activeListings.length === 0 && (
        <div className="mx-auto mt-16 max-w-3xl px-6 text-center">
          <div className="rounded-2xl border border-border bg-surface p-12">
            <p className="text-lg text-muted mb-6">
              We don&apos;t have any open roles listed right now. We&apos;re always looking for
              talented individuals who share our values and commitment to excellence.
            </p>
            <Link
              href="/contact"
              className="cursor-hover inline-block rounded-full border-2 border-transparent bg-darkblue px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.04] hover:border-white hover:bg-transparent hover:tracking-wide hover:text-darkblue hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)]"
            >
              Send Your Profile
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
