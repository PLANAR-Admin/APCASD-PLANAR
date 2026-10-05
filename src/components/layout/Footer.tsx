"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FOOTER_LINKS, SITE } from "@/lib/site";

const SOCIAL_LINKS = ["Instagram", "LinkedIn", "Twitter", "Facebook"];

const FOOTER_COLUMNS_VIEWPORT = { once: true, amount: 0.25 } as const;

export function Footer() {
  return (
    <footer className="rounded-t-[40px] border-t border-border bg-surface text-darkblue">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FOOTER_COLUMNS_VIEWPORT}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
              Email Us
            </h3>
            <a
              href={`mailto:${SITE.email}`}
              className="cursor-hover break-words text-xl font-bold text-darkblue hover:text-crimson sm:text-2xl"
            >
              {SITE.email}
            </a>
            <p className="mt-6 text-xs text-muted">
              © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
            </p>
            <Link
              href="/privacy-policy"
              className="cursor-hover mt-1 inline-block text-xs font-semibold text-darkblue hover:text-crimson"
            >
              Privacy Policy
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FOOTER_COLUMNS_VIEWPORT}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
              Page
            </h3>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="cursor-hover text-sm font-semibold text-darkblue/80 hover:text-crimson">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FOOTER_COLUMNS_VIEWPORT}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
              Social
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm font-semibold text-darkblue/80">
              {SOCIAL_LINKS.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={FOOTER_COLUMNS_VIEWPORT}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
              Location
            </h3>
            <p className="max-w-[16ch] text-sm font-semibold text-darkblue/80">{SITE.location}</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 select-none whitespace-nowrap text-[clamp(1.75rem,7vw,6.5rem)] font-extrabold leading-none tracking-tight text-darkblue/10"
        >
          APCASD PLANAR
        </motion.p>
      </div>
    </footer>
  );
}
