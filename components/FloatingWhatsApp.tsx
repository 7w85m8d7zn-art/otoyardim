import { MessageCircleMore } from "lucide-react";

import { whatsappHref } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp üzerinden ulaş"
      className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_18px_40px_rgba(16,185,129,0.35)] transition hover:scale-105 md:bottom-6 md:right-6 md:h-16 md:w-16"
    >
      <MessageCircleMore className="h-7 w-7 animate-float-soft" />
    </a>
  );
}
