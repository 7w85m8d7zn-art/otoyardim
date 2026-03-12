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
  title: "Aksaray ve Niğde Hattında 7/24 Yol Yardım",
  description:
    "Şen Oto Lastik; Ortaköy / Aksaray merkezli 7/24 yol yardım, mobil lastik servisi, yerinde lastik değişimi ve Niğde hattında öncelikli destek sunar.",
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
        eyebrow="Niğde Hattı Öncelikli Destek"
        title="Aksaray ve Niğde hattında 7/24 yol yardım"
        description="Şen Oto Lastik, Ortaköy / Aksaray çıkışlı ekibiyle özellikle Niğde hattı ve Aksaray çevresindeki yol yardım çağrılarına hızlı dönüş yapar. Yolda kaldığınız anda arama, konum ve yönlendirme sürecini kısa tutarız."
        image="/images/aksaray-yol-yardim.jpg"
        imageAlt="Aksaray ve Niğde hattı için yol yardım saha aracı"
        highlights={[
          "Niğde hattında öncelikli saha desteği",
          "Ortaköy / Aksaray çıkışlı hızlı lokasyon teyidi",
          "Yol yardım, stepne değişimi ve mobil lastik müdahalesi",
        ]}
        badge="Niğde hattı öncelikli hizmet"
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
