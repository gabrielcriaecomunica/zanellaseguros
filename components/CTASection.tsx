import React from "react";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { EMPRESA, buildWhatsAppUrl } from "@/content/empresa";
import { SectionWaves } from "@/components/SectionWaves";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function CTASection({
  title = "Vamos conversar sobre o que você quer proteger?",
  subtitle = "Sem pressa e sem fórmulas prontas. Conte o seu momento para Valcir, Amanda e nossa equipe para avaliarmos os caminhos com clareza.",
  whatsappMessage,
  secondaryHref = "/contato",
  secondaryLabel = "Enviar uma mensagem",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-verde-profundo py-16 text-branco sm:py-20">
      <SectionWaves
        variant="gold"
        position="footer"
        className="absolute inset-x-0 bottom-0 h-44 opacity-80"
      />
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-block text-xs font-semibold tracking-widest text-dourado-areia uppercase">
          Atendimento consultivo
        </span>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-branco sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base font-light italic text-creme/90 sm:text-lg">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={buildWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-dourado-areia px-6 py-3.5 text-sm font-bold text-verde-escuro transition-colors hover:bg-creme sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            <span>Conversar com um corretor</span>
          </a>
          <a
            href={EMPRESA.telefoneHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-dourado-areia/50 px-6 py-3.5 text-sm font-semibold text-branco transition-colors hover:bg-verde-medio sm:w-auto"
          >
            <Phone className="h-4 w-4 text-dourado-areia" strokeWidth={1.75} aria-hidden="true" />
            <span>{EMPRESA.telefone}</span>
          </a>
          <Link
            href={secondaryHref}
            className="inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-medium text-creme underline decoration-dourado-areia/60 underline-offset-4 transition-colors hover:text-branco sm:w-auto"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
