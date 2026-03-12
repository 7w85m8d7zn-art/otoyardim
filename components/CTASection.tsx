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
    <section className="border-y border-white/10 bg-black/20 py-14 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="section-kicker">Hızlı İletişim</p>
            <h2 className="section-title mt-4 max-w-3xl">{title}</h2>
            <p className="section-copy-strong mt-4 max-w-2xl">{description}</p>
            {callout ? (
              <p className="mt-5 max-w-2xl border-l-2 border-amber-300/50 pl-4 text-sm leading-7 text-amber-100">
                {callout}
              </p>
            ) : null}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:justify-self-end">
            <Link
              href={siteConfig.phoneHref}
              className="action-btn action-btn-primary"
            >
              <PhoneCall className="h-5 w-5" />
              Hemen Ara
            </Link>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="action-btn action-btn-ghost"
            >
              <MessageCircleMore className="h-5 w-5" />
              WhatsApp'tan Ulaş
            </Link>
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
      </Container>
    </section>
  );
}
