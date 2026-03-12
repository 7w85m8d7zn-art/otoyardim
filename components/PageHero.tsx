import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill priority className="object-cover object-center opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,35,0.28),transparent_32%),linear-gradient(180deg,rgba(7,7,8,0.50),rgba(7,7,8,0.88)_45%,rgba(7,7,8,0.97)_100%)]" />
      </div>

      <Container className="relative py-16 md:py-24">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-blaze">
            {eyebrow}
          </div>
          <h1 className="font-display text-5xl uppercase leading-[0.92] tracking-[0.03em] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-300">
            <Link href="/" className="transition hover:text-white">
              Anasayfa
            </Link>
            <span>/</span>
            <span className="text-white">{eyebrow}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
