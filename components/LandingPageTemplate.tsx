import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FAQSection } from "@/components/FAQSection";
import { GoogleMapSection } from "@/components/GoogleMapSection";
import { HeroSection } from "@/components/HeroSection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { VehicleTypesSection } from "@/components/VehicleTypesSection";
import type { LandingPage } from "@/data/types";

type LandingPageTemplateProps = {
  page: LandingPage;
};

export function LandingPageTemplate({ page }: LandingPageTemplateProps) {
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
      <section className="pb-6">
        <Container>
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/90">
                Sayfa Özeti
              </p>
              <p className="mt-4 text-base leading-7 text-slate-200">{page.intro}</p>
            </div>
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/90">
                Hızlı Bilgiler
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {page.quickFacts.map((fact) => (
                  <span
                    key={fact}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-100"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {page.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <h2 className="font-display text-3xl uppercase leading-[0.95] text-white">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
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
        </Container>
      </section>

      <VehicleTypesSection compact />
      <ServiceAreaSection compact />
      <RelatedLinks links={page.relatedLinks} />
      <CTASection title={page.ctaTitle} description={page.ctaText} callout={page.callout} />
      <FAQSection groups={page.faqGroups} />
      <GoogleMapSection />
      <ContactSection />
    </>
  );
}
