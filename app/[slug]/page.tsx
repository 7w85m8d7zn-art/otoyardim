import { notFound } from "next/navigation";

import { LandingPageTemplate } from "@/components/LandingPageTemplate";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { landingPageMap, landingPageSlugs } from "@/data/landing-pages";
import { buildLandingPageSchemas, buildMetadata } from "@/lib/seo";

type LandingRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return landingPageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LandingRouteProps) {
  const { slug } = await params;
  const page = landingPageMap.get(slug);

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}`,
    image: page.image,
    keywords: page.keywords,
  });
}

export default async function LandingRoute({ params }: LandingRouteProps) {
  const { slug } = await params;
  const page = landingPageMap.get(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <SchemaMarkup data={buildLandingPageSchemas(page)} />
      <LandingPageTemplate page={page} />
    </>
  );
}

export const dynamicParams = false;
