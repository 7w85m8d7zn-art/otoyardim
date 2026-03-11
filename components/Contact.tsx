import { Clock3, MapPinned, MessageCircleMore, PhoneCall } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig, whatsappHref } from "@/lib/site";

export function Contact() {
  return (
    <section id="iletisim" className="scroll-mt-24 py-16 md:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="İletişim"
              title="Bizimle Hızlı ve Net Şekilde İletişime Geçin"
              description="Şen Oto Lastik ile telefon veya WhatsApp üzerinden doğrudan iletişim kurabilir, konum paylaşarak hızlı saha yönlendirmesi alabilirsiniz."
            />

            <div className="mt-8 grid gap-4">
              <div className="panel rounded-[1.7rem] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ember/20 bg-gradient-to-br from-ember/15 to-blaze/10 text-blaze">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Telefon
                    </p>
                    <a
                      href={siteConfig.phoneHref}
                      className="mt-1 block font-display text-4xl uppercase tracking-[0.04em] text-white"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="panel rounded-[1.7rem] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ember/20 bg-gradient-to-br from-ember/15 to-blaze/10 text-blaze">
                    <MapPinned className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Adres
                    </p>
                    <p className="mt-2 text-base leading-7 text-slate-200">{siteConfig.address}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="panel rounded-[1.7rem] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ember/20 bg-gradient-to-br from-ember/15 to-blaze/10 text-blaze">
                      <Clock3 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                        Çalışma Saatleri
                      </p>
                      <p className="mt-2 text-lg font-bold text-white">7/24 Açık</p>
                    </div>
                  </div>
                </div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="panel rounded-[1.7rem] p-6 transition hover:border-emerald-500/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                      <MessageCircleMore className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                        WhatsApp
                      </p>
                      <p className="mt-2 text-lg font-bold text-white">WhatsApp'tan Ulaş</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="panel overflow-hidden rounded-[2rem] p-3">
            <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10">
              <iframe
                src={siteConfig.mapsEmbed}
                title="Şen Oto Lastik Ortaköy Aksaray konumu"
                className="h-[430px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
