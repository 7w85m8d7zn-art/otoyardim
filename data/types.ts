export type LinkItem = {
  label: string;
  href: string;
};

export type TrustItem = {
  title: string;
  description: string;
  icon: "clock" | "zap" | "wrench" | "lifeBuoy" | "truck";
};

export type ServiceCard = {
  title: string;
  description: string;
  href: string;
  icon: "lifeBuoy" | "truck" | "wrench" | "refresh";
  badge?: string;
};

export type GalleryItem = {
  title: string;
  image: string;
  alt: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  title: string;
  items: FaqItem[];
};

export type ContentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type RelatedLink = {
  label: string;
  href: string;
  description: string;
};

export type LandingPageType = "service" | "local";

export type LandingPage = {
  slug: string;
  type: LandingPageType;
  metaTitle: string;
  metaDescription: string;
  title: string;
  eyebrow: string;
  badge: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  quickFacts: string[];
  sections: ContentSection[];
  faqGroups: FaqGroup[];
  relatedLinks: RelatedLink[];
  ctaTitle: string;
  ctaText: string;
  callout: string;
  keywords: string[];
};
