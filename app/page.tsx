import { BlogPreviewSection } from "@/components/BlogPreviewSection";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { GoogleMapSection } from "@/components/GoogleMapSection";
import { HeroSection } from "@/components/HeroSection";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustBar } from "@/components/TrustBar";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { blogPosts } from "@/data/blog-posts";
import { homeFaqGroups } from "@/data/site";
import {
  buildAutoRepairSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildMetadata,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Aksaray ve Ankara - Niğde Otobanı'nda 7/24 Yol Yardım",
  description:
    "Şen Oto Lastik; Ortaköy / Aksaray merkezli 7/24 yol yardım, mobil lastik servisi, yerinde lastik değişimi ve Ankara - Niğde Otobanı'nda full hizmet sunar.",
  path: "/",
  image: "/images/aksaray-yol-yardim.jpg",
  keywords: [
    "aksaray yol yardım",
    "aksaray yol yardım 7/24",
    "ankara niğde otobanı yol yardım",
    "ankara niğde otobanı lastikçi",
    "niğde otobanı yol yardım",
    "ortaköy oto lastik",
    "mobil lastik servisi",
    "lastik tamiri",
  ],
});

export default function HomePage() {
  return (
    <>
      <SchemaMarkup
        data={[
          buildBreadcrumbSchema([{ name: "Anasayfa", href: "/" }]),
          buildLocalBusinessSchema(),
          buildAutoRepairSchema({
            slug: "",
            type: "local",
            metaTitle: "",
            metaDescription:
              "Aksaray'da 7/24 yol yardım, mobil lastik servisi, yerinde lastik değişimi ve Ankara - Niğde Otobanı'nda full hizmet.",
            title: "Anasayfa",
            eyebrow: "",
            badge: "",
            description: "",
            intro: "",
            image: "/images/aksaray-yol-yardim.jpg",
            imageAlt: "",
            highlights: [],
            quickFacts: [],
            sections: [],
            faqGroups: homeFaqGroups,
            relatedLinks: [],
            ctaTitle: "",
            ctaText: "",
            callout: "",
            keywords: [],
          }),
          buildFaqSchema(homeFaqGroups),
        ]}
      />
      <HeroSection
        eyebrow="Otoban ve Yol Yardım Odağı"
        title="Aksaray ve Ankara - Niğde Otobanı'nda 7/24 yol yardım"
        description="Şen Oto Lastik, Ortaköy / Aksaray çıkışlı saha desteğiyle yolda kaldığınız anda süreci uzatmadan yönlendirme yapar. Ana yoğunluğumuz Ankara - Niğde Otobanı ve Aksaray hattındaki yol yardım çağrılarıdır; mobil lastik, stepne ve yerinde müdahale ihtiyaçlarını da aynı hızla yönetiyoruz."
        image="/images/aksaray-yol-yardim.jpg"
        imageAlt="Aksaray ve Ankara - Niğde Otobanı için yol yardım saha aracı"
        highlights={[
          "Ankara - Niğde Otobanı'nda yoğun çağrılara uygun saha desteği",
          "Ortaköy / Aksaray çıkışlı hızlı lokasyon teyidi",
          "Yol yardım, stepne değişimi ve mobil lastik müdahalesi",
        ]}
        badge="Ankara - Niğde Otobanı yoğun destek hattı"
      />
      <TrustBar />
      <ServiceAreaSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <FAQSection groups={homeFaqGroups} />
      <ContactSection />
      <GoogleMapSection />
      <BlogPreviewSection posts={blogPosts} />
    </>
  );
}
