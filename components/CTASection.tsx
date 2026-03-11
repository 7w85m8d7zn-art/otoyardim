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
    <section className="py-14 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ember/20 via-black to-steel/80 p-6 shadow-card sm:p-10">
          <div className="absolute inset-0 bg-hazard-stripe opacity-10" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/90">
                Hızlı İletişim
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] text-white sm:text-5xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                {description}
              </p>
              {callout ? (
                <p className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
                  {callout}
                </p>
              ) : null}
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <Link
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ember px-5 py-4 text-base font-semibold text-white transition hover:bg-orange-500"
              >
                <PhoneCall className="h-5 w-5" />
                Hemen Ara
              </Link>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                <MessageCircleMore className="h-5 w-5" />
                WhatsApp'tan Ulaş
              </Link>
              <Link
                href={mapsDirectionsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-5 py-4 text-base font-semibold text-slate-100 transition hover:border-amber-300/30 hover:bg-white/5 sm:col-span-2 lg:col-span-1"
              >
                Konum Al
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
