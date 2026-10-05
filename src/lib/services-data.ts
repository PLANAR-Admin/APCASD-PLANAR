import type { Service, ServiceCategoryContent } from "./types";

export const CATEGORY_CONTENT: Record<string, ServiceCategoryContent> = {
  "hr-solutions": {
    slug: "hr-solutions",
    title: "HR Solutions",
    eyebrow: "HR SOLUTIONS",
    seoTitle:
      "HR Solutions Company in Chennai | Recruitment, HR Consulting & Workforce Support | APCASD PLANAR",
    metaDescription:
      "APCASD PLANAR provides HR solutions in Chennai including talent acquisition, recruitment, HR consulting, employee engagement, training and development, and HR operations support.",
    heroCopy:
      "The right people, the right processes and the right workplace practices can shape long-term business performance. APCASD PLANAR provides practical, people-focused HR solutions that help organizations attract talent, strengthen people practices and build productive workplaces. Our approach is designed around your business requirements rather than a one-size-fits-all model.",
    ctaPrimary: "Talk to an HR Expert",
    ctaSecondary: "Explore HR Services",
    introHeading: "HR Solutions Built Around People",
    introCopy:
      "From finding the right candidate to managing evolving workforce needs, we provide end-to-end HR solutions designed for modern businesses. Explore our recruitment, consulting, training and HR operations services below to see where we can support your team in Chennai or Bengaluru.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
  events: {
    slug: "events",
    title: "Event Management",
    eyebrow: "EVENTS & EXPERIENCES",
    seoTitle: "Corporate Event Management Company in Chennai | APCASD PLANAR",
    metaDescription:
      "APCASD PLANAR provides corporate event management in Chennai for annual days, award shows, product launches, team outings, festive celebrations, DJ nights and business events.",
    heroCopy:
      "We plan, organize and execute corporate events that inspire, engage and leave a lasting impression. From annual day celebrations and award shows to product launches, team outings and corporate celebrations, APCASD PLANAR brings together creative planning, production coordination, people engagement and on-ground execution.",
    ctaPrimary: "Plan Your Event",
    ctaSecondary: "Explore Services",
    introHeading: "Corporate Event Management in Chennai",
    introCopy:
      "As a corporate event management partner in Chennai and Bengaluru, APCASD PLANAR works with businesses to turn event objectives into well-planned experiences, coordinating the creative, operational and execution requirements while keeping the brand, audience and business purpose at the center. Browse our event formats below to find the right fit for your next celebration or business gathering.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
};

export const SERVICES: Service[] = [
  // ---------- HR SOLUTIONS ----------
  {
    slug: "talent-acquisition-recruitment",
    category: "hr-solutions",
    title: "Talent Acquisition & Recruitment",
    eyebrow: "HR SOLUTIONS",
    seoTitle: "Talent Acquisition & Recruitment Services in Chennai | APCASD PLANAR",
    metaDescription:
      "Structured talent acquisition and recruitment support in Chennai — job profiling, sourcing, screening, interview coordination and offer management.",
    heroCopy:
      "Find the right people for the roles that matter most. APCASD PLANAR supports businesses with structured talent acquisition and recruitment processes designed around role requirements, organizational needs and candidate fit.",
    cardDescription:
      "End-to-end recruitment support from role profiling to offer management.",
    whatWeDo: [
      "Job Analysis & Role Profiling",
      "Sourcing & Screening",
      "Interview Coordination",
      "Offer Management",
    ],
    expandedCopy:
      "A strong recruitment process begins before the first interview. We help define the role, understand the required capabilities, identify suitable talent, coordinate the selection process and support offer management. Our approach helps businesses create a more structured recruitment journey while keeping the organization's role requirements and workforce objectives at the center.\n\nEvery engagement starts with understanding your business context — team structure, growth stage and the specific gap a new hire needs to fill. From there, our coordination covers sourcing channels, structured screening and interview scheduling, so hiring managers spend their time evaluating candidates rather than chasing logistics. The goal is a recruitment process that is consistent, well-documented and repeatable as your team continues to grow.",
    idealFor: [
      "Growing businesses",
      "Companies expanding teams",
      "Organizations hiring for specialized roles",
      "Businesses improving recruitment processes",
    ],
    benefits: [
      "Structured, role-first hiring process",
      "Dedicated coordination from sourcing to offer",
      "Faster, more consistent time-to-hire",
    ],
    faqs: [
      {
        question: "What does talent acquisition include?",
        answer:
          "Talent acquisition can include understanding the role, defining the candidate profile, sourcing suitable candidates, screening, interview coordination and supporting the offer process.",
      },
      {
        question: "How can recruitment support help a growing business?",
        answer:
          "A structured recruitment process can help businesses define requirements clearly, organize candidate evaluation and improve coordination between hiring stakeholders.",
      },
    ],
    ctaLabel: "Discuss Your Hiring Requirements",
    relatedSlugs: ["hr-consulting", "hr-operations"],
    icon: "UserSearch",
    audienceIcon: "Building2",
  },
  {
    slug: "hr-consulting",
    category: "hr-solutions",
    title: "HR Consulting",
    eyebrow: "HR SOLUTIONS",
    seoTitle:
      "HR Consulting Services in Chennai | HR Policy, Workforce Planning & Performance | APCASD PLANAR",
    metaDescription:
      "Practical HR consulting in Chennai covering policy, organization structure, workforce planning and performance management.",
    heroCopy:
      "Create stronger people practices with practical HR guidance aligned to your business structure, workforce requirements and growth objectives.",
    cardDescription:
      "Practical guidance on HR policy, structure, workforce planning and performance.",
    whatWeDo: [
      "HR Policy & Compliance",
      "Organization Structure",
      "Workforce Planning",
      "Performance Management",
    ],
    expandedCopy:
      "Effective HR is more than administration. It is about creating practical systems that help organizations manage people, responsibilities and performance with greater clarity. APCASD PLANAR supports businesses with HR consulting across policies, organization structure, workforce planning and performance management.\n\nWe start by reviewing how your organization currently handles people decisions — reporting lines, policy gaps, performance reviews — and work with leadership to close them with practical, India-compliant frameworks rather than generic templates. Whether you are formalizing HR for the first time or refining an existing setup, our consulting is designed to fit your business size and stage rather than impose a one-size-fits-all system.",
    idealFor: [
      "Businesses formalizing HR practices",
      "Organizations restructuring teams",
      "Companies building performance frameworks",
    ],
    benefits: [
      "Practical, compliance-aware HR policy design",
      "Guidance tailored to your business stage",
      "Clearer structure for performance and growth",
    ],
    faqs: [
      {
        question: "What does HR consulting cover?",
        answer:
          "HR consulting can cover people policies, organizational structure, workforce planning, performance management and other HR practices based on business requirements.",
      },
      {
        question: "Why is workforce planning important?",
        answer:
          "Workforce planning helps organizations think ahead about the people, roles and capabilities required to support business operations and growth.",
      },
    ],
    ctaLabel: "Talk to an HR Consultant",
    relatedSlugs: ["hr-operations", "talent-acquisition-recruitment"],
    icon: "ClipboardList",
    audienceIcon: "Briefcase",
  },
  {
    slug: "training-development",
    category: "hr-solutions",
    title: "Training & Development",
    eyebrow: "HR SOLUTIONS",
    seoTitle: "Corporate Training & Development Services in Chennai | APCASD PLANAR",
    metaDescription:
      "Corporate training and development in Chennai — training needs analysis, learning programs, soft skills and leadership development.",
    heroCopy: "Build capabilities that help people perform, lead and grow.",
    cardDescription:
      "Learning programs built around real capability and leadership gaps.",
    whatWeDo: [
      "Training Needs Analysis",
      "Learning & Development Programs",
      "Soft Skills Training",
      "Leadership Development",
    ],
    expandedCopy:
      "Learning should connect with real business and people needs. APCASD PLANAR supports organizations in identifying development requirements and building learning initiatives around employee capability, communication, leadership and professional growth.\n\nWe begin with a training needs analysis so every program addresses an actual capability gap rather than a generic curriculum. From there, we coordinate facilitators, formats and schedules — soft skills workshops, leadership tracks or role-specific learning — and help track how the training translates into on-the-job performance over time.",
    idealFor: [
      "Companies building leadership pipelines",
      "Teams needing structured upskilling",
      "Organizations with identified capability gaps",
    ],
    benefits: [
      "Programs built on a real needs analysis",
      "Coverage from soft skills to leadership tracks",
      "Coordinated scheduling and delivery",
    ],
    faqs: [
      {
        question: "What types of corporate training can businesses consider?",
        answer:
          "Training programs can include soft skills, leadership development, role-specific learning and broader learning and development initiatives based on identified needs.",
      },
      {
        question: "What is training needs analysis?",
        answer:
          "Training needs analysis is the process of identifying capability or knowledge gaps so learning initiatives can be aligned with employee and organizational requirements.",
      },
    ],
    ctaLabel: "Plan a Training Program",
    relatedSlugs: ["hr-operations", "hr-consulting"],
    icon: "GraduationCap",
    audienceIcon: "Target",
  },
  {
    slug: "hr-operations",
    category: "hr-solutions",
    title: "HR Operations",
    eyebrow: "HR SOLUTIONS",
    seoTitle:
      "HR Operations Support in Chennai | HR Documentation, HRIS & Payroll Support",
    metaDescription:
      "HR operations support in Chennai — employee records, HR documentation, HRIS, leave & attendance and payroll support.",
    heroCopy: "Bring greater structure and consistency to everyday HR administration.",
    cardDescription:
      "Employee records, documentation, HRIS and payroll support done right.",
    whatWeDo: [
      "Employee Records Management",
      "HR Documentation",
      "HRIS Support",
      "Leave & Attendance Support",
      "Payroll Support",
    ],
    expandedCopy:
      "Strong HR operations create the foundation for consistent employee administration. APCASD PLANAR provides practical support across employee records, HR documentation, HRIS support, leave and attendance processes and payroll support.\n\nAs teams grow, informal spreadsheets and ad-hoc processes stop scaling. We help set up consistent employee records, documentation standards and leave/attendance workflows — and support HRIS adoption where it makes sense — so administration stays accurate and audit-ready as headcount increases.",
    idealFor: [
      "Growing teams without dedicated HR ops staff",
      "Companies standardizing HR documentation",
      "Businesses adopting an HRIS",
    ],
    benefits: [
      "Consistent, audit-ready employee records",
      "Support across leave, attendance and payroll",
      "Smoother HRIS adoption for growing teams",
    ],
    faqs: [
      {
        question: "What is HR operations support?",
        answer:
          "HR operations support can include employee records, HR documentation, HRIS support, leave and attendance support, and payroll support.",
      },
      {
        question: "Why are structured HR operations important?",
        answer:
          "Clear HR processes can help organizations maintain consistent employee information, documentation and day-to-day workforce administration.",
      },
    ],
    ctaLabel: "Strengthen Your HR Operations",
    relatedSlugs: ["training-development", "talent-acquisition-recruitment"],
    icon: "FolderCog",
    audienceIcon: "Users2",
  },

  // ---------- EVENTS ----------
  {
    slug: "corporate-events",
    category: "events",
    title: "Corporate Events",
    eyebrow: "EVENTS & EXPERIENCES",
    seoTitle: "Corporate Event Management Company in Chennai | Corporate Events",
    metaDescription:
      "Corporate event management in Chennai for conferences, seminars, leadership meets, town halls and business events.",
    heroCopy:
      "Corporate events should do more than fill a calendar. They should bring people together, communicate your message and create an experience aligned with your organization.",
    cardDescription:
      "Conferences, town halls and business gatherings planned end to end.",
    whatWeDo: [
      "Conferences & Seminars",
      "Town Halls & Executive Meets",
      "Dealer / Partner Meets",
      "Business Networking Events",
    ],
    expandedCopy:
      "APCASD PLANAR manages corporate events with a structured approach covering planning, creative direction, coordination and execution. We work to align the event format with your audience, objectives, brand identity, schedule and operational requirements.\n\nFrom the first planning call, we map the event to a clear brief — audience, message, budget and venue — before moving into vendor coordination, production and rehearsal. On the day, our team manages logistics and troubleshooting on-ground so your internal stakeholders can focus on the audience rather than the operations.",
    idealFor: [
      "Corporates",
      "Businesses",
      "Marketing and internal communications teams",
    ],
    benefits: [
      "End-to-end planning under one point of contact",
      "Vendor and venue coordination handled for you",
      "On-ground execution support on event day",
    ],
    faqs: [
      {
        question: "What does a corporate event management company do?",
        answer:
          "A corporate event management company can support planning, concept development, venue coordination, event production, branding, entertainment, guest management, logistics and on-ground execution.",
      },
      {
        question: "How much does a corporate event cost in Chennai?",
        answer:
          "Corporate event cost depends on factors such as guest count, venue, event format, production requirements, entertainment, décor, duration and logistics. A customized proposal is more useful than a generic price.",
      },
    ],
    ctaLabel: "Plan Your Corporate Event",
    relatedSlugs: ["annual-day-celebrations", "award-shows"],
    icon: "Presentation",
    audienceIcon: "Building2",
  },
  {
    slug: "annual-day-celebrations",
    category: "events",
    title: "Annual Day Celebrations",
    eyebrow: "EVENTS & EXPERIENCES",
    seoTitle: "Annual Day Event Management in Chennai | Corporate Annual Day Organisers",
    metaDescription:
      "Annual day event management in Chennai — theme design, stage production, entertainment and employee recognition.",
    heroCopy: "Celebrate achievements. Recognize people. Bring the whole organization together.",
    cardDescription:
      "Theme, stage, entertainment and recognition for a memorable annual day.",
    whatWeDo: [
      "Theme & Concept Development",
      "Stage, Audio-Visual & Lighting",
      "Artist & Performance Management",
      "Awards & Recognition",
    ],
    expandedCopy:
      "A corporate annual day is an opportunity to celebrate milestones, recognize employees and strengthen organizational culture. APCASD PLANAR helps businesses plan annual day experiences around their people, brand and celebration objectives.\n\nWe work with HR and leadership teams to shape a theme, build the recognition moments that matter most to your people, and coordinate stage, sound, lighting and entertainment around it. The result is a celebration that feels personal to your organization rather than a generic event template.",
    idealFor: ["Corporates", "HR teams", "Organizations marking milestones"],
    benefits: [
      "Theme and program built around your culture",
      "Full stage, sound and lighting coordination",
      "Recognition moments that feel personal",
    ],
    faqs: [
      {
        question: "What does annual day event management include?",
        answer:
          "Annual day management can include concept development, venue and décor coordination, stage production, sound and lighting, entertainment, employee programs, awards, guest management and event-day execution.",
      },
      {
        question: "When should a company start planning an annual day?",
        answer:
          "Planning time depends on event scale, venue availability, production requirements and entertainment. Larger events should generally begin planning well in advance.",
      },
    ],
    ctaLabel: "Plan Your Annual Day",
    relatedSlugs: ["award-shows", "festive-celebrations"],
    icon: "PartyPopper",
    audienceIcon: "Award",
  },
  {
    slug: "award-shows",
    category: "events",
    title: "Award Shows",
    eyebrow: "EVENTS & EXPERIENCES",
    seoTitle: "Corporate Award Show Management in Chennai | Award Ceremony Organisers",
    metaDescription:
      "Corporate award ceremony planning in Chennai — concept, stage design, presentation flow and entertainment.",
    heroCopy: "Turn recognition into an experience people remember.",
    cardDescription: "Professionally staged recognition experiences for your people.",
    whatWeDo: [
      "Award Concept & Theme",
      "Nomination / Winner Coordination",
      "Stage Design & LED Content",
      "Emcee & Entertainment Coordination",
    ],
    expandedCopy:
      "Corporate award ceremonies require timing, presentation and attention to detail. APCASD PLANAR helps organizations create professional recognition experiences that place employees, partners or business achievements at the center of the event.\n\nWe plan the category structure and presentation flow early, then build the stage design, LED content and emcee script around it so the evening runs smoothly from red-carpet moments to the final trophy. Every ceremony is scripted and rehearsed in advance to keep pacing tight and recognition moments meaningful.",
    idealFor: ["Corporates recognizing employees", "Industry bodies", "Partner programs"],
    benefits: [
      "Clear category and presentation flow planning",
      "Stage, LED and emcee coordination in one place",
      "Rehearsed run-of-show for smooth pacing",
    ],
    faqs: [
      {
        question: "What is included in a corporate award ceremony?",
        answer:
          "Depending on the brief, an award ceremony can include concept and category planning, stage design, presentation flow, entertainment, trophy coordination and on-ground execution.",
      },
    ],
    ctaLabel: "Create Your Award Experience",
    relatedSlugs: ["annual-day-celebrations", "corporate-events"],
    icon: "Trophy",
    audienceIcon: "Medal",
  },
  {
    slug: "product-launches",
    category: "events",
    title: "Product Launches",
    eyebrow: "EVENTS & EXPERIENCES",
    seoTitle: "Product Launch Event Management in Chennai | Corporate Product Launches",
    metaDescription:
      "Product launch event management in Chennai — brand-aligned staging, reveal experiences and media coordination.",
    heroCopy: "Make the launch moment impossible to ignore.",
    cardDescription: "Brand-aligned staging and reveal experiences for new products.",
    whatWeDo: [
      "Launch Concept & Brand-Aligned Design",
      "Stage, LED & Visual Content",
      "Product Reveal Experience",
      "Media & Guest Coordination",
    ],
    expandedCopy:
      "A product launch is a brand experience as much as it is an event. APCASD PLANAR helps businesses create launch environments that communicate the product story, support audience engagement and deliver a coordinated reveal.\n\nWe start with the product story — what it does, who it's for and the moment it deserves — and design the stage, visuals and reveal sequence to support that narrative. Media, guest and vendor coordination are handled in parallel so the launch day itself stays focused on the audience and the reveal.",
    idealFor: ["Brands launching new products", "Marketing teams", "Corporates"],
    benefits: [
      "Launch design built around your product story",
      "Coordinated stage, visual and reveal sequencing",
      "Media and guest coordination handled end to end",
    ],
    faqs: [
      {
        question: "What is included in product launch event management?",
        answer:
          "Depending on the brief, product launch management can include concept development, venue coordination, stage and visual production, product reveal planning, branding, guest coordination, entertainment and on-ground execution.",
      },
    ],
    ctaLabel: "Plan Your Product Launch",
    relatedSlugs: ["corporate-events", "award-shows"],
    icon: "Rocket",
    audienceIcon: "Megaphone",
  },
  {
    slug: "team-outings",
    category: "events",
    title: "Team Outings",
    eyebrow: "EVENTS & EXPERIENCES",
    seoTitle: "Corporate Team Outing & Team Building Events in Chennai | APCASD PLANAR",
    metaDescription:
      "Corporate team outings and team-building events in Chennai — venue coordination, activities and logistics.",
    heroCopy: "Give teams a reason to step away from the desk, connect and recharge.",
    cardDescription: "Team-building experiences planned around your people and schedule.",
    whatWeDo: [
      "Destination / Venue Coordination",
      "Team-Building Activities",
      "Food & Hospitality Coordination",
      "Transport & Logistics",
    ],
    expandedCopy:
      "A successful team outing balances engagement, relaxation and practical coordination. APCASD PLANAR can help organizations design team experiences around team size, objectives, location, schedule and employee preferences.\n\nWe handle destination shortlisting, travel and hospitality coordination and a team-building activity plan that matches your group's size and energy — whether that's a half-day offsite or a multi-day trip. Transport, timing and on-ground logistics are managed so your team can simply show up and take part.",
    idealFor: ["HR and engagement teams", "Corporates", "Growing teams"],
    benefits: [
      "Destination and activity planning matched to your team",
      "Travel, food and hospitality coordinated for you",
      "On-ground logistics handled start to finish",
    ],
    faqs: [
      {
        question: "What can be included in a corporate team outing?",
        answer:
          "Team outings may include venue planning, travel coordination, team-building activities, games, entertainment, food and hospitality, logistics and on-ground coordination.",
      },
    ],
    ctaLabel: "Plan a Team Experience",
    relatedSlugs: ["corporate-events", "festive-celebrations"],
    icon: "Users",
    audienceIcon: "HeartHandshake",
  },
  {
    slug: "festive-celebrations",
    category: "events",
    title: "Festive Celebrations",
    eyebrow: "EVENTS & EXPERIENCES",
    seoTitle: "Corporate Festive Event Management in Chennai | Office Celebrations",
    metaDescription:
      "Corporate festive celebrations in Chennai — décor, activities, entertainment and employee participation.",
    heroCopy:
      "Bring your workplace together through celebrations that reflect your people and your culture.",
    cardDescription: "Workplace festive celebrations planned around your calendar.",
    whatWeDo: [
      "Theme Décor & Photo Zones",
      "Cultural Performances",
      "Employee Engagement Activities",
      "Food Experiences",
    ],
    expandedCopy:
      "Corporate festive celebrations create opportunities for employees to connect beyond everyday work. APCASD PLANAR helps businesses plan festive experiences that combine décor, activities, entertainment and employee participation.\n\nWhether it's Pongal, Diwali, Christmas or New Year, we plan the décor, photo zones, cultural performances and food experience around your office calendar and the occasion being marked. The focus stays on genuine employee participation rather than a purely decorative celebration.",
    idealFor: ["HR teams", "Corporates", "Offices marking festivals"],
    benefits: [
      "Décor and activities planned around the occasion",
      "Cultural performances and food experiences included",
      "Designed for genuine employee participation",
    ],
    faqs: [
      {
        question: "What formats can a corporate festive celebration take?",
        answer:
          "Festive celebrations can be planned around occasions such as Pongal, Diwali, Christmas or New Year, based on the client's requirements and actual event calendar.",
      },
    ],
    ctaLabel: "Plan Your Workplace Celebration",
    relatedSlugs: ["team-outings", "award-shows"],
    icon: "Sparkles",
    audienceIcon: "PartyPopper",
  },
];

export function getServicesByCategory(category: string) {
  return SERVICES.filter((s) => s.category === category);
}

export function getServiceBySlug(category: string, slug: string) {
  return SERVICES.find((s) => s.category === category && s.slug === slug);
}

export function getRelatedServices(service: Service) {
  const prioritized = service.relatedSlugs
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s));
  const prioritizedSlugs = new Set(prioritized.map((s) => s.slug));
  const rest = SERVICES.filter(
    (s) => s.category === service.category && s.slug !== service.slug && !prioritizedSlugs.has(s.slug)
  );
  return [...prioritized, ...rest];
}
