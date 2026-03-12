import Link from "next/link";
import { MapPinned, MessageCircleMore, PhoneCall } from "lucide-react";

import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { AreaPageData } from "@/lib/content";
import { siteConfig, whatsappHref } from "@/lib/site";

type AreaPageTemplateProps = {
  data: AreaPageData;
};

export function AreaPageTemplate({ data }: AreaPageTemplateProps) {
  return (
    <>
      <SeoJsonLd
        title={data.metaTitle}
        description={data.metaDescription}
        path={`/bolgeler/${data.slug}`}
        faqs={data.faqs}
      />

      <section className="border-b border-white/10">
        <Container className="py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-blaze">
                {data.kicker}
              </p>
              <h1 className="font-display text-5xl uppercase leading-[0.94] tracking-[0.03em] text-white md:text-6xl">
                {data.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">{data.description}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {data.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-slate-100"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            <div className="panel rounded-[2rem] p-6 md:p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-ember/20 bg-gradient-to-br from-ember/15 to-blaze/10 text-blaze">
                <MapPinned className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-display text-4xl uppercase tracking-[0.04em] text-white">
                Bölgesel hızlı servis
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Şehir içi ve yol üstü çağrılarda, konum paylaşımıyla birlikte size en uygun ekip
                yönlendirilir. Aracınızın tipi ve lastik durumu süreç hızını artırır.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-ember to-blaze px-6 py-4 text-base font-extrabold text-white shadow-glow"
                >
                  <PhoneCall className="h-5 w-5" />
                  Hemen Ara
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-4 text-base font-extrabold text-white"
                >
                  <MessageCircleMore className="h-5 w-5 text-emerald-400" />
                  WhatsApp'tan Ulaş
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  İlgili Sayfalar
                </p>
                <div className="mt-3 flex flex-col gap-2 text-sm font-bold text-blaze">
                  <Link href="/hizmetler/mobil-lastik-servisi">Mobil lastik servisi</Link>
                  <Link href="/hizmetler/yol-yardim">Yol yardım</Link>
                  <Link href="/hizmetler/lastik-tamiri">Lastik tamiri</Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6">
            {data.sections.map((section) => (
              <article key={section.title} className="panel rounded-[1.8rem] p-6 md:p-8">
                <h2 className="font-display text-4xl uppercase tracking-[0.04em] text-white">
                  {section.title}
                </h2>
                <div className="mt-4 grid gap-4 text-base leading-8 text-slate-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FAQ
        items={data.faqs}
        title="Bölgeyle İlgili Sorular"
        description="Bu bölgedeki sürücülerden sık gelen soruları cevapladık. Daha hızlı yönlendirme için doğrudan arayabilirsiniz."
      />
    </>
  );
}
