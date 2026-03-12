import Link from "next/link";
import { ArrowRight, MapPinned, Navigation, Route } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { areaCoverage } from "@/lib/content";

const areaLinks = [
  { label: "Ortaköy / Aksaray", href: "/bolgeler/ortakoy-aksaray" },
  { label: "Aksaray Merkez", href: "/bolgeler/aksaray-merkez" },
];

export function ServiceAreas() {
  return (
    <section id="bolgeler" className="scroll-mt-24 border-y border-white/10 bg-white/[0.025] py-16 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <SectionHeading
              eyebrow="Hizmet Bölgeleri"
              title="Ortaköy ve Çevresinde Planlı Servis Yapısı"
              description="Merkez operasyon noktamız Ortaköy / Aksaray hattıdır. Şehir içi ve çevre yollarda çağrı geldiğinde bölgeye uygun rota ile hızlı yönlendirme sağlanır."
            />

            <div className="mt-8 flex flex-col gap-3">
              {areaLinks.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-blaze transition hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                  {area.label}
                </Link>
              ))}
              <Link
                href="/bolgeler"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:text-blaze"
              >
                <ArrowRight className="h-4 w-4" />
                Tüm bölgeleri incele
              </Link>
            </div>
          </div>

          <div className="panel rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              {areaCoverage.map((area, index) => {
                const Icon = [MapPinned, Navigation, Route, Navigation][index];

                return (
                  <div
                    key={area}
                    className="rounded-[1.4rem] border border-white/10 bg-black/30 p-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ember/20 bg-gradient-to-br from-ember/15 to-blaze/10 text-blaze">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-3xl uppercase tracking-[0.04em] text-white">
                      {area}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Bölge şartlarına göre planlanan hizmet akışı ile sürücülere hızlı destek
                      sağlanır.
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
