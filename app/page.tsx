import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Anchor,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Quote,
} from "lucide-react";
import { EMPRESA, buildWhatsAppUrl } from "@/content/empresa";
import { SectionWaves } from "@/components/SectionWaves";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SegurosTabs } from "@/components/SegurosTabs";
import { Timeline } from "@/components/Timeline";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { CorretorCard } from "@/components/CorretorCard";
import { SeguradorasSection } from "@/components/SeguradorasSection";
import { LocalizacaoSection } from "@/components/LocalizacaoSection";
import { CTASection } from "@/components/CTASection";

const PASSOS_CONSULTIVOS = [
  {
    numero: "01",
    titulo: "Conversa para entender o seu momento",
    descricao:
      "Antes de falar de produto ou valor, ouvimos sua rotina, seus planos e o que realmente merece cuidado hoje.",
  },
  {
    numero: "02",
    titulo: "Análise e comparação entre seguradoras",
    descricao:
      "Como corretora independente da rede Lojacorr, comparamos alternativas das principais seguradoras do país sem empurrar um único produto.",
  },
  {
    numero: "03",
    titulo: "Orientação clara, sem jargões",
    descricao:
      "Explicamos coberturas, franquias, limites e ressalvas de forma direta para você decidir com segurança.",
  },
  {
    numero: "04",
    titulo: "Acompanhamento depois da contratação",
    descricao:
      "O relacionamento continua durante toda a vigência para revisar apólices, tirar dúvidas e adaptar proteções quando sua vida ou empresa mudam.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative flex min-h-[540px] items-center overflow-hidden bg-verde-escuro text-branco sm:min-h-[600px] lg:min-h-[640px]">
        <Image
          src="/images/hero-familia-zanella.jpg"
          alt="Família brasileira reunida na varanda de casa no litoral ao entardecer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[74%_center] sm:object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-verde-escuro/50 sm:bg-transparent sm:bg-gradient-to-r sm:from-verde-escuro/95 sm:via-verde-profundo/75 sm:to-verde-profundo/20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-verde-escuro/70 via-transparent to-verde-escuro/30 sm:hidden"
        />

        <SectionWaves
          variant="gold"
          position="hero"
          className="absolute inset-x-0 bottom-0 z-10 h-44 opacity-85 sm:h-56"
        />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-dourado-areia/55 bg-verde-escuro/75 px-4 py-1.5 text-xs font-semibold tracking-wider text-dourado-areia uppercase backdrop-blur-xs">
              {EMPRESA.frasesMarca.heroEtiqueta}
            </span>

            <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight text-branco sm:text-5xl lg:text-[3.35rem]">
              {EMPRESA.frasesMarca.heroTitulo}
            </h1>

            <p className="mt-5 max-w-xl text-lg font-light italic text-creme sm:text-xl">
              {EMPRESA.frasesMarca.heroApoio}
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-creme/90 sm:text-base">
              Atendimento humano e independente em Itajaí, Balneário Camboriú e
              todo o Brasil. Conectamos duas gerações da mesma família com a
              força das principais seguradoras do país.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-dourado-areia px-6 py-3.5 text-sm font-bold text-verde-escuro shadow-sm transition-colors hover:bg-creme"
              >
                <MessageCircle
                  className="h-4 w-4"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span>Conversar com um corretor</span>
              </a>
              <Link
                href="/seguros"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-dourado-areia/65 bg-verde-escuro/55 px-6 py-3.5 text-sm font-semibold text-branco backdrop-blur-xs transition-colors hover:bg-verde-profundo"
              >
                <span>Conhecer os seguros</span>
                <ArrowRight
                  className="h-4 w-4 text-dourado-areia"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAIXA DE CONFIANÇA */}
      <section
        aria-label="Diferenciais de confiança da Zanella Seguros"
        className="border-b border-borda-sutil bg-creme"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-7 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-verde-profundo"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <div>
              <p className="text-base font-bold text-verde-profundo">35 anos</p>
              <p className="text-xs text-texto-suave">
                De história desde 1991 em Itajaí/SC
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-verde-profundo"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <div>
              <p className="text-base font-bold text-verde-profundo">
                Duas gerações
              </p>
              <p className="text-xs text-texto-suave">
                Valcir e Amanda juntos na corretagem
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-verde-profundo"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <div>
              <p className="text-base font-bold text-verde-profundo">
                Rede Lojacorr
              </p>
              <p className="text-xs text-texto-suave">
                Corretora independente desde 2010
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-verde-profundo"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <div>
              <p className="text-base font-bold text-verde-profundo">
                Todo o Brasil
              </p>
              <p className="text-xs text-texto-suave">
                Raízes em Itajaí e Balneário Camboriú
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ATENDIMENTO CONSULTIVO */}
      <section className="relative bg-branco py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="relative max-w-3xl">
              <SectionWaves
                variant="green"
                position="backdrop"
                className="pointer-events-none absolute -top-6 -left-6 h-28 w-72 opacity-60"
              />
              <span className="relative text-xs font-semibold tracking-widest text-verde-profundo uppercase">
                Nosso jeito de trabalhar
              </span>
              <h2 className="relative mt-2 text-3xl font-bold tracking-tight text-verde-profundo sm:text-4xl">
                {EMPRESA.frasesMarca.fraseOuvir}
              </h2>
              <p className="relative mt-3 text-base font-light italic text-texto-suave sm:text-lg">
                {EMPRESA.frasesMarca.fraseFuturo}
              </p>
            </div>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PASSOS_CONSULTIVOS.map((passo, index) => (
              <RevealOnScroll key={passo.numero} delayMs={index * 70}>
                <article className="flex h-full flex-col rounded-xl border border-borda-sutil bg-creme-suave p-6">
                  <span className="text-xs font-bold tracking-widest text-verde-profundo">
                    {passo.numero}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-verde-profundo">
                    {passo.titulo}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-texto-suave">
                    {passo.descricao}
                  </p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <SectionWaves variant="green" position="divider" />

      <SeguradorasSection variant="cream" />

      {/* 4. SEGUROS POR PERFIL */}
      <section className="bg-creme-suave py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold tracking-widest text-verde-profundo uppercase">
                  Soluções sob medida
                </span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-verde-profundo sm:text-4xl">
                  Proteção pensada para cada momento da vida e dos negócios
                </h2>
              </div>
              <Link
                href="/seguros"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-verde-profundo underline decoration-verde-profundo/40 underline-offset-4 hover:decoration-verde-profundo"
              >
                <span>Explorar página completa de seguros</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </RevealOnScroll>

          <SegurosTabs />
        </div>
      </section>

      {/* 5. DESTAQUE NÁUTICO */}
      <section className="relative overflow-hidden bg-verde-profundo py-16 text-branco sm:py-24">
        <SectionWaves
          variant="gold"
          position="hero"
          className="absolute inset-x-0 bottom-0 h-52 opacity-80"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-dourado-areia/45 px-3.5 py-1 text-xs font-semibold tracking-widest text-dourado-areia uppercase">
                <Anchor className="h-3.5 w-3.5" aria-hidden="true" />
                <span>SEGURO NÁUTICO</span>
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-branco sm:text-4xl">
                Da marina à travessia, atenção dedicada a quem vive o mar de
                Itajaí e Balneário Camboriú
              </h2>

              <p className="mt-4 text-base font-light italic text-creme/95 sm:text-lg">
                Lanchas, veleiros, iates e motos aquáticas com orientação de
                quem conhece a cultura náutica do litoral catarinense.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-creme/85 sm:text-base">
                Estar em um dos principais polos náuticos do Brasil nos permite
                entender de perto a rotina das marinas, dos passeios de fim de
                semana e dos cuidados que cada embarcação pede, conforme as
                condições contratadas.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/nautico"
                  className="inline-flex items-center gap-2 rounded-lg bg-dourado-areia px-6 py-3 text-sm font-bold text-verde-escuro transition-colors hover:bg-creme"
                >
                  <span>Conhecer Seguro Náutico</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={buildWhatsAppUrl(
                    "Olá! Vim pelo site da Zanella Seguros e quero conversar sobre Seguro Náutico."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-dourado-areia/55 px-6 py-3 text-sm font-semibold text-branco transition-colors hover:bg-verde-medio"
                >
                  <span>Falar sobre sua embarcação</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <PhotoPlaceholder
                label="[FOTO REAL: marina de Itajaí ao entardecer com embarcações atracadas e água calma]"
                aspect="16/9"
                tone="dark"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. HISTÓRIA + MINI LINHA DO TEMPO */}
      <section className="bg-creme py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <RevealOnScroll>
                <span className="text-xs font-semibold tracking-widest text-verde-profundo uppercase">
                  Tradição e continuidade
                </span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-verde-profundo sm:text-4xl">
                  35 anos protegendo o que importa
                </h2>
                <p className="mt-4 text-base leading-relaxed text-texto-suave">
                  Desde 1991, a Zanella Seguros acompanha famílias e empresas em
                  Itajaí e Balneário Camboriú, unindo proximidade humana e a
                  estrutura da rede {EMPRESA.redeParceira} para atender clientes
                  em todo o Brasil.
                </p>
                <div className="mt-6">
                  <PhotoPlaceholder
                    label="[FOTO REAL: fachada ou espaço de atendimento do escritório da Zanella Seguros na Vila Operária, Itajaí]"
                    aspect="4/3"
                  />
                </div>
                <div className="mt-6">
                  <Link
                    href="/sobre"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-verde-profundo underline decoration-verde-profundo/40 underline-offset-4 hover:decoration-verde-profundo"
                  >
                    <span>Conhecer nossa história completa</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-7">
              <Timeline variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. CORRETORES (VALCIR E AMANDA) */}
      <section className="bg-branco py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold tracking-widest text-verde-profundo uppercase">
                  Quem atende você
                </span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-verde-profundo sm:text-4xl">
                  Duas gerações dedicadas ao mesmo cuidado
                </h2>
              </div>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 rounded-lg border border-verde-profundo/25 px-5 py-2.5 text-sm font-semibold text-verde-profundo transition-colors hover:bg-creme"
              >
                <span>Conhecer a equipe na página Sobre</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </RevealOnScroll>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {EMPRESA.corretores.map((corretor, index) => (
              <RevealOnScroll key={corretor.nome} delayMs={index * 80}>
                <CorretorCard {...corretor} tone="cream" />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <SectionWaves variant="green" position="divider" />

      {/* 8. DEPOIMENTOS (PLACEHOLDERS MARCADOS) */}
      <section className="bg-creme-suave py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest text-verde-profundo uppercase">
                Relacionamento de longo prazo
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-verde-profundo sm:text-4xl">
                O que quem caminha conosco costuma compartilhar
              </h2>
            </div>
          </RevealOnScroll>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {EMPRESA.depoimentosPlaceholders.map((dep, index) => (
              <RevealOnScroll key={dep.id} delayMs={index * 70}>
                <figure className="flex h-full flex-col justify-between rounded-xl border border-dashed border-verde-profundo/30 bg-branco p-6">
                  <div>
                    <Quote
                      className="h-6 w-6 text-verde-profundo/50"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <blockquote className="mt-4 text-sm leading-relaxed text-texto-suave">
                      {dep.texto}
                    </blockquote>
                  </div>
                  <figcaption className="mt-6 border-t border-borda-sutil pt-4">
                    <p className="text-sm font-bold text-verde-profundo">
                      {dep.autor}
                    </p>
                    <p className="text-xs text-texto-suave">{dep.contexto}</p>
                  </figcaption>
                </figure>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LOCALIZAÇÃO NO GOOGLE MAPS */}
      <LocalizacaoSection />

      {/* 10. CTA FINAL */}
      <CTASection />
    </>
  );
}
