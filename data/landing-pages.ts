import type { FaqGroup, LandingPage, RelatedLink } from "@/data/types";

const baseServiceLinks: RelatedLink[] = [
  {
    label: "7/24 Yol Yardım",
    href: "/yol-yardim",
    description: "Acil çağrılarda nasıl hızlı yönlendirme yaptığımızı görün.",
  },
  {
    label: "Mobil Lastik Servisi",
    href: "/mobil-lastik-servisi",
    description: "Bulunduğunuz noktaya gelen servis modelini inceleyin.",
  },
  {
    label: "Lastik Tamiri",
    href: "/lastik-tamiri",
    description: "Patlak ve hava kaçağı sorunlarında yerinde çözüm akışını okuyun.",
  },
  {
    label: "Lastik Değişimi",
    href: "/lastik-degisimi",
    description: "Stepne değişimi ve yerinde lastik değişimi hizmet detayları.",
  },
];

const citySupportLinks: RelatedLink[] = [
  {
    label: "Aksaray Yol Yardım",
    href: "/aksaray-yol-yardim",
    description: "Aksaray merkez odaklı saha organizasyon sayfasına geçin.",
  },
  {
    label: "Ortaköy Oto Lastik",
    href: "/ortakoy-oto-lastik",
    description: "Ortaköy merkezli oto lastik ve yol yardım sayfamızı görün.",
  },
  {
    label: "Niğde Yol Yardım",
    href: "/nigde-yol-yardim",
    description: "Niğde ve çevresindeki saha desteği sayfamıza bakın.",
  },
];

const otobanSupportLink: RelatedLink = {
  label: "Ankara - Niğde Otobanı Yol Yardım",
  href: "/ankara-nigde-otobani-yol-yardim",
  description: "Otoban hattına özel yoğun yol yardım sayfamızı inceleyin.",
};

const buildFaqGroups = (
  place: string,
  arrivalAnswer: string,
  serviceAnswer: string,
): FaqGroup[] => [
  {
    title: "Sık sorulan sorular",
    items: [
      {
        question: `${place} için gece hizmetiniz var mı?`,
        answer:
          `${place} odaklı acil çağrılarda 7/24 destek planlıyoruz. Net yönlendirme için telefonla ulaşıp konum paylaşmanız yeterlidir.`,
      },
      {
        question: "Bulunduğum noktaya gelir misiniz?",
        answer: arrivalAnswer,
      },
      {
        question: "Ticari araçlara destek veriyor musunuz?",
        answer:
          "Evet. Hafif ticari, kamyonet, kamyon ve tır grubu için aracın durumuna göre uygun ekipmanla planlama yapıyoruz.",
      },
      {
        question: "Hangi işlemler yerinde yapılabiliyor?",
        answer: serviceAnswer,
      },
    ],
  },
];

