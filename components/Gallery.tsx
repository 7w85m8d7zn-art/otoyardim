import Image from "next/image";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { galleryItems } from "@/lib/content";

export function Gallery() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Galeri"
          title="Gerçek Otomotiv ve Servis Görselleri"
          description="Kurumsal görünümün arkasında gerçek servis pratiği olduğunu göstermek için otomotiv odaklı orijinal fotoğraflar kullandık."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-[1.8rem] border border-white/10 ${
                index === 0 ? "md:col-span-2 xl:col-span-2" : ""
              }`}
            >
              <div className="relative h-72">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="mb-2 inline-flex rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-blaze">
                    Şen Oto Lastik
                  </p>
                  <h3 className="font-display text-3xl uppercase tracking-[0.04em] text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
