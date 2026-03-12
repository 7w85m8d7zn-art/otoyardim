import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { whyChooseUsItems } from "@/data/site";

export function WhyChooseUsSection() {
  const items = whyChooseUsItems.slice(0, 4);

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Neden Şen Oto Lastik"
          title="Kısa sürede karar vermeyi kolaylaştırıyoruz"
          description="Bu sayfalarda uzun anlatım yerine hızlı iletişim, net lokasyon ve sahada çözüm mantığını öne çıkarıyoruz."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="font-display text-2xl leading-[1] text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
