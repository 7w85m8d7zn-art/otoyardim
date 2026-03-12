import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import type { LandingPage } from "@/data/types";

type LandingPageTemplateProps = {
  page: LandingPage;
};

export function LandingPageTemplate({ page }: LandingPageTemplateProps) {
  const primarySections = page.sections.slice(0, 2);
  const extraSections = page.sections.slice(2);

  return (
    <>
      <HeroSection
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        image={page.image}
        imageAlt={page.imageAlt}
        highlights={page.highlights}
        badge={page.badge}
      />
      <section className="pb-4">
        <Container>
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300/90">
                Sayfa Özeti
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{page.intro}</p>
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300/90">
                Hızlı Bilgiler
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {page.quickFacts.map((fact) => (
                  <span
                    key={fact}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-100"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-14">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            {primarySections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5"
              >
                <h2 className="font-display text-2xl leading-[1] text-white">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3 text-sm leading-7 text-slate-300">
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
              </article>
            ))}
          </div>

          {extraSections.length > 0 ? (
            <div className="mt-4 rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300/90">
                Ek Bilgiler
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
                  </details>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </section>

      <RelatedLinks links={page.relatedLinks} />
      <CTASection title={page.ctaTitle} description={page.ctaText} callout={page.callout} />
      <FAQSection groups={page.faqGroups} />
      <ContactSection />
    </>
  );
}
