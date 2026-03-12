import { MapPinned, Truck } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceAreaCards } from "@/data/site";

type ServiceAreaSectionProps = {
  compact?: boolean;
};

export function ServiceAreaSection({ compact = false }: ServiceAreaSectionProps) {
  const icons = [MapPinned, Truck];

  return (
    <section className={compact ? "py-12 sm:py-14" : "py-12 sm:py-16"}>
      <Container>
        <SectionHeading
          eyebrow="Hizmet Alanı"
          title="Aksaray çıkışlı saha, otobanda yoğun destek"
          description="Hizmeti iki net bölgede anlatıyoruz: Aksaray / Ortaköy çıkışlı saha ve Ankara - Niğde Otobanı yoğunluk hattı."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {serviceAreaCards.map((card, index) => {
            const Icon = icons[index];

            return (
              <div
                key={card.title}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-ember/20 bg-gradient-to-br from-ember/20 to-blaze/10 text-blaze">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-2xl leading-[1] text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{card.description}</p>
                <ul className="mt-4 space-y-2.5 text-sm leading-6 text-slate-200">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
