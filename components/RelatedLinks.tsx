import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import type { RelatedLink as RelatedLinkItem } from "@/data/types";

type RelatedLinksProps = {
  title?: string;
  description?: string;
  links: RelatedLinkItem[];
};

export function RelatedLinks({
  title = "İlgili Sayfalar",
  description = "İhtiyacınıza en yakın hizmet veya içerik sayfasına buradan geçebilirsiniz.",
  links,
}: RelatedLinksProps) {
  const visibleLinks = links.slice(0, 3);

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading title={title} description={description} />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{link.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{link.description}</p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 text-amber-300 transition group-hover:text-white" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
