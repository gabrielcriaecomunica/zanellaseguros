import React from "react";
import { ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";
import { EMPRESA, buildWhatsAppUrl } from "@/content/empresa";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function LocalizacaoSection() {
  return (
    <section
      aria-labelledby="localizacao-heading"
      className="bg-branco py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <RevealOnScroll>
              <span className="text-xs font-semibold tracking-widest text-verde-profundo uppercase">
                Onde estamos
              </span>
              <h2
                id="localizacao-heading"
                className="mt-2 text-3xl font-bold tracking-tight text-verde-profundo sm:text-4xl"
              >
                Visite nosso escritório em Itajaí
              </h2>
              <p className="mt-3 text-base leading-relaxed text-texto-suave">
                Atendimento presencial na Vila Operária, em Itajaí/SC, além de
                atendimento próximo para Balneário Camboriú e clientes em todo o
                Brasil.
              </p>

              <ul className="mt-6 space-y-4 text-sm text-texto-suave">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-verde-profundo"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-verde-profundo">Endereço</p>
                    <p>{EMPRESA.endereco.completo}</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-verde-profundo"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-verde-profundo">Telefone</p>
                    <a
                      href={EMPRESA.telefoneHref}
                      className="underline decoration-verde-profundo/35 underline-offset-4 hover:text-verde-profundo"
                    >
                      {EMPRESA.telefone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MessageCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-verde-profundo"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-verde-profundo">WhatsApp</p>
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-verde-profundo/35 underline-offset-4 hover:text-verde-profundo"
                    >
                      {EMPRESA.whatsappDisplay}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-7">
                <a
                  href={EMPRESA.endereco.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-verde-profundo/30 bg-creme-suave px-5 py-3 text-sm font-semibold text-verde-profundo transition-colors hover:bg-creme"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-borda-sutil bg-creme-suave shadow-xs">
              <iframe
                title="Mapa com alfinete indicando a localização da Zanella Seguros em Itajaí/SC"
                src={EMPRESA.endereco.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0 sm:h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
