import type { ReactNode } from "react";
import Link from "next/link";
import { Clock3, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig, whatsappHref } from "@/data/site";

export function ContactSection() {
  return (
    <section id="iletisim" className="py-14 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="İletişim"
              title="Acil destek için tek noktadan ulaşın"
              description="Telefon, WhatsApp, adres ve çalışma saatlerini daha açık bir düzenle topladık. Özellikle Ankara - Niğde Otobanı ve Aksaray çevresi çağrılarında önce arama yapmak en hızlı başlangıçtır."
            />

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={siteConfig.phoneHref}
                className="action-btn action-btn-primary"
              >
                <PhoneCall className="h-4 w-4" />
                Hemen Ara
              </Link>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="action-btn action-btn-secondary"
              >
                <MessageCircleMore className="h-4 w-4 text-emerald-400" />
                WhatsApp'tan Ulaş
              </Link>
            </div>

            <div className="mt-8 border-t border-white/10">
              <InfoRow
                icon={<PhoneCall className="h-4 w-4 text-amber-300" />}
                title="Telefon"
                value={siteConfig.phoneDisplay}
              />
              <InfoRow
                icon={<Clock3 className="h-4 w-4 text-amber-300" />}
                title="Çalışma Saatleri"
                value={siteConfig.hours}
              />
              <InfoRow
                icon={<MapPin className="h-4 w-4 text-amber-300" />}
                title="Adres"
                value={siteConfig.address}
              />
            </div>
          </div>

          <div className="surface-panel overflow-hidden">
            <iframe
              src={siteConfig.mapEmbed}
              title="Şen Oto Lastik harita konumu"
              className="h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

type InfoRowProps = {
  icon: ReactNode;
  title: string;
  value: string;
};

function InfoRow({ icon, title, value }: InfoRowProps) {
  return (
    <div className="grid gap-2 border-b border-white/10 py-5 sm:grid-cols-[180px_1fr] sm:items-start">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="small-heading">{title}</h3>
      </div>
      <p className="section-copy">{value}</p>
    </div>
  );
}
