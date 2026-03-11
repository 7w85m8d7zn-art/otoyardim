import Link from "next/link";
import { LifeBuoy, RefreshCcw, Truck, Wrench } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceCards } from "@/data/site";

const iconMap = {
  lifeBuoy: LifeBuoy,
  truck: Truck,
  wrench: Wrench,
  refresh: RefreshCcw,
};

export function ServicesSection() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Ana Hizmetler"
          title="Yolda kalana anlık, sahada net çözüm"
          description="Şen Oto Lastik tamamen yol yardım ve lastik hizmetlerine odaklanır. Sayfaları da bu yüzden kısa sürede arama ve WhatsApp dönüşümüne götürecek şekilde kurguladık."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 shadow-card transition hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-ember/20 bg-gradient-to-br from-ember/20 to-blaze/10 text-blaze">
                    <Icon className="h-5 w-5" />
                  </div>
                  {service.badge ? (
                    <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-amber-100">
                      {service.badge}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-5 font-display text-3xl uppercase leading-[0.95] text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Sayfaya Git
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
