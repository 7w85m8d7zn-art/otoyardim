import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicePages } from "@/lib/content";

const data = servicePages["lastik-degisimi"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: {
    canonical: "/hizmetler/lastik-degisimi",
  },
};

export default function LastikDegisimiPage() {
  return <ServicePageTemplate data={data} />;
}
