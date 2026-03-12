import type { ReactNode } from "react";
import Link from "next/link";
import { Clock3, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig, whatsappHref } from "@/data/site";

export function ContactSection() {
  return (
    <section id="iletisim" className="py-12 sm:py-16">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-card sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="İletişim"
                title="Acil destek için tek ekranda iletişim"
                description="Arama, WhatsApp, adres ve çalışma saatlerini gereksiz kalabalık oluşturmadan tek bölümde topladık."
              />

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center gap-2 rounded-2xl bg-ember px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-orange-500"
                >
                  <PhoneCall className="h-4 w-4" />
                  Hemen Ara
                </Link>
                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-emerald-500/20"
                >
                  <MessageCircleMore className="h-4 w-4 text-emerald-400" />
                  WhatsApp'tan Ulaş
                </Link>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <InfoCard
                  icon={<PhoneCall className="h-4 w-4 text-amber-300" />}
                  title="Telefon"
                  value={siteConfig.phoneDisplay}
                />
                <InfoCard
                  icon={<Clock3 className="h-4 w-4 text-amber-300" />}
                  title="Çalışma Saatleri"
                  value={siteConfig.hours}
                />
                <InfoCard
                  icon={<MapPin className="h-4 w-4 text-amber-300" />}
                  title="Adres"
                  value={siteConfig.address}
                  className="sm:col-span-2"
                />
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-400">
                Acil durumda önce arama yapmak, ardından gerekirse canlı konum paylaşmak en hızlı
                akıştır.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.8rem] border border-white/10">
              <iframe
                src={siteConfig.mapEmbed}
                title="Şen Oto Lastik harita konumu"
                className="h-[320px] w-full"
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

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
  className?: string;
};

function InfoCard({ icon, title, value, className = "" }: InfoCardProps) {
  return (
    <div className={`rounded-[1.4rem] border border-white/10 bg-black/20 p-4 ${className}`}>
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-sm font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{value}</p>
    </div>
  );
}
