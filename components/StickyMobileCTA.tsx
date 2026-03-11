import Link from "next/link";
import { MessageCircleMore, PhoneCall } from "lucide-react";

import { siteConfig, whatsappHref } from "@/data/site";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/90 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <Link
          href={siteConfig.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-ember to-blaze px-4 py-4 text-sm font-extrabold text-white shadow-glow"
        >
          <PhoneCall className="h-5 w-5" />
          Hemen Ara
        </Link>
        <Link
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-4 text-sm font-extrabold text-white"
        >
          <MessageCircleMore className="h-5 w-5 text-emerald-400" />
          WhatsApp'tan Ulaş
        </Link>
      </div>
    </div>
  );
}

