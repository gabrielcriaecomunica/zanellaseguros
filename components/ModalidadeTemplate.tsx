import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageCircle, Shield } from "lucide-react";
import { buildWhatsAppUrl } from "@/content/empresa";
import { getModalidadeBySlug, type ModalidadeSeguro } from "@/content/seguros";
import { SectionWaves } from "@/components/SectionWaves";
import { ModalidadeIcon } from "@/components/ModalidadeIcon";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { FAQ } from "@/components/FAQ";
import { InsuranceCard } from "@/components/InsuranceCard";
import { CTASection } from "@/components/CTASection";

interface ModalidadeTemplateProps {
  modalidade: ModalidadeSeguro;
  isNauticoLanding?: boolean;
}

export function ModalidadeTemplate({
  modalidade,
  isNauticoLanding = false,
}: ModalidadeTemplateProps) {
  const relacionadas = modalidade.relacionadas
    .map((slug) => getModalidadeBySlug(slug))
    .filter((item): item is ModalidadeSeguro => Boolean(item));
  const isNautico = isNauticoLanding || modalidade.slug === "nautico";

  return (
    <>
      <section className="relative overflow-hidden bg-verde-profundo py-16 text-branco sm:py-24">
        {isNautico && (
          <>
            <Image
              src="/images/marina-itajai-entardecer.jpg"
              alt="Marina de Itajaí ao entardecer com lanchas e veleiros atracados em águas calmas"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[70%_center] sm:object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-verde-escuro/55 sm:bg-transparent sm:bg-gradient-to-r sm:from-verde-escuro/95 sm:via-verde-profundo/78 sm:to-verde-profundo/20"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-verde-escuro/70 via-transparent to-verde-escuro/30 sm:hidden"
            />
          </>
        )}

        <SectionWaves
          variant="gold"
          position="hero"
          className="absolute inset-x-0 bottom-0 z-10 h-48 opacity-85"
        />

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/seguros"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-dourado-areia uppercase hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Todas as modalidades</span>
          </Link>

          <div
            className={`mt-6 ${
              isNautico
                ? "max-w-2xl"
                : "grid grid-cols-1 items-center gap-10 lg:grid-cols-12"
            }`}
          >
            <div className={isNautico ? "" : "lg:col-span-7"}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-dourado-areia/45 bg-verde-escuro/70 px-4 py-1.5 text-xs font-semibold tracking-wider text-dourado-areia uppercase backdrop-blur-xs">
                <ModalidadeIcon
                  name={modalidade.icone}
                  className="h-4 w-4 text-dourado-areia"
                />
                <span>{modalidade.perfilLabel}</span>
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight text-branco sm:text-5xl">
                {modalidade.nome}
              </h1>

              <p className="mt-4 max-w-2xl text-lg font-light italic text-creme">
                {modalidade.subtitulo}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-creme/90">
                {modalidade.aberturaCotidiano}
              </p>

              {isNauticoLanding && modalidade.destaqueLitoral && (
                <div className="mt-5 rounded-xl border border-dourado-areia/35 bg-verde-escuro/75 p-4 text-sm leading-relaxed text-creme backdrop-blur-xs">
                  {modalidade.destaqueLitoral}
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={buildWhatsAppUrl(modalidade.whatsappMensagem)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-dourado-areia px-6 py-3.5 text-sm font-bold text-verde-escuro transition-colors hover:bg-creme"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  <span>Conversar sobre {modalidade.nomeCurto}</span>
                </a>
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 rounded-lg border border-dourado-areia/65 bg-verde-escuro/55 px-6 py-3.5 text-sm font-semibold text-branco backdrop-blur-xs transition-colors hover:bg-verde-profundo"
                >
                  <span>Tirar uma dúvida</span>
                </Link>
              </div>
            </div>

            {!isNautico && (
              <div className="lg:col-span-5">
                <PhotoPlaceholder
                  label={modalidade.fotoPlaceholder}
                  aspect="4/3"
                  tone="dark"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-branco py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-borda-sutil bg-creme-suave p-7 sm:p-8">
            <h2 className="text-2xl font-bold text-verde-profundo">
              Para quem faz sentido
            </h2>
            <ul className="mt-5 space-y-3.5">
              {modalidade.paraQuem.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-verde-profundo"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-texto sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-borda-sutil bg-branco p-7 sm:p-8">
            <h2 className="text-2xl font-bold text-verde-profundo">
              O que costuma ser protegido
            </h2>
            <ul className="mt-5 space-y-3.5">
              {modalidade.oQueProtege.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Shield
                    className="mt-0.5 h-5 w-5 shrink-0 text-verde-profundo"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-texto sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg border border-borda-sutil bg-creme p-4 text-xs leading-relaxed font-medium text-verde-profundo">
              {modalidade.ressalvaCoberturas}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-creme py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest text-verde-profundo uppercase">
              Atendimento Zanella
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-verde-profundo sm:text-3xl">
              Por que contar com uma corretora nesta modalidade
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {modalidade.porqueCorretora.map((motivo, idx) => (
              <div
                key={motivo}
                className="rounded-xl border border-borda-sutil bg-branco p-6"
              >
                <span className="text-xs font-bold tracking-widest text-verde-profundo">
                  0{idx + 1}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-texto-suave sm:text-base">
                  {motivo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-branco py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FAQ items={modalidade.faqs} />
        </div>
      </section>

      {relacionadas.length > 0 && (
        <section className="border-t border-borda-sutil bg-creme-suave py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-verde-profundo">
              Modalidades relacionadas
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relacionadas.map((item) => (
                <InsuranceCard key={item.slug} modalidade={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Quer conversar sobre ${modalidade.nome}?`}
        subtitle="Nossa equipe compara seguradoras com você e responde às suas dúvidas sem pressa."
        whatsappMessage={modalidade.whatsappMensagem}
      />
    </>
  );
}
