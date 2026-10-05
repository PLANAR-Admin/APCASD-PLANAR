import Image from "next/image";

const FAQS = [
  {
    question: "Does APCASD PLANAR manage corporate events outside Chennai?",
    answer:
      "Yes. APCASD PLANAR is a Chennai-based corporate event management company that also supports corporate event planning and execution for businesses in Bengaluru.",
  },
  {
    question: "What types of corporate events can APCASD PLANAR manage in Chennai and Bengaluru?",
    answer:
      "APCASD PLANAR manages corporate events such as conferences, town halls, annual day celebrations, award shows, product launches, team outings and festive workplace celebrations across Chennai and Bengaluru.",
  },
  {
    question: "How does APCASD PLANAR coordinate events across two cities?",
    answer:
      "Our team plans each event around the specific venue, vendors and logistics of the city it is held in, while following the same structured planning and execution process for clients in both Chennai and Bengaluru.",
  },
];

export function EventsSeoContent() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight text-darkblue">
        Corporate Event Management Company Serving Chennai and Bengaluru
      </h2>
      <p className="mt-4 font-medium text-muted">
        APCASD PLANAR is a Chennai-based corporate event management company supporting
        businesses across Chennai and Bengaluru with end-to-end planning, coordination and
        on-ground execution. From annual day celebrations and award shows to product
        launches and team engagement experiences, our team brings structured project
        management and creative execution to every event, whether it is hosted in Chennai
        or Bengaluru.
      </p>
      <p className="mt-4 font-medium text-muted">
        Businesses in Bengaluru&apos;s growing corporate and technology ecosystem, and
        organizations across Chennai&apos;s established business community, both look for
        an event partner who can manage the details end-to-end. APCASD PLANAR&apos;s
        approach combines dedicated planning, vendor coordination and clear communication
        to help companies in both cities execute events that reflect their brand and
        objectives.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/services/corporate-events.jpg"
            alt="Conference and business event production"
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/services/product-launches.jpg"
            alt="Product launch and brand activation experience"
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-10 flex flex-col divide-y divide-border rounded-2xl border border-border">
        {FAQS.map((faq) => (
          <div key={faq.question} className="p-5">
            <h3 className="font-bold text-foreground">{faq.question}</h3>
            <p className="mt-2 font-medium text-muted">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
