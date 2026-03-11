import type { Metadata } from "next";

import { AboutPreview } from "@/components/AboutPreview";
import { FAQ } from "@/components/FAQ";
import { Gallery } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { aboutFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Şen Oto Lastik hakkında kurumsal bilgiler. Ortaköy / Aksaray bölgesinde 7/24 mobil lastik servisi ve yol yardım hizmet anlayışımızı inceleyin.",
  alternates: {
    canonical: "/hakkimizda",
  },
};

export default function HakkimizdaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Hakkımızda"
        title="Yerel Güçle Çalışan Profesyonel Lastik Hizmeti"
        description="Şen Oto Lastik; Ortaköy / Aksaray merkezli operasyon yapısıyla sürücülere, ticari müşterilere ve yol üstü destek ihtiyacı duyan araç sahiplerine güvenilir hizmet sunar."
        image="/images/page-about.jpg"
      />
      <AboutPreview />
      <ProcessSteps />
      <WhyChooseUs />
      <Gallery />
      <FAQ
        items={aboutFaqs}
        title="Şirketimiz Hakkında Sorular"
        description="Şen Oto Lastik'in hizmet yaklaşımı ve uzmanlık alanları hakkında öne çıkan soruları burada topladık."
      />
    </main>
  );
}
