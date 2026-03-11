import type { FaqGroup, GalleryItem, LinkItem, ServiceCard, TrustItem } from "@/data/types";

export const siteConfig = {
  name: "Şen Oto Lastik",
  legalName: "Şen Oto Lastik",
  foundingYear: 1980,
  heritageLabel: "1980'den beri",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://senotolastik.com",
  description:
    "Şen Oto Lastik, Ortaköy / Aksaray merkezli 7/24 yol yardım, mobil lastik servisi, yerinde lastik değişimi, oto lastik tamiri ve Niğde Otobanı dahil yakın hatlarda acil lastik desteği sunar.",
  phoneDisplay: "+90 534 492 70 31",
  phoneHref: "tel:+905344927031",
  whatsappNumber: "905344927031",
  whatsappMessage:
    "Merhaba, Şen Oto Lastik ile yol yardım veya mobil lastik servisi hakkında bilgi almak istiyorum.",
  district: "Ortaköy",
  city: "Aksaray",
  address: "Ortaköy / Aksaray, Türkiye",
  hours: "7/24 Açık",
  country: "Türkiye",
  serviceArea: "Aksaray, Ortaköy, Niğde Otobanı ve yakın güzergahlar",
  mapQuery: "Ortaköy Aksaray Türkiye",
  mapEmbed:
    "https://www.google.com/maps?q=Ortak%C3%B6y%20Aksaray%20T%C3%BCrkiye&output=embed",
  defaultOgImage: "/images/aksaray-yol-yardim.jpg",
  email: "info@senotolastik.com",
};

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;

