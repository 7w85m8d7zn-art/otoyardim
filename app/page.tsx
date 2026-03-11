import type { Metadata } from "next";

import { AboutPreview } from "@/components/AboutPreview";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { ServiceAreas } from "@/components/ServiceAreas";
import { Services } from "@/components/Services";
import { TrustBar } from "@/components/TrustBar";
import { VehicleTypes } from "@/components/VehicleTypes";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { homeFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kurumsal Oto Lastik ve Yol Yardım Hizmetleri",
  description:
    "Şen Oto Lastik kurumsal web sitesi. Ortaköy / Aksaray ve çevresinde mobil lastik servisi, lastik değişimi, lastik tamiri ve yol yardım hizmetlerini inceleyin.",
};

export default function HomePage() {
  return (
    <main>
      <SeoJsonLd
        title="Şen Oto Lastik | Kurumsal Oto Lastik ve Yol Yardım Hizmetleri"
        description="Şen Oto Lastik; Ortaköy / Aksaray ve çevresinde 7/24 mobil lastik servisi, lastik değişimi, lastik tamiri ve yol yardım hizmetleri sunar."
        path="/"
        faqs={homeFaqs}
      />
      <Hero />
      <TrustBar />
      <AboutPreview />
      <Services />
      <ProcessSteps />
      <VehicleTypes />
      <ServiceAreas />
      <WhyChooseUs />
      <Gallery />
      <FAQ items={homeFaqs} />
      <Contact />
    </main>
  );
}
