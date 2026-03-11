import type { BlogPost } from "@/data/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "yolda-lastik-patlarsa-ne-yapilmali",
    metaTitle: "Yolda Lastik Patlarsa Ne Yapılmalı? | Şen Oto Lastik Blog",
    metaDescription:
      "Yolda lastik patladığında güvenli duruş, stepne kullanımı, ne zaman yardım çağrılması gerektiği ve sık yapılan hatalar hakkında pratik rehber.",
    title: "Yolda Lastik Patlarsa Ne Yapılmalı?",
    excerpt:
      "Patlak lastikte ilk dakikalar önemlidir. Güvenli duruş, doğru kontrol ve ne zaman profesyonel destek çağırmanız gerektiğini adım adım öğrenin.",
    intro:
      "Yolda lastik patlaması çoğu sürücü için panik anıdır. Oysa ilk birkaç adımı doğru atarsanız hem güvenliğinizi korur hem de sorunun büyümesini önlersiniz. Bu rehberde, aracınızı nasıl güvenli şekilde durduracağınızı, stepne kullanımında nelere dikkat edeceğinizi ve ne zaman profesyonel yol yardım çağırmanız gerektiğini sade biçimde anlatıyoruz.",
    category: "Yol Yardım",
    coverImage: "/images/aksaray-yol-yardim.jpg",
    coverAlt: "Yolda patlak lastik nedeniyle duran araç ve yol yardım görseli",
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-11",
    readingTime: "4 dk",
    sections: [
      {
        title: "Önce aracı güvenli şekilde durdurun",
        paragraphs: [
          "Lastik patladığında direksiyonda ani çekme, vuruntu veya araç dengesinde bozulma hissedebilirsiniz. Böyle bir anda ani fren yapmak yerine gazı yavaş bırakıp aracın kontrolünü koruyarak güvenli bir noktaya geçmek gerekir.",
          "Mümkünse emniyet şeridi veya yol kenarında düz bir alana yanaşın. Dörtlüleri yakmak ve reflektör kullanmak özellikle gece sürüşünde kritik önem taşır.",
        ],
        bullets: [
          "Ani fren yapmayın",
          "Aracı güvenli bir noktaya alın",
          "Dörtlüleri ve reflektörü unutmayın",
        ],
      },
      {
        title: "Stepneye geçmeden önce kontrol edin",
        paragraphs: [
          "Her patlak lastikte hemen stepneye geçmek gerekmeyebilir; ancak önce hasarın büyüklüğünü ve aracın bulunduğu ortamı değerlendirmek gerekir. Yoğun trafikli bir noktadaysanız lastiği kendiniz değiştirmeye çalışmak riskli olabilir.",
          "Stepnenin havası düşükse veya ekipman eksikse uğraşmak yerine profesyonel destek çağırmak daha doğru olur.",
        ],
      },
      {
        title: "Hangi durumda yol yardım çağırmak gerekir",
        paragraphs: [
          "Gece saatlerinde, şehirler arası yolda, araçta çocuk varken ya da lastik janta zarar verecek kadar boşalmışsa yardım çağırmak en güvenli seçenektir. Aynı durum ticari araçlarda da geçerlidir; gecikme maliyeti çoğu zaman yardım ücretinden daha fazladır.",
        ],
        subSections: [
          {
            title: "Yardım istemek için gerekli bilgiler",
            paragraphs: [
              "Konum, araç tipi, lastiğin tamamen inik olup olmadığı ve stepne bulunup bulunmadığı bilgisi süreci hızlandırır. Canlı konum paylaşmak, ekibin sizi daha hızlı bulmasını sağlar.",
            ],
          },
          {
            title: "Sık yapılan hata",
            paragraphs: [
              "Patlak lastikle uzun süre ilerlemek, yalnızca lastiği değil jantı da zarar görebilecek hale getirir. Bu yüzden 'biraz daha giderim' düşüncesi yerine aracı erken durdurmak daha doğrudur.",
            ],
          },
        ],
      },
      {
        title: "Patlak sonrası kontrol neden önemlidir",
        paragraphs: [
          "Lastik değişimi yapılsa bile patlağın nedeni anlaşılmadan yola devam etmek doğru değildir. Çivi, kesik, yanak hasarı veya jant sorunu varsa tekrar problem yaşayabilirsiniz. Bu yüzden müdahale sonrası lastiğin neden patladığı mutlaka değerlendirilmelidir.",
        ],
      },
    ],
    faq: [
      {
        question: "Patlak lastikle ne kadar gidebilirim?",
        answer:
          "Mümkünse hiç ilerlememek en güvenli yaklaşımdır. Hareket etmek lastik ve jant hasarını büyütebilir.",
      },
      {
        question: "Stepne yoksa ne yapmalıyım?",
        answer:
          "Aracı güvenli noktaya alın ve profesyonel destek çağırın. Özellikle gece veya yoğun yolda kendi başınıza çözmeye çalışmak risklidir.",
      },
      {
        question: "Yol yardım çağırırken ne söylemeliyim?",
        answer:
          "Konum, araç tipi, lastiğin durumu ve stepne olup olmadığı bilgisi müdahaleyi hızlandırır.",
      },
    ],
    relatedLinks: [
      {
        label: "7/24 Yol Yardım",
        href: "/yol-yardim",
        description: "Acil durumda bizi nasıl çağırabileceğinizi görün.",
      },
      {
        label: "Lastik Değişimi",
        href: "/lastik-degisimi",
        description: "Yerinde lastik değişimi hizmet detaylarımıza geçin.",
      },
      {
        label: "Mobil Lastik Servisi",
        href: "/mobil-lastik-servisi",
        description: "Servisin bulunduğunuz noktaya gelmesini istiyorsanız detayları inceleyin.",
      },
    ],
  },
  {
    slug: "jant-secimi-nasil-yapilir",
    metaTitle: "Jant Seçimi Nasıl Yapılır? | Şen Oto Lastik Blog",
    metaDescription:
      "Jant seçerken ölçü, uyumluluk, araç tipi, kullanım amacı ve görsel beklenti nasıl değerlendirilir? Pratik ve anlaşılır jant seçim rehberi.",
    title: "Jant Seçimi Nasıl Yapılır?",
    excerpt:
      "Jant seçimi yalnızca görünüm meselesi değildir. Ölçü, araç uyumu ve kullanım alışkanlığına göre doğru kararı vermek için temel adımları öğrenin.",
    intro:
      "Jant seçimi yapılırken çoğu kullanıcı önce görünüşe odaklanır. Oysa doğru jant; aracın ölçülerine, kullanım amacına ve sürüş beklentisine birlikte cevap vermelidir. Bu yazıda hem ilk kez jant alacak kullanıcılar hem de mevcut görünümünü değiştirmek isteyen sürücüler için sade bir seçim çerçevesi sunuyoruz.",
    category: "Jant",
    coverImage: "/images/jant-modelleri.jpg",
    coverAlt: "Farklı jant modelleri ve araç tipine göre jant seçenekleri",
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-11",
    readingTime: "5 dk",
    sections: [
      {
        title: "İlk adım: ölçüyü doğru bilmek",
        paragraphs: [
          "Jant seçiminde ilk konu görsel değil, ölçüdür. Mevcut jant ölçüsü ve aracın kabul ettiği aralık bilinmeden yapılan seçimler uyumsuzluk yaratabilir.",
          "Bu nedenle araç marka-model bilgisinin yanında mevcut jant ölçüsünü de paylaşmak gerekir. Emin değilseniz mevcut lastik üzerindeki bilgiden veya ruhsat/servis kaydından destek alınabilir.",
        ],
      },
      {
        title: "Kullanım amacını belirleyin",
        paragraphs: [
          "Araç çoğunlukla şehir içinde mi kullanılıyor, uzun yola mı çıkıyor, ticari yoğunluğa mı maruz kalıyor? Bu sorular seçimde önemlidir. Şık görünen bir model her kullanım tipi için en doğru karar olmayabilir.",
          "SUV, hafif ticari veya binek sınıfı arasında beklenti farklılaşır. Dayanıklılık isteyen kullanıcı ile görsel dönüşüm isteyen kullanıcının önceliği aynı değildir.",
        ],
        bullets: [
          "Şehir içi kullanım",
          "Uzun yol ağırlıklı kullanım",
          "Ticari yoğunluk veya yük taşıma",
        ],
      },
      {
        title: "Estetik beklenti ile pratik ihtiyacı dengeleyin",
        paragraphs: [
          "Jant seçimi görünüm açısından önemli bir yükseltme olabilir; ancak yalnızca fotoğrafta güzel görünen bir modele yönelmek doğru değildir. Aracın genel formu, lastik yapısı ve sürüş alışkanlığı birlikte düşünülmelidir.",
        ],
        subSections: [
          {
            title: "Sık yapılan hata",
            paragraphs: [
              "İnternette beğenilen bir modelin doğrudan kendi araca uyacağını sanmak yaygın bir hatadır. Uyum ve ölçü mutlaka kontrol edilmelidir.",
            ],
          },
          {
            title: "Doğru danışmanlık nasıl alınır",
            paragraphs: [
              "Araç bilgisi, ölçü ve beğendiğiniz görselleri birlikte paylaşırsanız size uygun seçeneklere çok daha hızlı ulaşabilirsiniz.",
            ],
          },
        ],
      },
      {
        title: "Sipariş öncesi son kontrol listesi",
        paragraphs: [
          "Siparişten önce ölçü, araç uyumu, kullanım amacı, fiyat aralığı ve gönderim planı netleşmelidir. Böylece teslimat sonrasında sürpriz yaşanma ihtimali azalır.",
        ],
        bullets: [
          "Araç bilgisi doğru mu?",
          "Ölçü teyit edildi mi?",
          "Fiyat ve teslimat bilgisi net mi?",
        ],
      },
    ],
    faq: [
      {
        question: "Sadece görüntüye göre jant seçilir mi?",
        answer:
          "Hayır. Ölçü, uyumluluk ve kullanım amacı göz ardı edilirse yanlış seçim yapılabilir.",
      },
      {
        question: "SUV için ayrı jant mı düşünülmeli?",
        answer:
          "Evet, SUV kullanıcılarında dayanıklılık ve kullanım şekli daha belirgin bir kriter olabilir.",
      },
      {
        question: "Jant seçimi için hangi bilgileri vermeliyim?",
        answer:
          "Araç marka-model, mevcut ölçü ve beğendiğiniz tarz hakkında bilgi vermeniz yeterlidir.",
      },
    ],
    relatedLinks: [
      {
        label: "Jant Satışı",
        href: "/jant-satisi",
        description: "Jant siparişi ve teklif akışımızı inceleyin.",
      },
      {
        label: "Jant Modelleri",
        href: "/jant-modelleri",
        description: "Araç tipine göre jant seçeneklerimize geçin.",
      },
      {
        label: "Jant Fiyatları",
        href: "/jant-fiyatlari",
        description: "Teklif ve fiyat sürecimizi görün.",
      },
    ],
  },
  {
    slug: "kis-lastigi-ne-zaman-takilir",
    metaTitle: "Kış Lastiği Ne Zaman Takılır? | Şen Oto Lastik Blog",
    metaDescription:
      "Kış lastiği ne zaman takılır, hava sıcaklığı neden önemlidir, ticari araç zorunluluğu nasıl değerlendirilir? Pratik kış lastiği rehberi.",
    title: "Kış Lastiği Ne Zaman Takılır?",
    excerpt:
      "Kış lastiği için takvim kadar hava sıcaklığı ve kullanım bölgesi de önemlidir. Doğru zamanı kaçırmamak için temel kuralları öğrenin.",
    intro:
      "Kış lastiği takma zamanı yalnızca takvime bakılarak belirlenmez. Hava sıcaklığı, sürüş bölgesi, aracın kullanım yoğunluğu ve yasal zorunluluklar birlikte değerlendirilmelidir. Bu yazı, kış lastiğini geç takmanın veya gereğinden uzun kullanmanın doğurabileceği sonuçları pratik biçimde açıklar.",
    category: "Lastik Bakımı",
    coverImage: "/images/mobil-lastik-servisi.jpg",
    coverAlt: "Kış koşullarında lastik servisi ve araç tekeri görseli",
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-11",
    readingTime: "4 dk",
    sections: [
      {
        title: "7 derece kuralı neden önemli",
        paragraphs: [
          "Genel kabul gören yaklaşım, hava sıcaklığı düzenli şekilde 7 derecenin altına inmeye başladığında kış lastiğine geçiş düşünmektir. Çünkü soğuk hava lastik hamurunun davranışını doğrudan etkiler.",
          "Takvim benzer görünse bile yaşadığınız bölgedeki gerçek hava koşulları daha belirleyicidir.",
        ],
      },
      {
        title: "Sadece kar yağınca mı takılmalı",
        paragraphs: [
          "Hayır. Kış lastiği yalnızca kar için düşünülmemelidir. Soğuk, ıslak zemin ve düşük sıcaklıkta yol tutuş performansı açısından erken planlama daha güvenlidir.",
        ],
        bullets: [
          "Kar yağmadan da gerekli olabilir",
          "Sabah ve gece düşük sıcaklıkları önemlidir",
          "Uzun yol yapanlar daha erken planlama düşünebilir",
        ],
      },
      {
        title: "Ticari araçlar için durum",
        paragraphs: [
          "Ticari araç kullanıcıları hem güvenlik hem de mevzuat açısından sezon geçişlerini daha yakından takip etmelidir. Yoğun kullanım nedeniyle lastik durumu daha sık kontrol edilmelidir.",
        ],
      },
      {
        title: "Geç kalmanın ve fazla bekletmenin etkisi",
        paragraphs: [
          "Kış lastiğini geç takmak, hava soğuduğunda yol tutuşu ve fren mesafesi açısından risk yaratabilir. Tersine, mevsim geçtikten sonra çok uzun süre kullanmak da aşınmayı artırabilir.",
        ],
      },
    ],
    faq: [
      {
        question: "Kış lastiği sadece kar yağdığında mı gerekir?",
        answer:
          "Hayır. Düşük sıcaklık ve ıslak zemin koşulları da kış lastiğini gerekli kılabilir.",
      },
      {
        question: "7 derece kuralı kesin midir?",
        answer:
          "Kesin bir yasa değil, yaygın bir pratik eşiktir. Bulunduğunuz bölgenin hava koşulları birlikte değerlendirilmelidir.",
      },
      {
        question: "Ticari araçlarda daha erken mi düşünülmeli?",
        answer:
          "Yoğun kullanım ve yasal zorunluluk ihtimali nedeniyle ticari araçlarda planlama daha disiplinli yapılmalıdır.",
      },
    ],
    relatedLinks: [
      {
        label: "Lastik Değişimi",
        href: "/lastik-degisimi",
        description: "Sezon geçişi ve değişim desteği için hizmet sayfamıza geçin.",
      },
      {
        label: "Mobil Lastik Servisi",
        href: "/mobil-lastik-servisi",
        description: "Yerinde lastik değişimi gerektiğinde detayları inceleyin.",
      },
      {
        label: "Lastik Basıncı Kaç Olmalı?",
        href: "/blog/lastik-basinc-kac-olmali",
        description: "Mevsim geçişlerinde basınç kontrolünü de ihmal etmeyin.",
      },
    ],
  },
  {
    slug: "lastik-basinc-kac-olmali",
    metaTitle: "Lastik Basıncı Kaç Olmalı? | Şen Oto Lastik Blog",
    metaDescription:
      "Lastik basıncı kaç olmalı, yanlış basınç neye yol açar, sıcak-soğuk ölçüm farkı nedir? Sürücüler için pratik rehber.",
    title: "Lastik Basıncı Kaç Olmalı?",
    excerpt:
      "Doğru lastik basıncı güvenlik, konfor ve yakıt tüketimi için önemlidir. Hangi değere bakmanız gerektiğini ve sık yapılan hataları öğrenin.",
    intro:
      "Lastik basıncı küçük görünen ama sürüş güvenliğini doğrudan etkileyen bir detaydır. Fazla basınç da düşük basınç da sorun yaratabilir. Bu nedenle 'kaç olmalı' sorusunun cevabı araca göre değişse de bazı temel prensipler her sürücü için aynıdır.",
    category: "Lastik Bakımı",
    coverImage: "/images/yerinde-lastik-degisimi.jpg",
    coverAlt: "Lastik basınç kontrolü yapılan araç lastiği",
    publishedAt: "2026-03-11",
    updatedAt: "2026-03-11",
    readingTime: "4 dk",
    sections: [
      {
        title: "Doğru değer nerede yazar",
        paragraphs: [
          "En güvenilir bilgi aracın üretici tavsiyesidir. Kapı içi etiketi, kullanım kılavuzu veya yetkili servis bilgisi doğru basınç değerine ulaşmak için temel kaynaktır.",
          "Genel internet listeleri fikir verebilir; ancak her araç için birebir doğru kabul edilmemelidir.",
        ],
      },
      {
        title: "Düşük veya yüksek basınç neye yol açar",
        paragraphs: [
          "Düşük basınç yakıt tüketimini artırabilir, düzensiz aşınmaya neden olabilir ve yol tutuşu olumsuz etkileyebilir. Aşırı yüksek basınç ise sürüş konforunu düşürebilir ve lastiğin yolla temasını olumsuz etkileyebilir.",
        ],
        bullets: [
          "Düşük basınç: daha fazla zorlanma ve aşınma",
          "Yüksek basınç: sert sürüş ve dengesiz temas",
          "Yanlış basınç: güvenlik ve ekonomi kaybı",
        ],
      },
      {
        title: "Ölçüm ne zaman yapılmalı",
        paragraphs: [
          "Basınç kontrolü mümkünse lastikler soğukken yapılmalıdır. Uzun yol sonrası yapılan ölçüm, ısınmaya bağlı olarak yanıltıcı olabilir.",
          "Mevsim geçişlerinde ve uzun yol öncesinde basınç kontrolünü rutin hale getirmek en doğru yaklaşımdır.",
        ],
      },
      {
        title: "Basınç düşüşü sürekli tekrar ediyorsa",
        paragraphs: [
          "Sık sık hava eksilten lastiklerde yalnızca hava basıp devam etmek doğru değildir. Çivi, sibop sorunu, jant kenarı problemi veya görünmeyen hasar olabilir. Böyle durumlarda lastiğin mutlaka kontrol edilmesi gerekir.",
        ],
      },
    ],
    faq: [
      {
        question: "Lastik basıncını soğukken mi ölçmeliyim?",
        answer:
          "Evet, en sağlıklı sonuç için lastiklerin soğuk olduğu zamanda ölçüm yapmak gerekir.",
      },
      {
        question: "İnternetteki genel tablolar yeterli mi?",
        answer:
          "Hayır. En doğru değer aracın üretici tavsiyesidir ve araçtan araca değişebilir.",
      },
      {
        question: "Sürekli hava indiriyorsa ne yapmalıyım?",
        answer:
          "Lastiği kontrol ettirmeniz gerekir. Sorun çivi, sibop veya jant kaynaklı olabilir.",
      },
    ],
    relatedLinks: [
      {
        label: "Lastik Tamiri",
        href: "/lastik-tamiri",
        description: "Hava kaçağı veya patlak şüphesinde hizmet sayfamıza geçin.",
      },
      {
        label: "Yolda Lastik Patlarsa Ne Yapılmalı?",
        href: "/blog/yolda-lastik-patlarsa-ne-yapilmali",
        description: "Acil durumda atmanız gereken adımları okuyun.",
      },
      {
        label: "Yol Yardım",
        href: "/yol-yardim",
        description: "Yolda kaldığınızda hızlı ulaşım için hizmet sayfamızı inceleyin.",
      },
    ],
  },
];

export const blogPostMap = new Map(blogPosts.map((post) => [post.slug, post]));
