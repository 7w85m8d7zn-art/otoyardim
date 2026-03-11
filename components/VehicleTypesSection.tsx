import { BusFront, CarFront, Construction, ShieldCheck, Truck, TruckIcon } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { vehicleTypes } from "@/data/site";

const icons = [CarFront, TruckIcon, Truck, Truck, ShieldCheck, BusFront, Construction];

type VehicleTypesSectionProps = {
  compact?: boolean;
};

export function VehicleTypesSection({ compact = false }: VehicleTypesSectionProps) {
  return (
    <section className={compact ? "py-14 sm:py-16" : "py-14 sm:py-20"}>
      <Container>
        <SectionHeading
          eyebrow="Araç Grupları"
          title="Otomobilden iş makinesine kadar geniş hizmet alanı"
          description="Yerel yol yardım ve mobil lastik hizmetimiz sadece binek araçlarla sınırlı değil. Araç tipine göre saha planı yapıyoruz."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {vehicleTypes.map((vehicle, index) => {
            const Icon = icons[index];

            return (
              <div
                key={vehicle}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-ember/20 bg-gradient-to-br from-ember/15 to-blaze/10 text-blaze">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-white">
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

