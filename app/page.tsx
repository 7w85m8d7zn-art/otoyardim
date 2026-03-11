import { BlogPreviewSection } from "@/components/BlogPreviewSection";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { GallerySection } from "@/components/GallerySection";
import { GoogleMapSection } from "@/components/GoogleMapSection";
import { HeroSection } from "@/components/HeroSection";
import { JantSalesSection } from "@/components/JantSalesSection";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustBar } from "@/components/TrustBar";
import { VehicleTypesSection } from "@/components/VehicleTypesSection";
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
  title: "Aksaray'da 7/24 Yol Yardım ve Mobil Lastik Servisi",
  description:
    "Şen Oto Lastik; Ortaköy / Aksaray merkezli 7/24 yol yardım, mobil lastik servisi, yerinde lastik değişimi, oto lastik tamiri, Niğde Otobanı'nda full hizmet ve Türkiye geneli jant gönderimi sunar.",
  path: "/",
  image: "/images/aksaray-yol-yardim.jpg",
  keywords: [
    "aksaray yol yardım",
    "aksaray yol yardım 7/24",
    "niğde otobanı yol yardım",
    "ortaköy oto lastik",
    "mobil lastik servisi",
    "jant satışı",
    "81 ile jant gönderimi",
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
              "Aksaray'da 7/24 yol yardım, mobil lastik servisi, lastik tamiri ve jant satışı.",
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
        eyebrow="Aksaray Yerel SEO + Dönüşüm"
        title="Aksaray'da 7/24 Yol Yardım ve Mobil Lastik Servisi"
        description="Şen Oto Lastik, Ortaköy / Aksaray merkezli olarak 7/24 hizmet verir. Yolda kaldığınız anda mobil lastik değişimi, yol yardım, yerinde lastik tamiri ve hızlı ulaşım için tek arama yeterlidir. Niğde Otobanı'nda da full hizmet vererek acil çağrılara hızlı dönüş sağlıyoruz."
        image="/images/aksaray-yol-yardim.jpg"
        imageAlt="Aksaray'da 7/24 yol yardım ve mobil lastik servisi görseli"
        highlights={[
          "Niğde Otobanı'nda full hizmet ve hızlı saha desteği",
          "Ortaköy / Aksaray merkezli saha desteği",
          "7/24 yol yardım ve mobil lastik değişimi",
          "Hızlı ulaşım, net iletişim, güçlü yerel güven",
          "Türkiye geneli 81 ile jant gönderimi",
        ]}
        badge="Niğde Otobanı Dahil 7/24 Hizmet"
      />
      <TrustBar />
      <ServicesSection />
      <VehicleTypesSection />
      <WhyChooseUsSection />
      <ServiceAreaSection />
      <JantSalesSection />
      <GallerySection />
      <FAQSection groups={homeFaqGroups} />
      <BlogPreviewSection posts={blogPosts} />
      <ContactSection />
      <GoogleMapSection />
    </>
  );
}
