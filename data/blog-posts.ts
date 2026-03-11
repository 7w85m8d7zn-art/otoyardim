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
      "Yolda lastik patlaması çoğu sürücü için panik anıdır. Oysa ilk birkaç adımı doğru atarsanız hem güvenliğinizi korur hem de sorunun büyümesini önlersiniz. Bu rehberde aracınızı nasıl güvenli şekilde durduracağınızı, stepne kullanımında nelere dikkat edeceğinizi ve ne zaman profesyonel yol yardım çağırmanız gerektiğini sade biçimde anlatıyoruz.",
    category: "Yol Yardım",
    coverImage: "/images/aksaray-yol-yardim.jpg",
    coverAlt: "Yolda patlak lastik nedeniyle duran araç ve yol yardım görseli",
    publishedAt: "2026-03-12",
    updatedAt: "2026-03-12",
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
        title: "Stepneye geçmeden önce ortamı değerlendirin",
        paragraphs: [
          "Her patlak lastikte hemen stepneye geçmek gerekmeyebilir; ancak önce hasarın büyüklüğünü ve aracın bulunduğu ortamı değerlendirmek gerekir. Yoğun trafikli bir noktadaysanız lastiği kendiniz değiştirmeye çalışmak riskli olabilir.",
          "Stepnenin havası düşükse veya ekipman eksikse uğraşmak yerine profesyonel destek çağırmak daha doğru olur.",
        ],
      },
      {
        title: "Hangi durumda yol yardım çağırmak gerekir",
        paragraphs: [
          "Gece saatlerinde, şehirler arası yolda, araçta çocuk varken ya da lastik tamamen boşalmışsa yardım çağırmak en güvenli seçenektir. Aynı durum ticari araçlarda da geçerlidir; gecikme maliyeti çoğu zaman yardım ücretinden daha fazladır.",
        ],
        subSections: [
          {
            title: "Yardım isterken hangi bilgileri vermelisiniz",
            paragraphs: [
              "Konum, araç tipi, lastiğin tamamen inik olup olmadığı ve stepne bulunup bulunmadığı bilgisi süreci hızlandırır. Canlı konum paylaşmak ekibin sizi daha hızlı bulmasını sağlar.",
            ],
          },
          {
            title: "Sık yapılan hata",
            paragraphs: [
              "Patlak lastikle uzun süre ilerlemek, lastiğin iç yapısına ek zarar verebilir. Bu yüzden 'biraz daha giderim' düşüncesi yerine aracı erken durdurmak daha doğrudur.",
            ],
          },
        ],
      },
      {
        title: "Patlak sonrası kontrol neden önemlidir",
        paragraphs: [
          "Lastik değişimi yapılsa bile patlağın nedeni anlaşılmadan yola devam etmek doğru değildir. Çivi, kesik, yanak hasarı veya görünmeyen bir kaçak varsa tekrar problem yaşayabilirsiniz. Bu yüzden müdahale sonrası lastiğin neden patladığı mutlaka değerlendirilmelidir.",
        ],
      },
    ],
    faq: [
      {
        question: "Patlak lastikle ne kadar gidebilirim?",
        answer:
          "Mümkünse hiç ilerlememek en güvenli yaklaşımdır. Hareket etmek lastiğe ek hasar verebilir.",
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
    slug: "kis-lastigi-ne-zaman-takilir",
    metaTitle: "Kış Lastiği Ne Zaman Takılır? | Şen Oto Lastik Blog",
    metaDescription:
      "Kış lastiği ne zaman takılır, hava sıcaklığı neden önemlidir ve ticari araçlarda sezon planlaması nasıl yapılır? Pratik rehber.",
    title: "Kış Lastiği Ne Zaman Takılır?",
    excerpt:
      "Kış lastiği için takvim kadar hava sıcaklığı ve kullanım bölgesi de önemlidir. Doğru zamanı kaçırmamak için temel kuralları öğrenin.",
    intro:
      "Kış lastiği takma zamanı yalnızca takvime bakılarak belirlenmez. Hava sıcaklığı, sürüş bölgesi, aracın kullanım yoğunluğu ve yasal zorunluluklar birlikte değerlendirilmelidir. Bu yazı kış lastiğini geç takmanın veya gereğinden uzun kullanmanın doğurabileceği sonuçları pratik biçimde açıklar.",
    category: "Lastik Bakımı",
    coverImage: "/images/mobil-lastik-servisi.jpg",
    coverAlt: "Kış koşullarında lastik servisi ve araç tekeri görseli",
    publishedAt: "2026-03-12",
    updatedAt: "2026-03-12",
    readingTime: "4 dk",
    sections: [
      {
        title: "7 derece kuralı neden önemlidir",
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
      "Lastik basıncı kaç olmalı, yanlış basınç neye yol açar ve sıcak-soğuk ölçüm farkı nedir? Sürücüler için pratik rehber.",
    title: "Lastik Basıncı Kaç Olmalı?",
    excerpt:
      "Doğru lastik basıncı güvenlik, konfor ve yakıt tüketimi için önemlidir. Hangi değere bakmanız gerektiğini ve sık yapılan hataları öğrenin.",
    intro:
      "Lastik basıncı küçük görünen ama sürüş güvenliğini doğrudan etkileyen bir detaydır. Fazla basınç da düşük basınç da sorun yaratabilir. Bu nedenle 'kaç olmalı' sorusunun cevabı araca göre değişse de bazı temel prensipler her sürücü için aynıdır.",
    category: "Lastik Bakımı",
    coverImage: "/images/yerinde-lastik-degisimi.jpg",
    coverAlt: "Lastik basınç kontrolü yapılan araç lastiği",
    publishedAt: "2026-03-12",
    updatedAt: "2026-03-12",
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
          "Basınç kontrolü mümkünse lastikler soğukken yapılmalıdır. Uzun yol sonrası yapılan ölçüm ısınmaya bağlı olarak yanıltıcı olabilir.",
          "Mevsim geçişlerinde ve uzun yol öncesinde basınç kontrolünü rutin hale getirmek en doğru yaklaşımdır.",
        ],
      },
      {
        title: "Basınç düşüşü sürekli tekrar ediyorsa",
        paragraphs: [
          "Sık sık hava eksilten lastiklerde yalnızca hava basıp devam etmek doğru değildir. Çivi, sibop sorunu veya görünmeyen hasar olabilir. Böyle durumlarda lastiğin mutlaka kontrol edilmesi gerekir.",
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
          "Lastiği kontrol ettirmeniz gerekir. Sorun çivi, sibop veya görünmeyen başka bir kaçaktan kaynaklanabilir.",
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
