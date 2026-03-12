import { ChevronDown } from "lucide-react";

import { Container } from "@/components/Container";
import { FaqItem } from "@/lib/content";

type FAQProps = {
  items: FaqItem[];
  title?: string;
  description?: string;
  id?: string;
};

export function FAQ({
  items,
  title = "Sık Sorulan Sorular",
  description = "Sürücülerin en çok sorduğu konuları burada net ve hızlı cevaplarla topladık.",
  id = "sss",
}: FAQProps) {
  return (
    <section id={id} className="scroll-mt-24 border-y border-white/10 bg-white/[0.025] py-16 md:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-blaze">
            SSS
          </p>
          <h2 className="font-display text-4xl uppercase tracking-[0.04em] text-white md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{description}</p>
        </div>

        <div className="mt-10 grid gap-4">
          {items.map((faq) => (
            <details
              key={faq.question}
              className="group panel rounded-[1.6rem] p-0 open:border-ember/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                <span className="font-display text-2xl uppercase tracking-[0.04em] text-white md:text-3xl">
                  {faq.question}
                </span>
                <ChevronDown className="h-5 w-5 shrink-0 text-blaze transition group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-sm leading-7 text-slate-300 md:text-base">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
