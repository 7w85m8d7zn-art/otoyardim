import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicePages } from "@/lib/content";

const data = servicePages["lastik-tamiri"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: "/hizmetler/lastik-tamiri",
  },
};

export default function LastikTamiriPage() {
  return <ServicePageTemplate data={data} />;
}