const servicePages: LandingPage[] = [
  {
    slug: "yol-yardim",
    type: "service",
    metaTitle: "Aksaray 7/24 Yol Yardım | Şen Oto Lastik",
    metaDescription:
      "Aksaray, Ortaköy ve Ankara - Niğde Otobanı hattında 7/24 yol yardım, patlak lastik desteği, stepne değişimi ve mobil müdahale için Şen Oto Lastik'e ulaşın.",
    title: "Aksaray'da 7/24 Yol Yardım",
    eyebrow: "Yerel Hizmet SEO",
    badge: "Ankara - Niğde Otobanı Dahil Hizmet",
    description:
      "Yolda kaldığınız anda Aksaray ve yakın hatlarda hızlı yönlendirme, yerinde lastik desteği ve güven veren iletişim sunuyoruz.",
    intro:
      "Şen Oto Lastik, Ortaköy / Aksaray çıkışlı saha organizasyonu ile patlak lastik, hava kaçağı, stepne değişimi ve acil yol yardımı tek hattan yönetir. Amaç sadece gelmek değil; telefonda doğru bilgiyi alıp en kısa sürede çözümü sahaya taşımaktır.",
    image: "/images/aksaray-yol-yardim.jpg",
    imageAlt: "Aksaray yol yardım hizmeti veren saha aracı ve lastik müdahalesi",
    highlights: [
      "7/24 çağrı ve hızlı yönlendirme",
      "Ankara - Niğde Otobanı dahil yakın hatlarda destek",
      "Patlak lastik, stepne değişimi ve mobil müdahale",
    ],
    quickFacts: ["7/24 aktif", "Yerinde destek", "Ticari araç uyumlu"],
    sections: [
      {
        title: "Acil durumda önce net yönlendirme",
        paragraphs: [
          "Yol yardım çağrılarında en kritik konu zaman kaybını önlemektir. Bu yüzden araç tipi, lastik sorunu ve bulunduğunuz nokta telefonda hızla netleştirilir; ardından uygun ekipmanla saha ekibi çıkarılır.",
          "Özellikle gece saatlerinde veya şehirler arası güzergahlarda lastik sorununun büyümemesi için yerinde müdahale öncelikli düşünülür. Gerekirse stepne değişimi, gerekirse lastik tamiri ile araç güvenli şekilde yola döndürülür.",
        ],
        bullets: [
          "Patlak lastik ve hava kaçağına müdahale",
          "Stepne değişimi ve sökme-takma desteği",
          "Binek ve ticari araçlara göre ekipman planı",
        ],
      },
      {
        title: "Aksaray ve Ankara - Niğde hattında aktif saha planı",
        paragraphs: [
          "Ortaköy merkezli operasyon, Aksaray içi ve bağlantı yollarında daha hızlı rota kurulmasını sağlar. Uygun durumlarda Ankara - Niğde Otobanı tarafındaki çağrılar da aynı hız mantığıyla planlanır.",
          "Şehir içi, ilçe çıkışı ya da otoban geçişlerinde gelen çağrılarda yol durumuna göre en doğru servis modeli belirlenir: tamir, değişim ya da mobil lastik servisi.",
        ],
      },
      {
        title: "Hangi araçlara hizmet veriyoruz",
        paragraphs: [
          "Otomobil, hafif ticari, SUV, kamyonet ve uygun durumlarda daha ağır araç grupları için lastik destek planı oluşturuyoruz. Ticari araçlarda zaman kaybı daha yüksek olduğu için hızlı müdahale ve doğru ekipman seçimi daha da kritik hale gelir.",
        ],
      },
    ],
    faqGroups: buildFaqGroups(
      "Aksaray yol yardım çağrıları",
      "Uygun rotada kalan çağrılarda ekibimiz doğrudan konuma yönlendirilir. Konumunuzu telefonla tarif etmeniz veya WhatsApp üzerinden canlı konum göndermeniz yeterlidir.",
      "Patlak lastik tamiri, stepne değişimi, sökme-takma ve mobil lastik desteği sahada yapılabilir. Duruma göre en güvenli çözüm yöntemi belirlenir.",
    ),
    relatedLinks: [otobanSupportLink, ...baseServiceLinks.slice(1), ...citySupportLinks],
    ctaTitle: "Aksaray'da yol yardım mı gerekiyor?",
    ctaText:
      "Yolda kaldıysanız zaman kaybetmeyin. Telefonla konumunuzu paylaşın, Şen Oto Lastik en uygun müdahale planını hemen oluştursun.",
    callout: "Acil çağrılarda önce arama, ardından WhatsApp konumu en hızlı akıştır.",
    keywords: [
      "aksaray yol yardım",
      "aksaray yol yardım 7/24",
      "ortaköy yol yardım",
      "ankara niğde otobanı yol yardım",
      "niğde otobanı yol yardım",
    ],
  },
  {
    slug: "ankara-nigde-otobani-yol-yardim",
    type: "service",
    metaTitle: "Ankara - Niğde Otobanı Yol Yardım | 7/24 Şen Oto Lastik",
    metaDescription:
      "Ankara - Niğde Otobanı'nda yol yardım, mobil lastik servisi, stepne değişimi ve patlak lastik desteği için Şen Oto Lastik ile 7/24 iletişime geçin.",
    title: "Ankara - Niğde Otobanı'nda 7/24 Yol Yardım",
    eyebrow: "Otoban Hattı",
    badge: "Yoğun Destek Hattı",
    description:
      "Otoban üzerinde yolda kalan sürücüler için hızlı iletişim, net konum teyidi ve uygun saha planı sunuyoruz.",
    intro:
      "Ankara - Niğde Otobanı'nda yaşanan lastik sorunu ya da yol yardım ihtiyacında en kritik konu hızlı iletişimdir. Şen Oto Lastik, Ortaköy / Aksaray çıkışlı saha mantığıyla bu hatta gelen çağrıları ayrı bir yoğunluk içinde değerlendirir; patlak lastik, stepne değişimi ve mobil müdahale ihtiyacını net bilgiyle yönetir.",
    image: "/images/aksaray-yol-yardim.jpg",
    imageAlt: "Ankara - Niğde Otobanı yol yardım saha desteği görseli",
    highlights: [
      "Ankara - Niğde Otobanı üzerinde yoğun yol yardım odağı",
      "Telefon + canlı konum ile hızlı lokasyon teyidi",
      "Stepne, tamir ve mobil lastik müdahalesi",
    ],
    quickFacts: ["7/24 canlı hat", "Otoban odaklı", "Yerinde müdahale"],
    sections: [
      {
        title: "Otobanda ilk ihtiyaç hız değil netliktir",
        paragraphs: [
          "Emniyet şeridinde ya da bağlantı noktasında kalan sürücü için ilk adım panik değil, doğru yönlendirme olmalıdır. Bu yüzden çağrının ilk anında araç tipi, konum, lastik sorunu ve güvenli bekleme noktası netleştirilir.",
          "Şen Oto Lastik, otoban çağrılarında gereksiz söz kalabalığı yerine pratik bilgi akışı ile ilerler. Kullanıcı nerede olduğunu ve sorunun ne olduğunu net verdiğinde saha planı çok daha hızlı kurulur.",
        ],
        bullets: [
          "Canlı konum ile hızlı teyit",
          "Patlak lastik ve stepne desteği",
          "Uygun hatta mobil lastik müdahalesi",
        ],
      },
      {
        title: "Ankara - Niğde Otobanı'nda hangi destekler öne çıkar",
        paragraphs: [
          "Bu hatta en sık gelen talepler yol yardım, yerinde lastik değişimi, stepne uygulaması ve patlak lastik değerlendirmesidir. Hasarın durumuna göre tamir, değişim ya da farklı yönlendirme açık şekilde paylaşılır.",
          "Gece sürüşü ve şehirler arası kullanım arttıkça otoban çağrılarında hızlı cevap vermek daha da kritik hale gelir. Bu sayfanın kurgusu da tam olarak bu niyet etrafında hazırlandı.",
        ],
      },
      {
        title: "Aksaray çıkışlı saha mantığı neden avantaj sağlar",
        paragraphs: [
          "Ortaköy / Aksaray merkezli yapı, otoban hattındaki uygun noktalara daha gerçekçi ve hızlı bir rota planı kurulmasını sağlar. Müsaitlik, trafik ve konum netleştiğinde ekip yönlendirmesi gecikmeden paylaşılır.",
        ],
      },
    ],
    faqGroups: buildFaqGroups(
      "Ankara - Niğde Otobanı",
      "Evet. Uygun rota ve anlık yoğunluk durumunda otoban üzerindeki konumunuza doğrudan yönlendirme yapıyoruz. Telefon veya WhatsApp üzerinden canlı konum paylaşmanız süreci hızlandırır.",
      "Stepne değişimi, patlak lastik değerlendirmesi, mobil lastik müdahalesi ve uygun durumlarda yerinde tamir bu hatta planlanabilir.",
    ),
    relatedLinks: [...baseServiceLinks, citySupportLinks[0], citySupportLinks[2]],
    ctaTitle: "Otobanda kaldıysanız tek arama yeterli",
    ctaText:
      "Ankara - Niğde Otobanı üzerinde destek gerekiyorsa hemen arayın. Konum, araç tipi ve lastik sorununu alıp en doğru yönlendirmeyi gecikmeden paylaşalım.",
    callout: "Bu sayfa doğrudan Ankara - Niğde Otobanı yol yardım aramalarına cevap vermek için hazırlandı.",
    keywords: [
      "ankara niğde otobanı yol yardım",
      "ankara niğde otobanı lastikçi",
      "ankara niğde otobanı mobil lastik servisi",
      "niğde otobanı yol yardım",
    ],
  },
  {
    slug: "mobil-lastik-servisi",
    type: "service",
    metaTitle: "Aksaray Mobil Lastik Servisi | Yerinde Lastik Desteği",
    metaDescription:
      "Aksaray, Ortaköy ve Ankara - Niğde Otobanı hattında mobil lastik servisi, yerinde sökme-takma, lastik değişimi ve acil yol yardımı için 7/24 ulaşın.",
    title: "Aksaray Mobil Lastik Servisi",
    eyebrow: "Mobil Müdahale",
    badge: "Konuma Gelen Servis",
    description:
      "Servise gitmek zorunda kalmadan, bulunduğunuz noktada profesyonel lastik müdahalesi alın.",
    intro:
      "Mobil lastik servisi, özellikle yolda kalındığında ya da aracı hareket ettirmek riskli olduğunda en pratik çözümdür. Şen Oto Lastik; Ortaköy, Aksaray ve Ankara - Niğde Otobanı hattında konuma gelerek lastik tamiri, değişimi ve acil müdahale desteği sağlar.",
    image: "/images/mobil-lastik-servisi.jpg",
    imageAlt: "Mobil lastik servisi ekibinin yerinde lastik değişimi yapması",
    highlights: [
      "Konuma gelen saha desteği",
      "Ankara - Niğde Otobanı'nda da hızlı değerlendirme",
      "Patlak, hava kaçağı ve sökme-takma işlemleri",
    ],
    quickFacts: ["Konuma servis", "7/24 destek", "Hızlı saha planı"],
    sections: [
      {
        title: "Yerinde müdahale neden avantajlıdır",
        paragraphs: [
          "Aracın hareket etmesinin güvenli olmadığı durumlarda mobil servis hem zaman hem de güvenlik açısından avantaj sağlar. Özellikle patlak lastik sonrası yanlış kullanımın büyümemesi için hızlı müdahale önemlidir.",
          "Şen Oto Lastik, servise çekme gereksinimini azaltmak için mümkün olan işlemleri doğrudan bulunduğunuz noktada tamamlamaya odaklanır.",
        ],
        bullets: [
          "Yerinde lastik sökme ve takma",
          "Stepne uygulaması ve değişim",
          "Hava kaçağı tespiti ve uygun tamir yönlendirmesi",
        ],
      },
      {
        title: "Mobil serviste hangi durumlarda aramalısınız",
        paragraphs: [
          "Yolda kalma, işe yetişme baskısı, ticari araç teslimatı ya da gece saatlerinde en yakın servisi aramak istememe gibi durumlarda mobil lastik servisi çok daha hızlı sonuç verir.",
          "Özellikle ticari araç kullanıcıları için lokasyonda çözüm almak operasyon kaybını azaltır. Bu nedenle çağrının başında araç tipi ve lastik ölçüsünün paylaşılması süreci hızlandırır.",
        ],
      },
      {
        title: "Aksaray ve Ankara - Niğde otoban hattında pratik iletişim",
        paragraphs: [
          "Telefonla ilk yönlendirme alındıktan sonra canlı konum gönderildiğinde ekibin rota planı çok daha net hale gelir. Böylece kullanıcı kısa sürede hangi müdahalenin yapılacağını bilir ve bekleme stresi azalır.",
        ],
      },
    ],
    faqGroups: buildFaqGroups(
      "Mobil lastik servisi çağrıları",
      "Uygun mesafedeki çağrılarda evet. Aksaray, Ortaköy ve Ankara - Niğde Otobanı hattında telefon ile konum doğrulaması sonrası doğrudan bulunduğunuz noktaya gelinir.",
      "Yerinde lastik değişimi, stepne uygulaması, patlak lastik müdahalesi ve sökme-takma işlemleri mobil servis kapsamında planlanır.",
    ),
    relatedLinks: [
      otobanSupportLink,
      baseServiceLinks[0],
      baseServiceLinks[2],
      baseServiceLinks[3],
      citySupportLinks[2],
    ],
    ctaTitle: "Mobil lastik servisi için tek arama yeterli",
    ctaText:
      "Aracınızın yanına servis gelsin istiyorsanız hemen arayın. Konum, araç tipi ve sorun bilgisini alıp en doğru saha planını çıkaralım.",
    callout: "Mobil servis, servise gitmenin zor ya da riskli olduğu anlarda en hızlı çözümdür.",
    keywords: [
      "mobil lastik servisi",
      "aksaray mobil lastik servisi",
      "yerinde lastik değişimi",
      "ankara niğde otobanı mobil lastik servisi",
      "niğde otobanı mobil lastik servisi",
    ],
  },
  {
    slug: "lastik-tamiri",
    type: "service",
    metaTitle: "Aksaray Lastik Tamiri | Yerinde Oto Lastik Tamiri",
    metaDescription:
      "Aksaray, Ortaköy ve Ankara - Niğde Otobanı hattında oto lastik tamiri, patlak lastik onarımı ve hava kaçağı için Şen Oto Lastik'e 7/24 ulaşın.",
    title: "Aksaray Oto Lastik Tamiri",
    eyebrow: "Tamir Hizmeti",
    badge: "Patlak Lastiğe Hızlı Çözüm",
    description:
      "Çivi, kesik, hava kaçağı ve patlak gibi sorunlarda lastiği doğru yöntemle değerlendirip müdahale ediyoruz.",
    intro:
      "Her patlak lastik değişim gerektirmez. Uygun durumlarda tamir ile güvenli şekilde yola devam etmek mümkündür. Şen Oto Lastik, Aksaray, Ortaköy ve Ankara - Niğde Otobanı hattında oto lastik tamiri taleplerinde duruma göre yerinde çözüm ya da güvenli yönlendirme sunar.",
    image: "/images/yerinde-lastik-degisimi.jpg",
    imageAlt: "Yerinde oto lastik tamiri ve lastik kontrolü yapan ekip",
    highlights: [
      "Çivi ve hava kaçağı tespiti",
      "Uygun durumlarda yerinde tamir",
      "Gece ve gündüz telefon desteği",
    ],
    quickFacts: ["Patlak kontrolü", "Yerinde değerlendirme", "Ticari araç desteği"],
    sections: [
      {
        title: "Tamir mi değişim mi doğru seçenek",
        paragraphs: [
          "Lastik sorununun yeri, büyüklüğü ve lastiğin genel durumu tamir kararını belirler. Yanak bölgesindeki hasarlar ile daha derin sorunlarda güvenli kullanım için değişim gerekebilir.",
          "Bu nedenle telefonda alınan ilk bilgi önemlidir, ancak nihai karar sahadaki kontrol ile verilir. Şen Oto Lastik kullanıcıyı gereksiz işlem yerine güvenli çözüme yönlendirmeyi hedefler.",
        ],
      },
      {
        title: "Yerinde tamirde amaç hızlı ama kontrollü sonuç",
        paragraphs: [
          "Yolda kalındığında ilk refleks hızlı çözüm aramak olur. Ancak kötü uygulanmış bir tamir, kısa süre sonra aynı sorunun tekrar etmesine neden olabilir. Bizim yaklaşımımız, önce güvenlik sonra hız mantığı ile ilerlemektir.",
          "Uygun durumlarda yerinde tamir yapılıyor; uygun değilse lastik değişimi ya da sonraki adım net şekilde kullanıcıya aktarılıyor.",
        ],
        bullets: [
          "Patlak noktasının tespiti",
          "Hava kaçağının kaynak kontrolü",
          "Tamir uygun değilse değişim önerisi",
        ],
      },
      {
        title: "Kimler en sık lastik tamiri talep ediyor",
        paragraphs: [
          "Şehir içinde hızlı hareket eden kullanıcılar, ticari araç sürücüleri ve gece yolculuğunda olan sürücüler lastik tamiri talebini en çok oluşturan gruplardır. Zaman kaybını azaltmak için ilk iletişimde araç tipi ve mevcut lastik durumu bilgisini vermek büyük avantaj sağlar.",
        ],
      },
    ],
    faqGroups: buildFaqGroups(
      "Lastik tamiri çağrıları",
      "Evet, uygun lokasyon ve hasar tipinde konuma gelerek lastiği yerinde değerlendiriyoruz. Gerekirse tamir yerine değişim öneriyoruz.",
      "Patlak tamiri, hava kaçağı tespiti ve lastik zararını büyütmeden yapılabilecek bazı müdahaleler yerinde uygulanabilir.",
    ),
    relatedLinks: [
      otobanSupportLink,
      baseServiceLinks[0],
      baseServiceLinks[1],
      baseServiceLinks[3],
      citySupportLinks[2],
    ],
    ctaTitle: "Patlak lastiği büyümeden çözelim",
    ctaText:
      "Hava kaçıran ya da çivi giren lastiğiniz varsa hemen arayın. Uygun durumlarda yerinde tamir ile sizi hızlıca yola döndürelim.",
    callout: "Doğru tamir, gereksiz lastik değişiminden daha ekonomik ve güvenli olabilir.",
    keywords: [
      "lastik tamiri",
      "aksaray lastik tamiri",
      "oto lastik tamiri",
      "ankara niğde otobanı lastik tamiri",
      "niğde otobanı lastik tamiri",
    ],
  },
  {
    slug: "lastik-degisimi",
    type: "service",
    metaTitle: "Aksaray Yerinde Lastik Değişimi | 7/24 Lastik Değişimi",
    metaDescription:
      "Aksaray, Ortaköy ve Ankara - Niğde Otobanı hattında yerinde lastik değişimi, stepne değişimi ve 7/24 mobil lastik desteği için Şen Oto Lastik'i arayın.",
    title: "Aksaray'da Yerinde Lastik Değişimi",
    eyebrow: "Değişim Hizmeti",
    badge: "7/24 Lastik Değişimi",
    description:
      "Yolda kaldığınız anda lastiği bulunduğunuz noktada değiştirip güvenli şekilde hareket etmenizi sağlıyoruz.",
    intro:
      "Stepne değişimi bazen basit görünür; ancak emniyet şeridi, gece sürüşü ya da ağır araçlarda bu işlem profesyonel müdahale gerektirir. Şen Oto Lastik, Aksaray ve çevresinde yerinde lastik değişimi ile sürücünün işini hızlandırır ve riski azaltır.",
    image: "/images/yerinde-lastik-degisimi.jpg",
    imageAlt: "Aksaray'da yerinde lastik değişimi yapılan araç",
    highlights: [
      "Stepne değişimi ve lastik sökme-takma",
      "Gece ve acil saatlerde destek",
      "Ankara - Niğde Otobanı dahil saha planı",
    ],
    quickFacts: ["Stepne desteği", "Acil değişim", "Saha ekipmanı"],
    sections: [
      {
        title: "Stepne varsa süreç çok daha hızlı ilerler",
        paragraphs: [
          "Yolda lastik değişimi gerektiğinde ilk soru stepne durumudur. Stepnenin hazır olması müdahale süresini ciddi ölçüde kısaltır ve sizi kısa sürede yeniden hareket ettirir.",
          "Stepne yoksa lastiğin tamir edilebilirliği değerlendirilir ya da en güvenli alternatif kullanıcıya aktarılır.",
        ],
      },
      {
        title: "Yerinde değişim hangi durumlarda kritik hale gelir",
        paragraphs: [
          "Gece saatleri, kötü hava koşulları, yoğun yol kenarı trafiği veya ticari araç teslimat baskısı gibi durumlarda lastik değişimini tek başına yapmak hem zor hem risklidir.",
          "Şen Oto Lastik, bu tip senaryolarda gerekli ekipmanla gelerek sürücünün vakit kaybetmeden yoluna devam etmesine yardımcı olur.",
        ],
        bullets: [
          "Emniyetli müdahale noktası oluşturma",
          "Lastiğin güvenli sökülmesi ve takılması",
          "Değişim sonrası kısa kontrol",
        ],
      },
      {
        title: "Aksaray ve Ankara - Niğde otoban geçişlerinde 7/24 destek",
        paragraphs: [
          "Ortaköy / Aksaray çıkışlı saha desteğimiz, merkez ve çevre bağlantı yollarında lastik değişimi ihtiyacını hızlı karşılamak için planlanır. Uygun rotada kalan Ankara - Niğde Otobanı çağrıları da aynı sistem içinde değerlendirilir.",
        ],
      },
    ],
    faqGroups: buildFaqGroups(
      "Yerinde lastik değişimi çağrıları",
      "Uygun saha mesafesinde evet. Telefonla araç tipi ve bulunduğunuz nokta paylaşıldığında ekip doğrudan konuma yönlendirilir.",
      "Stepne değişimi, sökme-takma ve uygun durumlarda lastik tamiri ile değişim gereksinimi sahada çözülebilir.",
    ),
    relatedLinks: [
      otobanSupportLink,
      baseServiceLinks[0],
      baseServiceLinks[1],
      baseServiceLinks[2],
      citySupportLinks[0],
    ],
    ctaTitle: "7/24 lastik değişimi için hemen ulaşın",
    ctaText:
      "Stepne değişimi ya da yerinde lastik değişimi gerekiyorsa vakit kaybetmeyin. Telefonla arayın, bulunduğunuz noktaya en hızlı şekilde yönlendirme yapalım.",
    callout: "Yol kenarında kendi başınıza uğraşmak yerine profesyonel destekle daha güvenli ilerleyin.",
    keywords: [
      "lastik değişimi",
      "7/24 lastik değişimi",
      "yerinde lastik değişimi",
      "aksaray lastik değişimi",
    ],
  },
  {
    slug: "aksaray-yol-yardim",
    type: "local",
    metaTitle: "Aksaray Yol Yardım 7/24 | Şen Oto Lastik",
    metaDescription:
      "Aksaray yol yardım 7/24 hizmeti, mobil lastik servisi, yerinde lastik değişimi ve oto lastik tamiri için Şen Oto Lastik'e ulaşın.",
    title: "Aksaray Yol Yardım 7/24",
    eyebrow: "Aksaray Yerel Sayfa",
    badge: "Aksaray Merkez Operasyon",
    description:
      "Aksaray'da yol yardım arayan sürücüler için hızlı ulaşım, yerinde lastik desteği ve güven veren saha organizasyonu.",
    intro:
      "Aksaray yol yardım aramalarında kullanıcıların en çok beklediği şey hızlı yanıt ve net iletişimdir. Şen Oto Lastik, Ortaköy merkezli saha organizasyonu ile Aksaray merkez ve çevre güzergahlarda 7/24 destek planlar; patlak lastik, stepne değişimi ve mobil servis taleplerini tek hattan karşılar.",
    image: "/images/aksaray-yol-yardim.jpg",
    imageAlt: "Aksaray yol yardım 7/24 saha desteği görseli",
    highlights: [
      "Aksaray merkez ve ilçe bağlantılarına hızlı yönlendirme",
      "Mobil lastik servisi ve yerinde değişim",
      "Telefon ve WhatsApp ile kolay konum akışı",
    ],
    quickFacts: ["Aksaray odaklı", "7/24 açık", "Yerinde çözüm"],
    sections: [
      {
        title: "Aksaray'da yol yardım arayanlar ne bekliyor",
        paragraphs: [
          "Acil çağrıda kullanıcı için en kritik konu önce cevap almak, sonra ne kadar sürede destek geleceğini bilmek olur. Biz bu yüzden aramanın ilk dakikasında sorunu sınıflandırıyor; lastik tamiri, değişim veya mobil servis ihtiyacını netleştiriyoruz.",
          "Bu yaklaşım hem sürücünün stresini azaltıyor hem de yanlış ekipmanla yola çıkma riskini düşürüyor.",
        ],
      },
      {
        title: "Şehir içi ve bağlantı yollarında pratik çözüm",
        paragraphs: [
          "Aksaray merkez, sanayi çevresi, ilçe yolları ve bağlantı güzergahlarında çağrı yoğunluğu farklılık gösterir. Bölgeyi bilen ekip yapısı bu farklılıklara göre daha gerçekçi varış planı yapılmasına yardımcı olur.",
          "Mobil lastik servisi gereken durumlarda konuma gidilir; yalnızca bilgi taleplerinde ise telefonda yönlendirme verilerek süreç hızlandırılır.",
        ],
      },
      {
        title: "Bu sayfadan nereye geçilir",
        paragraphs: [
          "Bu sayfa özellikle yol yardım arayan kullanıcıyı mobil lastik servisi, lastik tamiri ve yerinde lastik değişimi sayfalarına yönlendirmek için kurgulandı. Böylece arama niyetine göre daha spesifik bilgiye hızlıca ulaşılabilir.",
        ],
      },
    ],
    faqGroups: buildFaqGroups(
      "Aksaray",
      "Evet. Aksaray merkez ve uygun çevre güzergahlarda gelen çağrılarda ekibimiz doğrudan konuma yönlendirilir.",
      "Yol yardım kapsamında lastik tamiri, lastik değişimi, stepne desteği ve mobil lastik servisi planlanabilir.",
    ),
    relatedLinks: [...baseServiceLinks, otobanSupportLink, citySupportLinks[1], citySupportLinks[2]],
    ctaTitle: "Aksaray'da acil lastik desteği mi lazım?",
    ctaText:
      "Bulunduğunuz noktayı paylaşın, Aksaray yol yardım hattımız çağrınızı hızla değerlendirsin. Tek hedefimiz sizi bekletmeden çözüme ulaştırmak.",
    callout: "Google'da Aksaray yol yardım arayan kullanıcılar için hızlı, net ve yerel bir çözüm sayfası.",
    keywords: [
      "aksaray yol yardım",
      "aksaray yol yardım 7/24",
      "aksaray mobil lastik servisi",
      "aksaray lastik değişimi",
    ],
  },
  {
    slug: "ortakoy-oto-lastik",
    type: "local",
    metaTitle: "Ortaköy Oto Lastik | Şen Oto Lastik Aksaray",
    metaDescription:
      "Ortaköy / Aksaray oto lastik, mobil lastik servisi, lastik tamiri, lastik değişimi ve yol yardım için 7/24 Şen Oto Lastik'e ulaşın.",
    title: "Ortaköy Oto Lastik Hizmetleri",
    eyebrow: "Ortaköy Yerel Sayfa",
    badge: "Ortaköy / Aksaray",
    description:
      "Ortaköy'de oto lastik, yol yardım ve mobil servis ihtiyacında hızlı dönüş yapan yerel saha desteği.",
    intro:
      "Ortaköy oto lastik arayan kullanıcı çoğu zaman yalnızca bir dükkân değil, gerektiğinde bulunduğu noktaya ulaşabilecek bir ekip arar. Şen Oto Lastik, Ortaköy / Aksaray merkezli yapısıyla hem yerel oto lastik ihtiyaçlarına hem de acil yol yardım taleplerine cevap verir.",
    image: "/images/ortakoy-oto-lastik.jpg",
    imageAlt: "Ortaköy oto lastik atölyesi ve lastik servis alanı",
    highlights: [
      "Ortaköy merkezli yerel hizmet algısı",
      "Mobil lastik servisi ve yol yardım bağlantısı",
      "Lastik tamiri ve değişimi için hızlı yönlendirme",
    ],
    quickFacts: ["Ortaköy merkezli", "Atölye + saha desteği", "7/24 iletişim"],
    sections: [
      {
        title: "Yerel oto lastik markası gibi görünmek yetmez",
        paragraphs: [
          "Kullanıcı için güven veren unsur sadece lokasyon değil, ihtiyaca göre çözüm sunabilmektir. Ortaköy'de lastik tamiri arayan biri ile yolda kalan sürücünün ihtiyacı farklıdır; bu yüzden sayfayı hem atölye hem mobil destek algısını güçlendirecek şekilde kurguladık.",
          "Ortaköy merkezli olmak, çevre yollar ve Aksaray genelinde daha hızlı saha planı yapılmasını destekler.",
        ],
      },
      {
        title: "Hangi hizmetler öne çıkıyor",
        paragraphs: [
          "Oto lastik tamiri, yerinde lastik değişimi, mobil lastik servisi ve yol yardım bu sayfanın ana odaklarıdır. Özellikle acil durumlarda tek hattan hızlı yönlendirme almak kullanıcı için büyük avantaj sağlar.",
        ],
        bullets: [
          "Yerel lastik tamiri",
          "Mobil değişim ve yol yardım",
          "Aksaray çıkışlı hızlı saha planı",
        ],
      },
      {
        title: "Google Maps ve yerel güven sinyali",
        paragraphs: [
          "Ortaköy / Aksaray adres bilgisinin, çalışma saatlerinin ve harita entegrasyonunun açık biçimde sunulması yerel SEO için önemlidir. Bu sayfa kullanıcıya hem fiziksel merkez hem de saha desteği modeli olduğunu net biçimde anlatır.",
        ],
      },
    ],
    faqGroups: buildFaqGroups(
      "Ortaköy / Aksaray",
      "Ortaköy ve çevresinde evet. Acil çağrılarda konum teyidi sonrası ekibimiz en uygun rota ile yönlendirilir.",
      "Lastik tamiri, stepne değişimi, yerinde lastik değişimi ve mobil lastik servisi ihtiyaçları bu hatta yönetilir.",
    ),
    relatedLinks: [...baseServiceLinks, otobanSupportLink, citySupportLinks[0], citySupportLinks[2]],
    ctaTitle: "Ortaköy oto lastik ve yol yardım için tek hat",
    ctaText:
      "Yerel bir işletme gibi hızlı cevap veren, sahada çözüm üreten bir ekiple ilerlemek istiyorsanız hemen arayın veya WhatsApp'tan yazın.",
    callout: "Bu sayfa yerel marka algısını güçlendirirken yol yardım intentini de destekler.",
    keywords: [
      "ortaköy oto lastik",
      "ortaköy lastikçi",
      "ortaköy mobil lastik servisi",
      "ortaköy yol yardım",
    ],
  },
];

