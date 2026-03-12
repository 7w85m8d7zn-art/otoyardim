import Link from "next/link";
import { ArrowUpRight, LifeBuoy, RefreshCcw, Truck, Wrench } from "lucide-react";

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
    <section className="py-14 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
          <SectionHeading
            eyebrow="Ana Hizmetler"
            title="Acil ihtiyacı doğrudan çözen net hizmetler"
            description="Yol yardım, mobil lastik servisi, yerinde değişim ve tamir sayfalarını daha hızlı karşılaştırabilmeniz için içerikleri sade bir akışta topladık."
          />

          <div className="border-t border-white/10">
            {featuredServices.map((service, index) => {
              const Icon = iconMap[service.icon];

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group grid gap-5 border-b border-white/10 py-6 transition hover:border-amber-300/30 md:grid-cols-[64px_1fr_auto] md:items-start"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] font-display text-lg leading-none text-amber-300">
                    0{index + 1}
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-ember/20 bg-ember/10 text-blaze">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="card-title">
                        {service.title}
                      </h3>
                      <p className="copy-soft mt-3 max-w-2xl">{service.description}</p>
                    </div>
                  </div>

                  <div className="md:justify-self-end">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-amber-300 transition group-hover:text-white" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
