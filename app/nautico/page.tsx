import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getModalidadeBySlug } from "@/content/seguros";
import { ModalidadeTemplate } from "@/components/ModalidadeTemplate";

export const metadata: Metadata = {
  title: "Seguro Náutico em Itajaí e Balneário Camboriú",
  description:
    "Proteção sob medida para lanchas, veleiros, iates e motos aquáticas no litoral catarinense e em todo o Brasil, com o atendimento próximo da Zanella Seguros.",
};

export default function NauticoPage() {
  const nautico = getModalidadeBySlug("nautico");
  if (!nautico) {
    notFound();
  }

  return <ModalidadeTemplate modalidade={nautico} isNauticoLanding />;
}
