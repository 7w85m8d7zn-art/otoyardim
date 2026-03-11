import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { BlogPost } from "@/data/types";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

type BlogPreviewSectionProps = {
  posts: BlogPost[];
};

export function BlogPreviewSection({ posts }: BlogPreviewSectionProps) {
  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Blog"
            title="Yol üstünde işe yarayan kısa bilgiler"
            description="Ana odağımız acil destek olsa da, blog tarafında sürücünün gerçekten işine yarayacak kısa ve pratik içerikler tutuyoruz."
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300"
          >
            Tüm Yazılar
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.05]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300/90">
                {post.category}
              </p>
              <h3 className="mt-4 font-display text-3xl uppercase leading-[0.95] text-white">
                {post.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                <span>{post.readingTime}</span>
                <span>Devamını Oku</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
