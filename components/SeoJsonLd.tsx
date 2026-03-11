import { FaqItem } from "@/lib/content";
import { siteConfig } from "@/lib/site";

type SeoJsonLdProps = {
  title: string;
  description: string;
  path?: string;
  faqs?: FaqItem[];
};

export function SeoJsonLd({
  title,
  description,
  path = "/",
  faqs = [],
}: SeoJsonLdProps) {
  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "AutoRepair",
      name: siteConfig.name,
      image: `${siteConfig.url}/og-image.jpg`,
      url: `${siteConfig.url}${path}`,
      telephone: siteConfig.phone,
      description,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address,
        addressLocality: siteConfig.district,
        addressRegion: siteConfig.city,
        addressCountry: "TR",
      },
      areaServed: ["Ortaköy", "Aksaray Merkez", "Çevre ilçeler"],
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
      keywords: siteConfig.keywords.join(", "),
    },
    {
      "@type": "WebPage",
      name: title,
      description,
      url: `${siteConfig.url}${path}`,
      inLanguage: "tr-TR",
    },
  ];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
