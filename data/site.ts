import type { FaqGroup, GalleryItem, LinkItem, ServiceCard, TrustItem } from "@/data/types";

export const siteConfig = {
  name: "Şen Oto Lastik",
  legalName: "Şen Oto Lastik",
  foundingYear: 1980,
  heritageLabel: "1980'den beri",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://senotolastik.com",
  description:
    "Şen Oto Lastik, Ortaköy / Aksaray merkezli 7/24 yol yardım, mobil lastik servisi, yerinde lastik değişimi ve Niğde hattında acil lastik desteği sunar.",
  phoneDisplay: "+90 534 492 70 31",
  phoneHref: "tel:+905344927031",
  whatsappNumber: "905344927031",
  whatsappMessage:
    "Merhaba, Niğde hattı veya Aksaray çevresi için yol yardım desteği almak istiyorum.",
  district: "Ortaköy",
  city: "Aksaray",
  address: "ZAFER MAH. KIRŞEHİR CAD. YENİ SANAYİ SİT. NO:1, 68400 Ortaköy/Aksaray",
  hours: "7/24 Açık",
  country: "Türkiye",
  serviceArea: "Aksaray, Ortaköy, Niğde hattı ve yakın güzergahlar",
  mapQuery: "ZAFER MAH. KIRSEHIR CAD. YENI SANAYI SIT. NO:1, 68400 Ortakoy/Aksaray",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.4056784849777!2d34.0715226!3d38.75439840000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d5bf66cf098ee1%3A0x78823bd4bfe5872a!2sPT%20LAST%C4%B0K-%C5%9Een%20Oto%20Lastik!5e0!3m2!1str!2str!4v1773280210804!5m2!1str!2str",
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
  { label: "Yol Yardım", href: "/yol-yardim" },
  { label: "Mobil Servis", href: "/mobil-lastik-servisi" },
  { label: "Lastik Tamiri", href: "/lastik-tamiri" },
  { label: "İletişim", href: "/iletisim" },
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

export const heroStats = [
  { value: "7/24", label: "Canlı Çağrı Hattı" },
  { value: "Niğde", label: "Hattında Öncelikli Destek" },
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
    title: "Niğde Hattı",
    description: "Niğde yönlü yol ve otoban bağlantılarında aktif saha desteği.",
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
      "Niğde hattındaki çağrıları öncelikli rota gibi değerlendiriyor, uygun durumda hızlı saha çıkışı planlıyoruz.",
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
    title: "Niğde hattı öncelikli destek alanı",
    description:
      "Niğde yönlü hatta ve otoban bağlantılarında gelen çağrıları öncelikli değerlendiriyor, uygun rota ve yoğunluk durumunda hızlı saha planı oluşturuyoruz.",
    bullets: [
      "Niğde hattında hızlı konum teyidi ve güvenli iletişim",
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
          "Aksaray, Ortaköy, Niğde hattı ve yakın şehirlerdeki uygun çağrılarda ekibimiz doğrudan konuma yönlendirilir.",
      },
      {
        question: "Kamyon ve ticari araçlara hizmet veriyor musunuz?",
        answer:
          "Evet. Hafif ticari, kamyonet, kamyon ve tır grubunda lastik desteği için araç tipine uygun ekipmanla planlama yapıyoruz.",
      },
      {
        question: "Ortalama ulaşım süreniz nedir?",
        answer:
          "Süre; bulunduğunuz nokta, trafik ve yol koşullarına göre değişir. Ortaköy, Aksaray ve özellikle Niğde hattında hızlı yönlendirme önceliğimizdir.",
      },
    ],
  },
  {
    title: "Otoban ve yol yardım hizmeti",
    items: [
      {
        question: "Niğde hattında hizmet veriyor musunuz?",
        answer:
          "Evet. Niğde hattında ve uygun otoban bağlantılarında full hizmet veriyor, acil çağrılarda hızlı saha planı oluşturuyoruz.",
      },
      {
        question: "Sadece Aksaray içinde mi çalışıyorsunuz?",
        answer:
          "Hayır. Aksaray ve Ortaköy merkezli olsak da Niğde hattı ve yakın şehir bağlantılarında da çağrı değerlendirmesi yapıyoruz.",
      },
      {
        question: "En hızlı iletişim yöntemi nedir?",
        answer:
          "Acil durumlarda doğrudan telefon araması en hızlı yöntemdir. Ardından WhatsApp üzerinden canlı konum göndererek süreci hızlandırabilirsiniz.",
      },
    ],
  },
];