export const mapsDirectionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  siteConfig.mapQuery,
)}`;

export const navLinks: LinkItem[] = [
  { label: "Anasayfa", href: "/" },
  { label: "Yol Yardım", href: "/yol-yardim" },
  { label: "Mobil Servis", href: "/mobil-lastik-servisi" },
  { label: "Lastik Tamiri", href: "/lastik-tamiri" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/#iletisim" },
];

export const footerServiceLinks: LinkItem[] = [
  { label: "7/24 Yol Yardım", href: "/yol-yardim" },
  { label: "Mobil Lastik Servisi", href: "/mobil-lastik-servisi" },
  { label: "Lastik Tamiri", href: "/lastik-tamiri" },
  { label: "Lastik Değişimi", href: "/lastik-degisimi" },
  { label: "Aksaray Yol Yardım", href: "/aksaray-yol-yardim" },
  { label: "Ortaköy Oto Lastik", href: "/ortakoy-oto-lastik" },
];

export const footerCityLinks: LinkItem[] = [
  { label: "Kırşehir Yol Yardım", href: "/kirsehir-yol-yardim" },
  { label: "Kayseri Yol Yardım", href: "/kayseri-yol-yardim" },
  { label: "Nevşehir Yol Yardım", href: "/nevsehir-yol-yardim" },
  { label: "Niğde Yol Yardım", href: "/nigde-yol-yardim" },
  { label: "Konya Yol Yardım", href: "/konya-yol-yardim" },
  { label: "Ankara Yol Yardım", href: "/ankara-yol-yardim" },
];

export const footerBlogLinks: LinkItem[] = [
  {
    label: "Yolda Lastik Patlarsa Ne Yapılmalı?",
    href: "/blog/yolda-lastik-patlarsa-ne-yapilmali",
  },
  {
    label: "Kış Lastiği Ne Zaman Takılır?",
    href: "/blog/kis-lastigi-ne-zaman-takilir",
  },
  {
    label: "Lastik Basıncı Kaç Olmalı?",
    href: "/blog/lastik-basinc-kac-olmali",
  },
];

export const heroStats = [
  { value: "7/24", label: "Aktif Çağrı Hattı" },
  { value: "Niğde", label: "Otoban Hattı Desteği" },
  { value: "Ortaköy", label: "Aksaray Merkez Operasyon" },
];

export const trustItems: TrustItem[] = [
  {
    title: "7/24 Açık",
    description: "Gece gündüz kesintisiz yol yardım ve lastik desteği.",
    icon: "clock",
  },
  {
    title: "Hızlı Ulaşım",
    description: "Aksaray ve yakın bölgelerde hızlı saha yönlendirmesi.",
    icon: "zap",
  },
  {
    title: "Yerinde Lastik Değişimi",
    description: "Bulunduğunuz noktada sökme, takma ve değişim desteği.",
    icon: "wrench",
  },
  {
    title: "Yol Yardım",
    description: "Patlak lastik, hava kaçağı ve acil çağrılarda müdahale.",
    icon: "lifeBuoy",
  },
  {
    title: "Niğde Otobanı'nda Hizmet",
    description: "Niğde Otobanı ve yakın geçişlerde aktif saha desteği.",
    icon: "truck",
  },
];

export const serviceCards: ServiceCard[] = [
  {
    title: "Yol Yardım",
    description:
      "Aksaray, Ortaköy ve çevre güzergahlarda yolda kalan araçlara 7/24 müdahale.",
    href: "/yol-yardim",
    icon: "lifeBuoy",
  },
  {
    title: "Mobil Lastik Servisi",
    description:
      "Servise gitmeden, bulunduğunuz noktada profesyonel lastik desteği alın.",
    href: "/mobil-lastik-servisi",
    icon: "truck",
  },
  {
    title: "Lastik Tamiri",
    description:
      "Çivi, hava kaçağı ve patlak gibi sorunlarda hızlı ve kontrollü tamir.",
    href: "/lastik-tamiri",
    icon: "wrench",
  },
  {
    title: "Lastik Değişimi",
    description:
      "Stepne değişimi, sökme-takma ve yerinde lastik değişimi desteği.",
    href: "/lastik-degisimi",
    icon: "refresh",
  },
  {
    title: "Aksaray Yol Yardım",
    description: "Aksaray merkez ve ilçelerde hızlı saha çıkışı ve acil müdahale.",
    href: "/aksaray-yol-yardim",
    icon: "lifeBuoy",
  },
  {
    title: "Niğde Otobanı Desteği",
    description: "Niğde Otobanı'nda full hizmet ve hızlı konum bazlı yönlendirme.",
    href: "/nigde-yol-yardim",
    icon: "truck",
    badge: "Otoban",
  },
];

export const vehicleTypes = [
  "Otomobil",
  "Hafif Ticari",
  "Kamyonet",
  "Kamyon",
  "Tır",
  "SUV",
  "İş Makinesi",
];

export const whyChooseUsItems = [
  {
    title: "7/24 aktif destek",
    description:
      "Acil durumda önce uzun açıklamalar değil, hızlı yönlendirme ve net çözüm sunuyoruz.",
  },
  {
    title: "Hızlı müdahale",
    description:
      "Ortaköy merkezli saha organizasyonu ile Aksaray ve yakın hatlarda zaman kaybını azaltıyoruz.",
  },
  {
    title: "Bulunduğunuz noktaya servis",
    description:
      "Stepne değişimi, tamir ve sökme-takma işlemlerini bulunduğunuz konumda tamamlıyoruz.",
  },
  {
    title: "Niğde Otobanı dahil yakın hatlar",
    description:
      "Aksaray merkezli yapımızı Niğde Otobanı ve yakın şehir geçişlerine kadar uzatıyoruz.",
  },
  {
    title: "Güvenilir lastik ve yol yardım desteği",
    description:
      "Binek araçtan ticari araca kadar güvenli ekipman ve pratik iletişimle süreci ilerletiyoruz.",
  },
];

export const serviceAreaCards = [
  {
    title: "Aksaray ve Ortaköy çevresi",
    description:
      "Yol yardım, mobil lastik servisi, yerinde lastik değişimi ve oto lastik tamiri ağırlıklı olarak Aksaray, Ortaköy ve yakın şehir geçişlerinde sunulur.",
    bullets: [
      "Aksaray merkez ve Ortaköy çıkışlı yönlendirme",
      "Kırşehir, Kayseri, Nevşehir, Konya ve Ankara hatlarında çağrı değerlendirmesi",
      "Telefon ve WhatsApp ile hızlı lokasyon alma",
    ],
  },
  {
    title: "Niğde Otobanı ve yakın hatlar",
    description:
      "Niğde Otobanı'nda full hizmet veriyor; uygun trafik ve rota durumunda otoban üzerindeki acil çağrılara hızlı saha planı oluşturuyoruz.",
    bullets: [
      "Otoban üzerinde hızlı konum teyidi",
      "Patlak lastik, stepne değişimi ve acil destek",
      "Gece çağrılarında da aktif iletişim ve yönlendirme",
    ],
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Aksaray yol yardım çıkışı",
    image: "/images/aksaray-yol-yardim.jpg",
    alt: "Aksaray yol yardım ve lastik müdahalesi için saha aracı görseli",
  },
  {
    title: "Mobil lastik servisi müdahalesi",
    image: "/images/mobil-lastik-servisi.jpg",
    alt: "Mobil lastik servisi ile yerinde lastik değişimi görseli",
  },
  {
    title: "Ortaköy oto lastik atölye düzeni",
    image: "/images/ortakoy-oto-lastik.jpg",
    alt: "Ortaköy oto lastik atölyesi ve ekipman alanı",
  },
  {
    title: "Yol üstü müdahale hazırlığı",
    image: "/images/gallery-roadside.jpg",
    alt: "Yol üstü lastik müdahalesi için hazırlık görseli",
  },
  {
    title: "Servis alanı kontrolü",
    image: "/images/gallery-service-bay.jpg",
    alt: "Servis alanında lastik kontrolü yapılan çalışma görseli",
  },
  {
    title: "Yerinde lastik değişimi",
    image: "/images/yerinde-lastik-degisimi.jpg",
    alt: "Yerinde lastik değişimi yapılan araç görseli",
  },
];

export const homeFaqGroups: FaqGroup[] = [
  {
    title: "Yerel yol yardım ve mobil lastik servisi",
    items: [
      {
        question: "Gece hizmet veriyor musunuz?",
        answer:
          "Evet. Şen Oto Lastik, Ortaköy / Aksaray merkezli olarak günün her saati yol yardım ve mobil lastik servisi verir.",
      },
      {
        question: "Bulunduğum konuma gelir misiniz?",
        answer:
          "Aksaray, Ortaköy, Niğde Otobanı ve yakın şehirlerdeki uygun çağrılarda ekibimiz doğrudan konuma yönlendirilir.",
      },
      {
        question: "Kamyon ve ticari araçlara hizmet veriyor musunuz?",
        answer:
          "Evet. Hafif ticari, kamyonet, kamyon ve tır grubunda lastik desteği için araç tipine uygun ekipmanla planlama yapıyoruz.",
      },
      {
        question: "Ortalama ulaşım süreniz nedir?",
        answer:
          "Süre; bulunduğunuz nokta, trafik ve yol koşullarına göre değişir. Ortaköy, Aksaray ve Niğde Otobanı hattında hızlı yönlendirme önceliğimizdir.",
      },
    ],
  },
  {
    title: "Hizmet alanı",
    items: [
      {
        question: "Niğde Otobanı'nda hizmet veriyor musunuz?",
        answer:
          "Evet. Niğde Otobanı'nda full hizmet veriyor ve uygun çağrılarda en hızlı şekilde saha planı oluşturuyoruz.",
      },
      {
        question: "Sadece Aksaray içinde mi çalışıyorsunuz?",
        answer:
          "Hayır. Aksaray ve Ortaköy merkezli olsak da Niğde Otobanı ve yakın şehir hatlarında da çağrı değerlendirmesi yapıyoruz.",
      },
      {
        question: "En hızlı iletişim yöntemi nedir?",
        answer:
          "Acil durumlarda doğrudan telefon araması en hızlı yöntemdir. Ardından WhatsApp üzerinden canlı konum göndererek süreci hızlandırabilirsiniz.",
      },
    ],
  },
];
