import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { HeroSection } from "@/components/HeroSection";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { blogPosts } from "@/data/blog-posts";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog | Lastik, Yol Yardım ve Jant Rehberleri",
  description:
    "Yolda lastik patlarsa ne yapılmalı, jant seçimi nasıl yapılır, kış lastiği ne zaman takılır ve lastik basıncı kaç olmalı gibi pratik rehberleri okuyun.",
  path: "/blog",
  image: "/images/ortakoy-oto-lastik.jpg",
  keywords: ["lastik blog", "jant rehberi", "yol yardım blog", "lastik basıncı"],
});

export default function BlogIndexPage() {
  return (
    <>
      <SchemaMarkup
        data={[
          buildBreadcrumbSchema([
            { name: "Anasayfa", href: "/" },
            { name: "Blog", href: "/blog" },
          ]),
        ]}
      />
      <HeroSection
        eyebrow="SEO Blog"
        title="Yol yardım, lastik ve jant hakkında okunabilir rehberler"
        description="Bilgi arayan kullanıcıları yalnızca genel içerikle değil; sahadan gelen gerçek ihtiyaçlara göre hazırlanmış, sade ve pratik Türkçe yazılarla karşılıyoruz."
        image="/images/ortakoy-oto-lastik.jpg"
        imageAlt="Şen Oto Lastik blog sayfası için atölye ve lastik hizmet görseli"
        highlights={[
          "Yolda lastik patlayınca yapılacaklar",
          "Jant seçimi ve fiyat mantığı",
          "Kış lastiği ve lastik basıncı rehberleri",
          "Her yazıda iletişim CTA'sı ve ilgili hizmet linkleri",
        ]}
        badge="Organik Trafik Katmanı"
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/90">
                  {post.category}
                </p>
                <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] text-white">
                  {post.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                  <span>{post.readingTime}</span>
                  <span>{post.publishedAt}</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300"
                >
                  Yazıyı Oku
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Bilgiyi okudunuz, şimdi hizmete hızlıca ulaşın"
        description="Acil yol yardım ve mobil lastik ihtiyaçlarında doğrudan arayın. Jant siparişi ve model bilgisi için WhatsApp hattımız aynı anda aktif."
      />
      <ContactSection />
    </>
  );
}
