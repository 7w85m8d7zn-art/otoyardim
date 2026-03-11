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
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading title={title} description={description} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="font-display text-3xl uppercase leading-[0.95] text-white">
                {group.title}
              </h3>
              <div className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <summary className="cursor-pointer list-none pr-6 text-base font-semibold text-white">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
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

