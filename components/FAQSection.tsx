import type { FaqGroup } from "@/data/types";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

type FAQSectionProps = {
  groups: FaqGroup[];
  title?: string;
  description?: string;
};

export function FAQSection({
  groups,
  title = "Sık Sorulan Sorular",
  description = "Arama niyeti taşıyan kullanıcının aklındaki kritik soruları kısa ve net yanıtlarla karşılıyoruz.",
}: FAQSectionProps) {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading title={title} description={description} />
        <div className="mx-auto mt-8 grid max-w-4xl gap-5">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="font-display text-2xl leading-[1] text-white">
                {group.title}
              </h3>
              <div className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <summary className="cursor-pointer list-none pr-6 text-sm font-semibold text-white sm:text-base">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
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
