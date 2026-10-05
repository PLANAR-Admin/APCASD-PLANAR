"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/services/Breadcrumb";
import { ChevronDown } from "lucide-react";

interface JobListing {
  id: string;
  title: string;
  department: string;
  active?: boolean;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ApplyPage() {
  const [listings, setListings] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchListings();
  }, []);

  async function fetchListings() {
    try {
      const res = await fetch("/api/careers/listings");
      if (res.ok) {
        const data = await res.json();
        const activeListings = (data.listings || []).filter((l: JobListing) => l.active);
        setListings(activeListings);
      }
    } catch (err) {
      console.error("Failed to fetch listings:", err);
    }
    setLoading(false);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong, please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong, please try again.");
      console.error("Application error:", error);
    }
  }

  if (status === "success") {
    return (
      <div className="pt-28 pb-24 sm:pt-32">
        <div className="mx-auto max-w-3xl px-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Careers", href: "/careers" },
              { label: "Apply" },
            ]}
          />

          <div className="mt-10 text-center">
            <div className="rounded-3xl border border-border bg-surface p-10">
              <h2 className="text-2xl font-bold text-darkblue mb-3">Thank you for applying!</h2>
              <p className="text-muted mb-6">
                We've received your application. Our team will review your CV and get back to you
                shortly.
              </p>
              <Link
                href="/careers"
                className="cursor-hover inline-block rounded-full border-2 border-transparent bg-darkblue px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.04] hover:border-white hover:bg-transparent hover:tracking-wide hover:text-darkblue hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)]"
              >
                Back to Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 sm:pt-32">
      <div className="mx-auto max-w-4xl px-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Careers", href: "/careers" },
            { label: "Apply" },
          ]}
        />
      </div>

      <div className="mx-auto mt-10 max-w-2xl px-6">
        <div className="text-center mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Join Our Team
          </p>
          <h1 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold text-darkblue">
            Submit Your Application
          </h1>
          <p className="mt-3 text-muted">
            Tell us about yourself and why you'd be a great fit for our team.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-white p-8">
          {/* Name */}
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              required
              minLength={2}
              maxLength={100}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">
              Work Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
              placeholder="john@company.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-foreground">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
              placeholder="+91-98765-43210"
            />
          </div>

          {/* Position */}
          <div>
            <label htmlFor="position" className="mb-2 block text-sm font-semibold text-foreground">
              Applying For * {listings.length === 0 && "(No positions available)"}
            </label>
            <select
              id="position"
              name="position"
              required
              disabled={listings.length === 0 || loading}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-crimson disabled:bg-surface disabled:text-muted appearance-none cursor-pointer"
              defaultValue=""
            >
              <option value="">Select a position...</option>
              {listings.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.title} — {job.department}
                </option>
              ))}
            </select>
          </div>

          {/* CV Upload */}
          <div>
            <label htmlFor="resume" className="mb-2 block text-sm font-semibold text-foreground">
              Upload CV/Resume *
            </label>
            <input
              id="resume"
              name="resume"
              type="file"
              required
              accept=".pdf,.doc,.docx"
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-crimson file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:bg-darkblue file:text-white file:cursor-pointer file:font-semibold"
            />
            <p className="mt-2 text-xs text-muted">Accepted formats: PDF, DOC, DOCX (Max 10MB)</p>
          </div>

          {/* Cover Letter */}
          <div>
            <label htmlFor="coverLetter" className="mb-2 block text-sm font-semibold text-foreground">
              Cover Letter (Optional)
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              maxLength={2000}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-crimson resize-none"
              placeholder="Tell us why you're interested in this position and what you can bring to our team..."
              rows={6}
            />
            <p className="mt-2 text-xs text-muted">Maximum 2000 characters</p>
          </div>

          {/* Error Message */}
          {status === "error" && (
            <div className="rounded-xl bg-red-50 p-4">
              <p className="text-sm text-red-800">{errorMessage}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting" || loading || listings.length === 0}
            className="w-full cursor-hover rounded-full bg-darkblue px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)] disabled:bg-surface disabled:text-muted disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Submitting..." : "Submit Application"}
          </button>

          <p className="text-center text-xs text-muted">
            <Link href="/careers" className="text-darkblue hover:text-crimson">
              Back to careers
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
