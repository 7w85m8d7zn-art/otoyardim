import Link from "next/link";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FAQSection } from "@/components/FAQSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { blogPostMap, blogPosts } from "@/data/blog-posts";
import { buildBlogSchemas, buildMetadata } from "@/lib/seo";

type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = blogPostMap.get(slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
    keywords: [post.category, post.title],
    type: "article",
  });
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = blogPostMap.get(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <SchemaMarkup data={buildBlogSchemas(post)} />
      <article className="py-10 sm:py-14">
        <Container>
          <div className="mx-auto max-w-4xl">
            <nav className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              <Link href="/" className="hover:text-white">
                Anasayfa
              </Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </nav>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/90">
              {post.category}
            </p>
            <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] text-slate-400">
              <span>{post.publishedAt}</span>
              <span>{post.readingTime}</span>
            </div>
            <p className="mt-8 text-base leading-8 text-slate-200 sm:text-lg">{post.intro}</p>
          </div>
        </Container>

        <Container className="mt-12">
          <div className="mx-auto max-w-4xl space-y-8">
            {post.sections.map((section) => (
              <section
                key={section.title}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <h2 className="font-display text-4xl uppercase leading-[0.95] text-white">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-sm leading-8 text-slate-300 sm:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-200 sm:text-base">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-3 h-2 w-2 rounded-full bg-amber-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.subSections ? (
                  <div className="mt-8 grid gap-4">
                    {section.subSections.map((subSection) => (
                      <div
                        key={subSection.title}
                        className="rounded-[1.4rem] border border-white/10 bg-black/20 p-5"
                      >
                        <h3 className="text-xl font-semibold text-white">{subSection.title}</h3>
                        <div className="mt-3 space-y-3 text-sm leading-7 text-slate-300">
                          {subSection.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                        {subSection.bullets ? (
                          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-200">
                            {subSection.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </Container>
      </article>

      <FAQSection
        groups={[{ title: "Makale SSS", items: post.faq }]}
        title="Bu Konuda Sık Sorulanlar"
        description="Yazıyı okuduktan sonra sürücülerin en çok sorduğu noktaları kısa cevaplarla topladık."
      />
      <CTASection
        title="Sorun teoride kalmasın, gerektiğinde hemen ulaşın"
        description="Yazıda okuduğunuz konu acil bir duruma dönüştüyse Şen Oto Lastik'e hemen ulaşın. Yol yardım, mobil lastik servisi ve lastik tamiri için tek hat aktif."
      />
      <RelatedLinks
        title="İlgili Hizmet ve İçerikler"
        description="Bu yazıdan sonra sizi doğrudan faydalı olacak sayfalara yönlendiriyoruz."
        links={post.relatedLinks}
      />
      <ContactSection />
    </>
  );
}

export const dynamicParams = false;
