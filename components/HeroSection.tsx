import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  MapPin,
  MessageCircleMore,
  PhoneCall,
  Route,
} from "lucide-react";

import { Container } from "@/components/Container";
import { heroStats, mapsDirectionsHref, siteConfig, whatsappHref } from "@/data/site";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  badge?: string;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  highlights,
  badge,
}: HeroSectionProps) {
  return (
    <section className="relative py-8 sm:py-12">
      <Container>
        <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,111,0,0.18),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-card">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center lg:p-10 xl:grid-cols-[minmax(0,1fr)_520px] xl:p-12">
            <div className="max-w-2xl">
              <div className="flex flex-wrap gap-3">
                <div
                  className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-200"
                >
                  {eyebrow}
                </div>
                {badge ? (
                  <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-100">
                    {badge}
                  </div>
                ) : null}
              </div>

              <h1 className="mt-6 max-w-2xl font-display text-4xl leading-[0.98] text-white sm:text-5xl xl:text-[4.2rem]">
                {title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
                {description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
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
                <Link
                  href={mapsDirectionsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-amber-300/30 hover:bg-white/10"
                >
                  <MapPin className="h-4 w-4 text-amber-300" />
                  Konum Al
                </Link>
              </div>

              <div className="mt-8 grid gap-3">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-[1.4rem] border border-white/10 bg-black/20 px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <p className="text-sm leading-6 text-slate-100 sm:text-[15px]">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <p className="font-display text-3xl leading-none text-white">{stat.value}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 shadow-card">
              <div className="relative aspect-[4/5] min-h-[380px] lg:min-h-[560px]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent"
                  aria-hidden
                />
              </div>

              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  <Route className="h-4 w-4 text-amber-300" />
                  Ankara - Niğde Otobanı
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  <MapPin className="h-4 w-4 text-amber-300" />
                  Ortaköy / Aksaray
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-[1.6rem] border border-white/10 bg-black/60 p-5 backdrop-blur-md">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300/90">
                    Acil destek akışı
                  </p>
                  <h2 className="mt-3 font-display text-2xl leading-[0.96] text-white sm:text-[2rem]">
                    Ara, konumu paylaş, ekip çıksın
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    Otobanda ya da Aksaray bağlantı yollarında çağrıyı uzatmıyoruz. Önce
                    bulunduğunuz noktayı netleştiriyor, sonra en doğru müdahale tipini planlıyoruz.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
                      Yol yardım
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
                      Stepne desteği
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-100">
                      Mobil lastik servisi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
