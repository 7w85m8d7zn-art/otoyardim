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
  title: "İletişim | Şen Oto Lastik",
  description:
    "Şen Oto Lastik iletişim bilgileri, telefon numarası, WhatsApp hattı, adres ve Google Maps konum bilgisi.",
  path: "/iletisim",
  image: "/images/ortakoy-oto-lastik.jpg",
  keywords: [
    "şen oto lastik iletişim",
    "ortaköy lastikçi telefon",
    "aksaray yol yardım iletişim",
    "niğde hattı yol yardım telefon",
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
          <div className="rounded-[1.9rem] border border-white/10 bg-white/[0.03] p-6 shadow-card sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300/90">
              İletişim Sayfası
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[0.98] text-white sm:text-5xl">
              Şen Oto Lastik ile hızlı iletişim kurun
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base">
              Niğde hattı öncelikli yol yardım çağrıları, mobil lastik servisi ve lastik tamiri
              için telefon, WhatsApp ve adres bilgilerini bu sayfada tek yerde topladık.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-100">
                {siteConfig.hours}
              </span>
              <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-100">
                Ortaköy / Aksaray merkez
              </span>
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-100">
                Niğde hattı öncelikli
              </span>
            </div>
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
