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
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="İletişim"
              title="Telefon, WhatsApp ve adres bilgisi tek ekranda"
              description="Bu bölüm dönüşüm odaklı son temas noktasıdır. Acil çağrı için arama, canlı konum paylaşımı için WhatsApp ve yerel güven için adres-harita birlikte sunulur."
            />
            <div className="mt-8 grid gap-4">
              <ContactCard
                icon={<PhoneCall className="h-5 w-5 text-amber-300" />}
                title="Telefon"
                value={siteConfig.phoneDisplay}
                href={siteConfig.phoneHref}
                cta="Hemen Ara"
              />
              <ContactCard
                icon={<MessageCircleMore className="h-5 w-5 text-emerald-400" />}
                title="WhatsApp"
                value="Mesaj gönder, canlı konum paylaş, hızlı dönüş al"
                href={whatsappHref}
                cta="WhatsApp'tan Ulaş"
                external
              />
              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-amber-300" />
                  <h3 className="text-lg font-semibold text-white">Adres</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{siteConfig.address}</p>
              </div>
              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-amber-300" />
                  <h3 className="text-lg font-semibold text-white">Çalışma Saatleri</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{siteConfig.hours}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-carbon via-black to-steel p-6 shadow-card sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/90">
              Dönüşüm Notu
            </p>
            <h3 className="mt-4 font-display text-4xl uppercase leading-[0.95] text-white">
              Acil servis için arama, konum paylaşımı için WhatsApp daha hızlıdır
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Acil yol yardım taleplerinde doğrudan arama yapmak en hızlı yöntemdir. Konum veya yol
              bilgisi gerekiyorsa WhatsApp üzerinden canlı konum göndermeniz yönlendirme sürecini
              daha da hızlandırır.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ember px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white"
              >
                <PhoneCall className="h-4 w-4" />
                Hemen Ara
              </Link>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white"
              >
                <MessageCircleMore className="h-4 w-4 text-emerald-400" />
                WhatsApp'tan Yaz
              </Link>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              Harita entegrasyonu ve açık çalışma saati bilgisi Google Maps tarafında işletme
              güvenini destekleyen önemli sinyallerdendir.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

type ContactCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
  href: string;
  cta: string;
  external?: boolean;
};

function ContactCard({ icon, title, value, href, cta, external = false }: ContactCardProps) {
  return (
    <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-300">{value}</p>
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-300"
      >
        {cta}
      </Link>
    </div>
  );
}
