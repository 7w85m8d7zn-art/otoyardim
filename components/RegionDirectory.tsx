import Link from "next/link";
import { ArrowRight, MapPinned } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const regionCards = [
  {
    title: "Ortaköy / Aksaray",
    description:
      "İlçe merkezi, sanayi çevresi ve bağlantı yolları için mobil lastik ve yol yardım desteği.",
    href: "/bolgeler/ortakoy-aksaray",
  },
  {
    title: "Aksaray Merkez",
    description:
      "Şehir içi, otopark, iş yeri ve yol kenarı çağrılarında hızlı yönlendirme desteği.",
    href: "/bolgeler/aksaray-merkez",
  },
];

export function RegionDirectory() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Bölge Rehberi"
          title="Hizmet Verdiğimiz Başlıca Noktalar"
          description="Saha operasyonunu daha şeffaf göstermek için ana hizmet bölgelerimizi ayrı sayfalarda topladık."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {regionCards.map((region) => (
            <Link
              key={region.href}
              href={region.href}
              className="group panel rounded-[1.8rem] p-6 transition hover:-translate-y-1 hover:border-ember/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-blaze">
                <MapPinned className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-4xl uppercase tracking-[0.04em] text-white">
                {region.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{region.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-blaze">
                Bölge sayfasını aç
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
