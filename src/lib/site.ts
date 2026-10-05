export const SITE = {
  legalName: "APCASD PLANAR (OPC) PRIVATE LIMITED",
  shortName: "APCASD PLANAR",
  foundedYear: 2024,
  location: "Chennai, Tamil Nadu, India",
  url: "https://www.apcasdplanar.com",
  email: "info@planar.co.in",
  phone: "+91 80728 18486",
  tagline: "Empowering your team to reach new heights",
  positioning: "Stronger People. Better Experiences. Greater Business Impact.",
  positioningSupport:
    "HR solutions and corporate event management built around your people, your objectives and your business.",
  mission:
    "To deliver integrated people and workforce solutions that enable organizations to optimize talent, elevate performance, and create sustained enterprise value.",
  vision:
    "To be a distinguished force in the future of work, shaping high-performing organizations through talent excellence, strategic insight, and enduring partnerships.",
  values: [
    "Integrity",
    "People Excellence",
    "Client Commitment",
    "Professionalism",
  ],
  pillars: ["Our Innovation", "Our Transformation", "Our Legacy"],
} as const;

export const NAV_LINKS = [
  {
    label: "Our Solutions",
    children: [
      { label: "HR Solutions", href: "/hr-solutions" },
      { label: "Events", href: "/events" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Why APCASD", href: "/why-apcasd" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "HR Solutions", href: "/hr-solutions" },
  { label: "Events", href: "/events" },
  { label: "Industries", href: "/industries" },
  { label: "Why APCASD", href: "/why-apcasd" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const INDUSTRIES = [
  "Information Technology",
  "Manufacturing",
  "Automotive",
  "BFSI",
  "Healthcare",
  "Pharmaceuticals",
  "Retail & FMCG",
  "Education",
  "Startups",
  "Professional Services",
] as const;
