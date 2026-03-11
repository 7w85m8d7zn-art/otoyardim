import Link from "next/link";
import { ArrowUpRight, Disc3, MessageCircleMore, PhoneCall, Truck } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { jantHighlights, siteConfig, whatsappHref } from "@/data/site";

type JantSalesSectionProps = {
  compact?: boolean;
};

export function JantSalesSection({ compact = false }: JantSalesSectionProps) {
  return (
    <section className={compact ? "py-14 sm:py-16" : "py-14 sm:py-20"}>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Jant Satışı"
              title="Türkiye'nin 81 iline jant gönderimi"
              description="Binek araç, ticari araç, SUV ve farklı araç tipleri için jant seçenekleri sunuyoruz. Teklif, bilgi ve sipariş için telefon ve WhatsApp hattı doğrudan aktif."
            />
            <div className="mt-8 grid gap-3">
              {jantHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-slate-100"
                >
                  <ArrowUpRight className="h-4 w-4 text-amber-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-carbon via-black to-steel p-6 shadow-card sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                <Disc3 className="h-6 w-6 text-amber-300" />
                <h3 className="mt-4 text-lg font-semibold text-white">Araç tipine göre seçenek</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Binek araç, ticari araç ve SUV grupları için ölçü odaklı filtreleme yapılır.
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
                <Truck className="h-6 w-6 text-amber-300" />
                <h3 className="mt-4 text-lg font-semibold text-white">81 il gönderim</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Sipariş süreci, paketleme ve sevkiyat detayları şehir fark etmeksizin planlanır.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <Link
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ember px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white"
              >
                <PhoneCall className="h-4 w-4" />
                Teklif İçin Ara
              </Link>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white"
              >
                <MessageCircleMore className="h-4 w-4 text-emerald-400" />
                WhatsApp'tan Bilgi Al
              </Link>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href="/jant-modelleri"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/[0.05]"
                >
                  Jant Modelleri
                </Link>
                <Link
                  href="/jant-fiyatlari"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/[0.05]"
                >
                  Jant Fiyatları
                </Link>
              </div>
            </div>
            {!compact ? (
              <p className="mt-5 text-sm leading-6 text-slate-400">
                Ulusal ürün hattı ile yerel saha hizmeti farklı akışlarla yönetilir. Bu ayrım hem
                kullanıcı deneyimini hem SEO mimarisini güçlendirir.
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

