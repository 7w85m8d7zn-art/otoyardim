import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Disc3,
  MapPinned,
  RefreshCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { serviceCards } from "@/lib/content";

const iconMap = {
  shield: ShieldCheck,
  refresh: RefreshCcw,
  truck: Truck,
  map: MapPinned,
  briefcase: BriefcaseBusiness,
  disc: Disc3,
};

export function Services() {
  return (
    <section id="hizmetler" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Hizmetler"
          title="Başlıca Hizmet Alanlarımız"
          description="Kurumsal yapı içinde sunduğumuz hizmetler; sahadaki gerçek ihtiyaca göre planlandı. Hem bireysel hem ticari araç kullanıcıları için çözüm odaklı destek sağlıyoruz."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group panel rounded-[1.6rem] p-6 transition hover:-translate-y-1 hover:border-ember/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-blaze">
                    <Icon className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-500 transition group-hover:translate-x-1 group-hover:text-white" />
                </div>

                <h3 className="mt-6 font-display text-3xl uppercase tracking-[0.04em] text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>

                <span className="mt-6 inline-flex text-sm font-bold text-blaze">
                  Detay sayfası
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
