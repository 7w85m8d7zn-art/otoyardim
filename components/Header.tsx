import Link from "next/link";
import { PhoneCall } from "lucide-react";

import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-ember/40 bg-gradient-to-br from-ember to-blaze font-display text-2xl text-white shadow-glow">
              Ş
            </div>
            <div>
              <p className="font-display text-2xl uppercase leading-none tracking-[0.08em] text-white">
                Şen Oto Lastik
              </p>
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                Ortaköy / Aksaray 7/24
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-ember/50 bg-gradient-to-r from-ember to-blaze px-4 py-2 text-sm font-bold text-white shadow-glow transition hover:scale-[1.02]"
          >
            <PhoneCall className="h-4 w-4" />
            <span className="hidden sm:inline">Hemen Ara</span>
            <span className="sm:hidden">Ara</span>
          </a>
        </div>

        <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
