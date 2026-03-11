import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";

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
    <section className="relative overflow-hidden py-8 sm:py-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-carbon via-black to-steel p-6 shadow-card sm:p-8">
            <div className="absolute inset-0 bg-grid-fade bg-[size:38px_38px] opacity-20" aria-hidden />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-3">
                <p className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-amber-200">
                  {eyebrow}
                </p>
                {badge ? (
                  <p className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">
                    {badge}
                  </p>
                ) : null}
              </div>

              <h1 className="mt-6 max-w-4xl font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                {description}
              </p>

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

              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-100"
                  >
                    <ArrowUpRight className="h-4 w-4 text-amber-300" />
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <p className="font-display text-3xl uppercase leading-none text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-card">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" aria-hidden />
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="relative z-20 flex min-h-[420px] flex-col justify-end p-6 sm:p-8">
              <div className="max-w-sm rounded-[1.6rem] border border-white/10 bg-black/55 p-5 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/90">
                  Yerel Güven
                </p>
                <h2 className="mt-3 font-display text-3xl uppercase leading-[0.95] text-white">
                  Ortaköy / Aksaray çıkışlı hızlı servis
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  7/24 yol yardım, mobil lastik değişimi, lastik tamiri ve Türkiye geneli jant
                  siparişi tek marka altında, iki ayrı SEO hunisiyle sunuluyor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
