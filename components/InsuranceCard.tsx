import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ModalidadeSeguro } from "@/content/seguros";
import { ModalidadeIcon } from "@/components/ModalidadeIcon";

interface InsuranceCardProps {
  modalidade: ModalidadeSeguro;
  tone?: "light" | "cream";
}

export function InsuranceCard({
  modalidade,
  tone = "light",
}: InsuranceCardProps) {
  return (
    <Link
      href={
        modalidade.slug === "nautico"
          ? "/nautico"
          : `/seguros/${modalidade.slug}`
      }
      className={`group flex h-full flex-col justify-between rounded-xl border border-borda-sutil p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-verde-profundo/35 hover:shadow-sm ${
        tone === "cream" ? "bg-creme-suave" : "bg-branco"
      }`}
    >
      <div>
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-borda-sutil bg-creme text-verde-profundo transition-colors group-hover:bg-verde-profundo group-hover:text-branco">
            <ModalidadeIcon name={modalidade.icone} className="h-5 w-5" />
          </span>
          <span className="text-[11px] font-semibold tracking-wider text-texto-suave uppercase">
            {modalidade.perfilLabel}
          </span>
        </div>
        <h3 className="text-lg font-bold text-verde-profundo">
          {modalidade.nome}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-texto-suave">
          {modalidade.resumoCard}
        </p>
      </div>
      <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-verde-profundo">
        <span>Entender como funciona</span>
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={1.75}
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
