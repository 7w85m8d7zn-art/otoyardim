import type { FaqGroup, GalleryItem, LinkItem, ServiceCard, TrustItem } from "@/data/types";

export const siteConfig = {
  name: "Şen Oto Lastik",
  legalName: "Şen Oto Lastik",
  foundingYear: 1980,
  heritageLabel: "1980'den beri",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://senotolastik.com",
  description:
    "Şen Oto Lastik, Ortaköy / Aksaray merkezli 7/24 yol yardım, mobil lastik servisi, yerinde lastik değişimi ve Ankara - Niğde Otobanı hattında acil lastik desteği sunar.",
  phoneDisplay: "+90 534 492 70 31",
  phoneHref: "tel:+905344927031",
  whatsappNumber: "905344927031",
  whatsappMessage:
    "Merhaba, Ankara - Niğde Otobanı veya Aksaray hattı için yol yardım desteği almak istiyorum.",
  district: "Ortaköy",
  city: "Aksaray",
  address: "Ortaköy / Aksaray, Türkiye",
  hours: "7/24 Açık",
  country: "Türkiye",
  serviceArea: "Aksaray, Ortaköy, Ankara - Niğde Otobanı ve yakın güzergahlar",
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
  { label: "Otoban Hattı", href: "/ankara-nigde-otobani-yol-yardim" },
  { label: "Mobil Servis", href: "/mobil-lastik-servisi" },
  { label: "Lastik Tamiri", href: "/lastik-tamiri" },
  { label: "İletişim", href: "/#iletisim" },
];

export const footerServiceLinks: LinkItem[] = [
  { label: "7/24 Yol Yardım", href: "/yol-yardim" },
  { label: "Otoban Yol Yardım", href: "/ankara-nigde-otobani-yol-yardim" },
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
  { value: "7/24", label: "Canlı Çağrı Hattı" },
  { value: "Otoban", label: "Ankara - Niğde Yoğun Destek" },
  { value: "Ortaköy", label: "Aksaray Çıkışlı Ekip" },
];

export const trustItems: TrustItem[] = [
  {
    title: "7/24 Açık",
    description: "Gece gündüz kesintisiz yol yardım ve lastik desteği.",
    icon: "clock",
  },
  {
    title: "Aksaray Çıkışlı",
    description: "Ortaköy / Aksaray merkezli ekip ile hızlı saha planı.",
    icon: "zap",
  },
  {
    title: "Ankara - Niğde Otobanı",
    description: "Ankara - Niğde Otobanı ve yakın geçişlerde aktif saha desteği.",
    icon: "truck",
  },
  {
    title: "Yerinde Müdahale",
    description: "Patlak lastik, stepne ve değişim desteği doğrudan konumda.",
    icon: "wrench",
  },
  {
    title: "Hızlı Yol Yardım",
    description: "Acil çağrılarda önce telefon, sonra konum ile net yönlendirme.",
    icon: "lifeBuoy",
  },
];

export const serviceCards: ServiceCard[] = [
  {
    title: "7/24 Yol Yardım",
    description:
      "Aksaray, Ortaköy ve bağlantı yollarında yolda kalan araçlara hızlı saha çıkışı.",
    href: "/yol-yardim",
    icon: "lifeBuoy",
  },
  {
    title: "Otoban Yol Yardım",
    description:
      "Ankara - Niğde Otobanı üzerindeki yoğun çağrılarda konum bazlı hızlı yönlendirme.",
    href: "/ankara-nigde-otobani-yol-yardim",
    icon: "truck",
    badge: "Yoğun Hat",
  },
  {
    title: "Mobil Lastik Servisi",
    description:
      "Servise gitmeden, bulunduğunuz noktada profesyonel lastik desteği alın.",
    href: "/mobil-lastik-servisi",
    icon: "truck",
  },
  {
    title: "Yerinde Lastik Değişimi",
    description:
      "Stepne değişimi, sökme-takma ve güvenli şekilde yola dönüş desteği.",
    href: "/lastik-degisimi",
    icon: "refresh",
  },
  {
    title: "Lastik Tamiri",
    description:
      "Çivi, hava kaçağı ve patlak gibi sorunlarda hızlı ve kontrollü tamir.",
    href: "/lastik-tamiri",
    icon: "wrench",
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
    title: "Telefonda net yönlendirme",
    description:
      "Acil durumda önce sorunu ve konumu netleştiriyor, gereksiz beklemeyi baştan azaltıyoruz.",
  },
  {
    title: "Aksaray çıkışlı hızlı plan",
    description:
      "Ortaköy merkezli saha organizasyonu ile Aksaray ve yakın hatlarda zaman kaybını azaltıyoruz.",
  },
  {
    title: "Otoban hattında yoğun destek",
    description:
      "Ankara - Niğde Otobanı'ndaki çağrıları ayrı bir yoğunluk hattı gibi yönetiyor, uygun rotada hızlı çıkış planlıyoruz.",
  },
  {
    title: "Bulunduğunuz noktada müdahale",
    description:
      "Stepne değişimi, tamir ve sökme-takma işlemlerini bulunduğunuz konumda tamamlıyoruz.",
  },
  {
    title: "7/24 canlı iletişim",
    description:
      "Telefon ve WhatsApp hattımız özellikle yol yardım çağrılarında hızlı teyit ve lokasyon akışı için aktif tutulur.",
  },
];

