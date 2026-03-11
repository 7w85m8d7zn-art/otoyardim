import type { Metadata } from "next";

import { AreaPageTemplate } from "@/components/AreaPageTemplate";
import { areaPages } from "@/lib/content";

const data = areaPages["ortakoy-aksaray"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: "/bolgeler/ortakoy-aksaray",
  },
};

export default function OrtakoyAksarayPage() {
  return <AreaPageTemplate data={data} />;
}
