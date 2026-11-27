import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  FileSearch,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { EMPRESA, buildWhatsAppUrl } from "@/content/empresa";
import { getModalidadesByPerfil } from "@/content/seguros";
import { SectionWaves } from "@/components/SectionWaves";
import { InsuranceCard } from "@/components/InsuranceCard";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Seguros para Empresas",
  description:
    "Análise de riscos, revisão de apólices e soluções empresariais da Zanella Seguros para comércios, serviços, condomínios, indústrias e profissionais em Itajaí, Balneário Camboriú e todo o Brasil.",
};

const PILARES_EMPRESA = [
  {
    icon: FileSearch,
    titulo: "Análise de riscos e contexto operacional",
    descricao:
      "Olhamos para a rotina real do seu negócio: estoque, equipamentos, contratos com clientes, dependência digital e responsabilidades de gestores.",
  },
  {
    icon: ClipboardCheck,
    titulo: "Revisão técnica de apólices vigentes",
    descricao:
      "Avaliamos contratos já existentes para identificar lacunas de cobertura, valores defasados após reformas ou sobreposições desnecessárias.",
  },
  {
    icon: ShieldCheck,
    titulo: "Independência para comparar seguradoras",
    descricao:
      "Por meio da rede Lojacorr, estruturamos alternativas com as principais seguradoras do país conforme o porte e o setor da empresa.",
  },
];

export default function EmpresasPage() {
  const modalidadesEmpresa = getModalidadesByPerfil("empresa");

  return (
    <>
      <section className="relative overflow-hidden bg-verde-profundo py-16 text-branco sm:py-24">
        <SectionWaves
          variant="gold"
          position="hero"
          className="absolute inset-x-0 bottom-0 h-48 opacity-85"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-dourado-areia/45 bg-verde-escuro/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-dourado-areia uppercase">
                <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Para empresas</span>
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-branco sm:text-5xl">
                Proteção estruturada para a continuidade do seu negócio
              </h1>
              <p className="mt-4 max-w-2xl text-lg font-light italic text-creme/95">
                Da operação comercial e portuária de Itajaí a escritórios e
                condomínios em todo o Brasil, ajudamos sua empresa a tomar
                decisões de proteção com base técnica e clareza.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={buildWhatsAppUrl(
                    "Olá! Vim pelo site da Zanella Seguros e quero conversar sobre seguros para minha empresa."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-dourado-areia px-6 py-3.5 text-sm font-bold text-verde-escuro transition-colors hover:bg-creme"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  <span>Revisar seguros da empresa</span>
                </a>
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 rounded-lg border border-dourado-areia/50 px-6 py-3.5 text-sm font-semibold text-branco transition-colors hover:bg-verde-medio"
                >
                  <span>Agendar uma conversa</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-dourado-areia/30 bg-verde-escuro shadow-xl">
                <Image
                  src="/images/empresas-reuniao-itajai.jpg"
                  alt="Reunião consultiva entre corretor e empresários em escritório com vista para a área portuária de Itajaí"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-creme py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-verde-profundo uppercase">
              Atuação empresarial
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-verde-profundo">
              Como apoiamos sócios, gestores e síndicos
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PILARES_EMPRESA.map((pilar) => {
              const Icon = pilar.icon;
              return (
                <article
                  key={pilar.titulo}
                  className="rounded-xl border border-borda-sutil bg-branco p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-creme text-verde-profundo">
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-verde-profundo">
                    {pilar.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-texto-suave">
                    {pilar.descricao}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-branco py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-verde-profundo">
              Modalidades para empresas e condomínios
            </h2>
            <p className="mt-2 text-base text-texto-suave">
              As coberturas variam conforme o produto, a seguradora e as
              condições contratadas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modalidadesEmpresa.map((item) => (
              <InsuranceCard key={item.slug} modalidade={item} />
            ))}

            <article className="flex h-full flex-col justify-between rounded-xl border border-dashed border-verde-profundo/35 bg-creme-suave p-6">
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-verde-profundo uppercase">
                  Benefícios para equipes
                </span>
                <h3 className="mt-3 text-lg font-bold text-verde-profundo">
                  Vida em Grupo e Saúde Empresarial
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-texto-suave">
                  Soluções voltadas ao cuidado com colaboradores e sócios.{" "}
                  <span className="font-semibold text-verde-profundo">
                    [CONFIRMAR COM A ZANELLA: detalhamento de oferta de Vida em
                    Grupo e Saúde Empresarial]
                  </span>
                </p>
              </div>
              <div className="mt-5">
                <a
                  href={buildWhatsAppUrl(
                    "Olá! Vim pelo site da Zanella Seguros e quero conversar sobre benefícios e Vida em Grupo para minha empresa."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-verde-profundo"
                >
                  <span>Consultar com um corretor</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>

          <div className="mt-14 rounded-2xl border border-borda-sutil bg-creme p-6 sm:p-8">
            <p className="text-sm leading-relaxed text-texto-suave">
              <strong className="text-verde-profundo">
                Espaço reservado para empresas atendidas:
              </strong>{" "}
              [CONFIRMAR COM A ZANELLA: autorização formal e logotipos de
              clientes empresariais para exibição institucional]. Enquanto essa
              confirmação não ocorre, priorizamos apresentar nossas soluções com
              transparência e foco técnico, contando com a estrutura da rede{" "}
              {EMPRESA.redeParceira}.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Quer revisar as apólices da sua empresa?"
        subtitle="Conversamos com você sobre os riscos reais da sua operação e comparamos as opções do mercado."
        whatsappMessage="Olá! Vim pelo site da Zanella Seguros e quero revisar os seguros da minha empresa."
      />
    </>
  );
}
