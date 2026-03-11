import type { FaqGroup, LandingPage, RelatedLink } from "@/data/types";

const defaultLocalLinks: RelatedLink[] = [
  {
    label: "Mobil Lastik Servisi",
    href: "/mobil-lastik-servisi",
    description: "Bulunduğunuz noktada lastik sökme, takma ve acil müdahale alın.",
  },
  {
    label: "Lastik Tamiri",
    href: "/lastik-tamiri",
    description: "Patlak, çivi ve hava kaçağı sorunlarında hızlı çözüm sayfası.",
  },
  {
    label: "Lastik Değişimi",
    href: "/lastik-degisimi",
    description: "Stepne değişimi ve yerinde lastik değişimi hizmet detayları.",
  },
  {
    label: "Aksaray Yol Yardım",
    href: "/aksaray-yol-yardim",
    description: "Aksaray merkez odaklı yol yardım operasyon sayfası.",
  },
];

const defaultProductLinks: RelatedLink[] = [
  {
    label: "Jant Satışı",
    href: "/jant-satisi",
    description: "Türkiye geneli jant siparişi ve teklif detaylarını inceleyin.",
  },
  {
    label: "Jant Modelleri",
    href: "/jant-modelleri",
    description: "Araç tipine göre jant seçeneklerini ve ölçü aralıklarını görün.",
  },
  {
    label: "Jant Fiyatları",
    href: "/jant-fiyatlari",
    description: "Fiyatı etkileyen kriterleri ve teklif sürecini öğrenin.",
  },
  {
    label: "81 İle Jant Gönderimi",
    href: "/81-ile-jant-gonderimi",
    description: "Türkiye'nin tamamına yapılan jant gönderim modelini inceleyin.",
  },
];

