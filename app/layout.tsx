import type { Metadata, Viewport } from "next";
import { Manrope, Rajdhani } from "next/font/google";
import type { ReactNode } from "react";

import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { siteConfig } from "@/data/site";

import "./globals.css";

const displayFont = Rajdhani({
  subsets: ["latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const bodyFont = Manrope({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Şen Oto Lastik | Aksaray 7/24 Yol Yardım ve Mobil Lastik Servisi",
    template: "%s | Şen Oto Lastik",
  },
  description: siteConfig.description,
  keywords: [
    "aksaray yol yardım",
    "ortaköy oto lastik",
    "mobil lastik servisi",
    "lastik tamiri",
    "7/24 lastik değişimi",
    "jant satışı",
    "81 ile jant gönderimi",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/sav.ico", type: "image/x-icon" }],
    shortcut: [{ url: "/sav.ico", type: "image/x-icon" }],
  },
  openGraph: {
    title: "Şen Oto Lastik | Aksaray 7/24 Yol Yardım ve Mobil Lastik Servisi",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Şen Oto Lastik | Aksaray 7/24 Yol Yardım ve Mobil Lastik Servisi",
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${displayFont.variable} ${bodyFont.variable} bg-asphalt text-white`}>
        <div className="relative min-h-screen overflow-x-clip">
          <Header />
          <main className="pb-24 md:pb-0">{children}</main>
          <Footer />
          <FloatingWhatsAppButton />
          <StickyMobileCTA />
        </div>
      </body>
    </html>
  );
}
