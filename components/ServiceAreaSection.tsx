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
    <section className={compact ? "py-14 sm:py-16" : "py-14 sm:py-20"}>
      <Container>
        <SectionHeading
          eyebrow="Hizmet Alanı"
          title="Aksaray merkezli, Niğde Otobanı dahil aktif saha hizmeti"
          description="İş modelimizi tek ve net bir hizmet çatısında anlatıyoruz: yerinde lastik desteği, yol yardım ve mobil servis. Böylece hem kullanıcı hem Google tarafında daha temiz bir yapı oluşuyor."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {serviceAreaCards.map((card, index) => {
            const Icon = icons[index];

            return (
              <div
                key={card.title}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-ember/20 bg-gradient-to-br from-ember/20 to-blaze/10 text-blaze">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-3xl uppercase leading-[0.95] text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
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