export const serviceAreaCards = [
  {
    title: "Aksaray / Ortaköy çıkışlı ana saha",
    description:
      "Ana operasyon yapımız Aksaray, Ortaköy ve bağlantı yollarındaki yol yardım çağrılarını hızlı karşılamak için kurgulandı. Mobil lastik, tamir ve değişim hizmetleri bu merkezden yönetilir.",
    bullets: [
      "Aksaray merkez ve Ortaköy çıkışlı yönlendirme",
      "Şehir içi, ilçe yolları ve yakın bağlantılarda öncelikli destek",
      "Telefon ve WhatsApp ile hızlı lokasyon alma",
    ],
  },
  {
    title: "Ankara - Niğde Otobanı yoğunluk hattı",
    description:
      "Otobanda kalan sürücüler için ilk görünür mesajımız da burası: Ankara - Niğde Otobanı'nda full hizmet veriyor, uygun rota ve yoğunluk durumunda acil çağrılara hızlı saha planı oluşturuyoruz.",
    bullets: [
      "Otoban üzerinde hızlı konum teyidi ve güvenli iletişim",
      "Patlak lastik, stepne değişimi ve acil yol yardımı",
      "Gece çağrılarında da aktif iletişim ve rota planı",
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
          "Aksaray, Ortaköy, Ankara - Niğde Otobanı ve yakın şehirlerdeki uygun çağrılarda ekibimiz doğrudan konuma yönlendirilir.",
      },
      {
        question: "Kamyon ve ticari araçlara hizmet veriyor musunuz?",
        answer:
          "Evet. Hafif ticari, kamyonet, kamyon ve tır grubunda lastik desteği için araç tipine uygun ekipmanla planlama yapıyoruz.",
      },
      {
        question: "Ortalama ulaşım süreniz nedir?",
        answer:
          "Süre; bulunduğunuz nokta, trafik ve yol koşullarına göre değişir. Ortaköy, Aksaray ve Ankara - Niğde Otobanı hattında hızlı yönlendirme önceliğimizdir.",
      },
    ],
  },
  {
    title: "Otoban ve yol yardım hizmeti",
    items: [
      {
        question: "Ankara - Niğde Otobanı'nda hizmet veriyor musunuz?",
        answer:
          "Evet. Ankara - Niğde Otobanı'nda full hizmet veriyor ve uygun çağrılarda en hızlı şekilde saha planı oluşturuyoruz.",
      },
      {
        question: "Sadece Aksaray içinde mi çalışıyorsunuz?",
        answer:
          "Hayır. Aksaray ve Ortaköy merkezli olsak da Ankara - Niğde Otobanı ve yakın şehir hatlarında da çağrı değerlendirmesi yapıyoruz.",
      },
      {
        question: "En hızlı iletişim yöntemi nedir?",
        answer:
          "Acil durumlarda doğrudan telefon araması en hızlı yöntemdir. Ardından WhatsApp üzerinden canlı konum göndererek süreci hızlandırabilirsiniz.",
      },
    ],
  },
];
