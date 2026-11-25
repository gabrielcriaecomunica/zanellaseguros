import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MODALIDADES_SEGURO, getModalidadeBySlug } from "@/content/seguros";
import { ModalidadeTemplate } from "@/components/ModalidadeTemplate";

interface ModalidadePageProps {
  params: Promise<{ modalidade: string }>;
}

export async function generateStaticParams() {
  return MODALIDADES_SEGURO.map((item) => ({
    modalidade: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: ModalidadePageProps): Promise<Metadata> {
  const { modalidade: slug } = await params;
  const item = getModalidadeBySlug(slug);
  if (!item) {
    return { title: "Modalidade não encontrada" };
  }
  return {
    title: item.nome,
    description: `${item.resumoCard} Atendimento consultivo da Zanella Seguros em Itajaí, Balneário Camboriú e todo o Brasil.`,
  };
}

export default async function ModalidadePage({ params }: ModalidadePageProps) {
  const { modalidade: slug } = await params;
  const item = getModalidadeBySlug(slug);

  if (!item) {
    notFound();
  }

  return <ModalidadeTemplate modalidade={item} />;
}
