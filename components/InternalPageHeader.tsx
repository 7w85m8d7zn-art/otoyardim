import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  Clock3,
  Gauge,
  MapPin,
  MessageCircleMore,
  PhoneCall,
  Route,
  Search,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

import { Container } from "@/components/Container";
import { mapsDirectionsHref, siteConfig, whatsappHref } from "@/data/site";
import type { LandingPage } from "@/data/types";

type InternalPageHeaderProps = {
  page: LandingPage;
};

export function InternalPageHeader({ page }: InternalPageHeaderProps) {
  if (page.type === "local") {
    return <LocalPageHeader page={page} />;
  }

  switch (page.slug) {
    case "yol-yardim":
      return <RoadsideServiceHeader page={page} />;
    case "mobil-lastik-servisi":
      return <MobileServiceHeader page={page} />;
    case "lastik-tamiri":
      return <TireRepairHeader page={page} />;
    default:
      return <GenericServiceHeader page={page} />;
  }
}

function RoadsideServiceHeader({ page }: InternalPageHeaderProps) {
  return (
    <section className="py-8 sm:py-10">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[1.03fr_0.97fr]">
          <div className="max-w-2xl">
            <EyebrowBlock eyebrow={page.eyebrow} badge={page.badge} />

            <h1 className="hero-title mt-6 max-w-3xl">
              {page.title}
            </h1>
            <p className="section-copy-strong mt-5 max-w-2xl">
              {page.description}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <StatCard
                icon={<Clock3 className="h-5 w-5 text-amber-300" />}
                label="7/24 aktif"
                text="Gece gündüz çağrı alan canlı hat."
              />
              <StatCard
                icon={<Route className="h-5 w-5 text-amber-300" />}
                label="Otoban önceliği"
                text="Ankara - Niğde Otobanı üzerinde hızlı rota değerlendirmesi."
              />
              <StatCard
                icon={<Truck className="h-5 w-5 text-amber-300" />}
                label="Ticari araç"
                text="Araç tipine göre ekipman planı."
              />
            </div>

            <div className="mt-6 border-l-2 border-amber-300/30 pl-5">
              <p className="section-kicker">
                Çağrı merkezi mantığı
              </p>
              <p className="section-copy mt-3">{page.intro}</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {page.highlights.slice(0, 2).map((highlight) => (
                <HighlightCard key={highlight} text={highlight} />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <ImageStage
              image={page.image}
              imageAlt={page.imageAlt}
              overlayLabel="Yol yardım akışı"
              overlayText="Arama, konum ve araç bilgisiyle en doğru müdahale tipini hızlıca sahaya çıkarıyoruz."
            />

            <div className="border-t border-white/10 pt-5">
              <p className="section-kicker">
                Sahaya çıkış sırası
              </p>
              <ol className="mt-4 grid gap-3">
                <ProcessItem
                  number="01"
                  title="Arama alınır"
                  text="Sorunun tipi ve bulunduğunuz hattın güvenli bölgesi ilk görüşmede netleştirilir."
                />
                <ProcessItem
                  number="02"
                  title="Rota belirlenir"
                  text="Ankara - Niğde Otobanı ve Aksaray tarafındaki yoğunluk durumuna göre saha planı çıkarılır."
                />
                <ProcessItem
                  number="03"
                  title="Müdahale uygulanır"
                  text="Tamir, değişim veya mobil servis kararı aracın durumuna göre sahada tamamlanır."
                />
              </ol>

              <DirectionsLink />
            </div>
          </div>
        </div>
        <ActionButtons />
      </Container>
    </section>
  );
}

function MobileServiceHeader({ page }: InternalPageHeaderProps) {
  const bulletItems = page.sections[0]?.bullets ?? [];

  return (
    <section className="py-8 sm:py-10">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-end">
          <div className="max-w-2xl">
            <EyebrowBlock eyebrow={page.eyebrow} badge={page.badge} />

            <h1 className="hero-title mt-6 max-w-3xl xl:text-[3.75rem]">
              {page.title}
            </h1>
            <p className="section-copy-strong mt-5 max-w-2xl">
              {page.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {page.quickFacts.map((fact) => (
                <span key={fact} className="info-pill-emerald">
                  {fact}
                </span>
              ))}
            </div>

            <div className="mt-8 border-y border-white/10">
              <OpenFeatureRow
                icon={<Truck className="h-5 w-5 text-emerald-400" />}
                title="Konuma gelir"
                text="Servise gitmeden, bulunduğunuz noktada doğrudan müdahale planı kuruyoruz."
              />
              <OpenFeatureRow
                icon={<MapPin className="h-5 w-5 text-emerald-400" />}
                title="Yerinde işlem"
                text="Sökme-takma, değişim ve ilk değerlendirme aracı hareket ettirmeden yapılır."
              />
              <OpenFeatureRow
                icon={<Gauge className="h-5 w-5 text-emerald-400" />}
                title="Zaman kazancı"
                text="Özellikle ticari araçlarda ve gece çağrılarında süreç kaybını azaltır."
              />
            </div>

            <ActionButtons />
          </div>

          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 shadow-card">
              <div className="relative aspect-[16/11] min-h-[320px] lg:min-h-[500px]">
                <Image
                  src={page.image}
                  alt={page.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.82)),radial-gradient(circle_at_top_right,rgba(16,185,129,0.24),transparent_30%)]"
                  aria-hidden
                />
              </div>

              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                <span className="overlay-chip">
                  <Route className="h-4 w-4 text-emerald-400" />
                  Mobil servis
                </span>
                <span className="overlay-chip">
                  <MapPin className="h-4 w-4 text-amber-300" />
                  Ortaköy / Aksaray
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <div className="max-w-lg border-l-2 border-emerald-400/60 bg-black/45 px-4 py-3 backdrop-blur-sm">
                  <p className="section-kicker text-emerald-300">
                    Konuma gelen servis
                  </p>
                  <p className="copy-strong mt-2">
                    Servise gitmeden, bulunduğunuz noktada sökme-takma ve değişim desteği alın.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="border-t border-white/10 pt-5">
                <p className="section-kicker text-emerald-300">
                  Mobil servis mantığı
                </p>
                <div className="mt-4 space-y-4">
                  {page.highlights.map((highlight) => (
                    <OpenListItem
                      key={highlight}
                      icon={<Truck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />}
                      text={highlight}
                    />
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="section-kicker">
                  Yerinde yapılanlar
                </p>
                <ul className="mt-4 space-y-4">
                  {bulletItems.slice(0, 3).map((bullet) => (
                    <OpenListItem
                      key={bullet}
                      icon={<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />}
                      text={bullet}
                    />
                  ))}
                </ul>

                <DirectionsLink />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TireRepairHeader({ page }: InternalPageHeaderProps) {
  const repairBullets = page.sections[1]?.bullets ?? [];

  return (
    <section className="py-8 sm:py-10">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="max-w-2xl">
            <EyebrowBlock eyebrow={page.eyebrow} badge={page.badge} />

            <h1 className="hero-title mt-6 max-w-3xl">
              {page.title}
            </h1>
            <p className="section-copy-strong mt-5 max-w-2xl">
              {page.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {page.quickFacts.map((fact) => (
                <span key={fact} className="info-pill">
                  {fact}
                </span>
              ))}
            </div>

            <div className="mt-8 border-l-2 border-amber-300/30 pl-5">
              <p className="section-kicker">
                Tamirde yaklaşımımız
              </p>
              <p className="section-copy mt-3">{page.intro}</p>
            </div>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-5">
              <OpenFeatureRow
                icon={<CircleAlert className="h-5 w-5 text-amber-300" />}
                title="Patlak tespiti"
                text="Sorunun büyümeden görülmesi ve doğru müdahalenin seçilmesi."
              />
              <OpenFeatureRow
                icon={<Wrench className="h-5 w-5 text-amber-300" />}
                title="Yerinde kontrol"
                text="Uygun durumda hızlı tamir değerlendirmesi ve işlem hazırlığı."
              />
              <OpenFeatureRow
                icon={<ShieldCheck className="h-5 w-5 text-amber-300" />}
                title="Güvenli karar"
                text="Tamir ve değişim ayrımı sahada açık biçimde yapılır."
              />
            </div>

            <ActionButtons />
          </div>

          <div className="grid gap-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="border-t border-white/10 pt-5">
                <p className="section-kicker">
                  Tamir karar tablosu
                </p>
                <div className="mt-4 space-y-4">
                  <OpenInfoRow
                    icon={<Search className="h-4 w-4 text-amber-300" />}
                    title="Hasar noktası"
                    text="Çivi, kesik ve hava kaçağı kaynağı sahada netleştirilir."
                  />
                  <OpenInfoRow
                    icon={<CircleAlert className="h-4 w-4 text-amber-300" />}
                    title="Risk seviyesi"
                    text="Yanaktan gelen ya da derin hasarlar tamir yerine değişime yönlendirilir."
                  />
                  <OpenInfoRow
                    icon={<ShieldCheck className="h-4 w-4 text-amber-300" />}
                    title="Güvenli sonuç"
                    text="Tamir uygun değilse kullanıcıya açık ve net karar sunulur."
                  />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/25 shadow-card">
                <div className="relative aspect-[16/10] min-h-[280px]">
                  <Image
                    src={page.image}
                    alt={page.imageAlt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 42vw"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.78)),radial-gradient(circle_at_top_right,rgba(245,158,11,0.2),transparent_28%)]"
                    aria-hidden
                  />
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="max-w-lg border-l-2 border-amber-300/60 bg-black/45 px-4 py-3 backdrop-blur-sm">
                    <p className="section-kicker">
                      Önce kontrol sonra karar
                    </p>
                    <p className="copy-strong mt-2">
                      Her patlak lastik değişim istemez; önce hasarın tipini doğru değerlendiriyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="border-t border-white/10 pt-5">
                <p className="section-kicker">
                  Tamir sırasında bakılanlar
                </p>
                <ul className="mt-4 space-y-4">
                  {repairBullets.slice(0, 3).map((bullet) => (
                    <OpenListItem
                      key={bullet}
                      icon={<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />}
                      text={bullet}
                    />
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="section-kicker">
                  Öne çıkan notlar
                </p>
                <div className="mt-4 space-y-4">
                  {page.highlights.slice(0, 3).map((highlight) => (
                    <OpenListItem
                      key={highlight}
                      icon={<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />}
                      text={highlight}
                    />
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

function GenericServiceHeader({ page }: InternalPageHeaderProps) {
  const highlights = page.highlights.slice(0, 2);
  const facts = page.quickFacts.slice(0, 3);

  return (
    <section className="py-8 sm:py-10">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-2xl">
            <EyebrowBlock eyebrow={page.eyebrow} badge={page.badge} />

            <h1 className="hero-title mt-6 max-w-3xl xl:text-[3.7rem]">
              {page.title}
            </h1>
            <p className="section-copy-strong mt-5 max-w-2xl">
              {page.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {facts.map((fact) => (
                <span key={fact} className="info-pill">
                  {fact}
                </span>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <HighlightCard key={highlight} text={highlight} />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <ImageStage
              image={page.image}
              imageAlt={page.imageAlt}
              overlayLabel="Saha akışı"
              overlayText="Telefon, konum ve araç bilgisiyle en doğru müdahale tipini hızlıca netleştiriyoruz."
            />

            <div className="border-t border-white/10 pt-5">
              <p className="section-kicker">
                Hizmet akışı
              </p>
              <ol className="mt-4 grid gap-3">
                <ProcessItem
                  number="01"
                  title="Arayın"
                  text="Sorunu, araç tipini ve bulunduğunuz hattı telefonda netleştirelim."
                />
                <ProcessItem
                  number="02"
                  title="Konum paylaşın"
                  text="Gerekirse canlı konum ile doğru saha planını birkaç dakikada çıkaralım."
                />
                <ProcessItem
                  number="03"
                  title="Müdahaleyi başlatalım"
                  text="Tamir, değişim veya mobil servis için en uygun çözümü sahaya taşıyalım."
                />
              </ol>

              <DirectionsLink />
            </div>
          </div>
        </div>
        <ActionButtons />
      </Container>
    </section>
  );
}

function LocalPageHeader({ page }: InternalPageHeaderProps) {
  const facts = page.quickFacts.slice(0, 3);

  return (
    <section className="py-8 sm:py-10">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-2xl">
            <EyebrowBlock eyebrow={page.eyebrow} badge={page.badge} />

            <h1 className="hero-title mt-6 max-w-3xl xl:text-[3.7rem]">
              {page.title}
            </h1>
            <p className="section-copy-strong mt-5 max-w-2xl">
              {page.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {facts.map((fact) => (
                <span key={fact} className="info-pill">
                  {fact}
                </span>
              ))}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {page.highlights.slice(0, 2).map((highlight) => (
                <HighlightCard key={highlight} text={highlight} />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <ImageStage
              image={page.image}
              imageAlt={page.imageAlt}
              overlayLabel="Bölge odağı"
              overlayText="Bu sayfa bulunduğunuz şehirden gelen çağrıyı Aksaray merkezli saha yapımıza net biçimde bağlar."
            />

            <div className="border-t border-white/10 pt-5">
              <p className="section-kicker">
                Bu sayfada ne var
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <MiniInfoCard
                  icon={<MapPin className="h-4 w-4 text-amber-300" />}
                  title="Bölge beklentisi"
                  text="Bu şehirden gelen kullanıcı önce güvenilir iletişim, sonra gerçekçi yönlendirme görmek ister."
                />
                <MiniInfoCard
                  icon={<Route className="h-4 w-4 text-amber-300" />}
                  title="Otoban önceliği"
                  text="Ana yoğunluğumuz Ankara - Niğde Otobanı üzerinde olduğu için rota ve uygunluk değerlendirmesini bu öncelikle yapıyoruz."
                />
              </div>

              <DirectionsLink />
            </div>
          </div>
        </div>
        <ActionButtons />
      </Container>
    </section>
  );
}

type EyebrowBlockProps = {
  eyebrow: string;
  badge: string;
};

function EyebrowBlock({ eyebrow, badge }: EyebrowBlockProps) {
  return (
    <>
      <p className="section-kicker">{eyebrow}</p>

      <div className="mt-4 flex flex-wrap gap-2.5">
        <span className="info-pill-amber">
          {badge}
        </span>
      </div>
    </>
  );
}

function ActionButtons() {
  return (
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
      <Link
        href="/iletisim"
        className="action-btn action-btn-ghost"
      >
        İletişim
        <ArrowUpRight className="h-4 w-4 text-amber-300" />
      </Link>
    </div>
  );
}

type ImageStageProps = {
  image: string;
  imageAlt: string;
  overlayLabel: string;
  overlayText: string;
};

function ImageStage({ image, imageAlt, overlayLabel, overlayText }: ImageStageProps) {
  return (
    <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-black/25 shadow-card">
      <div className="relative aspect-[4/3] min-h-[280px]">
        <Image
          src={image}
          alt={imageAlt}
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
        <span className="overlay-chip">
          <Route className="h-4 w-4 text-amber-300" />
          Ankara - Niğde Otobanı
        </span>
        <span className="overlay-chip">
          <MapPin className="h-4 w-4 text-amber-300" />
          Ortaköy / Aksaray
        </span>
      </div>

      <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/10 bg-black/65 p-4 backdrop-blur-md">
        <p className="section-kicker">
          {overlayLabel}
        </p>
        <p className="copy-strong mt-2">{overlayText}</p>
      </div>
    </div>
  );
}

type StatCardProps = {
  icon: ReactNode;
  label: string;
  text: string;
};

function StatCard({ icon, label, text }: StatCardProps) {
  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="small-heading">{label}</h3>
      </div>
      <p className="copy-soft mt-2">{text}</p>
    </div>
  );
}

type HighlightCardProps = {
  text: string;
};

function HighlightCard({ text }: HighlightCardProps) {
  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4">
      <div className="flex items-start gap-3">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
        <p className="copy-strong">{text}</p>
      </div>
    </div>
  );
}

type ProcessItemProps = {
  number: string;
  title: string;
  text: string;
};

function ProcessItem({ number, title, text }: ProcessItemProps) {
  return (
    <li className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4">
      <div className="flex items-start gap-3">
        <span className="number-pill">
          {number}
        </span>
        <div>
          <h3 className="small-heading">{title}</h3>
          <p className="copy-soft mt-2">{text}</p>
        </div>
      </div>
    </li>
  );
}

type MiniInfoCardProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

function MiniInfoCard({ icon, title, text }: MiniInfoCardProps) {
  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-4">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="small-heading">{title}</h3>
      </div>
      <p className="copy-soft mt-2">{text}</p>
    </div>
  );
}

function DirectionsLink() {
  return (
    <Link
      href={mapsDirectionsHref}
      target="_blank"
      rel="noreferrer"
      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-white"
    >
      Konum al ve yol tarifi oluştur
      <ArrowUpRight className="h-4 w-4 text-amber-300" />
    </Link>
  );
}

type OpenFeatureRowProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

function OpenFeatureRow({ icon, title, text }: OpenFeatureRowProps) {
  return (
    <div className="grid gap-3 border-b border-white/10 py-4 sm:grid-cols-[180px_1fr] sm:items-start">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="small-heading">{title}</h3>
      </div>
      <p className="copy-soft">{text}</p>
    </div>
  );
}

type OpenInfoRowProps = {
  icon: ReactNode;
  title: string;
  text: string;
};

function OpenInfoRow({ icon, title, text }: OpenInfoRowProps) {
  return (
    <div className="grid gap-2 border-b border-white/10 py-4 sm:grid-cols-[150px_1fr] sm:items-start">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="small-heading">{title}</h3>
      </div>
      <p className="copy-soft">{text}</p>
    </div>
  );
}

type OpenListItemProps = {
  icon: ReactNode;
  text: string;
};

function OpenListItem({ icon, text }: OpenListItemProps) {
  return (
    <li className="flex gap-3 text-sm leading-7 text-slate-200">
      {icon}
      <span className="copy-strong">{text}</span>
    </li>
  );
}
