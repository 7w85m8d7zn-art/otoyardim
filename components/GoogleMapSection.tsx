import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

type GoogleMapSectionProps = {
  title?: string;
  description?: string;
};

export function GoogleMapSection({
  title = "Ortaköy / Aksaray çıkış noktamız",
  description = "Yerel güven sinyalini haritada veriyor, saha yoğunluğunu ise Ankara - Niğde Otobanı ve yol yardım odağında açık biçimde anlatıyoruz. Böylece kullanıcı fiziksel merkezimizi de hizmet modelimizi de aynı anda görüyor.",
}: GoogleMapSectionProps) {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading title={title} description={description} />
            <div className="mt-6 rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-slate-300">
              <p>
                <strong className="text-white">Adres:</strong> {siteConfig.address}
              </p>
              <p className="mt-2">
                <strong className="text-white">Çalışma Saatleri:</strong> {siteConfig.hours}
              </p>
              <p className="mt-2">
                <strong className="text-white">Ana hizmet alanı:</strong> Aksaray, Ortaköy ve
                yakın şehir güzergahları
              </p>
              <p className="mt-2">
                <strong className="text-white">Ek saha hattı:</strong> Ankara - Niğde Otobanı ve
                uygun bağlantı güzergahları
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-card">
            <iframe
              src={siteConfig.mapEmbed}
              title="Şen Oto Lastik Google Harita"
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
