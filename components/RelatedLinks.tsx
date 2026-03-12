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
    <section className="py-14 sm:py-20">
      <Container>
        <SectionHeading title={title} description={description} />
        <div className="mt-10 border-t border-white/10">
          {visibleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group grid gap-4 border-b border-white/10 py-6 md:grid-cols-[280px_1fr_auto] md:items-start"
            >
              <h3 className="font-display text-[1.55rem] leading-[1.04] text-white">{link.label}</h3>
              <p className="section-copy max-w-2xl">{link.description}</p>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] md:justify-self-end">
                <ArrowUpRight className="h-5 w-5 text-amber-300 transition group-hover:text-white" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
