"use client";

import React, { useState } from "react";
import {
  PERFIS_SEGURO,
  getModalidadesByPerfil,
  type PerfilSeguro,
} from "@/content/seguros";
import { InsuranceCard } from "@/components/InsuranceCard";

export function SegurosTabs() {
  const [ativo, setAtivo] = useState<PerfilSeguro>("familia");
  const perfilAtual = PERFIS_SEGURO.find((p) => p.id === ativo)!;
  const modalidades = getModalidadesByPerfil(ativo);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Modalidades de seguro por perfil"
        className="flex flex-wrap gap-2 border-b border-borda-sutil pb-4"
      >
        {PERFIS_SEGURO.map((perfil) => {
          const isSelected = perfil.id === ativo;
          return (
            <button
              key={perfil.id}
              type="button"
              role="tab"
              id={`tab-${perfil.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${perfil.id}`}
              onClick={() => setAtivo(perfil.id)}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                isSelected
                  ? "bg-verde-profundo text-branco"
                  : "border border-borda-sutil bg-branco text-texto-suave hover:border-verde-profundo/40 hover:text-verde-profundo"
              }`}
            >
              {perfil.id === "planejamento" ? "Consórcios" : perfil.titulo}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${ativo}`}
        aria-labelledby={`tab-${ativo}`}
        className="mt-6"
      >
        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-texto-suave sm:text-base lg:hidden">
          {perfilAtual.subtitulo}
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modalidades.map((item) => (
            <InsuranceCard
              key={item.slug}
              modalidade={item}
              hideCategoryOnDesktop
            />
          ))}
        </div>
      </div>
    </div>
  );
}
