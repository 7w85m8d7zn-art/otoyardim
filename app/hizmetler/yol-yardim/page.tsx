import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicePages } from "@/lib/content";

const data = servicePages["yol-yardim"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: "/hizmetler/yol-yardim",
  },
};

export default function YolYardimPage() {
  return <ServicePageTemplate data={data} />;
}
