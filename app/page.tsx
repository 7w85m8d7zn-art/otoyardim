import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustBar } from "@/components/TrustBar";
import { homeFaqGroups } from "@/data/site";
import {
  buildAutoRepairSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildMetadata,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Şen Oto Lastik | Aksaray ve Niğde Hattında Hızlı Lastik Desteği",
  description:
    "Şen Oto Lastik; Ortaköy / Aksaray merkezli yol yardım, mobil lastik servisi, lastik tamiri ve Niğde hattında öncelikli saha desteğini tek merkezden yönetir.",
  path: "/",
  image: "/images/aksaray-yol-yardim.jpg",
  keywords: [
    "aksaray yol yardım",
    "aksaray yol yardım 7/24",
    "niğde yol yardım",
    "niğde hattı yol yardım",
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
              "Aksaray'da 7/24 yol yardım, mobil lastik servisi, yerinde lastik değişimi ve Niğde hattında öncelikli destek.",
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
        eyebrow="Şen Oto Lastik / Niğde Hattı Önceliği"
        title="Aksaray ve Niğde hattında doğru lastik desteğine hızlı geçin"
        description="Şen Oto Lastik, Ortaköy / Aksaray çıkışlı yapısıyla yol yardım, mobil servis, lastik tamiri ve yerinde değişim hizmetlerini tek merkezden yönlendirir. Özellikle Niğde hattındaki acil çağrılarda önce doğru hizmeti, sonra en hızlı saha akışını kurarız."
        image="/images/aksaray-yol-yardim.jpg"
        imageAlt="Aksaray ve Niğde hattı için yol yardım saha aracı"
        highlights={[
          "Niğde hattında öncelikli yol yardım ve saha planı",
          "Mobil lastik servisi, tamir ve değişim için net hizmet geçişi",
          "Ortaköy / Aksaray çıkışlı hızlı lokasyon teyidi ve 7/24 iletişim",
        ]}
        badge="Ortaköy / Aksaray çıkışlı ekip"
      />
      <TrustBar />
      <ServicesSection />
      <ServiceAreaSection />
      <FAQSection groups={homeFaqGroups} />
      <CTASection
        title="Niğde hattı ve Aksaray çevresi için hızlı destek alın"
        description="Acil yol yardım, mobil lastik servisi ya da lastik tamiri için önce arayın. Gerekirse WhatsApp üzerinden konum alıp sizi doğru müdahaleye yönlendirelim."
        callout="İletişim detayları ve harita bilgisi için ayrı iletişim sayfamızı da kullanabilirsiniz."
      />
    </>
  );
}
