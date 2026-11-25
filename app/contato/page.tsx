import React from "react";
import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { EMPRESA, buildWhatsAppUrl } from "@/content/empresa";
import { SectionWaves } from "@/components/SectionWaves";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato e Localização em Itajaí",
  description:
    "Fale com a Zanella Seguros pelo WhatsApp (47) 99983-8315, telefone (47) 3348-4358 ou visite nosso escritório na Vila Operária, Itajaí/SC.",
};

export default function ContatoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-verde-profundo py-16 text-branco sm:py-24">
        <SectionWaves
          variant="gold"
          position="hero"
          className="absolute inset-x-0 bottom-0 h-44 opacity-80"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-dourado-areia/45 px-4 py-1 text-xs font-semibold tracking-widest text-dourado-areia uppercase">
            Atendimento humano
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-branco sm:text-5xl">
            Vamos conversar com calma sobre o que você precisa
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-light italic text-creme/90">
            Atendimento presencial em Itajaí e atendimento digital para
            Balneário Camboriú e todo o Brasil.
          </p>
        </div>
      </section>

      <section className="bg-creme-suave py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-borda-sutil bg-branco p-6 sm:p-8">
              <h2 className="text-xl font-bold text-verde-profundo">
                Canais diretos
              </h2>

              <ul className="mt-5 space-y-4 text-sm text-texto-suave">
                <li className="flex items-start gap-3">
                  <MessageCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-verde-profundo"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-verde-profundo">WhatsApp</p>
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-verde-profundo/40 underline-offset-4 hover:text-verde-profundo"
                    >
                      {EMPRESA.whatsappDisplay}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Phone
                    className="mt-0.5 h-5 w-5 shrink-0 text-verde-profundo"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-verde-profundo">Telefone</p>
                    <a
                      href={EMPRESA.telefoneHref}
                      className="underline decoration-verde-profundo/40 underline-offset-4 hover:text-verde-profundo"
                    >
                      {EMPRESA.telefone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail
                    className="mt-0.5 h-5 w-5 shrink-0 text-verde-profundo"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-verde-profundo">E-mail</p>
                    <a
                      href={`mailto:${EMPRESA.email}`}
                      className="break-all underline decoration-verde-profundo/40 underline-offset-4 hover:text-verde-profundo"
                    >
                      {EMPRESA.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-verde-profundo"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-verde-profundo">
                      Endereço do escritório
                    </p>
                    <p>{EMPRESA.endereco.completo}</p>
                    <a
                      href={EMPRESA.endereco.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-xs font-semibold text-verde-profundo underline underline-offset-2"
                    >
                      Abrir no Google Maps
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Clock
                    className="mt-0.5 h-5 w-5 shrink-0 text-verde-profundo"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-verde-profundo">
                      Horário de atendimento
                    </p>
                    <p>{EMPRESA.horarioAtendimento}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-borda-sutil bg-branco">
              <iframe
                title="Mapa da localização da Zanella Seguros em Itajaí/SC"
                src={EMPRESA.endereco.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
