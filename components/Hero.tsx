import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  MapPinned,
  MessageCircleMore,
  PhoneCall,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { Container } from "@/components/Container";
import { siteConfig, whatsappHref } from "@/lib/site";

const heroHighlights = [
  { label: "7/24 Açık", icon: ShieldCheck },
  { label: "Mobil Müdahale", icon: Truck },
  { label: "Ortaköy / Aksaray", icon: MapPinned },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-corporate.jpg"
          alt="Şen Oto Lastik için servis alanında duran gerçek otomobil görseli"
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,35,0.34),transparent_30%),linear-gradient(180deg,rgba(7,7,8,0.44),rgba(7,7,8,0.82)_35%,rgba(7,7,8,0.96)_100%)]" />
        <div className="absolute inset-0 bg-grid-fade bg-[size:40px_40px] opacity-[0.08]" />
      </div>

      <Container className="relative py-16 md:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blaze">
              <span className="h-2 w-2 rounded-full bg-blaze animate-pulse-soft" />
              Kurumsal Lastik ve Yol Yardım Hizmeti
            </div>
            <h1 className="font-display text-5xl uppercase leading-[0.92] tracking-[0.03em] text-white sm:text-6xl lg:text-7xl">
              Ortaköy / Aksaray'da Profesyonel Oto Lastik Hizmeti
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Şen Oto Lastik; 7/24 mobil lastik servisi, yol yardım, yerinde lastik
              değişimi ve ticari araç desteğiyle Ortaköy / Aksaray bölgesinde güvenilir ve
              hızlı çözümler sunar.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/hizmetler"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                <Building2 className="h-5 w-5" />
                Hizmetleri İncele
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-ember to-blaze px-7 py-4 text-base font-extrabold text-white shadow-glow transition hover:scale-[1.01]"
              >
                <PhoneCall className="h-5 w-5" />
                Hemen Ara
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                <MessageCircleMore className="h-5 w-5" />
                WhatsApp'tan Ulaş
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm"
                >
                  <item.icon className="h-4 w-4 text-blaze" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-8 hidden h-48 w-48 rounded-full bg-ember/25 blur-3xl lg:block" />
            <div className="panel relative overflow-hidden rounded-[2rem] p-6 md:p-7">
              <div className="hazard-strip absolute inset-x-0 top-0 h-2" />
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blaze">
                Kurumsal Hizmet Yapısı
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  { value: "7/24", label: "Planlı ve Acil Hizmet" },
                  { value: "Mobil", label: "Yerinde Servis Yapısı" },
                  { value: "Ticari", label: "Kamyon ve Tır Desteği" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
                  >
                    <p className="font-display text-4xl uppercase text-white">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-ember/20 bg-gradient-to-r from-ember/10 to-blaze/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">
                  Kurumsal tanıtım ve hızlı erişim
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Ana hizmet başlıklarımızı, destek verdiğimiz araç tiplerini ve bölgeleri ayrı
                  sayfalarda inceleyebilir; isterseniz doğrudan ekibimize ulaşabilirsiniz.
                </p>
                <Link
                  href="/hakkimizda"
                  className="mt-4 inline-flex text-sm font-bold text-blaze transition hover:text-white"
                >
                  Kurumsal profilimizi incele
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
