export const siteConfig = {
  name: "Şen Oto Lastik",
  shortName: "Şen Oto Lastik",
  description:
    "Şen Oto Lastik, Ortaköy / Aksaray ve çevresinde 7/24 mobil lastik servisi, oto lastik tamiri, yol yardım ve ticari araç lastik çözümleri sunan profesyonel hizmet markasıdır.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sen-oto-lastik.vercel.app",
  phone: "+90 534 492 70 31",
  phoneHref: "tel:+905344927031",
  whatsappNumber: "905344927031",
  whatsappMessage:
    "Merhaba, Ortaköy / Aksaray bölgesinde yol yardımı ve lastik desteği almak istiyorum.",
  address: "Ortaköy Sanayi Yakını, Ortaköy / Aksaray",
  city: "Aksaray",
  district: "Ortaköy",
  region: "Türkiye",
  hours: "7/24 Açık",
  mapsEmbed: "https://www.google.com/maps?q=Ortak%C3%B6y%20Aksaray&output=embed",
  navLinks: [
    { label: "Anasayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Hizmetler", href: "/hizmetler" },
    { label: "Bölgeler", href: "/bolgeler" },
    { label: "İletişim", href: "/iletisim" },
  ],
  footerLinks: [
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Hizmetler", href: "/hizmetler" },
    { label: "Mobil Lastik Servisi", href: "/hizmetler/mobil-lastik-servisi" },
    { label: "Yol Yardım", href: "/hizmetler/yol-yardim" },
    { label: "Bölgeler", href: "/bolgeler" },
    { label: "İletişim", href: "/iletisim" },
  ],
  keywords: [
    "Ortaköy oto lastik",
    "Aksaray oto lastik",
    "mobil lastik servisi",
    "7/24 lastik değişimi",
    "Aksaray yol yardım",
    "Ortaköy lastik tamiri",
    "kamyon lastik desteği",
    "tır lastik servisi",
  ],
};

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;
