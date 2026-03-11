export type FaqItem = {
  question: string;
  answer: string;
};

export type ServicePageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  description: string;
  benefits: string[];
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
  faqs: FaqItem[];
};

export type AreaPageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  description: string;
  highlights: string[];
  sections: Array<{
    title: string;
    paragraphs: string[];
  }>;
  faqs: FaqItem[];
};

export const companyStats = [
  { value: "7/24", label: "Kesintisiz Hizmet" },
  { value: "Mobil", label: "Yerinde Servis Ekibi" },
  { value: "6+", label: "Araç Tipine Destek" },
  { value: "Ortaköy", label: "Merkez Operasyon Noktası" },
];

export const corporateHighlights = [
  "Kurumsal görünümle sahadaki pratikliği birleştiren hizmet yaklaşımı",
  "Binek ve ticari araç müşterilerine aynı profesyonel çizgide destek",
  "Yerel bölge hakimiyeti sayesinde daha hızlı yönlendirme",
  "Telefon ve WhatsApp üzerinden net, hızlı ve çözüm odaklı iletişim",
];

export const processSteps = [
  {
    step: "01",
    title: "Talep alınır",
    description:
      "Telefon veya WhatsApp üzerinden konum, araç tipi ve ihtiyaç bilgisi alınır.",
  },
  {
    step: "02",
    title: "Ekip yönlendirilir",
    description:
      "Duruma uygun ekipman ve saha personeli ile en hızlı rota planlanır.",
  },
  {
    step: "03",
    title: "Yerinde çözüm sunulur",
    description:
      "Lastik tamiri, değişim ya da yol yardım müdahalesi bulunduğunuz noktada tamamlanır.",
  },
];

export const trustItems = [
  { title: "7/24 Açık", icon: "clock" },
  { title: "Hızlı Ulaşım", icon: "gauge" },
  { title: "Yerinde Lastik Değişimi", icon: "wrench" },
  { title: "Yol Yardım", icon: "lifeBuoy" },
] as const;

export const serviceCards = [
  {
    title: "Oto Lastik Tamiri",
    description:
      "Patlak, çivi giren ya da hava kaçıran lastiklerde bulunduğunuz noktada hızlı müdahale.",
    href: "/hizmetler/lastik-tamiri",
    icon: "shield",
  },
  {
    title: "Lastik Değişimi",
    description:
      "Stepne değişimi, yedek lastik montajı ve acil yolda lastik sökme-takma desteği.",
    href: "/hizmetler/lastik-degisimi",
    icon: "refresh",
  },
  {
    title: "Mobil Lastik Servisi",
    description:
      "Servise gitmeden, bulunduğunuz konuma gelen mobil ekip ile yerinde çözüm.",
    href: "/hizmetler/mobil-lastik-servisi",
    icon: "truck",
  },
  {
    title: "Yol Yardım",
    description:
      "Gece ya da gündüz fark etmeden, yol üstünde kalan araçlara hızlı destek.",
    href: "/hizmetler/yol-yardim",
    icon: "map",
  },
  {
    title: "Ticari Araç Lastik Desteği",
    description:
      "Hafif ticari ve ticari araçlar için dayanıklı ekipmanla yerinde lastik hizmeti.",
    href: "/hizmetler/mobil-lastik-servisi",
    icon: "briefcase",
  },
  {
    title: "Balans Kontrolü",
    description:
      "Titreşim, dengesiz sürüş ve düzensiz aşınmalarda kontrollü balans yönlendirmesi.",
    href: "/iletisim",
    icon: "disc",
  },
] as const;

export const vehicleTypes = [
  "Otomobil",
  "Hafif Ticari",
  "Kamyonet",
  "Kamyon",
  "Tır",
  "İş Makinesi",
];