type CityPageSeed = {
  slug: string;
  city: string;
  opening: string;
  routeDetail: string;
  note: string;
  secondaryKeyword: string;
};

const citySeeds: CityPageSeed[] = [
  {
    slug: "kirsehir-yol-yardim",
    city: "Kırşehir",
    opening:
      "Kırşehir hattında yolda kalan kullanıcılar çoğu zaman hızlı dönüş yapan, telefonda net bilgi veren bir servis arar.",
    routeDetail:
      "Şen Oto Lastik bu sayfada Kırşehir yol yardım aramalarını mobil lastik servisi, lastik tamiri ve Aksaray merkez operasyon hattımıza bağlayan doğal bir yapı sunuyor.",
    note:
      "Uygun mesafe ve rota durumunda Kırşehir tarafındaki çağrılar değerlendirilir; konum ve araç bilgisi verildiğinde süreç çok daha hızlı ilerler.",
    secondaryKeyword: "kırşehir mobil lastik servisi",
  },
  {
    slug: "kayseri-yol-yardim",
    city: "Kayseri",
    opening:
      "Kayseri yönlü aramalarda kullanıcılar büyük şehir temposuna uygun, hızlı cevap veren bir servis görmek ister.",
    routeDetail:
      "Bu sayfa Kayseri mobil lastik servisi ve yol yardım niyetini Aksaray çıkışlı saha destek yapımızla doğal biçimde buluşturur.",
    note:
      "Kayseri hattındaki çağrılar mesafe, trafik ve yol durumuna göre değerlendirilir; uygun plan oluştuğunda ekipman ve rota bilgisi hızlıca netleştirilir.",
    secondaryKeyword: "kayseri mobil lastik servisi",
  },
  {
    slug: "nevsehir-yol-yardim",
    city: "Nevşehir",
    opening:
      "Nevşehir tarafında turizm trafiği ve şehirler arası kullanım, yol yardım ihtiyacını daha görünür hale getirir.",
    routeDetail:
      "Bu içerik, Nevşehir yol yardım arayan kullanıcıya doğrudan mobil lastik servisi ve yerinde müdahale kabiliyetimizi anlatır.",
    note:
      "Nevşehir yönlü çağrılarda lokasyon, yol durumu ve araç tipi birlikte değerlendirilir. Uygun çağrılarda doğrudan saha yönlendirmesi yapılır.",
    secondaryKeyword: "nevşehir mobil lastik",
  },
  {
    slug: "nigde-yol-yardim",
    city: "Niğde",
    opening:
      "Niğde hattındaki kullanıcılar çoğunlukla şehirler arası yolda veya Ankara - Niğde Otobanı geçişinde acil lastik desteği arar.",
    routeDetail:
      "Niğde yol yardım sayfasında özellikle Ankara - Niğde Otobanı'nda full hizmet verdiğimizi, stepne değişimi ve patlak lastik desteğini öne çıkarıyoruz.",
    note:
      "Ankara - Niğde Otobanı ve yakın bölgelerdeki taleplerde çağrı uygunluğu rota ve anlık yoğunluğa göre netleşir. İlk aramada açık lokasyon bilgisi verilmesi müdahale hızını ciddi şekilde artırır.",
    secondaryKeyword: "niğde lastik değişimi",
  },
  {
    slug: "konya-yol-yardim",
    city: "Konya",
    opening:
      "Konya gibi geniş güzergah ağına sahip şehirlerde kullanıcı önce ulaşılabilir bir iletişim, sonra gerçekçi bir çözüm bekler.",
    routeDetail:
      "Konya mobil lastik ve yol yardım aramalarında saha desteği mantığını açık anlatan, güven odaklı bir içerik hazırladık.",
    note:
      "Konya yönlü çağrılar uzun mesafe ve güzergah durumuna göre değerlendirilir. Uygun plan oluştuğunda telefon ve WhatsApp üzerinden hızlı teyit alınır.",
    secondaryKeyword: "konya mobil lastik",
  },
  {
    slug: "ankara-yol-yardim",
    city: "Ankara",
    opening:
      "Ankara aramalarında kullanıcı özellikle Ankara - Niğde Otobanı üzerinde güvenilir ve samimi bir yol yardım alternatifi görmek ister.",
    routeDetail:
      "Bu sayfa Ankara yol yardım intentine karşılık verirken Ankara - Niğde Otobanı üzerindeki yoğun desteğimizi ve Şen Oto Lastik'in Aksaray merkezli saha bakışını net biçimde ortaya koyar.",
    note:
      "Ankara yönlü taleplerde rota uygunluğu ve yol planı hızlı şekilde değerlendirilir. Hangi tip desteğin mümkün olduğu ilk görüşmede açıkça paylaşılır.",
    secondaryKeyword: "ankara mobil lastik servisi",
  },
];

