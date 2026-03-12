import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  MessageCircleMore,
  PhoneCall,
  Route,
} from "lucide-react";

import { Container } from "@/components/Container";
import { mapsDirectionsHref, siteConfig, whatsappHref } from "@/data/site";
import type { LandingPage } from "@/data/types";

type InternalPageHeaderProps = {
  page: LandingPage;
};

export function InternalPageHeader({ page }: InternalPageHeaderProps) {
  const isLocalPage = page.type === "local";
  const highlights = page.highlights.slice(0, 2);
  const facts = page.quickFacts.slice(0, 3);

  return (
    <section className="py-8 sm:py-10">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[1.9rem] border border-white/10 bg-white/[0.03] p-6 shadow-card sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300/90">
              {page.eyebrow}
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-100">
                {page.badge}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
                {isLocalPage ? "Yerel Sayfa" : "Hizmet Sayfası"}
              </span>
            </div>

            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[0.98] text-white sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              {page.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {facts.map((fact) => (
                <span
                  key={fact}
                  className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-200"
                >
                  {fact}
                </span>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                    <p className="text-sm leading-6 text-slate-100">{highlight}</p>
                  </div>
                </div>
              ))}
            </div>

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
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-slate-100 transition hover:bg-white/[0.08]"
              >
                İletişim Sayfası
                <ArrowUpRight className="h-4 w-4 text-amber-300" />
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-black/25 shadow-card">
              <div className="relative aspect-[4/3] min-h-[280px]">
                <Image
                  src={page.image}
                  alt={page.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 36vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  aria-hidden
                />
              </div>

              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  <Route className="h-4 w-4 text-amber-300" />
                  Niğde Hattı
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  <MapPin className="h-4 w-4 text-amber-300" />
                  Ortaköy / Aksaray
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/10 bg-black/65 p-4 backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-300/90">
                  {isLocalPage ? "Bölge odağı" : "Saha akışı"}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-100">
                  {isLocalPage
                    ? "Bu sayfa bulunduğunuz şehirden gelen çağrıyı Aksaray merkezli saha yapımıza net biçimde bağlar."
                    : "Telefon, konum ve araç bilgisiyle en doğru müdahale tipini hızlıca netleştiriyoruz."}
                </p>
              </div>
            </div>

            <div className="rounded-[1.9rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300/90">
                {isLocalPage ? "Bu sayfada ne var" : "Hizmet akışı"}
              </p>
              {isLocalPage ? (
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <InfoMiniCard
                    title="Yerel arama niyeti"
                    text="Şehir bazlı kullanıcıların önce güvenilir iletişim, sonra gerçekçi yönlendirme görmesini hedefliyoruz."
                  />
                  <InfoMiniCard
                    title="Niğde hattı önceliği"
                    text="Ana yoğunluk Niğde hattında olduğu için rota ve uygunluk değerlendirmesini bu öncelikle yapıyoruz."
                  />
                </div>
              ) : (
                <ol className="mt-4 grid gap-3">
                  <StepItem number="01" title="Arayın">
                    Sorunu, araç tipini ve bulunduğunuz hattı telefonda netleştirelim.
                  </StepItem>
                  <StepItem number="02" title="Konum paylaşın">
                    Gerekirse canlı konum ile doğru saha planını birkaç dakikada çıkaralım.
                  </StepItem>
                  <StepItem number="03" title="Müdahaleyi başlatalım">
                    Tamir, değişim veya mobil servis için en uygun çözümü sahaya taşıyalım.
                  </StepItem>
                </ol>
              )}

              <Link
                href={mapsDirectionsHref}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-white"
              >
                Konum al ve yol tarifi oluştur
                <ArrowUpRight className="h-4 w-4 text-amber-300" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

type StepItemProps = {
  number: string;
  title: string;
  children: string;
};

function StepItem({ number, title, children }: StepItemProps) {
  return (
    <li className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4">
      <div className="flex items-start gap-3">
        <span className="inline-flex min-w-10 justify-center rounded-full border border-amber-300/20 bg-amber-300/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-100">
          {number}
        </span>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{children}</p>
        </div>
      </div>
    </li>
  );
}

type InfoMiniCardProps = {
  title: string;
  text: string;
};

function InfoMiniCard({ title, text }: InfoMiniCardProps) {
  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4">
      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}
