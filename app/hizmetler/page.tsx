import type { Metadata } from "next";

import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Services } from "@/components/Services";
import { VehicleTypes } from "@/components/VehicleTypes";
import { homeFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Şen Oto Lastik hizmetleri: mobil lastik servisi, yol yardım, lastik değişimi, lastik tamiri, balans kontrolü ve ticari araç lastik desteği.",
  alternates: {
    canonical: "/hizmetler",
  },
};

export default function HizmetlerPage() {
  return (
    <main>
      <PageHero
        eyebrow="Hizmetler"
        title="Mobil Lastik ve Yol Yardım Hizmet Kataloğu"
        description="Kurumsal hizmet yapımızı ayrı başlıklarda inceleyin. Binek araçlardan ticari araçlara kadar destek verdiğimiz ana servis alanlarını bu sayfada topladık."
        image="/images/page-services.jpg"
      />
      <Services />
      <ProcessSteps />
      <VehicleTypes />
      <FAQ
        items={homeFaqs}
        title="Hizmetlerle İlgili Sorular"
        description="Mobil lastik servisi, yol yardım ve değişim süreçlerinde müşterilerimizin sık sorduğu sorular."
      />
    </main>
  );
}
