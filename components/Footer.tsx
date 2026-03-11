import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";

import { Container } from "@/components/Container";
import {
  footerBlogLinks,
  footerCityLinks,
  footerProductLinks,
  footerServiceLinks,
  siteConfig,
  whatsappHref,
} from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/70">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr]">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/90">
              Şen Oto Lastik
            </p>
            <p className="mt-3 inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-100">
              {siteConfig.heritageLabel}
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] text-white">
              Aksaray'da 7/24 yol yardım, Türkiye geneli jant gönderimi
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Yerel saha hizmetimizi Aksaray, Ortaköy ve yakın illerde sunuyor; jant siparişlerini
              ise 81 ile ulaştırıyoruz. Böylece Google ve kullanıcı tarafında iki ayrı hizmet
              modelini net biçimde anlatıyoruz.
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
          <FooterColumn title="Jant Sayfaları" links={footerProductLinks} />
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-1">
            <FooterColumn title="Şehir Sayfaları" links={footerCityLinks} />
            <FooterColumn title="Blog" links={footerBlogLinks} />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>
            2026 {siteConfig.name}. {siteConfig.foundingYear}'den beri Ortaköy / Aksaray merkezli
            mobil lastik ve yol yardım markası.
          </p>
          <p>Aksaray ve yakın illerde saha hizmeti, Türkiye geneli 81 ile jant gönderimi.</p>
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
      <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-white">{title}</h2>
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
