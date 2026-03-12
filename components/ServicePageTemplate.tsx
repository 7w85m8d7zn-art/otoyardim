import Link from "next/link";
import { MessageCircleMore, PhoneCall } from "lucide-react";

import { Container } from "@/components/Container";
import { FAQ } from "@/components/FAQ";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { ServicePageData } from "@/lib/content";
import { siteConfig, whatsappHref } from "@/lib/site";

type ServicePageTemplateProps = {
  data: ServicePageData;
};

export function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  return (
    <>
      <SeoJsonLd
        title={data.metaTitle}
        description={data.metaDescription}
        path={`/hizmetler/${data.slug}`}
        faqs={data.faqs}
      />

      <section className="border-b border-white/10">
        <Container className="py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-blaze">
                {data.kicker}
              </p>
              <h1 className="font-display text-5xl uppercase leading-[0.94] tracking-[0.03em] text-white md:text-6xl">
                {data.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">{data.description}</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {data.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-slate-100"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="panel rounded-[2rem] p-6 md:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blaze">
                Anında Ulaşın
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase tracking-[0.04em] text-white">
                Yolda beklemeyin
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Telefonla arayın ya da WhatsApp'tan konum gönderin. Ortaköy / Aksaray
                bölgesinde size uygun ekip hızlıca yönlendirilsin.
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
                  Hızlı Linkler
                </p>
                <div className="mt-3 flex flex-col gap-2 text-sm font-bold text-blaze">
                  <Link href="/bolgeler/ortakoy-aksaray">Ortaköy / Aksaray bölgesi</Link>
                  <Link href="/bolgeler/aksaray-merkez">Aksaray Merkez desteği</Link>
                  <Link href="/iletisim">İletişim bilgileri</Link>
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
        title="Bu Hizmetle İlgili Sorular"
        description="En çok sorulan detayları burada netleştirdik. Hızlı cevap için her zaman telefon ve WhatsApp hattımız açık."
      />
    </>
  );
}
