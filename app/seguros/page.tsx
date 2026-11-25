import React from "react";
import type { Metadata } from "next";
import { PERFIS_SEGURO, getModalidadesByPerfil } from "@/content/seguros";
import { SectionWaves } from "@/components/SectionWaves";
import { InsuranceCard } from "@/components/InsuranceCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Seguros e Consórcios",
  description:
    "Conheça todas as modalidades de seguros e consórcios da Zanella Seguros: automóvel, residencial, vida, saúde, viagem, bike, empresarial, condomínio, RC profissional, cyber, garantia e náutico.",
};

export default function SegurosHubPage() {
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
            Soluções em proteção
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-branco sm:text-5xl">
            Seguros e consórcios para cada etapa da vida e do seu negócio
          </h1>
          <p className="mt-4 max-w-2xl text-lg font-light italic text-creme/90">
            Trabalhamos com todas as modalidades e com as principais seguradoras
            do país por meio da rede Lojacorr.
          </p>
        </div>
      </section>

      <section className="bg-branco py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {PERFIS_SEGURO.map((perfil) => {
            const lista = getModalidadesByPerfil(perfil.id);
            return (
              <div key={perfil.id} id={perfil.id} className="scroll-mt-24">
                <div className="mb-8 border-b border-borda-sutil pb-4">
                  <h2 className="text-2xl font-bold tracking-tight text-verde-profundo sm:text-3xl">
                    {perfil.titulo}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-texto-suave sm:text-base">
                    {perfil.subtitulo}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {lista.map((item) => (
                    <InsuranceCard key={item.slug} modalidade={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Não sabe por qual modalidade começar?"
        subtitle="Conte o que você deseja proteger hoje. Nossa equipe analisa seu cenário e explica as opções com tranquilidade."
      />
    </>
  );
}
