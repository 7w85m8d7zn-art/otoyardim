import Link from "next/link";

import { Container } from "@/components/Container";

export default function NotFoundPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="surface-panel mx-auto max-w-3xl p-8 text-center shadow-card sm:p-12">
          <p className="section-kicker">
            404
          </p>
          <h1 className="hero-title mt-4 text-center sm:text-6xl xl:text-[3.6rem]">
            Aradığınız sayfa bulunamadı
          </h1>
          <p className="section-copy mt-5 text-base">
            Yine de yol yardım, mobil lastik servisi veya lastik tamiri için ana sayfaya dönüp
            hızlıca bize ulaşabilirsiniz.
          </p>
          <Link
            href="/"
            className="action-btn action-btn-primary mt-8"
          >
            Anasayfaya Dön
          </Link>
        </div>
      </Container>
    </section>
  );
}
