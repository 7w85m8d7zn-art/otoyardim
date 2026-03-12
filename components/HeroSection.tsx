import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
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
  showStats?: boolean;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  highlights,
  badge,
  showStats = true,
}: HeroSectionProps) {
  const visibleHighlights = highlights.slice(0, 2);

  return (
    <section className="relative py-6 sm:py-10">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,111,0,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] shadow-card">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center lg:p-10 xl:grid-cols-[minmax(0,1fr)_460px]">
            <div className="max-w-xl">
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-200">
                  {eyebrow}
                </div>
                {badge ? (
                  <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-100">
                    {badge}
                  </div>
                ) : null}
              </div>

              <h1 className="mt-6 max-w-2xl font-display text-4xl leading-[1] text-white sm:text-5xl xl:text-[4rem]">
                {title}
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
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
              </div>

              <Link
                href={mapsDirectionsHref}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-white"
              >
                <MapPin className="h-4 w-4 text-amber-300" />
                Konum al ve yol tarifi oluştur
                <ChevronRight className="h-4 w-4" />
              </Link>

              <div className="mt-7 grid gap-3">
                {visibleHighlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <p className="text-sm leading-6 text-slate-100">{highlight}</p>
                  </div>
                ))}
              </div>

              {showStats ? (
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {heroStats.slice(0, 2).map((stat) => (
                    <span
                      key={stat.label}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-300"
                    >
                      <strong className="mr-2 text-white">{stat.value}</strong>
                      {stat.label}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/25 shadow-card">
              <div className="relative aspect-[4/5] min-h-[320px] lg:min-h-[460px]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
                  aria-hidden
                />
              </div>

              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  <Route className="h-4 w-4 text-amber-300" />
                  Niğde Hattı
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  <MapPin className="h-4 w-4 text-amber-300" />
                  Ortaköy / Aksaray
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-[1.4rem] border border-white/10 bg-black/60 p-4 backdrop-blur-md">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-300/90">
                    7/24 aktif saha
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-100">
                    Niğde hattı ve Aksaray çevresindeki acil yol yardım çağrılarına hızlı yönlendirme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
