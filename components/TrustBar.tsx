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
  const items = trustItems.slice(0, 4);

  return (
    <section className="border-y border-white/10 bg-black/20">
      <Container className="py-6">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-ember/25 bg-gradient-to-br from-ember/20 to-blaze/10 text-blaze">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-white">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
