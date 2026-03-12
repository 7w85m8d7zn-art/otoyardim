import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";

import { Container } from "@/components/Container";
import {
  footerCityLinks,
  footerServiceLinks,
  siteConfig,
  whatsappHref,
} from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr_0.85fr]">
          <div className="surface-panel p-6">
            <p className="max-w-md font-display text-lg leading-tight text-white sm:text-[1.25rem]">
              {siteConfig.name}
            </p>
            <p className="info-pill-amber mt-3 px-4">
              {siteConfig.heritageLabel}
            </p>
            <h2 className="mt-4 font-display text-[2.2rem] leading-[0.95] text-white sm:text-[2.6rem]">
              Aksaray ve Ankara - Niğde Otobanında 7/24 yol yardım
            </h2>
            <p className="section-copy mt-4">
              Ağırlıklı olarak Aksaray, Ortaköy ve Ankara - Niğde Otobanı üzerindeki yol yardım
              çağrılarına odaklanıyoruz. Mobil lastik, değişim ve tamir hizmetlerini de aynı saha
              modeli içinde yönetiyoruz.
            </p>
            <div className="mt-6 grid gap-3">
              <Link
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                <PhoneCall className="h-4 w-4 text-amber-300" />
                {siteConfig.phoneDisplay}
              </Link>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                <MessageCircleMore className="h-4 w-4 text-emerald-400" />
                WhatsApp'tan Ulaş
              </Link>
              <p className="inline-flex items-center gap-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-amber-300" />
                {siteConfig.address}
              </p>
              <p className="inline-flex items-center gap-2 text-sm text-slate-300">
                <Clock3 className="h-4 w-4 text-amber-300" />
                {siteConfig.hours}
              </p>
            </div>
          </div>

          <FooterColumn title="Hizmetler" links={footerServiceLinks} />
          <FooterColumn title="Şehir Sayfaları" links={footerCityLinks} />
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          <p>Copyright © Şen Oto Yol Yardım 2026</p>
        </div>
      </Container>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h2 className="small-heading tracking-[0.18em]">{title}</h2>
      <div className="mt-4 grid gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
          >
            <ArrowUpRight className="h-4 w-4 text-amber-300 transition group-hover:text-white" />
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
