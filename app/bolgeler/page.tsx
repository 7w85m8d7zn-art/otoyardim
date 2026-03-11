import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { RegionDirectory } from "@/components/RegionDirectory";
import { ServiceAreas } from "@/components/ServiceAreas";

export const metadata: Metadata = {
  title: "Bölgeler",
  description:
    "Şen Oto Lastik'in hizmet verdiği bölgeler. Ortaköy / Aksaray, Aksaray Merkez ve çevre yol güzergahları için hizmet detaylarını inceleyin.",
  alternates: {
    canonical: "/bolgeler",
  },
};

export default function BolgelerPage() {
  return (
    <main>
      <PageHero
        eyebrow="Bölgeler"
        title="Hizmet Verdiğimiz Bölgeler"
        description="Saha operasyonlarımızı daha şeffaf göstermek için destek verdiğimiz ana bölge sayfalarını ayrı bir yapıda topladık."
        image="/images/page-regions.jpg"
      />
      <RegionDirectory />
      <ServiceAreas />
    </main>
  );
}
