import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicePages } from "@/lib/content";

const data = servicePages["mobil-lastik-servisi"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: "/hizmetler/mobil-lastik-servisi",
  },
};

export default function MobilLastikServisiPage() {
  return <ServicePageTemplate data={data} />;
}
