import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { companyStats, corporateHighlights } from "@/lib/content";

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-4 top-8 hidden h-40 w-40 rounded-full bg-ember/20 blur-3xl lg:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <div className="relative h-[460px]">
                <Image
                  src="/images/about-workshop.jpg"
                  alt="Şen Oto Lastik için servis alanında çalışan otomotiv personeli"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="inline-flex rounded-full border border-white/10 bg-black/45 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-blaze">
                    Yerel ve Güvenilir
                  </p>
                  <h3 className="mt-3 font-display text-4xl uppercase tracking-[0.04em] text-white md:text-5xl">
                    Sahada çözüm odaklı hizmet
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Kurumsal Profil"
              title="Şen Oto Lastik Hakkında"
              description="Şen Oto Lastik, Ortaköy / Aksaray merkezli çalışan; bireysel araç sahipleri, ticari sürücüler ve yol üstü destek ihtiyacı duyan müşteriler için profesyonel lastik hizmeti sunan yerel bir markadır."
            />

            <div className="mt-8 grid gap-4">
              {corporateHighlights.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] px-5 py-4"
                >
                  <div className="flex items-start gap-3">
                    {index % 2 === 0 ? (
                      <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-blaze" />
                    ) : (
                      <Truck className="mt-1 h-5 w-5 shrink-0 text-blaze" />
                    )}
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {companyStats.map((item) => (
                <div key={item.label} className="panel rounded-[1.5rem] p-5">
                  <p className="font-display text-4xl uppercase tracking-[0.04em] text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/hakkimizda"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-ember to-blaze px-6 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-white shadow-glow"
              >
                Hakkımızda
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-white/30 hover:bg-white/10"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
