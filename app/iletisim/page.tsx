import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { siteConfig } from "@/data/site";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildMetadata,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "İletişim | Şen Oto Lastik - Niğde Otoban 7/24 Lastikçi",
  description:
    "Şen Oto Lastik iletişim bilgileri, Ankara - Niğde Otobanı yol yardımı için telefon numarası, WhatsApp hattı, adres ve Google Maps konum bilgisini içerir.",
  path: "/iletisim",
  image: "/images/ortakoy-oto-lastik.jpg",
  keywords: [
    "şen oto lastik iletişim",
    "ortaköy lastikçi telefon",
    "aksaray yol yardım iletişim",
    "ankara niğde otobanı yol yardımı",
    "ankara niğde otobanı yol yardım telefon",
  ],
});

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup
        data={[
          buildBreadcrumbSchema([
            { name: "Anasayfa", href: "/" },
            { name: "İletişim", href: "/iletisim" },
          ]),
          buildLocalBusinessSchema(),
        ]}
      />

      <section className="py-8 sm:py-10">
        <Container>
          <div className="border-t border-white/10 pt-8">
            <p className="section-kicker">İletişim</p>
            <h1 className="hero-title mt-4 max-w-3xl xl:text-[3.7rem]">
              Şen Oto Lastik ile hızlı iletişim kurun
            </h1>
            <p className="section-copy-strong mt-5 max-w-3xl">
              Ankara - Niğde Otobanı öncelikli yol yardım çağrıları, mobil lastik servisi ve
              lastik tamiri için telefon, WhatsApp ve adres bilgilerini bu sayfada tek yerde
              topladık.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="info-pill">{siteConfig.hours}</span>
              <span className="info-pill-amber">
                Ortaköy / Aksaray merkez
              </span>
              <span className="info-pill">Ankara - Niğde Otobanı öncelikli</span>
            </div>
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
