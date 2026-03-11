import { Clock3, LifeBuoy, Truck, Wrench, Zap } from "lucide-react";

import { Container } from "@/components/Container";
import { trustItems } from "@/data/site";

const iconMap = {
  clock: Clock3,
  zap: Zap,
  wrench: Wrench,
  lifeBuoy: LifeBuoy,
  truck: Truck,
};

export function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-white/[0.03]">
      <Container className="py-5">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {trustItems.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={item.title}
                className="rounded-[1.4rem] border border-white/10 bg-black/35 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-ember/25 bg-gradient-to-br from-ember/20 to-blaze/10 text-blaze">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                    {item.title}
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
