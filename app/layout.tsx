import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Barlow, Bebas_Neue } from "next/font/google";
import type { ReactNode } from "react";

import { CTASticky } from "@/components/CTASticky";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const headingFont = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const bodyFont = Barlow({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Şen Oto Lastik | Ortaköy / Aksaray Oto Lastik ve Yol Yardım",
    template: "%s | Şen Oto Lastik",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Şen Oto Lastik | Ortaköy / Aksaray Oto Lastik ve Yol Yardım",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Şen Oto Lastik | Ortaköy / Aksaray Oto Lastik ve Yol Yardım",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-asphalt text-white`}>
        <div className="relative min-h-screen overflow-x-clip">
          <Header />
          <div className="pb-24 md:pb-0">{children}</div>
          <footer className="border-t border-white/10 bg-black/70">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
              <p>
                2026 {siteConfig.name} • Ortaköy / Aksaray oto lastik,
                mobil servis ve yol yardım hizmetleri
              </p>
              <div className="flex flex-wrap gap-4">
                {siteConfig.footerLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </footer>
          <FloatingWhatsApp />
          <CTASticky />
        </div>
      </body>
    </html>
  );
}
