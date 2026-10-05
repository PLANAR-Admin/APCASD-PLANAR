import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Next.js inlines per-request RSC hydration payloads via <script> tags, so
// 'unsafe-inline' is required here unless a per-request nonce is wired up via
// proxy.ts — that route forces every page into dynamic rendering, which
// conflicts with this site's static-generation/SEO goals, so we accept the
// standard 'unsafe-inline' trade-off and rely on the other directives below.
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://images.unsplash.com https://plus.unsplash.com https://ptc-p-001.sitecorecontenthub.cloud;
  font-src 'self';
  connect-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "ptc-p-001.sitecorecontenthub.cloud" },
    ],
  },
  experimental: {
    // Not tree-shaken by default like lucide-react; this trims framer-motion's
    // barrel import down to only the modules each file actually uses.
    optimizePackageImports: ["framer-motion"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: cspHeader },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
