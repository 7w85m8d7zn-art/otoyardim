import { CarFront, Package, Truck, Wrench } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { vehicleTypes } from "@/lib/content";

const iconMap = [
  CarFront,
  Package,
  Truck,
  Truck,
  Truck,
  Wrench,
];

export function VehicleTypes() {
  return (
    <section id="arac-tipleri" className="scroll-mt-24 border-y border-white/10 bg-white/[0.025] py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Araç Tipleri"
          title="Hangi Araçlara Hizmet Veriyoruz?"
          description="Binek araçların yanında hafif ticari, kamyonet, kamyon ve tır grubunda da destek veriyoruz. Bu yapı, sahada çalışan ticari müşteriler için güven oluşturur."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {vehicleTypes.map((vehicle, index) => {
            const Icon = iconMap[index];

            return (
              <div
                key={vehicle}
                className="panel rounded-[1.5rem] p-5 text-center transition hover:-translate-y-1 hover:border-ember/40"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-blaze">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display text-2xl uppercase tracking-[0.04em] text-white">
                  {vehicle}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
