import type { Metadata } from "next";

import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { contactFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Şen Oto Lastik iletişim bilgileri. Telefon, WhatsApp, adres ve harita üzerinden Ortaköy / Aksaray ekibimize hızlıca ulaşın.",
  alternates: {
    canonical: "/iletisim",
  },
};

export default function IletisimPage() {
  return (
    <main>
      <PageHero
        eyebrow="İletişim"
        title="Telefon, WhatsApp ve Konum Bilgileri"
        description="Şen Oto Lastik ekibine doğrudan ulaşabilir, adres bilgimizi inceleyebilir ve WhatsApp üzerinden konum paylaşarak hızlı dönüş alabilirsiniz."
        image="/images/page-contact.jpg"
      />
      <Contact />
      <FAQ
        items={contactFaqs}
        title="İletişim Hakkında Sık Sorulanlar"
        description="Daha hızlı yönlendirme almanız için iletişim sürecinde en çok sorulan konuları burada topladık."
      />
    </main>
  );
}
