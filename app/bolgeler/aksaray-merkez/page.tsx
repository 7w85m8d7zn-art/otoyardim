import type { Metadata } from "next";

import { AreaPageTemplate } from "@/components/AreaPageTemplate";
import { areaPages } from "@/lib/content";

const data = areaPages["aksaray-merkez"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: "/bolgeler/aksaray-merkez",
  },
};

export default function AksarayMerkezPage() {
  return <AreaPageTemplate data={data} />;
}
