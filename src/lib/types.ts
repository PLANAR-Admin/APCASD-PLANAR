export type ServiceCategory = "events" | "hr-solutions";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  category: ServiceCategory;
  title: string;
  eyebrow: string;
  seoTitle: string;
  metaDescription: string;
  heroCopy: string;
  cardDescription: string;
  whatWeDo: string[];
  expandedCopy: string;
  idealFor: string[];
  benefits: string[];
  faqs: ServiceFaq[];
  ctaLabel: string;
  relatedSlugs: string[];
  /** Icon name from lucide-react used for the "What We Do" list visual. */
  icon: string;
  /** Icon name from lucide-react used for the "Who This Is For" list visual. */
  audienceIcon: string;
}

export interface ServiceCategoryContent {
  slug: ServiceCategory;
  title: string;
  eyebrow: string;
  seoTitle: string;
  metaDescription: string;
  heroCopy: string;
  ctaPrimary: string;
  ctaSecondary: string;
  introHeading: string;
  introCopy: string;
  image?: string;
}
