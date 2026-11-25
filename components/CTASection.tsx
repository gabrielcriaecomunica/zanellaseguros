import React from "react";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { EMPRESA, buildWhatsAppUrl } from "@/content/empresa";
import { SectionWaves } from "@/components/SectionWaves";

const GOLD_BUTTON_CLASS =
  "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-dourado-areia px-6 py-3.5 text-sm font-bold text-verde-escuro transition-colors hover:bg-creme sm:w-auto";

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
            className={GOLD_BUTTON_CLASS}
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            <span>Conversar com um corretor</span>
          </a>
          <a href={EMPRESA.telefoneHref} className={GOLD_BUTTON_CLASS}>
            <Phone className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            <span>{EMPRESA.telefone}</span>
          </a>
          <Link href={secondaryHref} className={GOLD_BUTTON_CLASS}>
            <Mail className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            <span>{secondaryLabel}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
