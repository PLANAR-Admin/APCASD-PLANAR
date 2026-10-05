import type { Metadata } from "next";
import { Breadcrumb } from "@/components/services/Breadcrumb";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.shortName}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-36 pb-24 sm:pt-44">
      <div className="mx-auto max-w-3xl px-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        <h1 className="text-3xl font-extrabold text-darkblue">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">
          Draft — pending legal review. Last updated: {new Date().toLocaleDateString("en-IN")}
        </p>

        <div className="prose prose-sm mt-8 max-w-none text-foreground/90">
          <p>
            {SITE.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects
            your privacy. This policy explains what information we collect through this
            website, why we collect it, how long we keep it, and how you can ask us to
            delete it.
          </p>

          <h2>What we collect</h2>
          <p>
            When you submit our contact form, we collect your name, email address, phone
            number (optional), company name (optional), the service you are enquiring
            about, and the message you provide. We do not ask for financial, government
            ID, or other sensitive personal information through this website.
          </p>

          <h2>Why we collect it</h2>
          <p>
            We use this information solely to respond to your enquiry, understand your
            requirement, and provide you with relevant information about our HR and
            event management services.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We retain enquiry information for as long as necessary to respond to your
            request and maintain a reasonable business record, after which it is
            deleted.
          </p>

          <h2>Your rights</h2>
          <p>
            Under the Digital Personal Data Protection Act, 2023 (DPDP Act), you have
            the right to ask us what personal data we hold about you, to correct it, or
            to request its deletion. To exercise these rights, contact us at{" "}
            {SITE.email}.
          </p>

          <h2>Consent</h2>
          <p>
            By submitting our contact form, you agree that your details will be used to
            respond to your enquiry as described in this policy.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to {SITE.email}.
          </p>
        </div>
      </div>
    </div>
  );
}
