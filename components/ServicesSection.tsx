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
  const featuredServices = serviceCards.slice(0, 4);

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Ana Hizmetler"
          title="En çok aranan dört hizmet"
          description="Kullanıcının çoğunlukla aradığı destekler bunlar: yol yardım, otoban hattı, mobil servis ve yerinde müdahale."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featuredServices.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5 shadow-card transition hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.05]"
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
                <h3 className="mt-4 font-display text-2xl leading-[1] text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">
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
