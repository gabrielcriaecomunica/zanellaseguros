import React from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/content/empresa";

interface WhatsAppFloatingButtonProps {
  message?: string;
}

export function WhatsAppFloatingButton({
  message,
}: WhatsAppFloatingButtonProps) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com um corretor da Zanella Seguros pelo WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2.5 rounded-full bg-verde-profundo px-4 py-3 text-sm font-semibold text-branco shadow-lg ring-1 ring-dourado-areia/45 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-verde-escuro sm:right-6 sm:bottom-6 sm:px-5"
    >
      <MessageCircle
        className="h-5 w-5 text-dourado-areia"
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <span className="hidden sm:inline">Conversar com um corretor</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}
