import Link from "next/link";

import { Container } from "@/components/Container";

export default function NotFoundPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center shadow-card sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/90">
            404
          </p>
          <h1 className="mt-4 font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl">
            Aradığınız sayfa bulunamadı
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Yine de yol yardım, mobil lastik servisi veya lastik tamiri için ana sayfaya dönüp
            hızlıca bize ulaşabilirsiniz.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-2xl bg-ember px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white"
          >
            Anasayfaya Dön
          </Link>
        </div>
      </Container>
    </section>
  );
}