export const whyChooseUs = [
  {
    title: "7/24 kesintisiz hizmet",
    description:
      "Saat kaç olursa olsun telefon ve WhatsApp üzerinden anında dönüş sağlıyoruz.",
  },
  {
    title: "Hızlı müdahale",
    description:
      "Ortaköy ve Aksaray çevresinde yol üstü çağrılara hızlı rota planı ile çıkıyoruz.",
  },
  {
    title: "Yerinde servis rahatlığı",
    description:
      "Aracı çekiciye yüklemeden, lastik sorununu bulunduğunuz konumda çözmeye odaklanıyoruz.",
  },
  {
    title: "Bölgeyi bilen ekip",
    description:
      "Ortaköy, Aksaray Merkez ve bağlantı yollarında yön tarifine göre hızlı lokasyon tespiti yapıyoruz.",
  },
  {
    title: "Profesyonel lastik hizmeti",
    description:
      "Binek araçtan ticari araca kadar uygun ekipman ve güvenli uygulama ile çalışıyoruz.",
  },
];

export const areaCoverage = [
  "Ortaköy",
  "Aksaray Merkez",
  "Çevre ilçeler",
  "Yol üzeri acil destek",
];

export const galleryItems = [
  {
    title: "Servis Alanında Profesyonel Kontrol",
    image: "/images/gallery-service-bay.jpg",
  },
  {
    title: "Lastik Değişimi ve Jant Kontrolü",
    image: "/images/gallery-tire-change.jpg",
  },
  {
    title: "Atölye Ekipman ve Hazırlık Alanı",
    image: "/images/gallery-commercial.jpg",
  },
  {
    title: "Otomotiv Atölye Düzeni",
    image: "/images/gallery-workshop.jpg",
  },
  {
    title: "Yakın Detay Teker ve Lastik Müdahalesi",
    image: "/images/gallery-detail.jpg",
  },
  {
    title: "Yol Üstü Müdahale Hazırlığı",
    image: "/images/gallery-roadside.jpg",
  },
];

export const homeFaqs: FaqItem[] = [
  {
    question: "Gece hizmet veriyor musunuz?",
    answer:
      "Evet. Şen Oto Lastik, Ortaköy / Aksaray ve çevresinde 7 gün 24 saat yol yardımı ve mobil lastik desteği verir.",
  },
  {
    question: "Tır ve kamyonlara hizmet var mı?",
    answer:
      "Evet. Kamyon, tır ve ticari araç lastik desteği sağlıyoruz. Aracın tipi ve bulunduğu konuma göre uygun ekipmanla yönlendirme yapıyoruz.",
  },
  {
    question: "Yolda lastik değişimi yapıyor musunuz?",
    answer:
      "Evet. Stepne değişimi, patlak lastik sökme-takma ve yerinde lastik değişimi hizmeti sunuyoruz.",
  },
  {
    question: "Ne kadar sürede ulaşıyorsunuz?",
    answer:
      "Bulunduğunuz nokta, trafik ve yol durumuna göre değişir; ancak Ortaköy ve Aksaray çevresinde en hızlı şekilde yönlendirme yapılır.",
  },
];

export const aboutFaqs: FaqItem[] = [
  {
    question: "Şen Oto Lastik hangi alanlarda uzman?",
    answer:
      "Mobil lastik servisi, lastik tamiri, lastik değişimi, yol yardım ve ticari araç lastik desteği alanlarında hizmet veriyoruz.",
  },
  {
    question: "Kurumsal müşterilere destek veriyor musunuz?",
    answer:
      "Evet. Hafif ticari araçlar, kamyonetler, kamyon ve tır grubu için saha odaklı lastik desteği sunuyoruz.",
  },
  {
    question: "Hizmet yaklaşımınızın farkı nedir?",
    answer:
      "Yerel bölge bilgisi, hızlı iletişim ve sahada çözüm üretmeye odaklı çalışma tarzımız sayesinde süreçleri daha net yönetiyoruz.",
  },
];

