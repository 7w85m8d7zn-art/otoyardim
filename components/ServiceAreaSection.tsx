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
    <section className={compact ? "py-12 sm:py-14" : "py-14 sm:py-20"}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
          <SectionHeading
            eyebrow="Hizmet Alanı"
            title="Aksaray merkezi ve Niğde yönlü hat bizim ana odak alanımız"
            description="Ana yoğunluğumuz Aksaray ili çevresi ile Niğde yönüne uzanan hatta. Aşağıdaki listeyi kesin servis sözü değil, öncelikli değerlendirme ve yoğun çalışma bölgeleri olarak okuyabilirsiniz."
          />

          <div className="grid gap-10 lg:grid-cols-2">
            {serviceAreaCards.map((card, index) => {
              const Icon = icons[index];

              return (
                <article key={card.title} className="border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-ember/20 bg-ember/10 text-blaze">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="card-title">
                      {card.title}
                    </h3>
                  </div>

                  <p className="section-copy mt-4">{card.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.areas.map((area) => (
                      <span key={area} className="info-pill">
                        {area}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-3">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-200">
                        <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
