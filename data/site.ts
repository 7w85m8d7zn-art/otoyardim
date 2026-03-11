import type { FaqGroup, GalleryItem, LinkItem, ServiceCard, TrustItem } from "@/data/types";

export const siteConfig = {
  name: "Şen Oto Lastik",
  legalName: "Şen Oto Lastik",
  foundingYear: 1980,
  heritageLabel: "1980'den beri",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://senotolastik.com",
  description:
    "Şen Oto Lastik, Ortaköy / Aksaray merkezli 7/24 yol yardım, mobil lastik servisi, yerinde lastik değişimi, oto lastik tamiri ve Türkiye geneli jant gönderimi sunar.",
  phoneDisplay: "+90 534 492 70 31",
  phoneHref: "tel:+905344927031",
  whatsappNumber: "905344927031",
  whatsappMessage:
    "Merhaba, Şen Oto Lastik ile yol yardım, mobil lastik servisi veya jant siparişi hakkında bilgi almak istiyorum.",
  district: "Ortaköy",
  city: "Aksaray",
  address: "Ortaköy / Aksaray, Türkiye",
  hours: "7/24 Açık",
  country: "Türkiye",
  serviceArea: "Aksaray ve yakın iller",
  nationalShipping: "Türkiye geneli 81 il",
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
  { label: "Jant Satışı", href: "/jant-satisi" },
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

export const footerProductLinks: LinkItem[] = [
  { label: "Jant Satışı", href: "/jant-satisi" },
  { label: "Jant Modelleri", href: "/jant-modelleri" },
  { label: "Jant Fiyatları", href: "/jant-fiyatlari" },
  { label: "81 İle Jant Gönderimi", href: "/81-ile-jant-gonderimi" },
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
    label: "Jant Seçimi Nasıl Yapılır?",
    href: "/blog/jant-secimi-nasil-yapilir",
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
  { value: "Ortaköy", label: "Aksaray Merkez Operasyon" },
  { value: "81 İl", label: "Jant Gönderimi" },
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
    title: "Türkiye Geneli Jant Gönderimi",
    description: "81 ile teklif, sipariş ve kargo organizasyonu.",
    icon: "package",
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
    title: "Jant Satışı",
    description:
      "Binek, ticari araç ve SUV modelleri için jant seçenekleri ve teklif hattı.",
    href: "/jant-satisi",
    icon: "disc",
  },
  {
    title: "81 İle Jant Gönderimi",
    description:
      "Türkiye geneli sipariş, paketleme ve sevkiyat desteği tek hattan yönetilir.",
    href: "/81-ile-jant-gonderimi",
    icon: "package",
    badge: "Tüm Türkiye",
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
    title: "Aksaray ve çevresine hizmet",
    description:
      "Yerel saha hizmetini yakın illere uzatırken, operasyon merkezimizi Aksaray odaklı yönetiyoruz.",
  },
  {
    title: "Güvenilir lastik ve yol yardım desteği",
    description:
      "Binek araçtan ticari araca kadar güvenli ekipman ve pratik iletişimle süreci ilerletiyoruz.",
  },
];

export const serviceAreaCards = [
  {
    title: "Yerel saha hizmeti",
    description:
      "Yol yardım, mobil lastik servisi, yerinde lastik değişimi ve oto lastik tamiri Aksaray, Ortaköy ve yakın şehirler için sunulur.",
    bullets: [
      "Aksaray merkez ve Ortaköy çıkışlı yönlendirme",
      "Kırşehir, Kayseri, Nevşehir, Niğde, Konya ve Ankara hatlarına çağrı değerlendirmesi",
      "Acil durumlarda telefon ve WhatsApp ile lokasyon alma",
    ],
  },
  {
    title: "Ulusal jant gönderimi",
    description:
      "Jant satışı ve sipariş organizasyonu ise saha hizmetinden ayrı yürütülür ve Türkiye'nin 81 iline kargo ile gönderim yapılır.",
    bullets: [
      "81 il için teklif, model bilgisi ve sipariş akışı",
      "Binek araç, ticari araç ve SUV jant seçenekleri",
      "Telefon veya WhatsApp ile hızlı fiyat ve stok teyidi",
    ],
  },
];

export const jantHighlights = [
  "Türkiye'nin 81 iline jant gönderimi",
  "Binek araç, ticari araç ve SUV için farklı ölçü seçenekleri",
  "Telefon ve WhatsApp üzerinden teklif, sipariş ve stok bilgisi",
  "Güvenli paketleme ve şehir dışı sevkiyat planı",
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
    title: "Jant satışı Türkiye geneli",
    image: "/images/jant-satisi-turkiye.jpg",
    alt: "Türkiye geneli jant satışı için hazırlanan jant ürün görseli",
  },
  {
    title: "81 il jant gönderimi hazırlığı",
    image: "/images/81-il-jant-gonderimi.jpg",
    alt: "81 ile jant gönderimi için paketleme hazırlığı görseli",
  },
  {
    title: "Yerinde lastik değişimi",
    image: "/images/yerinde-lastik-degisimi.jpg",
    alt: "Yerinde lastik değişimi ve jant kontrolü görseli",
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
          "Aksaray ve yakın şehirlerdeki uygun çağrılarda ekibimiz doğrudan konuma yönlendirilir. En hızlı yönlendirme için telefonla arayıp canlı konum paylaşabilirsiniz.",
      },
      {
        question: "Kamyon ve ticari araçlara hizmet veriyor musunuz?",
        answer:
          "Evet. Hafif ticari, kamyonet, kamyon ve tır grubunda lastik desteği için araç tipine uygun ekipmanla planlama yapıyoruz.",
      },
      {
        question: "Ortalama ulaşım süreniz nedir?",
        answer:
          "Süre; bulunduğunuz nokta, trafik ve yol koşullarına göre değişir. Ortaköy ve Aksaray çevresinde hızlı yönlendirme önceliğimizdir.",
      },
    ],
  },
  {
    title: "Jant satışı ve sipariş",
    items: [
      {
        question: "Türkiye geneline jant gönderimi yapıyor musunuz?",
        answer:
          "Evet. Jant siparişlerinde Türkiye'nin 81 iline teklif, sipariş ve gönderim organizasyonu sağlıyoruz.",
      },
      {
        question: "Jant siparişi nasıl verilir?",
        answer:
          "Telefon veya WhatsApp üzerinden araç bilgisi, ölçü ve talep edilen model paylaşılır. Uygun seçenekler ve fiyat bilgisi sonrası sipariş akışı başlatılır.",
      },
      {
        question: "Sadece Aksaray'a mı satış yapıyorsunuz?",
        answer:
          "Hayır. Yol yardım tarafı yerel olarak Aksaray ve yakın bölgelere odaklıdır; jant satışı ise Türkiye geneline açıktır.",
      },
    ],
  },
];
