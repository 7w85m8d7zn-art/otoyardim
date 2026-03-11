import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { whyChooseUsItems } from "@/data/site";

export function WhyChooseUsSection() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Neden Şen Oto Lastik"
          title="Acil anda önce ulaşılabilir olmak gerekir"
          description="Bizim için güçlü görünmekten daha önemli olan şey, arandığınız anda cevap verebilmek ve doğru lokasyona doğru ekipmanı yönlendirebilmektir. Bu yüzden tüm yapı otoban ve yol yardım çağrılarını kolaylaştıracak şekilde ilerliyor."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-5">
          {whyChooseUsItems.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="font-display text-3xl uppercase leading-[0.95] text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
