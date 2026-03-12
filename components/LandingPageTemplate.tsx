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
      <section className="border-t border-white/10 py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="section-kicker">Hizmet Özeti</p>
              <p className="section-copy-strong mt-4 text-base leading-8">{page.intro}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {page.quickFacts.map((fact) => (
                  <span key={fact} className="info-pill">
                    {fact}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-8">
              {leadSection ? <OpenContentBand section={leadSection} /> : null}
              {supportSection ? <OpenContentBand section={supportSection} /> : null}
            </div>
          </div>
        </Container>
      </section>

      {detailSections.length > 0 ? (
        <section className="py-14 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2">
              {detailSections.map((section) => (
                <OpenContentBand key={section.title} section={section} />
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
      <section className="border-t border-white/10 py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="section-kicker">Bölge Özeti</p>
              <p className="section-copy-strong mt-4 text-base leading-8">{page.intro}</p>
              <ul className="mt-6 space-y-3">
                {page.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-200">
                    <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {intentSection ? <OpenContentBand section={intentSection} /> : null}
              {serviceSection ? <OpenContentBand section={serviceSection} /> : null}
            </div>
          </div>
        </Container>
      </section>

      {processSection ? (
        <section className="py-14 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
              <OpenContentBand section={processSection} />
              <aside className="border-t border-white/10 pt-6">
                <p className="section-kicker">Bölge Notu</p>
                <p className="section-copy mt-4">
                  Bu şehir sayfası bulunduğunuz bölgeden gelen çağrıyı doğru hizmete ve doğrudan
                  iletişime yönlendiren kısa bir geçiş noktası gibi çalışır.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {page.quickFacts.map((fact) => (
                    <span key={fact} className="info-pill">
                      {fact}
                    </span>
                  ))}
                </div>
              </aside>
            </div>
          </Container>
        </section>
      ) : null}

      {extraSections.length > 0 ? (
        <section className="py-14 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2">
              {extraSections.map((section) => (
                <OpenContentBand key={section.title} section={section} />
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

type OpenContentBandProps = {
  section: ContentSection;
};

function OpenContentBand({ section }: OpenContentBandProps) {
  return (
    <article className="border-t border-white/10 pt-6">
      <h2 className="card-title text-[1.7rem] leading-[1.05]">{section.title}</h2>
      <div className="section-copy mt-4 space-y-3">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <BulletList bullets={section.bullets} />
    </article>
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
    <ul className="mt-5 space-y-3">
      {bullets.map((bullet) => (
        <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-200">
          <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );
}