const buildLocalFaqGroups = (
  placeLabel: string,
  travelAnswer: string,
  serviceAnswer: string,
): FaqGroup[] => [
  {
    title: "Sık sorulan sorular",
    items: [
      {
        question: `${placeLabel} için gece hizmetiniz var mı?`,
        answer:
          `${placeLabel} odaklı acil çağrılarda 7/24 destek planlıyoruz. Net yönlendirme için telefonla ulaşıp konum paylaşmanız yeterlidir.`,
      },
      {
        question: "Bulunduğum noktaya gelir misiniz?",
        answer: travelAnswer,
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

const buildProductFaqGroups = (categoryLabel: string): FaqGroup[] => [
  {
    title: "Sipariş ve gönderim",
    items: [
      {
        question: `${categoryLabel} için Türkiye geneline gönderim yapıyor musunuz?`,
        answer:
          "Evet. Jant siparişlerinde Türkiye'nin 81 iline teklif, sipariş onayı ve gönderim organizasyonu sağlıyoruz.",
      },
      {
        question: "Jant siparişi nasıl verilir?",
        answer:
          "Telefon veya WhatsApp üzerinden araç marka-model, ölçü ve görsel tercih bilgisi paylaşılır. Uygun seçenek ve fiyat ilettikten sonra sipariş süreci başlatılır.",
      },
      {
        question: "Stok ve model bilgisi nasıl öğrenilir?",
        answer:
          "En hızlı yöntem WhatsApp hattımıza araç bilgisi ve istediğiniz jant ölçüsünü göndermektir. Böylece uygun model ve teslimat bilgisi daha hızlı netleşir.",
      },
      {
        question: "Sadece Aksaray'a mı satış yapıyorsunuz?",
        answer:
          "Hayır. Yol yardım saha hizmeti yerel bölgede yürütülür; jant satışı ise Türkiye geneli 81 ile açıktır.",
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
      "Aksaray ve Ortaköy çevresinde 7/24 yol yardım, acil lastik müdahalesi, stepne değişimi ve mobil destek için Şen Oto Lastik'e ulaşın.",
    title: "Aksaray'da 7/24 Yol Yardım",
    eyebrow: "Yerel Hizmet SEO",
    badge: "Acil Müdahale Hattı",
    description:
      "Yolda kaldığınız anda Aksaray ve çevresinde hızlı yönlendirme, yerinde lastik desteği ve güven veren iletişim sunuyoruz.",
    intro:
      "Şen Oto Lastik, Ortaköy / Aksaray çıkışlı saha organizasyonu ile patlak lastik, hava kaçağı, stepne değişimi ve acil yol yardımı tek hattan yönetir. Amaç sadece gelmek değil; telefonda doğru bilgiyi alıp en kısa sürede çözümü sahaya taşımaktır.",
    image: "/images/aksaray-yol-yardim.jpg",
    imageAlt: "Aksaray yol yardım hizmeti veren saha aracı ve lastik müdahalesi",
    highlights: [
      "7/24 çağrı ve hızlı yönlendirme",
      "Aksaray, Ortaköy ve çevre güzergahlara saha desteği",
      "Patlak lastik, stepne değişimi ve mobil müdahale",
      "Telefon ve WhatsApp üzerinden net konum alma",
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
        title: "Aksaray ve yakın hatlarda saha organizasyonu",
        paragraphs: [
          "Ortaköy merkezli operasyon, Aksaray içi ve çevre bağlantı yollarında daha hızlı rota kurulmasını sağlar. Bu da özellikle acil çağrılarda kullanıcı için daha az bekleme, işletme için daha net operasyon anlamına gelir.",
          "Şehir içi, ilçe çıkışı ya da bağlantı güzergahlarında gelen çağrılarda yol durumuna göre en doğru servis modeli belirlenir: tamir, değişim ya da mobil lastik servisi.",
        ],
      },
      {
        title: "Hangi araçlara hizmet veriyoruz",
        paragraphs: [
          "Otomobil, hafif ticari, SUV, kamyonet ve uygun durumlarda daha ağır araç grupları için lastik destek planı oluşturuyoruz. Ticari araçlarda zaman kaybı daha yüksek olduğu için hızlı müdahale ve doğru ekipman seçimi daha da kritik hale gelir.",
        ],
      },
    ],
    faqGroups: buildLocalFaqGroups(
      "Aksaray yol yardım çağrıları",
      "Uygun rotada kalan çağrılarda ekibimiz doğrudan konuma yönlendirilir. Konumunuzu telefonla tarif etmeniz veya WhatsApp üzerinden canlı konum göndermeniz yeterlidir.",
      "Patlak lastik tamiri, stepne değişimi, sökme-takma ve mobil lastik desteği sahada yapılabilir. Duruma göre en güvenli çözüm yöntemi belirlenir.",
    ),
    relatedLinks: [
      ...defaultLocalLinks,
      {
        label: "Ortaköy Oto Lastik",
        href: "/ortakoy-oto-lastik",
        description: "Ortaköy merkezli oto lastik hizmetlerimizi inceleyin.",
      },
    ],
    ctaTitle: "Aksaray'da yol yardım mı gerekiyor?",
    ctaText:
      "Yolda kaldıysanız zaman kaybetmeyin. Telefonla konumunuzu paylaşın, Şen Oto Lastik en uygun müdahale planını hemen oluştursun.",
    callout: "Acil çağrılarda önce arama, ardından WhatsApp konumu en hızlı akıştır.",
    keywords: [
      "aksaray yol yardım",
      "aksaray yol yardım 7/24",
      "ortaköy yol yardım",
      "mobil lastik desteği",
    ],
  },
  {
    slug: "mobil-lastik-servisi",
    type: "service",
    metaTitle: "Aksaray Mobil Lastik Servisi | Yerinde Lastik Desteği",
    metaDescription:
      "Aksaray ve Ortaköy çevresinde mobil lastik servisi, yerinde sökme-takma, lastik değişimi ve acil yol yardımı için 7/24 ulaşın.",
    title: "Aksaray Mobil Lastik Servisi",
    eyebrow: "Mobil Müdahale",
    badge: "Servis Ayağınıza Gelsin",
    description:
      "Servise gitmek zorunda kalmadan, bulunduğunuz noktada profesyonel lastik müdahalesi alın.",
    intro:
      "Mobil lastik servisi, özellikle yolda kalındığında ya da aracı hareket ettirmek riskli olduğunda en pratik çözümdür. Şen Oto Lastik; Ortaköy ve Aksaray çevresinde konuma gelerek lastik tamiri, değişimi ve acil müdahale desteği sağlar.",
    image: "/images/mobil-lastik-servisi.jpg",
    imageAlt: "Mobil lastik servisi ekibinin yerinde lastik değişimi yapması",
    highlights: [
      "Konuma gelen saha desteği",
      "Servise çekmeden yerinde çözüm",
      "Patlak, hava kaçağı ve sökme-takma işlemleri",
      "Aksaray ve yakın şehir hatlarında değerlendirme",
    ],
    quickFacts: ["Konuma servis", "7/24 destek", "Hızlı saha planı"],
    sections: [
      {
        title: "Yerinde müdahale neden avantajlıdır",
        paragraphs: [
          "Aracın hareket etmesinin güvenli olmadığı durumlarda mobil servis hem zaman hem de güvenlik açısından avantaj sağlar. Özellikle patlak lastik sonrası yanlış kullanımın janta zarar vermemesi için hızlı müdahale önemlidir.",
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
        title: "Aksaray ve çevresinde pratik iletişim",
        paragraphs: [
          "Telefonla ilk yönlendirme alındıktan sonra canlı konum gönderildiğinde ekibin rota planı çok daha net hale gelir. Böylece kullanıcı kısa sürede hangi müdahalenin yapılacağını bilir ve bekleme stresi azalır.",
        ],
      },
    ],
    faqGroups: buildLocalFaqGroups(
      "Mobil lastik servisi çağrıları",
      "Uygun mesafedeki çağrılarda evet. Aksaray ve yakın bölgelerde telefon ile konum doğrulaması sonrası doğrudan bulunduğunuz noktaya gelinir.",
      "Yerinde lastik değişimi, stepne uygulaması, patlak lastik müdahalesi ve sökme-takma işlemleri mobil servis kapsamında planlanır.",
    ),
    relatedLinks: [
      {
        label: "7/24 Yol Yardım",
        href: "/yol-yardim",
        description: "Acil durumlarda yol yardım akışını ve müdahale tiplerini görün.",
      },
      ...defaultLocalLinks.slice(1),
      {
        label: "Kayseri Yol Yardım",
        href: "/kayseri-yol-yardim",
        description: "Yakın şehir SEO sayfalarımızdan Kayseri hattını inceleyin.",
      },
    ],
    ctaTitle: "Mobil lastik servisi için tek arama yeterli",
    ctaText:
      "Aracınızın yanına servis gelsin istiyorsanız hemen arayın. Konum, araç tipi ve sorun bilgisini alıp en doğru saha planını çıkaralım.",
    callout: "Mobil servis, servise gitmenin zor ya da riskli olduğu anlarda en hızlı çözümdür.",
    keywords: [
      "mobil lastik servisi",
      "aksaray mobil lastik servisi",
      "yerinde lastik değişimi",
      "7/24 mobil lastik",
    ],
  },
  {
    slug: "lastik-tamiri",
    type: "service",
    metaTitle: "Aksaray Lastik Tamiri | Yerinde Oto Lastik Tamiri",
    metaDescription:
      "Aksaray ve Ortaköy çevresinde oto lastik tamiri, patlak lastik onarımı ve hava kaçağı için Şen Oto Lastik'e 7/24 ulaşın.",
    title: "Aksaray Oto Lastik Tamiri",
    eyebrow: "Tamir Hizmeti",
    badge: "Patlak Lastiğe Hızlı Çözüm",
    description:
      "Çivi, kesik, hava kaçağı ve patlak gibi sorunlarda lastiği doğru yöntemle değerlendirip müdahale ediyoruz.",
    intro:
      "Her patlak lastik değişim gerektirmez. Uygun durumlarda tamir ile güvenli şekilde yola devam etmek mümkündür. Şen Oto Lastik, Aksaray ve Ortaköy çevresinde oto lastik tamiri taleplerinde duruma göre yerinde çözüm ya da güvenli yönlendirme sunar.",
    image: "/images/yerinde-lastik-degisimi.jpg",
    imageAlt: "Yerinde oto lastik tamiri ve lastik kontrolü yapan ekip",
    highlights: [
      "Çivi ve hava kaçağı tespiti",
      "Uygun durumlarda yerinde tamir",
      "Janta zarar büyümeden müdahale",
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
    faqGroups: buildLocalFaqGroups(
      "Lastik tamiri çağrıları",
      "Evet, uygun lokasyon ve hasar tipinde konuma gelerek lastiği yerinde değerlendiriyoruz. Gerekirse tamir yerine değişim öneriyoruz.",
      "Patlak tamiri, hava kaçağı tespiti ve jant zararını büyütmeden yapılabilecek bazı müdahaleler yerinde uygulanabilir.",
    ),
    relatedLinks: [
      {
        label: "Lastik Değişimi",
        href: "/lastik-degisimi",
        description: "Tamir yerine değişim gereken durumlar için detay sayfası.",
      },
      ...defaultLocalLinks,
      {
        label: "Niğde Yol Yardım",
        href: "/nigde-yol-yardim",
        description: "Yakın şehir sayfalarımızdan Niğde hattını inceleyin.",
      },
    ],
    ctaTitle: "Patlak lastiği büyümeden çözelim",
    ctaText:
      "Hava kaçıran ya da çivi giren lastiğiniz varsa hemen arayın. Uygun durumlarda yerinde tamir ile sizi hızlıca yola döndürelim.",
    callout: "Doğru tamir, gereksiz lastik değişiminden daha ekonomik ve güvenli olabilir.",
    keywords: [
      "lastik tamiri",
      "aksaray lastik tamiri",
      "oto lastik tamiri",
      "patlak lastik tamiri",
    ],
  },
  {
    slug: "lastik-degisimi",
    type: "service",
    metaTitle: "Aksaray Yerinde Lastik Değişimi | 7/24 Lastik Değişimi",
    metaDescription:
      "Aksaray ve Ortaköy çevresinde yerinde lastik değişimi, stepne değişimi ve 7/24 mobil lastik desteği için Şen Oto Lastik'i arayın.",
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
      "Yol kenarında güvenli müdahale planı",
      "Binek ve ticari araçlara uygun hizmet",
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
        title: "Aksaray çevresinde 7/24 değişim desteği",
        paragraphs: [
          "Ortaköy / Aksaray çıkışlı saha desteğimiz, merkez ve çevre bağlantı yollarında lastik değişimi ihtiyacını hızlı karşılamak için planlanır. Acil çağrılarda arama ve canlı konum akışı müdahalenin hızını belirleyen en önemli adımdır.",
        ],
      },
    ],
    faqGroups: buildLocalFaqGroups(
      "Yerinde lastik değişimi çağrıları",
      "Uygun saha mesafesinde evet. Telefonla araç tipi ve bulunduğunuz nokta paylaşıldığında ekip doğrudan konuma yönlendirilir.",
      "Stepne değişimi, sökme-takma ve uygun durumlarda lastik tamiri ile değişim gereksinimi sahada çözülebilir.",
    ),
    relatedLinks: [
      {
        label: "Mobil Lastik Servisi",
        href: "/mobil-lastik-servisi",
        description: "Yerinde destek sürecini mobil servis perspektifinden inceleyin.",
      },
      {
        label: "Aksaray Yol Yardım",
        href: "/aksaray-yol-yardim",
        description: "Şehir odaklı yol yardım sayfamıza geçin.",
      },
      {
        label: "Konya Yol Yardım",
        href: "/konya-yol-yardim",
        description: "Yakın il odaklı yol yardım sayfamızı görün.",
      },
      {
        label: "Lastik Tamiri",
        href: "/lastik-tamiri",
        description: "Tamir edilebilir durumları ve yerinde çözüm akışını okuyun.",
      },
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
      "Telefon + WhatsApp ile kolay konum akışı",
      "Gece yol yardım taleplerinde aktif destek",
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
        title: "Aksaray yol yardım sayfasından nereye geçilir",
        paragraphs: [
          "Bu sayfa özellikle yol yardım arayan kullanıcıyı mobil lastik servisi, lastik tamiri ve yerinde lastik değişimi sayfalarına yönlendirmek için kurgulandı. Böylece arama niyetine göre daha spesifik bilgiye hızlıca ulaşılabilir.",
        ],
      },
    ],
    faqGroups: buildLocalFaqGroups(
      "Aksaray",
      "Evet. Aksaray merkez ve uygun çevre güzergahlarda gelen çağrılarda ekibimiz doğrudan konuma yönlendirilir.",
      "Yol yardım kapsamında lastik tamiri, lastik değişimi, stepne desteği ve mobil lastik servisi planlanabilir.",
    ),
    relatedLinks: [
      ...defaultLocalLinks,
      {
        label: "Ankara Yol Yardım",
        href: "/ankara-yol-yardim",
        description: "Şehir dışı hedeflemeli yol yardım sayfamızı görün.",
      },
    ],
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
      "Telefon, WhatsApp ve konum akışıyla pratik iletişim",
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
          "Oto lastik tamiri, yerinde lastik değişimi, mobil lastik servisi ve yol yardım bu sayfanın ana odaklarıdır. Acil olmayan taleplerde jant satışı ve sevkiyat hizmetine de aynı iletişim hattından yönlendirme yapılır.",
        ],
        bullets: [
          "Yerel lastik tamiri",
          "Mobil değişim ve yol yardım",
          "Jant satışı için teklif hattı",
        ],
      },
      {
        title: "Google Maps ve yerel güven sinyali",
        paragraphs: [
          "Ortaköy / Aksaray adres bilgisinin, çalışma saatlerinin ve harita entegrasyonunun açık biçimde sunulması yerel SEO için önemlidir. Bu sayfa, kullanıcıya hem fiziksel merkez hem de saha desteği modeli olduğunu net biçimde anlatır.",
        ],
      },
    ],
    faqGroups: buildLocalFaqGroups(
      "Ortaköy / Aksaray",
      "Ortaköy ve çevresinde evet. Acil çağrılarda konum teyidi sonrası ekibimiz en uygun rota ile yönlendirilir.",
      "Lastik tamiri, stepne değişimi, yerinde lastik değişimi ve mobil lastik servisi ihtiyaçları bu hatta yönetilir.",
    ),
    relatedLinks: [
      {
        label: "Aksaray Yol Yardım",
        href: "/aksaray-yol-yardim",
        description: "Aksaray genel hedeflemeli yol yardım sayfamıza geçin.",
      },
      {
        label: "Mobil Lastik Servisi",
        href: "/mobil-lastik-servisi",
        description: "Konuma gelen servis modelini daha detaylı inceleyin.",
      },
      {
        label: "Jant Satışı",
        href: "/jant-satisi",
        description: "Jant satışı ve Türkiye geneli gönderim tarafını görün.",
      },
      {
        label: "Kırşehir Yol Yardım",
        href: "/kirsehir-yol-yardim",
        description: "Yakın şehir sayfalarımızdan Kırşehir hedeflemeli sayfaya gidin.",
      },
    ],
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

const productPages: LandingPage[] = [
  {
    slug: "jant-satisi",
    type: "product",
    metaTitle: "Jant Satışı | Türkiye Geneli 81 İle Gönderim",
    metaDescription:
      "Şen Oto Lastik ile jant satışı, model bilgisi, sipariş desteği ve Türkiye geneli 81 ile jant gönderimi için teklif alın.",
    title: "Jant Satışı ve Sipariş Desteği",
    eyebrow: "Ulusal Ürün SEO",
    badge: "Türkiye Geneli Gönderim",
    description:
      "Binek araçtan ticari araca kadar farklı ölçü ve tarzlarda jant seçenekleri için hızlı teklif alın.",
    intro:
      "Jant satışı tarafında kullanıcı niyeti çoğunlukla fiyat, model ve gönderim üçlüsünde yoğunlaşır. Şen Oto Lastik, Aksaray merkezli işletme yapısını korurken jant siparişlerini Türkiye'nin 81 iline ulaştıran ayrı bir ürün hattı sunar.",
    image: "/images/jant-satisi-turkiye.jpg",
    imageAlt: "Türkiye geneli jant satışı için sergilenen jant modelleri",
    highlights: [
      "81 ile jant gönderimi",
      "Telefon ve WhatsApp ile teklif akışı",
      "Binek araç, ticari araç ve SUV seçenekleri",
      "Model, ölçü ve stok durumuna göre yönlendirme",
    ],
    quickFacts: ["81 il", "Teklif hattı", "Sipariş odaklı"],
    sections: [
      {
        title: "Jant siparişinde kullanıcı ne görmek ister",
        paragraphs: [
          "Jant arayan kullanıcı için en önemli konular model uygunluğu, fiyat aralığı ve güvenli gönderimdir. Bu sayfa, ziyaretçiyi gereksiz detay yerine doğrudan teklif isteğine yönlendirecek şekilde kurgulandı.",
          "Araç marka-model, jant ölçüsü ve tarz tercihi paylaşıldığında uygun seçeneklere çok daha hızlı ulaşılıyor.",
        ],
        bullets: [
          "Araç tipine göre jant önerisi",
          "Şehir dışı sipariş için hızlı bilgi akışı",
          "Telefon ve WhatsApp ile doğrudan iletişim",
        ],
      },
      {
        title: "Binek, ticari ve SUV için jant seçenekleri",
        paragraphs: [
          "Tek bir model her araç için doğru çözüm değildir. Bu yüzden binek araçlar, hafif ticari araçlar ve SUV sınıfı için farklı jant çizgileri ve ölçü aralıkları öne çıkarılır.",
          "Sipariş sürecinde estetik beklenti kadar kullanım amacı da değerlendirilir; şehir içi kullanım ile daha dayanıklılık odaklı talepler aynı şekilde ele alınmaz.",
        ],
      },
      {
        title: "Türkiye geneli gönderim nasıl yönetilir",
        paragraphs: [
          "Şen Oto Lastik, jant siparişi tarafında Türkiye'nin 81 iline sevkiyat planı yapar. Yerel yol yardım hizmeti ile ürün gönderimi birbirinden ayrı süreçlerdir; bu ayrımı sayfada açıkça anlatmak hem kullanıcı hem Google açısından önemlidir.",
        ],
      },
    ],
    faqGroups: buildProductFaqGroups("Jant satışı"),
    relatedLinks: [
      ...defaultProductLinks.slice(1),
      {
        label: "Ortaköy Oto Lastik",
        href: "/ortakoy-oto-lastik",
        description: "Yerel hizmet tarafımızı da inceleyin.",
      },
    ],
    ctaTitle: "Jant siparişi için hızlı teklif alın",
    ctaText:
      "Araç bilgisi ve istediğiniz ölçüyü gönderin; uygun jant seçenekleri, fiyat bilgisi ve gönderim detayları için size hızlıca dönüş yapalım.",
    callout: "Ürün satışı Türkiye geneline, saha hizmeti ise yerel bölgeye odaklıdır.",
    keywords: [
      "jant satışı",
      "online jant siparişi",
      "türkiye geneli jant gönderimi",
      "uygun fiyat jant modelleri",
    ],
    schemaProduct: {
      name: "Şen Oto Lastik Jant Satışı",
      category: "Otomotiv Jantları",
      description:
        "Binek araç, ticari araç ve SUV için Türkiye geneli gönderimli jant satışı.",
    },
  },
  {
    slug: "jant-modelleri",
    type: "product",
    metaTitle: "Jant Modelleri | Binek, Ticari Araç ve SUV Jant Seçenekleri",
    metaDescription:
      "Binek araç, ticari araç ve SUV için jant modelleri, ölçü seçenekleri ve Türkiye geneli gönderim bilgisi için Şen Oto Lastik ile iletişime geçin.",
    title: "Araç Tipine Göre Jant Modelleri",
    eyebrow: "Model Odaklı SEO",
    badge: "Ölçü ve Tarz Seçenekleri",
    description:
      "Aracınıza uygun jant modelini seçerken ölçü, kullanım amacı ve görünüm beklentisini birlikte değerlendirin.",
    intro:
      "Jant modelleri arasında seçim yaparken yalnızca görüntüye göre karar vermek doğru değildir. Ölçü, araç tipi, kullanım amacı ve mevcut lastik yapısı birlikte düşünülmelidir. Şen Oto Lastik bu nedenle modeli değil, araca uygun modeli önermeyi hedefler.",
    image: "/images/jant-modelleri.jpg",
    imageAlt: "Binek ve SUV araçlar için farklı jant modelleri",
    highlights: [
      "Binek, ticari araç ve SUV için farklı tarzlar",
      "Ölçüye göre model filtreleme",
      "Telefon ve WhatsApp ile model danışmanlığı",
      "Türkiye geneli sipariş desteği",
    ],
    quickFacts: ["Model odaklı", "Araç uyumu", "81 ile gönderim"],
    sections: [
      {
        title: "Doğru model seçimi nasıl yapılır",
        paragraphs: [
          "Önce araç marka-model ve mevcut jant ölçüsü netleştirilir. Ardından kullanım amacına göre daha şık, daha dayanıklı veya daha dengeli seçenekler öne çıkarılır.",
          "Günlük şehir içi kullanım ile ticari yoğun kullanım aynı beklentiye sahip olmadığı için tek tip öneri yaklaşımından kaçınıyoruz.",
        ],
        bullets: [
          "Araç marka-model bilgisi",
          "Mevcut ölçü ve uyumluluk kontrolü",
          "Görsel beklenti ve kullanım amacı",
        ],
      },
      {
        title: "SUV ve ticari araçlarda dikkat edilmesi gerekenler",
        paragraphs: [
          "SUV sınıfında görüntü kadar dayanıklılık da önemlidir. Ticari araçlarda ise yük ve kullanım sıklığı daha ön plana çıkar. Bu sebeple model tavsiyesi yaparken yalnızca estetik değil, kullanım senaryosu da dikkate alınır.",
        ],
      },
      {
        title: "Siparişe giden hızlı yol",
        paragraphs: [
          "Kararsız kaldığınız modellerin ekran görüntüsünü veya istediğiniz tarzı WhatsApp üzerinden paylaşmanız süreci hızlandırır. Böylece size uyan model aralığı daha hızlı daraltılabilir ve teklif iletilebilir.",
        ],
      },
    ],
    faqGroups: buildProductFaqGroups("Jant modelleri"),
    relatedLinks: [
      {
        label: "Jant Satışı",
        href: "/jant-satisi",
        description: "Teklif ve sipariş odaklı ana jant sayfamızı inceleyin.",
      },
      {
        label: "Jant Fiyatları",
        href: "/jant-fiyatlari",
        description: "Fiyatı etkileyen kriterler ve teklif sürecini görün.",
      },
      {
        label: "81 İle Jant Gönderimi",
        href: "/81-ile-jant-gonderimi",
        description: "Türkiye geneli gönderim modelini detaylı okuyun.",
      },
      {
        label: "Jant Seçimi Nasıl Yapılır?",
        href: "/blog/jant-secimi-nasil-yapilir",
        description: "Bilgilendirici blog yazımızla seçim kriterlerini öğrenin.",
      },
    ],
    ctaTitle: "Aracınıza uygun jant modelini birlikte seçelim",
    ctaText:
      "Araç bilgisi, ölçü ve beğendiğiniz tarzı bize gönderin. Uygun modelleri, stok durumunu ve gönderim detaylarını aynı hattan paylaşalım.",
    callout: "Model seçimi yalnızca estetik değil, uyumluluk ve kullanım ihtiyacına göre yapılmalıdır.",
    keywords: [
      "jant modelleri",
      "uygun fiyat jant modelleri",
      "suv jant modelleri",
      "ticari araç jant seçenekleri",
    ],
    schemaProduct: {
      name: "Şen Oto Lastik Jant Modelleri",
      category: "Jant Modelleri",
      description:
        "Binek araç, ticari araç ve SUV için farklı ölçü ve tarzlarda jant modelleri.",
    },
  },
  {
    slug: "jant-fiyatlari",
    type: "product",
    metaTitle: "Jant Fiyatları | Teklif Al ve Türkiye Geneli Sipariş Ver",
    metaDescription:
      "Jant fiyatları, model ve ölçüye göre değişen teklif seçenekleri ve Türkiye geneli gönderim için Şen Oto Lastik ile iletişime geçin.",
    title: "Jant Fiyatları ve Teklif Süreci",
    eyebrow: "Ticari Niyet Sayfası",
    badge: "Fiyat ve Sipariş",
    description:
      "Jant fiyatlarını etkileyen ana kriterleri görün, aracınıza uygun teklif için hızlıca iletişime geçin.",
    intro:
      "Jant fiyatları tek satırlık sabit bir bilgi değildir; ölçü, tasarım, araç sınıfı ve stok durumu fiyatı doğrudan etkiler. Bu sayfa, kullanıcıyı gereksiz liste kalabalığı yerine doğru teklife götürecek şekilde hazırlandı.",
    image: "/images/jant-fiyatlari.jpg",
    imageAlt: "Jant fiyat teklif süreci için sergilenen jant seçenekleri",
    highlights: [
      "Fiyatı etkileyen kriterlerin açık anlatımı",
      "Araç bilgisine göre teklif hazırlığı",
      "WhatsApp üzerinden hızlı fiyat talebi",
      "81 ile sipariş ve gönderim desteği",
    ],
    quickFacts: ["Teklif odaklı", "81 il teslimat", "Hızlı fiyat talebi"],
    sections: [
      {
        title: "Jant fiyatı neden değişir",
        paragraphs: [
          "Jantın ölçüsü, tasarım çizgisi, araç segmenti ve mevcut stok durumu fiyatın değişmesine neden olur. Bu yüzden kullanıcıya en hızlı doğru bilgiyi vermek için önce araç bilgisi ve beklenen ürün sınıfı alınır.",
          "Amacımız çok sayıda genel fiyat verip kafa karıştırmak değil; sizin aracınıza uygun aralığı pratik şekilde netleştirmektir.",
        ],
        bullets: [
          "Ölçü ve uyumluluk",
          "Tasarım ve ürün segmenti",
          "Stok durumu ve gönderim planı",
        ],
      },
      {
        title: "Fiyat istemenin en hızlı yolu",
        paragraphs: [
          "WhatsApp üzerinden araç marka-model, mevcut jant ölçüsü ve istediğiniz görünüm tipi paylaşıldığında teklif süreci hızlanır. Gerekirse beğendiğiniz jant görselini de gönderebilirsiniz.",
          "Bu yöntem telefon görüşmesi sırasında eksik kalabilecek detayların daha net paylaşılmasını sağlar.",
        ],
      },
      {
        title: "Türkiye geneli siparişte toplam maliyet",
        paragraphs: [
          "Şehir dışı siparişlerde yalnızca ürün fiyatı değil, gönderim organizasyonu da netleştirilir. Bu sayfa o yüzden fiyat ve sevkiyat konularını aynı çatı altında anlatır; kullanıcı doğrudan sipariş kararı verebilir.",
        ],
      },
    ],
    faqGroups: buildProductFaqGroups("Jant fiyatları"),
    relatedLinks: [
      {
        label: "Jant Satışı",
        href: "/jant-satisi",
        description: "Ana satış ve teklif sayfamızı inceleyin.",
      },
      {
        label: "Jant Modelleri",
        href: "/jant-modelleri",
        description: "Fiyatı etkileyen model seçeneklerini görün.",
      },
      {
        label: "81 İle Jant Gönderimi",
        href: "/81-ile-jant-gonderimi",
        description: "Gönderim sürecini ve il bazlı kapsama alanını inceleyin.",
      },
      {
        label: "Lastik Basıncı Kaç Olmalı?",
        href: "/blog/lastik-basinc-kac-olmali",
        description: "Araç bakım odaklı blog yazımıza göz atın.",
      },
    ],
    ctaTitle: "Jant fiyatı için beklemeyin, direkt teklif alın",
    ctaText:
      "Araç bilgisi ve ölçünüzü bize iletin; size uygun jant seçenekleri ve güncel teklif bilgisi aynı gün içinde netleşsin.",
    callout: "Bu sayfa fiyat niyetli kullanıcıları doğrudan iletişime taşımak için hazırlanmıştır.",
    keywords: [
      "jant fiyatları",
      "jant fiyat teklifi",
      "uygun fiyat jant",
      "online jant siparişi",
    ],
    schemaProduct: {
      name: "Şen Oto Lastik Jant Fiyatları",
      category: "Jant Teklifleri",
      description:
        "Araç bilgisine göre hazırlanan jant fiyat teklifleri ve Türkiye geneli sipariş desteği.",
    },
  },
  {
    slug: "81-ile-jant-gonderimi",
    type: "product",
    metaTitle: "81 İle Jant Gönderimi | Türkiye Geneli Jant Siparişi",
    metaDescription:
      "Türkiye'nin 81 iline jant gönderimi, sipariş desteği, model bilgisi ve WhatsApp teklif hattı için Şen Oto Lastik ile iletişime geçin.",
    title: "81 İle Jant Gönderimi",
    eyebrow: "Türkiye Geneli SEO",
    badge: "81 İle Gönderim",
    description:
      "Aksaray merkezli sipariş hattımızdan Türkiye'nin her iline jant gönderimi planlayın.",
    intro:
      "Yerel yol yardım hizmeti ile ulusal jant gönderimini aynı işletme çatısında ama farklı akışlarla yönetiyoruz. 81 ile jant gönderimi sayfası, Google'ın işletmeyi doğru anlaması için ürün gönderim modelini ayrı biçimde açıklayan ana ulusal SEO sayfamızdır.",
    image: "/images/81-il-jant-gonderimi.jpg",
    imageAlt: "Türkiye geneli 81 ile jant gönderimi için hazırlanan paketleme alanı",
    highlights: [
      "Türkiye geneli 81 ile sevkiyat planı",
      "Sipariş, ödeme ve teslimat akışının açık anlatımı",
      "Telefon ve WhatsApp ile tüm illerden teklif talebi",
      "Aksaray merkezli ama ulusal gönderim modeli",
    ],
    quickFacts: ["81 il kapsama", "Ulusal ürün hattı", "Sipariş odaklı"],
    sections: [
      {
        title: "Yerel servis ile ulusal gönderimi ayırıyoruz",
        paragraphs: [
          "Şen Oto Lastik'in yol yardım tarafı Aksaray ve yakın şehirlerde saha hizmeti sunar. Jant gönderimi tarafı ise Türkiye genelindeki kullanıcılara ürün ulaştırır. Bu iki modeli açık biçimde ayırmak, hem kullanıcı deneyimi hem arama motoru netliği açısından önemlidir.",
        ],
      },
      {
        title: "Siparişten kargoya kadar süreç",
        paragraphs: [
          "Araç bilgisi ve talep edilen ölçü alındıktan sonra uygun ürünler paylaşılır. Onaylanan sipariş için paketleme ve sevkiyat bilgisi netleştirilir; ardından şehir fark etmeksizin teslim süreci planlanır.",
          "Özellikle şehir dışı müşteriler için hızlı iletişim çok önemlidir. Bu yüzden telefon ve WhatsApp hattını sipariş kanalının merkezine koyuyoruz.",
        ],
        bullets: [
          "Araç bilgisi ve ölçü teyidi",
          "Model ve fiyat paylaşımı",
          "Sipariş onayı ve gönderim planı",
        ],
      },
      {
        title: "Kimler bu sayfadan fayda sağlar",
        paragraphs: [
          "Aksaray dışında yaşayan ama güvenilir bir jant tedarikçisi arayan kullanıcılar, online jant siparişi düşününler ve model/fiyat bilgisini hızlı almak isteyen alıcılar bu sayfanın ana hedef kitlesidir.",
        ],
      },
    ],
    faqGroups: buildProductFaqGroups("81 ile jant gönderimi"),
    relatedLinks: [
      {
        label: "Jant Satışı",
        href: "/jant-satisi",
        description: "Satış ve teklif akışını ana sayfada görün.",
      },
      {
        label: "Jant Modelleri",
        href: "/jant-modelleri",
        description: "Sipariş öncesi model seçeneklerini inceleyin.",
      },
      {
        label: "Jant Fiyatları",
        href: "/jant-fiyatlari",
        description: "Fiyat ve teklif sürecini detaylı okuyun.",
      },
      {
        label: "Ortaköy Oto Lastik",
        href: "/ortakoy-oto-lastik",
        description: "Yerel operasyon merkezimizi anlatan sayfaya geçin.",
      },
    ],
    ctaTitle: "Türkiye'nin neresinde olursanız olun jant siparişinizi planlayalım",
    ctaText:
      "İl fark etmeksizin araç bilgisi ve ölçünüzü paylaşın. Size uygun seçenekleri, fiyat bilgisini ve sevkiyat detaylarını aynı hattan iletelim.",
    callout: "Bu sayfa özellikle ulusal ürün aramaları ve 81 il gönderim intenti için kurgulandı.",
    keywords: [
      "81 ile jant gönderimi",
      "türkiye geneli jant gönderimi",
      "online jant siparişi",
      "81 il jant satışı",
    ],
    schemaProduct: {
      name: "Şen Oto Lastik 81 İle Jant Gönderimi",
      category: "Türkiye Geneli Jant Siparişi",
      description:
        "Türkiye'nin 81 iline gönderim yapılan jant siparişi ve teklif hizmeti.",
    },
  },
];

type CityPageSeed = {
  slug: string;
  city: string;
  routeDetail: string;
  serviceAngle: string;
  travelNote: string;
  cityNeed: string;
  localPhrase: string;
  secondaryKeyword: string;
};

const citySeeds: CityPageSeed[] = [
  {
    slug: "kirsehir-yol-yardim",
    city: "Kırşehir",
    routeDetail:
      "Kırşehir - Aksaray hattında gece yolculuğu yapan sürücüler, kırsal geçişlerde hızlı ve net bir yol yardım bilgisi arar.",
    serviceAngle:
      "Bu sayfada Kırşehir yol yardım aramalarını mobil lastik servisi, lastik tamiri ve Aksaray merkez operasyon hattımıza bağlayan bir yapı kurduk.",
    travelNote:
      "Kırşehir tarafındaki uygun çağrılarda rota ve yol durumuna göre destek planlaması yapılır. Net konum ve araç bilgisi paylaşıldığında süreç çok daha hızlı ilerler.",
    cityNeed:
      "Özellikle şehirler arası yollarda patlak lastik, stepne değişimi ve ticari araç lastik sorunları öne çıkar.",
    localPhrase:
      "Kırşehir odaklı bu içerik, sahada gerçek çözüm sunan bir işletme tonu ile yazıldı.",
    secondaryKeyword: "kırşehir mobil lastik servisi",
  },
  {
    slug: "kayseri-yol-yardim",
    city: "Kayseri",
    routeDetail:
      "Kayseri yönlü aramalarda kullanıcılar büyük şehir temposuna uygun, hızlı cevap veren bir servis arar.",
    serviceAngle:
      "Kayseri mobil lastik servisi ve yol yardım niyetini, Aksaray çıkışlı saha destek yapımızla doğal biçimde buluşturuyoruz.",
    travelNote:
      "Kayseri hattındaki çağrılar mesafe, trafik ve yol durumuna göre değerlendirilir. Uygun plan oluştuğunda ekipman ve rota bilgisi hızlıca netleştirilir.",
    cityNeed:
      "Özellikle teslimat yapan ticari araçlar, gece yolda kalan otomobiller ve lastik hava kaçağı yaşayan kullanıcılar bu sayfadan fayda sağlar.",
    localPhrase:
      "Kayseri hedeflemeli bu sayfa, spam dil yerine gerçek hizmet mantığı ile hazırlandı.",
    secondaryKeyword: "kayseri mobil lastik servisi",
  },
  {
    slug: "nevsehir-yol-yardim",
    city: "Nevşehir",
    routeDetail:
      "Nevşehir tarafında turizm trafiği ve şehirler arası kullanım, yol yardım ihtiyacını daha görünür hale getirir.",
    serviceAngle:
      "Bu içerik, Nevşehir yol yardım arayan kullanıcıya doğrudan mobil lastik servisi ve yerinde müdahale kabiliyetimizi anlatır.",
    travelNote:
      "Nevşehir yönlü çağrılarda lokasyon, yol durumu ve araç tipi birlikte değerlendirilir. Uygun çağrılarda doğrudan saha yönlendirmesi yapılır.",
    cityNeed:
      "Turistik gezi yapan sürücüler, kiralık araç kullanıcıları ve aile yolculuklarında patlak lastik sorunu yaşayanlar için acil çözüm önemlidir.",
    localPhrase:
      "Nevşehir sayfasında yerel arama intentine uygun ama abartısız bir dil kullanıldı.",
    secondaryKeyword: "nevşehir mobil lastik",
  },
  {
    slug: "nigde-yol-yardim",
    city: "Niğde",
    routeDetail:
      "Niğde tarafındaki kullanıcılar çoğunlukla şehirler arası yolda ya da bağlantı güzergahlarında acil lastik desteği arar.",
    serviceAngle:
      "Niğde lastik değişimi ve yol yardım intentini destekleyecek şekilde yerinde çözüm ve hızlı iletişim vurgusu yapıyoruz.",
    travelNote:
      "Niğde yönlü taleplerde çağrı uygunluğu rota ve anlık yoğunluğa göre netleşir. İlk aramada açık lokasyon bilgisi verilmesi müdahale hızını ciddi şekilde artırır.",
    cityNeed:
      "Stepne değişimi, ticari araç lastik sorunu ve aniden inen lastik basıncı Niğde hattında sık karşılaşılan nedenler arasındadır.",
    localPhrase:
      "Bu sayfa Niğde için benzersiz metinlerle üretildi ve anahtar kelime tekrarına yaslanmadı.",
    secondaryKeyword: "niğde lastik değişimi",
  },
  {
    slug: "konya-yol-yardim",
    city: "Konya",
    routeDetail:
      "Konya gibi geniş güzergah ağına sahip şehirlerde kullanıcı önce ulaşılabilir bir iletişim, sonra gerçekçi bir çözüm bekler.",
    serviceAngle:
      "Konya mobil lastik ve yol yardım aramalarında saha desteği mantığını açık anlatan, güven odaklı bir içerik hazırladık.",
    travelNote:
      "Konya yönlü çağrılar uzun mesafe ve güzergah durumuna göre değerlendirilir. Uygun plan oluştuğunda telefon ve WhatsApp üzerinden hızlı teyit alınır.",
    cityNeed:
      "Uzun yol sürücüleri, ticari taşıma yapan araçlar ve gece vakti patlak lastikle kalan kullanıcılar bu sayfanın ana kitlesidir.",
    localPhrase:
      "Konya sayfası, geniş coğrafyaya rağmen gerçekçi hizmet anlatımıyla öne çıkar.",
    secondaryKeyword: "konya mobil lastik",
  },
  {
    slug: "ankara-yol-yardim",
    city: "Ankara",
    routeDetail:
      "Ankara aramalarında kullanıcı yoğun rekabet içinde güvenilir ve samimi bir yol yardım alternatifi görmek ister.",
    serviceAngle:
      "Bu sayfa Ankara yol yardım intentine karşılık verirken, Şen Oto Lastik'in Aksaray merkezli saha bakışını net biçimde ortaya koyar.",
    travelNote:
      "Ankara yönlü taleplerde rota uygunluğu ve yol planı hızlı şekilde değerlendirilir. Hangi tip desteğin mümkün olduğu ilk görüşmede açıkça paylaşılır.",
    cityNeed:
      "Özellikle şehir dışı çıkışlarında patlak lastik, stepne ihtiyacı ve ticari araç aksamaları öne çıkar.",
    localPhrase:
      "Ankara hedeflemeli içerik, kurumsal ama sıcak bir dille dönüşüm odaklı yazıldı.",
    secondaryKeyword: "ankara mobil lastik servisi",
  },
];

const buildCityPage = (seed: CityPageSeed): LandingPage => ({
  slug: seed.slug,
  type: "local",
  metaTitle: `${seed.city} Yol Yardım | 7/24 Mobil Lastik Desteği`,
  metaDescription: `${seed.city} yol yardım, mobil lastik servisi, yerinde lastik değişimi ve patlak lastik desteği için Şen Oto Lastik ile 7/24 iletişime geçin.`,
  title: `${seed.city} Yol Yardım`,
  eyebrow: "Şehir Landing Page",
  badge: `${seed.city} Hedeflemeli Sayfa`,
  description:
    `${seed.city} ve bağlantı güzergahlarında acil lastik desteği arayan kullanıcılar için hızlı iletişim ve pratik yönlendirme odaklı içerik.`,
  intro:
    `${seed.routeDetail} ${seed.serviceAngle} ${seed.cityNeed}`,
  image: "/images/aksaray-yol-yardim.jpg",
  imageAlt: `${seed.city} yol yardım aramalarına yönelik mobil lastik servis görseli`,
  highlights: [
    `${seed.city} yol yardım aramalarına uygun içerik`,
    "7/24 çağrı ve WhatsApp hattı",
    "Mobil lastik servisi ve yerinde değişim bağlantısı",
    "Aksaray merkezli saha organizasyonu",
  ],
  quickFacts: ["7/24 iletişim", "Mobil destek", seed.secondaryKeyword],
  sections: [
    {
      title: `${seed.city} yol yardım aramalarında öne çıkan ihtiyaç`,
      paragraphs: [
        seed.routeDetail,
        `${seed.city} için hazırlanan bu sayfada amaç, kullanıcının yalnızca bir telefon numarası değil; gerçekten hangi hizmeti alacağını anlayabileceği net bir yapı sunmaktır.`,
      ],
    },
    {
      title: `${seed.city} için hangi hizmetler öne çıkar`,
      paragraphs: [
        `Yol yardım, mobil lastik servisi, lastik tamiri ve yerinde lastik değişimi bu sayfanın ana hizmet kümeleridir. ${seed.serviceAngle}`,
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
        seed.travelNote,
        `${seed.localPhrase} Böylece şehir sayfası, hem SEO değeri taşır hem de kullanıcıyı doğrudan arama veya WhatsApp temasına götürür.`,
      ],
    },
  ],
  faqGroups: buildLocalFaqGroups(
    seed.city,
    seed.travelNote,
    `${seed.city} odaklı çağrılarda yerinde lastik değişimi, patlak lastik tamiri ve mobil lastik servisi planlanabilir. Uygun çözüm araç tipi ve arıza durumuna göre belirlenir.`,
  ),
  relatedLinks: [
    {
      label: "7/24 Yol Yardım",
      href: "/yol-yardim",
      description: "Genel yol yardım hizmet sayfamıza geçin.",
    },
    {
      label: "Mobil Lastik Servisi",
      href: "/mobil-lastik-servisi",
      description: "Konuma gelen mobil servis modelini detaylı okuyun.",
    },
    {
      label: "Aksaray Yol Yardım",
      href: "/aksaray-yol-yardim",
      description: "Operasyon merkezimizin ana yerel sayfasını inceleyin.",
    },
    {
      label: "Ortaköy Oto Lastik",
      href: "/ortakoy-oto-lastik",
      description: "Yerel marka ve atölye tarafımızı görün.",
    },
  ],
  ctaTitle: `${seed.city} için hızlı lastik desteği alın`,
  ctaText:
    `${seed.city} yol yardım veya ${seed.secondaryKeyword} ihtiyacınız varsa bizi arayın. Araç bilgisi ve konumla birlikte en doğru yönlendirmeyi hızla paylaşalım.`,
  callout: `${seed.city} sayfası, doğal şehir bazlı SEO ve güçlü dönüşüm copy'si için veri odaklı üretildi.`,
  keywords: [
    `${seed.city.toLocaleLowerCase("tr-TR")} yol yardım`,
    seed.secondaryKeyword,
    `${seed.city.toLocaleLowerCase("tr-TR")} lastik değişimi`,
    `${seed.city.toLocaleLowerCase("tr-TR")} mobil lastik`,
  ],
});

const cityPages = citySeeds.map(buildCityPage);

export const landingPages = [...servicePages, ...productPages, ...cityPages];

export const landingPageMap = new Map(landingPages.map((page) => [page.slug, page]));

export const landingPageSlugs = landingPages.map((page) => page.slug);

export const mainLandingPages = servicePages;

export const productLandingPages = productPages;

export const cityLandingPages = cityPages;
