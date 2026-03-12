import Image from "next/image";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryItems } from "@/data/site";

export function GallerySection() {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Görsel Güven"
          title="Gerçek hizmet hissi veren çalışma sahası"
          description="Açıklayıcı görseller, net kadrajlar ve düzenli fotoğraf akışı ile sahadaki hizmet yapımızı daha güven veren biçimde gösteriyoruz."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <figure
              key={item.image}
              className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <figcaption className="p-4 text-sm font-semibold text-slate-200">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
