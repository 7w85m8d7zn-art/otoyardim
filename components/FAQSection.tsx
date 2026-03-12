import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import type { FaqGroup } from "@/data/types";

type FAQSectionProps = {
  groups: FaqGroup[];
  title?: string;
  description?: string;
};

export function FAQSection({
  groups,
  title = "Sık Sorulan Sorular",
  description = "En çok sorulan kritik soruları kısa ve net yanıtlarla tek yerde topladık.",
}: FAQSectionProps) {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading title={title} description={description} />
        <div className="mx-auto mt-10 max-w-5xl space-y-10">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-[1.55rem] leading-[1.04] text-white">
                {group.title}
              </h3>
              <div className="mt-5 border-t border-white/10">
                {group.items.map((item) => (
                  <details key={item.question} className="group border-b border-white/10 py-5">
                    <summary className="cursor-pointer list-none pr-6 text-sm font-semibold leading-7 text-white sm:text-base">
                      {item.question}
                    </summary>
                    <p className="section-copy mt-3 max-w-3xl">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