const cityPages: LandingPage[] = citySeeds.map((seed) => ({
  slug: seed.slug,
  type: "local",
  metaTitle: `${seed.city} Yol Yardım | 7/24 Mobil Lastik Desteği`,
  metaDescription: `${seed.city} yol yardım, mobil lastik servisi, yerinde lastik değişimi ve patlak lastik desteği için Şen Oto Lastik ile 7/24 iletişime geçin.`,
  title: `${seed.city} Yol Yardım`,
  eyebrow: "Şehir Landing Page",
  badge: `${seed.city} Hedeflemeli Sayfa`,
  description:
    `${seed.city} ve bağlantı güzergahlarında acil lastik desteği arayan kullanıcılar için hızlı iletişim ve pratik yönlendirme odaklı içerik.`,
  intro: `${seed.opening} ${seed.routeDetail} ${seed.note}`,
  image: "/images/aksaray-yol-yardim.jpg",
  imageAlt: `${seed.city} yol yardım aramalarına yönelik mobil lastik servis görseli`,
  highlights: [
    `${seed.city} yol yardım aramalarına uygun içerik`,
    "7/24 çağrı ve WhatsApp hattı",
    "Mobil lastik servisi ve yerinde değişim bağlantısı",
  ],
  quickFacts: ["7/24 iletişim", "Mobil destek", seed.secondaryKeyword],
  sections: [
    {
      title: `${seed.city} yol yardım aramalarında öne çıkan ihtiyaç`,
      paragraphs: [
        seed.opening,
        `${seed.city} için hazırlanan bu sayfada amaç, kullanıcının yalnızca bir telefon numarası değil; gerçekten hangi hizmeti alacağını anlayabileceği net bir yapı sunmaktır.`,
      ],
    },
    {
      title: `${seed.city} için hangi hizmetler öne çıkar`,
      paragraphs: [
        `Yol yardım, mobil lastik servisi, lastik tamiri ve yerinde lastik değişimi bu sayfanın ana hizmet kümeleridir. ${seed.routeDetail}`,
        `${seed.city} aramalarında kullanıcı niyeti çoğu zaman acildir; bu yüzden metinlerde dönüşüm odaklı ama doğal bir dil kullandık.`,
      ],
      bullets: [
        "Patlak lastik desteği",
        "Stepne değişimi",
        "Ticari araçlara uygun saha planı",
      ],
    },
    {
      title: `${seed.city} çağrılarında süreç nasıl ilerler`,
      paragraphs: [
        seed.note,
        `${seed.city} hedeflemeli bu sayfa, hem SEO değeri taşır hem de kullanıcıyı doğrudan arama veya WhatsApp temasına götürür.`,
      ],
    },
  ],
  faqGroups: buildFaqGroups(
    seed.city,
    seed.note,
    `${seed.city} odaklı çağrılarda yerinde lastik değişimi, patlak lastik tamiri ve mobil lastik servisi planlanabilir. Uygun çözüm araç tipi ve arıza durumuna göre belirlenir.`,
  ),
  relatedLinks: [...baseServiceLinks, otobanSupportLink, citySupportLinks[0], citySupportLinks[1]],
  ctaTitle: `${seed.city} için hızlı lastik desteği alın`,
  ctaText:
    `${seed.city} yol yardım veya ${seed.secondaryKeyword} ihtiyacınız varsa bizi arayın. Araç bilgisi ve konumla birlikte en doğru yönlendirmeyi hızla paylaşalım.`,
  callout: `${seed.city} sayfası doğal şehir bazlı SEO ve güçlü dönüşüm copy'si için veri odaklı üretildi.`,
  keywords: [
    `${seed.city.toLocaleLowerCase("tr-TR")} yol yardım`,
    seed.secondaryKeyword,
    `${seed.city.toLocaleLowerCase("tr-TR")} lastik değişimi`,
    `${seed.city.toLocaleLowerCase("tr-TR")} mobil lastik`,
  ],
}));

export const landingPages = [...servicePages, ...cityPages];

export const landingPageMap = new Map(landingPages.map((page) => [page.slug, page]));

export const landingPageSlugs = landingPages.map((page) => page.slug);
