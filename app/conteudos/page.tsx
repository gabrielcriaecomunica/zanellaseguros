import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllArtigos } from "@/lib/artigos";
import { SectionWaves } from "@/components/SectionWaves";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Conteúdos sobre Seguros e Planejamento",
  description:
    "Artigos educativos da Zanella Seguros para ajudar você a entender modalidades, revisar apólices e tomar decisões claras de proteção.",
};

export default function ConteudosPage() {
  const artigos = getAllArtigos();

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
            Conteúdos educativos
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-branco sm:text-5xl">
            Informação simples para decisões mais tranquilas
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-light italic text-creme/90">
            Guias práticos sobre como funcionam os seguros no cotidiano, sem
            excesso de termos técnicos.
          </p>
        </div>
      </section>

      <section className="bg-branco py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {artigos.map((artigo) => (
              <article
                key={artigo.slug}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-borda-sutil bg-creme-suave transition-shadow hover:shadow-sm"
              >
                <PhotoPlaceholder
                  label={artigo.coverPlaceholder}
                  aspect="16/9"
                  className="rounded-none border-0 border-b border-borda-sutil"
                />
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-verde-profundo uppercase">
                      <span>{artigo.category}</span>
                      <span className="font-normal text-texto-suave normal-case">
                        {artigo.readingTime}
                      </span>
                    </div>
                    <h2 className="mt-3 text-xl font-bold text-verde-profundo">
                      <Link
                        href={`/conteudos/${artigo.slug}`}
                        className="hover:underline"
                      >
                        {artigo.title}
                      </Link>
                    </h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-texto-suave">
                      {artigo.description}
                    </p>
                  </div>

                  <div className="mt-6">
                    <Link
                      href={`/conteudos/${artigo.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-verde-profundo"
                    >
                      <span>Ler artigo completo</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ficou com alguma dúvida depois da leitura?"
        subtitle="Fale com um de nossos corretores para conversar sobre o seu caso específico."
      />
    </>
  );
}