export const contactFaqs: FaqItem[] = [
  {
    question: "Konum paylaşımı nasıl yapılmalı?",
    answer:
      "WhatsApp üzerinden canlı konum ya da yakındaki bir nokta bilgisini paylaşırsanız ekibin yönlenmesi hızlanır.",
  },
  {
    question: "İletişim için en hızlı yöntem hangisi?",
    answer:
      "Acil durumlarda doğrudan telefon araması en hızlı yöntemdir. Alternatif olarak WhatsApp hattımız da aktiftir.",
  },
  {
    question: "Çalışma saatleriniz nedir?",
    answer:
      "Şen Oto Lastik haftanın 7 günü, günün 24 saati hizmet verir.",
  },
];

export const servicePages: Record<string, ServicePageData> = {
  "mobil-lastik-servisi": {
    slug: "mobil-lastik-servisi",
    metaTitle: "Ortaköy Mobil Lastik Servisi | 7/24 Şen Oto Lastik",
    metaDescription:
      "Ortaköy / Aksaray bölgesinde 7/24 mobil lastik servisi. Aracınızın yanına gelen ekip ile yerinde lastik değişimi, tamir ve acil yol desteği.",
    kicker: "7/24 Mobil Müdahale",
    title: "Ortaköy'de 7/24 Mobil Lastik Servisi",
    description:
      "Şen Oto Lastik, Ortaköy / Aksaray ve çevresinde servise gitmeden çözüm sunan mobil lastik ekibidir. Patlak lastik, hava kaçırma, yolda kalma ve ani değişim ihtiyaçlarında bulunduğunuz noktaya geliyoruz.",
    benefits: [
      "Servise gitmeden bulunduğunuz noktada müdahale",
      "Binek ve ticari araçlar için uygun ekipman",
      "Gece-gündüz acil çağrılara hızlı dönüş",
    ],
    sections: [
      {
        title: "Yerinde lastik hizmeti nasıl ilerliyor?",
        paragraphs: [
          "Bize telefonla ya da WhatsApp üzerinden ulaştığınızda konum, araç tipi ve lastik sorununuzu öğreniyoruz. Uygun ekipmanla sizi yolda bekletmeden mobil ekibi yönlendiriyoruz.",
          "Amaç, aracı çekiciye ihtiyaç duymadan güvenli şekilde tekrar yola çıkarabilmek. Özellikle şehir içi ve bağlantı yollarında bu hız büyük avantaj sağlar.",
        ],
      },
      {
        title: "Hangi durumlarda mobil lastik servisi gerekir?",
        paragraphs: [
          "Patlak lastik, yanağa gelen hasar, sibop kaçırması, stepne montajı ve ani hava basıncı kaybı gibi durumlarda mobil servis en pratik çözümdür.",
          "Aracınız otoparkta, iş yerinde, yol kenarında ya da sevkiyat sırasında kaldıysa; Ortaköy ve çevresine hızlı yönlendirme yapıyoruz.",
        ],
      },
      {
        title: "Ortaköy ve çevresinde ticari araç desteği",
        paragraphs: [
          "Hafif ticari araçlar, kamyonetler ve iş temposu yoğun olan filo araçları için zaman kaybını azaltan yerinde destek sunuyoruz.",
          "Ticari araçlar için hızlı müdahale, iş akışının devamı açısından kritiktir. Bu yüzden mobil servis sayfamız dönüşüm odaklı değil, gerçekten sahadaki ihtiyaca göre kurgulandı.",
        ],
      },
    ],
    faqs: [
      {
        question: "Mobil lastik servisi hangi saatlerde açık?",
        answer:
          "Şen Oto Lastik, 7 gün 24 saat hizmet verir. Gece geç saatlerde de çağrı alıyoruz.",
      },
      {
        question: "Bulunduğum yere mi geliyorsunuz?",
        answer:
          "Evet. Ortaköy, Aksaray Merkez ve çevre yol güzergahlarında bulunduğunuz konuma yönlendirme yapıyoruz.",
      },
      {
        question: "Ticari araçlara mobil servis veriyor musunuz?",
        answer:
          "Evet. Hafif ticari araç ve uygun durumlarda daha büyük araçlar için de yerinde destek sağlıyoruz.",
      },
    ],
  },
  "yol-yardim": {
    slug: "yol-yardim",
    metaTitle: "Aksaray Yol Yardım | 7/24 Lastik ve Acil Destek",
    metaDescription:
      "Aksaray ve Ortaköy çevresinde 7/24 yol yardım. Lastik arızası, yolda kalma, stepne değişimi ve acil mobil destek için Şen Oto Lastik.",
    kicker: "Acil Yol Yardımı",
    title: "Aksaray Yol Yardım ve Lastik Desteği",
    description:
      "Yol üstünde kaldığınızda beklemek istemezsiniz. Şen Oto Lastik, Ortaköy / Aksaray hattında lastik kaynaklı acil durumlara hızlı ulaşım sağlayan yol yardım ekibidir.",
    benefits: [
      "Yolda kalan sürücülere hızlı yönlendirme",
      "Lastik arızasına odaklı pratik çözüm",
      "7/24 telefon ve WhatsApp erişimi",
    ],
    sections: [
      {
        title: "Lastik arızasında hızlı yol yardımı",
        paragraphs: [
          "Acil yol yardım hizmetimiz özellikle lastik problemi yaşayan sürücüler için tasarlandı. Patlama, yarılma, stepne ihtiyacı ve basınç kaybı gibi sorunlarda olay yerine hızlıca ulaşıyoruz.",
          "Sürecin ilk adımı doğru konum paylaşımı. Böylece yol kenarında daha kısa sürede destek verebiliyoruz.",
        ],
      },
      {
        title: "Gece yol yardım ihtiyacında güvenli destek",
        paragraphs: [
          "Gece saatlerinde lastik arızası yaşamak sürücüler için streslidir. Bu yüzden çağrıya kısa dönüş, net yönlendirme ve güven odaklı iletişim önceliğimizdir.",
          "Konumunuzu paylaştıktan sonra sizden araç tipi ve durum bilgisi alıyor, uygun destek ile yola çıkıyoruz.",
        ],
      },
      {
        title: "Ortaköy, Merkez ve çevre yollarında hizmet",
        paragraphs: [
          "Şehir içi noktalar, ilçe bağlantı yolları ve ana güzergahlarda sürücülere lastik odaklı acil yardım sunuyoruz.",
          "Amaç; vakit kaybını azaltmak, sizi güvenli şekilde tekrar yola çıkarmak ve uzun bekleme sürelerini önlemektir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Yol yardım sadece lastik sorunları için mi?",
        answer:
          "Ana uzmanlığımız lastik ve lastik değişimi kaynaklı acil durumlar. Duruma göre en doğru yönlendirmeyi hızlıca yapıyoruz.",
      },
      {
        question: "Gece yarısı da gelebiliyor musunuz?",
        answer:
          "Evet. 7/24 hizmet verdiğimiz için gece saatlerinde de çağrı alıyor ve yol yardımı sağlıyoruz.",
      },
      {
        question: "WhatsApp ile konum atabilir miyim?",
        answer:
          "Evet. WhatsApp üzerinden konum göndermeniz ekibin size daha hızlı ulaşmasına yardımcı olur.",
      },
    ],
  },
  "lastik-degisimi": {
    slug: "lastik-degisimi",
    metaTitle: "7/24 Lastik Değişimi | Ortaköy / Aksaray Şen Oto Lastik",
    metaDescription:
      "Ortaköy ve Aksaray çevresinde yolda lastik değişimi hizmeti. Stepne takma, acil sökme-takma ve mobil lastik değişimi için hemen arayın.",
    kicker: "Acil Değişim Hizmeti",
    title: "Yolda Lastik Değişimi ve Stepne Desteği",
    description:
      "Lastiğiniz yolda patladıysa, stepneyi takacak imkanınız yoksa ya da güvenli değişim desteğine ihtiyaç duyuyorsanız Şen Oto Lastik yanınızda. Ortaköy / Aksaray bölgesinde 7/24 lastik değişimi yapıyoruz.",
    benefits: [
      "Yerinde stepne montajı ve lastik değişimi",
      "Yoğun trafikte güvenli yönlendirme",
      "Binek ve hafif ticari araç desteği",
    ],
    sections: [
      {
        title: "Yolda lastik değişimi neden profesyonel destek ister?",
        paragraphs: [
          "Yol kenarında yapılan kontrolsüz değişim işlemleri sürücü güvenliği açısından risk yaratabilir. Özellikle gece, dar banket ya da yoğun trafik olan noktalarda profesyonel ekip desteği önemlidir.",
          "Şen Oto Lastik, gerekli ekipman ile lastik sökme-takma ve stepne montajını daha güvenli şekilde gerçekleştirir.",
        ],
      },
      {
        title: "Stepne yoksa ne oluyor?",
        paragraphs: [
          "Aracınızda stepne yoksa ya da mevcut stepne kullanıma uygun değilse, duruma göre tamir ya da alternatif çözüm için sizi yönlendiriyoruz.",
          "Öncelik, sizi yolda bekletmeden en pratik ve güvenli seçeneği sunmak.",
        ],
      },
      {
        title: "Aksaray ve Ortaköy çevresinde hızlı ulaşım",
        paragraphs: [
          "İlçe merkezleri, sanayi çevresi, bağlantı yolları ve yol üstü acil duraklamalarda hızlı yönlendirme ile çalışıyoruz.",
          "Bize ulaştığınızda araç tipi, konum ve lastik ölçüsü bilgisi süreci hızlandırır.",
        ],
      },
    ],
    faqs: [
      {
        question: "Yolda stepne takıyor musunuz?",
        answer:
          "Evet. Uygun durumlarda stepne montajı ve lastik değişimi yapıyoruz.",
      },
      {
        question: "Lastik değişimi ne kadar sürer?",
        answer:
          "Süre; konum, araç tipi ve lastiğin durumuna göre değişir. Müdahale süresi için en hızlı yönlendirmeyi sağlıyoruz.",
      },
      {
        question: "Kamyonetlere de hizmet veriyor musunuz?",
        answer:
          "Evet. Binek araçların yanında hafif ticari ve kamyonet grubu için de destek sağlıyoruz.",
      },
    ],
  },
  "lastik-tamiri": {
    slug: "lastik-tamiri",
    metaTitle: "Ortaköy Lastik Tamiri | Patlak Lastik İçin 7/24 Destek",
    metaDescription:
      "Ortaköy / Aksaray lastik tamiri hizmeti. Patlak lastik, hava kaçırma ve çivi giren lastikler için 7/24 mobil müdahale.",
    kicker: "Patlak Lastik Çözümü",
    title: "Ortaköy Lastik Tamiri ve Patlak Lastik Desteği",
    description:
      "Çivi girdi, hava kaçırıyor ya da lastik aniden indiğinde sürüşe devam etmek risklidir. Şen Oto Lastik, Ortaköy / Aksaray ve çevresinde hızlı lastik tamiri desteği verir.",
    benefits: [
      "Patlak lastiğe yerinde ilk müdahale",
      "Hava kaçırma ve sibop kontrolü",
      "Yol üstünde zaman kaybını azaltan çözüm",
    ],
    sections: [
      {
        title: "Hangi arızalarda lastik tamiri yapılır?",
        paragraphs: [
          "Çivi, vida ya da benzeri küçük delinmeler, basınç kaybı, sibop kaynaklı kaçaklar ve kontrol gerektiren durumlarda ilk değerlendirmeyi yapıyoruz.",
          "Lastiğin yanağı ya da yapısı güvenli tamire uygun değilse, sizi doğru değişim çözümüne yönlendiriyoruz.",
        ],
      },
      {
        title: "Patlak lastikle yola devam etmeyin",
        paragraphs: [
          "İnen ya da hava kaçıran lastikle ilerlemek jant, yanak ve süspansiyon tarafında ek hasara neden olabilir. Bu yüzden mümkün olan en kısa sürede profesyonel müdahale almak önemlidir.",
          "Özellikle yaz sıcaklarında basınç kaybı daha hızlı büyüyebilir. Erken müdahale masrafı azaltır.",
        ],
      },
      {
        title: "Mobil tamir ve değişim birlikte planlanır",
        paragraphs: [
          "Sahada yaptığımız ilk kontrolde tamir uygun değilse zaman kaybetmeden değişim yönüne geçiyoruz. Böylece sürücünün tekrar uzun bekleme yaşamasını önlüyoruz.",
          "Bu yaklaşım hem bireysel hem de ticari araç kullanıcıları için daha verimli bir süreç sunar.",
        ],
      },
    ],
    faqs: [
      {
        question: "Patlak lastik tamiri yerinde yapılır mı?",
        answer:
          "Uygun hasarlarda evet. Lastiğin durumu ve hasarın yeri kontrol edilerek işlem yapılır.",
      },
      {
        question: "Her patlak lastik tamir olur mu?",
        answer:
          "Hayır. Yanağa gelen ağır hasarlarda ya da güvenli olmayan durumlarda değişim önerilir.",
      },
      {
        question: "Hava kaçıran lastik için gece de gelir misiniz?",
        answer:
          "Evet. 7/24 hizmet verdiğimiz için gece saatlerinde de lastik tamiri veya değişimi için yönlendirme yapıyoruz.",
      },
    ],
  },
};

export const areaPages: Record<string, AreaPageData> = {
  "ortakoy-aksaray": {
    slug: "ortakoy-aksaray",
    metaTitle: "Ortaköy Aksaray Oto Lastik | 7/24 Mobil Servis ve Yol Yardım",
    metaDescription:
      "Ortaköy / Aksaray'da 7/24 oto lastik, mobil lastik servisi, lastik tamiri ve yol yardım hizmeti. Şen Oto Lastik ile hızlı ulaşım.",
    kicker: "Bölgesel Acil Destek",
    title: "Ortaköy / Aksaray 7/24 Oto Lastik Hizmeti",
    description:
      "Şen Oto Lastik, Ortaköy / Aksaray bölgesinde sürücülerin lastik kaynaklı acil ihtiyaçlarına hızlı çözüm sunar. Mobil servis yaklaşımı sayesinde bulunduğunuz noktaya ulaşıp müdahale ediyoruz.",
    highlights: [
      "Ortaköy ilçe merkezi ve çevresine hızlı yönlendirme",
      "Mobil lastik servisi ile yerinde çözüm",
      "Gece-gündüz açık telefon ve WhatsApp hattı",
      "Binek, hafif ticari ve büyük araç desteği",
    ],
    sections: [
      {
        title: "Ortaköy'de neden bizi arıyorlar?",
        paragraphs: [
          "Yolda kaldığınızda en önemli ihtiyaç hızlı ulaşım ve net iletişimdir. Şen Oto Lastik, sürücüyü gereksiz prosedürle oyalamadan doğrudan çözüm odaklı ilerler.",
          "İlçe içinde ve çevre bağlantı yollarında lokasyon paylaşımı ile daha hızlı müdahale sağlıyoruz.",
        ],
      },
      {
        title: "Verdiğimiz başlıca hizmetler",
        paragraphs: [
          "Patlak lastik tamiri, yerinde lastik değişimi, stepne montajı, mobil lastik servisi ve ticari araç lastik desteği sunuyoruz.",
          "Her çağrıda önce arızanın yapısını anlamaya çalışıyor, sonra en uygun ekipmanla yönleniyoruz.",
        ],
      },
      {
        title: "Yol üzeri acil destek",
        paragraphs: [
          "Ortaköy çevresindeki sürücüler çoğu zaman ana yol ya da ilçe girişi gibi noktalarda destek ister. Bu nedenle yol üstü acil duruşlarda hızlı hareket etmeye odaklıyız.",
          "Telefonla ulaşılamayan anlarda WhatsApp konum paylaşımı süreci ciddi şekilde hızlandırır.",
        ],
      },
    ],
    faqs: [
      {
        question: "Ortaköy içinde kaç dakikada geliyorsunuz?",
        answer:
          "Süre konuma ve yoğunluğa göre değişir; ancak Ortaköy içinde hızlı yönlendirme önceliğimizdir.",
      },
      {
        question: "Sadece otomobillere mi hizmet var?",
        answer:
          "Hayır. Hafif ticari araçlar, kamyonet, kamyon ve tır grubuna da destek sağlıyoruz.",
      },
      {
        question: "WhatsApp'tan yazınca dönüş oluyor mu?",
        answer:
          "Evet. WhatsApp üzerinden yazabilir, konum gönderebilir ve hızlı dönüş alabilirsiniz.",
      },
    ],
  },
  "aksaray-merkez": {
    slug: "aksaray-merkez",
    metaTitle: "Aksaray Merkez Oto Lastik ve Yol Yardım | Şen Oto Lastik",
    metaDescription:
      "Aksaray Merkez bölgesinde 7/24 oto lastik tamiri, lastik değişimi, mobil lastik servisi ve yol yardım desteği.",
    kicker: "Merkez Bölge Servisi",
    title: "Aksaray Merkez Yol Yardım ve Mobil Lastik Servisi",
    description:
      "Aksaray Merkez'de aniden gelişen lastik arızalarında hızlı destek almak için Şen Oto Lastik'e ulaşabilirsiniz. Şehir içi kullanım, iş çıkışı arızaları ve gece yol yardım taleplerinde yanınızdayız.",
    highlights: [
      "Şehir içinde hızlı rota planı",
      "Patlak lastik ve değişim desteği",
      "İş yeri, otopark ve yol kenarında müdahale",
      "7/24 çağrı ve WhatsApp erişimi",
    ],
    sections: [
      {
        title: "Aksaray Merkez'de mobil destek avantajı",
        paragraphs: [
          "Şehir içinde lastik arızası yaşandığında aracı servise götürmek her zaman kolay olmaz. Mobil servis yaklaşımı, aracı bekletmeden bulunduğu noktada çözüm üretmeyi hedefler.",
          "Özellikle yoğun saatlerde hızlı yönlendirme ve yerinde müdahale sürücüler için ciddi zaman kazancı sağlar.",
        ],
      },
      {
        title: "İş çıkışı ve gece lastik sorunlarında çözüm",
        paragraphs: [
          "Aksaray Merkez'de akşam saatlerinde yaşanan lastik problemleri sürücüyü zor durumda bırakabilir. 7/24 hizmet verdiğimiz için gece geç saatte de dönüş sağlıyoruz.",
          "Telefonla kısa bilgi ve konum paylaşımı sonrası en doğru ekip yönlendirilir.",
        ],
      },
      {
        title: "Binek ve ticari araçlar için hizmet",
        paragraphs: [
          "Otomobil, hafif ticari ve ihtiyaç halinde daha büyük araç grupları için lastik değişimi, tamir ve yol yardım desteği sunuyoruz.",
          "Bu sayede hem bireysel kullanıcı hem de esnaf/ticari kullanıcı için sahada çözüm üretebiliyoruz.",
        ],
      },
    ],
    faqs: [
      {
        question: "Aksaray Merkez'de gece hizmet veriyor musunuz?",
        answer:
          "Evet. 7/24 hizmet verdiğimiz için gece saatlerinde de çağrı alıyoruz.",
      },
      {
        question: "Otoparkta lastik değişimi yapıyor musunuz?",
        answer:
          "Uygun koşullarda evet. Araç konumu ve güvenlik durumuna göre yerinde destek sağlıyoruz.",
      },
      {
        question: "Merkezde ticari araç desteği var mı?",
        answer:
          "Evet. Hafif ticari araçlar başta olmak üzere ticari araç kullanıcılarına da destek veriyoruz.",
      },
    ],
  },
};
