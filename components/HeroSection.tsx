import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  LifeBuoy,
  MapPin,
  MessageCircleMore,
  PhoneCall,
  RefreshCcw,
  Route,
  Truck,
  Wrench,
} from "lucide-react";

import { Container } from "@/components/Container";
import {
  heroStats,
  mapsDirectionsHref,
  serviceAreaCards,
  serviceCards,
  siteConfig,
  whatsappHref,
} from "@/data/site";

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
  badge,
  showStats = true,
}: HeroSectionProps) {
  const featuredServices = serviceCards.slice(0, 4);
  const highlightedAreas = [
    ...serviceAreaCards[0].areas.slice(0, 4),
    ...serviceAreaCards[1].areas.slice(0, 3),
  ];

  return (
    <section className="relative py-8 sm:py-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-3">
              <div className="info-pill-amber px-4 text-amber-200">
                {eyebrow}
              </div>
              {badge ? (
                <div className="info-pill">
                  {badge}
                </div>
              ) : null}
            </div>

            <h1 className="hero-title mt-7 max-w-3xl">
              {title}
            </h1>
            <p className="section-copy-strong mt-6 max-w-2xl">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
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

            <Link
              href={mapsDirectionsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-white"
            >
              <MapPin className="h-4 w-4 text-amber-300" />
              Konum al ve yol tarifi oluştur
              <ChevronRight className="h-4 w-4" />
            </Link>

            {showStats ? (
              <div className="mt-8 border-y border-white/10">
                <div className="grid gap-4 py-5 sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="flex items-center gap-4">
                      <span className="font-display text-3xl leading-none text-white">{stat.value}</span>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="border-t border-white/10 pt-5 lg:border-t-0 lg:border-l lg:pl-6 lg:pt-0">
              <p className="section-kicker">
                Hızlı hizmet geçişi
              </p>
              <div className="mt-4 border-t border-white/10">
                {featuredServices.map((service) => {
                  const Icon = iconMap[service.icon];

                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group grid gap-2 border-b border-white/10 py-4 transition hover:border-amber-300/30"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-amber-300">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <h2 className="card-title text-[1.45rem] leading-[1.02]">
                              {service.title}
                            </h2>
                            <p className="copy-soft mt-2">{service.description}</p>
                          </div>
                        </div>

                        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-amber-300 transition group-hover:text-white" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 shadow-card">
                <div className="relative aspect-[16/10] min-h-[320px] lg:min-h-[420px]">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.82)),radial-gradient(circle_at_top_right,rgba(255,153,0,0.18),transparent_28%)]"
                    aria-hidden
                  />
                </div>

                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                  <div className="overlay-chip">
                    <Route className="h-4 w-4 text-amber-300" />
                    Niğde Hattı
                  </div>
                  <div className="overlay-chip">
                    <MapPin className="h-4 w-4 text-amber-300" />
                    Ortaköy / Aksaray
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="max-w-lg border-l-2 border-amber-300/60 bg-black/45 px-4 py-3 backdrop-blur-sm">
                    <p className="section-kicker">
                      Ana yönlendirme merkezi
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-100">
                      Önce doğru hizmeti seçin, sonra bizi arayın; yol yardım, mobil servis ve
                      tamir akışını tek noktadan yönlendiriyoruz.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="section-kicker">
                  Öncelikli hizmet bölgeleri
                </p>
                <p className="section-copy mt-4 max-w-2xl">
                  Ana yoğunluğumuz Aksaray merkezi, Ortaköy çevresi ve Niğde yönlü hatta kurulu.
                  Uygun çağrılarda çevre bağlantı yollarını da aynı saha planı içinde
                  değerlendiriyoruz.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {highlightedAreas.map((area) => (
                    <span key={area} className="info-pill">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const iconMap = {
  lifeBuoy: LifeBuoy,
  truck: Truck,
  wrench: Wrench,
  refresh: RefreshCcw,
};
