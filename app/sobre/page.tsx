import React from "react";
import type { Metadata } from "next";
import { Compass, HeartHandshake, ShieldCheck } from "lucide-react";
import { EMPRESA } from "@/content/empresa";
import { SectionWaves } from "@/components/SectionWaves";
import { Timeline } from "@/components/Timeline";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { CorretorCard } from "@/components/CorretorCard";
import { SeguradorasSection } from "@/components/SeguradorasSection";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Sobre a Zanella Seguros",
  description:
    "Conheça a história da Zanella Seguros, corretora fundada em 1991 em Itajaí/SC. Duas gerações da mesma família atuando com independência pela rede Lojacorr.",
};

export default function SobrePage() {
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
            Sobre a corretora
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-branco sm:text-5xl">
            35 anos construindo confiança entre gerações em Itajaí
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-light italic text-creme/90">
            Desde 1991 ao lado de famílias e empresas de Itajaí, Balneário
            Camboriú e de todo o Brasil.
          </p>
        </div>
      </section>

      <section className="bg-branco py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-5 lg:col-span-6">
            <span className="text-xs font-semibold tracking-widest text-verde-profundo uppercase">
              Nossa história
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-verde-profundo">
              De corretora familiar a parceira estratégica da sua tranquilidade
            </h2>
            <p className="text-base leading-relaxed text-texto-suave">
              A Zanella Seguros nasceu em 1991 em Itajaí, Santa Catarina, com um
              princípio simples: seguro só faz sentido quando existe confiança
              verdadeira entre quem orienta e quem contrata.
            </p>
            <p className="text-base leading-relaxed text-texto-suave">
              Em 2010, a corretora ampliou sua atuação ao passar a trabalhar com
              todos os tipos de seguros e consórcios em parceria com as
              principais seguradoras do país por meio da {EMPRESA.redeParceira},
              uma rede de corretoras independentes. Logo depois, em 2011, Amanda
              Zanella começou jovem na empresa tendo o pai, Valcir Zanella, como
              mentor, consolidando a atuação de duas gerações na corretagem.
            </p>
            <p className="text-base leading-relaxed text-texto-suave">
              Em 2026, ao completar 35 anos, seguimos com o mesmo compromisso de
              atendimento próximo no endereço da Vila Operária, atendendo
              Itajaí, Balneário Camboriú e clientes em diferentes regiões do
              Brasil.
            </p>
          </div>

          <div className="lg:col-span-6">
            <PhotoPlaceholder
              label="[FOTO REAL: escritório da Zanella Seguros em Itajaí, espaço de atendimento e equipe]"
              aspect="4/3"
            />
          </div>
        </div>
      </section>

      <section className="bg-creme py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold tracking-widest text-verde-profundo uppercase">
              Linha do tempo
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-verde-profundo sm:text-4xl">
              Marcos da nossa trajetória
            </h2>
          </div>
          <Timeline variant="full" />
        </div>
      </section>

      <section className="bg-branco py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <RevealOnScroll>
              <article className="h-full rounded-2xl border border-borda-sutil bg-creme-suave p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-verde-profundo text-dourado-areia">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-verde-profundo">
                  Nossa missão
                </h2>
                <p className="mt-3 text-base leading-relaxed text-texto-suave">
                  {EMPRESA.missao}
                </p>
              </article>
            </RevealOnScroll>

            <RevealOnScroll delayMs={80}>
              <article className="h-full rounded-2xl border border-borda-sutil bg-creme-suave p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-verde-profundo text-dourado-areia">
                  <Compass className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-verde-profundo">
                  Nossa visão
                </h2>
                <p className="mt-3 text-base leading-relaxed text-texto-suave">
                  {EMPRESA.visao}
                </p>
              </article>
            </RevealOnScroll>
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight text-verde-profundo sm:text-3xl">
              Nossos valores
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {EMPRESA.valores.map((valor, index) => (
                <RevealOnScroll key={valor.titulo} delayMs={index * 50}>
                  <article className="flex h-full flex-col rounded-xl border border-borda-sutil bg-branco p-6">
                    <h3 className="text-lg font-bold text-verde-profundo">
                      {valor.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-texto-suave">
                      {valor.descricao}
                    </p>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-verde-profundo py-16 text-branco sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 rounded-2xl border border-dourado-areia/30 bg-verde-escuro/60 p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-verde-profundo text-dourado-areia ring-1 ring-dourado-areia/40">
              <HeartHandshake className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-branco sm:text-3xl">
              O que significa ser uma corretora independente
            </h2>
            <p className="text-base leading-relaxed text-creme/90">
              Por atuarmos de forma independente e integrarmos a rede{" "}
              {EMPRESA.redeParceira} desde {EMPRESA.anoLojacorr}, não representamos
              uma única seguradora. Nosso compromisso está do lado do cliente:
              ouvimos sua necessidade, comparamos condições entre diferentes
              companhias e orientamos com clareza qual produto atende melhor ao
              que você quer proteger.
            </p>
          </div>
        </div>
      </section>

      <SeguradorasSection variant="white" />

      <section className="bg-creme-suave py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-verde-profundo uppercase">
              Liderança e atendimento
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-verde-profundo sm:text-4xl">
              Valcir e Amanda Zanella
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {EMPRESA.corretores.map((corretor) => (
              <CorretorCard key={corretor.nome} {...corretor} tone="white" />
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Quer conversar diretamente com a nossa equipe?" />
    </>
  );
}
