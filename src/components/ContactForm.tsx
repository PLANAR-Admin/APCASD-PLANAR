"use client";

import { useState, type FormEvent, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SERVICES } from "@/lib/services-data";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const searchParams = useSearchParams();
  const industryParam = searchParams.get("industry");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedService, setSelectedService] = useState("");

  // Pre-select a default service based on the industry parameter
  useEffect(() => {
    if (industryParam) {
      // Default to "Talent Acquisition & Recruitment" for industry inquiries
      const defaultService = SERVICES.find(
        (s) => s.slug === "talent-acquisition-recruitment"
      );
      if (defaultService) {
        setSelectedService(defaultService.title);
      }
    }
  }, [industryParam]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMessage(json.message ?? "Something went wrong, please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong, please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-border bg-surface p-8 text-center">
        <h2 className="text-xl font-bold text-darkblue">Thank you, we received your message.</h2>
        <p className="mt-2 text-sm text-muted">Our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Honeypot field — hidden from real users, bots tend to fill it. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-foreground">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            minLength={2}
            maxLength={100}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-semibold text-foreground">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            maxLength={150}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-foreground">
            Work Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={150}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-foreground">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={20}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-foreground">
          Service Required
          {industryParam && (
            <span className="ml-2 text-xs text-crimson font-normal">
              Based on your interest in {industryParam}
            </span>
          )}
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="">Select a service (optional)</option>
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
          Requirement / Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-crimson"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-crimson">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="cursor-hover rounded-full border-2 border-transparent bg-darkblue px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.04] hover:border-white hover:bg-transparent hover:tracking-wide hover:text-darkblue hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)] disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit Requirement"}
      </button>
    </form>
  );
}
