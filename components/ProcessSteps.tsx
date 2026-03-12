import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/lib/content";

export function ProcessSteps() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Çalışma Süreci"
          title="Talep Geldikten Sonra Nasıl İlerliyoruz?"
          description="Kurumsal görünen ama sahada zorlanan bir yapı değil; gerçekten işlem akışı net olan bir hizmet modeli sunuyoruz."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {processSteps.map((item) => (
            <article key={item.step} className="panel rounded-[1.8rem] p-6 md:p-7">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blaze">
                {item.step}
              </p>
              <h3 className="mt-4 font-display text-4xl uppercase tracking-[0.04em] text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
