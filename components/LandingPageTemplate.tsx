import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Container";
import { FAQSection } from "@/components/FAQSection";
import { InternalPageHeader } from "@/components/InternalPageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import type { ContentSection, LandingPage } from "@/data/types";

type LandingPageTemplateProps = {
  page: LandingPage;
};

export function LandingPageTemplate({ page }: LandingPageTemplateProps) {
  return (
    <>
      <InternalPageHeader page={page} />
      {page.type === "service" ? (
        <ServicePageContent page={page} />
      ) : (
        <LocalPageContent page={page} />
      )}
    </>
  );
}

type PageContentProps = {
  page: LandingPage;
};

function ServicePageContent({ page }: PageContentProps) {
  const [leadSection, supportSection, ...detailSections] = page.sections;

  return (
    <>
      <section className="pb-6">
        <Container>
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300/90">
                Hizmet Özeti
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{page.intro}</p>

              {leadSection ? (
                <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
                  <h2 className="font-display text-[1.8rem] leading-[1] text-white">
                    {leadSection.title}
                  </h2>
                  <div className="mt-3 space-y-3 text-sm leading-7 text-slate-300">
                    {leadSection.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <BulletList bullets={leadSection.bullets} />
                </div>
              ) : null}
            </article>

            <aside className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300/90">
                Hızlı Karar Notları
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {page.quickFacts.map((fact) => (
                  <span
                    key={fact}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-100"
                  >
                    {fact}
                  </span>
                ))}
              </div>

              {supportSection ? (
                <div className="mt-5 rounded-[1.4rem] border border-white/10 bg-black/20 p-5">
                  <h2 className="text-lg font-semibold text-white">{supportSection.title}</h2>
                  <div className="mt-3 space-y-3 text-sm leading-6 text-slate-300">
                    {supportSection.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <BulletList bullets={supportSection.bullets} />
                </div>
              ) : null}
            </aside>
          </div>
        </Container>
      </section>

      {detailSections.length > 0 ? (
        <section className="py-6 sm:py-8">
          <Container>
            <div className="grid gap-4 lg:grid-cols-2">
              {detailSections.map((section) => (
                <ContentCard key={section.title} section={section} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <FAQSection groups={page.faqGroups} />
      <RelatedLinks
        title="İlgili Hizmetler"
        description="Bu hizmete yakın diğer yol yardım ve lastik destek sayfalarına buradan geçebilirsiniz."
        links={page.relatedLinks}
      />
      <CTASection title={page.ctaTitle} description={page.ctaText} callout={page.callout} />
    </>
  );
}

function LocalPageContent({ page }: PageContentProps) {
  const [intentSection, serviceSection, processSection, ...extraSections] = page.sections;

  return (
    <>
      <section className="pb-6">
        <Container>
          <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
            <article className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300/90">
                Yerel Arama Özeti
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{page.intro}</p>

              <div className="mt-6 grid gap-3">
                {page.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-[1.35rem] border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-slate-100"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </article>

            <div className="grid gap-4 md:grid-cols-2">
              {intentSection ? <ContentCard section={intentSection} /> : null}
              {serviceSection ? <ContentCard section={serviceSection} /> : null}
            </div>
          </div>
        </Container>
      </section>

      {processSection ? (
        <section className="py-6 sm:py-8">
          <Container>
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
              <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                <ContentBlock section={processSection} />
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300/90">
                    Yerel Sinyal
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Bu şehir sayfası tek başına anasayfa gibi davranmıyor; kullanıcıyı doğru hizmet
                    sayfasına ve doğrudan iletişime yönlendiren ara durak olarak çalışıyor.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {page.quickFacts.map((fact) => (
                      <span
                        key={fact}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-200"
                      >
                        {fact}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {extraSections.length > 0 ? (
        <section className="py-6 sm:py-8">
          <Container>
            <div className="grid gap-4 lg:grid-cols-2">
              {extraSections.map((section) => (
                <ContentCard key={section.title} section={section} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <RelatedLinks
        title="Yakın Sayfalar"
        description="Bulunduğunuz şehre en yakın hizmet ve bölge sayfalarına buradan geçebilirsiniz."
        links={page.relatedLinks}
      />
      <FAQSection groups={page.faqGroups} />
      <CTASection title={page.ctaTitle} description={page.ctaText} callout={page.callout} />
    </>
  );
}

type ContentCardProps = {
  section: ContentSection;
};

function ContentCard({ section }: ContentCardProps) {
  return (
    <article className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
      <ContentBlock section={section} />
    </article>
  );
}

function ContentBlock({ section }: ContentCardProps) {
  return (
    <>
      <h2 className="font-display text-[1.8rem] leading-[1] text-white">{section.title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-7 text-slate-300">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <BulletList bullets={section.bullets} />
    </>
  );
}

type BulletListProps = {
  bullets?: string[];
};

function BulletList({ bullets }: BulletListProps) {
  if (!bullets?.length) {
    return null;
  }

  return (
    <ul className="mt-4 space-y-2.5 text-sm leading-6 text-slate-200">
      {bullets.map((bullet) => (
        <li key={bullet} className="flex gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );
}
