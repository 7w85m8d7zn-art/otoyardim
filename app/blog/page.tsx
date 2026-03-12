import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { HeroSection } from "@/components/HeroSection";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { blogPosts } from "@/data/blog-posts";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog | Lastik ve Yol Yardım Rehberleri",
  description:
    "Yolda lastik patlarsa ne yapılmalı, kış lastiği ne zaman takılır ve lastik basıncı kaç olmalı gibi pratik rehberleri okuyun.",
  path: "/blog",
  image: "/images/ortakoy-oto-lastik.jpg",
  keywords: ["lastik blog", "yol yardım blog", "kış lastiği", "lastik basıncı"],
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
        title="Yol yardım ve lastik için kısa rehberler"
        description="Blog tarafını da sade tuttuk. Sürücünün gerçekten işine yarayacak, sahadan gelen ihtiyaçlara göre yazılmış kısa ve net içerikler burada."
        image="/images/ortakoy-oto-lastik.jpg"
        imageAlt="Şen Oto Lastik blog sayfası için atölye ve lastik hizmet görseli"
        highlights={[
          "Yolda lastik patlayınca yapılacaklar",
          "Kış lastiği zamanı ve kullanım notları",
          "Lastik basıncı için pratik kontrol rehberleri",
        ]}
        badge="Organik Trafik Katmanı"
        showStats={false}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/90">
                  {post.category}
                </p>
                <h2 className="mt-4 font-display text-3xl leading-[1] text-white">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{post.excerpt}</p>
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
        description="Acil yol yardım ve mobil lastik ihtiyaçlarında doğrudan arayın. Konum paylaşımı gerekiyorsa WhatsApp hattımız da aynı anda aktif."
      />
    </>
  );
}
