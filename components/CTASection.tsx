import Link from "next/link";
import { ArrowRight, MessageCircleMore, PhoneCall } from "lucide-react";

import { Container } from "@/components/Container";
import { mapsDirectionsHref, siteConfig, whatsappHref } from "@/data/site";

type CTASectionProps = {
  title: string;
  description: string;
  callout?: string;
};

export function CTASection({ title, description, callout }: CTASectionProps) {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-ember/15 via-black to-steel/70 p-6 shadow-card sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300/90">
                Hızlı İletişim
              </p>
              <h2 className="mt-3 font-display text-3xl leading-[1] text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">{description}</p>
              {callout ? (
                <p className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
                  {callout}
                </p>
              ) : null}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ember px-5 py-4 text-sm font-semibold text-white transition hover:bg-orange-500"
              >
                <PhoneCall className="h-5 w-5" />
                Hemen Ara
              </Link>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <MessageCircleMore className="h-5 w-5" />
                WhatsApp'tan Ulaş
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:col-span-2 lg:justify-self-end">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-white"
              >
                İletişim sayfası
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={mapsDirectionsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-white"
              >
                Konum al
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
