import type { Metadata } from "next";
import { Breadcrumb } from "@/components/services/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Tell ${SITE.shortName} what you're planning — HR support or a corporate event — and our team will guide the next step.`,
};

export default function ContactPage() {
  return (
    <div className="pt-36 pb-24 sm:pt-44">
      <div className="mx-auto max-w-2xl px-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-crimson">
          Contact Us
        </p>
        <h1 className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-tight text-darkblue">
          Tell Us What You&apos;re Planning
        </h1>
        <p className="mt-4 text-muted">
          Whether you need HR support or are planning a corporate event, share a few
          details and our team can understand your requirement and guide the next step.
        </p>

        <div className="mt-10">
          <ContactForm />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 text-sm text-muted sm:grid-cols-3">
          <p>{SITE.email}</p>
          <p>{SITE.phone}</p>
          <p>{SITE.location}</p>
        </div>
      </div>
    </div>
  );
}
