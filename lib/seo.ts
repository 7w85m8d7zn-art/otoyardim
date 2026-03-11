import type { Metadata } from "next";

import type { BlogPost, FaqGroup, LandingPage } from "@/data/types";
import { siteConfig, whatsappHref } from "@/data/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
};

type BreadcrumbItem = {
  name: string;
  href: string;
};

export const absoluteUrl = (path = "/") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.url).toString();
};

export const buildMetadata = ({
  title,
  description,
  path,
  image = siteConfig.defaultOgImage,
  keywords,
  type = "website",
}: MetadataInput): Metadata => ({
  title,
  description,
  keywords,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl(path),
    siteName: siteConfig.name,
    locale: "tr_TR",
    type,
    images: [
      {
        url: absoluteUrl(image),
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [absoluteUrl(image)],
  },
});

export const flattenFaqGroups = (faqGroups: FaqGroup[]) =>
  faqGroups.flatMap((group) => group.items);

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.href),
  })),
});

export const buildLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  image: absoluteUrl(siteConfig.defaultOgImage),
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: siteConfig.district,
    addressRegion: siteConfig.city,
    addressCountry: "TR",
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Ortaköy / Aksaray",
    },
    {
      "@type": "AdministrativeArea",
      name: "Aksaray, Niğde Otobanı ve yakın şehirler",
    },
    {
      "@type": "Country",
      name: "Türkiye",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  availableLanguage: ["tr-TR"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneHref.replace("tel:", ""),
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["tr"],
    },
  ],
  sameAs: [whatsappHref],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Şen Oto Lastik Hizmet Kataloğu",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yol yardım" } },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Mobil lastik servisi" },
      },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lastik tamiri" } },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Yerinde lastik değişimi" },
      },
    ],
  },
});

export const buildAutoRepairSchema = (page: LandingPage) => ({
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: `${siteConfig.name} - ${page.title}`,
  description: page.metaDescription,
  url: absoluteUrl(`/${page.slug || ""}`),
  areaServed: "Aksaray, Niğde Otobanı ve yakın şehirler",
  serviceType: "Yol yardım, mobil lastik servisi, lastik tamiri ve lastik değişimi",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
  },
});

export const buildFaqSchema = (faqGroups: FaqGroup[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: flattenFaqGroups(faqGroups).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const buildBlogPostingSchema = (post: BlogPost) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.metaDescription,
  image: absoluteUrl(post.coverImage),
  datePublished: post.publishedAt,
  dateModified: post.updatedAt,
  mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  author: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
  },
  articleSection: post.category,
  inLanguage: "tr-TR",
});

export const buildLandingPageSchemas = (page: LandingPage) => [
  buildBreadcrumbSchema([
    { name: "Anasayfa", href: "/" },
    { name: page.title, href: `/${page.slug}` },
  ]),
  buildAutoRepairSchema(page),
  buildFaqSchema(page.faqGroups),
];

export const buildBlogSchemas = (post: BlogPost) => [
  buildBreadcrumbSchema([
    { name: "Anasayfa", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ]),
  buildBlogPostingSchema(post),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];
