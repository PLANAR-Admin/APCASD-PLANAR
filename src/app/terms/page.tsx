import type { Metadata } from "next";
import { Breadcrumb } from "@/components/services/Breadcrumb";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE.shortName}.`,
};

export default function TermsPage() {
  return (
    <div className="pt-36 pb-24 sm:pt-44">
      <div className="mx-auto max-w-3xl px-6">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
        <h1 className="text-3xl font-extrabold text-darkblue">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted">
          Draft — pending legal review. Last updated: {new Date().toLocaleDateString("en-IN")}
        </p>

        <div className="prose prose-sm mt-8 max-w-none text-foreground/90">
          <h2>Use of this website</h2>
          <p>
            This website is operated by {SITE.legalName}. By using it, you agree to use
            it only for lawful purposes and in a way that does not infringe the rights
            of, or restrict or inhibit the use and enjoyment of, this site by anyone
            else.
          </p>

          <h2>Service enquiries</h2>
          <p>
            Submitting an enquiry through this website does not create a binding
            agreement. Any engagement for HR or event management services will be
            governed by a separate written proposal or agreement between you and{" "}
            {SITE.legalName}.
          </p>

          <h2>Intellectual property</h2>
          <p>
            All content on this website, including text, graphics, logos and the
            {" "}{SITE.shortName} brand mark, is the property of {SITE.legalName} unless
            otherwise stated, and may not be reproduced without permission.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            While we take reasonable care to keep information on this website accurate
            and up to date, {SITE.legalName} makes no warranties about the completeness
            or accuracy of this website&apos;s content.
          </p>

          <h2>Governing law</h2>
          <p>These terms are governed by the laws of India.</p>

          <h2>Contact</h2>
          <p>Questions about these terms can be sent to {SITE.email}.</p>
        </div>
      </div>
    </div>
  );
}
