import Link from "next/link";
import { notFound } from "next/navigation";

import { CTASection } from "@/components/CTASection";
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

  const primarySections = post.sections.slice(0, 3);
  const extraSections = post.sections.slice(3);

  return (
    <>
      <SchemaMarkup data={buildBlogSchemas(post)} />
      <article className="py-8 sm:py-12">
        <Container>
          <div className="mx-auto max-w-3xl">
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
            <h1 className="mt-4 font-display text-4xl leading-[1] text-white sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-[0.18em] text-slate-400">
              <span>{post.publishedAt}</span>
              <span>{post.readingTime}</span>
            </div>
            <div className="mt-6 rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm leading-7 text-slate-200 sm:text-base">{post.intro}</p>
            </div>
          </div>
        </Container>

        <Container className="mt-10">
          <div className="mx-auto max-w-3xl space-y-5">
            {primarySections.map((section) => (
              <section
                key={section.title}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6"
              >
                <h2 className="font-display text-3xl leading-[1] text-white">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 space-y-2.5 text-sm leading-6 text-slate-200">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.subSections ? (
                  <div className="mt-6 grid gap-3">
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

            {extraSections.length > 0 ? (
              <section className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300/90">
                  Ek Notlar
                </p>
                <div className="mt-4 grid gap-3">
                  {extraSections.map((section) => (
                    <details
                      key={section.title}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <summary className="cursor-pointer list-none text-sm font-semibold text-white sm:text-base">
                        {section.title}
                      </summary>
                      <div className="mt-3 space-y-3 text-sm leading-6 text-slate-300">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      {section.bullets ? (
                        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-200">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {section.subSections ? (
                        <div className="mt-4 grid gap-3">
                          {section.subSections.map((subSection) => (
                            <div
                              key={subSection.title}
                              className="rounded-[1.2rem] border border-white/10 bg-black/20 p-4"
                            >
                              <h3 className="text-sm font-semibold text-white">{subSection.title}</h3>
                              <div className="mt-2 space-y-2 text-sm leading-6 text-slate-300">
                                {subSection.paragraphs.map((paragraph) => (
                                  <p key={paragraph}>{paragraph}</p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </details>
                  ))}
                </div>
              </section>
            ) : null}
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
    </>
  );
}

export const dynamicParams = false;
