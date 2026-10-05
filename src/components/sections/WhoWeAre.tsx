"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users2, PartyPopper, Handshake } from "lucide-react";
import { SITE } from "@/lib/site";

const highlights = [
  { icon: Users2, label: "People-focused HR & workforce solutions" },
  { icon: PartyPopper, label: "Professionally managed corporate events" },
  { icon: Handshake, label: "One partner for people and experiences" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function WhoWeAre() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          variants={fadeUp}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-crimson">
            Who We Are
          </p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-extrabold leading-tight text-darkblue">
            Overcoming Your Key Business Barriers Starts Here
          </h2>
          <p className="mt-5 text-muted">
            Founded in {SITE.foundedYear}, {SITE.legalName} is a people-focused business
            solutions company committed to helping organizations build stronger teams,
            streamline workforce operations, and create exceptional experiences.
          </p>
          <p className="mt-4 text-muted">
            Our approach combines industry knowledge, creative thinking, professional
            expertise, customized solutions, and precise execution — whether it is finding
            the right talent for your organization or bringing your next event to life.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {highlights.map(({ icon: Icon, label }, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.12 }}
                className="flex items-center gap-3 text-sm font-medium text-foreground"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </span>
                {label}
              </motion.li>
            ))}
          </ul>

          <Link
            href="/why-apcasd"
            className="cursor-hover mt-8 inline-block rounded-full border-2 border-darkblue/20 px-6 py-3 text-sm font-semibold text-darkblue transition-all duration-300 hover:scale-[1.04] hover:border-white hover:bg-transparent hover:tracking-wide hover:shadow-[0_0_0_1.5px_rgba(0,0,139,0.3),0_10px_25px_rgba(0,0,139,0.15)]"
          >
            Learn More About Us
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          whileHover={{ scale: 1.02 }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl"
        >
          <Image
            src="/images/who-we-are.jpg"
            alt="Team at APCASD PLANAR collaborating in the office"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
