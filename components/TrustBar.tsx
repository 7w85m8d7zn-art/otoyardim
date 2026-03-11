import { Clock3, Gauge, LifeBuoy, Wrench } from "lucide-react";

import { Container } from "@/components/Container";
import { trustItems } from "@/lib/content";

const iconMap = {
  clock: Clock3,
  gauge: Gauge,
  wrench: Wrench,
  lifeBuoy: LifeBuoy,
};

export function TrustBar() {
  return (
    <section className="border-b border-white/10 bg-white/[0.03]">
      <Container className="py-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-ember/20 bg-gradient-to-br from-ember/15 to-blaze/10 text-blaze">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
