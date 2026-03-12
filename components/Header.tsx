"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MapPin, Menu, MessageCircleMore, PhoneCall, X } from "lucide-react";

import { Container } from "@/components/Container";
import { mapsDirectionsHref, navLinks, siteConfig, whatsappHref } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex min-w-0 items-center gap-4" onClick={() => setIsOpen(false)}>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-ember/40 bg-gradient-to-br from-ember via-orange-500 to-blaze shadow-glow">
              <span className="font-display text-3xl uppercase leading-none text-white">Ş</span>
            </div>
            <div className="min-w-0">
              <p className="truncate font-display text-[1.55rem] leading-none tracking-[0.05em] text-white sm:text-[1.7rem]">
                Şen Oto Lastik
              </p>
              <div className="mt-2 hidden flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 sm:flex">
                <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-2.5 py-1 text-amber-200">
                  {siteConfig.heritageLabel}
                </span>
                <span>Ortaköy / Aksaray</span>
                <span className="text-amber-300/80">Ankara - Niğde Otobanı</span>
              </div>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400 sm:hidden">
                Ortaköy / Aksaray
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-2 xl:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.replace("/#", "/"));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ember to-blaze px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:scale-[1.02]"
            >
              <PhoneCall className="h-4 w-4" />
              Hemen Ara
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white xl:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen ? (
          <div
            id="mobile-menu"
            className="mt-4 rounded-[1.8rem] border border-white/10 bg-carbon/95 p-4 shadow-card xl:hidden"
          >
            <nav className="grid gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-100"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 text-amber-300" />
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <Link
                href={siteConfig.phoneHref}
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-ember px-4 py-3 text-sm font-bold text-white"
              >
                <PhoneCall className="h-4 w-4" />
                Hemen Ara
              </Link>
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-bold text-white"
              >
                <MessageCircleMore className="h-4 w-4 text-emerald-400" />
                WhatsApp'tan Ulaş
              </Link>
              <Link
                href={mapsDirectionsHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-bold text-white"
              >
                <MapPin className="h-4 w-4 text-amber-300" />
                Konum Al
              </Link>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
