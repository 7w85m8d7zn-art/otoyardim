import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { whyChooseUs } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <section id="neden-biz" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <SectionHeading
            eyebrow="Neden Şen Oto Lastik?"
            title="Kurumsal Duruş, Sahada Hızlı Çözüm"
            description="Kurumsal web yapımız sadece tanıtım amaçlı değil; hizmet modelimizi, çalışma tarzımızı ve müşteri güvenini açık biçimde göstermek için hazırlandı."
          />

          <div className="grid gap-4">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="panel rounded-[1.75rem] p-6 transition hover:border-ember/40"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                      <CheckCircle2 className="h-6 w-6 text-blaze" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                        0{index + 1}
                      </p>
                      <h3 className="mt-1 font-display text-3xl uppercase tracking-[0.04em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
